import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import "react-icons";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
