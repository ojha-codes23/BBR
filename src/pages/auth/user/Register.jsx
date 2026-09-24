import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
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
                        <h3 className="login-form-title">Create Your Account</h3>
                        <p className="login-form-subtitle">Enter your email and password to access your account</p>

                        <form action="" method="POST">

                            <div className="login-form-group">
                                <label className="login-input-label">Full Name</label>
                                <div className="login-input-field-wrapper">
                                    <input type="text" className="login-input-control" placeholder="Enter your full name"
                                        required/>
                                </div>
                            </div>
                            <div className="login-form-group">
                                <label className="login-input-label">Email</label>
                                <div className="login-input-field-wrapper">
                                    <input type="email" className="login-input-control" placeholder="Enter your email"
                                        required/>
                                </div>
                            </div>

                            <div className="login-form-group-wrp">
                                <div className="login-form-group">
                                    <label className="login-input-label">Phone Number</label>
                                    <div className="login-input-field-wrapper">
                                        <input type="tel" className="login-input-control"
                                            placeholder="Enter your phone number" required/>
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "10px"}}>
                                    <div className="login-form-group w-100">
                                        <label className="login-input-label">Organization Access Code</label>
                                        <div className="login-input-field-wrapper">
                                            <input type="text" className="login-input-control"
                                                placeholder="Enter Access Code" required/>
                                        </div>
                                    </div>
                                    <div className="login-form-group w-100">
                                        <label className="login-input-label">Organization Name</label>
                                        <div className="login-input-field-wrapper">
                                            <input type="text" className="login-input-control"
                                                placeholder="Enter Organization Name" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="login-form-group">
                                <label className="login-input-label">Create Password</label>
                                <div className="login-input-field-wrapper">
                                    <input type="password" id="District-password" className="login-input-control"
                                        placeholder="Enter your password" required/>

                                    <div className="login-password-eye-icon" id="password-toggle-btn">
                                        <img src="/imgaes/user/login/eye-close.svg" alt="Show Password" id="eye-icon-img"/>
                                    </div>
                                </div>
                            </div>

                            <div className="login-form-group">
                                <label className="login-input-label">Re-enter Password</label>
                                <div className="login-input-field-wrapper">
                                    <input type="password" id="District-password" className="login-input-control"
                                        placeholder="Re-enter Password" required/>

                                    <div className="login-password-eye-icon" id="password-toggle-btn">
                                        <img src="/imgaes/user/login/eye-close.svg" alt="Show Password" id="eye-icon-img"/>
                                    </div>
                                </div>
                            </div>

                            <div className="login-options-row">
                                <label className="login-toggle-wrapper">
                                    <input type="checkbox" className="login-toggle-input" name="remember_me"
                                        style={{display:"block"}}/>
                                    {/* <!-- <div className="login-toggle-slider"></div> --> */}
                                    <span className="login-toggle-text">
                                        I agree to the <a href="" target="_blank">Terms & Conditions</a>
                                    </span>
                                </label>
                                {/* <!-- <a href="forget-password.html" className="login-forgot-link">Forgot Password?</a> --> */}
                            </div>

                            <Link to="/user/login" className="login-submit-btn">Sign Up</Link>
                            <br/>
                            <p className="text-center">Already have an account? <Link to="/user/login"
                                    className="login-signup-link">Login</Link>
                            </p>
                            <p className="text-center">Having trouble finding your organization? <br/>
                                <Link to="/user/login" className="login-signup-link">Let us help you reconnect.</Link>
                            </p>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    </section>
    
    </>
  )
}

export default Register
