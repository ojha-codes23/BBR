// import React from 'react'

// const SowContract = () => {
//     return (
//         <main className="gl-content-body">
//             {/* <!-- PRIMARY MAIN HEADER --> */}
//             <div className="glnc-header-row">
//                 <div>
//                     <h1 className="glnc-page-title">SOW & Contract Templates</h1>
//                     <p className="glnc-page-subtitle">Manage reusable statement of work and contract templates</p>
//                 </div>
//                 <a href="sow-drafts.html" className="glnc-btn-new ms-auto me-3">
//                     <i className="bi bi-plus-lg"></i>
//                     SOW Drafts
//                 </a>
//                 <a href="create-new-template.html" className="glnc-btn-new">
//                     <i className="bi bi-plus-lg"></i>
//                     New Template
//                 </a>
//             </div>

//             {/* <!-- TABS ROW SELECTION MATRIX --> */}
//             <div className="glnc-tab-pill-box">
//                 <button className="glnc-tab-pill active" onClick="switchTabPanel('sow-panel', this)">SOW
//                     Templates</button>
//                 <button className="glnc-tab-pill" onClick="switchTabPanel('contract-panel', this)">Contract
//                     Templates</button>
//             </div>

//             {/* <!-- FILTER BAR INTERFACE --> */}

//             <div className="filter-bar mt-4">
//                 <div className="search-wrapper">
//                     <i className="fa-solid : fa-magnifying-glass"></i>
//                     <input type="text" placeholder="Search" />
//                 </div>

//                 {/* <!-- Company Dropdown --> */}
//                 <div className="custom-select-wrapper">
//                     <select className="custom-select">
//                         <option value="all">All SOW</option>
//                         <option value="1">Company Alpha</option>
//                         <option value="2">Company Beta</option>
//                     </select>
//                 </div>


//                 <button className="glnc-btn-cal-icon date-width">
//                     <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />Date
//                 </button>



//                 {/* <!-- ================= SOW TEMPLATES PANEL (ALL 4 CARDS AS IS) ================= --> */}
//                 <div id="sow-panel" className="row g-4 tab-content-panel active-panel">

//                     {/* <!-- CARD 1 --> */}
//                     <div className="col-md-6">
//                         <div className="glnc-template-card">
//                             <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
//                                 className="bi bi-three-dots-vertical"></i></button>

//                             <div className="glnc-context-dropdown">
//                                 <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
//                                 <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
//                                     <i className="bi bi-copy"></i> Duplicate</button>
//                                 <button className="glnc-dropdown-item text-danger"><i
//                                     className="bi bi-ban"></i>Inactive</button>
//                                 <button className="glnc-dropdown-item text-success"><i
//                                     className="bi bi-check-circle"></i>Activate</button>
//                                 <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
//                                     data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
//                             </div>

//                             <div className="glnc-card-title-row">
//                                 <h3 className="glnc-card-title">STEM Workshop Standard SOW</h3>
//                                 <span className="glnc-status-badge status-active">Active</span>
//                             </div>
//                             <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

//                             <div className="glnc-meta-matrix">
//                                 <div className="glnc-meta-col">
//                                     <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
//                                     <span>17-01-2026</span>
//                                 </div>
//                                 <div className="glnc-vertical-divider"></div>
//                                 <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
//                                 <div className="glnc-meta-col">
//                                     <img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" />
//                                     <span>Version 0.1</span></div>
//                             </div>

//                             <div className="glnc-tag-pool">
//                                 <span className="glnc-badge-tag">SAT</span>
//                                 <span className="glnc-badge-tag">TestPrep</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- CARD 2 --> */}
//                     <div className="col-md-6">
//                         <div className="glnc-template-card">
//                             <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
//                                 className="bi bi-three-dots-vertical"></i></button>

//                             <div className="glnc-context-dropdown">
//                                 <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
//                                 <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
//                                     <i className="bi bi-copy"></i> Duplicate</button>
//                                 <button className="glnc-dropdown-item text-danger"><i
//                                     className="bi bi-ban"></i>Inactive</button>
//                                 <button className="glnc-dropdown-item text-success"><i
//                                     className="bi bi-check-circle"></i>Activate</button>
//                                 <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
//                                     data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
//                             </div>

