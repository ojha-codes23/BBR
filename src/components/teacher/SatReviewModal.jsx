import React from 'react'

const SatReviewModal = () => {
    return (
        <div className="modal fade" id="satReviewDetailsModal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered sat-popup-dialog">
                <div className="modal-content sat-popup-content">

                    {/* <!-- Outside Floating Full Circle White Close Cross Action Trigger Button --> */}
                    <button type="button" className="modal-external-close-btn" data-bs-dismiss="modal" aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    {/* <!-- Upper Header Block Segment --> */}
                    <div className="sat-modal-header-row">
                        <div className="sat-title-left-side">
                            <div className="sat-video-icon-box">
                                <i className="fa-solid fa-video"></i>
                            </div>
                            <div className="sat-title-text-group">
                                <h4>SAT Review</h4>
                                <p>Cybersecurity</p>
                            </div>
                        </div>
                        <span className="session-badge-pill">1:1 Session</span>
                    </div>

                    {/* <!-- Card Layout Wrapper Container --> */}
                    <div className="sat-inner-details-card">

                        {/* <!-- Horizontal Metrics Block Row --> */}
                        <div className="sat-meta-metrics-grid">
                            <div className="metric-item-col">
                                <div><i className="fa-regular fa-calendar"></i> Scheduled Date</div>
                                <span>Dec 10, 2025</span>
                            </div>
                            <div className="metric-item-col">
                                <div><i className="fa-regular fa-clock"></i> Time</div>
                                <span>10:00 AM</span>
                            </div>
                            <div className="metric-item-col">
                                <div><i className="fa-regular fa-circle-play"></i> Duration</div>
                                <span>60 min</span>
                            </div>
                        </div>

                        {/* <!-- Paragraph Description Segment --> */}
                        <div className="sat-description-para-block">
                            <h6>Description:</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        {/* <!-- Media Document Chips Collection --> */}
                        <div className="sat-attachments-flex">
                            <a href="#" className="file-download-chip-btn"><i className="fa-solid fa-paperclip"></i>
                                Project_Support_Guide.pdf</a>
                            <a href="#" className="file-download-chip-btn"><i className="fa-solid fa-paperclip"></i>
                                requirements.docx</a>
                        </div>

                        {/* <!-- User Identity Assignment Placement --> */}
                        <div className="instructor-profile-identity">
                            <i className="fa-regular fa-user"></i> Sofia Martinez
                        </div>

                    </div>
                    {/* <!-- End of inner card --> */}

                    {/* <!-- Bottom Action Footer Segment Controllers --> */}
                    <div className="sat-modal-footer-actions">

                        <button type="button" className="btn-sat-live-trigger"><i className="fa-solid fa-video"></i> Join
                            Live</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SatReviewModal