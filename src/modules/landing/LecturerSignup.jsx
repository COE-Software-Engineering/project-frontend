import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { defaultTheme } from "../../shared/theme/theme";
import IonIcon from "../../shared/components/Ionicon";
import { useNavigate } from "react-router-dom";
import AnimationLayout from "../../shared/components/AnimationLayout";

const LecturerSignup = () => {
  const navigate = useNavigate();

  const [pageIndex, setPageIndex] = useState(1);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed!`);
  };

  const PersonalDetailsSection = () => (
    <>
      <Form.Item
        name="full_name"
        rules={[
          {
            required: true,
            type: "string",
            message: "Invalid full name!",
          },
        ]}
      >
        <Input className="input" placeholder="Full name" />
      </Form.Item>
      <Form.Item
        name="staff_id"
        rules={[
          {
            required: true,
            // type: "number",
            message: "Invalid staff id!",
          },
        ]}
      >
        <Input className="input" placeholder="Staff id" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Invalid email!",
          },
        ]}
      >
        <Input className="input" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Invalid password!",
          },
        ]}
      >
        <Input.Password
          className="input"
          placeholder="Password"
          styles={{
            input: {
              backgroundColor: "transparent",
              fontSize: "12px",
            },
          }}
        />
      </Form.Item>
      <Form.Item
        name="confirm_password"
        rules={[
          {
            required: true,
            message: "Invalid password!",
          },
        ]}
      >
        <Input.Password
          className="input"
          placeholder="Confirm password"
          styles={{
            input: {
              backgroundColor: "transparent",
              fontSize: "12px",
            },
          }}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          style={{ backgroundColor: "transparent" }}
          defaultChecked
          children={<p>Keep me signed in</p>}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={() => setPageIndex((prev) => prev + 1)}>
          Next
        </Button>
      </Form.Item>
    </>
  );

  const CourseDetailsSection = () => (
    <>
      <Form.Item
        name="course_name"
        rules={[
          {
            required: true,
            type: "string",
            message: "Invalid course name!",
          },
        ]}
      >
        <Input className="input" placeholder="Course name" />
      </Form.Item>
      <Form.Item
        name="course_code"
        rules={[
          {
            required: true,
            type: "string",
            message: "Invalid course code!",
          },
        ]}
      >
        <Input className="input" placeholder="Course code" />
      </Form.Item>
      <Form.Item
        name="credit_hours"
        rules={[
          {
            required: true,
            // type: "number",
            message: "Invalid credit hours!",
          },
        ]}
      >
        <Input className="input" placeholder="Credit Hours" />
      </Form.Item>
      <Form.Item
        name="course_bio"
        rules={[
          {
            required: false,
            message: "Invalid details!",
          },
        ]}
      >
        <Input.TextArea
          rows={4}
          className="input"
          placeholder="About Course"
          styles={{
            input: {
              backgroundColor: "transparent",
              fontSize: "12px",
            },
          }}
        />
      </Form.Item>

      <Form.Item>
        <Checkbox
          style={{ backgroundColor: "transparent" }}
          defaultChecked
          children={<p>Add more course</p>}
        />
      </Form.Item>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Form.Item>
          <Button
            type="default"
            style={{ backgroundColor: "transparent" }}
            onClick={() => setPageIndex((prev) => prev - 1)}
          >
            Back
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </div>
    </>
  );

  return (
    <AnimationLayout>
      <StudentSignupWrapper>
        <Button
          type="ghost"
          shape="circle"
          icon={<IonIcon iconName={"arrow-back"} />}
          style={{ position: "absolute", top: "10px", left: "10px" }}
          onClick={() => navigate(-1)}
        />
        <FormWrapper>
          <Wrapper>
            <h3>Let's help you get started</h3>
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
              {pageIndex === 1 ? (
                <PersonalDetailsSection />
              ) : (
                <CourseDetailsSection />
              )}
            </Form>
          </Wrapper>
        </FormWrapper>
      </StudentSignupWrapper>
    </AnimationLayout>
  );
};

const StudentSignupWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.accentColor2};

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

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  h3 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    /* font-size: 16px; */
    font-family: "DM Serif Text", "Poppins", sans-serif;
  }

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

  ${MEDIA_QUERIES.MOBILE} {
    & {
      padding: 1rem;
    }
  }
`;

export default LecturerSignup;
