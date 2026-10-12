import React, {useState} from 'react';

const ReviewRatings = () => {

    const [showFeedback, setShowFeedback] = useState(false);

    return (
        <main class="gl-content-body">
        {/* <!-- Sidebar Backdrop Blur Layer --> */}
        {/* <div class="sidebar-backdrop-overlay" id="sidebarOverlay"></div> */}
        <div class={`sidebar-backdrop-overlay ${showFeedback ? "is-visible" : ""}`} id="sidebarOverlay" onClick={() => setShowFeedback(false)}></div>

        {/* <!-- USER FEEDBACK OFFCANVAS SIDEBAR COMPONENT (Bina kuch hataye new append) --> */}
        {/* <div class="feedback-right-sidebar-panel" id="feedbackSidebar"> */}
        <div class={`feedback-right-sidebar-panel ${showFeedback ? "is-visible" : ""}`} id="feedbackSidebar">
            <div class="sidebar-header-row">
                <div class="sidebar-header-title-block">
                    <div class="star-icon-container">
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h3>User Feedback</h3>
                </div>
                {/* <button class="btn-sidebar-close-cross" id="closeSidebarBtn">&times;</button> */}
                <button class="btn-sidebar-close-cross" id="closeSidebarBtn" onClick={() => setShowFeedback(false)}>&times;</button>
            </div>

            <div class="sidebar-meta-subline" id="sidebarMetaSubline">Submitted on Dec 12, 2025 • Math Tutoring
            </div>

            <div class="sidebar-user-profile-zone">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="User Profile" id="sidebarUserAvatar" />
                <div class="user-meta-details-box">
                    <span>User</span>
                    <h4 id="sidebarUserName">James Chen</h4>
                </div>
            </div>

            {/* <!-- Stars row display logic hook --> */}
            <div class="stars-row-display" id="sidebarStarsRow">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star unfilled"></i>
            </div>

            <div class="feedback-tags-pill-row">
                <span class="feedback-tag-pill-item">Helpful</span>
                <span class="feedback-tag-pill-item">Great Communication</span>
            </div>

            <div class="feedback-body-section-heading">User Feedback</div>
            <div class="feedback-text-bubble-content" id="sidebarFeedbackMessage">
                Sarah was extremely helpful and explained difficult concepts clearly. I felt much more confident
                going into
                my exam.
            </div>

            <button class="btn-sidebar-view-details-action">View Details</button>

            <div class="sidebar-bottom-disclaimer">
                This feedback is visible to instructors and admins only.
            </div>
        </div>


        <div class="main-container-wrapper">

            {/* <!-- Header Block Area --> */}

            <header class="template-header-action-row">
                <a href="hours-deliverables.html" class="btn-circle-back-navigation">
                    <i class="fa-solid fa-arrow-left"></i>
                </a>
                <div class="header-title-meta-group">
                    <h1>Your Reviews</h1>
                    <p>View and manage feedback teachers provide on completed engagements</p>
                </div>
            </header>

            {/* <!-- Centralized Container Block for Table Grid System --> */}
            <section class="reviews-ledger-card-container">

                {/* <!-- Filter and Search Actions Management Grid --> */}
                <div class="filter-action-tray-row">
                    <div class="search-input-wrapper-box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" class="search-control-element" placeholder="Search" />
                    </div>

                    <div class="filter-dropdowns-group-zone">
                        <div class="custom-filter-dropdown-trigger">
                            All Services <i class="fa-solid fa-chevron-down" style={{fontSize: "10px"}}></i>
                        </div>
                        <div class="custom-filter-dropdown-trigger">
                            Date
                            <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* <!-- Table Architecture Grid Element Section --> */}
                <div class="custom-ledger-table-wrapper">
                    <table class="table custom-ledger-table" id="reviewsTable">
                        <thead>
                            <tr>
                                <th style={{width: "60px"}}>#</th>
                                <th>User Name</th>
                                <th>Service / Course</th>
                                <th>Ratings</th>
                                <th>Date</th>
                                <th style={{width: "120px"}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Row Item Node 1 --> */}
                            <tr data-date="10-02-2025"
                                data-msg="Sarah was extremely helpful and explained difficult concepts clearly. I felt much more confident going into my exam.">
                                <td>1</td>
                                <td>
                                    <div class="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                                            alt="James Chen" />
                                        <span class="row-name">James Chen</span>
                                    </div>
                                </td>
                                <td class="row-service">Career Guidance</td>
                                <td>
                                    <div class="rating-stars-badge-zone" data-rating="4">
                                        <i class="fa-solid fa-star"></i> <span>4</span>
                                    </div>
                                </td>
                                <td>10-02-2025</td>
                                <td>
                                    <button class="btn-table-action-view-view" onClick={() =>{ console.log("View sidebar is coming"); setShowFeedback(true)}}><i class="fa-regular fa-eye"></i>
                                        View</button>
                                </td>
                            </tr>
                            {/* <!-- Row Item Node 2 --> */}
                            <tr data-date="10-02-2025"
                                data-msg="The coaching session was decent, but I expected more real-world project scenarios. Communication was good.">
                                <td>2</td>
                                <td>
                                    <div class="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                                            alt="Vincent Cervantes" />
                                        <span class="row-name">Vincent Cervantes</span>
                                    </div>
                                </td>
                                <td class="row-service">One-on-One Coaching</td>
                                <td>
                                    <div class="rating-stars-badge-zone" data-rating="3">
                                        <i class="fa-solid fa-star"></i> <span>3</span>
                                    </div>
                                </td>
                                <td>10-02-2025</td>
                                <td>
                                    <button class="btn-table-action-view-view" onClick={() =>{ console.log("View sidebar is coming"); setShowFeedback(true)}}><i class="fa-regular fa-eye"></i>
                                        View</button>
                                </td>
                            </tr>
                            {/* <!-- Row Item Node 3 --> */}
                            <tr data-date="10-02-2025"
                                data-msg="Fantastic group environment! Highly engaging discussions and very well structured flow. Highly recommended.">
                                <td>3</td>
                                <td>
                                    <div class="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                                            alt="Devin Harris" />
                                        <span class="row-name">Devin Harris</span>
                                    </div>
                                </td>
                                <td class="row-service">Group Coaching</td>
                                <td>
                                    <div class="rating-stars-badge-zone" data-rating="4">
                                        <i class="fa-solid fa-star"></i> <span>4</span>
                                    </div>
                                </td>
                                <td>10-02-2025</td>
                                <td>
                                    <button class="btn-table-action-view-view" onClick={() =>{ console.log("View sidebar is coming"); setShowFeedback(true)}}><i class="fa-regular fa-eye"></i>
                                        View</button>
                                </td>
                            </tr>
                            {/* <!-- Row Item Node 4 --> */}
                            <tr data-date="10-02-2025"
                                data-msg="Excellent project architecture alignment support. Explained complicated repository patterns seamlessly.">
                                <td>4</td>
                                <td>
                                    <div class="avatar-info-cell-block">
                                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80"
                                            alt="Elmer Herrera" />
                                        <span class="row-name">Elmer Herrera</span>
                                    </div>
                                </td>
                                <td class="row-service">Project Support</td>
                                <td>
                                    <div class="rating-stars-badge-zone" data-rating="4.5">
                                        <i class="fa-solid fa-star"></i> <span>4.5</span>
                                    </div>
                                </td>
                                <td>10-02-2025</td>
                                <td>
                                    <button class="btn-table-action-view-view" onClick={() =>{ console.log("View sidebar is coming"); setShowFeedback(true)}}><i class="fa-regular fa-eye"></i>
                                        View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!-- Pagination Footer Controls Matrix Panel Tray Layout --> */}
                <div class="table-footer-pagination-tray">
                    <div class="footer-left-meta-zone">
                        <span>Show</span>
                        <select class="show-entries-select">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>Showing 1-4 from 50 results</span>
                    </div>

                    <div class="custom-pagination-controls">
                        <a href="#" class="pagination-btn-pill text-type disabled">Prev</a>
                        <a href="#" class="pagination-btn-pill active">1</a>
                        <a href="#" class="pagination-btn-pill">2</a>
                        <a href="#" class="pagination-btn-pill">3</a>
                        <span
                            style={{color: "var(--text-ultra-muted)", padding: "0 4px", fontSize: "12px"}}>...</span>
                        <a href="#" class="pagination-btn-pill">10</a>
                        <a href="#" class="pagination-btn-pill text-type active"
                            style={{backgroundColor: "var(--secondary-blue)", color:"#FFFFFF", borderColor: "var(--secondary-blue)"}}>Next</a>
                    </div>
                </div>
            </section>

        </div>
    </main>
    )
}

export default ReviewRatings;