//                             <div className="glnc-card-title-row">
//                                 <h3 className="glnc-card-title">STEM Workshop Standard SOW</h3>
//                                 <span className="glnc-status-badge status-active">Active</span>
//                             </div>
//                             <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

//                             <div className="glnc-meta-matrix">
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
//                                 <div className="glnc-vertical-divider"></div>
//                                 <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version 0.2</span></div>
//                             </div>

//                             <div className="glnc-tag-pool">
//                                 <span className="glnc-badge-tag">SAT</span>
//                                 <span className="glnc-badge-tag">TestPrep</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- CARD 3 --> */}
//                     <div className="col-md-6">
//                         <div className="glnc-template-card">
//                             <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
//                                 className="bi bi-three-dots-vertical"></i></button>

//                             <div className="glnc-context-dropdown">
//                                 <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
//                                 <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
//                                     <i className="bi bi-copy"></i> Duplicate</button>
//                                 <button className="glnc-dropdown-item text-danger"><i
//                                     className="bi bi-ban"></i>Inactive</button>
//                                 <button className="glnc-dropdown-item text-success"><i
//                                     className="bi bi-check-circle"></i>Activate</button>
//                                 <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
//                                     data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
//                             </div>

//                             <div className="glnc-card-title-row">
//                                 <h3 className="glnc-card-title">Tutoring Program SOW</h3>
//                                 <span className="glnc-status-badge status-active">Active</span>
//                             </div>
//                             <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

//                             <div className="glnc-meta-matrix">
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
//                                 <div className="glnc-vertical-divider"></div>
//                                 <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version 0.3</span></div>
//                             </div>

//                             <div className="glnc-tag-pool">
//                                 <span className="glnc-badge-tag">SAT</span>
//                                 <span className="glnc-badge-tag">TestPrep</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- CARD 4 --> */}
//                     <div className="col-md-6">
//                         <div className="glnc-template-card">
//                             <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
//                                 className="bi bi-three-dots-vertical"></i></button>

//                             <div className="glnc-context-dropdown">
//                                 <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
//                                 <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
//                                     <i className="bi bi-copy"></i> Duplicate</button>
//                                 <button className="glnc-dropdown-item text-danger"><i
//                                     className="bi bi-ban"></i>Inactive</button>
//                                 <button className="glnc-dropdown-item text-success"><i
//                                     className="bi bi-check-circle"></i>Activate</button>
//                                 <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
//                                     data-bs-target="#deleteDistrictModal"><i className="bi bi-trash"></i> Delete</button>
//                             </div>

//                             <div className="glnc-card-title-row">
//                                 <h3 className="glnc-card-title">Career Readiness SOW</h3>
//                                 <span className="glnc-status-badge status-draft">Draft</span>
//                             </div>
//                             <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

//                             <div className="glnc-meta-matrix">
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
//                                 <div className="glnc-vertical-divider"></div>
//                                 <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version 0.4</span></div>
//                             </div>

//                             <div className="glnc-tag-pool">
//                                 <span className="glnc-badge-tag">SAT</span>
//                                 <span className="glnc-badge-tag">TestPrep</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-12">
//                         <div className="gl-matrix-footer-pagination">
//                             <div className="gl-pagination-left-side">
//                                 <span className="gl-pagination-lbl">Show</span>
//                                 <div className="gl-dropdown-wrapper mini-select-box">
//                                     <select className="gl-pipeline-select select-mini">
//                                         <option selected>10</option>
//                                         <option>25</option>
//                                         <option>50</option>
//                                     </select>
//                                     <i className="fas fa-chevron-down dropdown-arrow-icon"></i>
//                                 </div>
//                                 <span className="gl-pagination-counter-info">Showing 1-4 from 50 results</span>
//                             </div>

