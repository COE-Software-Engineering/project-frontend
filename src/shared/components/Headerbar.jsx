import React from "react";
import styled from "styled-components";

const Headerbar = ({ children }) => {
  return <HeaderBarWrapper>{children}</HeaderBarWrapper>;
};

const HeaderBarWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  p {
    font-weight: 700;
  }
`;

export default Headerbar;
