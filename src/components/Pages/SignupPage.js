import React from "react";
import classes from "./SignupPage.module.css";
import TextField from "../UI/TextField";
import Button from "../UI/Button";
import BoxContainer from "../UI/BoxContainer";

const SignupPage = () => {
  return (
    <BoxContainer>
      <img
        className={classes.image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU'
        alt='A cricketer'
      />

      <form className={classes.container__form}>
        <TextField
          type='text'
          placeholder='enymy7'
          id='username'
          labelName='Username'
        />
        <TextField
          type='email'
          placeholder='enymy7@gmail.com'
          id='email'
          labelName='Email'
        />
        <TextField
          type='password'
          id='password'
          placeholder='**'
          labelName='Password'
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </BoxContainer>
  );
};

export default SignupPage;
