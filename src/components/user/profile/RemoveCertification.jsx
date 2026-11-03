import React from "react";
import toast from "react-hot-toast";
import useStudentProfile from "../../../hooks/user/useStudentProfile";

const RemoveCertification = ({ certification }) => {
  const {
    deleteStudentCertificationAsync,
    isDeletingStudentCertification,
    refetchStudentProfile,
  } = useStudentProfile();

  const handleRemove = async () => {
    if (!certification?.id) {
      toast.error("No certification selected.");
      return;
    }

    const formData = new FormData();
    formData.append("certification_id", certification.id);

    try {
      const response = await deleteStudentCertificationAsync(formData);

      if (response?.success === false) {
        toast.error(response.message || "Unable to remove certification.");
        return;
      }

      const modalElement = document.getElementById("removeCertificationModal");

      if (modalElement && window.bootstrap?.Modal) {
        const modalInstance =
          window.bootstrap.Modal.getInstance(modalElement) ||
          window.bootstrap.Modal.getOrCreateInstance(modalElement);

        // Wait for modal to finish closing before refetching to prevent UI freezing
        modalElement.addEventListener(
          "hidden.bs.modal",
          () => {
            refetchStudentProfile();

            // Safety fallback cleanup
            const backdrops = document.querySelectorAll(".modal-backdrop");
            backdrops.forEach((backdrop) => backdrop.remove());
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "";
          },
          { once: true }
        );

        modalInstance.hide();
      } else {
        refetchStudentProfile();
      }

      toast.success(response?.message || "Certification removed successfully.");

    } catch (error) {
      console.error("Delete certification error:", error);
      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Unable to remove certification."
      );
    }
  };


  return (
    <>
      <div
        className="modal fade"
        id="removeCertificationModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered mx-auto"
          style={{ maxWidth: "480px" }}
        >
          <div className="modal-content custom-popup-content">
            <button
              type="button"
              className="modal-external-close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
              disabled={isDeletingStudentCertification}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="text-center">
              <div className="popup-icon-warning-box mx-auto mb-3">
                <i className="fa-solid fa-xmark"></i>
              </div>

              <h4
                className="fw-bold mb-2 text-dark"
                style={{ fontSize: "18px" }}
              >
                Remove Certification
              </h4>

              <p
                className="text-muted mb-4"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.5,
                }}
              >
                Are you sure you want to remove this certification? This
                action cannot be undone.
              </p>
            </div>

            <div className="d-flex gap-3 justify-content-stretch">
              <button
                type="button"
                className="btn-popup-secondary w-50"
                data-bs-dismiss="modal"
                disabled={isDeletingStudentCertification}
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn-popup-danger w-50"
                onClick={handleRemove}
                disabled={isDeletingStudentCertification}
              >
                {isDeletingStudentCertification ? "Removing..." : "Remove"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveCertification;