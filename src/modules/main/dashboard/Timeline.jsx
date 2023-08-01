import React, { useCallback, useContext, useEffect, useState } from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import Empty from "../../../shared/components/Empty";
import MessageCard from "../announcements/MessageCard";
import axiosInstance from "../../../shared/helpers/axios/axiosInstance";
import { GlobalContext } from "../../../shared/context/context";

const Timeline = () => {
  const [recentAnnouncement, setRecentAnnouncement] = useState(null);
  const { getAllAnnouncements } = useContext(GlobalContext);

  useEffect(() => {
    getAllAnnouncements((res) => {
      setRecentAnnouncement(res.data[res.data.length - 1]);
    });
  }, []);

  return (
    <ComponentWrapper title={"Recent Announcement"}>
      {!recentAnnouncement ? (
        <Empty subText={"No announcements available."} />
      ) : (
        <MessageCard announcement={recentAnnouncement} width={"100%"} />
      )}
    </ComponentWrapper>
  );
};

export default Timeline;
