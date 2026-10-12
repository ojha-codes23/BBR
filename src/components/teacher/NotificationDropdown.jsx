import React from 'react'
import { Link } from 'react-router-dom'

const NotificationDropdown = ({show}) => {
  return (
    <div className={`gl-notification-dropdown ${show ? "gl-nt-show" : ""}`} id="glNotificationDropdown">
            <div className="gl-nt-header">
              <h3>Notifications</h3>
            </div>

            <div className="gl-nt-list-body">
              {/* <!-- Item 1: Unread State --> */}
              <div className="gl-nt-item gl-nt-unread">
                <div className="gl-nt-row-top">
                  <div className="gl-nt-title-group">
                    <span className="gl-nt-dot"></span>
                    <h4 className="gl-nt-title">New SOW Request</h4>
                  </div>
                  <span className="gl-nt-time">Just Now</span>
                </div>
                <p className="gl-nt-desc">Springfield District requested a new SOW for Emma Wilson.</p>
              </div>

              {/* <!-- Item 2: Unread State --> */}
              <div className="gl-nt-item gl-nt-unread">
                <div className="gl-nt-row-top">
                  <div className="gl-nt-title-group">
                    <span className="gl-nt-dot"></span>
                    <h4 className="gl-nt-title">SOW Submitted</h4>
                  </div>
                  <span className="gl-nt-time">9 days ago</span>
                </div>
                <p className="gl-nt-desc">Emma Wilson submitted an SOW for Riverside Unified.</p>
              </div>

              {/* <!-- Item 3: Unread State --> */}
              <div className="gl-nt-item gl-nt-unread">
                <div className="gl-nt-row-top">
                  <div className="gl-nt-title-group">
                    <span className="gl-nt-dot"></span>
                    <h4 className="gl-nt-title">User Inactivity Alert</h4>
                  </div>
                  <span className="gl-nt-time">9 days ago</span>
                </div>
                <p className="gl-nt-desc">Connor Murphy has been inactive for 12 days</p>
              </div>

              {/* <!-- Item 4: Read/Muted Card State --> */}
              <div className="gl-nt-item gl-nt-read-card">
                <div className="gl-nt-row-top">
                  <div className="gl-nt-title-group">
                    <h4 className="gl-nt-title">New User Rating</h4>
                  </div>
                  <span className="gl-nt-time">9 days ago</span>
                </div>
                <p className="gl-nt-desc">Emma Wilson received a 4.8 rating from a User.</p>
              </div>
            </div>

            <div className="gl-nt-footer">
              <Link to="/teacher/notification" className="gl-nt-view-all-link">View All <img
                src="/images/teacher/super-user-dashboard/su-right-icon.svg" alt="" /></Link>
            </div>
          </div>
  )
}

export default NotificationDropdown