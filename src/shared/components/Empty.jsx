import React from "react";
import { Empty as EmptyComponent } from "antd";

const Empty = ({ subText }) => {
  return (
    <EmptyComponent
      image={EmptyComponent.PRESENTED_IMAGE_SIMPLE}
      description={subText}
    />
  );
};

export default Empty;
