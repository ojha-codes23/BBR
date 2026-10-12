import React from "react";
import { Link } from "react-router-dom";

const SOWDetail2 = () => {
  return (
    <>
      <main>
        <div className="sow-wait-main-wrapper container-fluid">

          <header className="sow-wait-top-header">
            <button
              className="sow-wait-back-btn"
              aria-label="Go back"
            >
              ←
            </button>

            <div className="sow-header-title-block">
              <h1 className="sow-wait-title">SOW Details</h1>
              <p className="sow-wait-subtitle">
                Career planning and skill development guidance
              </p>
            </div>
          </header>

          <div className="sow-wait-tracker-card">
            <h2 className="fs-6 fw-bold text-dark mb-4 px-2">
              Service Tracker
            </h2>

            <div className="sow-wait-stepper-flex">

              {/* Step 1 */}
              <div className="sow-wait-step-item">
                <div className="sow-wait-circle done-green">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <span className="sow-wait-step-label">
                    Call Discussion
                  </span>

                  <div className="sow-wait-step-subtext">
                    Service request submitted for review
                    <br />
                    November 20, 2025
                  </div>
                </div>
              </div>

              {/* Waiting */}
              <div className="sow-wait-line-divider status-waiting">
                <span className="sow-wait-badge-label">
                  Waiting
                </span>
              </div>

              {/* Step 2 */}
              <div className="sow-wait-step-item">
                <div className="sow-wait-circle current-blue">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <span
                    className="sow-wait-step-label text-primary"
                    style={{ color: "#004d73" }}
                  >
                    Fill SOW Form
                  </span>
                </div>
              </div>

              <div className="sow-wait-line-divider"></div>

              {/* Step 3 */}
              <div className="sow-wait-step-item">
                <div className="sow-wait-circle pending-gray">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <span className="sow-wait-step-label text-muted">
                    Request Submitted
                  </span>
                </div>
              </div>

              <div className="sow-wait-line-divider"></div>

              {/* Step 4 */}
              <div className="sow-wait-step-item">
                <div className="sow-wait-circle pending-gray">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <span className="sow-wait-step-label text-muted">
                    Payment
                  </span>
                </div>
              </div>

            </div>
          </div>

          <h2 className="sow-wait-section-heading">
            Call Information
          </h2>

          <div className="sow-wait-alert-banner">
            <div className="sow-wait-alert-icon">
              i
            </div>

            <p className="sow-wait-alert-text">
              The provider will follow up with next steps soon. You'll be
              notified here once next steps are available.
            </p>
          </div>

          <div className="sow-wait-details-box">

            <div className="sow-wait-group">
              <div className="sow-wait-field-title">
                Provider Name
              </div>

              <p className="sow-wait-field-desc">
                Sarah Johnson
              </p>
            </div>

            <div className="sow-wait-group">
              <div className="sow-wait-field-title">
                Reason for the Call
              </div>

              <p className="sow-wait-field-desc">
                I am seeking comprehensive career coaching to help me
                transition from my current role in marketing to a career in
                UX design. I need guidance on skill development, portfolio
                building, and job search strategies.
              </p>
            </div>

            <div className="sow-wait-group">
              <div className="sow-wait-field-title">
                Date
              </div>

              <p className="sow-wait-field-desc">
                12-12-2025
              </p>
            </div>

            <div className="sow-wait-group">
              <div className="sow-wait-field-title">
                Time
              </div>

              <p className="sow-wait-field-desc">
                10:00PM
              </p>
            </div>

            <div className="sow-wait-group">
              <div className="sow-wait-field-title">
                Calendly Link
              </div>

              <p className="sow-wait-field-desc">
                <Link
                  to="/student/sow-detail-3"
                  // target="_blank"
                  rel="noreferrer"
                  className="sow-wait-link"
                >
                  //calendly.com/your-username
                </Link>
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default SOWDetail2;