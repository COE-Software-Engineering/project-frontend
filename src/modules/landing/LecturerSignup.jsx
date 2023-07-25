import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { defaultTheme } from "../../shared/theme/theme";
import IonIcon from "../../shared/components/IonIcon";
import { useNavigate } from "react-router-dom";
import AnimationLayout from "../../shared/components/AnimationLayout";
import SignupComplete from "./SignupComplete";
import { GlobalContext } from "../../shared/context/context";

const LecturerSignup = () => {
  const { signupUser, registerCourse, currentUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords don't match!");
      return;
    }
    const signupData = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      staffId: values.staffId,
    };
    setLoading(true);
    signupUser("lecturer", signupData, () => {
      setPageIndex((prev) => prev + 1);
      setLoading(false);
    });
  };

  const onFinishFailed = (errorInfo) => {
    message.error(`Signup failed!`);
  };

  const PersonalDetailsSection = () => (
    <>
      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            min: 3,
            type: "string",
            message: "Invalid full name!",
            whitespace: true,
          },
        ]}
      >
        <Input className="input" placeholder="Full name" />
      </Form.Item>
      <Form.Item
        name="staffId"
        rules={[
          {
            required: true,
            min: 5,
            message: "Invalid staff id!",
            whitespace: true,
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
            whitespace: true,
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
            min: 6,
            message: "Invalid password!",
            whitespace: true,
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
        name="confirmPassword"
        rules={[
          {
            required: true,
            min: 6,
            message: "Invalid password!",
            whitespace: true,
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
        <Button
          htmlType="submit"
          type="primary"
          loading={loading}
          className="submit-btn"
        >
          Next
        </Button>
      </Form.Item>
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
          <Wrapper pageIndex={pageIndex}>
            <h3>"Let's help you get started"</h3>
            <Form
              form={form}
              name="lecturer-signup"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              preserve={true}
              scrollToFirstError={true}
              autoComplete="on"
              layout="vertical"
            >
              {pageIndex === 1 ? (
                <PersonalDetailsSection />
              ) : (
                <SignupComplete />
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

  & .add-field-btn {
    display: flex;
    align-items: center;
    justify-content: center;
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
  }

  & .submit-btn {
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
    display: ${(props) => (props.pageIndex > 2 ? "none" : "block")};
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
