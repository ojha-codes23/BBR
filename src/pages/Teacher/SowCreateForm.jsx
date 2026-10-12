import React from 'react'
import { Link } from 'react-router-dom'

const SowCreateForm = () => {
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
                    <span className="meta-label d-block" style={{fontSize: "15px", color:"#344054"}}>Service Tracker</span>

                    <div className="tracker-scroll-container">
                        <div className="tracker-wrapper">

                            {/* <!-- Step 1: Pending (Completed) --> */}
                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Pending</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 2: Request Accepted (Completed) --> */}
                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Request Accepted</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 3: Call Discussion (Completed) --> */}
                            <div className="tracker-item completed">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">Call Discussion</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 4: SOW Created (ACTIVE CURRENT PAGE) --> */}
                            <div className="tracker-item active">
                                <div className="tracker-icon-circle"><i className="bi bi-check2-circle"></i></div>
                                <span className="tracker-label">SOW Created</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 5: Awaiting Revision / SOW Revised --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Awaiting Revision / SOW Revised</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 6: SOW Approved --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">SOW Approved</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 7: Agreement Signed --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Agreement Signed</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 8: Payment Completed --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Payment Completed</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 9: In Progress --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">In Progress</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 10: Completed --> */}
                            <div className="tracker-item">
                                <div className="tracker-icon-circle"></div>
                                <span className="tracker-label">Completed</span>
                            </div>
                            <div className="tracker-line-divider"></div>

                            {/* <!-- Step 11: Review & Feedback --> */}
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
                        <h2 className="section-main-heading">Service Agreement (SOW)</h2>
                        <p className="section-sub-heading">Sent by Sarah Johnson. Please fill, review, sign and submit
                            to activate your service.</p>
                    </div>
                    <Link to="/teacher/sow-contract" className="glnc-btn-new ms-auto me-3">
                        <i className="fa-regular fa-eye"></i>
                        View Templates
                    </Link>
                    <a href="sow-drafts.html" className="glnc-btn-new">
                        <i className="fa-regular fa-floppy-disk"></i>
                        Draft
                    </a>
                </div>


                {/* <!-- Main Inner Scheduled Call Details Box Card Block --> */}
                <div className="sow-form-container">

                    <div className="form-header-row border-bottom-0 pb-0">
                        <h2 className="form-main-title">SOW Details</h2>
                        <a href="#" className="edit-action-link">
                            <i className="fa-regular fa-pen-to-square"></i> Edit
                        </a>
                    </div>

                    <div className="custom-alert alert-error-custom align-items-start">
                        <i className="fa-solid fa-circle-xmark"></i>
                        <div>
                            The submitted SOW requires revisions to align with funding guidelines and program
                            expectations. Some sections are incomplete or need clarification.
                            <br />
                                <br />
                                    Detailed Feedback:
                                    <br />
                                        <br />
                                            • Budget breakdown is not detailed enough
                                            <br />
                                                • Session outcomes are not clearly defined
                                                <br />
                                                    • Timeline needs adjustment to match program duration
                                                    <br />
                                                        • Missing supporting documents
                                                        <br />
                                                        </div>
                                                    </div>

                                                    {/* <!-- Fields Input Core Grid Layout --> */}
                                                    <div className="row g-4 mb-4">
                                                        <div className="col-md-4">
                                                            <label className="custom-form-label">Service Type</label>
                                                            <div className="select-wrapper">
                                                                <select className="form-input-field select-box" style={{color: "#98A2B3"}}>
                                                                    <option>One to One Coaching</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="custom-form-label">Estimated Hours</label>
                                                            <input type="text" className="form-input-field" placeholder="20" value="20" />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="custom-form-label">Set Price</label>
                                                            <div className="input-with-icon-right">
                                                                <input type="text" className="form-input-field" placeholder="20" value="20" />
                                                                    <i className="fa-solid fa-dollar-sign"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Date Rows --> */}
                                                    <div className="row g-4 mb-4">
                                                        <div className="col-md-6">
                                                            <label className="custom-form-label">Start Date</label>
                                                            <div className="input-with-icon-right">
                                                                <input type="text" className="form-input-field" placeholder="12-12-2025"
                                                                    value="12-12-2025" style={{color:"#98A2B3"}} />
                                                                    <i className="fa-regular fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="custom-form-label">End Date</label>
                                                            <div className="input-with-icon-right">
                                                                <input type="text" className="form-input-field" placeholder="12-20-2025"
                                                                    value="12-20-2025" style={{color:"#98A2B3"}} />
                                                                    <i className="fa-regular fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Description --> */}
                                                    <div className="mb-4">
                                                        <label className="custom-form-label">Description</label>
                                                        <textarea className="form-textarea-field"
                                                            placeholder="SAT preparation program covering all test sections.">SAT preparation program covering all test sections.</textarea>
                                                    </div>

                                                    {/* <!-- Deliverables List Module Blocks --> */}
                                                    <div className="mb-4">
                                                        <label className="custom-form-label">Deliverables</label>

                                                        <div className="deliverable-item-row">
                                                            <input type="text" className="form-input-field deliverable-input"
                                                                placeholder="Weekly practice tests" value="Weekly practice tests"
                                                                style={{color:"#98A2B3"}} />
                                                                <input type="text" className="form-input-field hours-badge-input" placeholder="8 Hours"
                                                                    value="8 Hours" />
                                                                </div>
                                                                <div className="deliverable-item-row">
                                                                    <input type="text" className="form-input-field deliverable-input"
                                                                        placeholder="Study materials" value="Study materials" style={{color:"#98A2B3"}} />
                                                                        <input type="text" className="form-input-field hours-badge-input" placeholder="8 Hours"
                                                                            value="8 Hours" />
                                                                        </div>
                                                                        <div className="deliverable-item-row">
                                                                            <input type="text" className="form-input-field deliverable-input"
                                                                                placeholder="Progress reports" value="Progress reports" style={{color:"#98A2B3"}} />
                                                                                <input type="text" className="form-input-field hours-badge-input" placeholder="8 Hours"
                                                                                    value="8 Hours" />
                                                                                </div>
                                                                                <div className="deliverable-item-row">
                                                                                    <input type="text" className="form-input-field deliverable-input"
                                                                                        placeholder="Deliverable 4" value="Deliverable 4" style={{color:"#98A2B3"}} />
                                                                                        <input type="text" className="form-input-field hours-badge-input" placeholder="8 Hours"
                                                                                            value="8 Hours" />
                                                                                        </div>
                                                                                </div>

                                                                                {/* <!-- File Attachments Zone --> */}
                                                                                <div className="mb-4">
                                                                                    <label className="custom-form-label">File Attachments</label>
                                                                                    <div className="upload-dashed-zone">
                                                                                        <div className="upload-icon-cloud">
                                                                                            <i className="fa-solid fa-upload"></i>
                                                                                        </div>
                                                                                        <p className="upload-text-prompt">Drag and drop files here, or click to browse</p>
                                                                                    </div>
                                                                                </div>

                                                                                {/* <!-- Teacher E-Signature Wrapper Node --> */}
                                                                                <div className="mb-4">
                                                                                    <label className="custom-form-label">Teacher E-Signature</label>
                                                                                    <div className="signature-outer-wrapper">
                                                                                        <p className="signature-notice-text">By signing below, I confirm that this Scope of Work
                                                                                            accurately represents the agreed-upon services.</p>
                                                                                        <div className="signature-pad-white-box">
                                                                                            <img src="/images/teacher/click-point.svg" alt="" className="mb-2" />
                                                                                                <span>Click to sign</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                {/* <!-- Footer Control Panel Buttons Panel Element --> */}
                                                                                <div className="form-action-footer-panel">
                                                                                    {/* <!-- BOTH BUTTONS CONVERTED TO ANCHOR TAGS (<a>) --> */}
                                                                                    <a href="sow-drafts.html" className="btn-anchor-draft">
                                                                                        <i className="bi bi-floppy"></i> Save Draft
                                                                                    </a>
                                                                                    <Link to="/teacher/sow-approval" className="btn-anchor-submit">
                                                                                        <i className="fa-regular fa-paper-plane"></i> Request Approval
                                                                                    </Link>
                                                                                </div>

                                                                        </div>
                                                                </div>

                                                            </main>
                                                            )
}

                                                            export default SowCreateForm