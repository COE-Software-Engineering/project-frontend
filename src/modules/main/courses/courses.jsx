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

const Courses = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(GlobalContext);

  const [courses, setCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    const q =
      currentUser?._type == "student"
        ? coursesQuery()
        : coursesQuery(currentUser?._id);
    await client
      .fetch(q)
      .then((res) => {
        setCourses(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [currentUser?._id, currentUser?._type]);

  useEffect(() => {
    fetchCourses();
  }, [currentUser._id, currentUser._type, fetchCourses]);

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
