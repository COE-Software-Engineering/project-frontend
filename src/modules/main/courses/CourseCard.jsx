import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../../../shared/helpers/sanity/sanityClient";

const CourseCard = ({ width = "32%", course }) => {
  const navigate = useNavigate();

  return (
    <CourseCardWrapper
      width={width}
      onClick={() => navigate(`/main/courses/${course._id}`, course)}
    >
      <ImageWrapper>
        <img
          src={
            "https://www.redpoints.com/wp-content/uploads/2020/05/header-blog-e-learning-1.png"
          }
          alt="course-img"
        />
      </ImageWrapper>
      <ContentWrapper>
        <p>
          {course.course_code} : {course.title.slice(0, 20)}...
        </p>
        <p className="course-lecturer">{course.lecturer_name}</p>
      </ContentWrapper>
    </CourseCardWrapper>
  );
};

const CourseCardWrapper = styled.div`
  width: ${(props) => props.width};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* background: rgba(255, 255, 255, 0.02); */
  /* backdrop-filter: blur(4px); */
  /* -webkit-backdrop-filter: blur(4px); */
  cursor: pointer;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  padding-bottom: 0.5rem;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  /* height: 50px; */
  padding-bottom: 1rem;
  padding-left: 1rem;

  & .course-lecturer {
    opacity: 0.7;
  }
`;

export default CourseCard;
