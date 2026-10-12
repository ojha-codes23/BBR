import React from "react";

const QuizInstructionsModal = () => {
  return (
    <div
      className="modal fade custom-target-modal"
      id="quizInstructionsModal"
      tabIndex="-1"
      aria-labelledby="quizInstructionsModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "680px" }}
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
          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="close gl-modal-dismiss-anchor"
            data-bs-dismiss="modal"
            aria-label="Close"
            style={{
              border: "none",
              background: "transparent",
              position: "absolute",
              right: "20px",
              top: "20px",
              zIndex: 10,
            }}
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
          </button>

          <div className="modal-body p-0 text-left">
            <div className="gl-quiz-header-row mb-4">
              <div className="gl-quiz-icon-container blue-brand-bg">
                <img
                  src="/images/user/user/super-user-dashboard/fluent_glasses-28-regular.svg"
                  alt=""
                />
              </div>

              <div className="gl-quiz-title-stack">
                <h2
                  id="quizInstructionsModalLabel"
                  className="gl-quiz-main-title"
                >
                  Quiz/Exam name
                </h2>

                <span className="gl-quiz-subtitle-text">
                  Lesson Name
                </span>
              </div>
            </div>

            <div className="gl-quiz-alert-banner mb-4">
              <p className="gl-alert-highlight-text">
                Please read the quiz instructions carefully before proceeding.
              </p>
            </div>

            <div className="gl-quiz-details-outline-card mb-4">
              <h3 className="gl-section-internal-heading">
                Quiz Information
              </h3>

              <ul className="gl-section-dot-metrics-list">
                <li>Total Questions: 4</li>
                <li>Time Limit: Unlimited</li>
                <li>Number of Attempts: 02</li>
              </ul>
            </div>

            <div className="gl-quiz-scoring-tint-card mb-4">
              <h3 className="gl-section-internal-heading">
                Scoring Levels
              </h3>

              <ul className="gl-section-emoji-ranking-list">
                <li>
                  🥇 <span className="gl-rank-label">Gold:</span> 90%+
                  (Certification + Badge)
                </li>

                <li>
                  🥈 <span className="gl-rank-label">Silver:</span> 80-89%
                  (Certification Credit)
                </li>

                <li>
                  🥉 <span className="gl-rank-label">Bronze:</span> 70-79%
                  (Pass, Review Recommended)
                </li>
              </ul>
            </div>

            <div className="gl-quiz-action-footer-flex mt-4">
              <label className="gl-checkbox-custom-label-wrapper">
                <input
                  type="checkbox"
                  className="gl-native-checkbox-engine"
                />

                <span className="gl-checkbox-facade-box"></span>

                <span className="gl-checkbox-text-string">
                  I have read and understood the quiz instructions.
                </span>
              </label>

              <button
                type="button"
                className="btn gl-quiz-primary-action-btn font-weight-bold"
                data-bs-dismiss="modal"
              >
                Start Quiz

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="ml-2 display-inline-block"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInstructionsModal;