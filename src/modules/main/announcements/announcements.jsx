import React, { useCallback, useContext, useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import styled from "styled-components";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import MessageCard from "./MessageCard";
import Titlebar from "../../../shared/components/Titlebar";
import { Avatar, BackTop } from "antd";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { chatMessagesQuery } from "../../../shared/helpers/sanity/sanityQueries";
import { GlobalContext } from "../../../shared/context/context";
import Empty from "../../../shared/components/Empty";

const Announcements = () => {
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(GlobalContext);

  const getAllChatMessages = useCallback(async () => {}, []);

  useEffect(() => {
    getAllChatMessages();
  }, []);

  return (
    <AnimationLayout>
      <AnnouncementsWrapper>
        <MainChatWrapper>
          <Titlebar title="Chatroom" />
          {!messages || messages.length === 0 ? (
            <Empty subText={"No announcements avalilable!"} />
          ) : (
            messages.map((message) => (
              <CommentWrapper
                messageRef={message.createdBy._id}
                currentUserId={currentUser._id}
                key={message._id}
              >
                <Avatar size={"small"} className="avatar">
                  {message.createdBy.fullName.slice(0, 2)}
                </Avatar>
                <MessageCard message={message} />
              </CommentWrapper>
            ))
          )}
        </MainChatWrapper>
        <AsideWrapper>
          <ComponentWrapper
            title="Send announcement"
            children={<CommentSection />}
          />
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
      flex-direction: 0 0 0 1rem;
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
  flex-direction: ${(props) =>
    props.messageRef === props.currentUserId ? "row-reverse" : "row"};
  width: 100%;
  margin-bottom: 1rem;

  & .avatar {
    background-color: ${({ theme }) => theme.tertiaryColor};
    margin: ${(props) =>
      props.messageRef === props.currentUserId
        ? "0 0 0 0.5rem"
        : "0 0.5rem 0 0"};
  }
`;

export default Announcements;
