import React from 'react'

const CreateNewTemplate = () => {
  return (
    <main class="gl-content-body">
    <div class="template-master-wrapper">

        {/* <!-- Top Navigation Actions Row Header --> */}
        <header class="template-header-action-row">
            <a href="sow-contract.html" class="btn-circle-back-navigation">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <div class="header-title-meta-group">
                <h1>Create New Template</h1>
                <p>Career planning and skill development guidance</p>
            </div>
        </header>

        {/* <!-- Master Scope Work Document Panel Form --> */}
        <main class="sow-container-card">
            <form onsubmit="event.preventDefault();">

                {/* <!-- Block 1 Header Actions --> */}
                <div class="section-headline-bar">
                    <h2 class="section-panel-main-title">SOW Details</h2>
                    <button type="button" class="btn-cancel-edit-action">
                        <i class="fa-regular fa-pen-to-square"></i> Cancel Edit
                    </button>
                </div>

                {/* <!-- Block 1 Form Inputs Row 1 --> */}
                <div class="row">
                    <div class="col-md-6">
                        <div class="field-group-container">
                            <label class="field-input-label">Service Type</label>
                            <div class="input-relative-glyph-wrapper">
                                <select class="custom-form-field-control"
                                    style={{
                                        color: "#98A2B3",
                                        appearance: "none",
                                        WebkitAppearance: "none"
                                      }}>
                                    <option selected disabled>One to One Coaching</option>
                                    <option>Group Workshop</option>
                                    <option>Consulting Session</option>
                                </select>
                                <i class="fa-solid fa-chevron-down"
                                    style={{fontSize: "13px", color: "var(--text-muted)"}}></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="field-group-container">
                            <label class="field-input-label">Estimated Hours</label>
                            <input type="text" class="custom-form-field-control" placeholder="20"
                                style={{color:"#98A2B3"}} />
                        </div>
                    </div>
                </div>

                {/* <!-- Block 1 Form Inputs Row 2 --> */}
                <div class="row">
                    <div class="col-md-6">
                        <div class="field-group-container">
                            <label class="field-input-label">Start Date</label>
                            <div class="input-relative-glyph-wrapper">
                                <input type="text" class="custom-form-field-control"
                                    placeholder="12-12-2025" style={{color:"#98A2B3"}} />
                                <i><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="field-group-container">
                            <label class="field-input-label">End Date</label>
                            <div class="input-relative-glyph-wrapper">
                                <input type="text" class="custom-form-field-control"
                                    placeholder="12-20-2025" style={{color:"#98A2B3"}} />
                                <i><img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Description Frame Input --> */}
                <div class="field-group-container mb-4">
                    <label class="field-input-label">Description</label>
                    <textarea class="custom-form-field-control" rows="3"
                        placeholder="SAT preparation program covering all test sections."
                        style={{color:"#98A2B3", resize:"none"}}></textarea>
                </div>

                {/* <!-- Block 2 Header Deliverables Elements Dynamic Section --> */}
                <div class="section-headline-bar mt-2 mb-3">
                    <h2 class="section-panel-main-title">Deliverables</h2>
                    <button type="button" class="btn-add-row-action">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>

                {/* <!-- Deliverable Entry Row 1 --> */}
                <div class="deliverable-stack-row">
                    <div class="deliverable-input-main">
                        <input type="text" class="custom-form-field-control"
                            placeholder="Weekly practice tests" style={{color:"#98A2B3"}} />
                    </div>
                    <div class="deliverable-input-hours">
                        <input type="text" class="custom-form-field-control" placeholder="8 Hours"
                            style={{color:"#98A2B3"}} />
                    </div>
                    <button type="button" class="btn-deliverable-row-delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>

                {/* <!-- Deliverable Entry Row 2 --> */}
                <div class="deliverable-stack-row">
                    <div class="deliverable-input-main">
                        <input type="text" class="custom-form-field-control" placeholder="Study materials"
                            style={{color:"#98A2B3"}} />
                    </div>
                    <div class="deliverable-input-hours">
                        <input type="text" class="custom-form-field-control" placeholder="8 Hours"
                            style={{color:"#98A2B3"}} />
                    </div>
                    <button type="button" class="btn-deliverable-row-delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>

                {/* <!-- Deliverable Entry Row 3 --> */}
                <div class="deliverable-stack-row">
                    <div class="deliverable-input-main">
                        <input type="text" class="custom-form-field-control" placeholder="Progress reports"
                            style={{color:"#98A2B3"}} />
                    </div>
                    <div class="deliverable-input-hours">
                        <input type="text" class="custom-form-field-control" placeholder="8 Hours"
                            style={{color:"#98A2B3"}} />
                    </div>
                    <button type="button" class="btn-deliverable-row-delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>

                {/* <!-- Deliverable Entry Row 4 --> */}
                <div class="deliverable-stack-row mb-4">
                    <div class="deliverable-input-main">
                        <input type="text" class="custom-form-field-control" placeholder="Deliverable 4"
                            style={{color:"#98A2B3"}} />
                    </div>
                    <div class="deliverable-input-hours">
                        <input type="text" class="custom-form-field-control" placeholder="8 Hours"
                            style={{color:"#98A2B3"}} />
                    </div>
                    <button type="button" class="btn-deliverable-row-delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>

                {/* <!-- Block 3 File Vault Component Area --> */}
                <label class="field-input-label">File Attachments</label>
                <div class="drag-drop-vault-box">
                    <i class="fa-solid fa-upload"></i>
                    <p>Drag and drop files here, or click to browse</p>
                </div>

                {/* <!-- Block 4 Teacher Digital Verification E-Sign Module Area --> */}
                <label class="field-input-label">Teacher E-Signature</label>
                <div class="e-signature-gray-panel">
                    <p class="signature-disclaimer-text">By signing below, I confirm that this Scope of Work
                        accurately
                        represents the agreed-upon services.</p>
                    <div class="signature-draw-canvas-pad">
                        <img src="/images/teacher/click-point.svg" alt="" class="mb-2" />
                        <p>Click to sign</p>
                    </div>
                </div>

                {/* <!-- Master Processing Operation Actions Footer Dock --> */}
                <div class="template-footer-action-dock">
                    <a href="sow-drafts.html" class="btn-footer-secondary-draft">
                        <i class="fa-regular fa-floppy-disk"></i> Save Draft
                    </a>
                    <a href="sow-contract.html" class="btn-footer-primary-save">
                        <i class="fa-regular fa-paper-plane"></i> Save Template
                    </a>
                </div>

            </form>
        </main>

    </div>

</main>
  )
}

export default CreateNewTemplate