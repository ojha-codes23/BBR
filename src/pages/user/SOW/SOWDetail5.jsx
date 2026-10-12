import React from 'react'
import { Link } from 'react-router-dom'

const SOWDetail5 = () => {
  return (
   <>
      <main>
  <div class="sow-comp-main-wrapper container-fluid">
    
    {/* <!-- TOP HEADER --> */}
    <header class="sow-comp-top-header">
      <button class="sow-comp-back-btn" aria-label="Go back">←</button>
      <div class="sow-header-title-block">
        <h1 class="sow-comp-title">SOW Details</h1>
        <p class="sow-comp-subtitle">Career planning and skill development guidance</p>
      </div>
    </header>

    {/* <!-- SERVICE TRACKER COMPONENT (ALL STEPS COMPLETED) --> */}
    <div class="sow-comp-tracker-card">
      <h2 class="fs-6 fw-bold text-dark mb-4 px-2">Service Tracker</h2>
      
      <div class="sow-comp-stepper-flex">
        {/* Step 1: Fill SOW Form */}
        <div class="sow-comp-step-item">
          <div class="sow-comp-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-comp-step-label">Fill SOW Form</span>
            <div class="sow-comp-step-subtext">SOW Form filled for review<br/>November 20, 2025</div>
          </div>
        </div>
        
        <div class="sow-comp-line-divider"></div>

        {/* Step 2: SOW Form Submitted */}
        <div class="sow-comp-step-item">
          <div class="sow-comp-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-comp-step-label">SOW Form Submitted</span>
            <div class="sow-comp-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-comp-line-divider"></div>

        {/* Step 3: Call Discussion */}
        <div class="sow-comp-step-item">
          <div class="sow-comp-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-comp-step-label">Call Discussion</span>
            <div class="sow-comp-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-comp-line-divider"></div>

        {/* Step 4: Provider Agreement */}
        <div class="sow-comp-step-item">
          <div class="sow-comp-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-comp-step-label">Provider Agreement</span>
            <div class="sow-comp-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-comp-line-divider"></div>

        {/* Step 5: Payment */}
        <div class="sow-comp-step-item">
          <div class="sow-comp-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-comp-step-label">Payment</span>
          </div>
        </div>
      </div>
      {/* Bottom Accent Edge Line */}
      <div class="sow-comp-tracker-bottom-bar"></div>
    </div>

    {/* <!-- MAIN COMPONENT LABELS --> */}
    <h2 class="sow-comp-section-heading">Payment</h2>
    <div style={{ height: '15px' }}></div>

    {/* <!-- SERVICE REQUEST DETAILS --> */}
    <div class="sow-comp-group-title">Service Requests</div>
    <div class="sow-comp-request-box">
      <div class="sow-comp-box-header">
        <h4 class="sow-comp-box-title">Group Coaching</h4>
        <span class="sow-comp-badge-hours">3 Hours</span>
      </div>
      <p class="sow-comp-box-desc">Leadership development workshop covering communication, team management, and strategic thinking.</p>
      
      <div class="sow-comp-meta-title">Deliverables:</div>
      <p class="sow-comp-meta-value">Workshop materials, Group sessions (3x), Certificate of completion</p>
      
      <div class="sow-comp-meta-title">Materials:</div>
      <div class="sow-comp-attachments-flex">
        <a href="#" class="sow-comp-file-tag">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          Project_Support_Guide.pdf
        </a>
        <a href="#" class="sow-comp-file-tag">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          requirements.docx
        </a>
      </div>
    </div>

    {/* <!-- INVOICE BREAKDOWN DISPLAY --> */}
    <div class="sow-comp-group-title">Invoice Breakdown</div>
    <div class="sow-comp-strip-card">
      <div class="sow-comp-strip-row border-bottom-line">
        <span>Platform Fee</span>
        <span>$10</span>
      </div>
      <div class="sow-comp-strip-row border-bottom-line">
        <span>Service Amount</span>
        <span>$140</span>
      </div>
      <div class="sow-comp-strip-row total-bold">
        <span>Total Amount</span>
        <span>$150</span>
      </div>
    </div>

    {/* <!-- PAYMENT SUMMARY 1 DISPLAY --> */}
    <div class="sow-comp-group-title">Payment Summary</div>
    <div class="sow-comp-strip-card">
      <div class="sow-comp-strip-row border-bottom-line">
        <span>Amount</span>
        <span>$150</span>
      </div>
      <div class="sow-comp-strip-row border-bottom-line">
        <span>Date</span>
        <span>10-02-2025</span>
      </div>
      <div class="sow-comp-strip-row">
        <span>Status</span>
        <span class="sow-comp-status-badge">Completed</span>
      </div>
    </div>

    {/* <!-- PAYMENT SUMMARY 2 (METADATA) DISPLAY --> */}
    <div class="sow-comp-group-title">Payment Summary</div>
    <div class="sow-comp-strip-card">
      <div class="sow-comp-strip-row border-bottom-line">
        <span>Payment Method</span>
        <span>Visa **** 9283</span>
      </div>
      <div class="sow-comp-strip-row">
        <span>Transaction ID</span>
        <span>TXN-823927</span>
      </div>
    </div>

    {/* <!-- TIMELINE FLOW LIST TRACKER --> */}
    <div class="sow-comp-group-title">Timeline</div>
    <div class="sow-comp-strip-card">
      <div class="sow-comp-strip-row border-bottom-line">
        <span>1. Payment Initiated</span>
        <span>10-02-2025</span>
      </div>
      <div class="sow-comp-strip-row border-bottom-line">
        <span>2. Processing</span>
        <span class="text-secondary fw-medium">Completed</span>
      </div>
      <div class="sow-comp-strip-row">
        <span>3. Payment Success</span>
        <span>10-02-2025</span>
      </div>
    </div>

    {/* <!-- FOOTER TERMINATION INTERACTION ROW --> */}
    <footer class="sow-comp-footer-actions">
      <a href="#" class="sow-comp-receipt-link">Download Receipt</a>
      <Link to="/student/sow-detail-6" type="button" class="sow-comp-next-btn">Next &nbsp;→</Link>
    </footer>

  </div>
    </main>
   </>
  )
}

export default SOWDetail5
