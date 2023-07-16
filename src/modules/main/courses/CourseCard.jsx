import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";

const CourseCard = ({ width = "32%" }) => {
  return (
    <CourseCardWrapper width={width}>
      <ImageWrapper>
        <img src="/img.jpg" alt="course-img" />
      </ImageWrapper>
      <ContentWrapper>
        <p>COE 392: Embedded Systems</p>
        <p className="course-lecturer">Ing B. Kommey</p>
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
