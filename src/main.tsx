import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/authContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
