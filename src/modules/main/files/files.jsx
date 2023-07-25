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

const Files = () => {
  const [files, setFiles] = useLocalStorage("my-vclass-psql-files", []);

  const uploadProps = {
    name: "files",
    action: "https://upload.imagekit.io/api/v1/files/upload",
    method: "POST",
    multiple: false,
    defaultFileList: files,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        setFiles(info.fileList);
      }
    },
    onDrop(e) {},
  };

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
              <Upload.Dragger
                {...uploadProps}
                itemRender={(ReactElement, file, fileList, actions) => {
                  return (
                    <FileItemWrapper>
                      <Space direction="horizontal" size={8}>
                        <IonIcon iconName="attach-outline" />
                        <Space direction="vertical" size={2}>
                          <p className="file_name">
                            {file.name} - {file.size / 1000}Kb
                          </p>
                          <small>
                            {moment(file.lastModified).format(
                              "dddd, Mo MMMM yyyy hh:mm a"
                            )}
                          </small>
                        </Space>
                      </Space>
                      <Space direction="horizontal" size={8}>
                        <Button
                          icon={
                            <IonIcon
                              iconName={"cloud-download-outline"}
                              onClick={actions.download}
                            />
                          }
                        />
                        <Button
                          icon={<IonIcon iconName={"trash-outline"} />}
                          onClick={actions.remove}
                        />
                      </Space>
                    </FileItemWrapper>
                  );
                }}
              >
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Lottie
                    animationData={uploadAnimation}
                    style={{ width: 100, height: 100 }}
                  />
                </p>
                <p className="ant-upload-text" style={{ fontSize: "13px" }}>
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint" style={{ fontSize: "12px" }}>
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
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

const FileItemWrapper = styled.div`
  width: 100%;
  min-height: 40px;
  border-radius: 7px;
  background: ${({ theme }) => theme.accentColor2};
  margin: 0.5rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & .file_name {
    font-weight: bold;
  }

  & button {
    box-shadow: none;
    border-radius: 7px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default Files;
