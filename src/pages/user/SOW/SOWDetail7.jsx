import React from 'react'

const SOWDetail7 = () => {
  return (
  <>
     <main>
 <div class="sow-cls-main-wrapper container-fluid">
    
    {/* <!-- TOP HEADER PANEL --> */}
    <header class="sow-cls-top-header">
      <button class="sow-cls-back-btn" aria-label="Go back">←</button>
      <div>
        <h1 class="sow-cls-title">SOW Details</h1>
        <p class="sow-cls-subtitle">Career planning and skill development guidance</p>
      </div>
    </header>

    {/* <!-- SERVICE TRACKER COMPONENT (DISABLED/CLOSED STATE) --> */}
    <div class="sow-cls-tracker-card">
      <h2 class="fs-6 fw-bold text-dark mb-4 px-2">Service Tracker</h2>
      
      <div class="sow-cls-stepper-flex">
        {/* Step 1: Fill SOW Form */}
        <div class="sow-cls-step-item">
          <div class="sow-cls-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-cls-step-label">Fill SOW Form</span>
            <div class="sow-cls-step-subtext">SOW Form filled for review<br/>November 20, 2025</div>
          </div>
        </div>
        
        <div class="sow-cls-line-divider"></div>

        {/* Step 2: Request Submitted */}
        <div class="sow-cls-step-item">
          <div class="sow-cls-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-cls-step-label">Request Submitted</span>
            <div class="sow-cls-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-cls-line-divider"></div>

        {/* <!-- Step 3: Call Discussion --> */}
        <div class="sow-cls-step-item">
          <div class="sow-cls-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-cls-step-label">Call Discussion</span>
            <div class="sow-cls-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-cls-line-divider"></div>

        {/* Step 4: Provider Agreement */}
        <div class="sow-cls-step-item">
          <div class="sow-cls-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-cls-step-label">Provider Agreement</span>
            <div class="sow-cls-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-cls-line-divider"></div>

        {/* Step 5: Payment */}
        <div class="sow-cls-step-item">
          <div class="sow-cls-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
          </div>
          <div>
            <span class="sow-cls-step-label">Payment</span>
          </div>
        </div>
      </div>

      {/* <!-- Bottom Horizontal Custom Progress Filling Segment --> */}
      <div class="sow-cls-tracker-progress-bg">
        <div class="sow-cls-tracker-progress-fill"></div>
      </div>
    </div>

    {/* <!-- MAIN PAYMENT SECTION HUB --> */}
    <h2 class="sow-cls-section-heading">Payment</h2>
    <p class="sow-cls-section-sub">Pay the invoice to start your service.</p>

    {/* <!-- CLOSED STATE RED ALERT PANEL --> */}
    <div class="sow-cls-error-banner">
      <div class="sow-cls-error-icon">✕</div>
      <p class="sow-cls-error-text">The request has been closed by Admin.</p>
    </div>

    {/* <!-- SERVICE REQUEST DETAILS BOX --> */}
    <h3 class="sow-cls-group-title">Service Requests</h3>
    <div class="sow-cls-request-box">
      <div class="sow-cls-box-header">
        <h4 class="sow-cls-box-title">Group Coaching</h4>
        <span class="sow-cls-badge-hours">3 Hours</span>
      </div>
      <p class="sow-cls-box-desc">Leadership development workshop covering communication, team management, and strategic thinking.</p>
      
      <div class="sow-cls-meta-title">Deliverables:</div>
      <p class="sow-cls-meta-value">Workshop materials, Group sessions (3x), Certificate of completion</p>
      
      <div class="sow-cls-meta-title">Materials:</div>
      <div class="sow-cls-attachments-flex">
        <a href="#" class="sow-cls-file-tag">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          Project_Support_Guide.pdf
        </a>
        <a href="#" class="sow-cls-file-tag">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          requirements.docx
        </a>
      </div>
    </div>

    {/* <!-- INVOICE BREAKDOWN ACCORDION PANEL --> */}
    <h3 class="sow-cls-group-title">Invoice Breakdown</h3>
    <div class="sow-cls-invoice-card">
      <div class="sow-cls-invoice-row border-bottom-line">
        <span>Platform Fee</span>
        <span>$10</span>
      </div>
      <div class="sow-cls-invoice-row border-bottom-line">
        <span>Service Amount</span>
        <span>$140</span>
      </div>
      <div class="sow-cls-invoice-row total-bold">
        <span>Total Amount</span>
        <span>$150</span>
      </div>
    </div>

  </div>
    </main>
     
    </>
  )
}

export default SOWDetail7
