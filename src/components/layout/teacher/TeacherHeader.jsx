import React, { useState } from 'react';
import NotificationDropdown from '../../teacher/NotificationDropdown';
import LogoutModal from '../../teacher/LogoutModal';
import { Link } from 'react-router-dom';

const TeacherHeader = ({ onSidebarToggle }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
    <header className="gl-header">
      <div className="gl-header-left">
        {/* <!-- Smooth Modern Toggle Trigger Button --> */}
        <button type="button" className="gl-sidebar-toggle" id="sidebarToggleBtn" onClick={onSidebarToggle}>
          <img src="/images/teacher/layout/super-user/header-toggle.svg" alt="Toggle" />
        </button>
        <h1 className="gl-header-panel-title">Teacher Dashboard</h1>
      </div>

      {/* <!-- Header Right Actions (Search, Notification, Profile) --> */}
      <div className="gl-header-right">
        {/* <!-- Search Box --> */}
        <div className="gl-header-search-box">
          <img src="/images/teacher/layout/super-user/search-icon.svg" className="search-icon" alt="Toggle" />
          <input type="text" placeholder="Search..." />
        </div>

        {/* <!-- Flag Selector --> */}
        <button type="button" className="gl-action-item">
          <img src="/images/teacher/layout/super-user/header-flag-icon.svg" alt="Language" className="gl-flag-icon" />
        </button>

        {/* <!-- Notifications --> */}
        {/* <!-- Enhanced Notification Trigger with Dropdown Pop-up Container --> */}
        <button type="button" className="gl-action-item gl-notification-trigger" style={{ position: "relative" }}
          onClick={() => {
            setShowNotifications((previous) => !previous);
            setShowProfile(false);
            // console.log("noti dropdown open.")
          }}
        >
          <img src="/images/teacher/layout/super-user/notification-icon.svg" alt="Notifications"
            className="gl-header-icon" />


              <NotificationDropdown show={showNotifications} />
            

          {/* <div className="gl-notification-dropdown" id="glNotificationDropdown">
            <div className="gl-nt-header">
              <h3>Notifications</h3>
            </div>

            <div className="gl-nt-list-body">
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
              <a href="notification.html" className="gl-nt-view-all-link">View All <img
                src="/images/teacher/super-user-dashboard/su-right-icon.svg" alt="" /></a>
            </div>
          </div> */}

        </button>

        {/* <!-- User Profile Avatar Block --> */}


        <div className={`profile-container ${showProfile ? "active" : ""}`} id="profileContainer">
          {/* <!-- Avatar Trigger Button --> */}
          <button className="profile-trigger" id="profileTrigger" onClick={
            () => {
              setShowProfile((previous) => !previous);
              setShowNotifications(false);
            }
          }>
            {/* <!-- Aap apni image ka URL yahan 'src' me daal sakte hain --> */}
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
              alt="User Avatar" className="avatar" />
            <i className="fa-solid fa-caret-down arrow-icon"></i>
          </button>

          {/* <!-- Dropdown Menu --> */}
          <div className="profile-dropdown">
            <Link to="/teacher/my-profile" className="dropdown-item item-profile" onClick={() => setShowProfile(false)}>
              <i className="fa-regular fa-eye"></i>
              <span>User Profile</span>
            </Link>

            <div className="divider"></div>

            <button className="dropdown-item item-logout" onClick={() => {
               
                console.log("logout clicking");
                setShowProfile(false);
                setShowLogoutModal(true);
              }}>
              <i className="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"></i>
              <span>Logout</span>
            </button>
          </div>

        </div>
      </div>

      <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)}/>
    </header>


    </>
  )
}

export default TeacherHeader