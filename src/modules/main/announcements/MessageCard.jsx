import React from "react";
import styled from "styled-components";
import Titlebar from "../../../shared/components/Titlebar";
import { Space } from "antd";
import moment from "moment/moment";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";

const MessageCard = ({ announcement, width }) => {
  return (
    <MessageCardWrapper width={width}>
      <Titlebar title={announcement.poster_name} />
      <p style={{ fontWeight: "bold" }}>{announcement.title}</p>
      <p>{announcement.content}</p>
      <Space direction="horizontal">
        <small>
          {moment(announcement.time_stamp).format("dddd, Do MMMM yyyy hh:mm a")}
        </small>
      </Space>
    </MessageCardWrapper>
  );
};

const MessageCardWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "70%")};
  /* background-color: ${({ theme }) => theme.accentColor2}; */
  min-height: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
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
