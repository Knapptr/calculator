import React from "react";
import layoutStyle from "./layout.module.css";
const Layout = (props) => {
  return (
    <div className={layoutStyle.outerFrame}>
      <div className={layoutStyle.app}>{props.children}</div>
      <div>
        <h2>Make a footer here.</h2>
      </div>
    </div>
  );
};

export default Layout;
