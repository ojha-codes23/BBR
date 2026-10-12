import React from 'react'
import { Link } from 'react-router-dom'

const SowPayment = () => {
  return (
    <main className="content">
    <div>

        {/* <!-- Top Title Bar Segment --> */}
        <div className="header-section">
            <a href="requests-management-user-profile.html" className="back-arrow-btn">
                <i className="fa-solid fa-arrow-left"></i>
            </a>
            <div>
                <h1 className="header-title">SOW Details</h1>
                <p className="header-subtitle">Career planning and skill development guidance</p>
            </div>
        </div>

        {/* <!-- Service Tracker Stepper Progress Card Layout with Horizontal Left-to-Right Scroll --> */}
        <div className="custom-card">
            <span className="custom-form-label mb-0" style={{fontSize: "15px", color: "#344054"}}>Service
                Tracker</span>

            <div className="tracker-scroll-container">
                <div className="tracker-wrapper">

                    <div className="tracker-item completed">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">Pending</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item completed">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">Request Accepted</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item completed">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">Call Discussion</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item completed">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">SOW Created</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item completed">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">Awaiting Revision / SOW Revised</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item completed">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">SOW Approved</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item completed">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">Agreement Signed</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item active">
                        <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                        <span className="tracker-label">Payment Completed</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item">
                        <div className="tracker-icon-circle"></div>
                        <span className="tracker-label">In Progress</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item">
                        <div className="tracker-icon-circle"></div>
                        <span className="tracker-label">Completed</span>
                    </div>
                    <div className="tracker-line-divider"></div>

                    <div className="tracker-item">
                        <div className="tracker-icon-circle"></div>
                        <span className="tracker-label">Review & Feedback</span>
                    </div>

                </div>
            </div>
        </div>

        {/* <!-- Section Info Area Title --> */}



        {/* <!-- Main Inner Scheduled Call Details Box Card Block --> */}

        <div className="sow-form-container p-0 border-0">



            <h2 className="section-title mb-3">Payment Status</h2>
            <div className="module-section">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">Payment Status</div>
                        <div><span className="badge-status-pending">Pending</span></div>
                        <div><span className="badge-status-success">Successful</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">Total Amount</div>
                        <div className="text-value-display"
                            style={{fontSize: "18px", fontWeight: "700", color: "#101828"}}>$1,200
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">Payment Due</div>
                        <div className="text-value-display" style={{color: "var(--error-red)", fontWeight: "600"}}>
                            Not Paid</div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">Date:</div>
                        <div className="text-value-display">04-15-2026</div>
                    </div>
                </div>

                <div className="action-buttons-flex">
                    <a href="#" className="btn-outline-custom"><i className="fa-regular fa-file-lines"></i> Send
                        Invoice</a>
                    <a href="#" className="btn-outline-custom"><i className="fa-regular fa-envelope"></i> Send
                        Payment Reminder</a>
                    <a href="#" className="btn-outline-custom"><i className="fa-regular fa-file-lines"></i> View
                        Agreement</a>
                    <a href="#" className="btn-outline-custom"><i className="fa-regular fa-envelope"></i> Email User</a>
                </div>

                <div className="mt-4">
                    <div className="custom-alert alert-warning-custom">
                        <i className="fa-solid fa-circle-info"></i>
                        <div>
                            <strong>Awaiting User Payment</strong><br />
                            User must complete payment before sessions can be scheduled.
                        </div>
                    </div>

                    <div className="custom-alert alert-error-custom">
                        <i className="fa-solid fa-circle-xmark"></i>
                        <div>
                            The request has been closed by Admin.
                        </div>
                    </div>

                    <div className="custom-alert alert-success-custom">
                        <i className="fa-solid fa-circle-check"></i>
                        <div>
                            Payment Received! You can now schedule sessions.
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="section-title mb-3">Sessions</h2>
            <div className="module-section p-0 border-0">
                <div className="empty-session-card">
                    <div className="empty-session-icon">
                        <i className="fa-regular fa-calendar"></i>
                    </div>
                    <div className="empty-title">No sessions scheduled yet</div>
                    <p className="empty-subtitle">Click "Schedule Session" to get started</p>
                    <button className="btn-disabled-custom" disabled><i className="fa-regular fa-calendar-plus"></i>
                        Schedule
                        Session</button>
                </div>

                <div className="empty-session-card">
                    <div className="empty-session-icon">
                        <i className="fa-regular fa-calendar"></i>
                    </div>
                    <div className="empty-title">No sessions scheduled yet</div>
                    <p className="empty-subtitle">Click "Schedule Session" to get started</p>
                    <a href="#" className="btn-blue-action"><i className="fa-regular fa-calendar-plus"></i> Schedule
                        Session on
                        Calendly</a>
                </div>

                <div className="upcoming-session-card">
                    <div className="session-type-header">
                        <div className="d-flex align-items-center gap-3">
                            <div className="session-icon-box">
                                <i className="fa-regular fa-file-lines"></i>
                            </div>
                            <div>
                                <h3 className="session-title-text">Technical Problem Solving</h3>
                            </div>
                        </div>
                        <span className="badge-upcoming">Upcoming</span>
                    </div>

                    <div className="session-meta-grid">
                        <div className="session-meta-item">
                            <div className="meta-item-label">User:</div>
                            <div className="meta-item-value">David Lee</div>
                        </div>
                        <div className="session-meta-item">
                            <div className="meta-item-label">Date:</div>
                            <div className="meta-item-value">Nov 25, 2025</div>
                        </div>
                        <div className="session-meta-item">
                            <div className="meta-item-label">Time:</div>
                            <div className="meta-item-value">10:00 AM</div>
                        </div>
                        <div className="session-meta-item">
                            <div className="meta-item-label">Duration:</div>
                            <div className="meta-item-value">60 Min</div>
                        </div>
                        <div className="session-meta-item">
                            <div className="meta-item-label">Meeting Platform:</div>
                            <div className="meta-item-value">ZOOM</div>
                        </div>
                        <div className="session-meta-item">
                            <div className="meta-item-label">Meeting Link:</div>
                            <div className="meta-item-value"><a href="#"
                                    className="meta-link-style">https://zoom.us/j/...</a></div>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <Link to="/teacher/active-services" className="btn-join-now">Join Now <i
                                className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <h2 className="section-title mb-3">Service Details</h2>
            <div className="module-section">

                <div className="row mb-3">
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">Service Type</div>
                        <div className="text-value-display">SAT Prep</div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">Estimated Hours:</div>
                        <div className="text-value-display">24</div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">Start Date:</div>
                        <div className="text-value-display">03-01-2026</div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="custom-form-label">End Date:</div>
                        <div className="text-value-display">04-15-2026</div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="custom-form-label">Description</div>
                    <p className="text-value-display" style={{textAlign: "justify", lineHeight: "1.6"}}>
                        This initial consultation session is scheduled to understand the User’s specific
                        requirements for
                        the web development service. We will discuss project goals, target audience,
                        required features,
                        timeline, budget expectations, and any design preferences. By the end of the
                        session, we aim to
                        define clear project objectives and outline the next steps for successful
                        implementation.
                    </p>
                </div>

                <div className="mb-4">
                    <div className="custom-form-label">Deliverables</div>
                    <ul className="details-list-bullets">
                        <li>Weekly full-length practice sections</li>
                        <li>Customized study materials and homework assignments</li>
                        <li>Bi-weekly progress reports</li>
                        <li>Final performance evaluation and improvement plan</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</main>
  )
}

export default SowPayment