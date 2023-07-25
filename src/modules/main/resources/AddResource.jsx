import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, message, Upload } from "antd";
import { GlobalContext } from "../../../shared/context/context";
import { defaultTheme } from "../../../shared/theme/theme";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import FileUploader from "../files/FileUploader";

const AddResource = () => {
  const [loading, setLoading] = useState(false);
  const { createAnnouncement, currentUser } = useContext(GlobalContext);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // setLoading(true);
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    message.error(`announcement creation failed!`);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <ComponentWrapper title={"Send resource"}>
      <AddResourceWrapper>
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
            name="link"
            rules={[
              {
                message: "Invalid link!",
                whitespace: true,
                type: "url",
              },
            ]}
          >
            <Input className="input" placeholder="Resource Link" />
          </Form.Item>
          <Form.Item
            name="resourceFile"
            valuePropName="files"
            getValueFromEvent={normFile}
            // noStyle
            rules={[
              {
                // required: true,
                message: "Invalid resource file!",
                whitespace: true,
              },
            ]}
          >
            <FileUploader />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Send
            </Button>
          </Form.Item>
        </Form>
      </AddResourceWrapper>
    </ComponentWrapper>
  );
};

const AddResourceWrapper = styled.div`
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
    /* font-size: 12px; */
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

export default AddResource;
