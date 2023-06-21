import React from "react";
import styled from "styled-components";
import { HeaderWrapper } from "./landingpage";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { Steps } from "antd";

const LecturerSignup = () => {
  return (
    <SignupWrapper>
      <ContentWrapper>
        <Steps
          current={1}
          items={[
            {
              title: "Finished",
            },
            {
              title: "In Progress",

              subTitle: "Left 00:00:08",
            },
            {
              title: "Waiting",
            },
          ]}
        />
      </ContentWrapper>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-behavior: smooth;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

export default LecturerSignup;