//                             <div className="gl-pagination-right-side">
//                                 <nav aria-label="Data Grid Navigation Pack">
//                                     <ul className="pagination gl-custom-pager-list">
//                                         <li className="page-item disabled">
//                                             <a className="page-link pager-trigger-prev" href="#" tabindex="-1"
//                                                 aria-disabled="true">Prev</a>
//                                         </li>
//                                         <li className="page-item active"><a className="page-link pager-num-trigger"
//                                             href="#">1</a></li>
//                                         <li className="page-item"><a className="page-link pager-num-trigger" href="#">2</a></li>
//                                         <li className="page-item"><a className="page-link pager-num-trigger" href="#">3</a></li>
//                                         <li className="page-item disabled"><span className="page-link pager-ellipsis">...</span>
//                                         </li>
//                                         <li className="page-item"><a className="page-link pager-num-trigger" href="#">10</a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link pager-trigger-next" href="#">Next</a>
//                                         </li>
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 {/* <!-- ================= CONTRACT TEMPLATES PANEL ================= --> */}
//                 <div id="contract-panel" className="row g-4 tab-content-panel">

//                     {/* <!-- CONTRACT CARD 1 --> */}
//                     <div className="col-md-6">
//                         <div className="glnc-template-card">
//                             <button className="glnc-card-triple-dot-btn context-menu-click-trigger"><i
//                                 className="bi bi-three-dots-vertical"></i></button>

//                             <div className="glnc-context-dropdown">
//                                 <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
//                                 <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
//                                     <i className="bi bi-copy"></i> Duplicate</button>
//                                 <button className="glnc-dropdown-item text-danger"><i
//                                     className="bi bi-ban"></i>Inactive</button>
//                                 <button className="glnc-dropdown-item text-success"><i
//                                     className="bi bi-check-circle"></i>Activate</button>
//                                 <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal"
//                                     data-bs-target="#deleteContracttModal"><i className="bi bi-trash"></i> Delete</button>
//                             </div>

//                             <div className="glnc-card-title-row">
//                                 <h3 className="glnc-card-title">Arts Integration Contract</h3>
//                             </div>
//                             <p className="glnc-card-subtitle">Mentorship for Arts Integration Contract and &hellip;</p>

//                             <div className="glnc-meta-matrix">
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> <span>17-01-2026</span></div>
//                                 <div className="glnc-vertical-divider"></div>
//                                 <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
//                                 <div className="glnc-meta-col"><img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" /> <span>Version
//                                     0.1</span>
//                                 </div>
//                             </div>

//                             <div className="glnc-tag-pool">
//                                 <span className="glnc-badge-tag">Art</span>
//                                 <span className="glnc-badge-tag">Integration</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-12">
//                         <div className="gl-matrix-footer-pagination">
//                             <div className="gl-pagination-left-side">
//                                 <span className="gl-pagination-lbl">Show</span>
//                                 <div className="gl-dropdown-wrapper mini-select-box">
//                                     <select className="gl-pipeline-select select-mini">
//                                         <option selected>10</option>
//                                         <option>25</option>
//                                         <option>50</option>
//                                     </select>
//                                     <i className="fas fa-chevron-down dropdown-arrow-icon"></i>
//                                 </div>
//                                 <span className="gl-pagination-counter-info">Showing 1-4 from 50 results</span>
//                             </div>

//                             <div className="gl-pagination-right-side">
//                                 <nav aria-label="Data Grid Navigation Pack">
//                                     <ul className="pagination gl-custom-pager-list">
//                                         <li className="page-item disabled">
//                                             <a className="page-link pager-trigger-prev" href="#" tabindex="-1"
//                                                 aria-disabled="true">Prev</a>
//                                         </li>
//                                         <li className="page-item active"><a className="page-link pager-num-trigger"
//                                             href="#">1</a></li>
//                                         <li className="page-item"><a className="page-link pager-num-trigger" href="#">2</a></li>
//                                         <li className="page-item"><a className="page-link pager-num-trigger" href="#">3</a></li>
//                                         <li className="page-item disabled"><span className="page-link pager-ellipsis">...</span>
//                                         </li>
//                                         <li className="page-item"><a className="page-link pager-num-trigger" href="#">10</a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link pager-trigger-next" href="#">Next</a>
//                                         </li>
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </main>
//     )
// }

// export default SowContract





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteSowTemplate from '../../components/teacher/DeleteSowTemplate';
import DeleteContractTemplate from '../../components/teacher/DeleteContractTemplate';

