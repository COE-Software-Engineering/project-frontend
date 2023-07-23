import React, { useCallback, useContext, useState, useEffect } from "react";
import Empty from "../../../shared/components/Empty";
import CourseCard from "../courses/CourseCard";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import { GlobalContext } from "../../../shared/context/context";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { coursesQuery } from "../../../shared/helpers/sanity/sanityQueries";

const RecentCourses = () => {
  const { currentUser } = useContext(GlobalContext);

  const [courses, setCourses] = useState([]);

  // const fetchCourses = useCallback(async () => {
  //   const q =
  //     currentUser?._type == "student"
  //       ? coursesQuery()
  //       : coursesQuery(currentUser?._id);
  //   await client
  //     .fetch(q)
  //     .then((res) => {
  //       setCourses(res);
  //       console.log(res);
  //     })
  //     .catch((err) => console.error(err));
  // }, [currentUser?._id, currentUser?._type]);

  // useEffect(() => {
  //   fetchCourses();
  // }, [currentUser._id, currentUser._type, fetchCourses]);

  return (
    <ComponentWrapper title="Recent Courses" styles={{ minHeight: "240px" }}>
      {courses.length === 0 ? (
        <Empty subText={"No recent courses!"} />
      ) : (
        <ContentWrapper>
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </ContentWrapper>
      )}
    </ComponentWrapper>
  );
};

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

export default RecentCourses;
