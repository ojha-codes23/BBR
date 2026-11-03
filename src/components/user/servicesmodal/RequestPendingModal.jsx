import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RequestPendingModal = ({ isOpen, onClose }) => {
  const isControlled = typeof isOpen === 'boolean';
  const navigate = useNavigate();

  // If controlled by React state and isOpen is false, do not render
  if (isControlled && !isOpen) return null;

  return (
    <div
      className={`modal fade ${isControlled && isOpen ? 'show' : ''}`}
      id="requestPendingModal"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-hidden={isControlled ? (!isOpen).toString() : "true"}
      onClick={(e) => {
        if (e.target.id === 'requestPendingModal' && onClose) {
          onClose();
        }
      }}
      style={isControlled && isOpen ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(4px)',
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        zIndex: 99999,
        padding: '20px',
        overflowY: 'auto'
      } : {}}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: "520px", width: "100%", margin: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content" style={{
          borderRadius: "28px",
          padding: "40px",
          border: "none",
          position: "relative",
          backgroundColor: "#ffffff",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}>

          <a
            href="#"
            className="close gl-popup-absolute-close-trigger"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={(e) => {
              e.preventDefault();
              if (onClose) onClose();
            }}
          >
            <span aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          </a>

          <div className="modal-body p-0 center-aligned-content">

            <div className="gl-popup-status-icon-box light-blue-theme-bg">
              <img src="/images/user/super-user-dashboard/entypo_hour-glass.svg" alt="Pending" />
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
              <Link
                to="/student/my-service"
                data-bs-dismiss="modal"
                // onClick={() => {
                //   if (onClose) onClose();
                // }}
                onClick={() => {
                  // 1. Close this modal
                  if (onClose) {
                    onClose();
                    navigate("/student/my-service-request");
                  }

                  // 2. Open MyService (Service Request) page
                  // navigate("/student/my-service");
                }}
                className="btn btn-block spec-blue-btn py-3 font-weight-bold w-100"
                style={{
                  borderRadius: "12px",
                  fontSize: "16px",
                }}
              >
                Go to My Requests
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPendingModal;
