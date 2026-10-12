import React from 'react'
import { Link } from 'react-router-dom'

const MyServiceRequest = () => {
  return (
   <>
         <div className="gl-dashboard-view-container">

                    <div className="gl-main-dashboard-header">
                        <div className="gl-header-identity-group">
                            <a href="my-services.html" type="button" className="gl-circle-back-trigger">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </a>
                            <div className="gl-header-meta-titles">
                                <h1 className="gl-view-primary-title">My Service Request</h1>
                                <p className="gl-view-subtitle-caption">Track your coaching, mentorship, and support
                                    requests in one place.</p>
                            </div>
                        </div>

                    </div>

                    <div className="gl-dashboard-toolbar-strip sp-bt">
                        <div className="gl-search-bar-modular-input">
                            <span className="gl-lens-absolute-svg">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8"
                                    stroke-width="2">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            <input type="text" className="gl-search-native-field" placeholder="Search"/>
                        </div>
                        <div className="gl-header-utility-actions">
                            <div className="gl-facade-filter-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569"
                                    stroke-width="2" className="me-1">
                                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                </svg>
                                <span>All Status</span>
                            </div>
                            <button type="button" className="gl-solid-action-blue-btn">+ New Request</button>
                        </div>
                    </div>

                    <div className="gl-cards-feed-stream-wrapper">

                        <div className="gl-modular-request-card">
                            <div className="gl-request-card-flex-node">
                                <div className="gl-icon-category-badge-box">
                                    <span className="gl-custom-icon-text font-weight-bold"><img
                                            src="/images/user/super-user-dashboard/fluent_ratio-one-regular.svg"
                                            alt=""/></span>
                                </div>
                                <div className="gl-request-card-main-data-block">
                                    <div className="gl-card-title-header-row">
                                        <h3 className="gl-request-item-title">One-on-One Coaching</h3>
                                        <span className="gl-status-pill-badge skin-pending">Pending</span>
                                    </div>
                                    <p className="gl-request-item-desc-text">Career planning and skill development guidance
                                    </p>
                                    <div className="gl-card-meta-inline-info-row">
                                        <div className="gl-inline-meta-item"><strong>Submitted:</strong> Nov 15, 2025</div>
                                    </div>
                                    <div className="gl-card-action-triggers-row">
                                        <button type="button" className="gl-btn-flat-grey-disabled" disabled>Request
                                            Pending</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gl-modular-request-card">
                            <div className="gl-request-card-flex-node">
                                <div className="gl-icon-category-badge-box">
                                    <span className="gl-custom-icon-text font-weight-bold"><img
                                            src="/images/user/super-user-dashboard/fluent_ratio-one-regular.svg"
                                            alt="One-on-One Coaching"/></span>
                                </div>
                                <div className="gl-request-card-main-data-block position-relative">
                                    <div className="gl-card-title-header-row">
                                        <h3 className="gl-request-item-title">One-on-One Coaching</h3>
                                        <span className="gl-status-pill-badge skin-pending">Pending</span>
                                    </div>
                                    <p className="gl-request-item-desc-text">Career planning and skill development guidance
                                    </p>
                                    <div className="gl-card-meta-inline-info-row">
                                        <div className="gl-inline-meta-item"><strong>Submitted:</strong> Nov 15, 2025</div>
                                    </div>

                                    <div className="gl-card-action-triggers-row align-items-center justify-content-between">
                                        <button type="button" className="gl-btn-flat-grey-disabled" disabled>Request
                                            Pending</button>

                                        <div className="gl-info-tooltip-anchor-trigger dropup">
                                            <div className="gl-tooltip-floating-bubble-panel dropdown-menu">
                                                Your service request is being reviewed by district admin.
                                            </div>
                                            <div className="gl-info-icon-circle-box dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">i</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gl-modular-request-card">
                            <div className="gl-request-card-flex-node">
                                <div className="gl-icon-category-badge-box">
                                    <img src="/images/user/super-user-dashboard/ion_book-outline.svg" alt="Career Guidance"/>
                                </div>
                                <div className="gl-request-card-main-data-block">
                                    <div className="gl-card-title-header-row">
                                        <h3 className="gl-request-item-title">Career Guidance</h3>
                                        <span className="gl-status-pill-badge skin-pending">Pending</span>
                                    </div>
                                    <p className="gl-request-item-desc-text">Help with career transition planning</p>
                                    <div className="gl-card-meta-grid-three-column">
                                        <div className="gl-grid-meta-cell"><strong>Provider:</strong> Pending Assignment
                                        </div>
                                        <div className="gl-grid-meta-cell"><strong>Submitted:</strong> Nov 25, 2025</div>
                                        <div className="gl-grid-meta-cell text-md-end"><strong>Last Updated:</strong> Nov
                                            27, 2025</div>
                                    </div>
                                    <div className="gl-card-action-triggers-row gap-3">
                                        <button type="button" className="gl-btn-outline-red-destructive">Cancel
                                            Request</button>
                                        <Link to="/student/sow-detail-1" type="button" className="gl-btn-solid-blue-interactive">
                                            Fill SOW Now <span className="ms-1">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gl-modular-request-card">
                            <div className="gl-request-card-flex-node">
                                <div className="gl-icon-category-badge-box">
                                    <img src="/images/user/super-user-dashboard/fluent_person-support.svg" alt="Project Support"/>
                                </div>
                                <div className="gl-request-card-main-data-block">
                                    <div className="gl-card-title-header-row">
                                        <h3 className="gl-request-item-title">Project Support</h3>
                                        <span className="gl-status-pill-badge skin-approved">Approved</span>
                                    </div>
                                    <p className="gl-request-item-desc-text">Technical guidance for cybersecurity project
                                    </p>
                                    <div className="gl-card-meta-grid-three-column">
                                        <div className="gl-grid-meta-cell"><strong>Provider:</strong> David Lee</div>
                                        <div className="gl-grid-meta-cell"><strong>Submitted:</strong> Nov 25, 2025</div>
                                        <div className="gl-grid-meta-cell text-md-end"><strong>Last Updated:</strong> Nov
                                            27, 2025</div>
                                    </div>
                                    <div className="gl-card-action-triggers-row gap-3">
                                        <button type="button" className="gl-btn-outline-red-destructive">Cancel
                                            Request</button>
                                        <button type="button" className="gl-btn-solid-green-interactive">
                                            Start Learning <span className="ms-1">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gl-modular-request-card">
                            <div className="gl-request-card-flex-node">
                                <div className="gl-icon-category-badge-box">
                                    <img src="/images/user/super-user-dashboard/group-coaching.svg" alt="Group Coaching"/>
                                </div>
                                <div className="gl-request-card-main-data-block">
                                    <div className="gl-card-title-header-row">
                                        <h3 className="gl-request-item-title">Group Coaching</h3>
                                        <span className="gl-status-pill-badge skin-pending">Pending</span>
                                    </div>
                                    <p className="gl-request-item-desc-text">Leadership and management skills workshop</p>
                                    <div className="gl-card-meta-grid-three-column">
                                        <div className="gl-grid-meta-cell"><strong>Provider:</strong> Michael Chen</div>
                                        <div className="gl-grid-meta-cell"><strong>Submitted:</strong> Nov 20, 2025</div>
                                        <div className="gl-grid-meta-cell text-md-end"><strong>Last Updated:</strong> Nov
                                            22, 2025</div>
                                    </div>
                                    <div className="gl-card-action-triggers-row gap-3">
                                        <button type="button" className="gl-btn-outline-red-destructive">Cancel
                                            Request</button>
                                        <button type="button" className="gl-btn-solid-blue-interactive">
                                            Provider Agreement <span className="ms-1">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="gl-pagination-footer-bar">
                        <div className="gl-pagination-left-metrics">
                            <span className="gl-txt-muted">Show</span>
                            <div className="gl-page-size-selector-facade">
                                <select className="gl-native-select-element">
                                    <option value="10" selected>10</option>
                                    <option value="25">25</option>
                                </select>
                                <span className="gl-mini-arrow-chevron"></span>
                            </div>
                            <span className="gl-txt-muted">Showing 1-4 from 50 results</span>
                        </div>
                        <div className="gl-pagination-navigation-tray">
                            <button type="button" className="gl-nav-btn btn-state-disabled" disabled>Prev</button>
                            <button type="button" className="gl-page-index-btn is-active-index">1</button>
                            <button type="button" className="gl-page-index-btn">2</button>
                            <button type="button" className="gl-page-index-btn">3</button>
                            <span className="gl-pagination-ellipsis-spacer">...</span>
                            <button type="button" className="gl-page-index-btn">10</button>
                            <button type="button" className="gl-nav-btn btn-state-active">Next</button>
                        </div>
                    </div>

                </div>
   </>
  )
}

export default MyServiceRequest
