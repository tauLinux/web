import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import Routes from "inn:routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
