import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import IonIcon from "./Ionicon";
import { useNavigate } from "react-router-dom";
import { MEDIA_QUERIES } from "../utils/constants";
import { sidebarLinks } from "../utils/data";

const Sidebar = () => {
  const navigate = useNavigate();

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
  width: 200px;
  padding: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0.5px 0 0px 0px ${({ theme }) => theme.sidebarBorder};
  transition: all 0.3s ease-in-out 0s;

  & .active {
    background: ${({ theme }) => theme.accentColor2};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      display: none;
    }
  }
`;

export const SidebarItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  padding-left: 1rem;
  cursor: pointer;

  & p {
    margin-left: 0.5rem;
  }
`;

export default Sidebar;
