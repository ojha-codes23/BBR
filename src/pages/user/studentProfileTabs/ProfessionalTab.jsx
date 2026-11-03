import React, { useState } from "react";
import RemoveQualification from "../../../components/user/profile/RemoveQualification";
import AddQualification from "../../../components/user/profile/AddQualification";
import AddNewCertification from "../../../components/user/profile/AddNewCertification";
import RemoveCertification from "../../../components/user/profile/RemoveCertification";

// ✅ 1. Accept isEditing prop
const ProfessionalTab = ({ qualifications = [], certifications = [], isEditing = false }) => {
  const [selectedQualification, setSelectedQualification] = useState(null);
  const [editQualificationData, setEditQualificationData] = useState(null);
  const [editCertificationData, setEditCertificationData] = useState(null);
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <>
      <div className="tab-pane fade show active">
        <div className="gl-dual-panel-modules-wrapper">
          {/* Educational Qualifications */}
          <div className="gl-panel-card-container">
            <div className="gl-panel-header-row">
              <h2 className="gl-panel-main-heading">
                Educational Qualifications
              </h2>
            </div>

            <div className="gl-panel-list-stack-items">
              {qualifications.map((item) => (
                <div className="gl-nested-item-row-card" key={item.id}>
                  <div className="gl-item-icon-avatar blue-box">
                    <span aria-hidden="true">🎓</span>
                  </div>

                  <div className="gl-item-details-metadata">
                    <h3 className="gl-item-main-title">{item.name}</h3>
                    <p className="gl-item-subtitle-org">{item.institution_name}</p>
                    <p className="gl-item-extra-muted-info">
                      {item.field_of_study} • {item.end_year}
                    </p>
                  </div>

                  {/* ✅ 2. Conditionally Render Action Buttons */}
                  {isEditing && (
                    <div className="gl-item-actions-cluster">
                      <button
                        type="button"
                        className="gl-action-icon-btn edit-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#QualificationModal"
                        aria-label={`Edit ${item.name}`}
                        onClick={() => setEditQualificationData(item)}
                      >
                        <img
                          src="/images/user/super-user-dashboard/edit-icon-profile.svg"
                          alt=""
                        />
                      </button>

                      <button
                        type="button"
                        className="gl-action-icon-btn delete-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#removeQualificationModal"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => setSelectedQualification(item)}
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ✅ 3. Conditionally Render Add Button */}
            {isEditing && (
              <button
                type="button"
                className="gl-panel-add-action-btn"
                data-bs-toggle="modal"
                data-bs-target="#QualificationModal"
                onClick={() => setEditQualificationData(null)}
              >
                Add New Qualification
              </button>
            )}
          </div>

          {/* Certifications */}
          <div className="gl-panel-card-container">
            <div className="gl-panel-header-row">
              <h2 className="gl-panel-main-heading">Certifications</h2>
            </div>

            <div className="gl-panel-list-stack-items">
              {certifications.map((item) => (
                <div className="gl-nested-item-row-card" key={item.id}>
                  <div className="gl-item-icon-avatar blue-box">
                    <span aria-hidden="true">🏅</span>
                  </div>

                  <div className="gl-item-details-metadata">
                    <h3 className="gl-item-main-title">{item.name}</h3>
                    <p className="gl-item-subtitle-org">{item.institution_name}</p>
                    <p className="gl-item-inline-credential">
                      Credential ID: {item.certificate_number}
                    </p>

                    <div className="gl-item-timeline-split">
                      <span>Issued: {item.issue_date ? item.issue_date.slice(0, 10) : "N/A"}</span>
                      <span>Expires: {item.expiry_date ? item.expiry_date.slice(0, 10) : "N/A"}</span>
                    </div>
                  </div>

                  {/* ✅ 4. Conditionally Render Action Buttons */}
                  {isEditing && (
                    <div className="gl-item-actions-cluster">
                      <button
                        type="button"
                        className="gl-action-icon-btn edit-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#addCertificationModal"
                        aria-label={`Edit ${item.name}`}
                        onClick={() => setEditCertificationData(item)}
                      >
                        <img
                          src="/images/user/super-user-dashboard/edit-icon-profile.svg"
                          alt=""
                        />
                      </button>

                      <button
                        type="button"
                        className="gl-action-icon-btn delete-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#removeCertificationModal"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => setSelectedCertification(item)}
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ✅ 5. Conditionally Render Add Button */}
            {isEditing && (
              <button
                type="button"
                className="gl-panel-add-action-btn"
                data-bs-toggle="modal"
                data-bs-target="#addCertificationModal"
                onClick={() => setEditCertificationData(null)}
              >
                Add New Certification
              </button>
            )}
          </div>
        </div>
      </div>

      <AddQualification editData={editQualificationData} />
      <RemoveQualification qualification={selectedQualification} />
      <AddNewCertification editData={editCertificationData} />
      <RemoveCertification certification={selectedCertification} />
    </>
  );
};

export default ProfessionalTab;