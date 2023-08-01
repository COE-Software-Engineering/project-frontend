import React from "react";
import { Calendar as AntdCalendar, Col, Row, Select } from "antd";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";

const Calendar = () => {
  const onPanelChange = (value, mode) => {};

  const CustomHeader = ({ value, type, onChange, onTypeChange }) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];
    let current = value.clone();
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
      current = current.month(i);
      months.push(localeData.monthsShort(current));
    }
    for (let i = start; i < end; i++) {
      monthOptions.push(
        <Select.Option key={i} value={i} className="month-item">
          {months[i]}
        </Select.Option>
      );
    }
    const year = value.year();
    const month = value.month();
    const options = [];
    for (let i = year - 10; i < year + 10; i += 1) {
      options.push(
        <Select.Option key={i} value={i} className="year-item">
          {i}
        </Select.Option>
      );
    }
    return (
      <div
        style={{
          padding: 8,
        }}
      >
        <Row gutter={8}>
          <Col>
            <Select
              size="small"
              popupMatchSelectWidth={false}
              className="my-select"
              value={month}
              onChange={(newMonth) => {
                const now = value.clone().month(newMonth);
                onChange(now);
              }}
            >
              {monthOptions}
            </Select>
          </Col>
          <Col>
            <Select
              size="small"
              popupMatchSelectWidth={false}
              className="my-select"
              value={year}
              onChange={(newYear) => {
                const now = value.clone().year(newYear);
                onChange(now);
              }}
            >
              {options}
            </Select>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <ComponentWrapper title={"Calendar"}>
      <AntdCalendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        mode="month"
        headerRender={(props) => <CustomHeader {...props} />}
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
