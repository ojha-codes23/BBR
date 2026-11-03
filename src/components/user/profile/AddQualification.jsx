import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useStudentProfile from "../../../hooks/user/useStudentProfile";

const AddQualification = ({editData = null}) => {
    const {
        saveStudentQualificationAsync,
        isSavingStudentQualification,
        refetchStudentProfile,
    } = useStudentProfile();

    const isEditing = !!editData;

    const [formData, setFormData] = useState({
        degree_diploma: "", // Changed from qualification_id to match Postman
        institution_name: "",
        field_of_study: "",
        end_year: "2025",
    });

        // Sync form data when editData changes (e.g., user clicks Edit on a different item)
        useEffect(() => {
            if (editData) {
                setFormData({
                    degree_diploma: editData.name || "", // API uses 'name' for the degree
                    institution_name: editData.institution_name || "",
                    field_of_study: editData.field_of_study || "",
                    end_year: editData.end_year || "2025",
                });
            } else {
                // Reset if opening for Add
                setFormData({
                    degree_diploma: "",
                    institution_name: "",
                    field_of_study: "",
                    end_year: "2025",
                });
            }
        }, [editData]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Stops page reload
        e.stopPropagation(); // Stops event bubbling

        if (
            !formData.degree_diploma.trim() ||
            !formData.institution_name.trim() ||
            !formData.field_of_study.trim() ||
            !formData.end_year
        ) {
            toast.error("Please fill in all required fields.");
            return;
        }

        // 1. Create FormData object (Required for your API)
        const data = new FormData();
        data.append("qualification_id", isEditing ? editData?.id : ""); // Empty for new qualification
        data.append("degree_diploma", formData.degree_diploma.trim());
        data.append("institution_name", formData.institution_name.trim());
        data.append("field_of_study", formData.field_of_study.trim());
        data.append("end_year", formData.end_year);

        try {
            // 2. Send FormData
            const response = await saveStudentQualificationAsync(data);

            if (response?.success === false) {
                toast.error(response.message || `Unable to {isEditing ? "edit" : "add"} qualification.`);
                return;
            }

            toast.success(response?.message || `Qualification ${isEditing ? 'updated' : 'added'} successfully.`);

            setFormData({
                degree_diploma: "",
                institution_name: "",
                field_of_study: "",
                end_year: "2025",
            });

            await refetchStudentProfile();

            // 3. Close the modal safely
            //   const modalElement = document.getElementById("QualificationModal");
            //   if (modalElement && window.bootstrap?.Modal) {
            //     const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
            //     modalInstance?.hide();
            //   }

            // 1. Click the cancel button to trigger Bootstrap's close
            document.getElementById("closeQualificationModalBtn")?.click();

            // 2. Bulletproof fallback: manually remove the stuck backdrop if it exists
            setTimeout(() => {
                const backdrops = document.querySelectorAll(".modal-backdrop");
                backdrops.forEach((backdrop) => backdrop.remove());
                document.body.classList.remove("modal-open");
                document.body.style.overflow = "auto";
                document.body.style.paddingRight = "";
            }, 300); // Small delay to let Bootstrap finish its animation

        } catch (error) {
            toast.error(
                error?.message ||
                error?.response?.data?.message ||
                `Unable to ${isEditing ? 'edit' : 'add'}. Please try again.`
            );
        }
    };

    return (
        <div className="modal fade" id="QualificationModal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "640px" }}>
                <div className="modal-content" style={{ borderRadius: "24px", padding: "36px 40px", border: "none", position: "relative" }}>

                    <button
                        type="button"
                        className="close gl-modal-dismiss-anchor"
                        aria-label="Close"
                        data-bs-dismiss="modal"
                        style={{ border: "none", background: "transparent" }}
                    >
                        <span aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="18" x2="18" y2="6" />
                            </svg>
                        </span>
                    </button>

                    <div className="modal-body p-0 text-left">
                        <div className="gl-form-header-block mb-4">
                            <div className="gl-form-icon-container blue-brand-bg">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                                </svg>
                            </div>
                            <h2 className="gl-form-main-title">{isEditing ? "Edit Qualification" : "Add Qualification"}</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="gl-qualification-form-engine">
                            <div className="form-group mb-3">
                                <label htmlFor="degree_diploma" className="gl-input-form-label">
                                    Degree / Diploma <span className="text-danger">*</span>
                                </label>
                                <input
                                    id="degree_diploma"
                                    name="degree_diploma" // Updated name
                                    type="text"
                                    className="form-control gl-custom-input-field"
                                    placeholder="e.g., Ph.D. in Mathematics"
                                    value={formData.degree_diploma}
                                    onChange={handleChange}
                                    disabled={isSavingStudentQualification}
                                    required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="institution_name" className="gl-input-form-label">
                                    Institution <span className="text-danger">*</span>
                                </label>
                                <input
                                    id="institution_name"
                                    name="institution_name"
                                    type="text"
                                    className="form-control gl-custom-input-field"
                                    placeholder="e.g., Stanford University"
                                    value={formData.institution_name}
                                    onChange={handleChange}
                                    disabled={isSavingStudentQualification}
                                    required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="field_of_study" className="gl-input-form-label">
                                    Field of Study <span className="text-danger">*</span>
                                </label>
                                <input
                                    id="field_of_study"
                                    name="field_of_study"
                                    type="text"
                                    className="form-control gl-custom-input-field"
                                    placeholder="e.g., Applied Mathematics"
                                    value={formData.field_of_study}
                                    onChange={handleChange}
                                    disabled={isSavingStudentQualification}
                                    required
                                />
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="end_year" className="gl-input-form-label">
                                    Year of Completion
                                </label>
                                <div className="gl-select-arrow-wrapper">
                                    <select
                                        id="end_year"
                                        name="end_year"
                                        className="form-control gl-custom-select-field"
                                        value={formData.end_year}
                                        onChange={handleChange}
                                        disabled={isSavingStudentQualification}
                                    >
                                        {Array.from({ length: 60 }, (_, index) => new Date().getFullYear() - index).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="gl-form-action-footer-row d-flex align-items-center justify-content-end mt-4">
                                <button
                                    type="button"
                                    id="closeQualificationModalBtn"
                                    className="btn gl-form-cancel-link-btn mr-3"
                                    data-bs-dismiss="modal"
                                    disabled={isSavingStudentQualification}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn gl-form-submit-pill-btn spec-blue-btn px-4 py-2 font-weight-bold"
                                    disabled={isSavingStudentQualification}
                                >
                                    {isSavingStudentQualification ? "Saving..." : isEditing ? "Save Changes" : "Add Qualification"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQualification;
