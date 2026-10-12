import React, { useState } from 'react'
import DeleteSowTemplate from '../../components/teacher/DeleteSowTemplate';
import DeleteContractTemplate from '../../components/teacher/DeleteContractTemplate';

const SowDrafts = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown((prev) => (prev === id ? null : id));
    };

    return (
        <>
        <main className="gl-content-body">
            {/* <!-- PRIMARY MAIN HEADER --> */}
            <header className="template-header-action-row">
                <a href="sow-contract.html" className="btn-circle-back-navigation">
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
                <div className="header-title-meta-group">
                    <h1>SOW Drafts</h1>
                    <p>Manage reusable statement of work and contract templates</p>
                </div>
            </header>

            {/* <!-- FILTER BAR INTERFACE --> */}
            <div className="glnc-search-bar-wrapper">
                <i className="bi bi-search"></i>
                <input type="text" className="glnc-search-input" placeholder="Search" />
            </div>


            {/* <!-- ================= SOW TEMPLATES PANEL (ALL 4 CARDS AS IS) ================= --> */}
            <div id="sow-panel" className="row g-4 tab-content-panel active-panel">

                {/* <!-- CARD 1 --> */}
                <div className="col-md-6">
                    <div className="glnc-template-card">
                        <button className="glnc-card-triple-dot-btn" onClick={(e) => {
                            e.stopPropagation(); 
                            setOpenDropdown(
                                openDropdown === 1 ? null : 1
                            ); console.log("first", openDropdown)
                        }}><i
                            className="bi bi-three-dots-vertical"></i></button>

                        <div className={`glnc-context-dropdown ${openDropdown === 1 ? "show" : ""
                            }`}>
                            <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                            <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                                <i className="bi bi-copy"></i> Duplicate</button>
                            <button className="glnc-dropdown-item text-danger"><i
                                className="bi bi-ban"></i>Inactive</button>
                            <button className="glnc-dropdown-item text-success"><i
                                className="bi bi-check-circle"></i>Activate</button>
                            <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
                                data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
                        </div>

                        <div className="glnc-card-title-row">
                            <h3 className="glnc-card-title">STEM Workshop Standard SOW12</h3>
                        </div>
                        <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                        <div className="glnc-meta-matrix">
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
                            <div className="glnc-vertical-divider"></div>
                            <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version 0.1</span></div>
                        </div>

                        <div className="glnc-tag-pool">
                            <span className="glnc-badge-tag">SAT</span>
                            <span className="glnc-badge-tag">TestPrep</span>
                        </div>
                    </div>
                </div>

                {/* <!-- CARD 2 --> */}
                <div className="col-md-6">
                    <div className="glnc-template-card">
                        <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
                            className="bi bi-three-dots-vertical"></i></button>

                        <div className="glnc-context-dropdown">
                            <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                            <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                                <i className="bi bi-copy"></i> Duplicate</button>
                            <button className="glnc-dropdown-item text-danger"><i
                                className="bi bi-ban"></i>Inactive</button>
                            <button className="glnc-dropdown-item text-success"><i
                                className="bi bi-check-circle"></i>Activate</button>
                            <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
                                data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
                        </div>

                        <div className="glnc-card-title-row">
                            <h3 className="glnc-card-title">STEM Workshop Standard SOW</h3>
                        </div>
                        <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                        <div className="glnc-meta-matrix">
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
                            <div className="glnc-vertical-divider"></div>
                            <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version 0.2</span></div>
                        </div>

                        <div className="glnc-tag-pool">
                            <span className="glnc-badge-tag">SAT</span>
                            <span className="glnc-badge-tag">TestPrep</span>
                        </div>
                    </div>
                </div>

                {/* <!-- CARD 3 --> */}
                <div className="col-md-6">
                    <div className="glnc-template-card">
                        <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
                            className="bi bi-three-dots-vertical"></i></button>

                        <div className="glnc-context-dropdown">
                            <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                            <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                                <i className="bi bi-copy"></i> Duplicate</button>
                            <button className="glnc-dropdown-item text-danger"><i
                                className="bi bi-ban"></i>Inactive</button>
                            <button className="glnc-dropdown-item text-success"><i
                                className="bi bi-check-circle"></i>Activate</button>
                            <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
                                data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
                        </div>

                        <div className="glnc-card-title-row">
                            <h3 className="glnc-card-title">Tutoring Program SOW</h3>
                        </div>
                        <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                        <div className="glnc-meta-matrix">
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
                            <div className="glnc-vertical-divider"></div>
                            <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version 0.3</span></div>
                        </div>

                        <div className="glnc-tag-pool">
                            <span className="glnc-badge-tag">SAT</span>
                            <span className="glnc-badge-tag">TestPrep</span>
                        </div>
                    </div>
                </div>

                {/* <!-- CARD 4 --> */}
                <div className="col-md-6">
                    <div className="glnc-template-card">
                        <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
                            className="bi bi-three-dots-vertical"></i></button>

                        <div className="glnc-context-dropdown">
                            <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                            <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                                <i className="bi bi-copy"></i> Duplicate</button>
                            <button className="glnc-dropdown-item text-danger"><i
                                className="bi bi-ban"></i>Inactive</button>
                            <button className="glnc-dropdown-item text-success"><i
                                className="bi bi-check-circle"></i>Activate</button>
                            <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
                                data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
                        </div>

                        <div className="glnc-card-title-row">
                            <h3 className="glnc-card-title">Career Readiness SOW</h3>
                        </div>
                        <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                        <div className="glnc-meta-matrix">
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
                            <div className="glnc-vertical-divider"></div>
                            <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                            <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version 0.4</span></div>
                        </div>

                        <div className="glnc-tag-pool">
                            <span className="glnc-badge-tag">SAT</span>
                            <span className="glnc-badge-tag">TestPrep</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="gl-matrix-footer-pagination">
                        <div className="gl-pagination-left-side">
                            <span className="gl-pagination-lbl">Show</span>
                            <div className="gl-dropdown-wrapper mini-select-box">
                                <select className="gl-pipeline-select select-mini">
                                    <option selected>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                </select>
                            </div>
                            <span className="gl-pagination-counter-info">Showing 1-4 from 50 results</span>
                        </div>

                        <div className="gl-pagination-right-side">
                            <nav aria-label="Data Grid Navigation Pack">
                                <ul className="pagination gl-custom-pager-list">
                                    <li className="page-item disabled">
                                        <a className="page-link pager-trigger-prev" href="#" tabindex="-1"
                                            aria-disabled="true">Prev</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link pager-num-trigger"
                                        href="#">1</a></li>
                                    <li className="page-item"><a className="page-link pager-num-trigger" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link pager-num-trigger" href="#">3</a></li>
                                    <li className="page-item disabled"><span className="page-link pager-ellipsis">...</span>
                                    </li>
                                    <li className="page-item"><a className="page-link pager-num-trigger" href="#">10</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link pager-trigger-next" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- ================= CONTRACT TEMPLATES PANEL ================= --> */}
            {/* <div id="contract-panel" className="row g-4 tab-content-panel">

       
        <div className="col-md-6">
            <div className="glnc-template-card">
                <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
                        className="bi bi-three-dots-vertical"></i></button>

                <div className="glnc-context-dropdown">
                    <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                    <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                        <i className="bi bi-copy"></i> Duplicate</button>
                    <button className="glnc-dropdown-item text-danger"><i
                            className="bi bi-ban"></i>Inactive</button>
                    <button className="glnc-dropdown-item text-success"><i
                            className="bi bi-check-circle"></i>Activate</button>
                    <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
                        data-bs-target="#deleteContracttModal"><i className="bi bi-trash"></i> Delete</button>
                </div>

                <div className="glnc-card-title-row">
                    <h3 className="glnc-card-title">Arts Integration Contract</h3>
                </div>
                <p className="glnc-card-subtitle">Mentorship for Arts Integration Contract and &hellip;</p>

                <div className="glnc-meta-matrix">
                    <div className="glnc-meta-col"><img src="images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
                    <div className="glnc-vertical-divider"></div>
                    <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                    <div className="glnc-meta-col"><i className="bi bi-arrow-counterclockwise"></i> <span>Version
                            0.1</span>
                    </div>
                </div>

                <div className="glnc-tag-pool">
                    <span className="glnc-badge-tag">Art</span>
                    <span className="glnc-badge-tag">Integration</span>
                </div>
            </div>
        </div>

        <div className="col-md-12">
            <div className="gl-matrix-footer-pagination">
                <div className="gl-pagination-left-side">
                    <span className="gl-pagination-lbl">Show</span>
                    <div className="gl-dropdown-wrapper mini-select-box">
                        <select className="gl-pipeline-select select-mini">
                            <option selected>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <i className="fas fa-chevron-down dropdown-arrow-icon"></i>
                    </div>
                    <span className="gl-pagination-counter-info">Showing 1-4 from 50 results</span>
                </div>

                <div className="gl-pagination-right-side">
                    <nav aria-label="Data Grid Navigation Pack">
                        <ul className="pagination gl-custom-pager-list">
                            <li className="page-item disabled">
                                <a className="page-link pager-trigger-prev" href="#" tabindex="-1"
                                    aria-disabled="true">Prev</a>
                            </li>
                            <li className="page-item active"><a className="page-link pager-num-trigger"
                                    href="#">1</a></li>
                            <li className="page-item"><a className="page-link pager-num-trigger" href="#">2</a></li>
                            <li className="page-item"><a className="page-link pager-num-trigger" href="#">3</a></li>
                            <li className="page-item disabled"><span className="page-link pager-ellipsis">...</span>
                            </li>
                            <li className="page-item"><a className="page-link pager-num-trigger" href="#">10</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link pager-trigger-next" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div> */}

        </main>

        {/* <DeleteContractTemplate /> */}
        <DeleteSowTemplate />

        </>
    )
}

export default SowDrafts