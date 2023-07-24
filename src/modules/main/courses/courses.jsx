import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { coursesQuery } from "../../../shared/helpers/sanity/sanityQueries";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { GlobalContext } from "../../../shared/context/context";
import Empty from "../../../shared/components/Empty";

const Courses = () => {
  const navigate = useNavigate();

  const { currentUser, getAllCourses } = useContext(GlobalContext);

  const [courses, setCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    getAllCourses((res) => {
      setCourses(res.data);
    });
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <AnimationLayout>
      <CoursesWrapper>
        <Titlebar title={"My Courses"} />
        {courses.length === 0 ? (
          <Empty subText={"No recent courses!"} />
        ) : (
          <ContentWrapper>
            {courses.map((course) => (
              <CourseCard key={course.course_code} width={"24%"} course={course} />
            ))}
          </ContentWrapper>
        )}
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
  justify-content: flex-start;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

export default Courses;
