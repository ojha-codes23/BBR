import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationSuccessModal = () => {
  return (
    <>
         <div
      className="modal fade custom-target-modal"
      id="registrationSuccessModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: '580px' }}
      >
        <div
          className="modal-content"
          style={{
            borderRadius: '24px',
            padding: '40px',
            border: 'none',
            position: 'relative',
            backgroundColor: '#ffffff'
          }}
        >
          <a href="#" className="close gl-modal-dismiss-anchor" aria-label="Close">
            <span aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111111"
                stroke-width="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          </a>

          <div className="modal-body p-0 text-center">
            <div className="gl-success-icon-avatar-badge mb-4">
              <img
                src="/images/user/super-user-dashboard/charm_circle-tick (2).svg"
                alt=""
              />
            </div>

            <h2 className="gl-success-main-title-bold mb-2">
              Registration Successful!
            </h2>
            <p className="gl-success-sub-title-text mb-4">
              You’re officially registered for this event.
            </p>

            <div className="gl-success-event-details-panel text-left mb-4">
              <h3 className="gl-event-panel-title mb-3">
                Career Planning Workshop
              </h3>

              <div className="gl-event-meta-stack">
                <div className="gl-event-meta-item">
                  <div className="gl-meta-icon-vector">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#006699"
                      stroke-width="2"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <span className="gl-meta-item-label"
                    >Friday, December 5, 2025</span
                  >
                </div>

                <div className="gl-event-meta-item">
                  <div className="gl-meta-icon-vector">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#006699"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <span className="gl-meta-item-label">2:00 PM EST (2 hours)</span>
                </div>

                <div className="gl-event-meta-item">
                  <div className="gl-meta-icon-vector">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#006699"
                      stroke-width="2"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="gl-meta-item-label">Virtual - Zoom</span>
                </div>
              </div>
            </div>

            <div
              className="gl-success-action-footer d-flex align-items-center justify-content-center mt-4"
            >
              <a href="#" className="btn gl-form-cancel-link-btn mx-3">Cancel</a>

              <Link
                to="/student/my-event"
                type="button"
                className="btn gl-success-primary-forward-btn spec-blue-btn px-4 py-2 font-weight-bold"
              >
                View My Events
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  className="ml-2 d-inline-block-v-align"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RegistrationSuccessModal
