import React from 'react'
import ServiceRequestDeclineModal from './ServiceRequestDeclineModal'

const DeclineRequestModal = () => {
  return (
    <>

      <div className="modal fade custom-app-modal" id="declineRequestModal" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "540px" }}>
          {/* <!-- BALANCED OUTSIDE CLOSE BUTTON with precise spacing and hand cursor pointer --> */}
          <button type="button" className="custom-close-outside-circle" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="modal-content">
            <div className="modal-body-wrapper">
              {/* <!-- Top Warning Red cross indicator badge design element --> */}
              <div className="status-badge-circle danger-red">
                <i className="fa-regular fa-circle-xmark"></i>
              </div>

              <h3 className="modal-main-title">Decline Request</h3>
              <p className="modal-subtitle-desc">
                Are you sure you want to decline the request from Emma Wilson?
              </p>

              {/* <!-- Inner Form Selection Content Control Block --> */}
              <div className="form-block-container">
                <span className="input-meta-label">Reason for declining</span>
                <div className="reason-badge-flex-row">
                  <div className="reason-selectable-pill active">Scheduling Issue</div>
                  <div className="reason-selectable-pill">Scope Issue</div>
                  <div className="reason-selectable-pill">Interpersonal Issue</div>
                  <div className="reason-selectable-pill">Other Issue</div>
                </div>
                <textarea className="custom-reason-textarea"
                  placeholder="Please provide a reason for declining this request...."></textarea>
              </div>

              {/* <!-- Footer Action Call-to-action Elements --> */}
              <div className="modal-action-footer-btns">
                <button type="button" className="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                {/* <!-- Triggers the chain operation link function defined down in JS --> */}
                <button type="button" className="btn-action-danger-red" id="executeDeclineChainBtn">
                  <i className="fa-solid fa-xmark"></i> Decline Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceRequestDeclineModal />

    </>
  )
}

export default DeclineRequestModal