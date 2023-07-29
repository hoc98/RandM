import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ApolloAppProvider from "./lib/ApolloAppProvider";
import { ThemeProvider } from "@mui/material";
import theme from "./config/Theme";
import CssBaseline from '@mui/material/CssBaseline';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloAppProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />

      <App />
      </ThemeProvider>
    </ApolloAppProvider>
  </React.StrictMode>
);

reportWebVitals();
