import React from 'react'
import { Link } from 'react-router-dom'


const MyService = () => {
  return (
    <>
        {/* <main  className="gl-content-body" style={{padding:'0px 0px'}}> */}
                <div className="gl-services-dashboard-wrapper">

                    {/* <!-- 1. Top Header Banner --> */}
                    <div className="gl-services-header-row">
                        <div className="gl-header-left-side">
                            <a href="#" type="button" className="gl-back-round-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </a>
                            <div className="gl-header-title-block">
                                <h1 className="gl-dashboard-main-title">My Services</h1>
                                <p className="gl-dashboard-sub-desc">Track your all services in one place.</p>
                            </div>
                        </div>
                        <Link to="/student/my-service-request" type="button" className="gl-btn-primary-blue-solid">My Service
                            Requests</Link>
                    </div>

                    {/* <!-- 2. Search & Filters Utility Row --> */}
                    <div className="gl-filters-utility-bar">
                        <div className="gl-search-input-wrapper">
                            <span className="gl-search-lens-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8"
                                    stroke-width="2">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            <input type="text" className="gl-filter-search-field" placeholder="Search"/>
                        </div>

                        <div className="gl-filter-actions-right-group">
                            <div className="gl-dropdown-filter-box">
                                <span className="gl-filter-text-val">Organization</span>
                                <span className="gl-filter-chevron-down"></span>
                            </div>
                            <div className="gl-dropdown-filter-box">
                                <span className="gl-filter-icon-funnel">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569"
                                        stroke-width="2">
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                </span>
                                <span className="gl-filter-text-val">All Status</span>
                            </div>
                            <button type="button" className="gl-btn-add-request">
                                <span className="gl-plus-icon">+</span> New Request
                            </button>
                        </div>
                    </div>

                    {/* <!-- 3. Service Cards Feed Stream --> */}
                    <div className="gl-services-cards-stack">

                        {/* <!-- CARD 1: IN PROGRESS STATE --> */}
                        <div className="gl-service-status-card">
                            <div className="gl-card-main-body-layout">
                                <div className="gl-card-icon-avatar-box">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006699"
                                        stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>

                                <div className="gl-card-core-content-column">
                                    <div className="gl-card-top-headline-row">
                                        <h2 className="gl-service-item-title">Project Support</h2>
                                        <span className="gl-status-badge status-in-progress">In Progress</span>
                                    </div>
                                    <p className="gl-service-item-tagline">Technical guidance for cybersecurity project</p>

                                    <div className="gl-card-meta-details-grid">
                                        <div className="gl-meta-item"><strong>Provider:</strong> David Lee</div>
                                        <div className="gl-meta-item"><strong>Submitted:</strong> Nov 25, 2025</div>
                                        <div className="gl-meta-item text-md-end"><strong>Last Updated:</strong> Nov 27,
                                            2025</div>
                                    </div>

                                    <div className="gl-card-progress-tracking-engine">
                                        <div className="gl-progress-labels-row">
                                            <span className="gl-progress-indicator-title">Progress</span>
                                            <span className="gl-progress-ratio-count font-blue-bold">7 / 20 hours</span>
                                        </div>
                                        <div className="gl-progress-bar-rail">
                                            <div className="gl-progress-bar-fill fill-in-progress" style={{width: "35%"}}>
                                            </div>
                                        </div>
                                        <div className="gl-progress-footer-stats">
                                            <span className="gl-stat-date-stamp">Last interaction: 12-09-2025</span>
                                            <span className="gl-stat-percentage-badge font-green-text">
                                                <span className="gl-check-circle-icon"><img
                                                        src="/images/user/super-user-dashboard/charm_circle-tick (1).svg"
                                                        alt=""/></span> 40% complete
                                            </span>
                                        </div>
                                    </div>

                                    <div className="gl-card-action-triggers-row">
                                        <button type="button" className="gl-btn-outline-danger">Cancel Request</button>
                                        <Link to="/student/project-support" type="button" className="gl-btn-solid-blue-action">
                                            Resume eLearning
                                            <span className="gl-arrow-right-icon">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- CARD 2: CLOSED STATE --> */}
                        <div className="gl-service-status-card">
                            <div className="gl-card-main-body-layout">
                                <div className="gl-card-icon-avatar-box">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006699"
                                        stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>

                                <div className="gl-card-core-content-column">
                                    <div className="gl-card-top-headline-row">
                                        <h2 className="gl-service-item-title">Project Support</h2>
                                        <span className="gl-status-badge status-closed">Closed</span>
                                    </div>
                                    <p className="gl-service-item-tagline">Technical guidance for cybersecurity project</p>

                                    <div className="gl-card-meta-details-grid">
                                        <div className="gl-meta-item"><strong>Provider:</strong> David Lee</div>
                                        <div className="gl-meta-item"><strong>Submitted:</strong> Nov 25, 2025</div>
                                        <div className="gl-meta-item text-md-end"><strong>Last Updated:</strong> Nov 27,
                                            2025</div>
                                    </div>

                                    <div className="gl-card-progress-tracking-engine">
                                        <div className="gl-progress-labels-row">
                                            <span className="gl-progress-indicator-title">Progress</span>
                                            <span className="gl-progress-ratio-count font-dark-bold">0 / 20 hours</span>
                                        </div>
                                        <div className="gl-progress-bar-rail">
                                            <div className="gl-progress-bar-fill fill-closed" style={{width: "0%"}}></div>
                                        </div>
                                        <div className="gl-progress-footer-stats">
                                            <span className="gl-stat-percentage-badge font-grey-text">
                                                <span className="gl-check-circle-icon"><img
                                                        src="/images/user/super-user-dashboard/charm_circle-tick (1).svg"
                                                        alt=""/></span> 0% complete
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- CARD 3: COMPLETED WITH ACTIONS STATE --> */}
                        <div className="gl-service-status-card">
                            <div className="gl-card-main-body-layout">
                                <div className="gl-card-icon-avatar-box">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006699"
                                        stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>

                                <div className="gl-card-core-content-column">
                                    <div className="gl-card-top-headline-row">
                                        <h2 className="gl-service-item-title">Group Coaching</h2>
                                        <span className="gl-status-badge status-completed">Completed</span>
                                    </div>
                                    <p className="gl-service-item-tagline">Leadership and management skills workshop</p>

                                    <div className="gl-card-meta-details-grid">
                                        <div className="gl-meta-item"><strong>Provider:</strong> Michael Chen</div>
                                        <div className="gl-meta-item"><strong>Submitted:</strong> Nov 20, 2025</div>
                                        <div className="gl-meta-item text-md-end"><strong>Last Updated:</strong> Nov 22,
                                            2025</div>
                                    </div>

                                    <div className="gl-card-progress-tracking-engine">
                                        <div className="gl-progress-labels-row">
                                            <span className="gl-progress-indicator-title">Progress</span>
                                            <span className="gl-progress-ratio-count font-green-bold">20 / 20 hours</span>
                                        </div>
                                        <div className="gl-progress-bar-rail">
                                            <div className="gl-progress-bar-fill fill-completed" style={{width: "100%"}}></div>
                                        </div>
                                        <div className="gl-progress-footer-stats">
                                            <span className="gl-stat-date-stamp">Last interaction: 12-09-2025</span>
                                            <span className="gl-stat-percentage-badge font-green-text">
                                                <span className="gl-check-circle-icon"><img
                                                        src="/images/user/super-user-dashboard/charm_circle-tick (1).svg"
                                                        alt=""/></span> 100% complete
                                            </span>
                                        </div>
                                    </div>

                                    <div className="gl-card-action-triggers-row">
                                        <button type="button" className="gl-btn-outline-disabled" disabled>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a6b1c2"
                                                stroke-width="2.5" className="me-1">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                            Download Certificate
                                        </button>
                                        {/* <!-- <button type="button" className="gl-btn-outline-blue-action">Give Feedback</button> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- 4. Footer Pagination Controls Bar --> */}
                    <div className="gl-dashboard-footer-pagination-row">
                        <div className="gl-pagination-left-info">
                            <span className="gl-label-show-text">Show</span>
                            <div className="gl-page-size-selector-facade">
                                <select className="gl-native-page-selector">
                                    <option value="10" selected>10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </select>
                                <span className="gl-mini-chevron-down"></span>
                            </div>
                            <span className="gl-total-count-text">Showing 1-4 from 50 results</span>
                        </div>

                        <div className="gl-pagination-navigation-tray">
                            <button type="button" className="gl-page-nav-btn page-nav-disabled" disabled>Prev</button>
                            <button type="button" className="gl-page-num-btn page-num-active">1</button>
                            <button type="button" className="gl-page-num-btn">2</button>
                            <button type="button" className="gl-page-num-btn">3</button>
                            <span className="gl-pagination-ellipsis">...</span>
                            <button type="button" className="gl-page-num-btn">10</button>
                            <button type="button" className="gl-page-nav-btn page-nav-active-blue">Next</button>
                        </div>
                    </div>

                </div>
            {/* </main> */}
    </>
  )
}

export default MyService
