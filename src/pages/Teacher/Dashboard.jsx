import React from 'react'
import TeacherSidebar from '../../components/layout/teacher/TeacherSidebar'
import TeacherHeader from '../../components/layout/teacher/TeacherHeader'

const Dashboard = () => {
  return (
    <>

      <main className="gl-content-body">
        {/* <!-- Iske andar aapka content grid/cards aayenge (No editing here) --> */}


        <div>

          {/* <!-- Top Headline Banner Node --> */}
          <div className="welcome-banner-card">
            <div className="welcome-text">
              <h2>Welcome back, John! 👋</h2>
              <p>You have 2 new requests waiting for your review and 3 sessions scheduled for today.</p>
            </div>
            <div className="banner-buttons-group">
              <a href="#" className="btn-white btn-banner-white">View Requests <i
                className="fa-solid fa-arrow-right"></i></a>
              <a href="#" className="btn-banner-outline">
                <img src="/images/teacher/super-user-dashboard/calendar-icon.svg" alt="" />
                View Schedule
              </a>
            </div>
          </div>

          {/* <!-- Metric Cards Counters Row Layout --> */}
          <div className="metrics-counters-grid">
            <div className="metric-mini-card active-blue-tab">
              <div className="metric-card-header">
                <img src="/images/teacher/dashboard/1.svg" alt="" />
                New Requests
              </div>
              <div className="metric-giant-number">2</div>
              <p className="metric-card-subtext">Awaiting your review</p>
            </div>
            <div className="metric-mini-card">
              <div className="metric-card-header">
                <img src="/images/teacher/dashboard/2.svg" alt="" />
                In Progress
              </div>
              <div className="metric-giant-number">2</div>
              <p className="metric-card-subtext">Active engagements</p>
            </div>
            <div className="metric-mini-card">
              <div className="metric-card-header">
                <img src="/images/teacher/dashboard/3.svg" alt="" />
                Approvals
              </div>
              <div className="metric-giant-number">3</div>
              <p className="metric-card-subtext">Require attention</p>
            </div>
            <div className="metric-mini-card">
              <div className="metric-card-header">
                <img src="/images/teacher/dashboard/4.svg" alt="" />
                Sessions
              </div>
              <div className="metric-giant-number">3</div>
              <p className="metric-card-subtext">This week</p>
            </div>
          </div>

          {/* <!-- Side-by-Side Split Workspace Row Segment --> */}
          <div className="row g-4 mb-4">

            {/* <!-- Left Column: New Service Requests Component --> */}
            <div className="col-lg-7">

              <div className="inner-content-panel-card">
                <div className="section-headline-bar">
                  <div className="headline-title-side">
                    <i className="fa-regular fa-user"></i> New Service Requests
                  </div>
                  <a href="#" className="btn-section-view-all">View All <i
                    className="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* <!-- User Request 1 --> */}
                <div className="service-request-inner-row">
                  <div className="row-top-identity-flex">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                      className="user-avatar-circle" alt="Emma Wilson" />
                    <div className="user-identity-text">
                      <h4>Emma Wilson</h4>
                      <p><i className="bi bi-book"></i> Math Tutoring</p>
                    </div>
                    <span className="status-pill-badge pending">Pending</span>
                  </div>
                  <p className="request-description-text">Need help with advanced calculus and linear
                    algebra concepts
                    for upcoming exams.</p>
                  <div className="row-meta-footer-actions">
                    <div className="meta-parameters-group">
                      <div className="meta-param-item">
                        <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                        12-10-2025, 2:00 PM
                      </div>
                      <div className="meta-param-item">
                        <img src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" />
                        10h estimated
                      </div>
                    </div>
                    <a href="#" className="btn-view-details-link">View Details
                      <i className="bi bi-arrow-up-right"></i>
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>

                {/* <!-- User Request 2 --> */}
                <div className="service-request-inner-row">
                  <div className="row-top-identity-flex">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                      className="user-avatar-circle" alt="James Chen" />
                    <div className="user-identity-text">
                      <h4>James Chen</h4>
                      <p><i className="bi bi-book"></i> Essay Writing</p>
                    </div>
                    <span className="status-pill-badge pending">Pending</span>
                  </div>
                  <p className="request-description-text">Assistance with college application essays and
                    personal
                    statement.</p>
                  <div className="row-meta-footer-actions">
                    <div className="meta-parameters-group">
                      <div className="meta-param-item"><img
                        src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                        12-10-2025, 2:00 PM
                      </div>
                      <div className="meta-param-item"><img
                        src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> 8h
                        estimated</div>
                    </div>
                    <a href="#" className="btn-view-details-link">View Details <i
                      className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right Column: Upcoming Sessions Component --> */}
            <div className="col-lg-5">


              <div className="inner-content-panel-card">
                <div className="section-headline-bar">
                  <div className="headline-title-side">
                    <img src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> Upcoming
                    Sessions
                  </div>
                  <a href="#" className="btn-section-view-all">View Calendar <i
                    className="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* <!-- Session Row 1 --> */}
                <div className="session-item-row">
                  <div className="session-date-badge-box">
                    <span className="month-lbl">Dec</span>
                    <span className="day-lbl">10</span>
                  </div>
                  <div className="session-right-body">
                    <div className="session-top-headline">
                      <h4>SAT Math Review</h4>
                      <span className="session-type-pill">1:1</span>
                    </div>
                    <div className="session-meta-specs">
                      <div><img src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> 10:00
                        AM</div>
                      <div><i className="fa-regular fa-user"></i> Sofia Martinez</div>
                    </div>
                  </div>
                  <div className="session-actions-footer">
                    <a href="#" className="btn-view-details-link p-0">View Details <i
                      className="bi bi-arrow-up-right"></i></a>
                    <a href="#" className="btn-join-session-filled"><i className="fa-solid fa-video"></i>
                      Join
                      Session</a>
                  </div>
                </div>

                {/* <!-- Session Row 2 --> */}
                <div className="session-item-row">
                  <div className="session-date-badge-box">
                    <span className="month-lbl">Dec</span>
                    <span className="day-lbl">12</span>
                  </div>
                  <div className="session-right-body">
                    <div className="session-top-headline">
                      <h4>Group Study: Calculus</h4>
                      <span className="session-type-pill"
                        style={{ color: "#4B5563", backgroundColor: "#F3F4F6", borderColor: "#D1D5DB" }}>Group</span>
                    </div>
                    <div className="session-meta-specs">
                      <div><img src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> 4:00
                        PM</div>
                      <div><i className="fa-regular fa-user"></i> Sofia Martinez</div>
                    </div>
                  </div>
                  <div className="session-actions-footer">
                    <a href="#" className="btn-view-details-link p-0">View Details <i
                      className="bi bi-arrow-up-right"></i></a>
                    <a href="#" className="btn-join-session-filled"><i className="fa-solid fa-video"></i>
                      Join
                      Session</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- Full Width Row: In Progress Services Block Layout --> */}
          <div className="row mb-4">
            <div className="col-12">


              <div className="inner-content-panel-card">
                <div className="section-headline-bar">
                  <div className="headline-title-side">
                    <i className="fa-regular fa-user"></i> In Progress Services
                  </div>
                  <a href="#" className="btn-section-view-all">View All <i
                    className="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* <!-- Row Item 1 --> */}
                <div className="service-request-inner-row">
                  <div className="row-top-identity-flex">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                      className="user-avatar-circle" alt="Emma Wilson" />
                    <div className="user-identity-text">
                      <h4>Emma Wilson</h4>
                      <p><i className="bi bi-book"></i> Math Tutoring</p>
                    </div>
                    <span className="status-pill-badge in-progress">In Progress</span>
                  </div>
                  <p className="request-description-text">Need help with advanced calculus and linear
                    algebra concepts
                    for upcoming exams.</p>
                  <div className="row-meta-footer-actions">
                    <div className="meta-parameters-group">
                      <div className="meta-param-item"><img
                        src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> Dec
                        10,
                        2:00 PM
                      </div>
                      <div className="meta-param-item"><img
                        src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> 10h
                        estimated</div>
                    </div>
                    <a href="#" className="btn-view-details-link">View Details <i
                      className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>

                {/* <!-- Row Item 2 --> */}
                <div className="service-request-inner-row">
                  <div className="row-top-identity-flex">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                      className="user-avatar-circle" alt="James Chen" />
                    <div className="user-identity-text">
                      <h4>James Chen</h4>
                      <p><i className="bi bi-book"></i> Essay Writing</p>
                    </div>
                    <span className="status-pill-badge in-progress">In Progress</span>
                  </div>
                  <p className="request-description-text">Assistance with college application essays and
                    personal
                    statement.</p>
                  <div className="row-meta-footer-actions">
                    <div className="meta-parameters-group">
                      <div className="meta-param-item"><img
                        src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" /> Dec
                        10,
                        2:00 PM
                      </div>
                      <div className="meta-param-item"><img
                        src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> 8h
                        estimated</div>
                    </div>
                    <a href="#" className="btn-view-details-link">View Details <i
                      className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Full Width Row: Pending SOW Approvals Structural Workspace Layout --> */}
          <div className="row">
            <div className="col-12">

              <div className="inner-content-panel-card">
                <div className="section-headline-bar align-items-start">
                  <div className="headline-title-side d-block">
                    <div>
                      {/* <!-- <i className="fa-regular fa-folder-open me-2"></i> --> */}
                      <img src="/images/teacher/super-user-dashboard/su-hugeicons_note-edit.svg"
                        className="me-2" alt="" />
                      Pending SOW Approvals
                    </div>
                    <p>Multiple service requests submitted by the User. Review each service
                      individually.</p>
                  </div>
                  <a href="#" className="btn-section-view-all mt-1">View All <i
                    className="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* <!-- Document Object Item 1 --> */}
                <div className="document-request-inner-row">
                  <div className="document-left-profile-meta">
                    <div className="document-blue-icon-square"><i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="document-meta-text">
                      <h4>Sofia Martinez - Organization</h4>
                      <div className="sub-spec-line"><img
                        src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> 20 hours
                        proposed</div>
                      <p className="desc-para">SAT preparation program covering all test sections.</p>
                      <div className="date-duration-stamp"><img
                        src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                        12-10-2025 - 01-20-2026</div>
                    </div>
                  </div>
                  <div className="right-action-status-block">
                    <span className="status-pill-badge waiting-sig">Waiting Signature</span>
                    <a href="#" className="btn-view-edit-action">View / Edit <i
                      className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                {/* <!-- Document Object Item 2 --> */}
                <div className="document-request-inner-row">
                  <div className="document-left-profile-meta">
                    <div className="document-blue-icon-square"><i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="document-meta-text">
                      <h4>Chen Wilson - Organization</h4>
                      <div className="sub-spec-line"><img
                        src="/images/teacher/super-user-dashboard/su-clock-icon.svg" alt="" /> 15 hours
                        proposed</div>
                      <p className="desc-para">Physics and chemistry tutoring sessions.</p>
                      <div className="date-duration-stamp"><img
                        src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                        12-10-2025 - 01-20-2026</div>
                    </div>
                  </div>
                  <div className="right-action-status-block">
                    <span className="status-pill-badge under-review">Under Review</span>
                    <a href="#" className="btn-view-edit-action">View / Edit <i
                      className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* </div> */}
      </main>

    </>
  )
}

export default Dashboard