import React, { useEffect, useState } from "react";
import layoutStyle from "./layout.module.css";
import sample from "../sound/808RS.wav";
const Layout = (props) => {
  return (
    <div className={layoutStyle.outerFrame}>
      <div className={layoutStyle.app}>{props.children}</div>
      <div className="d-flex justify-center">
        <a
          href="https://knapptr.github.io/tknapp/"
          target="__blank"
          className="footerText"
        >
          Created by Tyler Knapp
        </a>
        <a
          href="https://github.com/Knapptr/calculator"
          target="__blank"
          className="footerText"
        >
          See the code on github.
        </a>
      </div>
    </div>
  );
};

export default Layout;
