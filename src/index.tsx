import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyle } from "./styles/Global";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
