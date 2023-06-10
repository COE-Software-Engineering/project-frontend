import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import IonIcon from "./Ionicon";
import { defaultTheme } from "../theme/theme";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const sidebarLinks = [
    {
      name: "Dashboard",
      iconName: "grid-outline",
      routeTo: "/main",
    },
    {
      name: "Courses",
      iconName: "library-outline",
      routeTo: "/main/courses",
    },
    {
      name: "Announcements",
      iconName: "megaphone-outline",
      routeTo: "/main/announcements",
    },
    {
      name: "Files",
      iconName: "reader-outline",
      routeTo: "/main/files",
    },
    {
      name: "Settings",
      iconName: "settings-outline",
      routeTo: "/main/settings",
    },
  ];

  console.log(window.location.pathname);

  return (
    <SidebarWrapper>
      {sidebarLinks.map((link, index) => (
        <SidebarItem
          key={index}
          className={`${
            link.routeTo === window.location.pathname ? "active" : ""
          }`}
          onClick={() => navigate(link.routeTo)}
        >
          <IonIcon iconName={link.iconName} />
          <p>{link.name}</p>
        </SidebarItem>
      ))}
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 160px;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: sticky;
  top: 60px;
  /* box-shadow: 2px 0 4px 0px rgba(0, 0, 0, 0.1); */

  & .active {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const SidebarItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0 1rem;

  & p {
    margin-left: 0.5rem;
  }
`;

export default Sidebar;
