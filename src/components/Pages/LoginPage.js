import React from "react";
import classes from "./LoginPage.module.css";
import BoxContainer from "../UI/BoxContainer";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

const LoginPage = (props) => {
  return (
    <BoxContainer className={classes.box}>
      <img
        className={classes.image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU'
        alt='A cricketer'
      />
      <TextField
        type='email'
        placeholder='enymy7@gmail.com'
        id='email'
        labelName='Email'
      />
      <TextField
        type='password'
        placeholder='**'
        id='password'
        labelName='Password'
      />
      <Button type='submit'>Login</Button>
    </BoxContainer>
  );
};

export default LoginPage;
