import React from "react";
import { Calendar as AntdCalendar } from "antd";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";

const Calendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <ComponentWrapper title={"Calendar"}>
      <AntdCalendar
        fullscreen={false}
        // headerRender={<>Hello</>}
        onPanelChange={onPanelChange}
        mode="month"
        style={{
          width: "100%",
          height: "100%",
          fontSize: "10px",
          backgroundColor: "transparent",
        }}
      />
    </ComponentWrapper>
  );
};

export default Calendar;
