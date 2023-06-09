import React from "react";
import styled from "styled-components";
import RecentCourses from "./RecentCourses";
import Timeline from "./Timeline";
import MyFiles from "./MyFiles";
import Calendar from "./Calendar";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <MainAreaWrapper>
        <RecentCourses />
      </MainAreaWrapper>
      <AsideAreaWrapper>
        <Timeline />
        <Calendar />
        <MyFiles />
      </AsideAreaWrapper>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainAreaWrapper = styled.section`
  width: 68%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const AsideAreaWrapper = styled.aside`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid blue; */
`;

export default Dashboard;
