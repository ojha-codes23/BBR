import React from 'react'
import { Link } from 'react-router-dom'
import CongratulationsModal from '../../../components/user/CongratulationsModal'

const CreatePassword = () => {
  return (

    <>
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

                    <div className="login-header-wrapper">
                        <Link to="/user/verify-otp" className="login-back-arrow-btn" title="Back to Login">
                            <img src="/imgaes/user/login/left-arrow.svg" alt="Back"/>
                        </Link>

                        <div className="login-header-logo-container">
                            <img src="/imgaes/user/login/logo.svg" alt="GrantLink NC Logo"
                                style={{maxWidth:" 180px", height: "auto", display: "block"}}/>
                        </div>
                    </div>

                    <div className="login-form-card gl-auth-mt-fix">
                        <h3 className="login-form-title">Create Password</h3>
                        <p className="login-form-subtitle">Verify your email address</p>

                        <form action="" method="POST">

                            <div className="login-form-group">
                                <label className="login-input-label">Create Password</label>
                                <div className="login-input-field-wrapper">
                                    <input type="password" id="reg-password" className="login-input-control"
                                        placeholder="Enter your password" required />
                                    <div className="login-password-eye-icon gl-eye-trigger" data-target="reg-password">
                                        <img src="/imgaes/user/login/eye-close.svg" alt="Toggle Password visual state"
                                            className="gl-eye-img-switch"/>
                                    </div>
                                </div>
                            </div>

                            <div className="login-form-group">
                                <label className="login-input-label">Re-enter Password</label>
                                <div className="login-input-field-wrapper">
                                    <input type="password" id="reg-confirm-password" className="login-input-control"
                                        placeholder="Re-enter Password" required />
                                    <div className="login-password-eye-icon gl-eye-trigger"
                                        data-target="reg-confirm-password">
                                        <img src="/imgaes/user/login/eye-close.svg" alt="Toggle Password visual state"
                                            className="gl-eye-img-switch"/>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="login-submit-btn gl-auth-btn-blue-tone"      data-bs-toggle="modal"
                                data-bs-target="#congratulationsModal">
                                Create Password
                            </button>


                        </form>

                    </div>

                </div>
            </div>

        </div>
    </section>
    </div>


    <CongratulationsModal/>
    
    </>
   
  )
}

export default CreatePassword
