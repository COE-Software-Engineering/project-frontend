import React from "react";
import styled from "styled-components";

const Titlebar = ({ title }) => {
  return (
    <TitlebarWrapper>
      <p>{title}</p>
    </TitlebarWrapper>
  );
};

const TitlebarWrapper = styled.div`
  margin-bottom: 1rem;

  p {
    text-transform: capitalize;
    font-weight: 900;
  }
`;

export default Titlebar;
