import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";

const Courses = () => {
  const courses = ["", "", "", "", "", "", "", "", ""];
  const navigate = useNavigate();

  return (
    <AnimationLayout>
      <CoursesWrapper>
        <Titlebar title={"My Courses"} />
        <ContentWrapper>
          {courses.map((course, index) => (
            <CourseCard key={index} width={"24%"} />
          ))}
        </ContentWrapper>
      </CoursesWrapper>
    </AnimationLayout>
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
