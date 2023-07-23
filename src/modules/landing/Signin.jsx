import styled from "styled-components";
import { GlobalContext } from "../../shared/context/context";
import { Button, Checkbox, Form, Input, message } from "antd";
import { defaultTheme } from "../../shared/theme/theme";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { errorMessageDisplay } from "../../shared/helpers/functions/functions";
import { signinQuery } from "../../shared/helpers/axios/queries";
import axiosInstance from "../../shared/helpers/axios/axiosInstance";

const Signin = () => {
  const [isStudentSignin, setIsStudentSignin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    currentUser && navigate("/main");
  });

  const onFinish = async (values) => {
    const url = signinQuery(isStudentSignin ? "students" : "lecturers");

    setLoading(true);

    await axiosInstance
      .post(url, values)
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res?.data.errorCodes.length > 0) {
          errorMessageDisplay(res?.data.errorCodes);
        } else {
          setCurrentUser(res?.data.userInfo);
          navigate("/main");
        }
      })
      .catch((err) => {
        message.error("Sign in failed!");
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
    message.error(`Sign in failed!`);
  };

  const toggleAuth = () => {
    setIsStudentSignin((prev) => !prev);
  };

  return (
    <Wrapper>
      <h3>Welcome back,{isStudentSignin ? " Student" : " Lecturer"}</h3>
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

        <Form.Item>
          <Checkbox
            style={{ backgroundColor: "transparent" }}
            defaultChecked
            children={<p>Keep me signed in</p>}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign in
          </Button>
        </Form.Item>
      </Form>

      <small className="sign-in-toggle-wrapper" onClick={toggleAuth}>
        {isStudentSignin ? (
          <span>
            Are you a lecturer?{" "}
            <span style={{ color: `${defaultTheme.primaryColor}` }}>
              Sign in
            </span>
          </span>
        ) : (
          <span>
            Are you a student?{" "}
            <span style={{ color: `${defaultTheme.primaryColor}` }}>
              Sign in
            </span>
          </span>
        )}
      </small>
    </Wrapper>
  );
};

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

export default Signin;
