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
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const value = useMemo(() => {
    return {
      appTheme,
      setAppTheme,
      currentUser,
      setCurrentUser,
    };
  }, [appTheme, setAppTheme, currentUser, setCurrentUser]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
