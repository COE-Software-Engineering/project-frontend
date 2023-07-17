import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { defaultTheme } from "../../shared/theme/theme";
import IonIcon from "../../shared/components/Ionicon";
import { useNavigate } from "react-router-dom";
import AnimationLayout from "../../shared/components/AnimationLayout";
import axios from "axios";

const StudentSignup = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://localhost:3001/students/signup", values)
      .then((response) => {
        console.log(response.data);
        if(!response.data.length){
          // navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed!`);
  };

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
                name="index_number"
                rules={[
                  {
                    required: true,
                    type: "text",
                    message: "Invalid index number!",
                  },
                ]}
              >
                <Input className="input" placeholder="Index no." />
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
                    type: "text",
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
                />{" "}
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
                <Button type="primary" htmlType="submit">
                  Sign up
                </Button>
              </Form.Item>
            </Form>
          </Wrapper>
        </FormWrapper>
      </StudentSignupWrapper>
    </AnimationLayout>
  );
};

const StudentSignupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
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

export default StudentSignup;
