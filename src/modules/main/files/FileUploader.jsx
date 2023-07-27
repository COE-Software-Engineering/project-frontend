import React from "react";
import styled from "styled-components";
import { Button, Form, Space, Upload, message } from "antd";
import Lottie from "lottie-react";
import uploadAnimation from "../../../shared/helpers/lotties/upload.json";
import IonIcon from "../../../shared/components/IonIcon";
import moment from "moment";

const FileUploader = ({ setFiles, files = [] }) => {
  const uploadProps = {
    name: "files",
    action: "https://imagekit.io/api/v1/files/upload",
    method: "POST",
    multiple: true,
    defaultFileList: files,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        setFiles(info.fileList);
      }
    },
    onDrop(e) {},
    onDownload(e) {},
  };

  return (
    <Upload.Dragger
      {...uploadProps}
      openFileDialogOnClick={true}
      itemRender={(ReactElement, file, fileList, actions) => {
        return (
          <FileItemWrapper>
            <Space direction="horizontal" size={8}>
              <IonIcon iconName="attach-outline" />
              <Space direction="vertical" size={2}>
                <p className="file_name" onClick={actions.preview}>
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
  );
};

export const FileItemWrapper = styled.div`
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
    cursor: pointer;
  }

  & .file_name:hover {
    text-decoration: underline;
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

export default FileUploader;
