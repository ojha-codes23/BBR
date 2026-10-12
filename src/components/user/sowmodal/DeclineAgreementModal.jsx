import React from 'react'

const DeclineAgreementModal = () => {
  return (
   <>
     <div className="modal fade decline-modal-wrapper" id="declineAgreementModal" tabindex="-1" aria-labelledby="declineAgreementModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-md decline-modal-dialog-box">
        <div className="modal-content decline-modal-content-panel text-center">
            
            <div className="decline-modal-close-row">
                <button type="button" className="decline-modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div className="modal-body decline-modal-body-core">
                
                <div className="decline-modal-alert-icon-circle">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>

                <h2 className="decline-modal-main-title" id="declineAgreementModalLabel">Decline Service Agreement</h2>
                <p className="decline-modal-subtitle-desc">
                    Please select a reason for declining:
                </p>

                <div className="decline-modal-inputs-stack">
                    <div className="decline-modal-field-gap">
                        <select className="form-select decline-modal-dropdown-element">
                            <option selected disabled>Select reason</option>
                            <option value="pricing">Pricing / Budget Constraints</option>
                            <option value="timeline">Timeline Mismatch</option>
                            <option value="scope">Scope Requirements Unmet</option>
                            <option value="other">Other Reason</option>
                        </select>
                    </div>

                    <div>
                        <textarea className="form-control decline-modal-textarea-element" rows="4" placeholder="Please provide a reason for declining this request...."></textarea>
                    </div>
                </div>

            </div>

            <div className="decline-modal-footer-action-row">
                <button type="button" className="decline-modal-btn-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="decline-modal-btn-submit-red">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    Decline
                </button>
            </div>

        </div>
    </div>
</div>
   
   </>
  )
}

export default DeclineAgreementModal
