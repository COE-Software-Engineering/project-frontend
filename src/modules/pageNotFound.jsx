import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PageNotFound;
