import React from 'react'

const AvailabilityTab = () => {
  return (
    <div className="" id="pane-availability-tags" role="tabpanel">

                        <main className="availability-master-card">

                            <div className="availability-header-title">
                                <i className="fa-regular fa-file-lines"></i> Availability Settings
                            </div>

                            <form onsubmit="event.preventDefault();">

                                {/* <!-- Section 1: Currently Available Control Block --> */}
                                <div className="availability-row-segment">
                                    <div className="availability-segment-meta">
                                        <h4>Currently Available</h4>
                                        <p>Turn this off if you are taking a break or unavailable.</p>
                                    </div>
                                    <div className="form-check form-switch p-0 m-0">
                                        <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" checked="" />
                                    </div>
                                </div>

                                {/* <!-- Section 2: Currently Unavailable Control Block --> */}
                                <div className="availability-row-segment mb-3">
                                    <div className="availability-segment-meta">
                                        <h4>Currently Unavailable</h4>
                                        <p>Turn this on if you are available. your profile will automatically become available again after the selected date and time.</p>
                                    </div>
                                    <div className="form-check form-switch p-0 m-0">
                                        <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" />
                                    </div>
                                </div>

                                {/* <!-- Section 3: Nested Dynamic Field Module Drawer Grid --> */}
                                <div className="unavailable-nested-vault-panel">
                                    <h5 className="nested-vault-heading">Unavailable Until</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="input-glyph-relative-container">
                                                <input type="text" className="vault-field-control-node" placeholder="Date" />
                                                <i className="fa-regular fa-calendar-days"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-glyph-relative-container">
                                                <input type="text" className="vault-field-control-node" placeholder="Time" />
                                                <i className="fa-regular fa-clock"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Section 4: Twin Mode Operations Panels Row Splitter --> */}
                                <div className="preferences-split-line-section">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="split-preference-toggle-node">
                                                <div className="preference-meta-headers">
                                                    <h5>Available for One-on-One Sessions</h5>
                                                    <p>Accept individual tutoring requests</p>
                                                </div>
                                                <div className="form-check form-switch p-0 m-0">
                                                    <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" checked="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="split-preference-toggle-node border-divider-left">
                                                <div className="preference-meta-headers">
                                                    <h5>Available for Group Sessions</h5>
                                                    <p>Accept group class requests</p>
                                                </div>
                                                <div className="form-check form-switch p-0 m-0">
                                                    <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" checked="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Section 5: Control Anchors Execution Footer Bar --> */}
                                <div className="availability-action-dock">
                                    <button type="button" className="btn-link-action-cancel">Cancel</button>
                                    <button type="submit" className="btn-action-submit-save">Save Changes</button>
                                </div>

                            </form>

                        </main>
                    </div>
  )
}

export default AvailabilityTab