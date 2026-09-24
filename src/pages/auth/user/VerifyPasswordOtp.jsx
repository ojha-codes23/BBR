import React from 'react'
import { Link } from 'react-router-dom'

const VerifyPasswordOtp = () => {
  return (
    <>
        <section className="login-page-section">
        <div className="login-page-wrapper">
            
            <div className="login-left-banner">
                <img className="login-left-banner-img" src="/imgaes/user/login/login-left-img.svg" alt="Group Background Image"/>
                
                <div className="login-left-banner-overlay">
                    <h1 className="login-overlay-title">Get<br/>Everything<br/>You Want</h1>
                    <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process, and stick to the plan.</p>
                </div>
            </div>
            
            <div className="login-right-content">
                <div className="login-form-container">
                    
                    <div className="login-header-wrapper">
                        <Link href="/user/forget-password" className="login-back-arrow-btn" title="Back">
                            <img src="/imgaes/user/login/left-arrow.svg" alt="Back"/>
                        </Link>
                        
                        <div className="login-header-logo-container">
                            <img src="/imgaes/user/login/logo.svg" alt="GrantLink NC Logo" style={{maxWidth:"180px", height:"auto", display:"block"}}/>
                        </div>
                    </div>
                    
                    <div className="login-form-card">
                        <h3 className="forgot-page-title">Verification Code</h3>
                        <p className="forgot-page-subtitle">Verify your email address</p>
                        
                        <form action="" method="POST" id="otp-form">
                            
                            <label className="login-input-label">Enter Verification Code</label>
                            
                            <div className="otp-inputs-row">
                                <input type="number" className="otp-input-box" maxlength="1" placeholder="-" required/>
                                <input type="number" className="otp-input-box" maxlength="1" placeholder="-" required/>
                                <input type="number" className="otp-input-box" maxlength="1" placeholder="-" required/>
                                <input type="number" className="otp-input-box" maxlength="1" placeholder="-" required/>
                                <input type="number" className="otp-input-box" maxlength="1" placeholder="-" required/>
                            </div>
                            
                            <Link to="/user/create-password" className="login-submit-btn">Submit</Link>
                            
                            <div className="otp-resend-wrapper">
                                Didn’t receive code? <a href="#" className="otp-resend-link">Resend Code</a>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </section>
     
    </>
  )
}

export default VerifyPasswordOtp
