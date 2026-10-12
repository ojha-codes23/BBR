import React from 'react'

const ScheduleSession = () => {
  return (
    <div className="modal fade" id="scheduleSessionModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "640px"}}>
        <div className="modal-content modal-custom-content">

            {/* <!-- Floating clean Close Button Outside Corner Context --> */}
            <button type="button" className="modal-floating-close" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
            </button>

            {/* <!-- Popup Brand Heading Elements Header Area --> */}
            <div className="modal-popup-header">
                <div className="modal-header-icon-box">
                    <i className="bi bi-calendar-event"></i>
                </div>
                <h2 className="modal-popup-title">Schedule New Session</h2>
            </div>

            {/* <!-- Form Content Controls Stream Layout Grid --> */}
            <form>
                <div className="mb-3">
                    <label className="popup-field-label">Session Title</label>
                    <input type="text" className="popup-form-control" placeholder="e.g., College Application Workshop" />
                </div>

                <div className="mb-3">
                    <label className="popup-field-label">User</label>
                    <select className="popup-form-control">
                        <option selected disabled>Select User</option>
                        <option>David Lee</option>
                        <option>Sarah Johnson</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="popup-field-label">Session Type</label>
                    <select className="popup-form-control">
                        <option selected>1:1 Session</option>
                        <option>Group Session</option>
                    </select>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-6">
                        <label className="popup-field-label">Date</label>
                        <input type="date" className="popup-form-control text-muted" />
                    </div>
                    <div className="col-6">
                        <label className="popup-field-label">Time</label>
                        <input type="time" className="popup-form-control text-muted" />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="popup-field-label">Duration (Minutes)</label>
                    <select className="popup-form-control">
                        <option selected>60 Minutes</option>
                        <option>30 Minutes</option>
                        <option>90 Minutes</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="popup-field-label">Meeting Platform</label>
                    <select className="popup-form-control">
                        <option selected>zoom</option>
                        <option>Google Meet</option>
                        <option>Microsoft Teams</option>
                    </select>
                </div>

                <div className="mb-0">
                    <label className="popup-field-label">Meeting Link</label>
                    <input type="url" className="popup-form-control" placeholder="https://zoom.us/j/...." />
                </div>

                {/* <!-- Custom Alert Warning Conflict Banner --> */}
                <div className="popup-warning-banner">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    <span>You have another session at 2:00 PM on this day</span>
                </div>

                {/* <!-- Action Confirmation Footer Button --> */}
                <div className="d-flex">
                    <button type="submit" className="btn-modal-submit">
                        Schedule Session <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </form>

        </div>
    </div>
</div>
  )
}

export default ScheduleSession