import React from "react";
import styled from "styled-components";
import Headerbar from "../../../shared/components/Headerbar";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";

const Courses = () => {
  const courses = ["", "", "", "", "", "", "", "", ""];
  const navigate = useNavigate();

  return (
    <CoursesWrapper>
      <Headerbar>
        <p>My Courses</p>
      </Headerbar>
      <ContentWrapper>
        {courses.map((course, index) => (
          <CourseCard key={index} />
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

export default Courses;
