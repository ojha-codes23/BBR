import React from 'react'
import { Link } from 'react-router-dom'

const SowCallDiscussion = () => {
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
                    <span className="meta-label d-block" style={{ fontSize: "15px", color: "#344054" }}>Service Tracker</span>

                    <div className="tracker-scroll-container">
                        <div className="tracker-wrapper">

                            {/* <!-- Step 1: Pending (Completed) --> */}
                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle">
                                    <i className="bi bi-check2-circle"></i>
                                </div>
                                <span className="tracker-label">Pending</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 2: Request Accepted (Completed) --> */}
                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i>
                                </div>
                                <span className="tracker-label">Request Accepted</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 3: Call Discussion (ACTIVE CURRENT PAGE) --> */}
                            <div className="tracker-item active">
                                <div className="tracker-icon-circle">
                                    <i className="bi bi-check2-circle"></i>
                                </div>
                                <span className="tracker-label">Call Discussion</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 4: SOW Created --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">SOW Created</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 5: Awaiting Revision / SOW Revised --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Awaiting Revision / SOW Revised</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 6: SOW Approved --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">SOW Approved</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 7: Agreement Signed --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Agreement Signed</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 8: Payment Completed --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Payment Completed</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 9: In Progress --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">In Progress</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 10: Completed --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Completed</span>
                            </div>

                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 11: Review & Feedback --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Review &amp; Feedback</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Section Info Area Title --> */}
                <h2 className="section-main-heading">Call Discussion</h2>
                <p className="section-sub-heading">Sent by Sarah Johnson. Please fill, review, sign and submit to
                    activate your service.</p>

                {/* <!-- Main Inner Scheduled Call Details Box Card Block --> */}
                <div className="call-details-box">

                    <div className="scheduled-call-header">
                        <div className="calendar-blue-icon-box">
                            <img src="/images/teacher/super-user-dashboard/calendar-icon.svg" alt="" />
                        </div>
                        <h3 className="scheduled-call-title">Scheduled Call</h3>
                    </div>

                    {/* <!-- Title Meta --> */}
                    <div className="meta-label">Title</div>
                    <div className="meta-value" style={{ color: "#344054", fontWeight: "600" }}>Service Requirement Discussion
                        – Web Development</div>

                    {/* <!-- Quad Column Metadata Layout Alignment --> */}
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="meta-label">Date</div>
                            <div className="meta-value">03-15-2026</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="meta-label">Time</div>
                            <div className="meta-value">10:00PM</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="meta-label">Duration</div>
                            <div className="meta-value">60 minutes</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="meta-label">Meeting Platform</div>
                            <div className="meta-value">Zoom</div>
                        </div>
                    </div>

                    {/* <!-- Description Segment --> */}
                    <div className="meta-label">Description</div>
                    <p className="description-text">
                        This initial consultation session is scheduled to understand the User's specific
                        requirements for the web development service. We will discuss project goals, target
                        audience, required features, timeline, budget expectations, and any design preferences. By
                        the end of the session, we aim to define clear project objectives and outline the next steps
                        for successful implementation.
                    </p>

                    {/* <!-- Calendly Link Segment --> */}
                    <div className="meta-label">Calendly Link</div>
                    <a href="https://calendly.com/your-username" target="_blank"
                        className="calendly-link-url">//calendly.com/your-username</a>

                    <div className="pt-2">
                        {/* <!-- BOTTOM BUTTON AS ANCHOR TAG (<a>) --> */}
                        <Link to="/teacher/sow-create-form" className="btn-start-call-link">
                            <i className="bi bi-camera-video"></i>
                            Start Call
                        </Link>
                    </div>

                </div>
            </div>

        </main>
    )
}

export default SowCallDiscussion