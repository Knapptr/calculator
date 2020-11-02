import React from "react";
import Button from "./button";
const PowerButtons = ({ clickHandler }) => {
  return (
    <div className="d-flex ">
      <div className="d-flex flex-col align-center">
        <Button
          color="powerGreen"
          className="d-block"
          contents=" "
          data={true}
          clickHandler={clickHandler}
        />
        <div className="dot"></div>
        <div className="powerIcon">⚫</div>
      </div>
      <div className="d-flex flex-col align-center ">
        <Button
          color="powerRed"
          className="d-block"
          contents=" "
          data={false}
          clickHandler={clickHandler}
        />
        <div className="dot"></div>
        <div className="powerIcon">〇</div>
      </div>
    </div>
  );
};
export default PowerButtons;
