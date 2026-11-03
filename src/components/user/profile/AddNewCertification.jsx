import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import useStudentProfile from '../../../hooks/user/useStudentProfile';

const AddNewCertification = ({ editData = null }) => {
    const {
        saveStudentCertificationAsync,
        isSavingStudentCertification,
        refetchStudentProfile,
    } = useStudentProfile();

    const isEditing = !!editData;

    const [formData, setFormData] = useState({
        certificate_name: "",
        organization_name: "",
        issue_date: "",
        expiry_date: "",
        certificate_number: "",
    });

    useEffect(() => {
        if (editData) {
            setFormData({
                certificate_name: editData.name || "",
                organization_name: editData.institution_name || "",
                issue_date: editData.issue_date ? editData.issue_date.slice(0, 10) : "",
                expiry_date: editData.expiry_date ? editData.expiry_date.slice(0, 10) : "",
                certificate_number: editData.certificate_number || "",
            });
        } else {
            setFormData({
                certificate_name: "",
                organization_name: "",
                issue_date: "",
                expiry_date: "",
                certificate_number: "",
            });
        }
    }, [editData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (
            !formData.certificate_name ||
            !formData.organization_name ||
            !formData.issue_date ||
            !formData.certificate_number
        ) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const data = new FormData();
        data.append("certificate_id", isEditing ? editData.id : "");
        data.append("certificate_name", formData.certificate_name.trim());
        data.append("organization_name", formData.organization_name.trim());
        data.append("issue_date", formData.issue_date);
        data.append("expiry_date", formData.expiry_date);
        data.append("certificate_number", formData.certificate_number.trim());

        try {
            const response = await saveStudentCertificationAsync(data);

            if (response?.success === false) {
                toast.error(response.message || `Unable to ${isEditing ? 'edit' : 'add'} certification.`);
                return;
            }

            toast.success(response?.message || `Certification ${isEditing ? 'updated' : 'added'} successfully.`);

            await refetchStudentProfile();

            // Safely close modal by clicking the Cancel button
            document.getElementById("closeAddCertificationModalBtn")?.click();

            setTimeout(() => {
                const backdrops = document.querySelectorAll(".modal-backdrop");
                backdrops.forEach((backdrop) => backdrop.remove());
                document.body.classList.remove("modal-open");
                document.body.style.overflow = "auto";
                document.body.style.paddingRight = "";
            }, 300);

        } catch (error) {
            toast.error(
                error?.message ||
                error?.response?.data?.message ||
                `Unable to ${isEditing ? 'edit' : 'add'} certification.`
            );
        }
    };

    return (
        <div className="modal fade" id="addCertificationModal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "660px" }}>
                <div className="modal-content" style={{ borderRadius: "24px", padding: "36px 40px", border: "none", position: "relative" }}>

                    <button
                        type="button"
                        className="close gl-modal-dismiss-anchor"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        style={{ border: "none", background: "transparent" }}
                    >
                        <span aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </span>
                    </button>

                    <div className="modal-body p-0 text-left">
                        <div className="gl-form-header-block mb-4">
                            <div className="gl-form-icon-container blue-brand-bg">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="7"></circle>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </svg>
                            </div>
                            <h2 className="gl-form-main-title">
                                {isEditing ? "Edit Certification" : "Add Certification"}
                            </h2>
                        </div>

                        {/* ADDED onSubmit */}
                        <form onSubmit={handleSubmit} className="gl-certification-form-engine">
                            
                            <div className="form-group mb-3">
                                <label className="gl-input-form-label">Certification Name <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    name="certificate_name"
                                    value={formData.certificate_name}
                                    onChange={handleChange}
                                    className="form-control gl-custom-input-field" 
                                    placeholder="e.g., Certification Name" 
                                    required 
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label className="gl-input-form-label">Issuing Organization <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    name="organization_name"
                                    value={formData.organization_name}
                                    onChange={handleChange}
                                    className="form-control gl-custom-input-field" 
                                    placeholder="e.g., Google" 
                                    required 
                                />
                            </div>

                            <div className="d-flex flex-row gl-form-date-inline-row mb-3">
                                <div className="gl-flex-date-item">
                                    <label className="gl-input-form-label">Issue Date <span className="text-danger">*</span></label>
                                    <div className="gl-date-input-icon-wrapper">
                                        <input 
                                            type="date" 
                                            name="issue_date"
                                            value={formData.issue_date}
                                            onChange={handleChange}
                                            className="form-control gl-custom-input-field gl-date-native-override" 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="gl-flex-date-item">
                                    <label className="gl-input-form-label">Expiry Date</label>
                                    <div className="gl-date-input-icon-wrapper">
                                        <input 
                                            type="date" 
                                            name="expiry_date"
                                            value={formData.expiry_date}
                                            onChange={handleChange}
                                            className="form-control gl-custom-input-field gl-date-native-override" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <label className="gl-input-form-label">Credential ID <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    name="certificate_number"
                                    value={formData.certificate_number}
                                    onChange={handleChange}
                                    className="form-control gl-custom-input-field" 
                                    placeholder="e.g., NBPT-2020-98765" 
                                    required 
                                />
                            </div>

                            <div className="gl-form-action-footer-row d-flex align-items-center justify-content-end mt-4">
                                <button 
                                    type="button" 
                                    id="closeAddCertificationModalBtn"
                                    className="btn gl-form-cancel-link-btn mr-3"
                                    data-bs-dismiss="modal"
                                    disabled={isSavingStudentCertification}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="btn gl-form-submit-pill-btn spec-blue-btn px-4 py-2 font-weight-bold"
                                    disabled={isSavingStudentCertification}
                                >
                                    {isSavingStudentCertification 
                                        ? "Saving..." 
                                        : isEditing ? "Save Changes" : "Add Certification"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewCertification;