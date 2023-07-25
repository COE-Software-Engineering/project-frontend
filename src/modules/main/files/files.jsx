import React from "react";
import styled from "styled-components";
import { Form, message } from "antd";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";

import { useLocalStorage } from "../../../shared/helpers/hooks/useLocalStorage";
import FileUploader from "./FileUploader";

const Files = () => {
  const [files, setFiles] = useLocalStorage("my-vclass-files", []);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [form] = Form.useForm();

  const onFinish = async (values) => {};

  const onFinishFailed = (errorInfo) => {
    message.error(`File upload failed!`);
  };

  return (
    <AnimationLayout>
      <FilesWrapper>
        <Titlebar title="My Files" />
        <ContentWrapper>
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
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <FileUploader setFiles={setFiles} files={files} />
            </Form.Item>
          </Form>
        </ContentWrapper>
      </FilesWrapper>
    </AnimationLayout>
  );
};

const FilesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

export default Files;
