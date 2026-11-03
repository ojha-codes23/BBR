import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useProfile from "../../hooks/teacher/useProfile";

const AddCertificate = ({
  show,
  onClose,
  certification = null,
  onSuccess,
}) => {
  const {
    addCertification,
    isAddingCertification,
    updateCertification,
    isUpdatingCertification,
  } = useProfile();

  const [formData, setFormData] = useState({
    title: "",
    issuingOrganization: "",
    credentialId: "",
    issueDate: "",
    expiryDate: "",
  });

  const isEditMode = Boolean(certification);

  useEffect(() => {
    if (certification) {
      setFormData({
        title:
          certification.title ||
          certification.name ||
          certification.certificationName ||
          "",
        issuingOrganization: certification.issuingOrganization || "",
        credentialId: certification.credentialId || "",
        issueDate: certification.issueDate || "",
        expiryDate:
          certification.expiryDate || certification.expirationDate || "",
      });
    } else {
      setFormData({
        title: "",
        issuingOrganization: "",
        credentialId: "",
        issueDate: "",
        expiryDate: "",
      });
    }
  }, [certification, show]);

  if (!show) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title?.trim()) {
      toast.error("Please enter certification name");
      return;
    }
    if (!formData.issuingOrganization?.trim()) {
      toast.error("Please enter issuing organization");
      return;
    }

    try {
      if (isEditMode) {
        const certificationId =
          certification?.certificationId ||
          certification?.id ||
          certification?._id;

        await updateCertification({
          certificationId,
          id: certificationId,
          title: formData.title,
          name: formData.title,
          certificationName: formData.title,
          issuingOrganization: formData.issuingOrganization,
          credentialId: formData.credentialId,
          issueDate: formData.issueDate,
          expiryDate: formData.expiryDate,
          expirationDate: formData.expiryDate,
        });
        toast.success("Certification updated successfully!");
      } else {
        await addCertification({
          title: formData.title,
          name: formData.title,
          certificationName: formData.title,
          issuingOrganization: formData.issuingOrganization,
          credentialId: formData.credentialId,
          issueDate: formData.issueDate,
          expiryDate: formData.expiryDate,
          expirationDate: formData.expiryDate,
        });
        toast.success("Certification added successfully!");
      }

      if (onSuccess) {
        onSuccess();
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message ||
        (isEditMode
          ? "Failed to update certification"
          : "Failed to add certification");
      toast.error(errorMsg);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      <div
        className="modal fade show"
        id="addCertificationModal"
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content custom-popup-content">
            <button
              type="button"
              className="modal-external-close-btn"
              onClick={onClose}
              disabled={isAddingCertification || isUpdatingCertification}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="popup-header-block">
              <div className="popup-icon-avatar-box">
                <i className="fa-solid fa-award"></i>
              </div>
              <div className="popup-header-texts">
                <h4>
                  {isEditMode
                    ? "Edit Certification or License"
                    : "Add Certification or License"}
                </h4>
                <p>
                  {isEditMode
                    ? "Update your professional certification details here."
                    : "Add your dynamic professional certifications details here."}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-header">
                    Certification Name
                  </label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="e.g. Google Certified Educator"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-header">
                    Issuing Organization
                  </label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="e.g. Google"
                    value={formData.issuingOrganization}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        issuingOrganization: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-header">Credential ID</label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="e.g. GCE-12345"
                    value={formData.credentialId}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        credentialId: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-header">Issue Date</label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="DD-MM-YYYY"
                    value={formData.issueDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        issueDate: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label-header">Expiration Date</label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="DD-MM-YYYY"
                    value={formData.expiryDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        expiryDate: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="popup-footer-actions">
                <button
                  type="button"
                  className="btn-popup-secondary"
                  onClick={onClose}
                  disabled={isAddingCertification || isUpdatingCertification}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-popup-primary"
                  disabled={isAddingCertification || isUpdatingCertification}
                >
                  {isEditMode
                    ? isUpdatingCertification
                      ? "Saving..."
                      : "Update Certification"
                    : isAddingCertification
                    ? "Adding..."
                    : "Add Certification"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCertificate;
