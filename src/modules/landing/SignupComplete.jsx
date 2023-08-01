import Lottie from "lottie-react";
import CheckmarkAnimation from "../../shared/helpers/lotties/checkmark.json";
import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const SignupComplete = () => {
  const navigate = useNavigate();

  return (
    <SignupCompleteWrapper>
      <Lottie animationData={CheckmarkAnimation} width={40} height={40} />
      <p>You are all set and done!</p>
      <p>
        An email has been sent to your email containing a temporary password for
        you.
      </p>
      <Button type="primary" onClick={() => navigate("/")}>
        Go to sign in
      </Button>
    </SignupCompleteWrapper>
  );
};

const SignupCompleteWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    margin: 1rem 0;
    text-align: center;
  }
`;

export default SignupComplete;
