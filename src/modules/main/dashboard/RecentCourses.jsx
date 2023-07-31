import React, { useCallback, useContext, useState, useEffect } from "react";
import Empty from "../../../shared/components/Empty";
import CourseCard from "../courses/CourseCard";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import { GlobalContext } from "../../../shared/context/context";

const RecentCourses = () => {
  const { getAllCourses } = useContext(GlobalContext);

  const [courses, setCourses] = useState([]);
  const fetchCourses = useCallback(async () => {
    getAllCourses((res) => {
      if(currentUser?.staff_id){
        const user_full_name = currentUser?.last_name + " " + currentUser?.other_names;
        const updatedCourses = res.data.filter(course => course.lecturer_name == user_full_name);
        setCourses(updatedCourses);
      }else setCourses(res.data);
        });
    });
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <ComponentWrapper title="Recent Courses" styles={{ minHeight: "240px" }}>
      {courses.length === 0 ? (
        <Empty subText={"No recent courses!"} />
      ) : (
        <ContentWrapper>
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.course_code} course={course} />
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
