import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* RESET CSS */
  :root {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  /* ESTILOS GERAIS */
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem /* 16px */;
    color: #000;
  }
`;
