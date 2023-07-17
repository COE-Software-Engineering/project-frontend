import { Button, Checkbox, Dropdown, Form, Input, message } from "antd";
import styled from "styled-components";
import { defaultTheme } from "../../shared/theme/theme";
import { useState } from "react";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import IonIcon from "../../shared/components/Ionicon";
import { useNavigate } from "react-router-dom";
import AnimationLayout from "../../shared/components/AnimationLayout";
import axios from "axios";

const Landingpage = () => {
  const [isStudentSignin, setIsStudentSignin] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let endpoint =
      "http://localhost:3001/" +
      (isStudentSignin ? "students" : "lecturers") +
      "/signin";
    console.log("Success:", values);
    axios
      .post(endpoint, values)
      .then((response) => {
        console.log(response.data);
        if ((response.data.length === 0)) {
          navigate("/main");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // navigate("/main");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`Sign in failed!`);
  };

  const toggleAuth = () => {
    setIsStudentSignin((prev) => !prev);
  };

  const items = [
    {
      key: "1",
      label: <p>As lecturer</p>,
      onClick: () => navigate("/lecturer-signup"),
    },
    {
      key: "2",
      label: <p>As student</p>,
      onClick: () => navigate("/student-signup"),
    },
  ];

  return (
    <AnimationLayout>
      <LandingPageWrapper>
        <HeaderWrapper>
          <img src="/knust-logo.png" alt="logo" />

          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <Button
              type="ghost"
              style={{
                backgroundColor: "transparent",
                boxShadow: 0,
                borderRadius: "7px",
                fontSize: "12px",
              }}
            >
              Sign up
            </Button>
          </Dropdown>
        </HeaderWrapper>
        <HeroWrapper>
          <img src="/main-banner-img.svg" alt="" />
          <div>
            <h3>COE Virtual Classroom</h3>
            <p>
              This web app seeks to bridge the gap between students and
              lecturers in terms of communication between them.
            </p>
          </div>
        </HeroWrapper>
        <FormWrapper>
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

              <Form.Item>
                <Checkbox
                  style={{ backgroundColor: "transparent" }}
                  defaultChecked
                  children={<p>Keep me signed in</p>}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
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
        </FormWrapper>
      </LandingPageWrapper>
    </AnimationLayout>
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

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

export const HeaderWrapper = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0 2rem;
  z-index: 10;
  background-color: transparent;
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;

  & img {
    width: 25px;
    height: 30px;
  }

  & button {
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const HeroWrapper = styled.div`
  width: 60%;
  height: 100vh;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.herobg};
  text-align: center;

  img {
    width: 50%;
    height: 50%;
  }

  h3 {
    font-size: 2rem;
    margin: 10px 0;
    font-family: "DM Serif Text", sans-serif;
  }

  p {
    width: 60%;
    margin: auto;
    line-height: 1.3rem;
  }

  & .get-started-btn {
    display: none;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }

    & img {
      width: 100%;
      height: 40%;
    }
  }
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 100vh;
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
      height: 80vh;
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

export default Landingpage;
