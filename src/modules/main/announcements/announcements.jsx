import React, { useCallback, useContext, useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import styled from "styled-components";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import MessageCard from "./MessageCard";
import Titlebar from "../../../shared/components/Titlebar";
import { Avatar, BackTop, Spin } from "antd";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { chatMessagesQuery } from "../../../shared/helpers/sanity/sanityQueries";
import { GlobalContext } from "../../../shared/context/context";
import Empty from "../../../shared/components/Empty";
import axiosInstance from "../../../shared/helpers/axios/axiosInstance";

const Announcements = () => {
  const { currentUser } = useContext(GlobalContext);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllAnnouncements = useCallback(async () => {
    await axiosInstance
      .post("/api/get_all_announcements", null)
      .then((res) => {
        setAnnouncements(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getAllAnnouncements();
  }, []);

  return (
    <AnimationLayout>
      <AnnouncementsWrapper>
        <MainChatWrapper>
          <Titlebar title="Chatroom" />
          {loading ? (
            <Spin />
          ) : !announcements || announcements.length === 0 ? (
            <Empty subText={"No announcements avalilable!"} />
          ) : (
            announcements.map((announcement) => (
              <CommentWrapper key={announcement.content}>
                <Avatar size={"small"} className="avatar">
                  {announcement.poster_name.slice(0, 2)}
                </Avatar>
                <MessageCard announcement={announcement} />
              </CommentWrapper>
            ))
          )}
        </MainChatWrapper>
        <AsideWrapper>
          {currentUser.staff_id && (
            <ComponentWrapper
              title="Send announcement"
              children={
                <CommentSection getAllAnnouncements={getAllAnnouncements} />
              }
            />
          )}
        </AsideWrapper>
      </AnnouncementsWrapper>
    </AnimationLayout>
  );
};

const AnnouncementsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column-reverse;
    }
  }
`;

const MainChatWrapper = styled.section`
  /* border: 1px solid red; */
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;
  border-right: 0.5px solid ${({ theme }) => theme.sidebarBorder};
  overflow-y: scroll;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
      border-right: none;
      padding: 0 1rem;
    }
  }
`;
const AsideWrapper = styled.aside`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* border: 1px solid blue; */

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1rem;

  & .avatar {
    background-color: ${({ theme }) => theme.tertiaryColor2};
    margin: 0 0.5rem 0 0;
  }
`;

export default Announcements;
