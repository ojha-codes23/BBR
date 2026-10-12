import React from 'react'

const EscalateRequestModal = () => {
  return (
    <div className="modal fade revision-modal" id="revisionPopupModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

            {/* <!-- Window Cross Close Trigger Button Vector --> */}
            <button type="button" className="modal-close-x" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa-solid fa-xmark"></i>
            </button>

            {/* <!-- Centered Yellow badge asset --> */}
            <div className="modal-icon-badge-center">
                <div className="yellow-circle-icon">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
            </div>

            <div className="modal-body-wrapper">
                {/* <!-- Main Header elements text --> */}
                <h2 className="modal-main-heading">Escalate Request <br /> to Admin</h2>
                <p className="modal-sub-description">
                    This will notify the admin team only. The User will continue to see this request as Pending
                    Review.
                </p>

                {/* <!-- Checkbox List Multi-Select component segment --> */}
                <div className="reason-selection-box">
                    <label className="field-label-title">Select reason(s)<span className="required-star">*</span></label>

                    {/* <!-- Reason Item 1 (Checked by default inside image template) --> */}
                    <label className="custom-checkbox-row">
                        <input type="checkbox" id="reason1" checked />
                        <span className="checkbox-label-text">Unclear scope or objectives</span>
                    </label>

                    {/* <!-- Reason Item 2 --> */}
                    <label className="custom-checkbox-row">
                        <input type="checkbox" id="reason2" />
                        <span className="checkbox-label-text">Hours requested seem incorrect</span>
                    </label>

                    {/* <!-- Reason Item 3 --> */}
                    <label className="custom-checkbox-row">
                        <input type="checkbox" id="reason3" />
                        <span className="checkbox-label-text">Policy or compliance concern</span>
                    </label>

                    {/* <!-- Reason Item 4 --> */}
                    <label className="custom-checkbox-row">
                        <input type="checkbox" id="reason4" />
                        <span className="checkbox-label-text">Missing documentation</span>
                    </label>

                    {/* <!-- Reason Item 5 --> */}
                    <label className="custom-checkbox-row">
                        <input type="checkbox" id="reason5" />
                        <span className="checkbox-label-text">Others</span>
                    </label>
                </div>

                {/* <!-- Explanation Area Paragraph segment input component mapping --> */}
                <div className="explanation-input-box">
                    <label className="field-label-title">Explanation<span className="required-star">*</span></label>
                    <textarea className="custom-modal-textarea"
                        placeholder="Explain why this request needs admin intervention..."></textarea>
                </div>

                {/* <!-- Lower Modal Actions Row segment controls toolbar --> */}
                <div className="modal-actions-footer-row">
                    <button type="button" className="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn-modal-submit-revision">
                        <i className="fa-solid fa-triangle-exclamation"></i> Escalate
                    </button>
                </div>

            </div>

        </div>
    </div>
</div>
  )
}

export default EscalateRequestModal