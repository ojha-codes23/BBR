import React from 'react';
import { Link } from 'react-router-dom';

const TeacherLogin = () => {
    return (
        <section className="login-page-section">
            <div className="login-page-wrapper">

                <div className="login-left-banner">
                    <img className="login-left-banner-img" src="/images/teacher/login/login-left-img.svg" alt="Group Background Image" />

                    <div className="login-left-banner-overlay">
                        <h1 className="login-overlay-title">Get<br />Everything<br />You Want</h1>
                        <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process,
                            and stick to the plan.</p>
                    </div>
                </div>

                <div className="login-right-content">
                    <div className="login-form-container">

                        <div className="login-header-logo">
                            <img src="images/teacher/login/logo.svg" alt="GrantLink NC Logo" />
                        </div>

                        <div className="login-form-card">
                            <h3 className="login-form-title">Welcome Back</h3>
                            <p className="login-form-subtitle">Enter your email and password to access your account</p>

                            <form action="" method="POST">

                                <div className="login-form-group">
                                    <label className="login-input-label">Email</label>
                                    <div className="login-input-field-wrapper">
                                        <input type="email" className="login-input-control" placeholder="Enter your email"
                                            required />
                                    </div>
                                </div>

                                <div className="login-form-group">
                                    <label className="login-input-label">Password</label>
                                    <div className="login-input-field-wrapper">
                                        <input type="password" id="District-password" className="login-input-control"
                                            placeholder="Enter your password" required />

                                        <div className="login-password-eye-icon" id="password-toggle-btn">
                                            <img src="images/teacher/login/eye-close.svg" alt="Show Password" id="eye-icon-img" />
                                        </div>
                                    </div>
                                </div>

                                <div className="login-options-row">
                                    &nbsp;
                                    <a href="forget-password.html" className="login-forgot-link">Forgot Password?</a>
                                </div>

                                <a href="organizations-login.html" className="login-submit-btn">Login</a>
                                <br />
                                <p className="text-center">Don’t have an account?
                                    <Link to="/teacher/sign-up" className="login-signup-link">Sign Up</Link>
                                </p>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default TeacherLogin