import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const GlobalContainer = ({ routesComponent }) => {
  return (
    <MainWrapper>
      <Navbar />
      <LayoutWrapper>
        <Sidebar />
        <ContentWrapper>{routesComponent}</ContentWrapper>
      </LayoutWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export default GlobalContainer;
