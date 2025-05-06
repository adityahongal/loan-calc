// src/Pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className='bg-white w-screen h-dvh flex flex-col items-center justify-center'>
    <span className='font-urbanist text-2xl animate-bounce text-center md:text-4xl mb-4'>
      404 - Page Not Found
    </span>
    <Link
      to="/"
      className="mt-4 px-6 py-2 bg-black text-white rounded font-urbanist text-lg hover:bg-gray-800 transition"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
