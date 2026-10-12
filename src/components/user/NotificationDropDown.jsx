import React from 'react'
import { Link } from 'react-router-dom'

const NotificationDropDown = () => {
    return (
        <>

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
                    <a href="#" className="gl-nt-view-all-link">View All <i className="fas fa-arrow-right"></i></a>
                </div>
            </div> */}


              <div className="gl-notification-dropdown" id="glNotificationDropdown">
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
                                    <a href="#" className="gl-np-action-trigger-btn notifi" style={{width:"fitContent"}}>
                        Fill SOW Now<img src="images/super-user-dashboard/event-right-icon.svg" alt=""/>
                    </a>
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
                                <Link to="/student/notification" className="gl-nt-view-all-link">View All <img
                                        src="images/super-user-dashboard/su-right-icon.svg" alt=""/></Link>
                            </div>
                        </div>
        </>
    )
}

export default NotificationDropDown
