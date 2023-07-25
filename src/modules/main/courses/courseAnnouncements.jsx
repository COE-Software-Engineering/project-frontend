import React from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import styled from "styled-components";
import Empty from "../../../shared/components/Empty";
import MessageCard from "../announcements/MessageCard";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";

const CourseAnnouncements = ({ courseAnnouncements }) => {
  return (
    <ComponentWrapper title={"Announcements"}>
      {courseAnnouncements.length === 0 ? (
        <Empty />
      ) : (
        <ContentWrapper>
          {courseAnnouncements.map((announcement) => (
            <MessageCard
              key={announcement._id}
              announcement={announcement}
              width={"100%"}
            />
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

export default CourseAnnouncements;
