import React, { createContext, useCallback, useMemo } from "react";
import { DARKTHEME, LIGHTTHEME } from "../utils/constants";
import { useLocalStorage } from "../helpers/hooks/useLocalStorage";
import { client } from "../helpers/sanity/sanityClient";
import { v4 as uuidv4 } from "uuid";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [appTheme, setAppTheme] = useLocalStorage(
    "appTheme",
    isDarkTheme ? DARKTHEME : LIGHTTHEME
  );
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);

  const signupUser = useCallback(async (userType, userDetails, next) => {
    const doc = {
      _id: uuidv4(),
      _type: userType,
      ...userDetails,
    };
    await client
      .createIfNotExists(doc)
      .then((res) => {
        setCurrentUser(res);
        next();
      })
      .catch((err) => console.error(err));
  }, []);

  const registerCourse = useCallback((courses, next) => {
    courses.forEach(async (course) => {
      const doc = {
        _id: uuidv4(),
        _type: "course",
        ...course,
        userId: currentUser?._id,
      };

      await client
        .createIfNotExists(doc)
        .then((res) => {
          next();
        })
        .catch((err) => console.error(err));
    });
  }, []);

  const value = useMemo(() => {
    return {
      appTheme,
      setAppTheme,
      currentUser,
      setCurrentUser,
      signupUser,
      registerCourse,
    };
  }, [
    appTheme,
    setAppTheme,
    currentUser,
    setCurrentUser,
    signupUser,
    registerCourse,
  ]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
