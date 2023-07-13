import React, { createContext, useMemo } from "react";
import { DARKTHEME, LIGHTTHEME } from "../utils/constants";
import { useLocalStorage } from "../helpers/hooks/useLocalStorage";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [appTheme, setAppTheme] = useLocalStorage(
    "appTheme",
    isDarkTheme ? DARKTHEME : LIGHTTHEME
  );

  const value = useMemo(() => {
    return {
      appTheme,
      setAppTheme,
    };
  }, [appTheme, setAppTheme]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
