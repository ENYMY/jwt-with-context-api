import React from "react";
import classes from "./BoxContainer.module.css";
const BoxContainer = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default BoxContainer;
