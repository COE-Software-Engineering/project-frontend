import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { Button, Form, Input, Segmented, Select, Steps } from "antd";
import IonIcon from "../../shared/components/Ionicon";
import { defaultTheme } from "../../shared/theme/theme";

const LecturerSignup = () => {
  const [value, setValue] = useState("personalDetails");

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Success:", values);

    message.success("Message submitted :)");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const PersonalDetailsWrapper = () => (
    <>
      <div className="form-divider">
        <Form.Item
          className="form-item"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Invalid first name!",
            },
          ]}
        >
          <Input className="input-field" placeholder="First Name" />
        </Form.Item>
        <Form.Item
          className="form-item"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Invalid last name!",
            },
          ]}
        >
          <Input className="input-field" placeholder="Last Name" />
        </Form.Item>
      </div>
      <div className="form-divider">
        <Form.Item
          className="form-item"
          name="gender"
          rules={[
            {
              required: true,
              message: "Invalid gender!",
            },
          ]}
        >
          <Input className="input-field" placeholder="Gender" />
          {/* <Select
            // defaultValue="lucy"
            className="select-input"
            placeholder="Gender"
            style={{ backgroundColor: "rebeccapurple" }}
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
            ]}
          /> */}
        </Form.Item>
        <Form.Item
          className="form-item"
          name="officeAddress"
          rules={[
            {
              required: true,
              message: "Invalid office address!",
            },
          ]}
        >
          <Input className="input-field" placeholder="Office Address" />
        </Form.Item>
      </div>
      <Form.Item
        name="bio"
        rules={[
          {
            required: true,
            message: "Invalid bio!",
          },
        ]}
      >
        <Input.TextArea className="message-field" placeholder="Bio" rows={6} />
      </Form.Item>
      <div className="form-divider">
        <Form.Item
          className="form-item"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Invalid phone number!",
            },
          ]}
        >
          <Input className="input-field" placeholder="Phone number" />
        </Form.Item>
        <Form.Item
          className="form-item"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Invalid email!",
            },
          ]}
        >
          <Input className="input-field" placeholder="Email" />
        </Form.Item>
      </div>
      <div className="form-divider">
        <Form.Item
          className="form-item"
          name="password"
          rules={[
            {
              required: true,
              message: "Invalid pasword!",
            },
          ]}
        >
          <Input className="input-field" placeholder="Password" />
        </Form.Item>
        <Form.Item
          className="form-item"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Invalid password!",
            },
          ]}
        >
          <Input className="input-field" placeholder="Confirm Password" />
        </Form.Item>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </>
  );

  const CourseDetailsWrapper = () => <>Course Details</>;

  return (
    <SignupWrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <h3>Let's help you get started</h3>
          <Segmented
            options={[
              {
                label: "Personal Details",
                value: "personalDetails",
                icon: <IonIcon iconName={"person-circle"} />,
              },
              {
                label: "Course Details",
                value: "courseDetails",
                icon: <IonIcon iconName={"school"} />,
              },
            ]}
            value={value}
            onChange={setValue}
            // block
            className="segmented-block"
          />
        </HeaderWrapper>
        <BodyWrapper>
          <FormWrapper>
            <Form
              id="myForm"
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
              {value === "personalDetails" ? (
                <PersonalDetailsWrapper />
              ) : (
                <CourseDetailsWrapper />
              )}
            </Form>
          </FormWrapper>
        </BodyWrapper>
      </ContentWrapper>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-behavior: smooth;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
  padding: 2rem 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    font-family: "DM Serif Text", sans-serif;
  }

  & .segmented-block {
    /* width: 100%; */
    background-color: ${({ theme }) => theme.accentColor};
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  /* background-color: ${({ theme }) => theme.accentColor2}; */
  border-radius: 10px;
  padding: 1rem;
`;

const FormWrapper = styled.div`
  width: 100%;

  ion-icon {
    color: rgba(230, 230, 255, 0.5);
  }

  .form-divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .form-item {
    width: 48%;
  }

  .select-input {
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.accentColor2};
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
  }

  .input-field,
  .message-field {
    border: none;
    border-radius: 4px;
    padding: 6px;
    background: ${({ theme }) => theme.accentColor2};
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
  }

  .message-field {
    height: 160px;
    align-items: flex-start;
  }

  textarea::placeholder,
  input::placeholder {
    color: rgba(230, 230, 255, 0.5);
    font-size: 12px;
  }

  button {
    font-size: 12px;
    border-radius: 7px;
    box-shadow: none;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      padding-right: 0px;
    }

    .form-divider {
      flex-direction: column;
    }

    .form-item {
      width: 100%;
    }

    .input-field,
    .message-field {
      margin: 0;
    }
  }
`;

export default LecturerSignup;
