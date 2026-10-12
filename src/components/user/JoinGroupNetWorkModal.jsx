import React from 'react'

const JoinGroupNetWorkModal = () => {
  return (
   <>
       <div
      class="modal fade custom-target-modal"
      id="joinGroupNetworkModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: "580px" }}
      >
        <div
          class="modal-content"
          style={{
            borderRadius: '24px',
            padding: '40px',
            border:' none',
            position: 'relative'
          }}
                   
        >
          <a href="#" class="close gl-modal-dismiss-anchor" aria-label="Close">
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

          <div class="modal-body p-0 text-center">
            <div class="gl-network-icon-avatar-badge mb-4">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#006699"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>

            <h2 class="gl-network-main-title-bold mb-3">
              Join Pacific Northwest<br />Tech Network?
            </h2>

            <p class="gl-network-desc-paragraph mb-3">
              This group offers regional networking opportunities, expert
              mentorship, and career guidance for professionals in the
              technology space.
            </p>

            <div class="gl-network-mentor-meta-row mb-4">
              <span class="gl-meta-label">Mentor:</span>
              <span class="gl-meta-value-name">Dr. Sarah Chen</span>
            </div>

            <div
              class="gl-network-action-footer d-flex align-items-center justify-content-center mt-4"
            >
              <a href="#" class="btn gl-form-cancel-link-btn mx-3">Cancel</a>

              <button
                type="button"
                class="btn gl-network-primary-forward-btn spec-blue-btn px-4 py-2 font-weight-bold"
              >
                Join Group
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  class="ml-2 d-inline-block-align"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </>
  )
}

export default JoinGroupNetWorkModal
