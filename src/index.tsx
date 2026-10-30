import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme";
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(    // connecting React + Real DOM
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
// Real DOM and Virtual DOM integration

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Report WebVitals - > U saytning qaysi joyi sekin ishlayotganini bilish uchun kerak; 
// Sahifada tugma yoki jadval ko‘rsatmaydi — o‘lchov natijalarini ma’lumot sifatida beradi.
