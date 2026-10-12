import React from 'react'

const RescheduleSession = () => {
  return (
    <div class="modal fade" id="rescheduleSessionModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style={{maxWidth: "640px"}}>
        <div class="modal-content modal-custom-content">

            <button type="button" class="modal-round-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="bi bi-x-lg"></i>
            </button>

            <div class="modal-popup-header">
                <div class="modal-header-icon-box">
                    <i class="bi bi-calendar-event"></i>
                </div>
                <h2 class="modal-popup-title">Reschedule Session</h2>
            </div>

            <form>
                <div class="mb-3">
                    <label class="popup-field-label">Session Title</label>
                    <input type="text" class="popup-form-control" value="Technical Problem Solving"
                        placeholder="e.g., College Application Workshop" />
                </div>

                <div class="mb-3">
                    <label class="popup-field-label">User</label>
                    <select class="popup-form-control" style={{color: "var(--text-dark)"}}>
                        <option disabled>Select User</option>
                        <option selected>David Lee</option>
                        <option>Sarah Johnson</option>
                        <option>Emma Wilson</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="popup-field-label">Session Type</label>
                    <select class="popup-form-control" style={{color: "var(--text-dark)"}}>
                        <option selected>1:1 Session</option>
                        <option>Group Session</option>
                    </select>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-6">
                        <label class="popup-field-label">Date</label>
                        <input type="date" class="popup-form-control" value="2025-11-25" />
                    </div>
                    <div class="col-6">
                        <label class="popup-field-label">Time</label>
                        <input type="time" class="popup-form-control" value="10:00" />
                    </div>
                </div>

                <div class="mb-3">
                    <label class="popup-field-label">Duration (Minutes)</label>
                    <select class="popup-form-control" style={{color: "var(--text-dark)"}}>
                        <option selected>60 Minutes</option>
                        <option>30 Minutes</option>
                        <option>90 Minutes</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="popup-field-label">Meeting Platform</label>
                    <select class="popup-form-control" style={{color: "var(--text-dark)"}}>
                        <option selected>zoom</option>
                        <option>Google Meet</option>
                        <option>Microsoft Teams</option>
                    </select>
                </div>

                <div class="mb-0">
                    <label class="popup-field-label">Meeting Link</label>
                    <input type="url" class="popup-form-control" placeholder="https://zoom.us/j/...."
                        value="https://zoom.us/j/123456789" />
                </div>

                <div class="popup-warning-banner">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <span>You have another session at 2:00 PM on this day</span>
                </div>

                <div class="d-flex">
                    <button type="submit" class="btn-modal-submit">
                        Reschedule Session <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </form>

        </div>
    </div>
</div>
  )
}

export default RescheduleSession