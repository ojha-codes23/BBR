import React from 'react'
import RegistrationSuccessModal from './RegistrationSuccessModal'

const CareerWorkshopDetailsModal = () => {
  return (
    <>
      <div
      className="modal fade"
      id="careerWorkshopDetailsModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="careerWorkshopTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
        style={{maxWidth: "1020px"}}
      >
        <div className="modal-content gl-workshop-main-card">
          <div
            className="modal-header border-0 pb-0 justify-content-between align-items-center"
          >
            <h2
              className="modal-title gl-workshop-header-title h4 font-weight-bold mb-0"
              id="careerWorkshopTitle"
            >
              Career Planning Workshop
            </h2>
            <button
              type="button"
              className="btn-close sucfull-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ boxShadow: 'none' }}
            >
              <img
                src="/images/user/super-user-dashboard/popup-cross-icon (2).svg"
                alt=""
              />
            </button>
          </div>

          <div className="modal-body text-left pt-3">
            <div className="gl-workshop-banner-hero-container mb-4">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                alt="Career Workshop Session"
                className="gl-banner-fluid-image"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>

            <div className="row match-height-grid-container">
              <div className="col-lg-7 col-md-6 mb-4 mb-lg-0">
                <div
                  className="gl-workshop-info-block-card h-100 d-flex flex-column"
                >
                  <h3
                    className="gl-block-section-headline h5 font-weight-bold mb-3"
                  >
                    About This Event
                  </h3>
                  <p className="gl-block-description-text text-muted mb-3">
                    Join us for an interactive workshop on career planning and
                    development. Learn how to create a roadmap for your career
                    success, set achievable goals, and develop strategies to
                    reach them.
                  </p>

                  <p className="gl-block-sub-list-title font-weight-bold mb-2">
                    This workshop will cover:
                  </p>
                  <ul
                    className="gl-block-bullet-stack-list p-0 mb-4"
                    style={{ listStyle: 'none' }}
                  >
                    <li className="mb-1">• Self-assessment and skills inventory</li>
                    <li className="mb-1">• Goal setting frameworks</li>
                    <li className="mb-1">• Industry research techniques</li>
                    <li className="mb-1">
                      • Creating your personal career roadmap
                    </li>
                    <li className="mb-1">• Networking strategies</li>
                  </ul>

                  <div className="gl-tags-inline-flex-row mt-auto">
                    <span className="badge bg-light text-dark p-2 me-1"
                      >Career Development</span
                    >
                    <span className="badge bg-light text-dark p-2 me-1"
                      >Planning</span
                    >
                    <span className="badge bg-light text-dark p-2 me-1"
                      >Workshop</span
                    >
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6">
                <div
                  className="gl-workshop-sidebar-details-card h-100 d-flex flex-column"
                  style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}
                >
                  <h3
                    className="gl-block-section-headline h5 font-weight-bold mb-4"
                  >
                    Event Details
                  </h3>
                  <div className="gl-sidebar-meta-list-items mb-4">
                    <div
                      className="gl-sidebar-single-item-row d-flex align-items-center mb-3"
                    >
                      <div
                        className="gl-sidebar-vector-icon me-3"
                        style={{ marginRight: '12px' }}
                      >
                        <svg
                          width="20"
                          height="20"
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
                      <span className="gl-sidebar-metric-label"
                        >Friday, December 5, 2025</span
                      >
                    </div>

                    <div
                      className="gl-sidebar-single-item-row d-flex align-items-center mb-3"
                    >
                      <div
                        className="gl-sidebar-vector-icon me-3"
                        style={{ marginRight: '12px' }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#006699"
                          stroke-width="2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <span className="gl-sidebar-metric-label"
                        >2:00 PM EST (2 hours)</span
                      >
                    </div>

                    <div
                      className="gl-sidebar-single-item-row d-flex align-items-center mb-3"
                    >
                      <div
                        className="gl-sidebar-vector-icon me-3"
                        style={{ marginRight: '12px' }}
                      >
                        <svg
                          width="20"
                          height="20"
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
                      <span className="gl-sidebar-metric-label"
                        >Virtual - Zoom</span
                      >
                    </div>
                  </div>

                  <hr className="gl-sidebar-divider mb-4" />

                  <h4
                    className="gl-block-section-subheading h6 font-weight-bold mb-3"
                  >
                    Instructor
                  </h4>
                  <div
                    className="gl-sidebar-author-profile-block d-flex align-items-center mb-3"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                      alt="Michael Chen Avatar Indicator"
                      className="gl-author-avatar-circle"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        marginRight: '12px'
                      }}
                    />
                    <span className="gl-author-name-title font-weight-bold"
                      >Michael Chen</span
                    >
                  </div>
                  <p
                    className="gl-sidebar-author-bio-description text-muted small mb-4"
                  >
                    Tech leader and coach specializing in career transitions and
                    skill development.
                  </p>

                  <a
                    href="#registrationSuccessModal"
                    className="btn btn-primary gl-workshop-primary-register-btn mt-auto font-weight-bold py-3 w-100"
                    style={{ backgroundColor: '#006699', border: 'none' }}
                    data-bs-modal='dismiss'
                  >
                    Register Now
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      className="ms-2 d-inline-block-v-align"
                      style={{ marginLeft: '8px'}}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

       <RegistrationSuccessModal />
    </>
  )
}

export default CareerWorkshopDetailsModal
