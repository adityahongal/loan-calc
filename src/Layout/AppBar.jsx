import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  NewspaperIcon,
  ChevronLeftIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Tooltip } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

const AppBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, toggleTheme } = useThemeMode();

  return (
    <>
      <header className="flex bg-brand dark:bg-brand-dark border-b border-[#D1D1D1] dark:border-[#3f3f46] items-center justify-center lg:h-28 md:h-12 transition-colors duration-300">
        <div className="flex w-full items-center justify-between lg:mx-20 md:mx-5 xs:mx-5 mx-5 my-5">
          <Link
            to="/"
            className="font-urbanist text-lg lg:text-3xl font-bold text-text-main dark:text-purple-dark hover:text-blue-500 dark:hover:text-purple-300 transition-colors md:text-base"
          >
            Loan Calculator
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex flex-row items-center gap-6 text-sm">
              <li className="flex items-center gap-2">
                <Link
                  to="/exchange-rate"
                  className="flex items-center gap-2 font-urbanist lg:text-2xl font-normal text-text-main dark:text-purple-dark hover:text-blue-500 dark:hover:text-purple-300 transition-colors md:text-base"
                >
                  Live Exchange Rate
                  <span className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                </Link>
                {/* Theme Toggle Button beside "Live Exchange Rate" */}
                <Tooltip title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                  <IconButton onClick={toggleTheme} color="inherit" size="large">
                    {mode === "dark" ? (
                      <SunIcon className="h-6 w-6 text-yellow-400" />
                    ) : (
                      <MoonIcon className="h-6 w-6 text-gray-700" />
                    )}
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Button + Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Tooltip title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <IconButton onClick={toggleTheme} color="inherit" size="large">
                {mode === "dark" ? (
                  <SunIcon className="h-6 w-6 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-gray-700" />
                )}
              </IconButton>
            </Tooltip>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-purple-dark"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dialog */}
      <Dialog
        open={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="relative z-10 no-scrollbar md:mx-auto md:max-w-3xl "
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <DialogPanel className="fixed inset-y-0 left-0 w-screen bg-white dark:bg-brand-dark dark:text-purple-dark shadow-lg overflow-y-auto no-scrollbar transition-colors duration-300">
          <>
            <div className="flex items-center p-4 mt-2 ml-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="shadow-sm rounded-lg hover:shadow-md px-1 py-1"
              >
                <ChevronLeftIcon aria-hidden="true" className="h-6 w-5" />
              </button>
            </div>
            {/* Mobile Navigation Content */}
            <div className="mx-5 mt-1">
              <div className="flex w-full flex-col justify-between rounded-md bg-[#FFFFFF] dark:bg-brand-dark dark:text-purple-dark shadow-sm transition-colors duration-300">
                <nav className="mt-4 space-y-4 px-4 py-4">
                  <div className="flex items-center space-x-4">
                    <NewspaperIcon className="h-6 w-6 text-black dark:text-purple-dark" />
                    <Link
                      to="/exchange-rate"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-normal font-urbanist text-black dark:text-purple-dark hover:text-blue-500 dark:hover:text-purple-300 flex items-center gap-2"
                    >
                      Live Exchange Rates
                      <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default AppBar;
