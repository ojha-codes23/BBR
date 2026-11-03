import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useProfile from "../../hooks/teacher/useProfile";

const AddQualification = ({
  show,
  onClose,
  qualification = null,
  onSuccess,
}) => {
  const {
    addQualification,
    isAddingQualification,
    updateQualification,
    isUpdatingQualification,
  } = useProfile();

  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    specialization: "",
    year: "",
  });

  const isEditMode = Boolean(qualification);

  useEffect(() => {
    if (qualification) {
      setFormData({
        degree: qualification.degree || "",
        institution: qualification.institution || "",
        specialization:
          qualification.specialization || qualification.fieldOfStudy || "",
        year: qualification.year || qualification.graduationYear || "",
      });
    } else {
      setFormData({
        degree: "",
        institution: "",
        specialization: "",
        year: "",
      });
    }
  }, [qualification, show]);

  if (!show) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.degree?.trim()) {
      toast.error("Please enter a degree/diploma");
      return;
    }
    if (!formData.institution?.trim()) {
      toast.error("Please enter an institution/university");
      return;
    }

    try {
      if (isEditMode) {
        const qualificationId =
          qualification?.qualificationId ||
          qualification?.id ||
          qualification?._id;

        await updateQualification({
          qualificationId,
          degree: formData.degree,
          institution: formData.institution,
          specialization: formData.specialization,
          year: formData.year,
        });
        toast.success("Qualification updated successfully!");
      } else {
        await addQualification({
          degree: formData.degree,
          institution: formData.institution,
          specialization: formData.specialization,
          year: formData.year,
        });
        toast.success("Qualification added successfully!");
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
          ? "Failed to update qualification"
          : "Failed to add qualification");
      toast.error(errorMsg);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div
        className="modal fade show"
        id="addQualificationModal"
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
              disabled={isAddingQualification || isUpdatingQualification}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="popup-header-block">
              <div className="popup-icon-avatar-box">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="popup-header-texts">
                <h4>
                  {isEditMode ? "Edit Qualification" : "Add Qualification"}
                </h4>
                <p>
                  {isEditMode
                    ? "Update your educational qualification details here."
                    : "Add your educational qualifications details here."}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-header">Degree/Diploma</label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="e.g. Master of Science"
                    value={formData.degree}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        degree: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-header">Field of Study</label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="e.g. Computer Science"
                    value={formData.specialization}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        specialization: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-header">
                    Institution/University
                  </label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="e.g. Stanford University"
                    value={formData.institution}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        institution: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-header">Graduation Year</label>
                  <input
                    type="text"
                    className="form-control-custom-field"
                    placeholder="e.g. 2020"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        year: e.target.value,
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
                  disabled={isAddingQualification || isUpdatingQualification}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-popup-primary"
                  disabled={isAddingQualification || isUpdatingQualification}
                >
                  {isEditMode
                    ? isUpdatingQualification
                      ? "Saving..."
                      : "Update Qualification"
                    : isAddingQualification
                    ? "Adding..."
                    : "Add Qualification"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQualification;
