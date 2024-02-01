import React from 'react'
import './loginPage.css'
import Linkstrip from '../Linkstrip/Linkstrip'
function LoginPage() {
  return (
    <div>
      <Linkstrip Pagename="My Account" ComponentName="LogIn" />

      <div className="form-container">
        <form className="login-container">
          <div className="form-title">Login</div>
          <div className="detail-input-box">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" autoComplete="username" className="form-control" id="email" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
              <input type="password" className="form-control" autoComplete='current-password' id="inputPassword" required/>
            </div>
          </div>
          <div className="detail-submit-box">
            <button type='submit' className="login-btn">Sign in</button>
            <p>Forgot password?</p>
          </div>
        </form>
        <form className="signin-container">
          <div className="form-title">Create an account</div>
          <div className="detail-input-box">
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">Username*</label>
              <input type="text" name="username" autoComplete="username" className='form-control' id="username" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="First Name*" className="form-label">First Name*</label>
              <input type="text" name="firstName" className='form-control' id="first-name" required/>
            </div><div className="mb-3">
              <label htmlFor="Last Name*" className="form-label">Last Name*</label>
              <input type="text" name="LastName" className='form-control' id="last-name" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address*</label>
              <input type="email" name="email" autoComplete="username" className="form-control" id="newemail" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">confirm email*</label>
              <input type="email" name="email" autoComplete="username" className="form-control" id="cofirm-email"required/>
            </div>
          </div>
          <div className="detail-submit-box">
            <h4>A password will be emailed to you.</h4>
            <button type='submit' className="signup-btn">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
