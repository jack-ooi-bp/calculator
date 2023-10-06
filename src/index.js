import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);