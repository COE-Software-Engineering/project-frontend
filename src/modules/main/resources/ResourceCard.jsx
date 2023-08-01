import React, { useContext } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { useNavigate } from "react-router-dom";
import { Space, Button, message } from "antd";
import IonIcon from "../../../shared/components/IonIcon";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { GlobalContext } from "../../../shared/context/context";

const ResourceCard = ({ width = "24%", resource }) => {
  const { currentUser } = useContext(GlobalContext);

  const deletePin = (id) => {
    client.delete(id).then(() => {
      message.success(
        "File deleted successfully.Files are cached by server so they may not immediately disappear"
      );
    });
  };

  return (
    <ResourceCardWrapper width={width}>
      <ImageWrapper>
        <img
          src={
            "https://img.freepik.com/premium-photo/file-folder-laptop-screen-blue-background-ai-digital-illustration_803320-178.jpg?w=2000"
          }
          alt="course-img"
        />
      </ImageWrapper>
      <ContentWrapper>
        <p>
          {resource.file.asset?.originalFilename} - {resource.file.asset?.size}B
        </p>
        <p className="course-lecturer">{resource?.urlLink}</p>
        <Space direction="horizontal" size="small">
          {resource?.sharerName ? (
            <p className="course-lecturer">{resource?.sharerName}</p>
          ) : (
            <p className="course-lecturer">{resource?.courseName}</p>
          )}

          <Button
            className="btn"
            icon={<IonIcon iconName={"cloud-download-outline"} />}
            href={`${resource.file?.asset?.url}?dl=`}
            target={"_blank"}
            download
          />
          {currentUser?.staff_id ||
          resource?.sharerName ==
            currentUser?.last_name + " " + currentUser?.other_names ? (
            <Button
              className="btn"
              icon={<IonIcon iconName={"trash-outline"} />}
              onClick={() => deletePin(resource._id)}
            />
          ) : null}
        </Space>
      </ContentWrapper>
    </ResourceCardWrapper>
  );
};

const ResourceCardWrapper = styled.div`
  width: ${(props) => props.width};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  padding-bottom: 0.5rem;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  padding-left: 1rem;

  & .btn {
    box-shadow: none;
    border-radius: 7px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & .course-lecturer {
    opacity: 0.7;
  }
`;

export default ResourceCard;
