import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.scss";
import GRADIENT from "../static/images/gradient.png";
import Aggregator from "./components/Aggregator";

const Index = () => {
  // return (
  //   <div className="container">
  //     <h1>React Starting Point</h1>
  //     <br />
  //     <img src={GRADIENT} alt="A small gradient square" />
  //     <p>Using Express.js & Webpack</p>
  //     <Aggregator />
  //   </div>
  // );

  return (
    <div className="container">
      <h2 className="site-title">Aggregator Example</h2>
      <Aggregator />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
