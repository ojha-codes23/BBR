import React from 'react'

const SOWDetail6 = () => {
  return (
        <>
                 <main>
  <div className="sow-fin-main-wrapper container-fluid">
    
    {/* <!-- TOP HEADER --> */}
    <header className="sow-fin-top-header">
      <button className="sow-fin-back-btn" aria-label="Go back">←</button>
      <div className="sow-header-title-block">
        <h1 className="sow-fin-title">SOW Details</h1>
        <p className="sow-fin-subtitle">Career planning and skill development guidance</p>
      </div>
    </header>

    {/* <!-- SERVICE TRACKER STATUS COMPONENT --> */}
    <div className="sow-fin-tracker-card">
      <h2 className="fs-6 fw-bold text-dark mb-4 px-2">Service Tracker</h2>
      
      <div className="sow-fin-stepper-flex">
        {/* Step 1: Fill SOW Form */}
        <div className="sow-fin-step-item">
          <div className="sow-fin-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span className="sow-fin-step-label">Fill SOW Form</span>
            <div className="sow-fin-step-subtext">SOW Form filled for review<br/>November 20, 2025</div>
          </div>
        </div>
        
        <div className="sow-fin-line-divider"></div>

        {/* Step 2: SOW Form Submitted */}
        <div className="sow-fin-step-item">
          <div className="sow-fin-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span className="sow-fin-step-label">SOW Form Submitted</span>
            <div className="sow-fin-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div className="sow-fin-line-divider"></div>

        {/* Step 3: Call Discussion */}
        <div className="sow-fin-step-item">
          <div className="sow-fin-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span className="sow-fin-step-label">Call Discussion</span>
            <div className="sow-fin-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div className="sow-fin-line-divider"></div>

        {/* Step 4: Provider Agreement */}
        <div className="sow-fin-step-item">
          <div className="sow-fin-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span className="sow-fin-step-label">Provider Agreement</span>
            <div className="sow-fin-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div className="sow-fin-line-divider"></div>

        {/* Step 5: Payment */}
        <div className="sow-fin-step-item">
          <div className="sow-fin-circle">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span className="sow-fin-step-label">Payment</span>
            <div className="sow-fin-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>
      </div>
      {/* <!-- Green Base Strip Line --> */}
      <div className="sow-fin-tracker-bottom-bar"></div>
    </div>

    {/* <!-- MAIN CONTEXT BLOCK --> */}
    <h2 className="sow-fin-section-heading">Payment</h2>

    {/* <!-- SUCCESS BANNER NOTICE --> */}
    <div className="sow-fin-success-banner">
      <div className="sow-fin-banner-icon">
        {/* Circle Check Outline Icon */}
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <div>
        <h3 className="sow-fin-banner-title">Service Completed Successfully</h3>
        <p className="sow-fin-banner-desc">This service was fully covered by the district/program. No payment was required from the User.</p>
      </div>
    </div>

    {/* <!-- SERVICE REQUEST DETAILS --> */}
    <div className="sow-fin-group-title">Service Requests</div>
    <div className="sow-fin-request-box">
      <div className="sow-fin-box-header">
        <h4 className="sow-fin-box-title">Group Coaching</h4>
        <span className="sow-fin-badge-hours">3 Hours</span>
      </div>
      <p className="sow-fin-box-desc">Leadership development workshop covering communication, team management, and strategic thinking.</p>
      
      <div className="sow-fin-meta-title">Deliverables:</div>
      <p className="sow-fin-meta-value">Workshop materials, Group sessions (3x), Certificate of completion</p>
      
      <div className="sow-fin-meta-title">Materials:</div>
      <div className="sow-fin-attachments-flex">
        <a href="#" className="sow-fin-file-tag">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          Project_Support_Guide.pdf
        </a>
        <a href="#" className="sow-fin-file-tag">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          requirements.docx
        </a>
      </div>
    </div>

    {/* <!-- COMPLETION SUMMARY DISPLAY LIST --> */}
    <div className="sow-fin-group-title">Completion Summary</div>
    <div className="sow-fin-strip-card">
      <div className="sow-fin-strip-row border-bottom-line">
        <span>Service Status</span>
        <span className="sow-fin-status-badge">Completed</span>
      </div>
      <div className="sow-fin-strip-row border-bottom-line">
        <span>Payment</span>
        <span className="fw-medium text-dark">$150</span>
      </div>
      <div className="sow-fin-strip-row">
        <span>Completion Date</span>
        <span className="fw-medium text-dark">10-02-2025</span>
      </div>
    </div>

    {/* <!-- FOOTER BOTTOM ACTIONS BUTTON --> */}
    <footer className="sow-fin-footer-actions">
      <a href="#" className="sow-fin-download-btn">
        {/* Tray Download SVG icon */}
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1M12 4v12m0 0l-4-4m4 4l4-4"/></svg>
        Download receipt
      </a>
    </footer>

  </div>
    </main>
        </>
  )
}

export default SOWDetail6
