import React from 'react'

const LogoutModal = () => {
  return (
    <>
     <div className="modal fade gl-custom-popup-wrapper" id="confirmLogoutModal" tabindex="-1" aria-labelledby="confirmLogoutModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-md gl-popup-alert-dialog">
        <div className="modal-content gl-popup-main-box text-center-engine">
            
            <div className="gl-alert-popup-top-actions">
                <button type="button" className="gl-popup-close-trigger ms-auto" data-bs-dismiss="modal" aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div className="modal-body gl-popup-alert-core-body">
                
                <div className="gl-alert-status-badge alert-red-skin">
                    <img src="/images/user/super-user-dashboard/basil_logout-outline (1).svg" alt=""/>
                </div>

                <h2 className="gl-alert-main-title" id="confirmLogoutModalLabel">Confirm Logout</h2>
                <p className="gl-alert-message-desc final-row-spacing">
                    Are you sure you want to log out? Any unsaved changes may be lost.
                </p>

            </div>

            <div className="gl-popup-alert-footer-row control-panel-gap">
                <button type="button" className="gl-popup-btn-cancel-flat structural-btn" data-bs-dismiss="modal">Cancel</button>
                <a href="login.html" className="gl-popup-btn-save spec-red-btn structural-btn">
                        Yes, Logout
                    </a>
            </div>

        </div>
    </div>
</div>
    </>
  )
}

export default LogoutModal
