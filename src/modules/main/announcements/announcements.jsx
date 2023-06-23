import React from "react";
import CommentSection from "../../../shared/components/CommentSection";
import styled from "styled-components";

const Announcements = () => {
  return (
    <AnnouncementsWrapper>
      <CommentsWrapper></CommentsWrapper>
      <CommentSection />
    </AnnouncementsWrapper>
  );
};

const AnnouncementsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CommentsWrapper = styled.div`
  min-height: 400px;
  width: 100%;
`;

export default Announcements;
