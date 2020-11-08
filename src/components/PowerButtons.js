import React from "react";
import Button from "./button";
import powerStyle from "./power.module.css";
const PowerButtons = ({ clickHandler, muted, toggleMuted }) => {
  return (
    <div className={`${powerStyle.frame}`}>
      <div className="d-flex flex-col align-center">
        <Button
          color="powerGreen"
          className="d-block"
          contents=" "
          small={true}
          data={true}
          clickHandler={clickHandler}
        />
        <div className="dot"></div>
        <div className="powerIcon">⚫</div>
      </div>
      <div className="d-flex flex-col align-center ">
        <Button
          color="powerRed"
          className="d-block smallButton"
          contents=" "
          data={false}
          small={true}
          clickHandler={clickHandler}
        />
        <div className="dot"></div>
        <div className="powerIcon">〇</div>
      </div>
      <div className="d-flex flex-col align-center">
        <Button
          contents={
            <div className={powerStyle.volumeDiv}>
              {muted ? (
                <i className="fas fa-volume-mute"></i>
              ) : (
                <i className="fas fa-volume-up"></i>
              )}
            </div>
          }
          clickHandler={toggleMuted}
          small={true}
          color="brown"
        />
      </div>
    </div>
  );
};
export default PowerButtons;
