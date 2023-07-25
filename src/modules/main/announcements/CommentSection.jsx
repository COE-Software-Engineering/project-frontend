import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, message } from "antd";
import { defaultTheme } from "../../../shared/theme/theme";
import { GlobalContext } from "../../../shared/context/context";
import axiosInstance from "../../../shared/helpers/axios/axiosInstance";

const CommentSection = ({ getAllAnnouncements }) => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(GlobalContext);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    const annouuncementData = { ...values, staff_id: currentUser.staff_id };

    await axiosInstance
      .post("/lecturers/make_announcement", annouuncementData)
      .then(() => {
        setLoading(false);
        message.success("Announcement created successfully :)");
        form.resetFields();
        getAllAnnouncements();
      })
      .catch((err) => console.error(err));
  };

  const onFinishFailed = (errorInfo) => {
    message.error(`Authentication failed!`);
  };

  return (
    <CommentSectionWrapper>
      <Form
        form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        layout="vertical"
      >
        <Form.Item
          name="title"
          rules={[
            {
              message: "Invalid title!",
              whitespace: true,
            },
          ]}
        >
          <Input className="input" placeholder="Title (optional)" />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: "Invalid message!",
              whitespace: true,
            },
          ]}
        >
          <Input.TextArea rows={7} className="input" placeholder="Message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Send
          </Button>
        </Form.Item>
      </Form>
    </CommentSectionWrapper>
  );
};

const CommentSectionWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  bottom: 20px;
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
  }

  & .sign-up-btn-wrapper p {
    color: ${defaultTheme.primaryColor};
    cursor: pointer;
  }

  & .sign-in-toggle-wrapper {
    position: absolute;
    bottom: 10px;
    padding: 1rem 0;
    font-size: 11px;
    cursor: pointer;
  }
  & .input {
    background-color: transparent;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    border: none;
  }

  & .input::placeholder {
    font-size: 12px;
  }

  & button {
    font-size: 12px;
    border-radius: 7px;
    box-shadow: none;
    width: 100px;
  }
`;

export default CommentSection;
