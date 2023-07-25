import React, { createContext, useCallback, useMemo } from "react";
import { DARKTHEME, LIGHTTHEME } from "../utils/constants";
import { useLocalStorage } from "../helpers/hooks/useLocalStorage";
import { client } from "../helpers/sanity/sanityClient";
import { v4 as uuidv4 } from "uuid";
import {
  announcementsQuery,
  userQueryUsingId,
} from "../helpers/sanity/sanityQueries";

export const GlobalContext = createContext();
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const GlobalProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useLocalStorage(
    "appTheme",
    isDarkTheme ? DARKTHEME : LIGHTTHEME
  );
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [recentAnnouncement, setRecentAnnouncement] = useLocalStorage(
    "recentAnnouncement",
    null
  );

  //auth
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

  //courses
  const registerCourse = useCallback(async (courses, userId, next) => {
    await Promise.all(
      courses.map(async (course) => {
        const doc = {
          _id: uuidv4(),
          _type: "course",
          ...course,
          userId: userId,
          createdBy: {
            _type: "createdBy",
            _ref: userId,
          },
        };
        console.log(doc);
        await client
          .createIfNotExists(doc)
          .then((res) => {
            next();
          })
          .catch((err) => console.error(err));
      })
    );
  }, []);
  const updateCourse = useCallback(() => {}, []);

  //announcements
  const createAnnouncement = useCallback((announcementData, userId, next) => {
    const doc = {
      _type: "announcement",
      title: announcementData?.title,
      details: announcementData?.details,
      userId: userId,
      createdBy: {
        _type: "createdBy",
        _ref: userId,
      },
    };
    client
      .create(doc)
      .then((res) => {
        next();
        // console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  //delete function for either file, course or announcement
  const deleteItem = useCallback(async (itemId, next) => {
    await client
      .delete(itemId)
      .then((res) => {
        next();
      })
      .catch((err) => console.error(err));
  }, []);

  const value = useMemo(() => {
    return {
      appTheme,
      setAppTheme,
      currentUser,
      setCurrentUser,
      recentAnnouncement,
      setRecentAnnouncement,
      signupUser,
      registerCourse,
      createAnnouncement,
      deleteItem,
    };
  }, [
    appTheme,
    setAppTheme,
    currentUser,
    setCurrentUser,
    recentAnnouncement,
    setRecentAnnouncement,
    signupUser,
    registerCourse,
    createAnnouncement,
    deleteItem,
  ]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
