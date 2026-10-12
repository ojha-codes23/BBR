import React from 'react'

const CareerPlanningWorkshop2 = () => {
  return (
    <>
      <div class="main-wrapper">
            {/* <!-- Top Bar Navigation Panel --> */}
            <div class="d-flex align-items-center gap-3 mb-4">
              <a href="#" class="back-circle-btn mb-0">
                <i class="bi bi-arrow-left"></i>
              </a>
              <div>
                <h1 class="header-title">Career Planning Workshop</h1>
                <div class="header-subtitle">Module Name : Lesson 1 Name</div>
              </div>
            </div>

            {/* <!-- Lesson Progress Block --> */}
            <div class="mb-4">
              <div class="progress-label-wrapper">
                <span style={{ color: "#475569" }}>Lesson Progress</span>
                <span style={{ color: "#10b981" }}>0%</span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            {/* <!-- Video Workspace Box --> */}
            <div class="video-container mb-3">
              {/* <!-- Main Thumbnail Fallback (Using structured abstract representation) --> */}
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
                class="video-placeholder-img"
                alt="Video Feed Content"
              />

              {/* <!-- Top Info Circle --> */}
              <div class="video-info-badge">
                <i class="bi bi-info-lg"></i>
              </div>

              {/* <!-- Pop-up Floating Interaction Question Trigger Button --> */}
              <a href="#" class="mcq-overlay-btn">
                <i class="bi bi-plus"></i> Multiple Choice Question
              </a>

              {/* <!-- Custom Video Player Controller Layer Overlay --> */}
              <div class="video-controls-bottom">
                <div class="video-title-playback">Cold Little Heart</div>

                {/* <!-- Timeline Rail --> */}
                <div class="video-timeline-rail">
                  <div class="video-timeline-fill"></div>
                  <div class="video-timeline-node"></div>
                </div>

                {/* <!-- Control Icons Tray --> */}
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center gap-3">
                    <i
                      class="bi bi-pause-fill fs-5"
                      style={{ cursor: "pointer" }}
                    ></i>
                    <i
                      class="bi bi-skip-start-fill fs-5"
                      style={{ cursor: "pointer" }}
                    ></i>
                    <i
                      class="bi bi-skip-end-fill fs-5"
                      style={{ cursor: "pointer" }}
                    ></i>
                    <span class="control-pills-badge ms-2">Introduction</span>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <span class="video-time-stamp-text">47:38 / 1:52:32</span>
                    <i
                      class="bi bi-volume-up-fill fs-5"
                      style={{ cursor: "pointer" }}
                    ></i>
                    <i
                      class="bi bi-fullscreen fs-6"
                      style={{ cursor: "pointer" }}
                    ></i>
                    <i
                      class="bi bi-three-dots-vertical fs-6"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right Side Floating Button Container Wrapper --> */}
            <div class="d-flex justify-content-end mb-4">
              <button class="btn btn-grant-primary btn-sm rounded-pill px-3">
                <i class="bi bi-file-earmark-plus me-1"></i> Add Notes
              </button>
              {/* <button class="btn btn-grant-primary btn-sm rounded-pill px-3"><i class="bi bi-file-earmark-plus me-1"></i> Add Notes</button>
        <button class="btn btn-grant-primary btn-sm rounded-pill px-3"><i class="bi bi-file-earmark-plus me-1"></i> Add Notes</button> */}
            </div>

            {/* <!-- Context Text Paragraph Blocks --> */}
            <div
              class="mb-4"
              style={{ fontSize: "0.92rem", color: "#475569", lineHeight: "1.6" }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* <!-- Interactive Features Box Summary Block --> */}
            <div class="feature-info-box mb-4">
              <h5>Interactive Features:</h5>
              <p>
                This video would include mid-video knowledge checks at specific
                timestamps, clickable hotspots, and linked feedback to other
                Events.
              </p>
            </div>

            {/* <!-- Directional Navigation Action Buttons --> */}
            <div
              class="d-flex justify-content-between align-items-center mb-5 directional-nav-btns"
            >
              <button class="btn-grant-outline px-3">
                <img
                  src="/images/user/super-user-dashboard/tabler_arrow-up.svg"
                  alt=""
                />
                Previous
              </button>
              <button class="btn-grant-primary px-3">
                Next Lesson
                <img
                  src="/images/user/super-user-dashboard/event-right-icon.svg"
                  alt=""
                />
              </button>
            </div>

            {/* <!-- ==========================================
         MY NOTES WORKSPACE SECTION (CORNELL SYSTEM)
         ========================================== --> */}
            <div class="content-card-section mb-4">
              <h3 class="fw-bold h5 mb-1">My Notes</h3>
              <p style={{ fontSize: "0.88rem", color: "#64748b" }} class="mb-4">
                Cornell Notes help you organize questions, key points, and
                summaries for better understanding.
              </p>

              {/* <!-- Dynamic Filter Timestamp Badges --> */}
              <div class="d-flex gap-2 mb-3 align-items-center">
                <span
                  style={{ fontSize: "0.88rem", fontWeight: 500, color: "#475569" }}
                  >Timestamps:</span
                >
                <button class="timestamp-pill">12:34</button>
                <button class="timestamp-pill">15:20</button>
                <button class="timestamp-pill active">17:54</button>
              </div>

              {/* <!-- Custom Mock Text Rich Editor Framework ToolBar Box --> */}
              <div class="editor-toolbar">
                <button class="toolbar-btn">
                  <i class="bi bi-arrow-left-short"></i>
                </button>
                <button class="toolbar-btn">
                  <i class="bi bi-arrow-right-short"></i>
                </button>
                <div class="toolbar-divider"></div>
                <select
                  class="form-select form-select-sm border-0 bg-transparent py-0 style-select"
                  style={{ width: "auto", fontSize: "0.85rem", color: "#64748b" }}
                >
                  <option>Normal text</option>
                </select>
                <div class="toolbar-divider"></div>
                <button class="toolbar-btn">
                  <i class="bi bi-list-task"></i>
                </button>
                <div class="toolbar-divider"></div>
                <button class="toolbar-btn">
                  <i class="bi bi-circle-fill" style={{ color: "#000" }}></i>
                  <i class="bi bi-chevron-down" style={{ fontSize: "0.6rem" }}></i>
                </button>
                <button class="toolbar-btn"><strong>B</strong></button>
                <button class="toolbar-btn"><em>I</em></button>
                <button class="toolbar-btn"><u>U</u></button>
                <button class="toolbar-btn">
                  <i class="bi bi-type-strikethrough"></i>
                </button>
                <button class="toolbar-btn"><i class="bi bi-code"></i></button>
                <button class="toolbar-btn">
                  <i class="bi bi-paint-bucket"></i>
                </button>
                <div class="toolbar-divider"></div>
                <button class="toolbar-btn">
                  <i class="bi bi-text-left"></i>
                </button>
                <button class="toolbar-btn">
                  <i class="bi bi-list-ol"></i>
                </button>
                <div class="toolbar-divider"></div>
                <button class="toolbar-btn">
                  <i class="bi bi-link-45deg"></i>
                </button>
                <button class="toolbar-btn"><i class="bi bi-image"></i></button>
                <button class="toolbar-btn">
                  <i class="bi bi-code-slash"></i>
                </button>
                <button class="toolbar-btn"><i class="bi bi-quote"></i></button>
                <button class="toolbar-btn"><i class="bi bi-dash"></i></button>
              </div>

              {/* <!-- Cornell Main Note Entry Area Grid Structure Block --> */}
              <div
                class="border border-top-0 p-3"
                style={{
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  backgroundColor: "#fff"
                }}
              >
                <div class="row g-3 mb-3">
                  {/* <!-- Cues Column --> */}
                  <div class="col-md-5">
                    <div class="cornell-box bg-white">
                      <div class="cornell-label">Cues & Questions</div>
                      <textarea
                        class="cornell-placeholder"
                        rows="4"
                        placeholder="Key points & questions..."
                      ></textarea>
                    </div>
                  </div>
                  {/* <!-- Main Notes Column --> */}
                  <div class="col-md-7">
                    <div class="cornell-box bg-white">
                      <div class="cornell-label">Notes</div>
                      <textarea
                        class="cornell-placeholder"
                        rows="4"
                        placeholder="Main notes from lesson..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* <!-- Summary Row --> */}
                <div class="row">
                  <div class="col-12">
                    <div class="cornell-box bg-white" style={{ minHeight: "100px" }}>
                      <div class="cornell-label">Summary</div>
                      <textarea
                        class="cornell-placeholder"
                        rows="3"
                        placeholder="Key takeaways and summary..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Bottom Informational Sub-text Alert Rows --> */}
              <div
                class="bottom-info-alert-row d-flex justify-content-between align-items-center mt-3"
              >
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}
                  >Your coach can review these notes to provide targeted
                  support</span
                >
                <button class="btn btn-grant-primary px-3 py-2 btn-sm">
                  <i class="bi bi-floppy me-1"></i> Save Notes
                </button>
              </div>

              {/* <!-- System Guard Info Banner Box --> */}
              <div class="alert-notice-banner mt-4">
                <strong>Information:</strong> This note is only visible to you
                and your coach/teacher. It helps instructors understand where
                you need extra support, what motivates you, and where you want
                to grow. Coaches may review your notes to offer personalized
                guidance or resources.
              </div>

              {/* <!-- Saved Logs Entry History Block --> */}
              <div class="mt-4">
                {/* <!-- Item 1 --> */}
                <div class="saved-note-item">
                  <div class="saved-note-text">
                    Identified short-term and long-term career goals.
                  </div>
                  <div class="saved-note-meta">
                    <i class="bi bi-clock"></i> 12:34
                  </div>
                  <div class="saved-note-date">Saved on Oct 12, 2025</div>
                </div>

                {/* <!-- Item 2 --> */}
                <div class="saved-note-item">
                  <div class="saved-note-text">
                    Need to improve communication skills for leadership roles.
                  </div>
                  <div class="saved-note-meta">
                    <i class="bi bi-clock"></i> 15:20
                  </div>
                  <div class="saved-note-date">Saved on Oct 12, 2025</div>
                  <div class="vertical-border-indicator"></div>
                </div>

                {/* <!-- Highlights Header Segment Section --> */}
                <h4 class="h6 fw-bold mt-4 mb-3" style={{ color: "#475569" }}>
                  Highlights
                </h4>

                {/* <!-- Item 3 --> */}
                <div class="saved-note-item">
                  <div
                    class="saved-note-text"
                    style={{ fontStyle: "italic", color: "#475569" }}
                  >
                    "Align your skills today with where you want to be
                    tomorrow."
                  </div>
                  <div class="saved-note-meta">
                    <i class="bi bi-clock"></i> 10:05
                  </div>
                  <div class="saved-note-date">Saved on Oct 12, 2025</div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  )
}

export default CareerPlanningWorkshop2
