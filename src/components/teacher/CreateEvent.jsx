import React from 'react'

const CreateEvent = () => {
  return (
    <div className="modal fade event-modal" id="previewCreatedEventModal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "840px"}}>
        <div className="modal-content"
            style={{border: "none", borderRadius: "28px", position: "relative", background: "#ffffff", padding: "40px"}}>

            <button type="button" className="glnc-modal-outside-close" data-bs-dismiss="modal" aria-label="Close"
                style={{top: "-40px", right: "0"}}>
                <i className="bi bi-x-lg"></i>
            </button>

            <div>
                <h2 className="glnc-preview-title">Career Planning Workshop 1</h2>
                <div className="glnc-preview-banner"></div>

                <div className="row g-4">
                    <div className="col-md-7">
                        <div className="glnc-preview-card-box">
                            <h4 className="glnc-preview-subheading">About This Event</h4>
                            <p className="glnc-preview-text">
                                Join us for an interactive workshop on career planning and development. Learn how to
                                create a roadmap for your career success, set achievable goals, and develop
                                strategies to reach them.
                            </p>
                            <p className="glnc-preview-text" style={{marginTop: "16px", marginBottom: "4px"}}>
                                This workshop will cover:
                            </p>
                            <ul className="glnc-preview-list">
                                <li>Self-assessment and skills inventory</li>
                                <li>Goal setting frameworks</li>
                                <li>Industry research techniques</li>
                                <li>Creating your personal career roadmap</li>
                                <li>Networking strategies</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="glnc-preview-card-box">
                            <h4 className="glnc-preview-subheading">Event Details</h4>

                            <div className="glnc-preview-meta-item">
                                <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                                <span>Friday, December 5, 2025</span>
                            </div>
                            <div className="glnc-preview-meta-item">
                                <i className="bi bi-clock"></i>
                                <span>2:00 PM EST (2 hours)</span>
                            </div>
                            <div className="glnc-preview-meta-item">
                                <i className="bi bi-geo-alt"></i>
                                <span>Virtual - Zoom</span>
                            </div>
                            <div className="glnc-preview-meta-item">
                                <i className="bi bi-globe"></i>
                                <span>English</span>
                            </div>

                            <hr style={{borderTop: "1px solid #EAECF0", margin: "20px 0"}} />

                            <h4 className="glnc-preview-subheading">Instructor</h4>
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                                    alt="Sarah Johnson Avatar" className="glnc-instructor-avatar" />
                                <span style={{fontSize: "15px", fontWeight: "600", color: "#101828"}}>Sarah Johnson
                                    (You)</span>
                            </div>
                            <p className="glnc-preview-text" style={{margin: "0", fontSize: "13px"}}>
                                Tech leader and coach specializing in career transitions and skill development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- Left side Edit Button opens the new Edit Event modal --> */}
                <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                    <button type="button" className="glnc-btn-preview-edit" data-bs-toggle="modal"
                        data-bs-target="#editCreatedEventModal">
                        <i className="bi bi-pencil-square"></i> Edit
                    </button>
                    <button type="button" data-bs-toggle="modal" data-bs-dismiss="modal"
                        className="glnc-btn-preview-submit">
                        Create Event <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default CreateEvent