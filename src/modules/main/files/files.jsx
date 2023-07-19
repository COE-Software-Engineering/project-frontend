import React, { useState, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../../shared/theme/theme";
import { Button, Form, Input, Space, Upload, message } from "antd";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import { GlobalContext } from "../../../shared/context/context";
import { userFilesQuery } from "../../../shared/helpers/sanity/sanityQueries";
import Lottie from "lottie-react";
import uploadAnimation from "../../../shared/helpers/lotties/upload.json";
import IonIcon from "../../../shared/components/Ionicon";
import moment from "moment";

const Files = () => {
  const { currentUser } = useContext(GlobalContext);

  const [files, setFiles] = useState([]);

  const [fileAsset, setFileAsset] = useState(null);

  const uploadProps = {
    name: "files",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // const uploadFile = (e) => {
  //   const { type, name } = e.target.files[0];
  //   if (
  //     type === "image/png" ||
  //     type === "image/jpeg" ||
  //     type === "image/svg" ||
  //     type === "image/gif" ||
  //     type === "image/tiff"
  //   ) {
  //     client.assets
  //       .upload("file", e.target.files[0], {
  //         contentType: type,
  //         filename: name,
  //       })
  //       .then((document) => {
  //         setImageAsset(document);
  //       })
  //       .catch((err) => console.log(err));
  //   } else {
  //     return;
  //   }
  // };

  // const onFinish = (values) => {
  //   console.log("Success:", values);

  //   const doc = {
  //     _type: "pin",
  //     title: values.title,
  //     about: values.about,
  //     destination: values.destination,
  //     image: {
  //       _type: "image",
  //       asset: {
  //         _type: "reference",
  //         _ref: imageAsset?._id,
  //       },
  //     },
  //     userId: user._id,
  //     postedBy: {
  //       _type: "postedBy",
  //       _ref: user._id,
  //     },
  //     category: values.category,
  //   };

  //   client.create(doc).then(() => {
  //     navigate("/");
  //   });
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`File upload failed!`);
  };

  // const fetchFiles = useCallback(async () => {
  //   const q = userFilesQuery(currentUser?._id);
  //   await client
  //     .fetch(q)
  //     .then((res) => {
  //       setFiles(res);
  //     })
  //     .catch((err) => console.error(err));
  // }, [currentUser?._id]);

  // useEffect(() => {
  //   fetchFiles();
  // }, [currentUser._id, fetchFiles]);

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
  /* border: 1px solid red; */
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
    /* flex-wrap: wrap; */
    align-items: center;
  }
`;

export default Files;
