import { Breadcrumb } from "antd";
import React from "react";

const BreadCrumb = ({ items = [] }) => {
  return <Breadcrumb separator=">" items={items} />;
};

export default BreadCrumb;
