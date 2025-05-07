import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/index";
import { ThemeModeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeModeProvider>
      <div className="min-h-screen bg-brand dark:bg-brand-dark text-text-main dark:text-purple-dark transition-colors duration-300">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </ThemeModeProvider>
  );
}

export default App;
