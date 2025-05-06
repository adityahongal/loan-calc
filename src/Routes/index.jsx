import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../Pages/LandingPage";
import ExchangeRateTable from "../Components/ExchangeRates/ExchangeRateTable";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="exchange-rate" element={<ExchangeRateTable />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
