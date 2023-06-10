import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import IonIcon from "./Ionicon";
import { defaultTheme } from "../theme/theme";

const Sidebar = () => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      iconName: "grid-outline",
      routeTo: "/",
    },
    {
      name: "Courses",
      iconName: "library-outline",
      routeTo: "/courses",
    },
    {
      name: "Announcements",
      iconName: "megaphone-outline",
      routeTo: "",
    },
    {
      name: "Files",
      iconName: "reader-outline",
      routeTo: "",
    },
    {
      name: "Settings",
      iconName: "settings-outline",
      routeTo: "",
    },
  ];

  return (
    <SidebarWrapper>
      {sidebarLinks.map((link, index) => (
        <Button
          key={index}
          type="ghost"
          icon={<IonIcon iconName={link.iconName} />}
          // className="active"
        />
      ))}
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  position: sticky;
  top: 61px;

  & button {
    height: 40px;
    /* width: 40px; */
    /* border: 1px solid blue; */
    margin-bottom: 2rem;
    /* font-size: 20px; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s (0.175, 0.885, 0.32, 1.275);
  }

  & button:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }

  & .active {
    background-color: ${({ theme }) => theme.accentColor};
  }
`;

export default Sidebar;
