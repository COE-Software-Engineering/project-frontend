import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input, Radio, message } from "antd";
import { GlobalContext } from "../../../shared/context/context";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import Titlebar from "../../../shared/components/Titlebar";
import {
  DARKTHEME,
  LIGHTTHEME,
  MEDIA_QUERIES,
} from "../../../shared/utils/constants";
import { defaultTheme } from "../../../shared/theme/theme";
import AnimationLayout from "../../../shared/components/AnimationLayout";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser, setAppTheme, appTheme } = useContext(GlobalContext);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    if (values.new_password !== values.new_password_confirm) {
      message.error("Passwords don't match!");
      return;
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error(`Authentication failed!`);
  };

  const onThemeChange = (e) => {
    setAppTheme(e.target.value);
  };

  return (
    <AnimationLayout>
      <SettingsWrapper>
        <Titlebar title={"My Settings"} />
        <ContentWrapper>
          <ComponentWrapper title={"Appearance"}>
            <Radio.Group
              style={{ width: "100%" }}
              buttonStyle="solid"
              onChange={onThemeChange}
              defaultValue={appTheme}
              value={appTheme}
            >
              <Radio.Button value={LIGHTTHEME} className="radio-btn">
                <img src="https://csshint.com/wp-content/uploads/2022/01/Css-Skeleton-Loader-Animation.jpg" />
              </Radio.Button>
              <Radio.Button value={DARKTHEME} className="radio-btn">
                <img src="https://blog.openreplay.com/images/3-ways-to-implement-skeleton-components-in-react/images/img1.png" />
              </Radio.Button>
            </Radio.Group>
          </ComponentWrapper>
          <ComponentWrapper title={"Change Password"}>
            <ChangePasswordWrapper>
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
                  name={currentUser.staff_id ? "staff_id" : "index_number"}
                  rules={[
                    {
                      required: true,
                      message: "Invalid title!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    className="input"
                    placeholder={
                      currentUser.staff_id ? "Staff id" : "Index number"
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="current_password"
                  rules={[
                    {
                      required: true,
                      message: "Invalid password!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input className="input" placeholder="Current password" />
                </Form.Item>
                <Form.Item
                  name="new_password"
                  rules={[
                    {
                      required: true,
                      message: "Invalid password!",
                      whitespace: true,
                    },
                    {
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&`~()*-]).{8,}$/,
                      message:
                        "Password must contain at least one uppercase, one lowercase, one number and one special character. It must also be at least 8 characters long.",
                    },
                  ]}
                >
                  <Input className="input" placeholder="New password" />
                </Form.Item>
                <Form.Item
                  name="new_password_confirm"
                  rules={[
                    {
                      required: true,
                      message: "Invalid password!",
                      whitespace: true,
                    },
                    {
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&`~()*-]).{8,}$/,
                      message:
                        "Password must contain at least one uppercase, one lowercase, one number and one special character. It must also be at least 8 characters long.",
                    },
                  ]}
                >
                  <Input className="input" placeholder="Confirm password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Update Password
                  </Button>
                </Form.Item>
              </Form>
            </ChangePasswordWrapper>
          </ComponentWrapper>
        </ContentWrapper>
      </SettingsWrapper>
    </AnimationLayout>
  );
};

const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }

  & .radio-btn {
    width: 35% !important;
    height: 200px !important;
    background-color: transparent;
    /* margin: 0rem 0.5rem !important; */
    border-radius: 7px;
  }

  & .radio-btn img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & .radio-btn {
      width: 50%;
      margin: 0;
    }
  }
`;

const ChangePasswordWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  bottom: 20px;
  display: flex;
  flex-direction: column;

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
`;

export default Settings;
