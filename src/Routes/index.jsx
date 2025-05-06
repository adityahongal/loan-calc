import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
// import LandingPage from "../Pages/LandingPage";
// import ExchangeRateTable from "../Components/ExchangeRates/ExchangeRateTable";
import Loader from "../utils/Loader";

const LandingPage = lazy(() => import("../Pages/LandingPage"));
const ExchangeRateTable = lazy(() =>
  import("../Components/ExchangeRates/ExchangeRateTable")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="exchange-rate" element={<ExchangeRateTable />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
