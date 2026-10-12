import React from 'react'

const DeactivateAccount = () => {
  return (
    <>
     <div className="modal fade custom-target-modal" id="deactivateAccountModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div  className="modal-dialog modal-dialog-centered" role="document" style={{
  maxWidth: "620px",
}}>
        <div className="modal-content" style={{ borderRadius: "24px",padding: "36px 40px",   border: "none", position: "relative", }}>
            
            <a href="#" className="close gl-modal-dismiss-anchor" aria-label="Close">
                <span aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </span>
            </a>

            <div className="modal-body p-0 text-center">
                
                <div className="gl-alert-icon-avatar-badge mb-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </div>

                <h2 className="gl-modal-title-bold mb-2">Deactivate Account</h2>
                <p className="gl-modal-description-lead mb-4">
                    You’re about to permanently deactivate your account.<br/>All your data, requests, and history will be deleted.
                </p>

                <div className="gl-critical-warning-banner mb-4 text-left">
                    <p className="gl-warning-banner-text">
                        ⚠️ This action is permanent and cannot be undone. To use this platform again, you will need to sign up as a new user.
                    </p>
                </div>

                <div className="gl-reasons-form-matrix text-left mb-4">
                    <h3 className="gl-checklist-group-title mb-3">Select reason(s) <span className="text-danger">*</span></h3>
                    
                    <div className="gl-checkbox-list-stack">
                        <label className="gl-custom-checkbox-row">
                            <input type="checkbox" className="gl-native-checkbox"/>
                            <span className="gl-checkbox-facade"></span>
                            <span className="gl-checkbox-label-text">Unclear scope or objectives</span>
                        </label>
                        <label className="gl-custom-checkbox-row">
                            <input type="checkbox" className="gl-native-checkbox"/>
                            <span className="gl-checkbox-facade"></span>
                            <span className="gl-checkbox-label-text">Hours requested seem incorrect</span>
                        </label>
                        <label className="gl-custom-checkbox-row">
                            <input type="checkbox" className="gl-native-checkbox"/>
                            <span className="gl-checkbox-facade"></span>
                            <span className="gl-checkbox-label-text">Policy or compliance concern</span>
                        </label>
                        <label className="gl-custom-checkbox-row">
                            <input type="checkbox" className="gl-native-checkbox"/>
                            <span className="gl-checkbox-facade"></span>
                            <span className="gl-checkbox-label-text">Missing documentation</span>
                        </label>
                        <label className="gl-custom-checkbox-row">
                            <input type="checkbox" className="gl-native-checkbox"/>
                            <span className="gl-checkbox-facade"></span>
                            <span className="gl-checkbox-label-text">Others</span>
                        </label>
                    </div>
                </div>

                <div className="form-group mb-4 text-left">
                    <textarea className="form-control gl-feedback-textarea-field" rows="4" placeholder="Additional feedback (optional)"></textarea>
                </div>

                <div className="gl-acknowledgement-row-wrapper mb-4 text-left">
                    <label className="gl-custom-checkbox-row">
                        <input type="checkbox" className="gl-native-checkbox" required/>
                        <span className="gl-checkbox-facade"></span>
                        <span className="gl-checkbox-label-text user-select-none font-weight-medium text-dark-slate">
                            I understand that my account and data will be permanently removed.
                        </span>
                    </label>
                </div>

                <div className="gl-modal-action-footer d-flex align-items-center justify-content-end mt-4">
                    <a href="#" className="btn gl-form-cancel-link-btn mr-3">Cancel</a>
              <button
                type="submit"
                className="gl-destructive-action-pill-btn"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
  </svg>

  Deactivate Account
</button>
                </div>

            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default DeactivateAccount
