import { message } from "antd";

export const errorMessageDisplay = (errorCodes) => {
  errorCodes.forEach((error) => message.error(error[1]));
};
