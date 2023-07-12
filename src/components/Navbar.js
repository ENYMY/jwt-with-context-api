import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.appTitle}>Hichhi Meals</div>
      <ul className={classes.links}>
        <li>Home</li>
        <li>SignIn</li>
      </ul>
    </div>
  );
};

export default Navbar;
