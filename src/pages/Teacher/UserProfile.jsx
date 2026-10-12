import React from 'react'

const UserProfile = () => {
    return (
        <>
            {/* <!-- DYNAMIC INNER BODY CONTENT (Aapka main content body) --> */}
            <main className="gl-content-body">
                {/* <!-- Iske andar aapka content grid/cards aayenge (No editing here) --> */}




                <div className="container-fluid p-0">

                    <header className="ps-header-container">
                        <div className="ps-header-left">
                            <a href="request-management.html" className="um-back-btn" aria-label="Go back">
                                <img src="/images/teacher/super-user-dashboard/left-img-user-profile.svg" alt="" />
                            </a>
                            <div className="ps-text-group">
                                <h1 className="ps-main-title">User Profile</h1>
                                <p className="ps-sub-title">Manage user profile and permissions</p>
                            </div>
                        </div>

                    </header>

                    <div className="upc-card-container">
                        <div className="upc-profile-section">
                            <div className="upc-avatar-wrapper">
                                <img src="/images/teacher/super-user-dashboard/su-james-chen.svg" alt="James Chen"
                                    className="upc-avatar-img" />
                            </div>

                            <div className="upc-info-wrapper">
                                <div className="upc-name-row">
                                    <h2 className="upc-user-name">James Chen</h2>
                                    <span className="upc-badge upc-badge-active">Active</span>
                                </div>

                                <div className="upc-role-row">
                                    <span className="upc-badge upc-badge-blue">User</span>
                                </div>

                                <ul className="upc-details-list">
                                    <li>
                                        <img src="/images/teacher/super-user-dashboard/su-mage_id-card.svg" alt="" />
                                        <span>#10001</span>
                                    </li>
                                    <li>
                                        <img src="/images/teacher/super-user-dashboard/su-lets-icons_map-light.svg" alt="" />
                                        <span>Springfield School District</span>
                                    </li>
                                    <li>
                                        <div className="upc-inline-details">
                                            <span><img src="/images/teacher/super-user-dashboard/su-mage_building-b.svg" alt="" />
                                                educationalsite.org</span>
                                            <span><img src="/images/teacher/super-user-dashboard/su-hugeicons_coupon-percent.svg"
                                                alt="" /> D05 E5E5</span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="upc-tags-container">
                                    <span className="upc-tag">Technology</span>
                                    <span className="upc-tag">Digital Equity</span>
                                    <span className="upc-tag">Innovation</span>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="gl-dashboard-tabs-wrapper">
                        <ul className="nav nav-pills gl-custom-nav-pills" id="dashboardMatrixTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="tab-personal-trigger" data-bs-toggle="pill"
                                    data-bs-target="#pane-personal" type="button" role="tab">Personal</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tab-interests-trigger" data-bs-toggle="pill"
                                    data-bs-target="#pane-interests-tags" type="button" role="tab">Interests &
                                    Tags</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tab-qualifications-trigger" data-bs-toggle="pill"
                                    data-bs-target="#pane-qualifications" type="button"
                                    role="tab">Qualifications</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tab-photos-trigger" data-bs-toggle="pill"
                                    data-bs-target="#pane-photos" type="button" role="tab">Photos & Videos
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tab-activity-trigger" data-bs-toggle="pill"
                                    data-bs-target="#pane-activity" type="button" role="tab">Activity</button>
                            </li>
                        </ul>

                        <div className="tab-content gl-custom-tab-content-wrapper" id="dashboardMatrixTabsContent">
                            {/* <!-- OVERVIEW CORE DASHBOARD WRAPPER --> */}
                            <div className="tab-pane fade show active" id="pane-personal" role="tabpanel">

                                <div className="ci-section-container">
                                    <div className="ci-section-header">
                                        <img src="/images/teacher/super-user-dashboard/contact-information.svg" alt="" />
                                        <h3>Contact Information</h3>
                                    </div>

                                    <form className="ci-flex-layout" action="#" method="POST">

                                        <div className="ci-info-card ci-half-width">
                                            <img src="/images/teacher/super-user-dashboard/su-hugeicons_mail-01.svg" alt="" />
                                            <input type="email" className="ci-form-input" name="email"
                                                value="User@example.com" placeholder="Email Address" disabled />
                                        </div>

                                        <div className="ci-info-card ci-half-width">
                                            <img src="/images/teacher/super-user-dashboard/su-fluent_call-24-regular.svg" alt="" />
                                            <input type="tel" className="ci-form-input" name="phone"
                                                value="+1 (555) 123-4567" placeholder="Phone Number" disabled />
                                        </div>

                                        <div className="ci-info-card ci-half-width">
                                            <img src="/images/teacher/super-user-dashboard/su-proicons_cake.svg" alt="" />
                                            <input type="text" className="ci-form-input" name="dob" value="12-12-2002"
                                                placeholder="Date of Birth (DD-MM-YYYY)" disabled />
                                        </div>

                                        <div className="ci-info-card ci-half-width">
                                            <img src="/images/teacher/super-user-dashboard/su-icons8_gender.svg" alt="" />
                                            <select className="ci-form-input ci-form-select" name="gender" disabled>
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female" selected>Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="ci-info-card ci-half-width">
                                            <img src="/images/teacher/super-user-dashboard/su-hugeicons_location-05.svg" alt="" />
                                            <input type="text" className="ci-form-input" name="address"
                                                value="123 Education Lane, San Francisco, CA 94102, United States"
                                                placeholder="Address" disabled />
                                        </div>

                                        <div className="ci-info-card ci-half-width">
                                            <img src="/images/teacher/super-user-dashboard/su-heroicons_language-solid.svg"
                                                alt="" />
                                            <input type="text" className="ci-form-input" name="language" value="English"
                                                placeholder="Language" disabled />
                                        </div>

                                        <div className="ci-info-card ci-full-width">
                                            <img src="/images/teacher/super-user-dashboard/su-hugeicons_user-03.svg" alt="" />
                                            <textarea className="ci-form-input ci-form-textarea" name="bio" rows="4"
                                                placeholder="Tell us about yourself..."
                                                disabled>I'm a passionate learner with a strong interest in STEM subjects. Currently focusing on advanced mathematics and physics to prepare for college. I enjoy problem-solving and have participated in several math competitions. Outside of academics, I love coding personal projects and exploring new technologies.</textarea>
                                        </div>

                                    </form>
                                </div>

                                <div className="spl-section-container">
                                    <div className="spl-section-header">
                                        <img src="/images/teacher/super-user-dashboard/su-pajamas_earth.svg" alt="" />
                                        <h3>Social & Portfolio Links</h3>
                                    </div>

                                    <div className="spl-flex-layout">

                                        <a href="#" target="_blank" className="spl-link-card">
                                            <div className="spl-left-content">
                                                <img src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg" alt="" />
                                                <span className="spl-link-text">Personal Website</span>
                                            </div>
                                            <img src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                                                alt="" />
                                        </a>

                                        <a href="#" target="_blank" className="spl-link-card">
                                            <div className="spl-left-content">
                                                <img src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg" alt="" />
                                                <span className="spl-link-text">LinkedIn</span>
                                            </div>
                                            <img src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                                                alt="" />
                                        </a>

                                        <a href="#" target="_blank" className="spl-link-card">
                                            <div className="spl-left-content">
                                                <img src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg" alt="" />
                                                <span className="spl-link-text">Twitter/X</span>
                                            </div>
                                            <img src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                                                alt="" />
                                        </a>

                                        <a href="#" target="_blank" className="spl-link-card">
                                            <div className="spl-left-content">
                                                <img src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg" alt="" />
                                                <span className="spl-link-text">YouTube Channel</span>
                                            </div>
                                            <img src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                                                alt="" />
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/* <!-- Other Tabs Content View Blockholders --> */}
                            <div className="tab-pane fade" id="pane-interests-tags" role="tabpanel">

                                <div className="it-section-container">
                                    <div className="it-section-header">
                                        <img src="/images/teacher/super-user-dashboard/su-interests-tags.svg" alt="" />
                                        <h3>Interests & Tags</h3>
                                    </div>

                                    <div className="it-tags-layout">
                                        <span className="it-badge-tag">Cybersecurity</span>
                                        <span className="it-badge-tag">Technology</span>
                                        <span className="it-badge-tag">Career Development</span>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pane-qualifications" role="tabpanel">
                                <div className="ql-main-flex-wrapper">

                                    <div className="ql-column-block">
                                        <div className="ql-section-header">
                                            <img src="/images/teacher/super-user-dashboard/su-streamline-plump_graduation-cap.svg"
                                                alt="" />
                                            <h3>Educational Qualifications</h3>
                                        </div>

                                        <div className="ql-cards-stack">
                                            <div className="ql-info-card">
                                                <div className="ql-icon-thumb">
                                                    <img src="/images/teacher/super-user-dashboard/su-stanford-university.svg"
                                                        alt="" />
                                                </div>
                                                <div className="ql-card-details">
                                                    <h4 className="ql-card-title">M.S. in Computer Science</h4>
                                                    <p className="ql-card-subtitle">Stanford University</p>
                                                    <p className="ql-card-meta">Machine Learning • 2008</p>
                                                </div>
                                            </div>

                                            <div className="ql-info-card">
                                                <div className="ql-icon-thumb">
                                                    <img src="/images/teacher/super-user-dashboard/su-stanford-university.svg"
                                                        alt="" />
                                                </div>
                                                <div className="ql-card-details">
                                                    <h4 className="ql-card-title">B.S. in Mathematics</h4>
                                                    <p className="ql-card-subtitle">UC Berkeley</p>
                                                    <p className="ql-card-meta">Pure Mathematics • 2006</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ql-column-block">
                                        <div className="ql-section-header">
                                            <img src="/images/teacher/super-user-dashboard/su-certifications.svg" alt="" />
                                            <h3>Certifications</h3>
                                        </div>

                                        <div className="ql-cards-stack">
                                            <div className="ql-info-card">
                                                <div className="ql-icon-thumb-alt">
                                                    <img src="/images/teacher/super-user-dashboard/su-cil_badge.svg" alt="" />
                                                </div>
                                                <div className="ql-card-details ql-full-width-details">
                                                    <h4 className="ql-card-title">Certified Online Instructor</h4>
                                                    <p className="ql-card-subtitle">Online Learning Consortium</p>
                                                    <p className="ql-card-credential">Credential ID: OLC-2022-45678</p>
                                                    <div className="ql-card-dates">
                                                        <span>Issued: 03-09-2018</span>
                                                        <span>Expires: 03-09-2026</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ql-info-card">
                                                <div className="ql-icon-thumb-alt">
                                                    <img src="/images/teacher/super-user-dashboard/su-cil_badge.svg" alt="" />
                                                </div>
                                                <div className="ql-card-details ql-full-width-details">
                                                    <h4 className="ql-card-title">Google Certified Educator Level 2</h4>
                                                    <p className="ql-card-subtitle">Google</p>
                                                    <p className="ql-card-credential">Credential ID: GCE2-2021-12345</p>
                                                    <div className="ql-card-dates">
                                                        <span>Issued: 03-09-2018</span>
                                                        <span>Expires: 03-09-2026</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="tab-pane fade" id="pane-photos" role="tabpanel">
                                <div className="pv-section-container">
                                    <div className="pv-section-header">
                                        <img src="/images/teacher/super-user-dashboard/photos-videos.svg" alt="" />
                                        <h3>Photos & Videos</h3>
                                    </div>

                                    <div className="pv-sub-block">
                                        <h4 className="pv-sub-title">Photos</h4>
                                        <div className="pv-flex-row">
                                            <div className="pv-media-item pv-photo-item">
                                                <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300"
                                                    alt="Notebook and pencil" />
                                            </div>
                                            <div className="pv-media-item pv-photo-item">
                                                <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300"
                                                    alt="Writing close up" />
                                            </div>
                                            <div className="pv-media-item pv-photo-item">
                                                <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=300"
                                                    alt="Sticky notes wall" />
                                            </div>
                                            <div className="pv-media-item pv-photo-item">
                                                <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300"
                                                    alt="Checklist hand writing" />
                                            </div>
                                            <div className="pv-media-item pv-photo-item">
                                                <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=300"
                                                    alt="Open blank book" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pv-sub-block">
                                        <h4 className="pv-sub-title">Videos</h4>
                                        <div className="pv-flex-row">
                                            <div className="pv-media-item pv-video-item">
                                                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400"
                                                    alt="Video thumbnail" />
                                                <div className="pv-play-overlay">
                                                    <img src="/images/teacher/super-user-dashboard/su-play-icon.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="pv-media-item pv-video-item">
                                                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400"
                                                    alt="Video thumbnail" />
                                                <div className="pv-play-overlay">
                                                    <img src="/images/teacher/super-user-dashboard/su-play-icon.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="pv-media-item pv-video-item">
                                                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400"
                                                    alt="Video thumbnail" />
                                                <div className="pv-play-overlay">
                                                    <img src="/images/teacher/super-user-dashboard/su-play-icon.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="pv-media-item pv-video-item">
                                                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400"
                                                    alt="Video thumbnail" />
                                                <div className="pv-play-overlay">
                                                    <img src="/images/teacher/super-user-dashboard/su-play-icon.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="pv-media-item pv-video-item">
                                                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400"
                                                    alt="Video thumbnail" />
                                                <div className="pv-play-overlay">
                                                    <img src="/images/teacher/super-user-dashboard/su-play-icon.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


{/* extra */}
                            <div className="tab-pane fade" id="pane-service-details" role="tabpanel">
                                <div className="gl-matrix-display-card">
                                    <div className="gl-service-header">
                                        <i className="far fa-clock gl-header-icon"></i>
                                        <h4 className="gl-header-title">Service Details</h4>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table gl-matrix-data-table align-middle">
                                            <thead>
                                                <tr>
                                                    <th className="gl-th-name">Service Name</th>
                                                    <th>Teacher Assigned</th>
                                                    <th>Program Officer</th>
                                                    <th>Progress</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Guidance</td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
                                                                alt="James Chen" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">James Chen</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80"
                                                                alt="Nolan Levin" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Nolan Levin</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-progress-wrapper">
                                                            <span className="gl-progress-text">92%</span>
                                                            <div className="progress gl-custom-progress-bg">
                                                                <div className="progress-bar gl-progress-bar-fill w-92"
                                                                    role="progressbar" aria-valuenow="92"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-in-progress">In Progress</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn gl-btn-view">
                                                            <i className="far fa-eye me-2"></i> View
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">One-on-One Coaching</td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
                                                                alt="Vincent Cervantes" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Vincent Cervantes</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80"
                                                                alt="Ryan Workman" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Ryan Workman</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-progress-wrapper">
                                                            <span className="gl-progress-text">20%</span>
                                                            <div className="progress gl-custom-progress-bg">
                                                                <div className="progress-bar gl-progress-bar-fill w-20"
                                                                    role="progressbar" aria-valuenow="20"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-in-progress">In Progress</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn gl-btn-view">
                                                            <i className="far fa-eye me-2"></i> View
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Skill Development Events
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80"
                                                                alt="Devin Harris" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Devin Harris</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&q=80&w=80"
                                                                alt="Alfredo Dorwart" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Alfredo Dorwart</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-progress-wrapper">
                                                            <span className="gl-progress-text">100%</span>
                                                            <div className="progress gl-custom-progress-bg">
                                                                <div className="progress-bar gl-progress-bar-fill w-100"
                                                                    role="progressbar" aria-valuenow="100"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-completed">Completed</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn gl-btn-view">
                                                            <i className="far fa-eye me-2"></i> View
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="gl-matrix-display-card">
                                    {/* <!-- Header Section --> */}
                                    <div className="gl-course-header">
                                        <i className="fas fa-book-open gl-header-icon"></i>
                                        <h4 className="gl-header-title">Course Details</h4>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table gl-matrix-data-table align-middle">
                                            <thead>
                                                <tr>
                                                    <th className="gl-th-course">Course Name</th>
                                                    <th className="gl-th-module">Module</th>
                                                    <th className="gl-th-lesson">Lesson</th>
                                                    <th className="text-center gl-th-status">Status</th>
                                                    <th className="text-center gl-th-ratings">Ratings</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <!-- Row 1: Main Course Header --> */}
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Planning Workshop
                                                    </td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>All Modules</span>
                                                            <i className="fas fa-chevron-up gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-completed">Completed</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="gl-rating-wrapper">
                                                            <i className="fas fa-star gl-star-icon"></i>
                                                            <span>4.8</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* <!-- Row 2: Sub-Module 1 (Expanded) --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-1">
                                                    <td className="gl-empty-cell"></td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>Module 1</span>
                                                            <i className="fas fa-chevron-up gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 3: Lesson 1 under Module 1 --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-2">
                                                    <td className="gl-empty-cell"></td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td>Lesson 1</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-pending">Pending</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 4: Lesson 2 under Module 1 --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-2">
                                                    <td className="gl-empty-cell"></td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td>Lesson 2</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-reviewed">Reviewed</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 5: Lesson 3 under Module 1 --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-2">
                                                    <td className="gl-empty-cell"></td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td>Lesson 3</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-reviewed">Reviewed</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 6: Module 2 (Collapsed) --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-1">
                                                    <td className="gl-empty-cell"></td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>Module 2</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 7: Module 3 (Collapsed) --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-1">
                                                    <td className="gl-empty-cell"></td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>Module 3</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 8: Course 2 (Needs Improvement) --> */}
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Planning Workshop
                                                    </td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>All Modules</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-needs-improvement">Needs
                                                            Improvement</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 9: Course 3 --> */}
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Planning Workshop
                                                    </td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>All Modules</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-completed">Completed</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="gl-rating-wrapper">
                                                            <i className="fas fa-star gl-star-icon"></i>
                                                            <span>4.8</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>





                            </div>

                            {/* extra */}

                            <div className="tab-pane fade" id="pane-activity" role="tabpanel">
                                <div className="act-section-container">
                                    <div className="act-section-header">
                                        <img src="/images/teacher/super-user-dashboard/su-ion_time-outline.svg" alt="" />
                                        <h3>Recent Activity</h3>
                                    </div>

                                    <div className="act-timeline-wrapper">

                                        <div className="act-timeline-item">
                                            <div className="act-left-block">
                                                <span className="act-status-dot"></span>
                                                <div className="act-content-meta">
                                                    <h4 className="act-title-text">Completed Calculus tutoring</h4>
                                                    <span className="act-date-text">12-10-2025</span>
                                                </div>
                                            </div>
                                            <div className="act-right-block">
                                                <span className="act-type-badge">Session</span>
                                            </div>
                                        </div>

                                        <div className="act-timeline-item">
                                            <div className="act-left-block">
                                                <span className="act-status-dot"></span>
                                                <div className="act-content-meta">
                                                    <h4 className="act-title-text">Submitted Physics help request</h4>
                                                    <span className="act-date-text">12-10-2025</span>
                                                </div>
                                            </div>
                                            <div className="act-right-block">
                                                <span className="act-type-badge">Request</span>
                                            </div>
                                        </div>

                                        <div className="act-timeline-item">
                                            <div className="act-left-block">
                                                <span className="act-status-dot"></span>
                                                <div className="act-content-meta">
                                                    <h4 className="act-title-text">Paid $150 for tutoring</h4>
                                                    <span className="act-date-text">12-10-2025</span>
                                                </div>
                                            </div>
                                            <div className="act-right-block">
                                                <span className="act-type-badge">Payment</span>
                                            </div>
                                        </div>

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

export default UserProfile