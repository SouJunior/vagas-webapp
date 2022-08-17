import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight?: string;
      primaryDark?: string;
      secondary: string;
      secondaryLight?: string;
      secondaryDark?: string;
      danger?: string;
      success?: string;
      warning?: string;
      info?: string;
      muted?: string;
      black?: string;
    };

    breakpoints: {
      mobile: {
        sm?: string;
        md: string;
        lg?: string;
      };
      tablet: string;
      laptop: {
        md: string;
        lg?: string;
      };
    };
  }
}
