import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme/theme";
import './i18n/i18n.ts';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* MUI varsayılan stil sıfırlayıcı */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
