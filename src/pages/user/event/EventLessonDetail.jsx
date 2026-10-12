import React from 'react'

const EventLessonDetail = () => {
  return (
   <>
     <div className="gl-details-view-master-wrapper">
    
    <header className="gl-details-view-header-strip">
        <button className="gl-details-back-circle-nav-btn" aria-label="Go back">←</button>
        <div className="gl-details-title-stack">
            <h1 className="gl-details-main-heading">Career Planning Workshop</h1>
            <p className="gl-details-sub-heading">Led by Michael Chen</p>
        </div>
    </header>

    <div className="gl-details-hero-graphic-banner" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop')` }}></div>

    <div className="gl-details-two-column-layout-grid">
        
        <main className="gl-details-primary-content-column">
            
            <section className="gl-details-card-block-panel">
                <h2 className="gl-details-block-panel-title">About This Event</h2>
                <div className="gl-details-rich-text-area">
                    <p>Join us for an interactive workshop on career planning and development. Learn how to create a roadmap for your career success, set achievable goals, and develop strategies to reach them.</p>
                    <p className="gl-details-list-intro-label">This workshop will cover:</p>
                    <ul className="gl-details-custom-bullet-list">
                        <li>Self-assessment and skills inventory</li>
                        <li>Goal setting frameworks</li>
                        <li>Industry research techniques</li>
                        <li>Creating your personal career roadmap</li>
                        <li>Networking strategies</li>
                    </ul>
                </div>
                <div className="gl-details-pills-row-wrapper">
                    <span className="gl-details-badge-pill">Career Development</span>
                    <span className="gl-details-badge-pill">Planning</span>
                    <span className="gl-details-badge-pill">Workshop</span>
                </div>
            </section>

            <section className="gl-details-card-block-panel">
                <h2 className="gl-details-block-panel-title">Materials & Attachments</h2>
                <div className="gl-details-attachments-flex-row">
                    <a href="#" className="gl-details-file-attachment-link-card">
                        <span className="gl-details-file-icon">📎</span>
                        <span className="gl-details-file-name-text">Security_Assessment_Framework.pdf</span>
                    </a>
                    <a href="#" className="gl-details-file-attachment-link-card">
                        <span className="gl-details-file-icon">📎</span>
                        <span className="gl-details-file-name-text">Implementation_Checklist.pdf</span>
                    </a>
                </div>
            </section>

            <section className="gl-details-card-block-panel">
                <h2 className="gl-details-block-panel-title">Recording</h2>
                <div className="gl-details-recording-split-media-box">
                    <div className="gl-details-video-thumbnail-wrapper-trigger" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552581230-c01bc0d48453?q=80&w=500&auto=format&fit=crop')` }}>
                        <button className="gl-details-video-play-center-btn" aria-label="Play recording preview">▶</button>
                    </div>
                    <div className="gl-details-recording-narrative-info">
                        <p className="gl-details-recording-alert-text">Recording will be available after the event. Registered participants will get access to the recording in the 'My Events' section.</p>
                        <div className="gl-details-recording-meta-footer-text">Duration: 2 hours • Format: Video + Slides</div>
                    </div>
                </div>
            </section>
        </main>

        <aside className="gl-details-sticky-sidebar-column">
            
            <div className="gl-details-sidebar-card-panel">
                <div className="gl-details-sidebar-sub-section">
                    <h3 className="gl-details-sidebar-panel-heading">Event Details</h3>
                    <div className="gl-details-sidebar-meta-list-stack">
                        <div className="gl-details-sidebar-meta-item-row">
                            <span className="gl-details-sidebar-row-icon">📅</span>
                            <span className="gl-details-sidebar-row-text">Friday, December 5, 2025</span>
                        </div>
                        <div className="gl-details-sidebar-meta-item-row">
                            <span className="gl-details-sidebar-row-icon">🕒</span>
                            <span className="gl-details-sidebar-row-text">2:00 PM EST (2 hours)</span>
                        </div>
                        <div className="gl-details-sidebar-meta-item-row">
                            <span className="gl-details-sidebar-row-icon">📍</span>
                            <span className="gl-details-sidebar-row-text">Virtual - Zoom</span>
                        </div>
                    </div>
                </div>

                <hr className="gl-details-sidebar-divider-line"/>

                <div className="gl-details-sidebar-sub-section">
                    <h3 className="gl-details-sidebar-panel-heading">Instructor</h3>
                    <div className="gl-details-instructor-profile-card">
                        <img className="gl-details-instructor-avatar-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Michael Chen Profile Picture"/>
                        <div className="gl-details-instructor-identity-stack">
                            <div className="gl-details-instructor-name-label">Michael Chen</div>
                            <p className="gl-details-instructor-bio-summary-text">Tech leader and coach specializing in career transitions and skill development.</p>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    </div>
</div>
   </>
  )
}

export default EventLessonDetail
