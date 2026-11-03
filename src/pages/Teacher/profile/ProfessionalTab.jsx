import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCommon from "../../../hooks/teacher/useCommon";
import useProfile from "../../../hooks/teacher/useProfile";
import AddQualification from "../../../components/teacher/AddQualification";
import RemoveCertificate from "../../../components/teacher/RemoveCertificate";
import AddCertificate from "../../../components/teacher/AddCertificate";
import RemoveQualification from "../../../components/teacher/RemoveQualification";

// Helper to convert date string (e.g., DD-MM-YYYY or ISO) into YYYY-MM-DD required by HTML5 date inputs
const formatDateForInput = (dateStr) => {
  if (!dateStr) return "";
  const str = String(dateStr).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const parts = str.split(/[-/]/);
  if (parts.length === 3) {
    if (parts[0].length <= 2 && parts[2].length === 4) {
      return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(
        2,
        "0"
      )}`;
    }
    if (parts[0].length === 4 && parts[2].length <= 2) {
      return `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].padStart(
        2,
        "0"
      )}`;
    }
  }
  const d = new Date(str);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split("T")[0];
  }
  return str;
};

const ProfessionalTab = ({
  isEditing: parentIsEditing,
  setIsEditing: parentSetIsEditing,
}) => {
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const isEditing =
    parentIsEditing !== undefined ? parentIsEditing : localIsEditing;
  const setIsEditing = parentSetIsEditing || setLocalIsEditing;

  // Modal visibility states
  const [showAddQualification, setShowAddQualification] = useState(false);
  const [selectedQualification, setSelectedQualification] = useState(null);
  const [showRemoveQualification, setShowRemoveQualification] = useState(false);
  const [showAddCertificate, setShowAddCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showRemoveCertificate, setShowRemoveCertificate] = useState(false);

  // Independent React Hook Form instance for employment details
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      jobTitle: "",
      institution: "",
      department: "",
      employeeId: "",
      yearsOfExperience: "",
      teachingLevel: "",
      employmentType: "",
      startDate: "",
    },
    mode: "onBlur",
  });

  // Independent GET query for professional tab
  const { profileData, isPendingProfile, refetchProfile } = useCommon({
    tabs: "professional",
  });

  // Independent POST mutation
  const { updateProfessionalTab, isProfessionalTab } = useProfile();

  // Extract nested employmentDetails, qualifications, certifications
  const resData = profileData?.data || profileData;
  const details = resData?.details || resData?.user || resData;
  const employment = details?.employmentDetails || {};
  const qualificationsList = Array.isArray(details?.qualifications)
    ? details.qualifications
    : [];
  const certificationsList = Array.isArray(details?.certifications)
    ? details.certifications
    : [];

  // Hydrate local form when data is loaded
  useEffect(() => {
    if (!profileData) return;

    reset({
      jobTitle:
        employment?.jobTitle ||
        details?.jobTitle ||
        details?.designation ||
        details?.title ||
        "",
      institution:
        employment?.institution ||
        details?.institution ||
        details?.organization ||
        "",
      department: employment?.department || details?.department || "",
      employeeId: employment?.employeeId || details?.employeeId || "",
      yearsOfExperience:
        employment?.yearsOfExperience !== undefined &&
        employment?.yearsOfExperience !== null
          ? String(employment.yearsOfExperience)
          : details?.yearsOfExperience !== undefined &&
            details?.yearsOfExperience !== null
          ? String(details.yearsOfExperience)
          : "",
      teachingLevel: employment?.teachingLevel || details?.teachingLevel || "",
      employmentType:
        employment?.employmentType || details?.employmentType || "",
      startDate: formatDateForInput(
        employment?.startDate || details?.startDate || ""
      ),
    });
  }, [profileData, reset]);

  // Form submission for employment details
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      if (data.jobTitle) formData.append("jobTitle", data.jobTitle);
      if (data.institution) formData.append("institution", data.institution);
      if (data.department) formData.append("department", data.department);
      if (data.employeeId) formData.append("employeeId", data.employeeId);
      if (data.yearsOfExperience)
        formData.append("yearsOfExperience", String(data.yearsOfExperience));
      if (data.teachingLevel)
        formData.append("teachingLevel", data.teachingLevel);
      if (data.employmentType)
        formData.append("employmentType", data.employmentType);
      if (data.startDate) formData.append("startDate", data.startDate);

      const response = await updateProfessionalTab(formData);
      if (response?.success !== false) {
        toast.success(
          response?.message || "Professional profile updated successfully!"
        );
        setIsEditing(false);
        refetchProfile();
      } else {
        toast.error(
          response?.message || "Failed to update professional profile."
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update professional profile. Please try again."
      );
    }
  };

  return (
    <>
      <div className="professional-profile-container">
        {/* Employment Details Section Form */}
        <form id="profile-tab-active-form" onSubmit={handleSubmit(onSubmit)}>
          <section className="professional-section-card">
            <div className="card-headline-title">
              <i className="fa-solid fa-briefcase"></i> Employment Details
            </div>

            <fieldset
              disabled={!isEditing}
              style={{ border: "none", padding: 0, margin: 0 }}
            >
              <div className="employment-form-body">
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label-header">Job Title</label>
                    <input
                      type="text"
                      className={`form-control-custom-field ${
                        errors.jobTitle ? "is-invalid" : ""
                      }`}
                      placeholder="e.g. Senior Mathematics Instructor"
                      {...register("jobTitle", {
                        required: "Job title is required",
                      })}
                    />
                    {errors.jobTitle && (
                      <span className="text-danger small">
                        {errors.jobTitle.message}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-header">Institution</label>
                    <input
                      type="text"
                      className={`form-control-custom-field ${
                        errors.institution ? "is-invalid" : ""
                      }`}
                      placeholder="e.g. Stanford University"
                      {...register("institution", {
                        required: "Institution is required",
                      })}
                    />
                    {errors.institution && (
                      <span className="text-danger small">
                        {errors.institution.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label-header">Department</label>
                    <input
                      type="text"
                      className="form-control-custom-field"
                      placeholder="e.g. Mathematics"
                      {...register("department")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-header">Employee ID</label>
                    <input
                      type="text"
                      className="form-control-custom-field"
                      placeholder="e.g. TH-2024-001"
                      {...register("employeeId")}
                    />
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label-header">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      className="form-control-custom-field"
                      placeholder="e.g. 5"
                      {...register("yearsOfExperience")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-header">Teaching Level</label>
                    <div className="select-field-chevron-position">
                      <select
                        className="form-control-custom-field"
                        {...register("teachingLevel")}
                      >
                        <option value="">Select Teaching Level</option>
                        <option value="School">School</option>
                        <option value="College">College</option>
                        <option value="University">University</option>
                        <option value="Professional Training">
                          Professional Training
                        </option>
                      </select>
                      <i className="fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label-header">Employment Type</label>
                    <div className="select-field-chevron-position">
                      <select
                        className="form-control-custom-field"
                        {...register("employmentType")}
                      >
                        <option value="">Select Employment Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Freelance">Freelance</option>
                      </select>
                      <i className="fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-header">Start Date</label>
                    <input
                      type="date"
                      className="form-control-custom-field"
                      {...register("startDate")}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          </section>
        </form>

        {/* Qualifications & Certifications Grid */}
        <div className="row g-4 mt-2">
          {/* Column 1: Educational Qualifications */}
          <div className="col-lg-6">
            <div className="professional-section-card">
              <div className="card-headline-title">
                <i className="fa-solid fa-graduation-cap"></i> Educational
                Qualifications
              </div>

              {qualificationsList.length > 0 ? (
                qualificationsList.map((q, idx) => (
                  <div
                    className="record-entry-strip-node"
                    key={q.id || q.qualificationId || idx}
                  >
                    <div className="record-content-flex-left">
                      <div className="record-avatar-blue-box">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <div className="record-meta-texts">
                        <h3>
                          {q.degree}{" "}
                          {q.specialization ? `in ${q.specialization}` : ""}
                        </h3>
                        <div className="institution-label">{q.institution}</div>
                        <p className="extra-details-timeline">
                          {q.fieldOfStudy ? `${q.fieldOfStudy} • ` : ""}
                          {q.year || q.graduationYear}
                        </p>
                      </div>
                    </div>
                    <div className="record-action-triggers-group">
                      <button
                        type="button"
                        className="btn-trigger-action-edit"
                        onClick={() => {
                          setSelectedQualification(q);
                          setShowAddQualification(true);
                        }}
                        title="Edit Qualification"
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn-trigger-action-delete"
                        onClick={() => {
                          setSelectedQualification(q);
                          setShowRemoveQualification(true);
                        }}
                        title="Remove Qualification"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-3 text-muted small text-center">
                  No qualifications added yet.
                </div>
              )}

              <button
                type="button"
                disabled={!isEditing}
                className="btn-append-record-block"
                onClick={() => {
                  setSelectedQualification(null);
                  setShowAddQualification(true);
                }}
                style={{ opacity: !isEditing ? 0.7 : 1 }}
              >
                <i className="fa-solid fa-plus"></i> Add Qualification
              </button>
            </div>
          </div>

          {/* Column 2: Certifications & Licenses */}
          <div className="col-lg-6">
            <div className="professional-section-card">
              <div className="card-headline-title">
                <i className="fa-solid fa-award"></i> Certifications &amp;
                Licenses
              </div>

              {certificationsList.length > 0 ? (
                certificationsList.map((c, idx) => (
                  <div
                    className="record-entry-strip-node flex-column align-items-stretch"
                    key={c.id || c.certificationId || idx}
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="record-content-flex-left align-items-start">
                        <div className="record-avatar-blue-box">
                          <i className="fa-solid fa-medal"></i>
                        </div>
                        <div className="record-meta-texts">
                          <h3>{c.title}</h3>
                          <div className="institution-label">
                            {c.issuingOrganization}
                          </div>
                          {c.credentialId && (
                            <p className="extra-details-timeline">
                              Credential ID: {c.credentialId}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="record-action-triggers-group">
                        <button
                          type="button"
                          className="btn-trigger-action-edit"
                          onClick={() => {
                            setSelectedCertificate(c);
                            setShowAddCertificate(true);
                          }}
                          title="Edit Certification"
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button
                          type="button"
                          className="btn-trigger-action-delete"
                          onClick={() => {
                            setSelectedCertificate(c);
                            setShowRemoveCertificate(true);
                          }}
                          title="Remove Certification"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <div className="cert-extended-meta-grid ps-5">
                      {c.issueDate && <div>Issued: {c.issueDate}</div>}
                      {c.expiryDate && <div>Expires: {c.expiryDate}</div>}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-3 text-muted small text-center">
                  No certifications added yet.
                </div>
              )}

              <button
                type="button"
                disabled={!isEditing}
                className="btn-append-record-block"
                onClick={() => {
                  setSelectedCertificate(null);
                  setShowAddCertificate(true);
                }}
                style={{ opacity: !isEditing ? 0.7 : 1 }}
              >
                <i className="fa-solid fa-plus"></i> Add Certification
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddQualification
        show={showAddQualification}
        qualification={selectedQualification}
        onClose={() => {
          setShowAddQualification(false);
          setSelectedQualification(null);
        }}
        onSuccess={refetchProfile}
      />
      <RemoveCertificate
        show={showRemoveCertificate}
        certification={selectedCertificate}
        onClose={() => {
          setShowRemoveCertificate(false);
          setSelectedCertificate(null);
        }}
        onSuccess={refetchProfile}
      />
      <AddCertificate
        show={showAddCertificate}
        certification={selectedCertificate}
        onClose={() => {
          setShowAddCertificate(false);
          setSelectedCertificate(null);
        }}
        onSuccess={refetchProfile}
      />
      <RemoveQualification
        show={showRemoveQualification}
        qualification={selectedQualification}
        onClose={() => {
          setShowRemoveQualification(false);
          setSelectedQualification(null);
        }}
        onSuccess={refetchProfile}
      />
    </>
  );
};

export default ProfessionalTab;
