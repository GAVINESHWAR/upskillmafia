import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cirriculum from "./Cirriculum";
import "./Curriculum.css";
import Refund from "./Refund";
import "./Refund.css";
import Internships from "./Internships.js";
import "./Internships.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Cirriculum/>
    <Refund/>
    <Internships/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
