import React, { useContext } from "react";
import UserDetails from "./UserDetails";
import LoginActivity from "./LoginActivity";
import styled from "styled-components";
import IonIcon from "../../../shared/components/IonIcon";
import { Button } from "antd";
import CourseDetails from "./CourseDetails";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { GlobalContext } from "../../../shared/context/context";

const Profile = () => {
  const { currentUser } = useContext(GlobalContext);

  return (
    <AnimationLayout>
      <ProfileWrapper>
        <HeaderContentWrapper>
          <div className="img-details-wrapper">
            <div className="img-wrapper">
              <img
                src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                alt="user-img"
              />
            </div>
            <div className="header-details-wrapper">
              <h3>
                {currentUser?.last_name} {currentUser?.other_names}
              </h3>
              <p>{currentUser?.staff_id ? "Lecturer" : "Student"}</p>
            </div>
          </div>
          {/* <Button type="default" icon={<IonIcon iconName={"create"} />}>
            Update Profile
          </Button> */}
        </HeaderContentWrapper>
        <BodyContentWrapper>
          <MainAreaWrapper>
            <UserDetails />
            <CourseDetails />
          </MainAreaWrapper>
          <AsideAreaWrapper>
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

  & button {
    box-shadow: none;
    border-radius: 7px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

export default Profile;
