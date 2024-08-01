// 1. Create a new file, e.g., AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [appBG, setAppBG] = useState("#000000");
  const [fontPrimary, setFontPrimary] = useState("#FFFFFF");

  const switchToLight = () => {
    setAppBG("#FFFFFF");
    setFontPrimary("#000000");
  };

  const switchToDark = () => {
    setAppBG("#000000");
    setFontPrimary("#FFFFFF");
  };

  const value = {
    appBG,
    fontPrimary,
    switchToLight,
    switchToDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
