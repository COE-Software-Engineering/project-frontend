import React, { createContext, useCallback, useMemo } from "react";
import { DARKTHEME, LIGHTTHEME } from "../utils/constants";
import { useLocalStorage } from "../helpers/hooks/useLocalStorage";
import { client } from "../helpers/sanity/sanityClient";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../helpers/axios/axiosInstance";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [appTheme, setAppTheme] = useLocalStorage(
    "appTheme",
    isDarkTheme ? DARKTHEME : LIGHTTHEME
  );
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);

  const getAllCourses = useCallback(async (next) => {
    await axiosInstance
      .post("/api/get_all_courses", null)
      .then((res) => {
        next(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const value = useMemo(() => {
    return {
      appTheme,
      setAppTheme,
      currentUser,
      setCurrentUser,
      getAllCourses,
    };
  }, [appTheme, setAppTheme, currentUser, setCurrentUser, getAllCourses]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
