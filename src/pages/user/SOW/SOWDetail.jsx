import React from 'react'
import { Link } from 'react-router-dom'

const SOWDetail = () => {
  return (
    <>
          {/* <main> */}
          <div className="sow-details-main-wrapper container-fluid">
            <header className="sow-top-header">
              <button className="sow-back-circle" aria-label="Go back">←</button>
              <div className="sow-header-title-block">
                <h1 className="sow-header-title">SOW Details</h1>
                <p className="sow-header-subtitle">
                  Career planning and skill development guidance
                </p>
              </div>
            </header>

            <div className="sow-tracker-card">
              <h2
                className="fs-6 fw-bold text-dark mb-4 px-2"
                style={{ fontFamily: 'inherit' }}
              >
                Service Tracker
              </h2>

              <div className="sow-stepper-flex">
                <div className="sow-step-item">
                  <div className="sow-step-circle active-blue">
                    <img
                      src="/images/user/super-user-dashboard/call-progress-icon.svg"
                      alt=""
                    />
                  </div>
                  <span className="sow-step-label active-text"
                    >Call Discussion</span
                  >
                </div>

                <div className="sow-step-divider"></div>

                <div className="sow-step-item">
                  <div className="sow-step-circle passed-gray">
                    <img
                      src="/images/user/super-user-dashboard/charm_circle-tick.svg"
                      alt=""
                    />
                  </div>
                  <span className="sow-step-label text-muted">Fill SOW Form</span>
                </div>

                <div className="sow-step-divider"></div>

                <div className="sow-step-item">
                  <div className="sow-step-circle passed-gray">
                    <img
                      src="/images/user/super-user-dashboard/charm_circle-tick.svg"
                      alt=""
                    />
                  </div>
                  <span className="sow-step-label text-muted"
                    >Request Submitted</span
                  >
                </div>

                <div className="sow-step-divider"></div>

                <div className="sow-step-item">
                  <div className="sow-step-circle passed-gray">
                    <img
                      src="/images/user/super-user-dashboard/charm_circle-tick.svg"
                      alt=""
                    />
                  </div>
                  <span className="sow-step-label text-muted">Payment</span>
                </div>
              </div>
            </div>

            <div className="sow-info-section-head">
              <div>
                <h2 className="sow-section-title">Call Information</h2>
                <p className="sow-section-subtitle">
                  Fill all the details for the call discussion
                </p>
              </div>
              <a href="#" className="sow-schedule-btn">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"
                  />
                </svg>
                Schedule Call
              </a>
            </div>

            <div className="sow-details-box">
              <div className="sow-field-group">
                <div className="sow-field-label">Provider Name</div>
                <p className="sow-field-value">Sarah Johnson</p>
              </div>

              <div className="sow-field-group">
                <div className="sow-field-label">Reason for the Call</div>
                <p className="sow-field-value">
                  I am seeking comprehensive career coaching to help me
                  transition from my current role in marketing to a career in UX
                  design. I need guidance on skill development, portfolio
                  building, and job search strategies.
                </p>
              </div>

              <div className="sow-field-group">
                <div className="sow-field-label">Calendly Link</div>
                <p className="sow-field-value">
                  <a
                    href="https://calendly.com/your-teachername"
                    target="_blank"
                    className="sow-link-text"
                    >/calendly.com/your-teachername</a
                  >
                </p>
              </div>

              <div className="sow-field-group">
                <div className="sow-field-label">Date</div>
                <p className="sow-field-value">--</p>
              </div>

              <div className="sow-field-group">
                <div className="sow-field-label">Time</div>
                <p className="sow-field-value">--</p>
              </div>

              <button type="button" className="sow-sync-btn">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                Calendar Sync
              </button>
            </div>

            <footer className="sow-bottom-actions">
              <a href="#" className="sow-cancel-link">Cancel Request</a>
              <Link to="/student/sow-detail-2" type="button" className="sow-confirm-btn">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7M13 5l7 7-7 7"
                  />
                </svg>
                Confirm Call is Completed
              </Link>
            </footer>
          </div>
        {/* </main> */}
    
    </>
  )
}

export default SOWDetail
