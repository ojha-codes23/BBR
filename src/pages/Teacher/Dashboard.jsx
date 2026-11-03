import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
            <>
             {/* <div className="gl-dashboard-layout" id="dashboardLayout"> */}
              {/* <main className="gl-content-body"> */}
                <div className="usr-dash-wrapper">

                    
                            <div className="gl-welcome-banner">

                                <div className="gl-welcome-message-block">

                                    <h2 className="gl-welcome-user-heading">

                                        Welcome back, Sarah! 👋

                                    </h2>

                                    <p className="gl-welcome-subtext">You have 2 new requests waiting for your review for today.</p>

                                </div>

                                <div className="gl-welcome-filter-group">

                                    <button className="custom-action-btn btn-view-requests" type="button">

                                        <span>View My Requests</span>

                                        {/* <!-- Precision Custom Thin Line Arrow mimicking image_86317f.png --> */}

                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                        </svg>

                                    </button>

                                    <Link to="/student/new-requested-service" className="custom-action-btn btn-view-schedule"><img
                                            src="/images/super-user-dashboard/si_add-duotone.svg" alt="" /> Submit a Service
                                    Request</Link>

                                </div>

                            </div>

                            <div className="u-prof-ban-card">
                            
                                <div className="u-prof-ban-top">
                                    <div className="u-prof-ban-info-group">
                                        <div className="u-prof-ban-icon-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div className="u-prof-ban-text">
                                            <h3 className="u-prof-ban-title">Complete Your Profile123</h3>
                                            <p className="u-prof-ban-subtitle">A complete profile helps us recommend better courses
                                                & mentors</p>
                                        </div>
                                    </div>

                                    <button className="u-prof-ban-btn">
                                        Complete Profile
                                        <svg className="u-prof-ban-arrow" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>

                            
                                <div className="u-prof-ban-bottom">
                                    <div className="u-prof-ban-progress-bg">
                                        <div className="u-prof-ban-progress-fill" style={{width: "75%"}}></div>
                                    </div>
                                    <span className="u-prof-ban-percentage">75% Complete</span>
                                </div>
                            </div>

                            <div className="usr-dash-quick-grid">
                                <div className="usr-dash-quick-card">
                                    <div className="usr-dash-quick-icon-box blue-bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="usr-dash-quick-title">Next Session Today</h4>
                                    <p className="usr-dash-quick-desc">Career Planning Workshop at 2:00 PM</p>
                                    <button className="usr-dash-quick-btn">Join Now &rarr;</button>
                                </div>
                                <div className="usr-dash-quick-card">
                                    <div className="usr-dash-quick-icon-box blue-bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="usr-dash-quick-title">48 Hours Remaining</h4>
                                    <p className="usr-dash-quick-desc">View your coaching hours balance</p>
                                    <button className="usr-dash-quick-btn">View Details &rarr;</button>
                                </div>
                                <div className="usr-dash-quick-card">
                                    <div className="usr-dash-quick-icon-box blue-bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h4 className="usr-dash-quick-title">New Course Recommended</h4>
                                    <p className="usr-dash-quick-desc">Introduction to Cybersecurity</p>
                                    <button className="usr-dash-quick-btn">View Course &rarr;</button>
                                </div>
                            </div>

                            <div className="usr-dash-split-row">
                                <div className="usr-dash-split-col">
                                    <div className="usr-dash-col-header">
                                        <h2 className="usr-dash-section-title">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            Requests Summary
                                        </h2>
                                    </div>
                                    <div className="usr-dash-col-body">
                                        <div className="usr-dash-list-row">
                                            <div className="usr-dash-list-meta">
                                                <div className="resume-review">
                                                    <span className="usr-dash-row-name">Resume Review</span>
                                                    {/* <!-- <span className="usr-dash-status-badge info">In Progress</span> --> */}
                                                </div>
                                                <p className="usr-dash-text-muted">Provider: Dr. Sarah Johnson <br/> Submitted: Nov
                                                    20, 2025</p>
                                            </div>
                                            <div className="view-det-pending">
                                                <span className="usr-dash-status-badge info">In Progress</span>
                                                <a href="#" className="usr-dash-link-text">View Details &nearr;</a>
                                            </div>
                                        </div>
                                        <div className="usr-dash-list-row">
                                            <div className="usr-dash-list-meta">
                                                <div className="resume-review">
                                                    <span className="usr-dash-row-name">Mock Interview</span>

                                                </div>
                                                <p className="usr-dash-text-muted">Provider: Not Assigned <br/> Submitted: Nov 18,
                                                    2025</p>
                                            </div>
                                            <div className="view-det-pending">
                                                <span className="usr-dash-status-badge warning">Pending</span>
                                                <button className="usr-dash-btn-action-sm">View Details &rarr;</button>
                                            </div>
                                        </div>
                                        <div className="usr-dash-list-row">
                                            <div className="usr-dash-list-meta">
                                                <div className="resume-review">
                                                    <span className="usr-dash-row-name">Career Guidance</span>

                                                </div>
                                                <p className="usr-dash-text-muted">Provider: Prof. Mike Chen <br/> Submitted: Nov 15,
                                                    2025</p>
                                            </div>
                                            <div className="view-det-pending">
                                                <span className="usr-dash-status-badge success">Completed</span>
                                                <a href="#" className="usr-dash-link-text">View Details &nearr;</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="usr-dash-split-col">
                                    <div className="usr-dash-col-header">
                                        <h2 className="usr-dash-section-title">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Upcoming Events
                                        </h2>
                                        <select className="usr-dash-dropdown">
                                            <option>Events</option>
                                        </select>
                                    </div>
                                    <div className="usr-dash-col-body">
                                        <div className="usr-dash-event-card">
                                            <div className="usr-dash-date-box">
                                                <span className="usr-dash-month">Dec</span>
                                                <span className="usr-dash-day">10</span>
                                            </div>
                                            <div className="usr-dash-event-info">
                                                <h4 className="usr-dash-event-title">Introduction to ML</h4>
                                                <p className="usr-dash-text-muted"><img
                                                        src="/images/super-user-dashboard/su-clock-icon.svg" className="mb-2" alt="" />
                                                    10:00 AM &nbsp;&nbsp; <br/> <img
                                                        src="/images/super-user-dashboard/su-user-icon-dash.svg" alt="" /> Prof.
                                                    Mike Chen</p>
                                            </div>
                                            <button className="usr-dash-btn-event"><svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg> Join Event</button>
                                        </div>
                                        <div className="usr-dash-event-card">
                                            <div className="usr-dash-date-box">
                                                <span className="usr-dash-month">Dec</span>
                                                <span className="usr-dash-day">12</span>
                                            </div>
                                            <div className="usr-dash-event-info">
                                                <h4 className="usr-dash-event-title">Career Guidance</h4>
                                                <p className="usr-dash-text-muted"><img
                                                        src="/images/super-user-dashboard/su-clock-icon.svg" className="mb-2" alt="" />
                                                    01:00 PM &nbsp;&nbsp; <br/> <img
                                                        src="/images/super-user-dashboard/su-user-icon-dash.svg" alt="" /> Dr.
                                                    Emily Brown</p>
                                            </div>
                                            <button className="usr-dash-btn-event"><svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg> Join Event</button>
                                        </div>
                                        <div className="usr-dash-event-card">
                                            <div className="usr-dash-date-box">
                                                <span className="usr-dash-month">Dec</span>
                                                <span className="usr-dash-day">15</span>
                                            </div>
                                            <div className="usr-dash-event-info">
                                                <h4 className="usr-dash-event-title">Resume Workshop</h4>
                                                <p className="usr-dash-text-muted"><img
                                                        src="/images/super-user-dashboard/su-clock-icon.svg" className="mb-2" alt="" />
                                                    04:00 PM &nbsp;&nbsp; <br/> <img
                                                        src="/images/super-user-dashboard/su-user-icon-dash.svg" alt="" /> Dr.
                                                    Emily Brown</p>
                                            </div>
                                            <button className="usr-dash-btn-event"><svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg> Join Event</button>
                                        </div>
                                    </div>
                                        </div>
                            </div>

                            <div className="usr-dash-courses-section">
                                <div className="usr-dash-col-header">
                                    <h2 className="usr-dash-section-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                        My Courses
                                    </h2>
                                    <a href="#" className="usr-dash-view-all">View All &rarr;</a>
                                </div>

                                <div className="usr-dash-courses-grid">
                                    <div className="usr-dash-course-card">
                                        <div className="usr-dash-course-img"
                                            style={{backgroundImage:"url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60')"}}>
                                            <span className="usr-dash-img-badge left-badge">⏳ Free Trial: 18h remaining</span>
                                            <span className="usr-dash-img-badge right-badge beginner">Beginner</span>
                                        </div>
                                        <div className="usr-dash-course-body">
                                            <h4 className="usr-dash-course-name">Course: 1</h4>
                                            <p className="usr-dash-course-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="usr-dash-tag-row">
                                                <span className="usr-dash-mini-tag">Lorem ipsum</span><span
                                                    className="usr-dash-mini-tag">Lorem ipsum</span><span
                                                    className="usr-dash-mini-tag">Lorem ipsum</span>
                                            </div>
                                            <div className="usr-dash-card-progress-row">
                                                <span>Progress</span><strong>0%</strong>
                                            </div>
                                            <div className="usr-dash-card-progress-bar-bg">
                                                <div className="usr-dash-card-progress-bar-fill" style={{width: "0%"}}></div>
                                            </div>
                                            <p className="usr-dash-module-info">✅ Current Module: <span className="highlight">CSS
                                                    Fundamentals</span></p>
                                            <button className="usr-dash-quick-btn">Start Learning &rarr;</button>
                                        </div>
                                    </div>

                                    <div className="usr-dash-course-card">
                                        <div className="usr-dash-course-img"
                                            style={{
                                                backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60')"
                                            }}>
                                            <span className="usr-dash-img-badge right-badge advanced">Advanced</span>
                                        </div>
                                        <div className="usr-dash-course-body">
                                            <h4 className="usr-dash-course-name">Course: 2</h4>
                                            <p className="usr-dash-course-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="usr-dash-tag-row">
                                                <span className="usr-dash-mini-tag">Lorem ipsum</span><span
                                                    className="usr-dash-mini-tag">Lorem ipsum</span><span
                                                    className="usr-dash-mini-tag">Lorem ipsum</span>
                                            </div>
                                            <div className="usr-dash-card-progress-row">
                                                <span>Progress</span><strong>75%</strong>
                                            </div>
                                            <div className="usr-dash-card-progress-bar-bg">
                                                <div className="usr-dash-card-progress-bar-fill success" style={{ width: "75%" }}></div>
                                            </div>
                                            <p className="usr-dash-module-info">✅ Current Module: <span className="highlight">CSS
                                                    Fundamentals</span></p>
                                            <button className="usr-dash-quick-btn">Resume &rarr;</button>
                                        </div>
                                    </div>

                                    <div className="usr-dash-course-card">
                                        <div className="usr-dash-course-img"
                                            style={{backgroundImage: "url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60')"}}>
                                            <span className="usr-dash-img-badge right-badge intermediate">Intermediate</span>
                                        </div>
                                        <div className="usr-dash-course-body">
                                            <h4 className="usr-dash-course-name">Course: 3</h4>
                                            <p className="usr-dash-course-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="usr-dash-tag-row">
                                                <span className="usr-dash-mini-tag">Lorem ipsum</span><span
                                                    className="usr-dash-mini-tag">Lorem ipsum</span><span
                                                    className="usr-dash-mini-tag">Lorem ipsum</span>
                                            </div>
                                            <div className="usr-dash-card-progress-row">
                                                <span>Progress</span><strong>100%</strong>
                                            </div>
                                            <div className="usr-dash-card-progress-bar-bg">
                                                <div className="usr-dash-card-progress-bar-fill success" style={{width: "100%"}}></div>
                                            </div>
                                            <p className="usr-dash-module-info">✅ Current Module: <span className="highlight">CSS
                                                    Fundamentals</span></p>
                                            <button className="usr-dash-course-completed-btn">✓ Completed</button>
                                        </div>
                                    </div>
                                    </div>


                            </div>

                </div>
             {/* </main> */}
             {/* </div> */}

    </>
  )
}

export default Dashboard