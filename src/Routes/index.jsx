import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
// import LandingPage from "../Pages/LandingPage";
// import ExchangeRateTable from "../Components/ExchangeRates/ExchangeRateTable";
import Loader from "../utils/Loader";
import ErrorBoundary from "../Components/ErrorBoundary";

const LandingPage = lazy(() => import("../Pages/LandingPage"));
const ExchangeRateTable = lazy(() =>
  import("../Components/ExchangeRates/ExchangeRateTable")
);
const NotFound = lazy(() => import("../Pages/NotFound"));

const AppRoutes = () => {
  return (
    <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="exchange-rate" element={<ExchangeRateTable />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </ErrorBoundary>

  );
};

export default AppRoutes;
