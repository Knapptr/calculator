import React from "react";
import bodyStyle from "./bodyStyle.module.css";
const CalculatorBody = (props) => {
  return <div className={bodyStyle.body}>{props.children}</div>;
};
export default CalculatorBody;
