import React from 'react'
import NotificationQuietHourModal from '../../components/teacher/NotificationQuietHourModal'

const NotificationSettings = () => {
    return (<>
        <main className="gl-content-body">
            <div className="gl-sett-wrapper">

                <div className="gl-st-top-header-panel">
                    <div className="gl-st-left-navigation-meta">
                        <a href="notification.html" className="gl-st-back-arrow-trigger" aria-label="Go Back">
                            <img src="/images/teacher/super-user-dashboard/left-icon-btn.svg" alt="" />
                        </a>
                        <div className="gl-st-heading-text-box">
                            <h2>Notifications Settings</h2>
                            <p>Manage your notification preferences</p>
                        </div>
                    </div>
                    <button type="button" className="gl-st-action-save-btn">
                        <img src="/images/teacher/super-user-dashboard/save-settings.svg" alt="" /> Save Settings
                    </button>
                </div>

                <div className="gl-st-card-block-item">
                    <div className="gl-st-flex-switch-row">
                        <div className="gl-st-info-text-side">
                            <h3 className="gl-st-switch-title">Email Notifications</h3>
                            <p className="gl-st-switch-subtitle">Receive updates via email</p>
                        </div>
                        <label className="gl-st-custom-toggle-switch">
                            <input type="checkbox" checked />
                            <span className="gl-st-toggle-slider-track"></span>
                        </label>
                    </div>
                </div>

                <div className="gl-st-card-block-item">
                    <div className="gl-st-flex-switch-row">
                        <div className="gl-st-info-text-side">
                            <h3 className="gl-st-switch-title">In-App Notifications</h3>
                            <p className="gl-st-switch-subtitle">Show notifications within the app</p>
                        </div>
                        <label className="gl-st-custom-toggle-switch">
                            <input type="checkbox" checked />
                            <span className="gl-st-toggle-slider-track"></span>
                        </label>
                    </div>
                </div>

                <div className="gl-st-card-block-item">
                    <div className="gl-st-flex-switch-row">
                        <div className="gl-st-info-text-side">
                            <h3 className="gl-st-switch-title">Quiet Hours</h3>
                            <p className="gl-st-switch-subtitle">Set days & hours when you don't want to receive
                                notifications</p>
                        </div>
                        <button type="button" className="gl-st-inline-action-hours-btn" data-bs-toggle="modal"
                            data-bs-target="#quietHoursModal">
                            <img src="/images/teacher/super-user-dashboard/wht-popup-clock-icon.svg" alt="" /> Set Hours
                        </button>
                    </div>
                </div>

                <h3 className="gl-st-section-divider-label">Notification Types</h3>

                <div className="gl-st-nested-settings-card-group">

                    <div className="gl-st-inner-switch-row">
                        <div className="gl-st-info-text-side">
                            <h4 className="gl-st-switch-title">SOW Approvals</h4>
                            <p className="gl-st-switch-subtitle">When a new SOW requires your approval</p>
                        </div>
                        <label className="gl-st-custom-toggle-switch">
                            <input type="checkbox" checked />
                            <span className="gl-st-toggle-slider-track"></span>
                        </label>
                    </div>

                    <div className="gl-st-inner-switch-row">
                        <div className="gl-st-info-text-side">
                            <h4 className="gl-st-switch-title">User Inactivity</h4>
                            <p className="gl-st-switch-subtitle">When a User has been inactive for extended periods</p>
                        </div>
                        <label className="gl-st-custom-toggle-switch">
                            <input type="checkbox" />
                            <span className="gl-st-toggle-slider-track"></span>
                        </label>
                    </div>

                    <div className="gl-st-inner-switch-row">
                        <div className="gl-st-info-text-side">
                            <h4 className="gl-st-switch-title">Overdue Items</h4>
                            <p className="gl-st-switch-subtitle">When requests or follow-ups are overdue</p>
                        </div>
                        <label className="gl-st-custom-toggle-switch">
                            <input type="checkbox" />
                            <span className="gl-st-toggle-slider-track"></span>
                        </label>
                    </div>

                    <div className="gl-st-inner-switch-row">
                        <div className="gl-st-info-text-side">
                            <h4 className="gl-st-switch-title">Upcoming Events</h4>
                            <p className="gl-st-switch-subtitle">Reminders for scheduled events and meetings</p>
                        </div>
                        <label className="gl-st-custom-toggle-switch">
                            <input type="checkbox" checked />
                            <span className="gl-st-toggle-slider-track"></span>
                        </label>
                    </div>

                </div>

            </div>
        </main>

        <NotificationQuietHourModal />
    </>
    )
}

export default NotificationSettings