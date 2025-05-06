import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
            <Layout />
        }>
        </Route>
    </Routes>
  );
};

export default AppRoutes;
