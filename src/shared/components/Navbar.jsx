import styled from "styled-components";
import IonIcon from "./Ionicon";
import { Avatar, Button } from "antd";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        {/* <Button type="ghost" icon={<IonIcon iconName={"menu-outline"} />} /> */}
        <img src="/knust-logo.png" alt="logo" />
      </LogoWrapper>
      <Searchbar />
      <ToolsWrapper>
        <Button
          type="ghost"
          icon={<IonIcon iconName={"notifications-outline"} />}
        />
        <Avatar src="" size={"small"}>
          A
        </Avatar>
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

  button {
    color: white;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }

  img {
    width: 5rem;
    height: 5rem;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    /* padding: 10px; */
    margin: 0 1rem;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease-out 0s;
  }

  li:hover {
    color: ${({ theme }) => theme.primaryColor[400]};
  }

  .active {
    color: ${({ theme }) => theme.primaryColor[400]};
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
