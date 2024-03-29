import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { Spin } from "antd";
import CourseAnnouncements from "./courseAnnouncements";
import CourseMaterials from "./CourseMaterials";

const Course = () => {
  const { courseId } = useParams();
  const { state } = useLocation();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCourse(state);
    setLoading(false);
  }, [courseId]);

  return (
    <AnimationLayout>
      <CourseWrapper>
        {/* <Headerbar>
        <BreadCrumb
          items={[
            { title: "Courses", onClick: () => navigate(-1) },
            { title: "Intro. to Software Eng." },
          ]}
        />
      </Headerbar> */}
        {loading ? (
          <Spin />
        ) : !course ? (
          <Empty />
        ) : (
          <ContentWrapper>
            <CourseDetailsWrapper>
              <h3>{course.title}</h3>
              <div className="other-details">
                <p>
                  <span className="bold">Course Code :</span>
                  <span>{course.course_code}</span>
                </p>
                <p>
                  <span className="bold">Credit Hours :</span>
                  <span>{course.credit_hour}</span>
                </p>
                <p>
                  <span className="bold">Lecturer :</span>
                  <span>{course.lecturer_name}</span>
                </p>
              </div>
            </CourseDetailsWrapper>
            <CourseContentWrapper>
              <CourseMaterials courseName={course.title} />
              <CourseAnnouncements lecturerName={course.lecturer_name} />
            </CourseContentWrapper>
          </ContentWrapper>
        )}
      </CourseWrapper>
    </AnimationLayout>
  );
};

const CourseWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CourseDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.accentColor2};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  & .other-details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  & .bold {
    font-weight: bold;
    margin-right: 1rem;
  }

  & p {
    font-size: 14px;
    margin: 1rem 1rem 0 0;
  }

  & h3 {
    font-size: 2rem;
    display: block;
    font-family: "DM Serif Text", "Poppins", sans-serif;
  }
`;

const CourseContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Course;
