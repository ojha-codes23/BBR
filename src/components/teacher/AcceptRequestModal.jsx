import React from 'react'

const AcceptRequestModal = () => {
  return (
    <div className="modal fade custom-app-modal" id="acceptRequestModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "540px"}}>
        {/* <!-- BALANCED OUTSIDE CLOSE BUTTON with precise spacing and hand cursor pointer --> */}
        <button type="button" className="custom-close-outside-circle" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-content">
            <div className="modal-body-wrapper">
                {/* <!-- Top Check Green circle indicator badge representation --> */}
                <div className="status-badge-circle success-green">
                    <i className="fa-regular fa-circle-check"></i>
                </div>

                <h3 className="modal-main-title">Accept Request</h3>
                <p className="modal-subtitle-desc">
                    Are you sure you want to accept the request from Emma Wilson? Once accepted, Emma Wilson will
                    receive a link to schedule with you. You can still update your availability after the request is
                    accepted.
                </p>

                {/* <!-- Footer Call to Action operational elements --> */}
                <div className="modal-action-footer-btns">
                    <button type="button" className="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn-action-primary-blue" data-bs-dismiss="modal">
                        <i className="fa-regular fa-circle-check"></i> Accept Request
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AcceptRequestModal
