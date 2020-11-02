import React from "react";
import screenStyle from "./screenStyle.module.css";

const Screen = ({ screenContent, power }) => {
  return (
    <div className={screenStyle.screen}>
      <span className={power ? "" : screenStyle.off}>{screenContent}</span>
    </div>
  );
};
export default Screen;
