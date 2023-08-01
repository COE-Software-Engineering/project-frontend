import React, { useCallback, useState, useEffect } from "react";
import Empty from "../../../shared/components/Empty";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import { sharedResourcesQuery } from "../../../shared/helpers/sanity/sanityQueries";
import ResourceCard from "../resources/ResourceCard";
import { client } from "../../../shared/helpers/sanity/sanityClient";

const RecentResources = () => {
  const [resources, setResources] = useState([]);

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
    <ComponentWrapper
      title="Recent Shared Resources"
      styles={{ minHeight: "240px" }}
    >
      {resources.length === 0 ? (
        <Empty subText={"No recent resources!"} />
      ) : (
        <ContentWrapper>
          {resources.slice(0, 3).map((resource) => (
            <ResourceCard key={resource._id} resource={resource} />
          ))}
        </ContentWrapper>
      )}
    </ComponentWrapper>
  );
};

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

export default RecentResources;
