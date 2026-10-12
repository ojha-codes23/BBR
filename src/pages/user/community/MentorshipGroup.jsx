import React from 'react'
import JoinGroupNetWorkModal from '../../../components/user/JoinGroupNetWorkModal'

const MentorshipGroup = () => {
  return (
    <>
             <main>
          <div className="gl-mentorship-dashboard-container">
            {/* <!-- DASHBOARD IDENTITY HEADER --> */}
            <div className="gl-mentorship-main-header">
              <h1 className="gl-page-primary-title">Mentorship Groups</h1>
              <p className="gl-page-subtitle-caption">
                Connect with mentors and peers in specialized groups based on
                expertise and region
              </p>
            </div>

            {/* <!-- PREMIUM NOTICE ALERT BANNER --> */}
            <div className="gl-premium-alert-banner-box">
              <div className="gl-alert-icon-circle">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d97706"
                  stroke-width="2.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <div className="gl-alert-message-content">
                Mentorship groups require a premium account. Upgrade to unlock
                personalized mentorship and networking opportunities.
              </div>
            </div>

            {/* <!-- CARDS FEED FLOW STREAM --> */}
            <div className="gl-groups-cards-feed-wrapper">
              {/* <!-- CARD STATE 1: ACTIVE MEMBER (FREE) --> */}
              <div className="gl-group-modular-card-item">
                <div className="gl-group-card-flex-layout">
                  <div className="gl-group-avatar-icon-box">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#006699"
                      stroke-width="2"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="gl-group-card-main-body">
                    <div className="gl-group-card-header-row">
                      <h3 className="gl-group-item-headline">
                        Cybersecurity Career Mentorship
                      </h3>
                      <span className="gl-access-tag-badge skin-badge-free">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          className="me-1"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg
                        >Free
                      </span>
                    </div>
                    <p className="gl-group-item-description">
                      Get personalized guidance on breaking into the
                      cybersecurity field.
                    </p>

                    <div className="gl-group-item-tags-inline-row">
                      <span className="gl-meta-pill-tag">Cybersecurity</span>
                      <span className="gl-meta-pill-tag">Security</span>
                      <span className="gl-meta-pill-tag">Technology</span>
                    </div>

                    <div className="gl-group-footer-interactive-row">
                      <div className="gl-mentor-assigned-name">
                        <strong>Mentor:</strong> Dr. Sarah Chen
                      </div>
                      <div className="gl-actions-buttons-cluster">
                        <button
                          type="button"
                          className="gl-btn-outline-danger-action"
                        >
                          Leave Group
                        </button>
                        <button type="button" className="gl-btn-solid-blue-action">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            className="me-1"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          Ask a Mentor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- CARD STATE 2: NON-MEMBER DISCOVERABLE (FREE) --> */}
              <div className="gl-group-modular-card-item">
                <div className="gl-group-card-flex-layout">
                  <div className="gl-group-avatar-icon-box">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#006699"
                      stroke-width="2"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="gl-group-card-main-body">
                    <div className="gl-group-card-header-row">
                      <h3 className="gl-group-item-headline">
                        Pacific Northwest Tech Network
                      </h3>
                      <span className="gl-access-tag-badge skin-badge-free">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          className="me-1"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg
                        >Free
                      </span>
                    </div>
                    <p className="gl-group-item-description">
                      Regional networking and job opportunities for tech
                      professionals
                    </p>

                    <div className="gl-group-item-tags-inline-row">
                      <span className="gl-meta-pill-tag">Cybersecurity</span>
                      <span className="gl-meta-pill-tag">Security</span>
                      <span className="gl-meta-pill-tag">Technology</span>
                    </div>

                    <div className="gl-group-footer-interactive-row">
                      <div className="gl-mentor-assigned-name">
                        <strong>Mentor:</strong> Dr. Sarah Chen
                      </div>
                      <div className="gl-actions-buttons-cluster">
                        <button
                          type="button"
                          className="gl-btn-solid-blue-action px-4"
                        >
                          Join Group <span className="ms-1">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- CARD STATE 3: LOCKED PREMIUM OPTION --> */}
              <div className="gl-group-modular-card-item">
                <div className="gl-group-card-flex-layout">
                  <div className="gl-group-avatar-icon-box">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#006699"
                      stroke-width="2"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="gl-group-card-main-body">
                    <div className="gl-group-card-header-row">
                      <h3 className="gl-group-item-headline">
                        Fiber Optics Installation Mastery
                      </h3>
                      <span className="gl-access-tag-badge skin-badge-premium">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          className="me-1"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                        >Premium
                      </span>
                    </div>
                    <p className="gl-group-item-description">
                      Hands-on mentorship for fiber optics technicians
                    </p>

                    <div className="gl-group-item-tags-inline-row">
                      <span className="gl-meta-pill-tag">Cybersecurity</span>
                      <span className="gl-meta-pill-tag">Security</span>
                      <span className="gl-meta-pill-tag">Technology</span>
                    </div>

                    <div className="gl-group-footer-interactive-row">
                      <div className="gl-mentor-assigned-name">
                        <strong>Mentor:</strong> Dr. Sarah Chen
                      </div>
                      <div className="gl-actions-buttons-cluster">
                        <button type="button" className="gl-btn-solid-amber-action">
                          Upgrade Required <span className="ms-1">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- CLEAN SCANNABLE PAGINATION BLOCK FOOTER --> */}
            <div className="gl-mentorship-pagination-footer-bar">
              <div className="gl-pagination-left-metric-label">
                Showing 4 from 50 results
              </div>
              <div className="gl-pagination-navigation-tray">
                <button
                  type="button"
                  className="gl-nav-step-btn is-btn-disabled"
                  disabled
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="gl-index-circle-btn is-active-index"
                >
                  1
                </button>
                <button type="button" className="gl-index-circle-btn">2</button>
                <button type="button" className="gl-index-circle-btn">3</button>
                <span className="gl-pagination-ellipsis-break">...</span>
                <button type="button" className="gl-index-circle-btn">10</button>
                <button type="button" className="gl-nav-step-btn is-btn-active">
                  Next
                </button>
              </div>
            </div>
            <a href='#joinGroupNetworkModal' className="btn btn-primary"
            // data-bs-toggle="modal" data-bs-target="#joinGroupNetworkModal"

              >Join Tech Network</a>
          </div>
        </main>


        <JoinGroupNetWorkModal/>
    </>
  )
}

export default MentorshipGroup
