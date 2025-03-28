import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UseCaseProvider } from "../application/context/UseCaseProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseCaseProvider>
      <App />
    </UseCaseProvider>
  </StrictMode>
);
