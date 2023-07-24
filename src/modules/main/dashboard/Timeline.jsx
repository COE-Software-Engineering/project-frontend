import React, { useContext } from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import Empty from "../../../shared/components/Empty";
import { GlobalContext } from "../../../shared/context/context";
import MessageCard from "../announcements/MessageCard";

const Timeline = () => {
  const { recentAnnouncement } = useContext(GlobalContext);

  return (
    <ComponentWrapper title={"Recent Announcement"}>
      {!recentAnnouncement ? (
        <Empty subText={"No announcements available."} />
      ) : (
        <MessageCard message={recentAnnouncement} width={"100%"} />
      )}
    </ComponentWrapper>
  );
};

export default Timeline;
