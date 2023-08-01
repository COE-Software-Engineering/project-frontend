import React, { useContext, useEffect, useState } from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import { GlobalContext } from "../../../shared/context/context";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import MessageCard from "../announcements/MessageCard";
import Empty from "../../../shared/components/Empty";

const CourseAnnouncements = ({ lecturerName }) => {
  const [courseAnnouncements, setCourseAnnouncements] = useState([]);
  const { getAllAnnouncements } = useContext(GlobalContext);

  useEffect(() => {
    getAllAnnouncements((res) => {
      const filteredAnnouncements = res.data.filter(
        (announcement) => announcement.poster_name == lecturerName
      );
      setCourseAnnouncements(filteredAnnouncements);
    });
  }, []);

  return (
    <ComponentWrapper title={"Course Announcements"}>
      {courseAnnouncements.length === 0 ? (
        <Empty subText={"No announcements related to this course!"} />
      ) : (
        <ContentWrapper>
          {courseAnnouncements.map((announcement) => (
            <MessageCard
              key={announcement}
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
