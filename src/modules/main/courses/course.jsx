import React from "react";
import Headerbar from "../../../shared/components/Headerbar";
import BreadCrumb from "../../../shared/components/BreadCrumb";
import styled from "styled-components";
import ComponentWrapper from "../dashboard/ComponentWrapper";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  return (
    <CourseWrapper>
      <Headerbar>
        <BreadCrumb
          items={[
            { title: "Courses", onClick: () => navigate(-1) },
            { title: "Intro. to Software Eng." },
          ]}
        />
      </Headerbar>
      <ContentWrapper>
        <CourseDetailsWrapper>
          <h3>INTRODUCTION TO SOFTWARE ENGINEERING</h3>
          <div className="other-details">
            <p>
              <span className="bold">Course Code :</span>
              <span>392</span>
            </p>
            <p>
              <span className="bold">Credit Hours :</span>
              <span>392</span>
            </p>
            <p>
              <span className="bold">Lecturer :</span>
              <span>392</span>
            </p>
          </div>
        </CourseDetailsWrapper>
        <CourseContentWrapper>
          <ComponentWrapper title="Announcements" />
          <ComponentWrapper title="Course materials" />
        </CourseContentWrapper>
      </ContentWrapper>
    </CourseWrapper>
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
  }
`;

const CourseContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Course;
