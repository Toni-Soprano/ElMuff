import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'
const Register = () => {
  return (
    <div className='body-register'>
    <div className='box-register'>
      <span className='borderLine-register'></span>
      <form>
        <h2> Sign Up </h2>
        <div className='inputBox-register'>
          <input type='text' required/>
          <span>Email</span>
          <i></i>
        </div>
        <div className='inputBox-register'>
          <input type='text' required/>
          <span>Username</span>
          <i></i>
        </div>
        <div className='inputBox-register'>
          <input type='password' required/>
          <span>Password</span>
          <i></i>
        </div>
        <div className='inputBox-register'>
          <input type='password' required/>
          <span>Confirm Password</span>
          <i></i>
        </div>
        <div className='links-register'>
          <Link to="/login"> Already a legend ? Sign in !</Link>
        </div>
      <Link to="/login"> <input type='submit' value='login'/> </Link> 

      </form>
    </div>
    </div>
  );
};

export default Register;
