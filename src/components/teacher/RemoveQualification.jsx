import React from "react";
import toast from "react-hot-toast";
import useProfile from "../../hooks/teacher/useProfile";

const RemoveQualification = ({
  show,
  onClose,
  qualification = null,
  onSuccess,
}) => {
  const { deleteQualification, isDeletingQualification } = useProfile();

  if (!show) {
    return null;
  }

  const handleRemove = async () => {
    const qualificationId =
      qualification?.qualificationId ||
      qualification?.id ||
      qualification?._id;

    if (!qualificationId) {
      toast.error("Qualification ID not found");
      return;
    }

    try {
      await deleteQualification({ qualificationId });
      toast.success("Qualification removed successfully!");
      if (onSuccess) {
        onSuccess();
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message || "Failed to remove qualification";
      toast.error(errorMsg);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      <div
        className="modal fade show"
        id="removeQualificationModal"
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        <div
          className="modal-dialog modal-dialog-centered mx-auto"
          style={{ maxWidth: "480px" }}
        >
          <div className="modal-content custom-popup-content">
            <button
              type="button"
              className="modal-external-close-btn"
              onClick={onClose}
              disabled={isDeletingQualification}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="text-center">
              <div className="popup-icon-warning-box mx-auto mb-3">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <h4
                className="fw-bold mb-2 text-dark"
                style={{ fontSize: "18px" }}
              >
                Remove Qualification
              </h4>
              <p
                className="text-muted mb-4"
                style={{ fontSize: "14px", lineHeight: "1.5" }}
              >
                Are you sure you want to remove this qualification? This action
                cannot be undone.
              </p>
            </div>

            <div className="d-flex gap-3 justify-content-stretch">
              <button
                type="button"
                className="btn-popup-secondary w-50"
                onClick={onClose}
                disabled={isDeletingQualification}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-popup-danger w-50"
                onClick={handleRemove}
                disabled={isDeletingQualification}
              >
                {isDeletingQualification ? "Removing..." : "Remove"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveQualification;