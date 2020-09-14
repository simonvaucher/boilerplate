import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.scss";
import GRADIENT from "../static/images/gradient.png";

const Index = () => {
  return (
    <div className="container">
      <h1>React Starting Point</h1>
      <br />
      <img src={GRADIENT} alt="A small gradient square" />
      <p>Using Express.js & Webpack</p>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
