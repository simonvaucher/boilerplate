import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.scss";
import GRADIENT from "../static/images/gradient.png";

const Index = () => {
  return (
    <div class="container">
      <h1> React Starting Point</h1>
      <br />
      <img src={GRADIENT} alt="A small gradient square" />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
