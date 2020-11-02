import React from "react";
import buttonStyles from "./buttonStyles.module.css";
const NumberButtons = (props) => {
  return (
    <div className={buttonStyles.buttonBox}>
      <div className="col">
        <button>1</button>
        <button>2</button>
      </div>
    </div>
  );
};
export default NumberButtons;
