import React from 'react'

const HelpSelectionModal = () => {
  return (
   <>
      <div
      className="modal fade custom-target-modal"
      id="helpSelectionModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: '540px' }}
      >
        <div
          className="modal-content"
          style=
           {{ borderRadius: "24px", 
            padding: "36px 40px",
            border: "none",
            position: "relative"}}
          
        >
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

          <div className="modal-body p-0">
            <h3 className="gl-selection-header-title">
              Who do you need help from?
            </h3>

            <div className="gl-selection-card-vertical-stack">
              <a
                href="#instructorSelected"
                className="gl-interactive-selection-row-card"
              >
                <div className="gl-card-internal-content">
                  <span className="gl-selection-primary-label">Instructor</span>
                  <span className="gl-selection-secondary-desc"
                    >Questions about course content, assignments, or
                    feedback.</span
                  >
                </div>
              </a>

              <a
                href="#adminSelected"
                className="gl-interactive-selection-row-card"
              >
                <div className="gl-card-internal-content">
                  <span className="gl-selection-primary-label">Admin</span>
                  <span className="gl-selection-secondary-desc"
                    >Technical issues, access problems, or platform
                    support.</span
                  >
                </div>
              </a>

              <a href="#" className="gl-selection-cancel-pill-btn"> Cancel </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default HelpSelectionModal
