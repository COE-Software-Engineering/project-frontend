import React, { useCallback, useEffect, useState } from "react";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import Titlebar from "../../../shared/components/Titlebar";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import AddResource from "./AddResource";
import Empty from "../../../shared/components/Empty";
import { Spin, Space, Button } from "antd";
import IonIcon from "../../../shared/components/IonIcon";
import { FileItemWrapper } from "../files/FileUploader";
import moment from "moment";

const SharedResources = () => {
  const [resources, setResources] = useState(["", "", "", ""]);
  const [loading, setLoaing] = useState(false);

  const getResources = useCallback(() => {}, []);

  useEffect(() => {}, []);

  return (
    <AnimationLayout>
      <SharedResourcesWrapper>
        <MainWrapper>
          <Titlebar title="Shared Resources" />
          {loading ? (
            <Spin />
          ) : resources.length === 0 ? (
            <Empty subText={"No resources available!"} />
          ) : (
            resources.map((resource) => (
              <FileItemWrapper key={resource?._id}>
                <Space direction="horizontal" size={8}>
                  <IonIcon iconName="attach-outline" />
                  <Space direction="vertical" size={2}>
                    <p className="file_name">
                      {/* {file.name} - {file.size / 1000}Kb */}
                      File name
                    </p>
                    <small>
                      By Solomon {moment().format("dddd, Mo MMMM yyyy hh:mm a")}
                    </small>
                  </Space>
                </Space>
                <Space direction="horizontal" size={8}>
                  <Button
                    icon={
                      <IonIcon
                        iconName={"cloud-download-outline"}
                        // onClick={actions.download}
                      />
                    }
                  />
                  <Button
                    icon={<IonIcon iconName={"trash-outline"} />}
                    // onClick={actions.remove}
                  />
                </Space>
              </FileItemWrapper>
            ))
          )}
        </MainWrapper>
        <AsideWrapper>
          <AddResource />
        </AsideWrapper>
      </SharedResourcesWrapper>
    </AnimationLayout>
  );
};

const SharedResourcesWrapper = styled.div`
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

const MainWrapper = styled.section`
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

const ResourceItemWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.accentColor2};
  min-height: 60px;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 7px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & button {
    box-shadow: none;
    border-radius: 7px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid red;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const DescriptionWrapper = styled.div``;

export default SharedResources;
