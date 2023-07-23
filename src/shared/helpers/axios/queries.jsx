export const signupQuery = (userType) => {
  return `/${userType}/signup`;
};

export const signinQuery = (userType) => {
  return `/${userType}/signin`;
};

export const changePasswordQuery = (userType) => {
  return `/${userType}/change_password`;
}