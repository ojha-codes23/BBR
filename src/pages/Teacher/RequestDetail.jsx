import React from 'react'
import { Link } from 'react-router-dom'
import AcceptRequestModal from '../../components/teacher/AcceptRequestModal'
import DeclineRequestModal from '../../components/teacher/DeclineRequestModal'
import EscalateRequestModal from '../../components/teacher/EscalateRequestModal'

const RequestDetail = () => {
    return (
        <>
            <main className="content">

                <div className="page-title-row">
                    <button className="back-btn">
                        <a href="request-management.html">
                            <i className="fa-solid fa-arrow-left"></i>
                        </a>
                    </button>
                    <div className="page-title">
                        <h1>Request Details</h1>
                        <p>View details of this service request</p>
                    </div>

                    <Link to="/teacher/sow-call-discussion" className="btn-action btn-email-user ms-auto">
                        View SOW
                    </Link>
                </div>

                <div className="details-grid">

                    <div className="left-column">

                        <div className="card">
                            <div className="user-header-block">
                                <img className="user-avatar-lg"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                                    alt="Emma Wilson" />
                                <div className="user-meta-info">
                                    <div className="name-badge-row">
                                        <span className="profile-name">Emma Wilson</span>
                                        <span className="badge-pending">Pending</span>
                                    </div>
                                    <Link to="/teacher/user-profile" className="sub-link view-profile-btn">User Profile</Link>
                                    <div className="service-tag">
                                        <i className="fa-solid fa-book-open"></i> Math Tutoring
                                    </div>
                                </div>
                            </div>

                            <div className="specs-grid">
                                <div className="spec-item">
                                    <div className="spec-label"><i className="fa-regular fa-calendar"></i> Submitted</div>
                                    <div className="spec-value">12-10-2025</div>
                                </div>
                                <div className="spec-item">
                                    <div className="spec-label"><i className="fa-regular fa-clock"></i> Estimated</div>
                                    <div className="spec-value">10 Hours</div>
                                </div>
                                <div className="spec-item">
                                    <div className="spec-label"><i className="fa-regular fa-user"></i> Service Type</div>
                                    <div className="spec-value">Math Tutoring</div>
                                </div>
                                <div className="spec-item">
                                    <div className="spec-label"><i className="fa-regular fa-star"></i> Priority</div>
                                    <div className="spec-value" style={{ paddingLeft: "22px", marginTop: "2px" }}>
                                        <span className="priority-badge">Normal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="description-block">
                                <div className="section-subtitle">Description</div>
                                <p className="description-text">Need help with advanced calculus and linear algebra concepts
                                    for upcoming exams.</p>
                            </div>

                            <div className="attachments-block">
                                <div className="section-subtitle">Attachments</div>
                                <div className="attachment-badge-container">
                                    <div className="attachment-pill">
                                        <i className="fa-solid fa-paperclip"></i> syllabus.pdf
                                    </div>
                                    <div className="attachment-pill">
                                        <i className="fa-solid fa-paperclip"></i> requirements.docx
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="preference-card-container">
                            {/* <!-- Icon section matching the layout block --> */}
                            <div className="preference-icon-box">
                                <i className="fa-solid fa-users-rectangle"></i>
                            </div>

                            {/* <!-- Text details layout component --> */}
                            <div className="preference-content-zone">
                                <h3 className="preference-title">Choice Preference</h3>
                                <span className="preference-badge-text">1st Choice</span>
                                <p className="preference-description">You are the primary choice for this service request.
                                </p>
                            </div>
                        </div>

                        <div className="actions-row">

                            <button className="btn-action btn-sow-action revision" data-bs-toggle="modal"
                                data-bs-target="#revisionPopupModal">
                                <i className="bi bi-arrow-counterclockwise"></i> Return for Revision
                            </button>
                            <button className="btn-action btn-email-user">
                                <i className="fa-regular fa-envelope"></i> Email User
                            </button>

                            <button className="btn-sow-action decline" data-bs-toggle="modal" data-bs-target="#declineRequestModal">
                                <i className="bi bi-x-lg"></i> Declined
                            </button>
                            <button className="btn-sow-action approve" data-bs-toggle="modal" data-bs-target="#acceptRequestModal">
                                <i className="bi bi-check2-circle"></i> Approve
                            </button>
                            <button className="btn-sow-action approve">
                                <i className="bi bi-pencil-square"></i> Draft SOW
                            </button>
                        </div>

                    </div>

                    <div className="right-column">
                        <div className="timeline-card">
                            <div className="timeline-title">
                                <i className="fa-solid fa-clock-rotate-left"></i> Service Tracker
                            </div>

                            <div className="timeline-container">
                                <div className="timeline-item">
                                    <div className="timeline-icon completed">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Pending</span>
                                        <span className="timeline-date">12-10-2025</span>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-icon completed">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Request Accepted</span>
                                        <span className="timeline-date">12-11-2025</span>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-icon completed">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Call Discussion</span>
                                        <span className="timeline-date">12-11-2025</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">SOW Created</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Awaiting Revision / SOW Revised</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">SOW Approved</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Agreement Signed</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Payment Completed</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">In Progress</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Completed</span>
                                    </div>
                                </div>

                                <div className="timeline-item disabled">
                                    <div className="timeline-icon current"></div>
                                    <div className="timeline-details">
                                        <span className="timeline-status-name">Review & Feedback</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="sessions-section-container">

                    {/* <!-- Main Title Header Block --> */}
                    <h2 className="section-main-heading">Sessions</h2>

                    {/* <!-- Central Blank State Card Grid System Element --> */}
                    <div className="empty-state-card-wrapper">

                        {/* <!-- Circular Centralized Icon Unit Placeholder --> */}
                        <div className="icon-circle-badge">
                            <i className="fa-regular fa-calendar"></i>
                        </div>

                        {/* <!-- Contextual Text Metadata Labels --> */}
                        <h3 className="empty-state-title">No sessions scheduled yet</h3>
                        <p className="empty-state-subtitle">Click "Schedule Session" to get started</p>

                        {/* <!-- Dynamic Execution Action Trigger Button Controls --> */}
                        <button className="btn-schedule-action-trigger">
                            <i className="fa-regular fa-calendar-plus"></i> Schedule Session
                        </button>

                    </div>
                </div>

                <div className="feedback-section-card">
                    <div className="section-header">
                        <h2>Review & Feedback</h2>
                        <p>Complete this after service delivery is finished.</p>
                    </div>

                    {/* <!-- Master Interactive Container Area --> */}
                    <div className="feedback-form-body">
                        <span className="field-label">Overall grantee experience</span>

                        {/* <!-- Dynamic Star Selection Container (Default: 5 Stars) --> */}
                        <div className="interactive-rating-row" id="ratingStarContainer">
                            <i className="fa-solid fa-star active" data-value="1"></i>
                            <i className="fa-solid fa-star active" data-value="2"></i>
                            <i className="fa-solid fa-star active" data-value="3"></i>
                            <i className="fa-solid fa-star active" data-value="4"></i>
                            <i className="fa-solid fa-star active" data-value="5"></i>
                        </div>

                        <span className="field-label">Feedback Tags <span className="tags-selection-instruction">(Select up to
                            3)</span></span>

                        {/* <!-- Tags Box Wrapper Area (Alters dynamically on Star trigger selection) --> */}
                        <div className="feedback-tags-flex-wrapper" id="dynamicTagsContainer">
                            {/* <!-- Loaded dynamically by Javascript logic baseline --> */}
                        </div>

                        <span className="field-label">Teacher notes</span>
                        <textarea className="notes-textarea-element" id="teacherNotesArea"
                            placeholder="Type your experience details here..."></textarea>
                    </div>

                    {/* <!-- Bottom Informative Agreement Alert Bar --> */}
                    <div className="status-alert-banner-tray">
                        <div className="status-left-info">
                            <i className="fa-solid fa-circle-info"></i>
                            <div>
                                <span><strong>Available after agreement completion</strong></span>
                                <p>You can submit your review once the service agreement is marked as completed.</p>
                            </div>
                        </div>
                        <div className="ready-badge-indicator">Ready to submit</div>
                    </div>

                    {/* <!-- Form Button Control Tray Layout --> */}
                    <div className="form-actions-footer-row">
                        <button className="btn-action-submit">Submit Review</button>
                        <button className="btn-action-draft"><i className="fa-regular fa-file-lines"></i> Save Draft</button>
                    </div>
                </div>

            </main>

            <AcceptRequestModal />
            <DeclineRequestModal />
            <EscalateRequestModal />

        </>
    )
}

export default RequestDetail