import React from 'react'

const Mycertificate = () => {
  return (
    <>
        <main className="my-certificates-wrp">
                <div className="container">

                    {/* <!-- TOP TITLE HEADER GROUP --> */}
                    <div className="mb-4">
                        <h1 className="page-title">My Certificates</h1>
                        <p className="page-subtitle">Browse webinars, workshops, coaching groups, and live sessions. Filter
                            by tags, language, region, date and topic.</p>
                    </div>

                    {/* <!-- FILTERS AND CONTROLS ROW --> */}
                    <div className="my-certificates-filter d-flex justify-content-between align-items-center mb-4">
                        <div className="search-wrapper">
                            <i className="bi bi-search"></i>
                            <input type="text" className="search-input" placeholder="Search"/>
                        </div>
                        <div className="d-flex filter-btn-grp">
                            <button className="btn-download-cert">
                                <i className="bi bi-download"></i> Download All
                            </button>
                            <button className="filter-dropdown-btn">
                                <span>Category (All)</span>
                                <i className="bi bi-chevron-down"></i>
                            </button>
                        </div>
                    </div>

                    {/* <!-- CERTIFICATES GRID MATRIX (3 COLUMNS) --> */}
                    <div className="row g-4 mb-5">

                        {/* <!-- CARD 1 --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="certificate-card">
                                <div className="circle-indicator"></div>
                                <div className="icon-blue-box">
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <h3 className="cert-title">Self-Awareness Assessment Complete</h3>
                                <p className="cert-meta-text">Score: 80%</p>
                                <p className="cert-meta-text mb-4">Issued: 02-02-2025</p>
                                <button className="btn-download-cert">
                                    <i className="bi bi-download"></i> Download Certificate
                                </button>
                            </div>
                        </div>

                        {/* <!-- CARD 2 --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="certificate-card">
                                <div className="circle-indicator"></div>
                                <div className="icon-blue-box">
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <h3 className="cert-title">Self-Awareness Assessment Complete</h3>
                                <p className="cert-meta-text">Score: 80%</p>
                                <p className="cert-meta-text mb-4">Issued: 02-02-2025</p>
                                <button className="btn-download-cert">
                                    <i className="bi bi-download"></i> Download Certificate
                                </button>
                            </div>
                        </div>

                        {/* <!-- CARD 3 --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="certificate-card">
                                <div className="circle-indicator"></div>
                                <div className="icon-blue-box">
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <h3 className="cert-title">Self-Awareness Assessment Complete</h3>
                                <p className="cert-meta-text">Score: 80%</p>
                                <p className="cert-meta-text mb-4">Issued: 02-02-2025</p>
                                <button className="btn-download-cert">
                                    <i className="bi bi-download"></i> Download Certificate
                                </button>
                            </div>
                        </div>

                        {/* <!-- CARD 4 --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="certificate-card">
                                <div className="circle-indicator"></div>
                                <div className="icon-blue-box">
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <h3 className="cert-title">Self-Awareness Assessment Complete</h3>
                                <p className="cert-meta-text">Score: 80%</p>
                                <p className="cert-meta-text mb-4">Issued: 02-02-2025</p>
                                <button className="btn-download-cert">
                                    <i className="bi bi-download"></i> Download Certificate
                                </button>
                            </div>
                        </div>

                        {/* <!-- CARD 5 --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="certificate-card">
                                <div className="circle-indicator"></div>
                                <div className="icon-blue-box">
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <h3 className="cert-title">Self-Awareness Assessment Complete</h3>
                                <p className="cert-meta-text">Score: 80%</p>
                                <p className="cert-meta-text mb-4">Issued: 02-02-2025</p>
                                <button className="btn-download-cert">
                                    <i className="bi bi-download"></i> Download Certificate
                                </button>
                            </div>
                        </div>

                        {/* <!-- CARD 6 --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="certificate-card">
                                <div className="circle-indicator"></div>
                                <div className="icon-blue-box">
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <h3 className="cert-title">Self-Awareness Assessment Complete</h3>
                                <p className="cert-meta-text">Score: 80%</p>
                                <p className="cert-meta-text mb-4">Issued: 02-02-2025</p>
                                <button className="btn-download-cert">
                                    <i className="bi bi-download"></i> Download Certificate
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* <!-- BOTTOM CONTROLS & PAGINATION ROW --> */}
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 border-top pt-4">
                        {/* <!-- Left Item Count Control --> */}
                        <div className="d-flex align-items-center gap-2 small text-muted">
                            <span>Show</span>
                            <select className="show-select">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                            <span className="ms-1">Showing 1-4 from 50 results</span>
                        </div>

                        {/* <!-- Right Pagination Links --> */}
                        <div className="custom-pagination d-flex align-items-center gap-2">
                            <button className="btn btn-nav-page" disabled>Prev</button>
                            <a href="#" className="page-circle active">1</a>
                            <a href="#" className="page-circle">2</a>
                            <a href="#" className="page-circle">3</a>
                            <span className="text-muted px-1">...</span>
                            <a href="#" className="page-circle">10</a>
                            <button className="btn btn-nav-page next-active">Next</button>
                        </div>
                        {/* <!-- BOTTOM CONTROLS & PAGINATION ROW --> */}
                    </div>

                    <div className="related-resources-wrp">
                        <div className="related-resources-head d-flex justify-content-between align-items-center mb-4 px-2">
                            <h2 className="section-title">Related Resources</h2>
                            <a href="#" className="view-all-link">View All <i className="bi bi-arrow-right"></i></a>
                        </div>

                        <div className="row g-4">

                            <div className="col-lg-4 col-md-6">
                                <div className="resource-card">
                                    <div className="card-img-container">
                                        <span className="floating-timer"><i className="bi bi-clock"></i> 12d 3h left</span>
                                        <i className="bi bi-heart floating-heart"></i>
                                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
                                            alt="Resource placeholder"/>
                                    </div>
                                    <div className="card-body-content">
                                        <div className="pill-badges-row">
                                            <span className="resource-badge">Parents</span>
                                            <span className="resource-badge">Family Engagement</span>
                                            <span className="resource-badge">Planning</span>
                                        </div>
                                        <p className="resource-description">Resources for schools to engage families in
                                            multiple
                                            languages, including flyers, surveys, and event templates.</p>

                                        <div className="meta-info-list">
                                            <div className="meta-item"><i className="bi bi-calendar3"></i>
                                                <div><span className="meta-label">Deadline:</span> <span
                                                        className="meta-val">Next
                                                        30 days</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-cash-stack"></i>
                                                <div><span className="meta-label">Award:</span> <span
                                                        className="meta-val">$10,000 -
                                                        $5,000</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-briefcase"></i>
                                                <div><span className="meta-label">Eligibility:</span> <span
                                                        className="meta-val">Nonprofits, Forprofits</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-grid"></i>
                                                <div><span className="meta-label">Type:</span> <span
                                                        className="meta-val">Federal</span></div>
                                            </div>
                                        </div>

                                        <div className="card-actions-wrapper">
                                            <button className="btn-view-details">View Details <i
                                                    className="bi bi-arrow-right"></i></button>
                                            <button className="btn-share-node"><i className="bi bi-reply-fill"
                                                    style={{ transform: "scaleX(-1)", display: "inline-block" }}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="resource-card">
                                    <div className="card-img-container">
                                        <i className="bi bi-heart-fill floating-heart liked"></i>
                                        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
                                            alt="Resource placeholder"/>
                                    </div>
                                    <div className="card-body-content">
                                        <div className="pill-badges-row">
                                            <span className="resource-badge">Community</span>
                                            <span className="resource-badge">Assessment</span>
                                            <span className="resource-badge">Planning</span>
                                        </div>
                                        <p className="resource-description">Step-by-step guide for conducting community
                                            needs
                                            assessments and collecting stakeholder input.</p>

                                        <div className="meta-info-list">
                                            <div className="meta-item"><i className="bi bi-calendar3"></i>
                                                <div><span className="meta-label">Deadline:</span> <span
                                                        className="meta-val">Next
                                                        30 days</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-cash-stack"></i>
                                                <div><span className="meta-label">Award:</span> <span
                                                        className="meta-val">$10,000 -
                                                        $5,000</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-briefcase"></i>
                                                <div><span className="meta-label">Eligibility:</span> <span
                                                        className="meta-val">Nonprofits, Forprofits</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-grid"></i>
                                                <div><span className="meta-label">Type:</span> <span
                                                        className="meta-val">Federal</span></div>
                                            </div>
                                        </div>

                                        <div className="card-actions-wrapper">
                                            <button className="btn-view-details">View Details <i
                                                    className="bi bi-arrow-right"></i></button>
                                            <button className="btn-share-node"><i className="bi bi-reply-fill"
                                                    style={{ transform: "scaleX(-1)", display: "inline-block" }}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="resource-card">
                                    <div className="card-img-container">
                                        <i className="bi bi-heart floating-heart"></i>
                                        <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop"
                                            alt="Resource placeholder"/>
                                    </div>
                                    <div className="card-body-content">
                                        <div className="pill-badges-row">
                                            <span className="resource-badge">Literacy</span>
                                            <span className="resource-badge">Family</span>
                                            <span className="resource-badge">Spanish</span>
                                        </div>
                                        <p className="resource-description">Materiales y actividades para promover la
                                            alfabetización en familias de habla hispana.</p>

                                        <div className="meta-info-list">
                                            <div className="meta-item"><i className="bi bi-calendar3"></i>
                                                <div><span className="meta-label">Deadline:</span> <span
                                                        className="meta-val">Next
                                                        30 days</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-cash-stack"></i>
                                                <div><span className="meta-label">Award:</span> <span
                                                        className="meta-val">$10,000 -
                                                        $5,000</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-briefcase"></i>
                                                <div><span className="meta-label">Eligibility:</span> <span
                                                        className="meta-val">Nonprofits, Forprofits</span></div>
                                            </div>
                                            <div className="meta-item"><i className="bi bi-grid"></i>
                                                <div><span className="meta-label">Type:</span> <span
                                                        className="meta-val">Federal</span></div>
                                            </div>
                                        </div>

                                        <div className="card-actions-wrapper">
                                            <button className="btn-view-details">View Details <i
                                                    className="bi bi-arrow-right"></i></button>
                                            <button className="btn-share-node"><i className="bi bi-reply-fill"
                                                    style={{ transform: "scaleX(-1)", display: "inline-block" }}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
    
        </main>
    </>
  )
}

export default Mycertificate
