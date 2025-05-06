import React, { useState, useEffect } from "react";
import { Container, Paper, Typography, Grid, Button } from "@mui/material";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import CurrencySelector from "./CurrencySelector";
import CalculatorForm from "./CalculatorForm";
import AmortizationTable from "./AmortizationTable";
import { useExchangeRates } from "../ExchangeRates/useExchangeRates";

const CURRENCIES = ["INR", "USD", "GBP", "EUR", "AED", "CAD", "JPY", "AUD"];

const EMICalculator = () => {
  const [form, setForm] = useState({ principal: "", interestRate: "", term: "" });
  const [emi, setEmi] = useState(0);
  const [baseAmortization, setBaseAmortization] = useState([]);
  const [displayedAmortization, setDisplayedAmortization] = useState([]);
  const [currency, setCurrency] = useState("INR");
  const [conversionRate, setConversionRate] = useState(1);

  // Exchange rate hook
  const { filteredRates } = useExchangeRates();

  // Set conversion rate when currency changes
  useEffect(() => {
    if (currency === "INR") {
      setConversionRate(1);
    } else {
          const rate = filteredRates.find(r => r.currency === currency);
          setConversionRate(rate ? rate.rate : 1);
        }
  }, [currency, filteredRates]);

  // Update amortization table display on conversion rate change
  useEffect(() => {
    setDisplayedAmortization(
      baseAmortization.map(row => ({
        ...row,
        emi: row.emi * conversionRate,
        principal: row.principal * conversionRate,
        interest: row.interest * conversionRate,
        balance: row.balance * conversionRate,
      }))
    );
  }, [conversionRate, baseAmortization]);

  // EMI calculation
  const calculateEMI = (principal, annualRate, years) => {
    const n = years * 12;
    const r = annualRate / 12 / 100;
    if (r === 0) {
      return principal / n;
    }
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  // Amortization schedule calculation
  const calculateAmortization = (principal, annualRate, years, emiValue) => {
    const n = years * 12;
    const r = annualRate / 12 / 100;
    let balance = principal;
    const schedule = [];
    for (let month = 1; month <= n; month++) {
      const interest = balance * r;
      const principalPaid = emiValue - interest;
      balance -= principalPaid;
      schedule.push({
        month,
        emi: emiValue,
        principal: principalPaid,
        interest,
        balance: balance > 0 ? balance : 0,
      });
    }
    return schedule;
  };

  // Form handlers
  const handleInputChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const principal = parseFloat(form.principal);
    const rate = parseFloat(form.interestRate);
    const term = parseFloat(form.term);
    if (!principal || !rate || !term) {
      return;
    }
    const emiValue = calculateEMI(principal, rate, term);
    setEmi(emiValue);
    const schedule = calculateAmortization(principal, rate, term, emiValue);
    setBaseAmortization(schedule);
  };

  const handleReset = () => {
    setForm({ principal: "", interestRate: "", term: "" });
    setEmi(0);
    setBaseAmortization([]);
    setDisplayedAmortization([]);
  };

 

  return (
    <Container maxWidth="md" className="py-8 px-2">
      <Paper elevation={3} className="p-6 mb-8">
        <Typography variant="h4" className="mb-6 pb-4 text-center">Loan EMI Calculator</Typography>
        <CalculatorForm values={form} onChange={handleInputChange} onSubmit={handleSubmit} onReset={handleReset} />
        <div className="my-8">
          <CurrencySelector currency={currency} setCurrency={setCurrency} currencies={CURRENCIES} />
        </div>
        {emi > 0 && (
          <div className="my-4">
            <Typography variant="h6">Monthly EMI: {currency} {(emi * conversionRate).toFixed(2)}</Typography>
          </div>
        )}
      </Paper>
      {displayedAmortization.length > 0 && (
        <Paper elevation={2} className="p-4 mb-8">
          <AmortizationTable data={displayedAmortization} currency={currency} />
        </Paper>
      )}
    </Container>
  );
};

export default EMICalculator;
