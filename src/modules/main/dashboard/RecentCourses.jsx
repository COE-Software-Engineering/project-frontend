import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import Empty from "../../../shared/components/Empty";

const RecentCourses = () => {
  return (
    <ComponentWrapper title="Recent Courses" styles={{ height: "240px" }}>
      <p>No new courses!</p>
      {/* <Empty subText={"No recent courses!"} /> */}
    </ComponentWrapper>
  );
};

export default RecentCourses;
