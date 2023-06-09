import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import { defaultTheme } from "../shared/theme/theme";
import { useState } from "react";

const Landingpage = () => {
  const [isStudentSignin, setIsStudentSignin] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);

    if (isStudentSignin) {
      if (values.confirmPassword === values.password) {
        //something
      } else {
        message.error("Passwords do not match!");
      }
    } else {
      //something
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed!`);
  };

  const toggleAuth = () => {
    setIsStudentSignin((prev) => !prev);
  };

  return (
    <LandingPageWrapper>
      <HeroWrapper>
        <img src="/hero.png" alt="" />
        <div>
          <h3>COE Virtual Classroom</h3>
          <p>
            This web app seeks to bridge the gap between students and lecturers
            in terms of communication between them.
          </p>
        </div>
      </HeroWrapper>
      <FormWrapper>
        <Wrapper>
          <h3>Sign in</h3>

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
                  min: 7,
                  message: "Invalid password!",
                },
              ]}
            >
              <Input className="input" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" block htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <small
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isStudentSignin ? (
              <span>
                Are you a lecturer?{" "}
                <span style={{ color: `${defaultTheme.primaryColor[400]}` }}>
                  Sign in
                </span>
              </span>
            ) : (
              <span onClick={toggleAuth}>
                Are you a student?{" "}
                <span style={{ color: `${defaultTheme.primaryColor[400]}` }}>
                  Sign in
                </span>
              </span>
            )}
          </small>
        </Wrapper>
      </FormWrapper>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  scroll-behavior: smooth;
`;

const HeroWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.herobg};
  text-align: center;

  img {
    width: 40%;
    height: 40%;
  }

  h3 {
    font-size: 2rem;
    margin: 10px 0;
    font-family: "Lobster Two";
  }

  p {
    width: 60%;
    margin: auto;
    line-height: 1.3rem;
  }

  & .get-started-btn {
    display: none;
  }
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  background-color: ${({ theme }) => theme.accentColor};

  & .input {
    background-color: transparent;
    border-radius: 10px;
  }

  & .input::placeholder {
    font-size: 12px;
  }

  & button {
    border-radius: 10px;
    font-size: 12px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem;

  small {
    cursor: pointer;
  }

  h3 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 16px;
  }

  form {
    width: 100%;
  }
`;

export default Landingpage;
