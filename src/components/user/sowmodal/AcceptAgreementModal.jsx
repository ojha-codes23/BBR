import React from 'react'
import { Link } from 'react-router-dom'

const AcceptAgreementModal = () => {
  return (
    <>
      <div className="modal fade gl-event-modal-backdrop" id="acceptAgreementModal" tabindex="-1" aria-labelledby="acceptAgreementModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-md gl-event-modal-size">
        <div className="modal-content gl-event-card-box text-center">
            
            <div className="gl-event-header-actions">
                <button type="button" className="gl-event-close-btn" data-bs-dismiss="modal" aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div className="modal-body gl-event-body-wrapper">
                <div className="gl-event-badge-circle success-green-skin">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>

                <h2 className="gl-event-main-title" id="acceptAgreementModalLabel">Accept Service Agreement?</h2>
                <p className="gl-event-lead-desc">By accepting this Scope of Work, the services will be initiated.</p>

                <div className="gl-event-bullets-container">
                    <ul className="gl-event-bullets-list">
                        <li>If you need changes later, you can request amendments.</li>
                        <li>All amendments must be approved by the admin team.</li>
                    </ul>
                </div>
            </div>

            <div className="gl-event-footer-buttons">
                <button type="button" className="gl-event-btn-link-cancel" data-bs-dismiss="modal">Cancel</button>
                <Link to="/student/sow-detail-4" type="button" className="gl-event-btn-action-green">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Yes, Accept
                </Link>
            </div>

        </div>
    </div>
</div>
    </>
  )
}

export default AcceptAgreementModal
