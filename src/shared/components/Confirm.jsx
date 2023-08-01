import { Popconfirm } from "antd";
import React from "react";

const Confirm = ({ component, title, description, onCancel, onConfirm }) => {
  return (
    <Popconfirm
      autoAdjustOverflow={true}
      showArrow={false}
      color="transparent"
      title={title}
      description={description || null}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText="Yes"
      cancelText="No"
    >
      {component}
    </Popconfirm>
  );
};

export default Confirm;
