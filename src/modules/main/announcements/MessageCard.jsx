import React, { useContext } from "react";
import styled from "styled-components";
import Titlebar from "../../../shared/components/Titlebar";
import IonIcon from "../../../shared/components/IonIcon";
import { Button, Space } from "antd";
import moment from "moment/moment";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { GlobalContext } from "../../../shared/context/context";

const MessageCard = ({ announcement, width }) => {
  const { deleteAnnouncement } = useContext(GlobalContext);

  return (
    <MessageCardWrapper width={width ? width : "70%"}>
      {announcement?.createdBy?.fullName && (
        <Titlebar title={announcement.createdBy?.fullName} />
      )}
      <p style={{ fontWeight: "bold" }}>{announcement?.title}</p>
      <p>{announcement?.details}</p>
      <Space direction="horizontal">
        <small>
          {moment(announcement?._createdAt).format(
            "dddd, Do MMMM yyyy hh:mm a"
          )}
        </small>
      </Space>
    </MessageCardWrapper>
  );
};

const MessageCardWrapper = styled.div`
  width: ${(props) => props.width};
  background-color: ${({ theme }) => theme.accentColor2};
  /* height: 100%; */
  min-height: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
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
