import React from "react";
import { Empty as EmptyComponent } from "antd";
import Lottie from "lottie-react";
import EmptyAnimation from "../helpers/lotties/empty2.json";

const Empty = ({ subText }) => {
  return (
    <EmptyComponent
      image={<Lottie animationData={EmptyAnimation} />}
      description={<p>{subText}</p>}
      imageStyle={{ width: 80, height: 80 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    />
  );
};

export default Empty;
