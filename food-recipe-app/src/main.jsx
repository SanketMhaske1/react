import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router";
import GlobalState from "./context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </StrictMode>
  </BrowserRouter>
);
