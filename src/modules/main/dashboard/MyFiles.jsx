import React from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import Empty from "../../../shared/components/Empty";

const MyFiles = () => {
  return (
    <ComponentWrapper title="My Files">
      <Empty subText={"No files available."} />
    </ComponentWrapper>
  );
};

export default MyFiles;
