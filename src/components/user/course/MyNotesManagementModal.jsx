import React from 'react'

const MyNotesManagementModal = () => {
  return (
    <>
        <div
      className="modal fade custom-target-modal "
      id="myNotesManagementModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: '1040px', width: '95%' }}
      >
        <div className="modal-content gl-notes-main-canvas-card">
          {/* <!-- Absolute Top Right Close Cross Anchor Trigger --> */}
          <a href="#" className="close gl-modal-dismiss-anchor" aria-label="Close">
            <span aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111111"
                stroke-width="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          </a>

          {/* <!-- Workspace Scroll Container Body --> */}
          <div className="modal-body p-0 text-left">
            {/* <!-- Section 1: Core Dashboard Header Title --> */}
            <h2 className="gl-workspace-main-headline mb-4">My Notes</h2>

            {/* <!-- Section 2: Filtering Select Toolbars Row Grid --> */}
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="gl-input-field-label">Module</label>
                <div className="gl-dropdown-select-facade">
                  <span>Module: 2</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94a3b8"
                    stroke-width="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className="col-md-6">
                <label className="gl-input-field-label">Lesson</label>
                <div className="gl-dropdown-select-facade">
                  <span>Lesson 1</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94a3b8"
                    stroke-width="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* <!-- Section 3: Rich Text Editor Universal Utility Toolbelt Ribbon --> */}
            <div className="gl-editor-utility-ribbon mb-4">
              <div className="gl-ribbon-actions-group">
                <button type="button" className="gl-ribbon-tool-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M3 7v6h4l5 5V2L7 7H3z"></path>
                  </svg>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                </button>
              </div>
              <div className="gl-ribbon-divider-pipe"></div>
              <div className="gl-ribbon-actions-group">
                <div className="gl-ribbon-dropdown-facade-text">
                  Normal text
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    className="ml-1"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className="gl-ribbon-divider-pipe"></div>
              <div className="gl-ribbon-actions-group">
                <button type="button" className="gl-ribbon-tool-btn">
                  <strong style={{ fontSize: "13px" }}>B</strong>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <em style={{ fontSize: "13px", fontFamily: "serif" }}>I</em>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <span style={{ textDecoration: "underline", fontSize: "13px" }}>
                    U
                  </span>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <span style={{ textDecoration: "line-through", fontSize: "13px" }}>
                    S
                  </span>
                </button>
              </div>
              <div className="gl-ribbon-divider-pipe"></div>
              <div className="gl-ribbon-actions-group">
                <button type="button" className="gl-ribbon-tool-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="gl-ribbon-divider-pipe"></div>
              <div className="gl-ribbon-actions-group">
                <button type="button" className="gl-ribbon-tool-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    ></path>
                    <path
                      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    ></path>
                  </svg>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <strong style={{ fontSize: "14px", fontFamily: "monospace" }}
                    >&lt;&gt;</strong
                  >
                </button>
                <button type="button" className="gl-ribbon-tool-btn">
                  <strong style={{ fontSize: "16px", fontFamily: "serif" }}>“</strong>
                </button>
              </div>
            </div>

            {/* <!-- Section 4: Split Content Writing Cells Layer Grid --> */}
            <div className="row mb-4">
              {/* <!-- Split Box A: Cues & Questions --> */}
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="gl-editor-textarea-input-card h-100">
                  <h4 className="gl-card-editor-heading">Cues & Questions</h4>
                  <textarea
                    className="gl-native-textarea-field"
                    placeholder="Key points & questions..."
                  ></textarea>
                </div>
              </div>
              {/* <!-- Split Box B: Notes --> */}
              <div className="col-md-7">
                <div className="gl-editor-textarea-input-card h-100">
                  <h4 className="gl-card-editor-heading">Notes</h4>
                  <textarea
                    className="gl-native-textarea-field"
                    placeholder="Main notes from lesson..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* <!-- Split Box C: Summary Area Canvas --> */}
            <div
              className="gl-editor-textarea-input-card mb-4"
              style={{ minHeight: '140px' }}
            >
              <h4 className="gl-card-editor-heading">Summary</h4>
              <textarea
                className="gl-native-textarea-field"
                placeholder="Key takeaways and summary..."
              ></textarea>
            </div>

            {/* <!-- Split Box D: Sketch Pad Section Canvas --> */}
            <div
              className="gl-editor-textarea-input-card mb-4"
              style={{ minHeight: '120px' }}
            >
              <h4 className="gl-card-editor-heading">Insert Drawing</h4>
              <textarea
                className="gl-native-textarea-field"
                placeholder="Sketch or draw here..."
              ></textarea>
            </div>

            {/* <!-- Section 5: Inline Sync Bar Matrix Trigger Controls --> */}
            <div
              className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between mb-4 gap-3"
            >
              <p className="gl-bottom-advisor-info-note mb-0">
                Your coach can review these notes to provide targeted support
              </p>
              <button
                type="button"
                className="btn gl-save-notes-action-btn py-2.5 px-4 font-weight-bold"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  className="mr-2 d-inline-block-v-align"
                >
                  <path
                    d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                  ></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Save Notes
              </button>
            </div>

            {/* <!-- Section 6: Coach Instructional Notice Board Banner Element --> */}
            <div className="gl-coaching-alert-notice-strip mb-5">
              <p className="mb-0">
                <strong>Information:</strong> This note is only visible to you
                and your coach/teacher. It helps instructors understand where
                you need extra support, what motivates you, and where you want
                to grow. Coaches may review your notes to offer personalized
                guidance or resources.
              </p>
            </div>

            {/* <!-- Section 7: Historical Feed Logs Timeline Stack Segment --> */}
            <div className="gl-timeline-historical-feed-block">
              {/* <!-- Feed Block Item 1 --> */}
              <div className="gl-historical-log-row-card">
                <p className="gl-log-entry-content-text mb-2">
                  Identified short-term and long-term career goals.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="gl-log-meta-timestamp">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#64748b"
                      stroke-width="2"
                      className="mr-1"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>12:34</span>
                  </div>
                  <span className="gl-log-calendar-date-stamp"
                    >Saved on Oct 12, 2025</span
                  >
                </div>
              </div>

              {/* <!-- Feed Block Item 2 --> */}
              <div className="gl-historical-log-row-card">
                <p className="gl-log-entry-content-text mb-2">
                  Need to improve communication skills for leadership roles.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="gl-log-meta-timestamp">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#64748b"
                      stroke-width="2"
                      className="mr-1"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>15:20</span>
                  </div>
                  <span className="gl-log-calendar-date-stamp"
                    >Saved on Oct 12, 2025</span
                  >
                </div>
              </div>

              {/* <!-- Feed Block Item 3 --> */}
              <div className="gl-historical-log-row-card">
                <p className="gl-log-entry-content-text mb-2 font-italic">
                  “Align your skills today with where you want to be tomorrow.”
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="gl-log-meta-timestamp">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#64748b"
                      stroke-width="2"
                      className="mr-1"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>10:05</span>
                  </div>
                  <span className="gl-log-calendar-date-stamp"
                    >Saved on Oct 12, 2025</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default MyNotesManagementModal
