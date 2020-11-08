import React from "react";
import buttonStyle from "./button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={
        !props.clickHandler
          ? null
          : (e) => {
              props.clickHandler(props.data);
            }
      }
      className={`${props.className ? props.className : ""} ${
        props.color ? buttonStyle[props.color] : ""
      } ${buttonStyle.button} ${props.small ? buttonStyle.small : ""}`}
    >
      {props.contents}
    </button>
  );
};
export default Button;
