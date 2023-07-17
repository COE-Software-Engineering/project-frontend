import React from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import Empty from "../../../shared/components/Empty";

const Timeline = () => {
  return (
    <ComponentWrapper title={"Timeline"}>
      <Empty subText={"No announcements available."} />
    </ComponentWrapper>
  );
};

export default Timeline;
