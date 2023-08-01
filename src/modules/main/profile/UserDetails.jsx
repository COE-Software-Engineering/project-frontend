import React, { useContext } from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import { GlobalContext } from "../../../shared/context/context";
import styled from "styled-components";
import { Space } from "antd";

const UserDetails = () => {
  const { currentUser } = useContext(GlobalContext);

  const userDetails = [
    {
      type: "Full Name",
      value: currentUser?.last_name + " " + currentUser.other_names,
    },
    {
      type: "Gender",
      value: currentUser?.gender,
    },

    {
      type: currentUser?.staff_id ? "Staff id" : "Index number",
      value: currentUser?.staff_id
        ? currentUser.staff_id
        : currentUser?.index_number,
    },
    {
      type: "Email",
      value: currentUser?.email,
    },
    currentUser?.staff_id
      ? {
          type: "Office Number",
          value: currentUser?.office_number,
        }
      : {
          type: "Reference Number",
          value: currentUser?.reference_number,
        },
  ];

  return (
    <ComponentWrapper title="Personal Details">
      {userDetails.map((item) => (
        <ItemWrapper key={item}>
          <Space>
            <p className="item_type">{item.type}</p>
            <p className="item_value">{item.value}</p>
          </Space>
        </ItemWrapper>
      ))}
    </ComponentWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
  width: 100%;

  & .item_type {
    font-weight: bold;
    margin-right: 2rem;
    min-width: 100px;
  }
`;

export default UserDetails;
