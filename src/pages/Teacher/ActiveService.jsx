import React from 'react'
import { Link } from 'react-router-dom'

const ActiveService = () => {
    return (
        <>
            <div className="dashboard-layout-container">

                {/* <!-- Screen Title Bar Component Area --> */}
                <header className="active-users-header">
                    <div className="main-title-block">
                        <h1>Active Service Users</h1>
                        <p>Review and respond to new tutoring requests</p>
                    </div>

                    <div className="header-filters-row">
                        <div className="search-box-frame">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <button className="btn-select-dropdown">All Services <i className="fa-solid fa-caret-down"></i></button>
                        <button className="btn-select-dropdown">All Time <i className="fa-solid fa-caret-down"></i></button>
                    </div>
                </header>

                {/* <!-- Sub Navigation Context Indicator --> */}
                <div className="section-label-bar">
                    <i className="fa-regular fa-bookmark"></i> All Users
                </div>

                {/* <!-- Stack Card User Node 1: Emma Wilson --> */}
                <div className="user-profile-stack-card">
                    <div className="card-top-identity-row">
                        <div className="avatar-identity-block">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Emma Wilson" />
                            <div className="identity-text-details">
                                <h3><a href="#">Emma Wilson</a></h3>
                                <div className="date-stamp-row">
                                    <i className="fa-regular fa-clock"></i> Date: 10/01/2026
                                </div>
                            </div>
                        </div>
                        <span className="service-category-tag-pill">Service: Math Tutoring</span>
                    </div>

                    <div className="card-actions-flex-grid">
                        <Link className="btn-action-core btn-blue-details" to="/teacher/active-service-detail">
                            <i className="fa-regular fa-eye"></i> View Details
                        </Link>
                        <button className="btn-action-core btn-orange-escalate">
                            <i className="fa-solid fa-triangle-exclamation"></i> Escalate to Admin
                        </button>
                        <button className="btn-action-core btn-outline-email">
                            <i className="fa-regular fa-envelope"></i> Email User
                        </button>
                    </div>
                </div>

                {/* <!-- Stack Card User Node 2: Makenna Workman --> */}
                <div className="user-profile-stack-card">
                    <div className="card-top-identity-row">
                        <div className="avatar-identity-block">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Makenna Workman" />
                            <div className="identity-text-details">
                                <h3><a href="#">Makenna Workman</a></h3>
                                <div className="date-stamp-row">
                                    <i className="fa-regular fa-clock"></i> Date: 10/01/2026
                                </div>
                            </div>
                        </div>
                        <span className="service-category-tag-pill">Service: Math Tutoring</span>
                    </div>

                    <div className="card-actions-flex-grid">
                        <Link className="btn-action-core btn-blue-details" to="/teacher/active-service-detail">
                            <i className="fa-regular fa-eye"></i> View Details
                        </Link>
                        <button className="btn-action-core btn-orange-escalate">
                            <i className="fa-solid fa-triangle-exclamation"></i> Escalate to Admin
                        </button>
                        <button className="btn-action-core btn-outline-email">
                            <i className="fa-regular fa-envelope"></i> Email User
                        </button>
                    </div>
                </div>

                {/* <!-- Footer Aligned Navigation Control Segment --> */}
                <footer className="footer-pagination-panel">
                    <div className="results-count-label">
                        Showing 4 from 50 results
                    </div>

                    <ul className="custom-pagination-row">
                        <li><span className="pag-nav-link-btn">Prev</span></li>
                        <li><a href="#" className="pag-numeric-circle-btn active-blue-node">1</a></li>
                        <li><a href="#" className="pag-numeric-circle-btn">2</a></li>
                        <li><a href="#" className="pag-numeric-circle-btn">3</a></li>
                        <li><span className="text-muted px-1">...</span></li>
                        <li><a href="#" className="pag-numeric-circle-btn">10</a></li>
                        <li><a href="#" className="pag-nav-link-btn next-blue-active">Next</a></li>
                    </ul>
                </footer>

            </div>
        </>
    )
}

export default ActiveService