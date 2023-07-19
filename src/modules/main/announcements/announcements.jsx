import React, { useCallback, useEffect, useState } from "react";
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

const data = [
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Ama",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Ama",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details: "Lorem Ipsum",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hello",
    name: "Solo",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Announcements = () => {
  const [messages, setMessages] = useState([]);

  // const getAllChatMessages = useCallback(async () => {
  //   await client
  //     .fetch(chatMessagesQuery)
  //     .then((result) => {
  //       setMessages(result);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // const getChatUpdates = useCallback(() => {
  //   client.listen(chatMessagesQuery).subscribe((update) => {
  //     // setMessages(update.result)
  //     console.log(update.result);
  //   });
  // }, []);

  // useEffect(() => getChatMessages(), []);

  return (
    <AnimationLayout>
      <AnnouncementsWrapper>
        <MainChatWrapper>
          <Titlebar title="Chatroom" />
          {data.map((item) => (
            <CommentWrapper itemName={item.name} key={item}>
              <Avatar size={"small"} className="avatar">
                {item.name.slice(0, 2)}
              </Avatar>
              <MessageCard message={item} />
            </CommentWrapper>
          ))}
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
    props.itemName === "Ama" ? "row-reverse" : "row"};
  width: 100%;
  margin-bottom: 1rem;

  & .avatar {
    background-color: ${({ theme }) => theme.tertiaryColor};
    margin: ${(props) =>
      props.itemName === "Ama" ? "0 0 0 0.5rem" : "0 0.5rem 0 0"};
  }
`;

export default Announcements;
