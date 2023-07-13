import React from "react";
import styled from "styled-components";
import Titlebar from "../../../shared/components/Titlebar";
import IonIcon from "../../../shared/components/Ionicon";
import { Button, Space } from "antd";
import moment from "moment/moment";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";

const MessageCard = ({ message }) => {
  return (
    <MessageCardWrapper
      style={{
        borderRadius: `${
          message.name === "Ama" ? "10px 10px 0 10px" : "10px 10px 10px 0"
        }`,
      }}
    >
      <Titlebar title={message.name} />
      <p>{message.details}</p>
      <Space direction="horizontal">
        <Button
          icon={<IonIcon iconName={"heart"} />}
          type="ghost"
          shape={"round"}
        >
          4
        </Button>
        <small>{moment().format("dddd, Mo MMMM yyyy hh:mm a")}</small>
      </Space>
    </MessageCardWrapper>
  );
};

const MessageCardWrapper = styled.div`
  width: 70%;
  /* height: 100%; */
  min-height: 50px;
  padding: 1rem;
  /* border-radius: 10px; */
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
