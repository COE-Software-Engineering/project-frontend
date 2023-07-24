import React, { useContext } from "react";
import styled from "styled-components";
import Titlebar from "../../../shared/components/Titlebar";
import IonIcon from "../../../shared/components/IonIcon";
import { Button, Space } from "antd";
import moment from "moment/moment";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { GlobalContext } from "../../../shared/context/context";

const MessageCard = ({ message }) => {
  const { deleteAnnouncement } = useContext(GlobalContext);

  return (
    <MessageCardWrapper>
      <Titlebar title={message.createdBy.fullName} />
      <p style={{ fontWeight: "bold" }}>{message.title}</p>
      <p>{message.details}</p>
      <Space direction="horizontal">
        <small>
          {moment(message._createdAt).format("dddd, Mo MMMM yyyy hh:mm a")}
        </small>
      </Space>
    </MessageCardWrapper>
  );
};

const MessageCardWrapper = styled.div`
  width: 70%;
  background-color: ${({ theme }) => theme.accentColor2};
  /* height: 100%; */
  min-height: 50px;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;

  & p {
    margin: 0.5rem 0;
  }

  & small {
    opacity: 0.7;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ion-icon {
    color: ${({ theme }) => theme.tertiaryColor2};
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 90%;
    }
  }
`;

export default MessageCard;
