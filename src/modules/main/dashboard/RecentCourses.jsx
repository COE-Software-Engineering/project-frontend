import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import Empty from "../../../shared/components/Empty";
import CourseCard from "../courses/CourseCard";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";

const RecentCourses = () => {
  const courses = ["", "", ""];

  return (
    <ComponentWrapper title="Recent Courses" styles={{ minHeight: "240px" }}>
      {/* <p>No new courses!</p> */}
      {/* <Empty subText={"No recent courses!"} /> */}
      <ContentWrapper>
        {courses.map((course, index) => (
          <CourseCard key={index} />
        ))}
      </ContentWrapper>
    </ComponentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

export default RecentCourses;
