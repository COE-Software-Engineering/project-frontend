import React, { useState, useContext } from "react";
import { Form, Input, Button, message } from "antd";
import FileUploader from "../../../shared/components/FileUploader";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import { GlobalContext } from "../../../shared/context/context";
import { client } from "../../../shared/helpers/sanity/sanityClient";

const AddResource = ({ setOpenModal }) => {
  const { currentUser } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileAsset, setFileAsset] = useState(null);

  const [form] = Form.useForm();

  const getUploadType = (fileName) => {
    if (fileName.endsWith(".png") || fileName.endsWith(".jpg")) {
      return "image";
    }
    return "file";
  };

  const uploadFile = (file, formValues) => {
    setLoading(true);
    client.assets
      .upload(getUploadType(file.name), file, {
        contentType: file.type,
        filename: file.name,
      })
      .then((document) => {
        setFileAsset(document);
        if (document?._id) {
          const doc = {
            _type: "shared_resource",
            urlLink: formValues.url_link,
            sharerName: currentUser?.last_name + " " + currentUser?.other_names,
            file: {
              _type: "file",
              asset: {
                _type: "reference",
                _ref: document?._id,
              },
            },
          };

          client
            .create(doc)
            .then(() => {
              setLoading(false);
              setOpenModal(false);
              message.success(
                "Resource uploaded successfully. Uploaded files might take a bit long to upload. Refresh after some time to see changes."
              );
            })
            .catch((err) => {
              console.error(err);
              setLoading(false);
              message.error("Error submitting resource!");
            });
        } else {
          setLoading(false);
          message.error("Error uploading resource!");
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Error uploading file!");
        setLoading(false);
      });
  };

  const onFinish = async (values) => {
    uploadFile(files[0], values);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  return (
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
          name="url_link"
          rules={[
            {
              type: "url",
              message: "Invalid url link!",
              whitespace: true,
            },
          ]}
        >
          <Input className="input" placeholder="Url or Link" />
        </Form.Item>

        <Form.Item
          name="file"
          rules={[
            {
              message: "Invalid file!",
              whitespace: true,
            },
          ]}
        >
          <FileUploader files={files} setFiles={setFiles} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </AddResourceWrapper>
  );
};

const AddResourceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & form {
    width: 100%;
  }

  & .input {
    background-color: transparent;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.accentColor2};
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
