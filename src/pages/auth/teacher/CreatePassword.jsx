import React from 'react'
import { Link } from 'react-router-dom'

const CreatePassword = () => {
    return (
        <>
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

                        <div className="login-header-wrapper">
                            <a href="super-user-login.html" className="login-back-arrow-btn" title="Back to Login">
                                <img src="/images/teacher/login/left-arrow.svg" alt="Back" />
                            </a>

                            <div className="login-header-logo-container">
                                <img src="/images/teacher/login/logo.svg" alt="GrantLink NC Logo"
                                    style={{ maxWidth: "180px", height: "auto", display: "block" }} />
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
                                            <img src="/images/teacher/login/eye-close.svg" alt="Toggle Password visual state"
                                                className="gl-eye-img-switch" />
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
                                            <img src="/images/teacher/login/eye-close.svg" alt="Toggle Password visual state"
                                                className="gl-eye-img-switch" />
                                        </div>
                                    </div>
                                </div>

                                 <button type="button" className="login-submit-btn gl-auth-btn-blue-tone" data-bs-toggle="modal"
                                    data-bs-target="#congratulationsModal">
                                    Create Password
                                </button> 

                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </section>

{/* <!-- congratulations Modal --> */}
<div className="modal fade gl-custom-modal-wrapper" id="congratulationsModal" tabindex="-1"
    aria-labelledby="congratulationsModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content gl-modal-main-box">

            <div className="gl-modal-header-action">
                <button type="button" className="gl-modal-close-trigger" data-bs-dismiss="modal" aria-label="Close">
                    <img src="/images/teacher/login/cross-icon-modal.svg" alt="" />
                </button>
            </div>

            <div className="modal-body gl-modal-core-body">

                <div className="gl-modal-success-badge">
                    <img src="/images/teacher/login/modal-head-check-icon.svg" alt="" />
                </div>

                <h2 className="gl-modal-feedback-title" id="congratulationsModalLabel">Congratulations</h2>

                <p className="gl-modal-feedback-subtitle">Your password has been changed successfully</p>

                {/* <button type="button" className="gl-modal-confirm-action-btn" data-bs-dismiss="modal">
                    <a href="login.html">Ok</a>
                </button> */}
                <Link to="/teacher" className="gl-modal-confirm-action-btn">
                    Ok
                </Link>

            </div>

        </div>
    </div>
</div>
{/* <!-- congratulations Modal --> */}

</>
    )
}

export default CreatePassword