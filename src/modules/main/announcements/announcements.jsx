import React, { useContext, useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import styled from "styled-components";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import MessageCard from "./MessageCard";
import Titlebar from "../../../shared/components/Titlebar";
import { Avatar, message, Space, Button, Spin } from "antd";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import {
  announcementsQuery,
  userQueryUsingId,
} from "../../../shared/helpers/sanity/sanityQueries";
import { GlobalContext } from "../../../shared/context/context";
import Empty from "../../../shared/components/Empty";
import { useLocalStorage } from "../../../shared/helpers/hooks/useLocalStorage";
import IonIcon from "../../../shared/components/IonIcon";
import Confirm from "../../../shared/components/Confirm";

const Announcements = () => {
  const [announcements, setAnnouncements] = useLocalStorage(
    "announcements-array",
    []
  );
  const { currentUser, deleteItem, setRecentAnnouncement } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  let querySubscription = undefined;

  const getAnnouncements = async () => {
    setAnnouncements(await client.fetch(announcementsQuery).then((res) => res));
    querySubscription = client
      .listen(announcementsQuery)
      .subscribe(async (update) => {
        if (update) {
          const q = userQueryUsingId(update.result.createdBy._ref);
          await client.fetch(q).then((res) => {
            const data = { ...update.result, createdBy: res[0] };
            setRecentAnnouncement(data);
            setAnnouncements((announcements) =>
              [
                ...announcements.filter(
                  (announcement) => announcement._id !== update.result._id
                ),
                update.result,
              ].sort((a, b) => (a._createdAt > b._createdAt ? 1 : -1))
            );
          });
        }
      });
    setLoading(false);
    return () => {
      querySubscription.unsubscribe();
    };
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  const deleteAnnouncement = async (id) => {
    const updatedMessages = announcements.filter(
      (message) => message._id !== id
    );
    setAnnouncements(updatedMessages);
    await deleteItem(id, () =>
      message.success("Announcement deleted succesfully")
    );
  };

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
              <CommentWrapper
                messageRef={announcement.userId}
                currentUserId={currentUser._id}
                key={announcement._id}
              >
                <Avatar size={"small"} className="avatar">
                  {announcement.createdBy?.fullName?.slice(0, 2)}
                </Avatar>
                <MessageCard announcement={announcement} />
                <Space>
                  <Confirm
                    component={
                      <Button
                        ghost
                        className="delete-announcement-btn"
                        icon={<IonIcon iconName={"trash"} />}
                      />
                    }
                    description={
                      "Are you sure you want to delete this announcement?"
                    }
                    title={"Delete announcement"}
                    onConfirm={() => deleteAnnouncement(announcement._id)}
                  />
                </Space>
              </CommentWrapper>
            ))
          )}
        </MainChatWrapper>
        <AsideWrapper>
          {currentUser._type === "lecturer" && (
            <ComponentWrapper
              title="Send announcement"
              children={<CommentSection />}
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
  position: relative;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column-reverse;
    }
  }
`;

const MainChatWrapper = styled.section`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;
  border-right: 0.5px solid ${({ theme }) => theme.sidebarBorder};

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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

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
  transition: all 0.2s ease-out 0s;

  &:hover .delete-announcement-btn {
    display: ${(props) =>
      props.messageRef === props.currentUserId ? "inline" : "none"};
  }

  & .avatar {
    background-color: ${({ theme }) => theme.tertiaryColor};
    margin: ${(props) =>
      props.messageRef === props.currentUserId
        ? "0 0 0 0.5rem"
        : "0 0.5rem 0 0"};
  }

  & .delete-announcement-btn {
    display: none;
    box-shadow: none;
    border: none;
  }

  & .delete-announcement-btn ion-icon {
    color: ${({ theme }) => theme.tertiaryColor2};
  }
`;

export default Announcements;
