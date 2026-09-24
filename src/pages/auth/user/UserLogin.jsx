import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div>
       <section className="login-page-section">
        <div className="login-page-wrapper">

            <div className="login-left-banner">
                <img className="login-left-banner-img" src="/imgaes/user/login/login-left-img.svg" alt="Group Background Image"/>

                <div className="login-left-banner-overlay">
                    <h1 className="login-overlay-title">Get<br/>Everything<br/>You Want</h1>
                    <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process,
                        and stick to the plan.</p>
                </div>
            </div>

            <div className="login-right-content">
                <div className="login-form-container">

                    <div className="login-header-logo">
                        <img src="/imgaes/user/login/logo.svg" alt="GrantLink NC Logo"/>
                    </div>

                    <div className="login-form-card">
                        <h3 className="login-form-title">Welcome Back</h3>
                        <p className="login-form-subtitle">Enter your email and password to access your account</p>

                        <form action="" method="POST">

                            <div className="login-form-group">
                                <label className="login-input-label">Email</label>
                                <div className="login-input-field-wrapper">
                                    <input type="email" className="login-input-control" placeholder="Enter your email"
                                        required/>
                                </div>
                            </div>

                            <div className="login-form-group">
                                <label className="login-input-label">Password</label>
                                <div className="login-input-field-wrapper">
                                    <input type="password" id="superuser-password" className="login-input-control"
                                        placeholder="Enter your password" required/>

                                    <div className="login-password-eye-icon" id="password-toggle-btn">
                                        <img src="/imgaes/user/login/eye-close.svg" alt="Show Password" id="eye-icon-img"/>
                                    </div>
                                </div>
                            </div>

                            <div className="login-options-row">
                                {/* <!-- <label className="login-toggle-wrapper">
                                    <input type="checkbox" className="login-toggle-input" name="remember_me">
                                    <div className="login-toggle-slider"></div>
                                    <span className="login-toggle-text">Remember me</span>
                                </label> --> */}

                                &nbsp;

                                <Link to="/user/forget-password" className="login-forgot-link">Forgot Password?</Link>
                            </div>

                            <a href="organization-login.html" className="login-submit-btn">Login</a>
                            <p className="text-center mt-2">Don’t have an account?
                                <Link to="/user/sign-up" className="login-signup-link">Sign Up</Link>
                            </p>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    </section>
    </div>
  )
}

export default UserLogin
