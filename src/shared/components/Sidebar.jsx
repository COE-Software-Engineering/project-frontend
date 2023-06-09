import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import IonIcon from "./Ionicon";

const Sidebar = () => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      iconName: "grid-outline",
      routeTo: "",
    },
    {
      name: "Courses",
      iconName: "library-outline",
      routeTo: "",
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
    height: 60px;
    /* width: 40px; */
    /* border: 1px solid blue; */
    margin-bottom: 1rem;
    /* font-size: 20px; */

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default Sidebar;
