export const defaultTheme = {
  primaryColor: {
    50: "#9afaff",
    100: "#72f8ff",
    200: "#4af6ff",
    300: "#23f4ff",
    400: "#00ecf9",
    500: "#07d1dc",
    600: "#0cb6bf",
    700: "#109ca3",
    800: "#138389",
    900: "#146c70",
  },
};

export const lightTheme = {
  ...defaultTheme,
  bodyBackgroundColor: "#fff",
  textColor: "#181515",
};

export const darkTheme = {
  ...defaultTheme,
  bodyBackgroundColor: "#181820",
  textColor: "#fff",
  accentColor: "#21212b",
};
