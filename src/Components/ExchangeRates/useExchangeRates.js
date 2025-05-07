// src/Components/ExchangeRates/useExchangeRates.js
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;


export const useExchangeRates = () => {
  const [rates, setRates] = useState([]);
  const [filteredRates, setFilteredRates] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRates = useCallback(async () => {
    setLoading(true);
    try {
      const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`;
      const { data } = await axios.get(url);

      const ratesArray = Object.entries(data.conversion_rates).map(([currency, rate]) => ({
        currency,
        rate,
      }));

      setRates(ratesArray);
      setFilteredRates(ratesArray);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch exchange rates.");
      setLoading(false);
    }
  }, [baseCurrency]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  useEffect(() => {
    const filtered = rates.filter(({ currency }) =>
      currency.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRates(filtered);
  }, [searchTerm, rates]);

  const sortRates = (order = "asc") => {
    const sorted = [...filteredRates].sort((a, b) =>
      order === "asc"
        ? a.currency.localeCompare(b.currency)
        : b.currency.localeCompare(a.currency)
    );
    setFilteredRates(sorted);
  };

  return {
    filteredRates,
    loading,
    error,
    sortRates,
    baseCurrency,
    setBaseCurrency,
    searchTerm,
    setSearchTerm,
  };
};
