import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HourDeliverables = () => {
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);
    const [selectedService, setSelectedService] = useState("One-on-One Coaching");
    const [selectedDate, setSelectedDate] = useState("");

    const serviceDatesDictionary = {
        "One-on-One Coaching": [
            "7/27/13",
            "11/7/16",
            "5/30/14",
            "12/25/18",
            "04/15/20",
            "08/19/22",
            "01/10/24"
        ],
        "Group Coaching": [
            "12/04/24",
            "01/15/25",
            "03/22/25",
            "05/18/25"
        ],
        "Career Guidance": [
            "08/22/22",
            "09/11/23",
            "10/31/24"
        ],
        "Skill Development Events": [
            "02/10/26"
        ],
        "Project Support": [
            "04/18/25",
            "06/30/25"
        ]
    };

    return (
        <main className="gl-content-body">
            <div className="main-container-wrapper">

                {/* <!-- Header Block Area --> */}
                <header className="template-header-action-row">
                    <a href="" className="btn-circle-back-navigation">
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <div className="header-title-meta-group">
                        <h1>Hours & Deliverables</h1>
                        <p>Manage service hours and deliverables</p>
                    </div>
                    <Link to="/teacher/review-ratings" className="btn-review-ratings ms-auto">
                        Review & Ratings <i className="fa-solid fa-arrow-up-right-from-square"
                            style={{ fontSize: "11px" }}></i>
                    </Link>
                </header>

                {/* <!-- Top Counter Metrics Module Layer --> */}
                <section className="metric-tiles-row">
                    <div className="metric-counter-tile-card">
                        <div className="tile-meta-header"><img src="/images/teacher/h-d-dashboard/1.svg" alt="" /> Approved Hours</div>
                        <div className="tile-numeric-display">20h</div>
                    </div>
                    <div className="metric-counter-tile-card">
                        <div className="tile-meta-header"><img src="/images/teacher/h-d-dashboard/1.svg" alt="" /> Logged Hours</div>
                        <div className="tile-numeric-display variant-blue">5.5h</div>
                    </div>
                    <div className="metric-counter-tile-card">
                        <div className="tile-meta-header"><img src="/images/teacher/h-d-dashboard/2.svg" alt="" /> Remaining Hours</div>
                        <div className="tile-numeric-display">14.5h</div>
                    </div>

                    {/* <!-- FIXED PROGRESS BOX CARD COMPONENT --> */}
                    <div className="metric-counter-tile-card">
                        <div className="tile-meta-header"><img src="/images/teacher/h-d-dashboard/3.svg" alt="" /> Progress</div>
                        <div className="progress-container-fixed">
                            <div className="progress-bar-bg-track">
                                <div className="progress-bar-fill-dynamic"></div>
                            </div>
                            <span className="progress-meta-text">28%</span>
                        </div>
                    </div>
                </section>

                {/* <!-- Dual Form Matrix Panels Columns Grid --> */}
                <div className="workspace-dual-grid">

                    {/* <!-- LEFT COLUMN ACCORDING TO hours-&-deliverables_2.png --> */}
                    <div className="column-flex-stack">
                        {/* <!-- MODULE 1: LOG HOURS FORM PANEL --> */}
                        <div className="form-section-container-box">
                            <div className="section-box-heading">
                                <i className="fa-regular fa-clock"></i> Log Hours
                            </div>

                            <div className="row">
                                <div className="col-md-6 custom-form-field-wrapper">
                                    <label className="custom-form-field-label">User</label>
                                    <select className="custom-form-input-element form-select">
                                        <option>Select User</option>
                                    </select>
                                </div>

                                {/* <!-- SERVICE TYPE DROPDOWN FORM WITH INTEGRATED SWITCH BEHAVIOR ENGINE --> */}
                                <div className="col-md-6 custom-form-field-wrapper" id="serviceTypeDropdownContainer">
                                    <label className="custom-form-field-label">Service Type</label>
                                    {/* <div className="custom-form-input-element custom-dropdown-select-trigger-box"
                                id="dropdownTrigger">
                                <span id="selectedServicePlaceholder"
                                    style={{color: "#667085", fontWeight: "500"}}>Select
                                    Service</span>
                                <i className="fa-solid fa-chevron-down" id="dropdownArrowIcon"
                                    style={{color: "#A3A3A3", fontSize: "12px", transition: "transform 0.2s"}}></i>
                            </div> */}

                                    {/* commented above and write the new below by Sunil  */}

                                    <div
                                        className="custom-form-input-element custom-dropdown-select-trigger-box"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            setShowServiceDropdown((previous) => !previous);
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: selectedService ? "#101828" : "#667085",
                                                fontWeight: "500"
                                            }}
                                        >
                                            {selectedService
                                                ? `${selectedService}${selectedDate ? ` (${selectedDate})` : ""}`
                                                : "Select Service"}
                                        </span>

                                        <i
                                            className="fa-solid fa-chevron-down"
                                            style={{
                                                color: "#A3A3A3",
                                                fontSize: "12px",
                                                transition: "transform 0.2s",
                                                transform: showServiceDropdown
                                                    ? "rotate(180deg)"
                                                    : "rotate(0deg)"
                                            }}
                                        ></i>
                                    </div>

                                    {/* <!-- Dropdown Element Panel Popover Menu Structure --> */}

                                    {/* {showServiceDropdown && (
                                        <div className="service-type-dropdown-popover-menu show-menu" id="dropdownPopover">
                                            <div className="dropdown-radio-option-row selected"
                                                data-service="One-on-One Coaching">
                                                <span className="custom-radio-circle"></span>
                                                <span className="option-label-text">One-on-One Coaching</span>
                                            </div>

                                          
                                            <div className="nested-date-tokens-container-row" id="dynamicDatesContainer">
                                            </div>

                                            <div className="dropdown-radio-option-row" data-service="Group Coaching">
                                                <span className="custom-radio-circle"></span>
                                                <span className="option-label-text">Group Coaching</span>
                                            </div>
                                            <div className="dropdown-radio-option-row" data-service="Career Guidance">
                                                <span className="custom-radio-circle"></span>
                                                <span className="option-label-text">Career Guidance</span>
                                            </div>
                                            <div className="dropdown-radio-option-row"
                                                data-service="Skill Development Events">
                                                <span className="custom-radio-circle"></span>
                                                <span className="option-label-text">Skill Development Events</span>
                                            </div>
                                            <div className="dropdown-radio-option-row" data-service="Project Support">
                                                <span className="custom-radio-circle"></span>
                                                <span className="option-label-text">Project Support</span>
                                            </div>
                                        </div>
                                    )} */}

                                    {showServiceDropdown && (
                                        <div
                                            className="service-type-dropdown-popover-menu show-menu"
                                            id="dropdownPopover"
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            {Object.entries(serviceDatesDictionary).map(([service, dates]) => (
                                                <React.Fragment key={service}>
                                                    {/* The option row */}
                                                    <div
                                                        className={`dropdown-radio-option-row ${selectedService === service ? "selected" : ""
                                                            }`}
                                                        onClick={() => {
                                                            setSelectedService(service);
                                                            setSelectedDate("");
                                                        }}
                                                    >
                                                        <span className="custom-radio-circle"></span>
                                                        <span className="option-label-text">{service}</span>
                                                    </div>

                                                    {/* Dates — only for the currently selected option, placed right below it */}
                                                    {selectedService === service && dates.length > 0 && (
                                                        <div className="nested-date-tokens-container-row" id="dynamicDatesContainer">
                                                            {dates.map((date) => (
                                                                <span
                                                                    key={date}
                                                                    className="date-token-pill"
                                                                    onClick={(event) => {
                                                                        event.stopPropagation();
                                                                        setSelectedDate(date);
                                                                        setShowServiceDropdown(false);
                                                                    }}
                                                                >
                                                                    {date}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-6 custom-form-field-wrapper">
                                    <label className="custom-form-field-label">Date</label>
                                    <input type="text" className="custom-form-input-element" value="12-12-2025" />
                                </div>
                                <div className="col-md-6 custom-form-field-wrapper">
                                    <label className="custom-form-field-label">Hours Worked</label>
                                    <input type="text" className="custom-form-input-element" placeholder="e.g., 1.5" />
                                </div>
                            </div>

                            <div className="custom-form-field-wrapper mt-2">
                                <label className="custom-form-field-label">Description</label>
                                <textarea className="custom-form-input-element" rows="3"
                                    placeholder="What did you work on during this session?"></textarea>
                            </div>

                            <div className="custom-form-field-wrapper mt-2">
                                <label className="custom-form-field-label">Attachment (Optional)</label>
                                <div className="attachment-dropzone-component">
                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                    <p style={{ color: "#667085", fontSize: "12px", fontWeight: "500" }}>Drag and drop
                                        files here, or
                                        click to browse</p>
                                </div>
                            </div>

                            <button className="btn-form-action-submit-solid"><i className="fa-solid fa-plus"></i> Submit
                                Hours</button>
                        </div>

                        {/* <!-- FIXED & ADDED: HOURS HISTORY SECTION --> */}
                        <div className="form-section-container-box">
                            <div className="section-box-heading">
                                <i className="fa-solid fa-clock-rotate-left"></i> Hours History
                            </div>
                            <div className="history-list-wrapper">
                                {/* <!-- Row Item 1 --> */}
                                <div className="history-item-card">
                                    <div className="history-card-left">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <div className="history-card-body">
                                            <h5>2h</h5>
                                            <p>SAT practice test review and analysis</p>
                                            <span>Emma Wilson</span>
                                        </div>
                                    </div>
                                    <div className="history-card-right">
                                        <span className="status-pill-badge approved">Approved</span>
                                        <span className="date-stamp">12-10-2025</span>
                                    </div>
                                </div>
                                {/* <!-- Row Item 2 --> */}
                                <div className="history-item-card">
                                    <div className="history-card-left">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <div className="history-card-body">
                                            <h5>1.5h</h5>
                                            <p>Reading comprehension strategies</p>
                                            <span>John Deo</span>
                                        </div>
                                    </div>
                                    <div className="history-card-right">
                                        <span className="status-pill-badge approved">Approved</span>
                                        <span className="date-stamp">12-10-2025</span>
                                    </div>
                                </div>
                                {/* <!-- Row Item 3 --> */}
                                <div className="history-item-card">
                                    <div className="history-card-left">
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <div className="history-card-body">
                                            <h5>1.5h</h5>
                                            <p>Math problem-solving session</p>
                                            <span>Emma Wilson</span>
                                        </div>
                                    </div>
                                    <div className="history-card-right">
                                        <span className="status-pill-badge pending">Pending</span>
                                        <span className="date-stamp">12-12-2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- RIGHT COLUMN ACCORDING TO hours-&-deliverables_2.png --> */}
                    <div className="column-flex-stack">
                        {/* <!-- MODULE 2: SUBMIT DELIVERABLES PANEL --> */}
                        <div className="form-section-container-box">
                            <div className="section-box-heading d-flex justify-content-between align-items-center">
                                <span><i className="fa-regular fa-file-lines"></i> Submit Deliverable</span>
                                <i className="fa-regular fa-pen-to-square"
                                    style={{ color: "#0084C2", fontSize: "16px", cursor: "pointer" }}></i>
                            </div>

                            <div className="custom-form-field-wrapper">
                                <label className="custom-form-field-label">Title</label>
                                <input type="text" className="custom-form-input-element"
                                    placeholder="e.g., Week 2 Progress report" />
                            </div>

                            <div className="custom-form-field-wrapper mt-2">
                                <label className="custom-form-field-label">Description</label>
                                <textarea className="custom-form-input-element" rows="4"
                                    placeholder="What did you work on during this session?"></textarea>
                            </div>

                            <div className="custom-form-field-wrapper mt-2">
                                <label className="custom-form-field-label">Attachment (Optional)</label>
                                <div className="attachment-dropzone-component">
                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                    <p style={{ color: "#667085", fontSize: "12px", fontWeight: "500" }}>Drag and drop
                                        files here, or
                                        click to browse PDF, DOCX, XLSX, images up to 10MB</p>
                                </div>
                            </div>

                            <button className="btn-form-action-submit-solid"><i className="fa-solid fa-cloud-arrow-up"></i>
                                Submit
                                Deliverable</button>
                        </div>

                        {/* <!-- FIXED & ADDED: SUBMITTED DELIVERABLES SECTION --> */}
                        <div className="form-section-container-box">
                            <div className="section-box-heading">
                                <i className="fa-solid fa-clock-rotate-left"></i> Submitted Deliverables
                            </div>
                            <div className="history-list-wrapper">
                                {/* <!-- Deliverable Item 1 --> */}
                                <div className="history-item-card">
                                    <div className="history-card-left">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <div className="history-card-body">
                                            <h5>Week 1 Progress Report</h5>
                                            <p>Initial assessment and study plan</p>
                                        </div>
                                    </div>
                                    <div className="history-card-right">
                                        <span className="status-pill-badge approved">Approved</span>
                                        <span className="date-stamp">12-09-2025</span>
                                    </div>
                                </div>
                                {/* <!-- Deliverable Item 2 --> */}
                                <div className="history-item-card">
                                    <div className="history-card-left">
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <div className="history-card-body">
                                            <h5>Practice Test Results</h5>
                                            <p>First practice SAT results with analysis</p>
                                        </div>
                                    </div>
                                    <div className="history-card-right">
                                        <span className="status-pill-badge pending">Pending</span>
                                        <span className="date-stamp">12-10-2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- BOTTOM SECTION LAYER: DATA LEDGER TABLE GRID SYSTEM COMPLETE DATA MATCHED --> */}
                <section className="ledger-datatable-card-container">
                    <table className="table custom-ledger-table">
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>#</th>
                                <th>Teacher Name</th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Hours</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th style={{ width: "60px", textAlign: "center" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Row 1 --> */}
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Nolan Levin
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Ahmad Kenter
                                    </div>
                                </td>
                                <td>Skill Development Events</td>
                                <td style={{ fontWeight: "600", color: "#101828" }}>4.5h <span
                                    style={{ color: "#A3A3A3", fontWeight: "500" }}>/ 5h</span></td>
                                <td>10-02-2025</td>
                                <td><span className="status-pill-badge approved">Approved</span></td>
                                <td style={{ textAlign: "center" }}>

                                    <div className="dropdown">
                                        <button className="btn-table-three-dot" type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            ⋮
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i
                                                className="fa-regular fa-file-lines text-muted"></i>
                                                Send
                                                Invoice</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            {/* <!-- Row 2 --> */}
                            <tr>
                                <td>2</td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Ryan Workman
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Jaylon Schleifer
                                    </div>
                                </td>
                                <td>One-on-One Coaching</td>
                                <td style={{ fontWeight: "600", color: "#101828" }}>3h <span
                                    style={{ color: "#A3A3A3", fontWeight: "500" }}>/ 3h</span></td>
                                <td>10-02-2025</td>
                                <td><span className="status-pill-badge pending">Pending</span></td>
                                <td style={{ textAlign: "center" }}>

                                    <div className="dropdown">
                                        <button className="btn-table-three-dot" type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            ⋮
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i
                                                className="fa-regular fa-file-lines text-muted"></i>
                                                Send
                                                Invoice</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            {/* <!-- Row 3 --> */}
                            <tr>
                                <td>3</td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Alfredo Dorwart
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Alfonso Lipshutz
                                    </div>
                                </td>
                                <td>Group Coaching</td>
                                <td style={{ fontWeight: "600", color: "#101828" }}>4h <span
                                    style={{ color: "#A3A3A3", fontWeight: "500" }}>/ 4h</span></td>
                                <td>10-02-2025</td>
                                <td><span className="status-pill-badge pending">Pending</span></td>
                                <td style={{ textAlign: "center" }}>
                                    <div className="dropdown">
                                        <button className="btn-table-three-dot" type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            ⋮
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i
                                                className="fa-regular fa-file-lines text-muted"></i>
                                                Send
                                                Invoice</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            {/* <!-- Row 4 --> */}
                            <tr>
                                <td>4</td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Miracle Bator
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80"
                                            alt="" />
                                        Emery Mango
                                    </div>
                                </td>
                                <td>Project Support</td>
                                <td style={{ fontWeight: "600", color: "#101828" }}>2h <span
                                    style={{ color: "#A3A3A3", fontWeight: "500" }}>/ 2h</span></td>
                                <td>10-02-2025</td>
                                <td><span className="status-pill-badge approved">Approved</span></td>
                                <td style={{ textAlign: "center" }}>
                                    <div className="dropdown">
                                        <button className="btn-table-three-dot" type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            ⋮
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i
                                                className="fa-regular fa-file-lines text-muted"></i>
                                                Send
                                                Invoice</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <!-- FIXED & ADDED: COMPLETE TABLE FOOTER WITH ENTRIES DROPDOWN & PAGINATION --> */}
                    <div className="table-footer-pagination-tray">
                        <div className="footer-left-meta-zone">
                            <span>Show</span>
                            <select className="show-entries-select">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                            <span>Showing 1-3 from 50 results</span>
                        </div>

                        <div className="custom-pagination-controls">
                            <a href="#" className="pagination-btn-pill disabled">Prev</a>
                            <a href="#" className="pagination-btn-pill active">1</a>
                            <a href="#" className="pagination-btn-pill">2</a>
                            <a href="#" className="pagination-btn-pill">3</a>
                            <span style={{ color: "var(--text-ultra-muted)", padding: "0 4px" }}>...</span>
                            <a href="#" className="pagination-btn-pill">10</a>
                            <a href="#" className="pagination-btn-pill">Next</a>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default HourDeliverables