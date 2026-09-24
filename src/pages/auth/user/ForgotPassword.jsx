import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
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

                    <div className="login-header-wrapper">
                        <Link to="/user/login"  className="login-back-arrow-btn" title="Back to Login">
                            <img src="/imgaes/user/login/left-arrow.svg" alt="Back"/>
                        </Link>

                        <div className="login-header-logo-container">
                            <img src="/imgaes/user/login/logo.svg" alt="GrantLink NC Logo"
                                style={{maxWidth: "180px", height: "auto", display: "block"}}/>
                        </div>
                    </div>

                    <div className="login-form-card">
                        <h3 className="forgot-page-title">Forgot Password</h3>
                        <p className="forgot-page-subtitle">Verify your email address</p>

                        <form action="" method="POST">

                            <div className="login-form-group">
                                <label className="login-input-label">Email</label>
                                <div className="login-input-field-wrapper">
                                    <input type="email" className="login-input-control" placeholder="Enter your email"
                                        required />
                                </div>
                            </div>

                            <Link to="/user/verify-otp" className="login-submit-btn">Verify</Link>

                            <p className="text-center mt-2">Already have an account? 
                                                          <Link to="/user/login" className="login-signup-link">Log in </Link>
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

export default ForgotPassword
