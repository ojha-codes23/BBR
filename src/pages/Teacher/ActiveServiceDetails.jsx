import React from 'react'

const ActiveServiceDetails = () => {
    return (
        <div className="details-dashboard-container">

            {/* <!-- Dashboard Screen Aligned Header Row Segment --> */}
            <header className="details-screen-header">
                <div className="title-meta-block">
                    <h1>View Details</h1>
                    <p>Emma Wilson's Service Sessions</p>
                </div>
                <button className="btn-schedule-session">
                    <i className="fa-regular fa-calendar-plus"></i> Schedule Session
                </button>
            </header>

            {/* <!-- Filter Control Workspace Panel --> */}
            <section className="filters-control-bar">
                <div className="search-input-field-frame">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" />
                </div>

                <div className="right-dropdowns-group">
                    <button className="filter-select-dropdown">All Statuses <i
                        className="fa-solid fa-caret-down"></i></button>
                    <button className="filter-select-dropdown">All Users <i className="fa-solid fa-caret-down"></i></button>
                    <button className="filter-select-dropdown">All Services <i
                        className="fa-solid fa-caret-down"></i></button>
                    <button className="view-toggle-square-btn active-blue"><i
                        className="fa-regular fa-calendar-days"></i></button>
                </div>
            </section>

            {/* <!-- Main Workspace List Cards Frame Stack --> */}
            <main className="sessions-stack-wrapper">

                {/* <!-- Block Card 1: Upcoming State Segment --> */}
                <div className="session-layout-panel-card">
                    <div className="session-top-identity-row">
                        <div className="session-document-meta-flex">
                            <div className="session-doc-icon-box"><i className="fa-regular fa-file-lines"></i></div>
                            <div className="session-heading-labels">
                                <h2>Technical Problem Solving</h2>
                                <p>Technical guidance for cybersecurity project</p>
                            </div>
                        </div>
                        <span className="state-indicator-badge upcoming">Upcoming</span>
                    </div>

                    <div className="session-parameters-row-grid">
                        <div className="parameter-item-node"><span>User:</span> David Lee</div>
                        <div className="parameter-item-node"><span>Date:</span> Nov 25, 2025</div>
                        <div className="parameter-item-node"><span>Time:</span> 10:00 AM</div>
                        <div className="parameter-item-node"><span>Duration:</span> 60 Min</div>
                    </div>

                    <div className="session-card-bottom-actions">
                        <a href="#" className="btn-session-edit-outline"><i className="fa-regular fa-pen-to-square"></i>
                            Edit</a>
                        <div className="right-side-action-buttons-flex">
                            <a href="#" className="btn-action-view-arrow-link">View Details <i
                                className="fa-solid fa-arrow-right"></i></a>
                            <a href="#" className="btn-action-filled-start">Start Class <i
                                className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Block Card 2: In Progress State Segment --> */}
                <div className="session-layout-panel-card">
                    <div className="session-top-identity-row">
                        <div className="session-document-meta-flex">
                            <div className="session-doc-icon-box"><i className="fa-regular fa-file-lines"></i></div>
                            <div className="session-heading-labels">
                                <h2>Technical Problem Solving</h2>
                                <p>Technical guidance for cybersecurity project</p>
                            </div>
                        </div>
                        <span className="state-indicator-badge in-progress">In Progress</span>
                    </div>

                    <div className="session-parameters-row-grid">
                        <div className="parameter-item-node"><span>User:</span> David Lee</div>
                        <div className="parameter-item-node"><span>Date:</span> Nov 25, 2025</div>
                        <div className="parameter-item-node"><span>Time:</span> 10:00 AM</div>
                        <div className="parameter-item-node"><span>Duration:</span> 60 Min</div>
                    </div>

                    <div className="session-card-bottom-actions">
                        <div className="right-side-action-buttons-flex">
                            <a href="#" className="btn-action-view-arrow-link">View Details <i
                                className="fa-solid fa-arrow-right"></i></a>
                            <a href="#" className="btn-action-filled-mark-done"><i className="fa-solid fa-check-double"></i>
                                Mark as
                                done</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Block Card 3: Complete State Segment --> */}
                <div className="session-layout-panel-card">
                    <div className="session-top-identity-row">
                        <div className="session-document-meta-flex">
                            <div className="session-doc-icon-box"><i className="fa-regular fa-file-lines"></i></div>
                            <div className="session-heading-labels">
                                <h2>Technical Problem Solving</h2>
                                <p>Technical guidance for cybersecurity project</p>
                            </div>
                        </div>
                        <span className="state-indicator-badge complete">Complete</span>
                    </div>

                    <div className="session-parameters-row-grid">
                        <div className="parameter-item-node"><span>User:</span> David Lee</div>
                        <div className="parameter-item-node"><span>Date:</span> Nov 25, 2025</div>
                        <div className="parameter-item-node"><span>Time:</span> 10:00 AM</div>
                        <div className="parameter-item-node"><span>Duration:</span> 60 Min</div>
                    </div>

                    <div className="session-card-bottom-actions">
                        <div className="right-side-action-buttons-flex">
                            <a href="#" className="btn-action-view-arrow-link">View Details <i
                                className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

            </main>

        </div>

    )
}

export default ActiveServiceDetails