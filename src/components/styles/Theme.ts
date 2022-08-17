import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
  colors: {
    primary: "#1165BA", 
    primaryLight: "#086BCF",
    primaryDark: "#014C97",
 
    secondary: "#C1DFFF",
    secondaryLight: "#ECF5FF",
    secondaryDark: "#84BBF8",

    // success: "#00C851",
    danger: "#BD0000",
    muted: "#F3F3F3",
    black: "#151515",
  },

  breakpoints: {
    mobile: {
      sm: "320px",
      md: "375px",
      lg: "425px",
    },
    tablet: "768px",
    laptop: {
      md: "1024px",
      lg: "1440px",
    },
  },
};
 