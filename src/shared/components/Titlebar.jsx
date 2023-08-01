import React from "react";
import styled from "styled-components";

const Titlebar = ({ title, rightComponent }) => {
  return (
    <TitlebarWrapper>
      <p>{title}</p>
      {rightComponent}
    </TitlebarWrapper>
  );
};

const TitlebarWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    text-transform: capitalize;
    font-weight: 700;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export default Titlebar;
