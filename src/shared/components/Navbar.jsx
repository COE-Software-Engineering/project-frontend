import styled from "styled-components";
import IonIcon from "./Ionicon";
import { Avatar, Button, Dropdown } from "antd";
import Searchbar from "./Searchbar";
import { DARKTHEME, LIGHTTHEME, MEDIA_QUERIES } from "../utils/constants";
import Drawerbar from "./Drawerbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { defaultTheme } from "../theme/theme";

const Navbar = () => {
  const navigate = useNavigate();
  const { appTheme, setAppTheme, currentUser, setCurrentUser } =
    useContext(GlobalContext);

  const changeTheme = () => {
    setAppTheme((prev) => (prev === LIGHTTHEME ? DARKTHEME : LIGHTTHEME));
  };

  const items = [
    {
      key: "1",
      label: <p>{currentUser?.fullName}</p>,
      onClick: () => navigate("/main/profile"),
    },
    {
      key: "2",
      label: <p>Log out</p>,
      onClick: () => {
        navigate("/");
        setCurrentUser(null);
      },
    },
  ];

  return (
    <NavWrapper appTheme={appTheme}>
      <LogoWrapper>
        <Drawerbar />
        <img src="/knust-logo.png" alt="logo" />
      </LogoWrapper>
      {/* <Searchbar /> */}
      <ToolsWrapper>
        <Button
          type="ghost"
          shape="circle"
          icon={<IonIcon iconName={"notifications"} />}
        />
        <Button
          type="ghost"
          shape="circle"
          icon={
            <IonIcon iconName={appTheme === LIGHTTHEME ? "moon" : "sunny"} />
          }
          onClick={changeTheme}
        />

        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <Avatar
            src=""
            size={"small"}
            style={{
              cursor: "pointer",
              backgroundColor: `${defaultTheme.tertiaryColor2}`,
            }}
            alt={null}
          >
            {currentUser?.fullName.slice(0, 2)}
          </Avatar>
        </Dropdown>
      </ToolsWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.accentColor};
  -webkit-box-shadow: 0px 20px 50px 0px rgb(0 0 0 / 5%);
  box-shadow: 0px 20px 50px 0px rgb(0 0 0 / 5%);
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;

  & button {
    color: white;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }

  ion-icon {
    color: #ffffff;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & img {
    width: 25px;
    height: 30px;
  }
`;

const ToolsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default Navbar;
