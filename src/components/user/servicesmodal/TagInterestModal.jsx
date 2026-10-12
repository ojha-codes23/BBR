import React from 'react'

const TagInterestModal = () => {
    return (
        <>
            <div className="modal fade" id="tagsInterestsModal" tabindex="-1" role="dialog" aria-labelledby="tagsModalTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content" style={{ borderRadius: " 20px", border: "none" }}>

                        <div>
                            <div>

                                <div className="gl-popup-header-row d-flex align-items-start justify-content-between">
                                    <div className="gl-popup-header-left d-flex align-items-start">
                                        <div className="gl-popup-icon-box light-blue-theme-bg mr-3 p-2 rounded-lg"
                                            style={{ backgroundColor: "#e6f0f5", borderRadius: "12px" }}>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1H20v16H6.5a2.5 2.5 0 0 0-2.5 2.5z"
                                                    stroke="#006699" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M9 5h6v4l-3-1.5L9 9V5z" fill="#006699" />
                                            </svg>
                                        </div>
                                        <div className="gl-popup-title-block">
                                            <h2 className="gl-popup-main-title h5 font-weight-bold mb-1" id="tagsModalTitle">Tags &
                                                Interests Required</h2>
                                            <p className="gl-popup-subtitle-desc text-muted small mb-0">Select your interests so we
                                                can recommend the best providers for you</p>
                                        </div>
                                    </div>

                                    <a href="javascript:void(0)" className="gl-popup-close-trigger text-dark p-1"
                                        data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111"
                                            stroke-width="2.5">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </a>
                                </div>

                                <div className="gl-popup-core-body mt-4">

                                    <div className="gl-tag-search-field-wrapper form-group position-relative mb-4">
                                        <input type="text" className="gl-tag-input-element form-control pl-5"
                                            placeholder="Search Tags" style={{ height: '48px', borderRadius: "10px" }} />
                                        <span className="gl-search-lens-icon position-absolute"
                                            style={{
                                                left: "16px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                            }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8"
                                                stroke-width="2.5">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="gl-tags-section-block mb-4">
                                        <h3 className="gl-tags-section-heading h6 font-weight-bold mb-2">Your Selected Tags (4)</h3>
                                        <div className="gl-tags-flex-container d-flex flex-wrap" style={{ gap: " 8px" }}>
                                            <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex m-1"
                                                style={{
                                                    backgroundColor: "#eff6ff",
                                                    color: "#3b82f6",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum <span
                                                    className="gl-pill-remove-trigger ml-2 text-danger font-weight-bold"
                                                    style={{
                                                        cursor: "pointer",
                                                        fontSize: "16px",
                                                        lineHeight: "1",
                                                    }}>&times;</span></div>
                                            <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex m-1"
                                                style={{
                                                    backgroundColor: "#eff6ff",
                                                    color: "#3b82f6",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum <span
                                                    className="gl-pill-remove-trigger ml-2 text-danger font-weight-bold"
                                                    style={{
                                                        cursor: "pointer",
                                                        fontSize: "16px",
                                                        lineHeight: "1",
                                                    }}>&times;</span></div>
                                            <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex m-1"
                                                style={{
                                                    backgroundColor: "#eff6ff",
                                                    color: "#3b82f6",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum <span
                                                    className="gl-pill-remove-trigger ml-2 text-danger font-weight-bold"
                                                    style={{
                                                        cursor: "pointer",
                                                        fontSize: "16px",
                                                        lineHeight: "1",
                                                    }}>&times;</span></div>
                                            <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex m-1"
                                                style={{
                                                    backgroundColor: "#eff6ff",
                                                    color: "#3b82f6",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum <span
                                                    className="gl-pill-remove-trigger ml-2 text-danger font-weight-bold"
                                                    style={{
                                                        cursor: "pointer",
                                                        fontSize: "16px",
                                                        lineHeight: "1",
                                                    }}>&times;</span></div>
                                        </div>
                                    </div>

                                    <div className="gl-tags-section-block mb-4">
                                        <h3 className="gl-tags-section-heading h6 font-weight-bold mb-2">Available Tags</h3>
                                        <div className="gl-tags-flex-container d-flex flex-wrap" style={{ gap: "8px" }}>
                                            <div className="gl-tag-pill pool-item-state badge badge-pill p-2 px-3 text-secondary m-1"
                                                style={{
                                                    backgroundColor: "#f1f5f9",
                                                    cursor: "pointer",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum</div>
                                            <div className="gl-tag-pill pool-item-state badge badge-pill p-2 px-3 text-secondary m-1"
                                                style={{
                                                    backgroundColor: "#f1f5f9",
                                                    cursor: "pointer",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum</div>
                                            <div className="gl-tag-pill pool-item-state badge badge-pill p-2 px-3 text-secondary m-1"
                                                style={{
                                                    backgroundColor: "#f1f5f9",
                                                    cursor: "pointer",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum</div>
                                            <div className="gl-tag-pill pool-item-state badge badge-pill p-2 px-3 text-secondary m-1"
                                                style={{
                                                    backgroundColor: "#f1f5f9",
                                                    cursor: "pointer",
                                                    fontSize: "13px",
                                                    borderRadius: "20px",
                                                }}>
                                                Lorem ipsum</div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="gl-popup-horizontal-divider my-4" />

                                <div className="gl-popup-footer-action-row d-flex align-items-center justify-content-between flex-wrap"
                                    style={{ gap: '12px' }}>
                                    <p className="gl-footer-helper-note-text text-muted small mb-0">You can update this later in
                                        your profile</p>
                                    <a href="javascript:void(0)"
                                        className="gl-action-submit-pill-btn spec-blue-btn btn px-4 py-2 font-weight-bold text-white d-inline-flex align-items-center"
                                        style={{
                                            backgroundColor: "#006699",
                                            borderRadius: "10px",
                                        }}>
                                        Save Tags & Continue
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                            stroke-width="2.5" className="ml-2 align-middle">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TagInterestModal
