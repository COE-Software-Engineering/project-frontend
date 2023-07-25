import { Button, Drawer } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../utils/constants";
import IonIcon from "./IonIcon";
import { sidebarLinks } from "../utils/data";
import { SidebarItem } from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Drawerbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <DrawerbarWrapper>
      <Button
        type="ghost"
        icon={<IonIcon iconName={"menu"} />}
        onClick={showDrawer}
      />
      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        width="300px"
        closable={false}
        bodyStyle={{ padding: 0, margin: 0 }}
        headerStyle={{}}
      >
        <DrawerContent>
          <HeaderContent>
            <img src="/logo2.png" alt="logo" className="logo" />
            <Button
              type="ghost"
              icon={<IonIcon iconName={"close"} />}
              onClick={onClose}
            />
          </HeaderContent>
          <BodyContent>
            {sidebarLinks.map((link, index) => (
              <SidebarItem
                key={index}
                className={`${
                  link.routeTo === window.location.pathname ? "active" : ""
                }`}
                onClick={() => {
                  onClose();
                  navigate(link.routeTo);
                }}
              >
                <IonIcon iconName={link.iconName} />
                <p>{link.name}</p>
              </SidebarItem>
            ))}
          </BodyContent>
        </DrawerContent>
      </Drawer>
    </DrawerbarWrapper>
  );
};

const DrawerbarWrapper = styled.div`
  display: none;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      display: flex;
    }
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
  position: relative;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  min-height: 50px;
  margin-bottom: 1rem;

  & ion-icon {
    font-size: 14px;
  }

  & .logo {
    width: 25px;
    height: 30px;
  }
`;

const BodyContent = styled.div`
  padding-right: 1rem;

  & .active {
    background: ${({ theme }) => theme.accentColor2};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default Drawerbar;
