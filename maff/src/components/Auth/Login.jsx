import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Auth = () => {
  return (
    <div className='body'>
    <div className='box'>
      <span className='borderLine'></span>
      <form>
        <h2> Sign In </h2>
        <div className='inputBox'>
          <input type='text' required/>
          <span>Email</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input type='password' required/>
          <span>Password</span>
          <i></i>
        </div>
        <div className='links'>
          <Link > Forget password </Link>
          <Link to="/register"> Signup</Link>
        </div>
        <Link to="/home"><input type='submit' value='login'/></Link>

      </form>
    </div>
    </div>
  );
};

export default Auth;
