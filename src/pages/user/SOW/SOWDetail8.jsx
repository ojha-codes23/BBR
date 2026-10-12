import React from 'react'

const SOWDetail8 = () => {
  return (
  <>
    <main>
<div class="sow-sch-main-wrapper container-fluid">
    
    {/* <!-- TOP PAGE HEADER --> */}
    <header class="sow-sch-top-header">
      <button class="sow-sch-back-btn" aria-label="Go back">←</button>
      <div>
        <h1 class="sow-sch-title">SOW Details</h1>
        <p class="sow-sch-subtitle">Career planning and skill development guidance</p>
      </div>
    </header>

    {/* <!-- SERVICE TRACKER COMPONENT CARD --> */}
    <div class="sow-sch-tracker-card">
      <h2 class="fs-6 fw-bold text-dark mb-4 px-2">Service Tracker</h2>
      
      <div class="sow-sch-stepper-flex">
        {/* Step 1: Fill SOW Form */}
        <div class="sow-sch-step-item">
          <div class="sow-sch-circle done-green">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-sch-step-label">Fill SOW Form</span>
            <div class="sow-sch-step-subtext">SOW Form filled for review<br/>November 20, 2025</div>
          </div>
        </div>
        
        <div class="sow-sch-line-divider"></div>

        {/* Step 2: Request Submitted */}
        <div class="sow-sch-step-item">
          <div class="sow-sch-circle done-green">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-sch-step-label">Request Submitted</span>
            <div class="sow-sch-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-sch-line-divider"></div>

        {/* Step 3: Call Discussion */}
        <div class="sow-sch-step-item">
          <div class="sow-sch-circle done-green">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-sch-step-label">Call Discussion</span>
            <div class="sow-sch-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-sch-line-divider"></div>

        {/* Step 4: Provider Agreement */}
        <div class="sow-sch-step-item">
          <div class="sow-sch-circle done-green">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="sow-sch-step-label">Provider Agreement</span>
            <div class="sow-sch-step-subtext">Service request submitted for review<br/>November 20, 2025</div>
          </div>
        </div>

        <div class="sow-sch-line-divider"></div>

        {/* Step 5: Payment */}
        <div class="sow-sch-step-item">
          <div class="sow-sch-circle active-blue">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
          </div>
          <div>
            <span class="sow-sch-step-label">Payment</span>
          </div>
        </div>
      </div>

      {/* <!-- Bottom Custom Sync Progress bar --> */}
      <div class="sow-sch-tracker-progress-bg">
        <div class="sow-sch-tracker-progress-fill"></div>
      </div>
    </div>

    {/* <!-- MAIN BODY SECTION SUB-HEADER --> */}
    <h2 class="sow-sch-section-heading">In Progress</h2>
    <p class="sow-sch-section-sub">View your scheduled classes</p>

    {/* <!-- TOGGLE SWITCH CAPSULE COMPONENT --> */}
    <div class="sow-sch-tabs-container">
      <button class="sow-sch-tab-btn active">Upcoming Classes</button>
      <button class="sow-sch-tab-btn">Past Classes</button>
    </div>

    {/* <!-- 3x2 RESPONSIVE BOOTSTRAP CARDS GRID SYSTEM --> */}
    <div class="row g-4">
      
      {/* <!-- Card 1 (Active Mode) --> */}
      <div class="col-12 col-md-6 col-lg-4">
        <div class="sow-sch-card">
          <div>
            <h3 class="sow-sch-card-title">IT Support Professional Certificate</h3>
            <p class="sow-sch-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
              <span>Sat, Dec 6, 04:18 PM</span>
            </div>
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>90 minutes</span>
            </div>
          </div>
          <button class="sow-sch-join-btn btn-active">Join Call &nbsp;→</button>
        </div>
      </div>

      {/* <!-- Card 2 (Disabled State) --> */}
      <div class="col-12 col-md-6 col-lg-4">
        <div class="sow-sch-card">
          <div>
            <h3 class="sow-sch-card-title">IT Support Professional Certificate</h3>
            <p class="sow-sch-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
              <span>Sat, Dec 6, 04:18 PM</span>
            </div>
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>90 minutes</span>
            </div>
          </div>
          <button class="sow-sch-join-btn btn-disabled">Join Call &nbsp;→</button>
        </div>
      </div>

      {/* <!-- Card 3 (Disabled State) --> */}
      <div class="col-12 col-md-6 col-lg-4">
        <div class="sow-sch-card">
          <div>
            <h3 class="sow-sch-card-title">IT Support Professional Certificate</h3>
            <p class="sow-sch-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
              <span>Sat, Dec 6, 04:18 PM</span>
            </div>
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>90 minutes</span>
            </div>
          </div>
          <button class="sow-sch-join-btn btn-disabled">Join Call &nbsp;→</button>
        </div>
      </div>

      {/* <!-- Card 4 (Disabled State) --> */}
      <div class="col-12 col-md-6 col-lg-4">
        <div class="sow-sch-card">
          <div>
            <h3 class="sow-sch-card-title">IT Support Professional Certificate</h3>
            <p class="sow-sch-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
              <span>Sat, Dec 6, 04:18 PM</span>
            </div>
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>90 minutes</span>
            </div>
          </div>
          <button class="sow-sch-join-btn btn-disabled">Join Call &nbsp;→</button>
        </div>
      </div>

      {/* <!-- Card 5 (Disabled State) --> */}
      <div class="col-12 col-md-6 col-lg-4">
        <div class="sow-sch-card">
          <div>
            <h3 class="sow-sch-card-title">IT Support Professional Certificate</h3>
            <p class="sow-sch-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
              <span>Sat, Dec 6, 04:18 PM</span>
            </div>
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>90 minutes</span>
            </div>
          </div>
          <button class="sow-sch-join-btn btn-disabled">Join Call &nbsp;→</button>
        </div>
      </div>

      {/* <!-- Card 6 (Disabled State) --> */}
      <div class="col-12 col-md-6 col-lg-4">
        <div class="sow-sch-card">
          <div>
            <h3 class="sow-sch-card-title">IT Support Professional Certificate</h3>
            <p class="sow-sch-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
              <span>Sat, Dec 6, 04:18 PM</span>
            </div>
            <div class="sow-sch-meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>90 minutes</span>
            </div>
          </div>
          <button class="sow-sch-join-btn btn-disabled">Join Call &nbsp;→</button>
        </div>
      </div>

    </div>

    {/* <!-- PAGINATION & LISTING METRICS FOOTER --> */}
    <div class="sow-sch-controls-row">
      <div class="d-flex align-items-center gap-2">
        <span>Show</span>
        <select class="sow-sch-dropdown-select">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span class="ms-2">Showing 1-4 from 50 results</span>
      </div>

      <div>
        <ul class="sow-sch-pagination">
          <li><a href="#" class="sow-sch-page-link btn-text">Prev</a></li>
          <li><a href="#" class="sow-sch-page-link active">1</a></li>
          <li><a href="#" class="sow-sch-page-link">2</a></li>
          <li><a href="#" class="sow-sch-page-link">3</a></li>
          <li><span class="px-1 text-muted">...</span></li>
          <li><a href="#" class="sow-sch-page-link">10</a></li>
          <li><a href="#" class="sow-sch-page-link btn-text next-active">Next</a></li>
        </ul>
      </div>
    </div>

    {/* <!-- TERMINATION NAVIGATION BUTTON CONTAINER --> */}
    <footer class="sow-sch-final-action-row">
      <a href="#" class="sow-sch-services-btn">
        View my Services &nbsp;
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </a>
    </footer>

  </div>
    </main>
  
  </>
  )
}

export default SOWDetail8
