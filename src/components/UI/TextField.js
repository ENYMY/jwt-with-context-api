import React from "react";
import classes from "./TextField.module.css";
const TextField = (props) => {
  return (
    <div className={`${classes.input__field} ${props.className}`}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className={`${classes.input} ${props.classInput}`}
      />
      <label
        htmlFor={props.htmlFor}
        className={`${classes.label} ${props.LabelName}`}>
        {props.labelName}
      </label>
    </div>
  );
};

export default TextField;
