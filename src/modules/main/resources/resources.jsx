import React, { useState, useEffect, useCallback } from "react";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import Titlebar from "../../../shared/components/Titlebar";
import Empty from "../../../shared/components/Empty";
import IonIcon from "../../../shared/components/IonIcon";
import { Button, message } from "antd";
import CustomModal from "../../../shared/components/CustomModal";
import AddResource from "./AddResource";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { sharedResourcesQuery } from "../../../shared/helpers/sanity/sanityQueries";
import ResourceCard from "./ResourceCard";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const fetchSharedResources = useCallback(async () => {
    await client
      .fetch(sharedResourcesQuery)
      .then((res) => {
        setResources(res);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        message.error("Failed to load shared resources!");
      });
  }, []);

  useEffect(() => {
    fetchSharedResources();
  }, []);

  return (
    <AnimationLayout>
      <ResourcesWrapper>
        <Titlebar
          title={"Shared Resources"}
          rightComponent={
            <Button
              className="title-btn"
              icon={<IonIcon iconName="add" />}
              onClick={() => setOpenModal(true)}
            >
              Add resource
            </Button>
          }
        />
        {resources.length === 0 ? (
          <Empty subText={"No shared resources!"} />
        ) : (
          <ContentWrapper>
            {resources.map((resource) => (
              <ResourceCard
                key={resource._id}
                width={"24%"}
                resource={resource}
              />
            ))}
          </ContentWrapper>
        )}
        <CustomModal
          open={openModal}
          onCancel={() => setOpenModal(false)}
          title="Add resource"
        >
          <AddResource setOpenModal={setOpenModal} />
        </CustomModal>
      </ResourcesWrapper>
    </AnimationLayout>
  );
};

const ResourcesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */

  & .title-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: transparent !important;
    font-size: 12px;
    border-radius: 7px;
    box-shadow: none;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

export default Resources;
