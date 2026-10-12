import React from 'react'
import { Link } from 'react-router-dom'

const SowSignature = () => {
    return (
        <main className="content">
            <div>

                {/* <!-- Top Title Bar Segment --> */}
                <div className="header-section">
                    <a href="requests-management-user-profile.html" className="back-arrow-btn">
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <div>
                        <h1 className="header-title">SOW Details</h1>
                        <p className="header-subtitle">Career planning and skill development guidance</p>
                    </div>
                </div>

                {/* <!-- Service Tracker Stepper Progress Card Layout with Horizontal Left-to-Right Scroll --> */}
                <div className="custom-card">
                    <span className="custom-form-label mb-0" style={{fontSize: "15px", color: "#344054"}}>Service
                        Tracker</span>

                    <div className="tracker-scroll-container">
                        <div className="tracker-wrapper">

                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Pending</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Request Accepted</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Call Discussion</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">SOW Created</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Awaiting Revision / SOW Revised</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">SOW Approved</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 7: Agreement Signed (ACTIVE CURRENT PAGE) --> */}
                            <div className="tracker-item active">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Agreement Signed</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Payment Completed</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">In Progress</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Completed</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Review & Feedback</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Section Info Area Title --> */}
                <div className="sow-sec-head">
                    <div className="sow-sec-head-in">
                        <h2 className="section-main-heading">Signed Agreement</h2>
                        <p className="section-sub-heading">Sent by Sarah Johnson. Please fill, review, sign and submit
                            to activate your service.
                        </p>
                    </div>

                </div>


                {/* <!-- Main Inner Scheduled Call Details Box Card Block --> */}

                <div className="sow-form-container">

                    <div className="content-main-header border-bottom-0 pb-0">
                        <div className="blue-icon-box">
                            <i className="fa-regular fa-file-lines"></i>
                        </div>
                        <h2 className="content-main-title">Signed Agreement</h2>
                    </div>

                    {/* <!-- Quad Details Header Row View --> */}
                    <div className="row mb-2">
                        <div className="col-md-3 col-sm-6">
                            <div className="custom-form-label">Service Type</div>
                            <div className="text-value-display">SAT Prep</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="custom-form-label">Estimated Hours:</div>
                            <div className="text-value-display">24</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="custom-form-label">Start Date:</div>
                            <div className="text-value-display">03-01-2026</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="custom-form-label">End Date:</div>
                            <div className="text-value-display">04-15-2026</div>
                        </div>
                    </div>

                    {/* <!-- Description Segment Box --> */}
                    <div className="mb-4">
                        <div className="custom-form-label">Description</div>
                        <p className="description-block-text">
                            This initial consultation session is scheduled to understand the User’s specific
                            requirements for the web development service. We will discuss project goals, target
                            audience, required features, timeline, budget expectations, and any design preferences.
                            By the end of the session, we aim to define clear project objectives and outline the
                            next steps for successful implementation.
                        </p>
                    </div>

                    {/* <!-- Deliverables Form Inputs Disabled Stack Grid --> */}
                    <div className="mb-4">
                        <div className="custom-form-label">Deliverables</div>

                        <div className="deliverable-item-row">
                            <input type="text" className="form-disabled-display" value="Weekly practice tests" readOnly />
                            <input type="text" className="form-disabled-display hours-badge-display" value="8 Hours"
                                readOnly />
                        </div>
                        <div className="deliverable-item-row">
                            <input type="text" className="form-disabled-display" value="Study materials" readOnly />
                            <input type="text" className="form-disabled-display hours-badge-display" value="8 Hours"
                                readOnly />
                        </div>
                        <div className="deliverable-item-row">
                            <input type="text" className="form-disabled-display" value="Progress reports" readOnly />
                            <input type="text" className="form-disabled-display hours-badge-display" value="8 Hours"
                                readOnly />
                        </div>
                        <div className="deliverable-item-row">
                            <input type="text" className="form-disabled-display" value="Deliverable 4" readOnly />
                            <input type="text" className="form-disabled-display hours-badge-display" value="8 Hours"
                                readOnly />
                        </div>
                    </div>

                    {/* <!-- Attached Documents Chips Node --> */}
                    <div className="mb-2">
                        <div className="custom-form-label">File Attachments</div>
                        <div className="attachments-flex-wrapper">
                            <a href="#" className="file-chip-link">
                                <i className="fa-solid fa-paperclip"></i> syllabus.pdf
                            </a>
                            <a href="#" className="file-chip-link">
                                <i className="fa-solid fa-paperclip"></i> syllabus.pdf
                            </a>
                        </div>
                    </div>

                    {/* <!-- Language Access Fields list rendering --> */}
                    <div className="mb-2">
                        <div className="custom-form-label" style={{fontSize: "15px"}}>Language Access & Communication
                            Needs</div>
                        <ul className="language-data-list">
                            <li>
                                <span className="language-inner-title">Written Language(s) for Instruction:</span>
                                <span className="language-inner-val">English</span>
                            </li>
                            <li>
                                <span className="language-inner-title">Spoken Language(s) Preferred:</span>
                                <span className="language-inner-val">English</span>
                            </li>
                            <li>
                                <span className="language-inner-title">Interpretation Required?:</span>
                                <span className="language-inner-val">No</span>
                            </li>
                            <li>
                                <span className="language-inner-title">Additional Language or Communication
                                    Needs:</span>
                                <span className="language-inner-val">No additional accommodations required at this
                                    time.</span>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Teacher Digital Signature Node Block --> */}
                    <div className="mb-4">
                        <div className="custom-form-label">Teacher E-Signature:</div>
                        <div className="signature-box-display">
                            <span className="signature-font-render">Jessica Taylor</span>
                        </div>
                    </div>

                    {/* <!-- User Digital Signature Node Block --> */}
                    <div className="mb-2">
                        <div className="custom-form-label">User E-Signature:</div>
                        <div className="signature-box-display">
                            <span className="signature-font-render">Jessica Taylor</span>
                        </div>
                    </div>

                    {/* <!-- Action Panel --> */}
                    <div className="form-action-footer-panel border-top-0 pt-0">
                        <Link to="/teacher/sow-payment" className="btn-anchor-submit" style={{backgroundColor: "#0076B2"}}>
                            Request Payment
                        </Link>
                    </div>

                </div>

            </div>

        </main>
    )
}

export default SowSignature