export const defaultTheme = {
  primaryColor: "#5f59f7",
  secondaryColor: "#8c61ff",
  tertiaryColor: "#343090",
  tertiaryColor2: "#ff1a40",
};

export const lightTheme = {
  ...defaultTheme,
  bodyBackgroundColor: "#fafbff",
  textColor: "#181515",
  accentColor: "#21212b",
  accentColor2: "#f4f6fc",
  landingSecondaryColor: "#f8f8ff",
  borderColor: "rgba(0,0,0,0.1)",
};

export const darkTheme = {
  ...defaultTheme,
  bodyBackgroundColor: "#181820",
  textColor: "#ddd",
  accentColor: "#21212b",
  accentColor2: "rgba(255, 255, 255, 0.01)",
  landingSecondaryColor: "#21212b",
  borderColor: "rgba(255,255,255,0.1)",
};
