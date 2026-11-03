import React from "react";

const DeleteSowTemplate = ({ show, onClose, onConfirm, isPending }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div
        className="modal fade show gl-custom-popup-wrapper"
        id="deleteDistrictModal"
        tabIndex="-1"
        aria-labelledby="deleteDistrictModalLabel"
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered gl-popup-delete-dialog">
          <div className="modal-content gl-popup-main-box gl-popup-delete-box">
            <div className="gl-popup-delete-header">
              <button
                type="button"
                className="gl-popup-close-trigger"
                aria-label="Close"
                onClick={onClose}
              >
                <img
                  src="/images/teacher/super-user-dashboard/popup-cross-icon.svg"
                  alt="close"
                />
              </button>
            </div>

            <div className="modal-body gl-popup-core-body gl-popup-delete-body">
              <div className="gl-popup-danger-icon-circle">
                <img
                  src="/images/teacher/popup-image/delete-popup-icon.svg"
                  alt=""
                />
              </div>

              <h2
                className="gl-popup-delete-title"
                id="deleteDistrictModalLabel"
              >
                Delete SOW Template
              </h2>
              <p className="gl-popup-delete-desc">
                Are you sure you want to delete this template?
              </p>
              <p className="gl-popup-delete-desc">
                This template is currently used in existing <br /> contracts.
                Deleting it will not affect active SOW.
              </p>

              <div className="gl-popup-delete-actions">
                <button
                  type="button"
                  className="gl-popup-btn-cancel-link"
                  disabled={isPending}
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="gl-popup-btn-danger-confirm"
                  disabled={isPending}
                  onClick={onConfirm}
                >
                  <img
                    src="/images/teacher/popup-image/small-delete-icon.svg"
                    alt=""
                  />
                  {isPending ? "Deleting..." : "Delete Template"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteSowTemplate;