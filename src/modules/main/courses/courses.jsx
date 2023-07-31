import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import CourseCard from "./CourseCard";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { GlobalContext } from "../../../shared/context/context";
import Empty from "../../../shared/components/Empty";

const Courses = () => {

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
