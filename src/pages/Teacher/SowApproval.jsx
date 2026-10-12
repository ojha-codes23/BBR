import React from 'react'
import { Link } from 'react-router-dom'

const SowApproval = () => {
  return (
    <main class="content">
    <div>

        {/* <!-- Top Title Bar Segment --> */}
        <div class="header-section">
            <a href="requests-management-user-profile.html" class="back-arrow-btn">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <div>
                <h1 class="header-title">SOW Details</h1>
                <p class="header-subtitle">Career planning and skill development guidance</p>
            </div>
        </div>

        {/* <!-- Service Tracker Stepper Progress Card Layout with Horizontal Left-to-Right Scroll --> */}
        <div class="custom-card">
            <span class="custom-form-label mb-0" style={{fontSize: "15px", color: "#344054"}}>Service
                Tracker</span>

            <div class="tracker-scroll-container">
                <div class="tracker-wrapper">

                    <div class="tracker-item completed">
                        <div class="tracker-icon-circle"><i class="bi bi-check2-circle"></i></div>
                        <span class="tracker-label">Pending</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item completed">
                        <div class="tracker-icon-circle"><i class="bi bi-check2-circle"></i></div>
                        <span class="tracker-label">Request Accepted</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item completed">
                        <div class="tracker-icon-circle"><i class="bi bi-check2-circle"></i></div>
                        <span class="tracker-label">Call Discussion</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item completed">
                        <div class="tracker-icon-circle"><i class="bi bi-check2-circle"></i></div>
                        <span class="tracker-label">SOW Created</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item completed">
                        <div class="tracker-icon-circle"><i class="bi bi-check2-circle"></i></div>
                        <span class="tracker-label">Awaiting Revision / SOW Revised</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    {/* <!-- Step 6: SOW Approved (ACTIVE CURRENT PAGE) --> */}
                    <div class="tracker-item active">
                        <div class="tracker-icon-circle"><i class="bi bi-check2-circle"></i></div>
                        <span class="tracker-label">SOW Approved</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item">
                        <div class="tracker-icon-circle"></div>
                        <span class="tracker-label">Agreement Signed</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item">
                        <div class="tracker-icon-circle"></div>
                        <span class="tracker-label">Payment Completed</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item">
                        <div class="tracker-icon-circle"></div>
                        <span class="tracker-label">In Progress</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item">
                        <div class="tracker-icon-circle"></div>
                        <span class="tracker-label">Completed</span>
                    </div>
                    <div class="tracker-line-divider"></div>

                    <div class="tracker-item">
                        <div class="tracker-icon-circle"></div>
                        <span class="tracker-label">Review & Feedback</span>
                    </div>

                </div>
            </div>
        </div>

        {/* <!-- Section Info Area Title --> */}
        <div class="sow-sec-head">
            <div class="sow-sec-head-in">
                <h2 class="section-main-heading">Final Service Agreement (SOW)</h2>
                <p class="section-sub-heading">Sent by Sarah Johnson. Please fill, review, sign and submit
                    to activate your service.
                </p>
            </div>
            <Link to="/teacher/sow-contract" class="glnc-btn-new ms-auto me-3">
                <i class="fa-regular fa-eye"></i>
                View Templates
            </Link>
            <Link to="/teacher/draft" class="glnc-btn-new">
                <i class="fa-regular fa-floppy-disk"></i>
                Draft
            </Link>
        </div>


        {/* <!-- Main Inner Scheduled Call Details Box Card Block --> */}

        <div class="sow-form-container">

            <div class="form-header-row border-bottom-0 pb-0">
                <h2 class="form-main-title">SOW Details</h2>
                <a href="#" class="edit-action-link">
                    <i class="fa-regular fa-pen-to-square"></i> Edit
                </a>
            </div>

            {/* <!-- Approved Status Banner --> */}
            <div class="approved-alert-banner">
                <i class="fa-regular fa-circle-check"></i>
                <span>SOW Approved by District Admin/ Funder.</span>
            </div>

            {/* <!-- Fields Inputs --> */}
            <div class="row g-4 mb-4">
                <div class="col-md-4">
                    <label class="custom-form-label">Service Type</label>
                    <div class="select-wrapper">
                        <select class="form-input-field select-box" style={{color: "#98A2B3"}}>
                            <option>SAT Prep</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <label class="custom-form-label">Estimated Hours</label>
                    <input type="text" class="form-input-field" value="20" style={{color: "#98A2B3"}} />
                </div>
                <div class="col-md-4">
                    <label class="custom-form-label">Set Price</label>
                    <div class="input-with-icon-right">
                        <input type="text" class="form-input-field" value="20" style={{color: "#98A2B3"}} />
                        <i class="fa-solid fa-dollar-sign"></i>
                    </div>
                </div>
            </div>

            <div class="row g-4 mb-4">
                <div class="col-md-6">
                    <label class="custom-form-label">Start Date</label>
                    <div class="input-with-icon-right">
                        <input type="text" class="form-input-field" value="12-12-2025"
                            style={{color:"#98A2B3"}} />
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="custom-form-label">End Date</label>
                    <div class="input-with-icon-right">
                        <input type="text" class="form-input-field" value="12-20-2025"
                            style={{color:"#98A2B3"}} />
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <label class="custom-form-label">Description</label>
                <textarea class="form-textarea-field"
                    style={{color: "#98A2B3"}}>SAT preparation program covering all test sections.</textarea>
            </div>

            {/* <!-- Deliverables --> */}
            <div class="mb-4">
                <label class="custom-form-label">Deliverables</label>
                <div class="deliverable-item-row">
                    <input type="text" class="form-input-field deliverable-input"
                        value="Weekly practice tests" style={{color:"#98A2B3"}} />
                    <input type="text" class="form-input-field hours-badge-input" value="8 Hours" />
                </div>
                <div class="deliverable-item-row">
                    <input type="text" class="form-input-field deliverable-input" value="Study materials"
                        style={{color:"#98A2B3"}} />
                    <input type="text" class="form-input-field hours-badge-input" value="8 Hours" />
                </div>
                <div class="deliverable-item-row">
                    <input type="text" class="form-input-field deliverable-input" value="Progress reports"
                        style={{color:"#98A2B3"}} />
                    <input type="text" class="form-input-field hours-badge-input" value="8 Hours" />
                </div>
                <div class="deliverable-item-row">
                    <input type="text" class="form-input-field deliverable-input" value="Deliverable 4"
                        style={{color:"#98A2B3"}} />
                    <input type="text" class="form-input-field hours-badge-input" value="8 Hours" />
                </div>
            </div>

            <div class="mb-4">
                <label class="custom-form-label">File Attachments</label>
                <div class="upload-dashed-zone">
                    <div class="upload-icon-cloud"><i class="fa-solid fa-upload"></i></div>
                    <p class="upload-text-prompt">Drag and drop files here, or click to browse</p>
                </div>
            </div>

            {/* <!-- Language Section Accordion Card Box --> */}
            <div class="collapsible-section-card">
                <div class="collapsible-header">
                    <span>Language Access & Communication Needs</span>
                    <i class="fa-solid fa-minus"></i>
                </div>
                <div class="collapsible-body">
                    <div class="mb-3">
                        <label class="custom-form-label" style={{fontWeight:"500", color:"#344054"}}>Written
                            Language(s) for
                            Instruction</label>
                        <input type="text" class="form-input-field" placeholder="e.g. English, Spanish" />
                    </div>
                    <div class="mb-3">
                        <label class="custom-form-label" style={{fontWeight:"500", color:"#344054"}}>Spoken
                            Language(s)
                            Preferred</label>
                        <input type="text" class="form-input-field" placeholder="e.g. English, ASL" />
                    </div>
                    <div class="mb-3">
                        <label class="custom-form-label"
                            style={{fontWeight:"500", color:"#344054"}}>Interpretation
                            Required?</label>
                        <div class="select-wrapper">
                            <select class="form-input-field select-box" style={{color:"#98A2B3"}}>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="custom-form-label" style={{fontWeight:"500", color:"#344054"}}>Additional
                            Language or
                            Communication Needs</label>
                        <textarea class="form-textarea-field"
                            placeholder="Describe any additional accommodations..."
                            style={{height:"80px"}}></textarea>
                    </div>
                </div>
            </div>

            {/* <!-- Teacher E-Signature Wrapper --> */}
            <div class="mb-4">
                <label class="custom-form-label">Teacher E-Signature</label>
                <div class="signature-outer-wrapper">
                    <p class="signature-notice-text">By signing below, I confirm that this Scope of Work
                        accurately
                        represents the agreed-upon services.</p>
                    <div class="signature-pad-white-box">
                        <i class="fa-regular fa-hand-pointer"></i>
                        <span>Click to sign</span>
                    </div>
                </div>
            </div>

            {/* <!-- Action Panel --> */}
            <div class="form-action-footer-panel border-top-0 pt-0">
                <a href="sow-drafts.html" class="btn-anchor-draft">
                    <i class="fa-regular fa-file-lines"></i> Save Draft
                </a>
                <Link to="/teacher/sow-signature" class="btn-anchor-submit" style={{backgroundColor: "#0076B2"}}>
                    <i class="fa-regular fa-paper-plane"></i> Request Grantee Signature
                </Link>
            </div>

        </div>

    </div>

</main>
  )
}

export default SowApproval