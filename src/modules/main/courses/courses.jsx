import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import CourseCard from "./CourseCard";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { coursesQuery } from "../../../shared/helpers/sanity/sanityQueries";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { GlobalContext } from "../../../shared/context/context";
import Empty from "../../../shared/components/Empty";
import { Spin } from "antd";

const Courses = () => {
  const { currentUser } = useContext(GlobalContext);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = useCallback(async () => {
    const q =
      currentUser?._type == "student"
        ? coursesQuery()
        : coursesQuery(currentUser?._id);
    await client
      .fetch(q)
      .then((res) => {
        setCourses(res);
        setLoading(false);
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
        {loading ? (
          <Spin />
        ) : courses.length === 0 ? (
          <Empty subText={"No recent courses!"} />
        ) : (
          <ContentWrapper>
            {courses.map((course) => (
              <CourseCard key={course._id} width={"24%"} course={course} />
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
