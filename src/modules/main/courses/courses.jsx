import React from "react";
import styled from "styled-components";
import Headerbar from "../../../shared/components/Headerbar";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";

const Courses = () => {
  const courses = ["", "", "", "", "", ""];

  return (
    <CoursesWrapper>
      <Headerbar>
        <p>My Courses</p>
      </Headerbar>
      <ContentWrapper>
        {courses.map((course, index) => (
          <CourseWrapper key={index}></CourseWrapper>
        ))}
      </ContentWrapper>
    </CoursesWrapper>
  );
};

const CoursesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const ContentWrapper = styled.div`
  width: 100%;
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

const CourseWrapper = styled.div`
  width: 32%;
  height: 200px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: pointer;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

export default Courses;
