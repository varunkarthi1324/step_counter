import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Appv1 from "./Appv1.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Appv1 />
  </React.StrictMode>
);
