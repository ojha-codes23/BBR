import React from 'react'
import { Link } from 'react-router-dom'

const CongratulationsModal = () => {
  return (
    <>
      <div className="modal fade gl-custom-modal-wrapper" id="congratulationsModal" tabindex="-1"
        aria-labelledby="congratulationsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content gl-modal-main-box">

                <div className="gl-modal-header-action">
                    <button type="button" className="gl-modal-close-trigger" data-bs-dismiss="modal" aria-label="Close">
                        <img src="/imgaes/user/login/cross-icon-modal.svg" alt=""/>
                    </button>
                </div>

                <div className="modal-body gl-modal-core-body">

                    <div className="gl-modal-success-badge">
                        <img src="/imgaes/user/login/modal-head-check-icon.svg" alt=""/>
                    </div>

                    <h2 className="gl-modal-feedback-title" id="congratulationsModalLabel">Congratulations</h2>

                    <p className="gl-modal-feedback-subtitle">Your password has been changed successfully</p>

                    <Link to="/user/login" className="gl-modal-confirm-action-btn" >Ok</Link>

                </div>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default CongratulationsModal
