import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useProfile from "../../hooks/teacher/useProfile";

const AddSubjectModal = ({
  show,
  onClose,
  onAddSubject,
  isLoading = false,
  masteryOptions: propMasteryOptions,
}) => {
  const [subjectName, setSubjectName] = useState("");
  const [levelOfMastery, setLevelOfMastery] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [masteryOptions, setMasteryOptions] = useState(
    propMasteryOptions && propMasteryOptions.length > 0 ? propMasteryOptions : []
  );

  const { getExpertiseDropdownOptions, isLoadingExpertiseDropdownOptions, addExpertiseSubject,
    isAddingExpertiseSubject,



  } =
    useProfile();

  useEffect(() => {
    if (propMasteryOptions && propMasteryOptions.length > 0) {
      setMasteryOptions(propMasteryOptions);
    }
  }, [propMasteryOptions]);

  useEffect(() => {
    if (show) {
      setSubjectName("");
      setLevelOfMastery("");
      setYearsOfExperience("");

      if (!propMasteryOptions || propMasteryOptions.length === 0) {
        const fetchOptions = async () => {
          try {
            const res = await getExpertiseDropdownOptions();
            const data = res?.data || res;
            const levels = data?.levelOfMastery || [];
            if (Array.isArray(levels)) {
              setMasteryOptions(levels);
            }
          } catch (err) {
            console.error("Failed to load expertise dropdown options:", err);
          }
        };

        fetchOptions();
      }
    }
  }, [show, propMasteryOptions]);

  if (!show) {
    return null;
  }

  const isSubmitting = isLoading || isAddingExpertiseSubject;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subjectName.trim()) {
      toast.error("Please enter a subject name");
      return;
    }
    if (!levelOfMastery) {
      toast.error("Please select a mastery level");
      return;
    }

    try {
      const payload = {
        subjectName: subjectName.trim(),
        yearsOfExperience:
          yearsOfExperience !== "" ? Number(yearsOfExperience) : 5,
        levelOfMastery,
      };

      const res = await addExpertiseSubject(payload);
      toast.success("Subject added successfully!");

      if (onAddSubject) {
        onAddSubject(
          res?.data || { ...payload, id: res?.data?.id || `sub_${Date.now()}` }
        );
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Failed to add expertise subject:", error);
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to add subject";
      toast.error(errorMsg);
    }
  };

  return (
    <div
      className="modal fade show"
      id="addNewSubjectModal"
      tabIndex="-1"
      aria-hidden="true"
      style={{
        display: "block",
        backgroundColor: "rgba(16, 24, 40, 0.6)",
        zIndex: 1055,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting && onClose) {
          onClose();
        }
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered mx-auto"
        style={{ maxWidth: "680px" }}
      >
        <div className="modal-content popup-modal-container-canvas">
          {/* Out of Box Absolute Floating Close Button */}
          <button
            type="button"
            className="modal-external-floating-close"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Header Block Area */}
          <div className="popup-header-row-flex">
            <div className="popup-avatar-icon-square">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <h3 className="popup-header-title-text">Add New Subject</h3>
          </div>

          {/* Fields Inputs Configured Verbatim to Screenshot */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="preference-field-label">Subject Name</label>
              <input
                type="text"
                className="custom-select-input-node"
                placeholder="e.g., Subject Name"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                style={{ cursor: "text" }}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="mb-4">
              <label className="preference-field-label">Level</label>
              <div className="select-chevron-wrapper">
                <select
                  className="custom-select-input-node"
                  value={levelOfMastery}
                  onChange={(e) => setLevelOfMastery(e.target.value)}
                  style={{ color: levelOfMastery ? "#101828" : "#98A2B3" }}
                  disabled={isSubmitting || isLoadingExpertiseDropdownOptions}
                  required
                >
                  <option value="" disabled>
                    {isLoadingExpertiseDropdownOptions
                      ? "Loading levels..."
                      : "Select Level"}
                  </option>
                  {masteryOptions.map((opt, idx) => {
                    const val =
                      typeof opt === "object" ? opt.value : opt;
                    const lbl =
                      typeof opt === "object" ? opt.label : opt;
                    return (
                      <option key={val || idx} value={val}>
                        {lbl}
                      </option>
                    );
                  })}
                </select>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </div>

            <div className="mb-4">
              <label className="preference-field-label">Year of Experience</label>
              <input
                type="number"
                min="0"
                className="custom-select-input-node"
                placeholder="5"
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                style={{
                  cursor: "text",
                  appearance: "auto",
                  WebkitAppearance: "auto",
                }}
                disabled={isSubmitting}
              />
            </div>

            {/* Footer Functional Anchors */}
            <div className="popup-footer-action-row">
              <button
                type="button"
                className="btn-popup-anchor-cancel"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-popup-submit-blue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add Subject"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AddSubjectModal;













