import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mui-theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("mui-theme", mode);
    const root = window.document.documentElement;
    const {body} = window.document;
    if (mode === "dark") {
      root.classList.add("dark");
    //   body.classList.add("dark");
    } else {
      root.classList.remove("dark");
    //   body.classList.remove("dark");
    }
  }, [mode]);
  

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: { default: "#18181b", paper: "#23272f" },
                text: { primary: "#a78bfa" }, // purple in dark
              }
            : {
                background: { default: "#f9fafb", paper: "#fff" },
                text: { primary: "#2B3335" },
              }),
        },
        typography: {
          fontFamily: [
            "Urbanist",
            "Inter",
            "Poppins",
            "Roboto Flex",
            "sans-serif",
          ].join(","),
        },
      }),
    [mode]
  );

  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
