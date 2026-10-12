import React from 'react'
import FinalPreviewEventModal from './FinalPreviewEventModal'

const EditEvent = () => {
    return (
        <>
        <div className="modal fade event-modal" id="editCreatedEventModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "660px" }}>
                <div className="modal-content"
                    style={{ border: "none", borderRadius: "28px", position: "relative", background: "#ffffff", padding: "36px" }}>

                    {/* <!-- OUTSIDE CLOSE BUTTON --> */}
                    <button type="button" className="glnc-modal-outside-close" data-bs-dismiss="modal" aria-label="Close"
                        style={{ top: "-42px", right: "-4px" }}>
                        <i className="bi bi-x-lg"></i>
                    </button>

                    {/* <!-- Header block --> */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="glnc-ee-hdr-icon">
                            <img src="/images/teacher/super-user-dashboard/calendar-icon.svg" alt="" />
                        </div>
                        <h3 className="glnc-ee-title">Edit College Application Workshop</h3>
                    </div>

                    {/* <!-- Form Controls Layout --> */}
                    <div className="mb-4">
                        <label className="glnc-ee-label">Upload Image</label>
                        <div className="glnc-ee-upload-dash">
                            <i className="bi bi-upload" style={{ fontSize: "24px", color: "#98A2B3" }}></i>
                            <p className="glnc-ee-upload-text-main">Drag and drop files here, or click to browse</p>
                            <p className="glnc-ee-upload-text-sub">Recommended size: 1280 × 720 (16:9)</p>
                        </div>

                        {/* <!-- Current Image Preview Layer --> */}
                        <div className="glnc-ee-img-preview-box">
                            <button type="button" className="glnc-ee-img-remove-badge"><i className="bi bi-x-lg"
                                style={{ fontSize: "11px" }}></i></button>
                            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
                                alt="Uploaded Preview Image" className="glnc-ee-img-preview-src" />
                        </div>
                    </div>

                    {/* <!-- Select Preference Structure --> */}
                    <div className="mb-4">
                        <label className="glnc-ee-label">Select Preference</label>
                        <div className="d-flex gap-5 mt-2">
                            <div className="d-flex align-items-center">
                                <input className="form-check-input glnc-ee-radio-input mt-0" type="radio" name="preferenceRadio"
                                    id="prefPublic" defaultChecked />
                                <label className="glnc-ee-radio-label" encoding="utf-8" desert=""
                                    htmlFor="prefPublic">Public</label>
                            </div>
                            <div className="d-flex align-items-center">
                                <input className="form-check-input glnc-ee-radio-input mt-0" type="radio" name="preferenceRadio"
                                    id="prefPrivate" />
                                <label className="glnc-ee-radio-label" htmlFor="prefPrivate">Private (Group)</label>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Language Selection Field --> */}
                    <div className="mb-4">
                        <label className="glnc-ee-label">Language</label>
                        <select className="glnc-ee-select">
                            <option defaultValue="en" selected>English</option>
                            <option defaultValue="es">Spanish</option>
                            <option defaultValue="fr">French</option>
                        </select>
                    </div>

                    {/* <!-- Tags Field Section --> */}
                    <div className="mb-4">
                        <label className="glnc-ee-label">Tags</label>
                        <input type="text" className="glnc-ee-input-tags" placeholder="Type and Press Enter" />

                        <div className="d-flex flex-wrap gap-2 mt-3">
                            <span className="glnc-ee-tag-badge">
                                Career Development <span className="glnc-ee-tag-close">×</span>
                            </span>
                            <span className="glnc-ee-tag-badge">
                                Planning <span className="glnc-ee-tag-close">×</span>
                            </span>
                            <span className="glnc-ee-tag-badge">
                                Workshop <span className="glnc-ee-tag-close">×</span>
                            </span>
                        </div>
                    </div>

                    {/* <!-- Footer Action Buttons Layout --> */}
                    <div className="d-flex justify-content-end align-items-center gap-4 mt-4 pt-2">
                        <button type="button" className="glnc-ee-btn-cancel" data-bs-dismiss="modal">Cancel</button>

                        <button type="button" className="glnc-ee-btn-save" data-bs-toggle="modal"
                            data-bs-target="#finalEventDetailsPreviewModal">Save Changes</button>
                    </div>

                </div>
            </div>
        </div>

        <FinalPreviewEventModal />

        </>
    )
}

export default EditEvent