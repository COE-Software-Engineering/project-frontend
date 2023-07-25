import { Button, Dropdown } from "antd";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import AnimationLayout from "../../shared/components/AnimationLayout";
import { useNavigate } from "react-router-dom";

import Signin from "./Signin";

const Landingpage = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: <p>As lecturer</p>,
      onClick: () => navigate("/lecturer-signup"),
    },
    {
      key: "2",
      label: <p>As student</p>,
      onClick: () => navigate("/student-signup"),
    },
  ];

  return (
    <AnimationLayout>
      <LandingPageWrapper>
        <HeaderWrapper>
          <img src="/logo2.png" alt="logo" />

          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            trigger={"click"}
          >
            <Button
              type="ghost"
              style={{
                backgroundColor: "transparent",
                boxShadow: 0,
                borderRadius: "7px",
                fontSize: "12px",
              }}
            >
              Sign up
            </Button>
          </Dropdown>
        </HeaderWrapper>
        <HeroWrapper>
          <img src="/main-banner-img.svg" alt="" />
          <div>
            <h3>COE Virtual Classroom</h3>
            <p>
              This web app seeks to bridge the gap between students and
              lecturers in terms of communication between them.
            </p>
          </div>
        </HeroWrapper>
        <FormWrapper>
          <Signin />
        </FormWrapper>
      </LandingPageWrapper>
    </AnimationLayout>
  );
};

const LandingPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  scroll-behavior: smooth;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

export const HeaderWrapper = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0 2rem;
  z-index: 10;
  background-color: transparent;
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;

  & img {
    width: 25px;
    height: 30px;
  }

  & button {
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const HeroWrapper = styled.div`
  width: 60%;
  height: 100vh;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.herobg};
  text-align: center;

  img {
    width: 50%;
    height: 50%;
  }

  h3 {
    font-size: 2rem;
    margin: 10px 0;
    font-family: "DM Serif Text", sans-serif;
  }

  p {
    width: 60%;
    margin: auto;
    line-height: 1.3rem;
  }

  & .get-started-btn {
    display: none;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }

    & img {
      width: 100%;
      height: 40%;
    }
  }
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.accentColor2};

  & .input {
    background-color: transparent;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    /* font-size: 12px; */
    border: none;
  }

  & .input::placeholder {
    font-size: 12px;
  }

  & button {
    font-size: 12px;
    border-radius: 7px;
    box-shadow: none;
    width: 100px;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
      height: 80vh;
    }
  }
`;

export default Landingpage;
