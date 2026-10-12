import React from 'react'
import RescheduleSession from '../../components/teacher/RescheduleSession'
// import ScheduleSession from '../../components/teacher/ScheduleSession'

const SessionDetail = () => {
    return (
        <>
        
        <div className="details-container">

            <header className="details-header">
                <a href="events-&-sessions-ses.html" className="btn-back-circle" title="Back">
                    <i className="bi bi-arrow-left"></i>
                </a>
                <div className="header-text">
                    <h1>View Session Details</h1>
                    <p>Manage session activities & view User profile</p>
                </div>
            </header>

            <section className="session-info-card">
                <div className="session-icon-box">
                    <i className="bi bi-file-text"></i>
                </div>
                <div className="session-info-body">
                    <div className="card-top-header">
                        <h2 className="session-main-title">Technical Problem Solving</h2>
                        <span className="status-badge-scheduled">Scheduled</span>
                    </div>
                    <p className="session-sub-desc">Technical guidance for cybersecurity project</p>

                    <div className="info-data-grid">
                        <div><span className="grid-label">User:</span> <span className="grid-value">David Lee</span></div>
                        <div><span className="grid-label">Date:</span> <span className="grid-value">Nov 25, 2025</span>
                        </div>
                        <div><span className="grid-label">Time:</span> <span className="grid-value">10:00 AM</span></div>
                        <div><span className="grid-label">Duration:</span> <span className="grid-value">60 Min</span></div>
                    </div>

                    <div className="session-actions-grid">
                        <button className="btn-action-cancel">
                            <i className="bi bi-x-lg"></i> Cancel
                        </button>
                        <button className="btn-action-reschedule" data-bs-toggle="modal"
                            data-bs-target="#rescheduleSessionModal">
                            <i className="bi bi-clock"></i> Reschedule
                        </button>
                        {/* <button className="btn-action-reschedule" data-bs-toggle="modal"
                            data-bs-target="#scheduleSessionModal">
                            <i className="bi bi-clock"></i> Reschedule
                        </button> */}

                        
                        <button className="btn-action-start">
                            Start Class <i className="bi bi-arrow-right"></i>
                        </button>
                        <button className="btn-action-done">
                            <i className="bi bi-check2"></i> Mark as done
                        </button>
                    </div>
                </div>
            </section>

            <section className="profile-container-card">

                <div className="profile-banner-row">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                        alt="Emma Wilson avatar" className="profile-avatar-circle" />
                    <div className="profile-title-text">
                        <h2>Emma Wilson</h2>
                        <p>User</p>
                    </div>
                </div>

                <div className="profile-analytics-matrix">
                    <div className="stat-block-card">
                        <i className="bi bi-file-earmark-text stat-icon"></i>
                        <span className="stat-label">Enrolled Since</span>
                        <span className="stat-value">September 2025</span>
                    </div>
                    <div className="stat-block-card">
                        <i className="bi bi-calendar4-event stat-icon"></i>
                        <span className="stat-label">Total Sessions</span>
                        <span className="stat-value">5</span>
                    </div>
                    <div className="stat-block-card">
                        <i className="bi bi-book stat-icon"></i>
                        <span className="stat-label">Service</span>
                        <span className="stat-value">Project Support</span>
                    </div>
                    <div className="stat-block-card">
                        <i className="bi bi-clock stat-icon"></i>
                        <span className="stat-label">Total Hours</span>
                        <span className="stat-value">15.5</span>
                    </div>
                </div>

                <div className="contact-section-header">
                    <i className="bi bi-person-vcard"></i> Contact Information
                </div>

                <div className="contact-info-row">
                    <div className="contact-field-pill">
                        <i className="bi bi-envelope"></i>
                        <span>User@example.com</span>
                    </div>
                    <div className="contact-field-pill">
                        <i className="bi bi-telephone"></i>
                        <span>+1 (555) 123-4567</span>
                    </div>
                </div>

            </section>

        </div>
        {/* <ScheduleSession /> */}

        <RescheduleSession />

        </>
    )
}

export default SessionDetail