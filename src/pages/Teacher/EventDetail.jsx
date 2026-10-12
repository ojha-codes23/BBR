import React from 'react'

const EventDetail = () => {
  return (
    <main class="gl-content-body">
    <div class="container-custom">
        {/* <!-- HEADER ROW BLOCK REFERENCE FROM Event-detail-page.jpg --> */}
        <header class="glnc-page-header">
            <a href="events-sessions.html" class="glnc-back-btn">
                <i class="bi bi-arrow-left"></i>
            </a>
            <div>
                <h1 class="glnc-header-title">College Application Workshop</h1>
                <p class="glnc-header-subtitle">Led by Sarah Johnson</p>
            </div>
        </header>

        {/* <!-- MAIN HERO PRESENTATION BANNER --> */}
        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200"
            alt="Workshop Workspace Activity Layout" class="glnc-main-banner" />

        {/* <!-- TWO COLUMN DETAILS LAYOUT GRID --> */}
        <div class="row g-4">

            {/* <!-- LEFT COLUMN BLOCK CONTENT --> */}
            <div class="col-lg-7.5 col-md-7">

                {/* <!-- CARD 1: ABOUT DETAILS --> */}
                <section class="glnc-detail-card">
                    <h2 class="glnc-card-title">About This Event</h2>
                    <p class="glnc-about-text">
                        Join us for an interactive workshop on career planning and development. Learn how to
                        create a
                        roadmap for your career success, set achievable goals, and develop strategies to
                        reach them.
                    </p>
                    <p class="glnc-about-text mb-2">This workshop will cover:</p>
                    <ul class="glnc-about-list">
                        <li>Self-assessment and skills inventory</li>
                        <li>Goal setting frameworks</li>
                        <li>Industry research techniques</li>
                        <li>Creating your personal career roadmap</li>
                        <li>Networking strategies</li>
                    </ul>

                    <div class="glnc-tag-container">
                        <span class="glnc-pill-tag">Career Development</span>
                        <span class="glnc-pill-tag">Planning</span>
                        <span class="glnc-pill-tag">Workshop</span>
                    </div>
                </section>

                {/* <!-- CARD 2: MATERIALS DOCUMENT UPLOADS --> */}
                <section class="glnc-detail-card">
                    <h2 class="glnc-card-title">Upload Materials</h2>

                    <div class="glnc-upload-dropzone">
                        <i class="bi bi-upload glnc-upload-icon"></i>
                        <p class="glnc-upload-text">Drag and drop files here, or click to browse</p>
                    </div>

                    <h3 class="glnc-section-subtitle">Selected Files</h3>

                    {/* <!-- FILE ROWS LIST --> */}
                    <div class="glnc-file-row">
                        <div class="glnc-file-info">
                            <i class="bi bi-paperclip"></i>
                            <span>Security_Assessment_Framework.pdf</span>
                        </div>
                        <button class="glnc-file-delete"><i class="bi bi-trash"></i></button>
                    </div>

                    <div class="glnc-file-row">
                        <div class="glnc-file-info">
                            <i class="bi bi-paperclip"></i>
                            <span>Implementation_Checklist.pdf</span>
                        </div>
                        <button class="glnc-file-delete"><i class="bi bi-trash"></i></button>
                    </div>

                    <button class="glnc-btn-action-upload">Upload (1) <i
                            class="bi bi-arrow-right ms-1"></i></button>
                </section>
            </div>

            {/* <!-- RIGHT COLUMN UTILITIES SIDEBAR BLOCK --> */}
            <div class="col-lg-4.5 col-md-5">

                {/* <!-- CARD 1: OVERALL LOGISTICS --> */}
                <aside class="glnc-detail-card">
                    <h2 class="glnc-card-title">Event Details</h2>

                    <div class="glnc-meta-item">
                        <i class="bi bi-calendar3"></i>
                        <span>Friday, December 5, 2025</span>
                    </div>
                    <div class="glnc-meta-item">
                        <i class="bi bi-clock"></i>
                        <span>2:00 PM EST (2 hours)</span>
                    </div>
                    <div class="glnc-meta-item">
                        <i class="bi bi-geo-alt"></i>
                        <span>Virtual - Zoom</span>
                    </div>
                    <div class="glnc-meta-item">
                        <i class="bi bi-globe"></i>
                        <span>English</span>
                    </div>

                    <div class="glnc-card-divider"></div>

                    <h3 class="glnc-section-subtitle" style={{marginBottom: "16px"}}>Instructor</h3>
                    <div class="glnc-instructor-block">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                            alt="Sarah Johnson Avatar Layout" class="glnc-instructor-avatar" />
                        <h4 class="glnc-instructor-name">Sarah Johnson</h4>
                    </div>
                    <p class="glnc-instructor-bio">
                        Tech leader and coach specializing in career transitions and skill development.
                    </p>

                    <button class="glnc-btn-state start">Start Event <i
                            class="bi bi-arrow-right ms-1"></i></button>
                    <button class="glnc-btn-state end">End Event <i
                            class="bi bi-arrow-right ms-1"></i></button>
                </aside>

                {/* <!-- CARD 2: REGISTERED MEMBERS FEED --> */}
                <aside class="glnc-detail-card">
                    <h2 class="glnc-card-title" style={{marginBottom: "16px"}}>Attendees (99)</h2>

                    <div class="glnc-attendee-list-wrapper">
                        {/* <!-- USER 1 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Katherine Hansen" />
                            <a href="#" class="glnc-attendee-name">Katherine Hansen</a>
                        </div>
                        {/* <!-- USER 2 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Kim Kelly" />
                            <a href="#" class="glnc-attendee-name">Kim Kelly</a>
                        </div>
                        {/* <!-- USER 3 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Fredrick Miranda" />
                            <a href="#" class="glnc-attendee-name">Fredrick Miranda</a>
                        </div>
                        {/* <!-- USER 4 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Maureen Torres" />
                            <a href="#" class="glnc-attendee-name">Maureen Torres</a>
                        </div>
                        {/* <!-- USER 5 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Lena Ward" />
                            <a href="#" class="glnc-attendee-name">Lena Ward</a>
                        </div>
                        {/* <!-- USER 6 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Lorene Zhang" />
                            <a href="#" class="glnc-attendee-name">Lorene Zhang</a>
                        </div>
                        {/* <!-- USER 7 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Wilbert Delgado" />
                            <a href="#" class="glnc-attendee-name">Wilbert Delgado</a>
                        </div>
                        {/* <!-- USER 8 --> */}
                        <div class="glnc-attendee-item">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100"
                                class="glnc-attendee-avatar" alt="Billie Turner" />
                            <a href="#" class="glnc-attendee-name">Billie Turner</a>
                        </div>
                    </div>
                </aside>
            </div>

        </div>
    </div>
</main>
  )
}

export default EventDetail