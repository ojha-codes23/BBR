// import React from 'react'

// const LogoutModal = ({ show, onClose }) => {

//     if (!show) {
//         return null;
//     }

//     return (
//         // <div className="modal fade gl-custom-popup-wrapper" id="confirmLogoutModal" tabIndex="-1"
//         //     aria-labelledby="confirmLogoutModalLabel" aria-hidden="true">
//         <div
//             className="modal fade show gl-custom-popup-wrapper"
//             style={{ display: 'block' }}
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="confirmLogoutModalLabel"
//         >
//             <div className="modal-dialog modal-dialog-centered modal-md gl-popup-alert-dialog">
//                 <div className="modal-content gl-popup-main-box text-center-engine">

//                     <div className="gl-alert-popup-top-actions">
//                         <button type="button" className="gl-popup-close-trigger ms-auto"
//                             aria-label="Close" onClick={onClose}>
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2"
//                                 strokeLinecap="round" strokeLinejoin="round">
//                                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                                 <line x1="6" y1="6" x2="18" y2="18"></line>
//                             </svg>
//                         </button>
//                     </div>

//                     <div className="modal-body gl-popup-alert-core-body">

//                         <div className="gl-alert-status-badge alert-red-skin">
//                             <img src="/images/teacher/logout.svg" alt="" />
//                         </div>

//                         <h2 className="gl-alert-main-title" id="confirmLogoutModalLabel">Confirm Logout</h2>
//                         <p className="gl-alert-message-desc final-row-spacing">
//                             Are you sure you want to log out? Any unsaved changes may be lost.
//                         </p>

//                     </div>

//                     <div className="gl-popup-alert-footer-row control-panel-gap">
//                         <button type="button" className="gl-popup-btn-cancel-flat structural-btn"
//                             onClick={onClose}>Cancel</button>
//                         <a href="login.html" className="gl-popup-btn-save spec-red-btn structural-btn">
//                             Yes, Logout
//                         </a>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LogoutModal







import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const LogoutModal = ({ show, onClose }) => {
  // Prevent page scrolling behind the modal
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [show]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <>
      {/* Dark/Blurred Screen Backdrop */}
      <div 
        className="modal-backdrop fade show" 
        onClick={onClose}
        style={{ backdropFilter: 'blur(4px)' }} 
      />

      {/* Modal Dialog */}
      <div
        className="modal fade show gl-custom-popup-wrapper"
        style={{ display: 'block', zIndex: 1055 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmLogoutModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-md gl-popup-alert-dialog">
          <div className="modal-content gl-popup-main-box text-center-engine">
            <div className="gl-alert-popup-top-actions">
              <button
                type="button"
                className="gl-popup-close-trigger ms-auto"
                aria-label="Close"
                onClick={onClose}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="modal-body gl-popup-alert-core-body">
              <div className="gl-alert-status-badge alert-red-skin">
                <img src="/images/teacher/logout.svg" alt="Logout" />
              </div>

              <h2 className="gl-alert-main-title" id="confirmLogoutModalLabel">
                Confirm Logout
              </h2>
              <p className="gl-alert-message-desc final-row-spacing">
                Are you sure you want to log out? Any unsaved changes may be lost.
              </p>
            </div>

            <div className="gl-popup-alert-footer-row control-panel-gap">
              <button
                type="button"
                className="gl-popup-btn-cancel-flat structural-btn"
                onClick={onClose}
              >
                Cancel
              </button>
              <Link
                to="/teacher"
                className="gl-popup-btn-save spec-red-btn structural-btn"
              >
                Yes, Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body // Appends directly to HTML body
  );
};

export default LogoutModal;