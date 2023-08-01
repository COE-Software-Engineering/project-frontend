import React from "react";
import styled from "styled-components";
import { Button, Form, Space, Upload, message } from "antd";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import Lottie from "lottie-react";
import uploadAnimation from "../../../shared/helpers/lotties/upload.json";
import IonIcon from "../../../shared/components/IonIcon";
import moment from "moment";
import { useLocalStorage } from "../../../shared/helpers/hooks/useLocalStorage";
import FileUploader from "../../../shared/components/FileUploader";

const Files = () => {
  const [files, setFiles] = useLocalStorage("my-vclass-psql-files", []);

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
              <FileUploader files={files} setFiles={setFiles} />
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
