import React from "react";
import styled from "styled-components";
import Titlebar from "./Titlebar";

const ComponentWrapper = ({ title, styles, children }) => {
  return (
    <Wrapper style={styles}>
      <Titlebar title={title} />
      <div className=".content-wrapper">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.accentColor2};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default ComponentWrapper;
