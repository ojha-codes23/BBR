import React from 'react'
import { Link } from 'react-router-dom'

const Notification = () => {
    return (
        <main className="gl-content-body">
            <div className="gl-noti-page-container">

                <div className="gl-np-header-bar">
                    <div className="gl-np-title-block">
                        <h2>Notifications</h2>
                        <p>Updates related to your services, SOWs, events, and platform activity</p>
                    </div>
                    <Link to="/teacher/notification-settings" className="gl-np-settings-btn">
                        <img src="/images/teacher/super-user-dashboard/settings.svg" alt="" /> Settings
                    </Link>
                </div>

                <div className="gl-np-feed-stack">

                    <div className="gl-np-card gl-np-border-blue">
                        <div className="gl-np-card-main-content">
                            <div className="gl-np-meta-row">
                                <h3 className="gl-np-alert-title">New SOW Request</h3>
                                <span className="gl-np-badge-pill-new">New</span>
                            </div>
                            <p className="gl-np-alert-desc">Springfield District requested a new SOW for Emma Wilson.
                            </p>
                            <div className="gl-np-action-footer">
                                <button type="button" className="gl-np-action-trigger-btn">
                                    View SOW <img src="/images/teacher/super-user-dashboard/event-right-icon.svg" alt="" />
                                </button>
                                <span className="gl-np-time-elapsed">1 min. ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="gl-np-card gl-np-border-blue">
                        <div className="gl-np-card-main-content">
                            <div className="gl-np-meta-row">
                                <h3 className="gl-np-alert-title">SOW Submitted</h3>
                            </div>
                            <p className="gl-np-alert-desc">Emma Wilson submitted an SOW for Riverside Unified.</p>
                            <div className="gl-np-action-footer">
                                <button type="button" className="gl-np-action-trigger-btn">
                                    Review <img src="/images/teacher/super-user-dashboard/event-right-icon.svg" alt="" />
                                </button>
                                <span className="gl-np-time-elapsed">10 min. ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="gl-np-card gl-np-alert-danger-box">
                        <div className="gl-np-card-main-content">
                            <div className="gl-np-meta-row">
                                <h3 className="gl-np-alert-title">User Inactivity Alert</h3>
                            </div>
                            <p className="gl-np-alert-desc">Connor Murphy has been inactive for 12 days</p>
                            <div className="gl-np-action-footer">
                                <button type="button" className="gl-np-action-trigger-btn">
                                    View SOW <img src="/images/teacher/super-user-dashboard/event-right-icon.svg" alt="" />
                                </button>
                                <span className="gl-np-time-elapsed">33 min. ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="gl-np-card gl-np-card-muted-flat">
                        <div className="gl-np-card-main-content">
                            <div className="gl-np-meta-row">
                                <h3 className="gl-np-alert-title">New User Rating</h3>
                            </div>
                            <p className="gl-np-alert-desc">Emma Wilson received a 4.8 rating from a User.</p>
                            <div className="gl-np-action-footer">
                                <button type="button" className="gl-np-action-trigger-btn-disabled" disabled>
                                    View Feedback
                                </button>
                                <span className="gl-np-time-elapsed">Yesterday</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Notification