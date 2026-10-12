import React from 'react'

const DeleteContractTemplate = () => {
  return (
    <div className="modal fade gl-custom-popup-wrapper" id="deleteContracttModal" tabindex="-1"
    aria-labelledby="deleteDistrictModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered gl-popup-delete-dialog">
        <div className="modal-content gl-popup-main-box gl-popup-delete-box">

            <div className="gl-popup-delete-header">
                <button type="button" className="gl-popup-close-trigger" data-bs-dismiss="modal" aria-label="Close">
                    <img src="/images/teacher/super-user-dashboard/popup-cross-icon.svg" alt="close" />
                </button>
            </div>

            <div className="modal-body gl-popup-core-body gl-popup-delete-body">

                <div className="gl-popup-danger-icon-circle">
                    <img src="/images/teacher/popup-image/delete-popup-icon.svg" alt="" />
                </div>

                <h2 className="gl-popup-delete-title" id="deleteDistrictModalLabel">Delete <br /> Contract Template</h2>
                <p className="gl-popup-delete-desc">Are you sure you want to delete this template?</p>
                <p className="gl-popup-delete-desc">This template is currently used in existing contracts. Deleting it
                    will not affect active contracts.</p>


                <div className="gl-popup-delete-actions">
                    <button type="button" className="gl-popup-btn-cancel-link" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="gl-popup-btn-danger-confirm">
                        <img src="/images/teacher/popup-image/small-delete-icon.svg" alt="" />
                        Delete Template
                    </button>
                </div>



            </div>

        </div>
    </div>
</div>
  )
}

export default DeleteContractTemplate