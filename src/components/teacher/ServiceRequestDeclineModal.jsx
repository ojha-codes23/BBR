import React from 'react'

const ServiceRequestDeclineModal = () => {
  return (
    <div className="modal fade custom-app-modal" id="serviceDeclinedNotificationModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "560px"}}>
        {/* <!-- BALANCED OUTSIDE CLOSE BUTTON with precise spacing and hand cursor pointer --> */}
        <button type="button" className="custom-close-outside-circle" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-content">
            {/* <!-- Layout top details structural container box layout --> */}
            <div className="declined-top-row">
                <div className="square-danger-icon">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="declined-header-texts">
                    <h4>Service Request Declined</h4>
                    <p>This service request was declined.</p>
                </div>
            </div>

            {/* <!-- Centralized Content Information Board Card Element --> */}
            <div className="info-preview-metadata-card">
                <div className="meta-data-group">
                    <span className="meta-label-tag">User:</span>
                    <span className="meta-value-text">Emma Wilson</span>
                </div>
                <div className="meta-data-group">
                    <span className="meta-label-tag">Service:</span>
                    <span className="meta-value-text">Career Support</span>
                </div>
                <div className="meta-data-group">
                    <span className="meta-label-tag">Selected Reason:</span>
                    <span className="meta-value-text">Schedule conflict</span>
                </div>
            </div>

            {/* <!-- Custom Quote Context Alert Callout block --> */}
            <div className="red-quote-callout-panel">
                "I won't be available during these dates due to travel."
            </div>

            {/* <!-- Bottom Alignment Execution Buttons area wrapper --> */}
            <div className="declined-footer-alignment">
                <button type="button" className="btn-action-primary-blue" data-bs-dismiss="modal">
                    View Details <i className="fa-solid fa-arrow-right ms-1"></i>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default ServiceRequestDeclineModal