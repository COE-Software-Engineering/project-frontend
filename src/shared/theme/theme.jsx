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
  accentColor: "#21212b",
  accentColor2: "#f8f8ff",
  landingSecondaryColor: "#f8f8ff",
  borderColor: "rgba(0,0,0,0.1)",
};

export const darkTheme = {
  ...defaultTheme,
  bodyBackgroundColor: "#181820",
  textColor: "#fff",
  accentColor: "#21212b",
  accentColor2: "rgba(255, 255, 255, 0.02)",
  landingSecondaryColor: "#21212b",
  borderColor: "rgba(255,255,255,0.1)",
};
