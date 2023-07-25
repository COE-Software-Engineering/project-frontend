import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { courseQuery } from "../../../shared/helpers/sanity/sanityQueries";
import CourseAnnouncements from "./courseAnnouncements";

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [courseAnnouncements, setCourseAnnouncements] = useState([]);

  const getCourseDetails = useCallback(async () => {
    const q = courseQuery(courseId);
    await client
      .fetch(q)
      .then(async (res) => {
        setCourse(res[0]);
        const q = `*[_type == 'announcement' && userId == '${res[0].createdBy._id}']{
          _id,
          title,
          details,
          _createdAt,
          userId,
          createdBy -> {
            _id,
            fullName
        }} | order(_createdAt)`;
        await client.fetch(q).then((res) => {
          setCourseAnnouncements(res);
        });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getCourseDetails();
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
        {course && (
          <ContentWrapper>
            <CourseDetailsWrapper>
              <h3>{course.courseName}</h3>
              <div className="other-details">
                <p>
                  <span className="bold">Course Code :</span>
                  <span>{course.courseCode}</span>
                </p>
                <p>
                  <span className="bold">Credit Hours :</span>
                  <span>{course.creditHours}</span>
                </p>
                <p>
                  <span className="bold">Lecturer :</span>
                  <span>{course.createdBy.fullName}</span>
                </p>
              </div>
            </CourseDetailsWrapper>
            <CourseContentWrapper>
              <CourseAnnouncements courseAnnouncements={courseAnnouncements} />
              <ComponentWrapper title="Course materials" />
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
