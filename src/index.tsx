import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./components/styles/Global";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./components/styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>

    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle />
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
