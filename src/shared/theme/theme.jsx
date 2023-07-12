export const defaultTheme = {
  primaryColor: "#5f59f7",
  secondaryColor: "#8c61ff",
  tertiaryColor: "#343090",
  tertiaryColor2: "#ff1a40",
};

export const lightTheme = {
  ...defaultTheme,
  bodyBackgroundColor: "#f4f6fc",
  textColor: "#181515",
  accentColor: "#21212b",
  accentColor2: "rgba(0, 0, 0, 0.02)",
  landingSecondaryColor: "#f8f8ff",
  borderColor: "rgba(0,0,0,0.1)",
  sidebarBorder: "rgba(0,0,0,0.05)",
};

export const darkTheme = {
  ...defaultTheme,
  bodyBackgroundColor: "#181820",
  textColor: "#ffffff",
  accentColor: "#21212b",
  accentColor2: "rgba(255, 255, 255, 0.01)",
  landingSecondaryColor: "#21212b",
  borderColor: "rgba(255,255,255,0.1)",
  sidebarBorder: "rgba(255,255,255,0.01)",
};