const SowContract = () => {
  // 1. Manage active tab with React State
  const [activeTab, setActiveTab] = useState('sow'); // 'sow' | 'contract'
  const [openDropdown, setOpenDropdown] = useState(null);

  // const dropdownRef = useRef(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown((previous) =>
      previous === dropdownId ? null : dropdownId
    )
  }

  useEffect(() => {
    const handleOutsideClick = () => {
      setOpenDropdown(null);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <main className="gl-content-body">
        {/* <!-- PRIMARY MAIN HEADER --> */}
        <div className="glnc-header-row">
          <div>
            <h1 className="glnc-page-title">SOW & Contract Templates</h1>
            <p className="glnc-page-subtitle">Manage reusable statement of work and contract templates</p>
          </div>
          <Link to="/teacher/draft" className="glnc-btn-new ms-auto me-3">
            <i className="bi bi-plus-lg"></i> SOW Drafts
          </Link>
          <Link to="/teacher/create-template" className="glnc-btn-new">
            <i className="bi bi-plus-lg"></i> New Template
          </Link>
        </div>

        {/* <!-- TABS ROW SELECTION MATRIX --> */}
        <div className="glnc-tab-pill-box">
          <button
            type="button"
            className={`glnc-tab-pill ${activeTab === 'sow' ? 'active' : ''}`}
            onClick={() => setActiveTab('sow')}
          >
            SOW Templates
          </button>
          <button
            type="button"
            className={`glnc-tab-pill ${activeTab === 'contract' ? 'active' : ''}`}
            onClick={() => setActiveTab('contract')}
          >
            Contract Templates
          </button>
        </div>

        {/* <!-- FILTER BAR INTERFACE --> */}
        <div className="filter-bar mt-4">
          <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>

          {/* <!-- Company Dropdown --> */}
          <div className="custom-select-wrapper">
            <select className="custom-select" defaultValue="all">
              <option value="all">All SOW</option>
              <option value="1">Company Alpha</option>
              <option value="2">Company Beta</option>
            </select>
          </div>

          <button type="button" className="glnc-btn-cal-icon date-width">
            <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
            Date
          </button>
        </div>
        {/* FIXED: Closed filter-bar here so panels are positioned cleanly outside it */}

        {/* ================= SOW TEMPLATES PANEL ================= */}
        {activeTab === 'sow' && (
          <div id="sow-panel" className="row g-4 tab-content-panel active-panel mt-2">
            {/* CARD 1 */}
            <div className="col-md-6">
              {/* <div className="glnc-template-card" ref={dropdownRef}> */}
              <div className="glnc-template-card">
                <button className="glnc-card-triple-dot-btn" onClick={(event) => {
                  event.stopPropagation();
                  toggleDropdown(1);
                }}>
                  <i className="bi bi-three-dots-vertical"></i>
                </button>

                <div className={`glnc-context-dropdown ${openDropdown === 1 ? 'show' : ''
                  }`}>
                  <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                  <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                    <i className="bi bi-copy"></i> Duplicate
                  </button>
                  <button className="glnc-dropdown-item text-danger"><i className="bi bi-ban"></i> Inactive</button>
                  <button className="glnc-dropdown-item text-success"><i className="bi bi-check-circle"></i> Activate</button>
                  <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal" data-bs-target="#deleteDistrictModal">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>

                <div className="glnc-card-title-row">
                  <h3 className="glnc-card-title">STEM Workshop Standard SOW</h3>
                  <span className="glnc-status-badge status-active">Active</span>
                </div>
                <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                <div className="glnc-meta-matrix">
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                    <span>17-01-2026</span>
                  </div>
                  <div className="glnc-vertical-divider"></div>
                  <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" />
                    <span>Version 0.1</span>
                  </div>
                </div>

                <div className="glnc-tag-pool">
                  <span className="glnc-badge-tag">SAT</span>
                  <span className="glnc-badge-tag">TestPrep</span>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-6">
              <div className="glnc-template-card">
                <button className="glnc-card-triple-dot-btn" onClick={(event) => {
                  event.stopPropagation();
                  toggleDropdown(2);
                }}>
                  <i className="bi bi-three-dots-vertical"></i>
                </button>

                <div className={`glnc-context-dropdown ${openDropdown === 2 ? 'show' : ''
                  }`}>
                  <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                  <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                    <i className="bi bi-copy"></i> Duplicate
                  </button>
                  <button className="glnc-dropdown-item text-danger"><i className="bi bi-ban"></i> Inactive</button>
                  <button className="glnc-dropdown-item text-success"><i className="bi bi-check-circle"></i> Activate</button>
                  <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal" data-bs-target="#deleteDistrictModal">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>

                <div className="glnc-card-title-row">
                  <h3 className="glnc-card-title">STEM Workshop Standard SOW</h3>
                  <span className="glnc-status-badge status-active">Active</span>
                </div>
                <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                <div className="glnc-meta-matrix">
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                    <span>17-01-2026</span>
                  </div>
                  <div className="glnc-vertical-divider"></div>
                  <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" />
                    <span>Version 0.2</span>
                  </div>
                </div>

                <div className="glnc-tag-pool">
                  <span className="glnc-badge-tag">SAT</span>
                  <span className="glnc-badge-tag">TestPrep</span>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-md-6">
              <div className="glnc-template-card">
                <button className="glnc-card-triple-dot-btn context-menu-click-trigger">
                  <i className="bi bi-three-dots-vertical"></i>
                </button>

                <div className="glnc-context-dropdown">
                  <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                  <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                    <i className="bi bi-copy"></i> Duplicate
                  </button>
                  <button className="glnc-dropdown-item text-danger"><i className="bi bi-ban"></i> Inactive</button>
                  <button className="glnc-dropdown-item text-success"><i className="bi bi-check-circle"></i> Activate</button>
                  <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal" data-bs-target="#deleteDistrictModal">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>

                <div className="glnc-card-title-row">
                  <h3 className="glnc-card-title">Tutoring Program SOW</h3>
                  <span className="glnc-status-badge status-active">Active</span>
                </div>
                <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                <div className="glnc-meta-matrix">
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                    <span>17-01-2026</span>
                  </div>
                  <div className="glnc-vertical-divider"></div>
                  <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" />
                    <span>Version 0.3</span>
                  </div>
                </div>

                <div className="glnc-tag-pool">
                  <span className="glnc-badge-tag">SAT</span>
                  <span className="glnc-badge-tag">TestPrep</span>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-md-6">
              <div className="glnc-template-card">
                <button className="glnc-card-triple-dot-btn context-menu-click-trigger">
                  <i className="bi bi-three-dots-vertical"></i>
                </button>

                <div className="glnc-context-dropdown">
                  <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                  <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                    <i className="bi bi-copy"></i> Duplicate
                  </button>
                  <button className="glnc-dropdown-item text-danger"><i className="bi bi-ban"></i> Inactive</button>
                  <button className="glnc-dropdown-item text-success"><i className="bi bi-check-circle"></i> Activate</button>
                  <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal" data-bs-target="#deleteDistrictModal">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>

                <div className="glnc-card-title-row">
                  <h3 className="glnc-card-title">Career Readiness SOW</h3>
                  <span className="glnc-status-badge status-draft">Draft</span>
                </div>
                <p className="glnc-card-subtitle">Mentorship for SAT strategy and practice.</p>

                <div className="glnc-meta-matrix">
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                    <span>17-01-2026</span>
                  </div>
                  <div className="glnc-vertical-divider"></div>
                  <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" />
                    <span>Version 0.4</span>
                  </div>
                </div>

                <div className="glnc-tag-pool">
                  <span className="glnc-badge-tag">SAT</span>
                  <span className="glnc-badge-tag">TestPrep</span>
                </div>
              </div>
            </div>

            {/* PAGINATION */}
            <div className="col-md-12">
              <div className="gl-matrix-footer-pagination">
                <div className="gl-pagination-left-side">
                  <span className="gl-pagination-lbl">Show</span>
                  <div className="gl-dropdown-wrapper mini-select-box">
                    <select className="gl-pipeline-select select-mini" defaultValue="10">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                    <i className="fas fa-chevron-down dropdown-arrow-icon"></i>
                  </div>
                  <span className="gl-pagination-counter-info">Showing 1-4 from 50 results</span>
                </div>

                <div className="gl-pagination-right-side">
                  <nav aria-label="Data Grid Navigation Pack">
                    <ul className="pagination gl-custom-pager-list">
                      <li className="page-item disabled">
                        <a className="page-link pager-trigger-prev" href="#" tabIndex="-1" aria-disabled="true">Prev</a>
                      </li>
                      <li className="page-item active"><a className="page-link pager-num-trigger" href="#">1</a></li>
                      <li className="page-item"><a className="page-link pager-num-trigger" href="#">2</a></li>
                      <li className="page-item"><a className="page-link pager-num-trigger" href="#">3</a></li>
                      <li className="page-item disabled"><span className="page-link pager-ellipsis">...</span></li>
                      <li className="page-item"><a className="page-link pager-num-trigger" href="#">10</a></li>
                      <li className="page-item"><a className="page-link pager-trigger-next" href="#">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CONTRACT TEMPLATES PANEL ================= */}
        {activeTab === 'contract' && (
          <div id="contract-panel" className="row g-4 tab-content-panel active-panel mt-2">
            {/* CONTRACT CARD 1 */}
            <div className="col-md-6">
              <div className="glnc-template-card">
                <button className="glnc-card-triple-dot-btn" onClick={(event) => {
                  event.stopPropagation();
                  toggleDropdown(5);
                }} >
                  <i className="bi bi-three-dots-vertical"></i>
                </button>

                <div className={`glnc-context-dropdown ${openDropdown === 5 ? 'show' : ''
                  }`}>
                  <button className="glnc-dropdown-item"><i className="bi bi-pencil"></i> Edit</button>
                  <button className="glnc-dropdown-item visibility-btn-trigger" data-template-type="SOW">
                    <i className="bi bi-copy"></i> Duplicate
                  </button>
                  <button className="glnc-dropdown-item text-danger"><i className="bi bi-ban"></i> Inactive</button>
                  <button className="glnc-dropdown-item text-success"><i className="bi bi-check-circle"></i> Activate</button>
                  <button className="glnc-dropdown-item delete-trigger" data-bs-toggle="modal" data-bs-target="#deleteContracttModal">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>

                <div className="glnc-card-title-row">
                  <h3 className="glnc-card-title">Arts Integration Contract</h3>
                </div>
                <p className="glnc-card-subtitle">Mentorship for Arts Integration Contract and &hellip;</p>

                <div className="glnc-meta-matrix">
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                    <span>17-01-2026</span>
                  </div>
                  <div className="glnc-vertical-divider"></div>
                  <div className="glnc-meta-col"><i className="bi bi-clock"></i> <span>Estimate 40h</span></div>
                  <div className="glnc-meta-col">
                    <img src="/images/teacher/super-user-dashboard/version-icon.svg" alt="" />
                    <span>Version 0.1</span>
                  </div>
                </div>

                <div className="glnc-tag-pool">
                  <span className="glnc-badge-tag">Art</span>
                  <span className="glnc-badge-tag">Integration</span>
                </div>
              </div>
            </div>

            {/* PAGINATION */}
            <div className="col-md-12">
              <div className="gl-matrix-footer-pagination">
                <div className="gl-pagination-left-side">
                  <span className="gl-pagination-lbl">Show</span>
                  <div className="gl-dropdown-wrapper mini-select-box">
                    <select className="gl-pipeline-select select-mini" defaultValue="10">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                    <i className="fas fa-chevron-down dropdown-arrow-icon"></i>
                  </div>
                  <span className="gl-pagination-counter-info">Showing 1-1 from 1 results</span>
                </div>

                <div className="gl-pagination-right-side">
                  <nav aria-label="Data Grid Navigation Pack">
                    <ul className="pagination gl-custom-pager-list">
                      <li className="page-item disabled">
                        <a className="page-link pager-trigger-prev" href="#" tabIndex="-1" aria-disabled="true">Prev</a>
                      </li>
                      <li className="page-item active"><a className="page-link pager-num-trigger" href="#">1</a></li>
                      <li className="page-item"><a className="page-link pager-trigger-next" href="#">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <DeleteSowTemplate />
      <DeleteContractTemplate />
    </>
  );
};

export default SowContract;