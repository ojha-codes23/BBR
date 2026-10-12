import React from 'react'
import { Link } from 'react-router-dom'

const OrganizationLogin = () => {
  return (
    <>
      <section className="login-page-section">
        <div className="login-page-wrapper">

          <div className="login-left-banner">
            <img className="login-left-banner-img" src="/images/user/login/login-left-img.svg" alt="Group Background Image" />

            <div className="login-left-banner-overlay">
              <h1 className="login-overlay-title">Get<br />Everything<br />You Want</h1>
              <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process, and stick to the plan.</p>
            </div>
          </div>

          <div className="login-right-content">
            <div className="login-form-container">

              <div className="login-header-logo">
                <img src="/images/user/login/logo.svg" alt="GrantLink NC Logo" />
              </div>

              <div className="login-form-card">
                <h3 className="login-form-title">Organizations</h3>
                <p className="login-form-subtitle">Choose Your Organization to <br />
                  access your account</p>

                <form action="" method="POST">



                  <div className="org-list-card">
                    <div className="org-scroll-container">

                      {/* <!-- Item 1 (Checked by default in image) --> */}
                      <label className="org-item-row" for="org1">
                        <p className="org-name-text">El Camino High School</p>
                        <input className="org-radio-input" type="radio" name="selected_org" id="org1" checked />
                      </label>

                      {/* <!-- Item 2 --> */}
                      <label className="org-item-row" for="org2">
                        <p className="org-name-text">Wayne Community College</p>
                        <input className="org-radio-input" type="radio" name="selected_org" id="org2" />
                      </label>

                      {/* <!-- Item 3 --> */}
                      <label className="org-item-row" for="org3">
                        <p className="org-name-text">Tennessee College of Applied Technology</p>
                        <input className="org-radio-input" type="radio" name="selected_org" id="org3" />
                      </label>

                      {/* <!-- Item 4 --> */}
                      <label className="org-item-row" for="org4">
                        <p className="org-name-text">Universal Technical Institute</p>
                        <input className="org-radio-input" type="radio" name="selected_org" id="org4" />
                      </label>

                      {/* <!-- Item 5 --> */}
                      <label className="org-item-row" for="org5">
                        <p className="org-name-text">Gateway Community College</p>
                        <input className="org-radio-input" type="radio" name="selected_org" id="org5" />
                      </label>

                    </div>
                  </div>
                  <Link to="/student/dashboard" className="login-submit-btn">Proceed</Link>
                </form>
              </div>

            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default OrganizationLogin

