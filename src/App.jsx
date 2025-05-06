import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-urbanist">
      <div className="bg-white p-8 rounded-lg shadow-custom text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind is Working!</h1>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;

