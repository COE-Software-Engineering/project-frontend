import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const GlobalContainer = () => {
  return (
    <MainWrapper>
      <Navbar />
      <LayoutWrapper>
        <SidebarWrapper></SidebarWrapper>
        <ContentWrapper></ContentWrapper>
      </LayoutWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* overflow-x: hidden; */
`;

const LayoutWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
`;

const SidebarWrapper = styled.div`
  width: 20%;
  height: 100%;
`;
const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
`;

export default GlobalContainer;
