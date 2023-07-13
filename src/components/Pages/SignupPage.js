import React from "react";
import classes from "./SignupPage.module.css";
const SignupPage = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU'
        alt='A cricketer'
      />

      <form className={classes.container__form}>
        <div className={classes.input__field}>
          <input
            type='text'
            placeholder='enymy7'
            id='username'
            className={classes.input}
          />
          <label htmlFor='username' className={classes.label}>
            Username
          </label>
        </div>
        <div className={classes.input__field}>
          <input
            type='email'
            placeholder='enymy7@gmail.com'
            id='email'
            className={classes.input}
          />
          <label htmlFor='email' className={classes.label}>
            Email
          </label>
        </div>
        <div className={classes.input__field}>
          <input
            type='password'
            id='password'
            className={classes.input}
            placeholder='**'
          />
          <label htmlFor='password' className={classes.label}>
            Password
          </label>
        </div>
        <button type='submit' className={classes.form__button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
