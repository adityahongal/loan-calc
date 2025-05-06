import React from 'react';
import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet /> {/* This will render the child components like LandingPage or ExchangeRateTable */}
    </div>
  );
};

export default Layout;
