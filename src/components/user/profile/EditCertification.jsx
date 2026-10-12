import React from "react";

const EditCertification = () => {
  return (
    <>
      <div
        className="modal fade "
        id="editCertificationModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{
            maxWidth: "660px",
          }}
        >
          <div
            className="modal-content"
            style={{
              borderRadius: "24px",
              padding: "36px 40px",
              border: "none",
              position: "relative",
            }}
          >
            <a
              href="#"
              className="close gl-modal-dismiss-anchor"
              aria-label="Close"
               data-bs-dismiss="modal"
            >
              <span aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </a>

            <div className="modal-body p-0 text-left">
              <div className="gl-form-header-block mb-4">
                <div className="gl-form-icon-container blue-brand-bg">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>

                <h2 className="gl-form-main-title">
                  Edit Certification
                </h2>
              </div>

              <form
                action="#"
                method="POST"
                className="gl-certification-form-engine"
              >
                <div className="form-group mb-3">
                  <label className="gl-input-form-label">
                    Certification Name{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control gl-custom-input-field"
                    placeholder="e.g., Certification Name"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="gl-input-form-label">
                    Issuing Organization{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control gl-custom-input-field"
                    placeholder="e.g., Google"
                    required
                  />
                </div>

                <div className="d-flex flex-row gl-form-date-inline-row mb-3">
                  <div className="gl-flex-date-item">
                    <label className="gl-input-form-label">
                      Issue Date{" "}
                      <span className="text-danger">*</span>
                    </label>

                    <div className="gl-date-input-icon-wrapper">
                      <input
                        type="date"
                        className="form-control gl-custom-input-field gl-date-native-override"
                        required
                      />
                    </div>
                  </div>

                  <div className="gl-flex-date-item">
                    <label className="gl-input-form-label">
                      Expiry Date
                    </label>

                    <div className="gl-date-input-icon-wrapper">
                      <input
                        type="date"
                        className="form-control gl-custom-input-field gl-date-native-override"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label className="gl-input-form-label">
                    Credential ID{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control gl-custom-input-field"
                    placeholder="e.g., NBPT-2020-98765"
                    required
                  />
                </div>

                <div className="gl-form-action-footer-row d-flex align-items-center justify-content-end mt-4">
                  <a
                    href="#"
                    className="btn gl-form-cancel-link-btn mr-3"
                     data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>

                  <button
                    type="submit"
                    className="btn gl-form-submit-pill-btn spec-blue-btn px-4 py-2 font-weight-bold"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCertification;