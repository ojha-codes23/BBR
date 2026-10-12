import React, {useState} from 'react'

const EventSessions = () => {
    const [activeTab, setActiveTab] = useState("events");
    
    return (
        <main>
            <div className="dashboard-container">

                {/* <!-- Page Top Header --> */}
                <header className="page-header">
                    <div className="page-title">
                        <h1>Events & Sessions</h1>
                        <p>Create and manage workshops, panels, and group activities</p>
                    </div>
                    {/* <!-- Connected Schedule Session Button Trigger to Modal --> */}
                    <button className="btn-schedule-session" data-bs-toggle="modal"
                        data-bs-target="#scheduleSessionModal">
                        <i className="bi bi-calendar-plus"></i> Schedule Session
                    </button>
                </header>

                {/* <!-- Navigation Tabs and Filters Dropdowns --> */}
                <div className="controls-row">
                    <div className="custom-tabs">
                        <a href="events-sessions.html">Events</a>
                        <a href="events-&-sessions-ses.html" className="active">Sessions</a>
                    </div>

                    <div className="filters-group">
                        <div className="dropdown">
                            <a href="#" className="filter-select" data-bs-toggle="dropdown"
                                aria-expanded="false">District (All)</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">District North</a></li>
                                <li><a className="dropdown-item" href="#">District South</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="filter-select" data-bs-toggle="dropdown"
                                aria-expanded="false">Organization
                                (All)</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Org A</a></li>
                                <li><a className="dropdown-item" href="#">Org B</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="filter-select" data-bs-toggle="dropdown" aria-expanded="false">All
                                Users</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Active Users</a></li>
                                <li><a className="dropdown-item" href="#">Instructors Only</a></li>
                            </ul>
                        </div>
                        <button className="btn-calendar-view" title="Calendar View">
                            <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                        </button>
                    </div>
                </div>

                {/* <!-- Sessions Stack --> */}
                <div className="sessions-stack">

                    {/* <!-- Row 1: Upcoming Card --> */}
                    <div className="session-card">
                        <div className="session-icon-box">
                            <i className="bi bi-file-text"></i>
                        </div>
                        <div className="session-content-wrapper">
                            <div className="session-card-header">
                                <h2 className="session-title">Technical Problem Solving</h2>
                                <span className="status-badge upcoming">Upcoming</span>
                            </div>
                            <p className="session-desc">Technical guidance for cybersecurity project</p>

                            <div className="session-meta-grid">
                                <div><span className="meta-label">User:</span> <span className="meta-value">David Lee</span>
                                </div>
                                <div><span className="meta-label">Date:</span> <span className="meta-value">Nov 25,
                                    2025</span></div>
                                <div><span className="meta-label">Time:</span> <span className="meta-value">10:00 AM</span>
                                </div>
                                <div><span className="meta-label">Duration:</span> <span className="meta-value">60
                                    Min</span></div>
                            </div>

                            <div className="session-card-actions">
                                <div className="right-buttons-group">
                                    <a href="events-&-sessions-ses-detail.html" className="btn-outline-details">
                                        View Details <i className="bi bi-arrow-right"></i></a>
                                    <button className="btn-start-session">Start Session <i
                                        className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Row 2: In Progress Card --> */}
                    <div className="session-card">
                        <div className="session-icon-box">
                            <i className="bi bi-file-text"></i>
                        </div>
                        <div className="session-content-wrapper">
                            <div className="session-card-header">
                                <h2 className="session-title">Technical Problem Solving</h2>
                                <span className="status-badge upcoming">In Progress</span>
                            </div>
                            <p className="session-desc">Technical guidance for cybersecurity project</p>

                            <div className="session-meta-grid">
                                <div><span className="meta-label">User:</span> <span className="meta-value">David Lee</span>
                                </div>
                                <div><span className="meta-label">Date:</span> <span className="meta-value">Nov 25,
                                    2025</span></div>
                                <div><span className="meta-label">Time:</span> <span className="meta-value">10:00 AM</span>
                                </div>
                                <div><span className="meta-label">Duration:</span> <span className="meta-value">60
                                    Min</span></div>
                            </div>

                            <div className="session-card-actions">
                                <div className="right-buttons-group">
                                    <a href="events-&-sessions-ses-detail.html" className="btn-outline-details">
                                        View Details <i className="bi bi-arrow-right"></i></a>
                                    <button className="btn-done-session"><i className="bi bi-check2-all"></i> Mark as
                                        done</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Row 3: Complete Card --> */}
                    <div className="session-card">
                        <div className="session-icon-box">
                            <i className="bi bi-file-text"></i>
                        </div>
                        <div className="session-content-wrapper">
                            <div className="session-card-header">
                                <h2 className="session-title">Technical Problem Solving</h2>
                                <span className="status-badge complete">Complete</span>
                            </div>
                            <p className="session-desc">Technical guidance for cybersecurity project</p>

                            <div className="session-meta-grid">
                                <div><span className="meta-label">User:</span> <span className="meta-value">David Lee</span>
                                </div>
                                <div><span className="meta-label">Date:</span> <span className="meta-value">Nov 25,
                                    2025</span></div>
                                <div><span className="meta-label">Time:</span> <span className="meta-value">10:00 AM</span>
                                </div>
                                <div><span className="meta-label">Duration:</span> <span className="meta-value">60
                                    Min</span></div>
                            </div>

                            <div className="session-card-actions">
                                <div className="right-buttons-group">
                                    <a href="events-&-sessions-ses-detail.html" className="btn-outline-details">
                                        View Details <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default EventSessions