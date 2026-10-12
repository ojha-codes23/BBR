import React from 'react'
import { Link } from 'react-router-dom'

const SOWDetail4 = () => {
  return (
    <>
      <main>
          <div class="sow-pay-main-wrapper container-fluid">
            {/* <!-- TOP HEADER --> */}
            <header class="sow-pay-top-header">
              <button class="sow-pay-back-btn" aria-label="Go back">←</button>
              <div class="sow-header-title-block">
                <h1 class="sow-pay-title">SOW Details</h1>
                <p class="sow-pay-subtitle">
                  Career planning and skill development guidance
                </p>
              </div>
            </header>

            {/* <!-- SERVICE TRACKER COMPONENT --> */}
            <div class="sow-pay-tracker-card">
              <h2 class="fs-6 fw-bold text-dark mb-4 px-2">Service Tracker</h2>

              <div class="sow-pay-stepper-flex">
                {/* Step 1: Call Discussion */}
                <div class="sow-pay-step-item">
                  <div class="sow-pay-circle done-green">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span class="sow-pay-step-label">Call Discussion</span>
                    <div class="sow-pay-step-subtext">
                      Service request submitted for review<br />November 20,
                      2025
                    </div>
                  </div>
                </div>

                <div class="sow-pay-line-divider"></div>

                {/* <!-- Step 2: Fill SOW Form --> */}
                <div class="sow-pay-step-item">
                  <div class="sow-pay-circle done-green">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span class="sow-pay-step-label">Fill SOW Form</span>
                    <div class="sow-pay-step-subtext">
                      SOW Form filled for review<br />November 20, 2025
                    </div>
                  </div>
                </div>

                <div class="sow-pay-line-divider"></div>

                {/* <!-- Step 3: Request Submitted --> */}
                <div class="sow-pay-step-item">
                  <div class="sow-pay-circle done-green">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span class="sow-pay-step-label">Request Submitted</span>
                    <div class="sow-pay-step-subtext">
                      Service request submitted for review<br />November 20,
                      2025
                    </div>
                  </div>
                </div>

                {/* <!-- Red Line Status Waiting Connector --> */}
                <div class="sow-pay-line-divider status-waiting">
                  <span class="sow-pay-waiting-badge">Waiting</span>
                </div>

                {/* <!-- Step 4: Payment Active Mode --> */}
                <div class="sow-pay-step-item">
                  <div class="sow-pay-circle active-blue">
                    {/* Credit Card Mini Outline SVG Icon */}
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <span class="sow-pay-step-label blue-text">Payment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- MAIN PAYMENT TITLE SECTION --> */}
            <h2 class="sow-pay-section-heading">Payment</h2>
            <p class="sow-pay-section-sub">
              Pay the invoice to start your service.
            </p>

            {/* <!-- SERVICE REQUEST DETAILS PANEL --> */}
            <h3 class="sow-pay-group-title">Service Requests</h3>
            <div class="sow-pay-request-box">
              <div class="sow-pay-box-header">
                <h4 class="sow-pay-box-title">Group Coaching</h4>
                <span class="sow-pay-badge-hours">3 Hours</span>
              </div>
              <p class="sow-pay-box-desc">
                Leadership development workshop covering communication, team
                management, and strategic thinking.
              </p>

              <div class="sow-pay-meta-title">Deliverables:</div>
              <p class="sow-pay-meta-value">
                Workshop materials, Group sessions (3x), Certificate of
                completion
              </p>

              <div class="sow-pay-meta-title">Materials:</div>
              <div class="sow-pay-attachments-flex">
                <a href="#" class="sow-pay-file-tag">
                  {/* Paperclip attachment icon */}
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                  Project_Support_Guide.pdf
                </a>
                <a href="#" class="sow-pay-file-tag">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                  requirements.docx
                </a>
              </div>
            </div>

            {/* <!-- INVOICE BREAKDOWN CARD TABLE --> */}
            <h3 class="sow-pay-group-title">Invoice Breakdown</h3>
            <div class="sow-pay-invoice-card">
              <div class="sow-pay-invoice-row border-bottom-line">
                <span>Platform Fee</span>
                <span>$10</span>
              </div>
              <div class="sow-pay-invoice-row border-bottom-line">
                <span>Service Amount</span>
                <span>$140</span>
              </div>
              <div class="sow-pay-invoice-row total-bold">
                <span>Total Amount</span>
                <span>$150</span>
              </div>
            </div>

            {/* <!-- FOOTER TERMINATION BUTTONS --> */}
            <footer class="sow-pay-footer-actions">
              <Link to="/student/sow-detail-3" class="sow-pay-cancel-btn">Cancel</Link>
              <Link
                to="/student/sow-detail-5"
                type="button"
                class="sow-pay-submit-btn"
                >Pay &nbsp;$150</Link>
              
            </footer>
          </div>
        </main>
    </>
  )
}

export default SOWDetail4
