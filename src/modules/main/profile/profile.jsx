import React from "react";
import UserDetails from "./UserDetails";
import LoginActivity from "./LoginActivity";
import styled from "styled-components";
import IonIcon from "../../../shared/components/Ionicon";
import { Button } from "antd";
import { defaultTheme } from "../../../shared/theme/theme";
import CourseDetails from "./CourseDetails";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import AnimationLayout from "../../../shared/components/AnimationLayout";

const Profile = () => {
  return (
    <AnimationLayout>
      <ProfileWrapper>
        <HeaderContentWrapper>
          <div className="img-details-wrapper">
            <div className="img-wrapper">
              {/* <img src="" alt="user-img" /> */}
            </div>
            <div className="header-details-wrapper">
              <h3>Owusu-Ansah Solomon</h3>
              <p>Student</p>
            </div>
          </div>
          <Button type="primary" shape="round">
            Update Profile
          </Button>
        </HeaderContentWrapper>
        <BodyContentWrapper>
          <MainAreaWrapper>
            <UserDetails />
            <CourseDetails />
          </MainAreaWrapper>
          <AsideAreaWrapper>
            <LoginActivity />
            <LoginActivity />
          </AsideAreaWrapper>
        </BodyContentWrapper>
      </ProfileWrapper>
    </AnimationLayout>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderContentWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.accentColor2};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  & h3 {
    font-family: "DM Serif Text", "Poppins", sans-serif;
  }

  & .img-details-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  & .img-wrapper {
    background-color: #eee;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 2rem;
  }

  & .img-wrapper img {
    width: 100%;
    height: 100%;
  }

  & .header-details-wrapper h3 {
    font-size: 2rem;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    & button {
      margin-top: 1rem;
    }
  }
`;

const BodyContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

const MainAreaWrapper = styled.section`
  width: 68%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;
const AsideAreaWrapper = styled.aside`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid blue; */

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

export default Profile;
