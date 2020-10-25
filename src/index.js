import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.scss";
import GRADIENT from "../static/images/gradient.png";
import Aggregator from "./components/Aggregator";
import OrmExamples from "./components/OrmExamples";

const Index = () => {
  return (
    <div className="container">
      <h1>ORM Examples</h1>
      <OrmExamples />
    </div>
  );

  // return (
  //   <div className="container">
  //     <img src={GRADIENT} alt="A small gradient square" />
  //     <h2 className="site-title">Aggregator Example</h2>
  //     <Aggregator />
  //   </div>
  // );
};

ReactDOM.render(<Index />, document.getElementById("root"));
