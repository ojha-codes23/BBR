import React from 'react'
import EventSessionTabs from './EventSessionTabs'
import EditEvent from '../../../components/teacher/EditEvent'
import CreateEvent from '../../../components/teacher/CreateEvent'
import UploadMaterials from '../../../components/teacher/UploadMaterials'
import RegisteredAttendes from '../../../components/teacher/RegisteredAttendes'
import { Link } from 'react-router-dom'

const Events = () => {
    return (
        <>

            <main className="gl-content-body">
                {/* <!-- PRIMARY HEADER --> */}
                {/* <header className="glnc-header-row">
                <div>
                    <h1 className="glnc-page-title">Events & Sessions</h1>
                    <p className="glnc-page-subtitle">Create and manage workshops, panels, and group activities</p>
                </div>
                <button className="glnc-btn-create" data-bs-toggle="modal" data-bs-target="#previewCreatedEventModal"><i
                    className="bi bi-plus-lg"></i> Create Event</button>
            </header> */}

                {/* <!-- Page Top Header --> */}
                <header className="page-header">
                    <div className="page-title">
                        <h1>Events & Sessions</h1>
                        <p>Create and manage workshops, panels, and group activities</p>
                    </div>
                    {/* <!-- Connected Schedule Session Button Trigger to Modal --> */}
                    <button className="glnc-btn-create" data-bs-toggle="modal" data-bs-target="#previewCreatedEventModal"><i
                        className="bi bi-plus-lg"></i> Create Event</button>
                </header>

                {/* <!-- CONTROL SCENARIO ROW --> */}
                <div className="glnc-controls-row">
                    {/* <div className="glnc-tab-pill-box">
            <a className="glnc-tab-pill active" href="events-sessions.html">Events</a>
            <a className="glnc-tab-pill" href="events-&-sessions-ses.html">Sessions</a>
        </div> */}
                    <EventSessionTabs />

                    <div className="glnc-filter-group">

                        <a className="glnc-filter-dropdown" href="#">All Users
                            <i className="bi bi-chevron-down ms-1"></i>
                        </a>
                        <button className="glnc-btn-cal-icon">
                            <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                        </button>
                    </div>
                </div>
                {/* <!-- CARD 1: COLLEGE APPLICATION WORKSHOP --> */}
                <article className="glnc-horizontal-card">
                    <div className="glnc-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600"
                            alt="College Application Workshop Thumbnail" className="glnc-card-img" />
                    </div>
                    <div className="glnc-card-content-block">
                        <div className="glnc-card-top-header">
                            <h3 className="glnc-card-main-title">College Application Workshop</h3>
                            <div className="glnc-card-action-utilities">
                                <span className="glnc-session-type-badge me-2">Group Session</span>

                                <div className="glnc-tooltip-container">
                                    <button className="glnc-util-circle-btn"><i className="bi bi-reply-fill"
                                        style={{ transform: "scaleX(-1)", display: "inline-block" }}></i></button>
                                    <span className="glnc-custom-tooltip">Share Event</span>
                                </div>

                                <div className="dropdown">
                                    <button className="glnc-util-circle-btn" data-bs-toggle="dropdown"
                                        aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end glnc-custom-dropdown-menu" style={{zIndex: "9"}}>
                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#viewAttendeesModal"><i className="bi bi-eye"></i> View
                                            Attendees</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-bell"></i> Notify
                                            Attendees</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#uploadMaterialsModal"><i className="bi bi-upload"></i>
                                            Upload
                                            Materials</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item glnc-delete-action" href="#"><i
                                            className="bi bi-trash"></i>
                                            Delete Event</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="glnc-card-description">Learn the essentials of crafting a winning college application.
                        </p>

                        <div className="glnc-card-meta-line">
                            <div className="glnc-meta-item"><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>Friday, 12-5-2025</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-clock"></i> <span>2:00 PM EST (2 hours)</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-geo-alt"></i> <span>Virtual - Zoom</span></div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-people"></i> <span>30/50 Members</span></div>
                        </div>

                        <div className="glnc-card-tag-pool">
                            <span className="glnc-category-tag">Workshop</span>
                            <span className="glnc-category-tag">College Prep</span>
                        </div>

                        <div className="glnc-card-footer-actions">
                            <button className="glnc-btn-outline-edit" data-bs-toggle="modal"
                                data-bs-target="#editCreatedEventModal"><i className="bi bi-pencil-square"></i>
                                Edit</button>
                            <div className="glnc-action-right-group">
                                <Link to="/teacher/event-detail" className="glnc-btn-info-spec"><i
                                    className="bi bi-info-circle"></i> More Info</Link>
                                <button className="glnc-btn-start-event">Start Event <i
                                    className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* <!-- CARD 2: CAREER EXPLORATION PANEL --> */}
                <article className="glnc-horizontal-card">
                    <div className="glnc-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600"
                            alt="Career Exploration Panel Thumbnail" className="glnc-card-img" />
                    </div>
                    <div className="glnc-card-content-block">
                        <div className="glnc-card-top-header">
                            <h3 className="glnc-card-main-title">Career Exploration Panel</h3>
                            <div className="glnc-card-action-utilities">
                                <span className="glnc-session-type-badge me-2">Panel Session</span>

                                <div className="glnc-tooltip-container">
                                    <button className="glnc-util-circle-btn"><i className="bi bi-reply-fill"
                                        style={{ transform: "scaleX(-1)", display: "inline-block" }}></i></button>
                                    <span className="glnc-custom-tooltip">Share Event</span>
                                </div>

                                <div className="dropdown">
                                    <button className="glnc-util-circle-btn" data-bs-toggle="dropdown"
                                        aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end glnc-custom-dropdown-menu">
                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#viewAttendeesModal"><i className="bi bi-eye"></i> View
                                            Attendees</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-bell"></i> Notify
                                            Attendees</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#uploadMaterialsModal"><i className="bi bi-upload"></i>
                                            Upload
                                            Materials</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item glnc-delete-action" href="#"><i
                                            className="bi bi-trash"></i>
                                            Delete Event</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="glnc-card-description">Hear from professionals across different industries about their
                            journey.</p>

                        <div className="glnc-card-meta-line">
                            <div className="glnc-meta-item"><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>Monday, 12-8-2025</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-clock"></i> <span>4:00 PM EST (1.5 hours)</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-geo-alt"></i> <span>In-Person - Hall A</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-people"></i> <span>45/60 Members</span></div>
                        </div>

                        <div className="glnc-card-tag-pool">
                            <span className="glnc-category-tag">Career</span>
                            <span className="glnc-category-tag">Networking</span>
                        </div>

                        <div className="glnc-card-footer-actions">
                            <button className="glnc-btn-outline-edit" data-bs-toggle="modal"
                                data-bs-target="#editCreatedEventModal"><i className="bi bi-pencil-square"></i>
                                Edit</button>
                            <div className="glnc-action-right-group">
                                <Link href="event-detail" className="glnc-btn-info-spec"><i
                                    className="bi bi-info-circle"></i> More Info</Link>
                                <button className="glnc-btn-end-event">End Event <i className="bi bi-x-circle"></i></button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* <!-- CARD 3 --> */}
                <article className="glnc-horizontal-card">
                    <div className="glnc-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600"
                            alt="Career Exploration Panel Thumbnail" className="glnc-card-img" />
                    </div>
                    <div className="glnc-card-content-block">
                        <div className="glnc-card-top-header">
                            <h3 className="glnc-card-main-title">College Application Workshop</h3>
                            <div className="glnc-card-action-utilities">
                                <span className="glnc-session-type-badge me-2">Group Session</span>

                                <div className="glnc-tooltip-container">
                                    <button className="glnc-util-circle-btn"><i className="bi bi-reply-fill"
                                        style={{ transform: "scaleX(-1)", display: "inline-block" }}></i></button>
                                    <span className="glnc-custom-tooltip">Share Event</span>
                                </div>

                                <div className="dropdown">
                                    <button className="glnc-util-circle-btn" data-bs-toggle="dropdown"
                                        aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end glnc-custom-dropdown-menu" style={{zIndex: "9"}}>
                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#viewAttendeesModal"><i className="bi bi-eye"></i> View
                                            Attendees</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-bell"></i> Notify
                                            Attendees</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#uploadMaterialsModal"><i className="bi bi-upload"></i>
                                            Upload
                                            Materials</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item glnc-delete-action" href="#"><i
                                            className="bi bi-trash"></i>
                                            Delete Event</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="glnc-card-description">Learn the essentials of crafting a winning college application.
                        </p>

                        <div className="glnc-card-meta-line">
                            <div className="glnc-meta-item"><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>Monday, 12-8-2025</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-clock"></i> <span>4:00 PM EST (1.5 hours)</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-geo-alt"></i> <span>In-Person - Hall A</span>
                            </div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-people"></i> <span>45/60 Members</span></div>
                            <div className="glnc-meta-divider"></div>
                            <div className="glnc-meta-item"><i className="bi bi-globe"></i> <span>English</span></div>
                        </div>

                        <div className="glnc-card-tag-pool">
                            <span className="glnc-category-tag">Career</span>
                            <span className="glnc-category-tag">Networking</span>
                        </div>

                        <div className="card-footer-row">
                            <div className="instructor-info">
                                <i className="bi bi-person"></i>
                                <span>Sarah Johnson (You)</span>
                            </div>
                            <div className="glnc-action-right-group">
                                <Link to="/teacher/event-detail" className="glnc-btn-info-spec">View
                                    Details</Link>
                            </div>
                        </div>
                    </div>
                </article>
                {/* <!-- FOOTER NAV FIXED --> */}
                <footer className="glnc-pagination-footer">
                    <div>
                        <span>Show </span>
                        <select className="glnc-show-count-select mx-1">
                            <option defaultValue="10" selected>10</option>
                            <option defaultValue="25">25</option>
                            <option defaultValue="50">50</option>
                        </select>
                        <span>Showing 1-2 from 50 results</span>
                    </div>
                    <div className="glnc-page-nav-wrapper">
                        <span className="glnc-page-nav-btn text-btn">Prev</span>
                        <span className="glnc-page-nav-btn active">1</span>
                        <span className="glnc-page-nav-btn">2</span>
                        <span className="glnc-page-nav-btn">3</span>
                        <span className="glnc-page-nav-btn text-btn"
                            style={{ border: "none", background: "none", cursor: "default" }}>...</span>
                        <span className="glnc-page-nav-btn">10</span>
                        <span className="glnc-page-nav-btn text-btn active"
                            style={{ backgroundColor: "#0076A8", color: "#fff" }}>Next</span>
                    </div>
                </footer>
            </main>

            <EditEvent />
            <CreateEvent />
            <UploadMaterials />
            <RegisteredAttendes />
        </>

    )
}

export default Events