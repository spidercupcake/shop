import React from 'react'
import { FaUser , FaLock } from "react-icons/fa";
import "./LoginRegister.scss"


const LoginRegister = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="form-box login">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon'/>
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className='forgot'>Forgot Password</a>
            </div>
            <button type="submit">Login</button>
            <div className="switch-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginRegister