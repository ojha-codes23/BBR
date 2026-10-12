import React from "react";

const EditQualification = () => {
  return (
    <>
      <div
        className="modal fade "
        id="editQualificationModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{
            maxWidth: "640px",
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
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>

                <h2 className="gl-form-main-title">
                  Edit Qualification
                </h2>
              </div>

              <form
                action="#"
                method="POST"
                className="gl-qualification-form-engine"
              >
                <div className="form-group mb-3">
                  <label className="gl-input-form-label">
                    Degree / Diploma{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control gl-custom-input-field"
                    placeholder="e.g., Ph.D. in Mathematics"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="gl-input-form-label">
                    Institution{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control gl-custom-input-field"
                    placeholder="e.g., Stanford University"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="gl-input-form-label">
                    Field of Study{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control gl-custom-input-field"
                    placeholder="e.g., Applied Mathematics"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="gl-input-form-label">
                    Year of Completion
                  </label>

                  <div className="gl-select-arrow-wrapper">
                    <select
                      className="form-control gl-custom-select-field"
                      defaultValue="2025"
                    >
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                </div>

                <div className="gl-form-action-footer-row d-flex align-items-center justify-content-end mt-4">
                  <a
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn gl-form-cancel-link-btn mr-3"
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

export default EditQualification;