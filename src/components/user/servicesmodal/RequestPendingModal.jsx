import React from 'react'
import { Link } from 'react-router-dom'

const RequestPendingModal = () => {
  return (
    <>
       <div className="modal fade custom-target-modal" id="requestPendingModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document" style={{maxWidth: "520px"}}>
        <div className="modal-content" style={{
  borderRadius: "28px",
  padding: "40px",
  border: "none",
  position: "relative",
}}>
            
            <a href="#" className="close gl-popup-absolute-close-trigger" aria-label="Close">
                <span aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </span>
            </a>

            <div className="modal-body p-0 center-aligned-content">
                
                <div className="gl-popup-status-icon-box light-blue-theme-bg">
                   <img src="images/super-user-dashboard/entypo_hour-glass.svg" alt=""/>
                </div>

                <div className="gl-popup-title-block w-100 mb-4">
                    <h2 className="gl-popup-main-title">Request Pending</h2>
                    <p className="gl-popup-subtitle-desc">Your Service request is currently being reviewed. You'll be notified once the next step is ready.</p>
                </div>

                <div className="gl-status-context-gray-card w-100 mb-3">
                    <h4 className="gl-card-title-with-emoji">
                        <span className="gl-emoji-space">📍</span> You can track this request anytime in:
                    </h4>
                    <ul className="gl-card-bullet-list">
                        <li>Notification</li>
                        <li>My Service Requests</li>
                    </ul>
                </div>

                <div className="gl-status-sow-blue-banner w-100 mb-4">
                    <span className="gl-emoji-space-large">✍️</span>
                    <p className="gl-banner-info-text">
                        When prompted, please complete the <span className="gl-text-highlight-bold">SOW (Statement of Work)</span> form to proceed
                    </p>
                </div>

                <div className="w-100">
                    <Link to="/student/my-service" className="btn btn-block spec-blue-btn py-3 font-weight-bold w-100" style={{
                            borderRadius: "12px",
                            fontSize: "16px",
                            }}>
                        Go to My Requests
                    </Link>
                </div>

            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default RequestPendingModal
