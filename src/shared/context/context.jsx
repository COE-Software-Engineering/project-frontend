import React, { createContext, useCallback, useMemo } from "react";
import { DARKTHEME, LIGHTTHEME } from "../utils/constants";
import { useLocalStorage } from "../helpers/hooks/useLocalStorage";
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

  const getAllAnnouncements = useCallback(async (next) => {
    await axiosInstance
      .post("/api/get_all_announcements", null)
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
      getAllAnnouncements,
    };
  }, [
    appTheme,
    setAppTheme,
    currentUser,
    setCurrentUser,
    getAllCourses,
    getAllAnnouncements,
  ]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
