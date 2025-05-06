import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  NewspaperIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const AppBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="flex bg-brand border-b border-color-#D1D1D1 items-center justify-center lg:h-28 md:h-12">
        <div className="flex w-full items-center justify-between lg:mx-20 md:mx-5 xs:mx-5 mx-5 my-5">
          <a
            className="font-urbanist lg:text-2xl font-normal text-[#2B3335] hover:text-[#2B3335]/75 transition-colors md:text-base"
            href="/"
          >
            Loan Calculator
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex flex-row items-center gap-6 text-sm">
              <li>
                <a
                  className="flex items-center gap-2 font-urbanist lg:text-2xl font-normal text-[#2B3335] hover:text-blue-500 transition-colors md:text-base"
                  href="/"
                >
                  Live Exchange Rate
                  <span className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dialog */}
      <Dialog
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        className="relative z-10 no-scrollbar md:mx-auto md:max-w-3xl"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <DialogPanel className="fixed inset-y-0 left-0 w-screen bg-white shadow-lg overflow-y-auto no-scrollbar">
          <>
            <div className="flex items-center p-4 mt-2 ml-2">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="shadow-sm rounded-lg hover:shadow-md px-1 py-1"
              >
                <ChevronLeftIcon aria-hidden="true" className="h-6 w-5" />
              </button>
            </div>

            {/* Mobile Navigation Content */}
            <div className="mx-5 mt-1">
              <div className="flex w-full flex-col justify-between rounded-md bg-[#FFFFFF] shadow-sm">
                <nav className="mt-4 space-y-4 px-4 py-4">
                  <div className="flex items-center space-x-4">
                    <NewspaperIcon className="h-6 w-6 text-black" />
                    <a
                      href="/"
                      className="text-base font-normal font-poppins text-black hover:text-blue-500 flex items-center gap-2"
                    >
                      Live Exchange Rates
                      <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                    </a>
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
