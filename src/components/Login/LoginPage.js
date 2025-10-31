import React, { useState } from 'react'
import './loginPage.css'
import Linkstrip from '../Linkstrip/Linkstrip'
import { useAuth } from '../Authentication/AuthContext'
import { useNavigate } from "react-router-dom";
import useApi from '../../api/useApi'
import Loader from '../Helpers/Loader';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { loginApi, RegistrationApi } = useApi();
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
  })
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const handleForm = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleRegisterForm = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleLogin = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const response = await loginApi(loginForm);
      if (response.status) {
        login(response.data);
        setLoading(false);
        navigate('/home');
      } else {
        console.log(response)
        setLoading(false);
        console.error("failed to login");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    setLoading(false);
  };
  const handleRegistration = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const response = await RegistrationApi(registerForm);
      if (response.status) {
        console.log("registration");
        login(response.data);
        setLoading(false);
        navigate('/home');
      } else {
        setLoading(false);
        console.log("failed to signup");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    setLoading(false);
  }
  return (
    <div>
      <Linkstrip Pagename="My Account" ComponentName="LogIn" />

      <div className="form-container">
        <form className="login-container" onSubmit={(e) => handleLogin(e)}>
          <div className="form-title">Login</div>
          <div className="detail-input-box">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" autoComplete="username" name='email' className="form-control" id="email"
                value={loginForm.email} onChange={handleForm} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
              <input type="password" className="form-control" name='password' autoComplete='current-password' id="inputPassword"
                value={loginForm.password} onChange={handleForm} required />
            </div>
          </div>
          <div className="detail-submit-box">
            <button type='submit' className="login-btn">Sign in</button>
            <p>Forgot password?</p>
          </div>
        </form>

        <form className="signin-container" onSubmit={(e) => handleRegistration(e)}>
          <div className="form-title">Create an account</div>
          <div className="detail-input-box">

            <div className="mb-3">
              <label htmlFor="Username" className="form-label">Username*</label>
              <input type="text" name="username" autoComplete="username" className='form-control' id="username"
                value={registerForm.username} onChange={handleRegisterForm} required />
            </div>

            <div className="mb-3">
              <label htmlFor="First Name*" className="form-label">First Name*</label>
              <input type="text" name="firstName" className='form-control' id="first-name"
                value={registerForm.firstName} onChange={handleRegisterForm} required />

            </div><div className="mb-3">
              <label htmlFor="Last Name*" className="form-label">Last Name*</label>
              <input type="text" name="lastName" className='form-control' id="last-name"
                value={registerForm.lastName} onChange={handleRegisterForm} required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address*</label>
              <input type="email" name="email" autoComplete="username" className="form-control" id="newemail"
                value={registerForm.email} onChange={handleRegisterForm} required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">EnterPassword</label>
              <input type="password" name='password' className="form-control" autoComplete='current-password' id="inputPassword"
                value={registerForm.password} onChange={handleRegisterForm} required />
            </div>

          </div>
          <div className="detail-submit-box">
            <h4>I will emailed you for security</h4>
            <button type='submit' className="signup-btn">Sign up</button>
          </div>
        </form>
      </div>
      <Loader loading={loading} />
    </div>
  )
}

export default LoginPage
