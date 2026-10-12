import React from 'react'
import { Link } from 'react-router-dom'

const Community = () => {
  return (
   <>
     <main>
          <div className="gl-community-view-container">
            <div className="gl-community-main-header">
              <h1 className="gl-view-primary-title">Community Spaces</h1>
              <p className="gl-view-subtitle-caption">
                Connect with peers, mentors, and experts in your field. Join
                discussions, attend live sessions, and grow together.
              </p>
            </div>

            <div className="gl-community-toolbar-strip">
              <div className="gl-search-bar-modular-input">
                <span className="gl-lens-absolute-svg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94a3b8"
                    stroke-width="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
                <input
                  type="text"
                  className="gl-search-native-field"
                  placeholder="Search"
                />
              </div>

              <div className="gl-um-controls-group-right">
                <div className="dropdown dash-service">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category (All)
                    <img
                      src="/images/user/super-user-dashboard/drop-dwon-right-icon.svg"
                      alt="arrow"
                      className="nd-btn-icon"
                    />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gl-community-cards-feed-wrapper">
              <div className="gl-modular-community-card">
                <div className="gl-community-card-flex-node">
                  <div className="gl-card-thumbnail-media-frame">
                    <img
                      src="https:/images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                      alt="Cybersecurity Professionals"
                      className="gl-native-cover-img"
                    />
                  </div>
                  <div className="gl-community-card-main-data-block">
                    <h3 className="gl-space-item-title">
                      Cybersecurity Professionals
                    </h3>
                    <p className="gl-space-item-desc-text">
                      Discuss security trends, best practices & career
                      opportunities.
                    </p>

                    <div className="gl-space-analytics-counter-row">
                      <div className="gl-analytics-metric-cell">
                        <img
                          src="/images/user/super-user-dashboard/fluent_people-community-20-regular (1).svg"
                          alt=""
                          className="me-2"
                        />
                        <span>342 Members</span>
                      </div>
                      <div className="gl-analytics-divider-pipe">|</div>
                      <div className="gl-analytics-metric-cell">
                        <img
                          src="/images/user/super-user-dashboard/fluent_people-community-20-regular (1).svg"
                          alt=""
                          className="me-2"
                        />
                        <span>1247 Posts</span>
                      </div>
                    </div>

                    <div className="gl-space-tags-inline-row">
                      <span className="gl-meta-pill-tag tag-skin-blue"
                        >Cybersecurity</span
                      >
                      <span className="gl-meta-pill-tag tag-skin-blue"
                        >Security</span
                      >
                      <span className="gl-meta-pill-tag tag-skin-blue"
                        >Technology</span
                      >
                    </div>

                    <div className="gl-space-live-session-schedule-box">
                      <div className="gl-schedule-mini-label">
                        Upcoming Live Session:
                      </div>
                      <div className="gl-schedule-main-headline">
                        Weekly Security Q&A — Dec 5, 3 PM EST
                      </div>
                    </div>

                    <div className="gl-space-card-footer-action-row">
                      <div className="gl-space-creator-identity">
                        {/* <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="me-2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg> --> */}
                        <img
                          src="/images/user/super-user-dashboard/su-user-icon-dash.svg"
                          alt=""
                        />
                        <span>Sarah Johnson</span>
                      </div>
                      <Link
                        to="/student/live-sessions-coaching"
                        type="button"
                        className="gl-btn-solid-blue-interactive"
                        >Enter Space
                        <span className="ms-1"
                          ><img
                            src="/images/user/super-user-dashboard/event-right-icon.svg"
                            alt="" /></span
                      ></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gl-modular-community-card">
                <div className="gl-community-card-flex-node">
                  <div className="gl-card-thumbnail-media-frame">
                    <img
                      src="https:/images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                      alt="Youth Programs Network"
                      className="gl-native-cover-img"
                    />
                  </div>
                  <div className="gl-community-card-main-data-block">
                    <h3 className="gl-space-item-title">Youth Programs Network</h3>
                    <p className="gl-space-item-desc-text">
                      Connect with educators and youth program coordinators.
                    </p>

                    <div className="gl-space-analytics-counter-row">
                      <div className="gl-analytics-metric-cell">
                        <img
                          src="/images/user/super-user-dashboard/fluent_people-community-20-regular (1).svg"
                          alt=""
                          className="me-2"
                        />
                        <span>342 Members</span>
                      </div>
                      <div className="gl-analytics-divider-pipe">|</div>
                      <div className="gl-analytics-metric-cell">
                        <img
                          src="/images/user/super-user-dashboard/fluent_people-community-20-regular (1).svg"
                          alt=""
                          className="me-2"
                        />
                        <span>1247 Posts</span>
                      </div>
                    </div>

                    <div className="gl-space-tags-inline-row">
                      <span className="gl-meta-pill-tag tag-skin-blue"
                        >Education</span
                      >
                      <span className="gl-meta-pill-tag tag-skin-blue">Youth</span>
                      <span className="gl-meta-pill-tag tag-skin-blue"
                        >Programs</span
                      >
                    </div>

                    <div className="gl-space-live-session-schedule-box">
                      <div className="gl-schedule-mini-label">
                        Upcoming Live Session:
                      </div>
                      <div className="gl-schedule-main-headline">
                        Weekly Security Q&A — Dec 5, 3 PM EST
                      </div>
                    </div>

                    <div className="gl-space-card-footer-action-row">
                      <div className="gl-space-creator-identity">
                        <img
                          src="/images/user/super-user-dashboard/su-user-icon-dash.svg"
                          alt=""
                        />
                        <span>Robert Kim</span>
                      </div>
                      <button
                        type="button"
                        className="gl-btn-solid-blue-interactive"
                      >
                        Enter Space
                        <span className="ms-1"
                          ><img
                            src="/images/user/super-user-dashboard/event-right-icon.svg"
                            alt=""
                        /></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gl-community-pagination-footer-bar">
              <div className="gl-pagination-left-metrics-label">
                Showing 4 from 50 results
              </div>
              <div className="gl-pagination-navigation-tray">
                <button
                  type="button"
                  className="gl-nav-btn btn-state-disabled"
                  disabled
                >
                  Prev
                </button>
                <button type="button" className="gl-page-index-btn is-active-index">
                  1
                </button>
                <button type="button" className="gl-page-index-btn">2</button>
                <button type="button" className="gl-page-index-btn">3</button>
                <span className="gl-pagination-ellipsis-spacer">...</span>
                <button type="button" className="gl-page-index-btn">10</button>
                <button type="button" className="gl-nav-btn btn-state-active">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
   
   </>
  )
}

export default Community
