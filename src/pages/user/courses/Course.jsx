import React from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
              <main className="gl-content-body">
        <div className="my-crs-wrapper">
    
    <div className="my-crs-top-header">
        <div>
            <h1 className="my-crs-main-title">My Courses</h1>
            <p className="my-crs-subtitle">Track your learning journey and achievements</p>
        </div>
       <div className="my-certificate-wrp">
         <Link to="/student/my-certificates" className="u-prof-ban-btn">
            My Certificates
            <svg className="u-prof-ban-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </Link>
        <button className="my-crs-btn-header">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            My Courses
        </button>
       </div>
    </div>

    <div className="my-crs-filters-row">
        <div className="my-crs-search-box">
            <svg className="my-crs-search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search" className="my-crs-search-input"/>
        </div>
        <div className="my-crs-dropdowns-group">
            <div className="my-crs-select-pill">
                <select>
                    <option>Free Courses</option>
                </select>
            </div>
            <div className="my-crs-select-pill">
                <select>
                    <option>Category (All)</option>
                </select>
            </div>
            <div className="my-crs-select-pill">
                <select>
                    <option>Level (All)</option>
                </select>
            </div>
            <button className="my-crs-date-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Date
            </button>
        </div>
    </div>

    <h2 className="my-crs-section-heading">Category (All)</h2>

    <div className="my-crs-grid">
        
        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-level beginner">Beginner</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title">Course: 1</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <div className="my-crs-progress-block">
                    <div className="my-crs-progress-meta"><span>Progress</span><strong>0%</strong></div>
                    <div className="my-crs-bar-bg"><div className="my-crs-bar-fill" style={{width: "0%"}}></div></div>
                </div>
                <div className="my-crs-module-status">
                    <span><img src="images/super-user-dashboard/charm_circle-tick (1).svg" alt=""/> Current Module</span><strong>CSS Fundamentals</strong>
                </div>
                <button className="my-crs-action-btn premium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-crs-lock-icon"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg>
                    Upgrade to Access
                </button>
            </div>
        </div>

        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-top-left warning">Purchased</span>
                <span className="my-crs-badge-level advanced">Advanced</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title">Course: 2</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <div className="my-crs-progress-block">
                    <div className="my-crs-progress-meta"><span>Progress</span><strong>75%</strong></div>
                    <div className="my-crs-bar-bg"><div className="my-crs-bar-fill" style={{width: "75%"}}></div></div>
                </div>
                <div className="my-crs-module-status">
                    <span><img src="images/super-user-dashboard/charm_circle-tick (1).svg" alt=""/> Current Module</span><strong>CSS Fundamentals</strong>
                </div>
                <a href="career-planning-workshop.html" className="my-crs-action-btn primary">Resume →</a>
            </div>
        </div>

        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-level intermediate">Intermediate</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title">Course: 3</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <div className="my-crs-progress-block">
                    <div className="my-crs-progress-meta"><span>Progress</span><strong>100%</strong></div>
                    <div className="my-crs-bar-bg"><div className="my-crs-bar-fill completed" style={{width: "100%"}}></div></div>
                </div>
                <div className="my-crs-module-status">
                    <span><img src="images/super-user-dashboard/charm_circle-tick (1).svg" alt=""/> Current Module</span><strong>CSS Fundamentals</strong>
                </div>
                <button className="my-crs-action-btn success"><img src="images/super-user-dashboard/charm_circle-tick (1).svg" alt=""/> Completed</button>
            </div>
        </div>

        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-level beginner">Beginner</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title">Course: 4</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <div className="my-crs-progress-block">
                    <div className="my-crs-progress-meta"><span>Progress</span><strong>0%</strong></div>
                    <div className="my-crs-bar-bg"><div className="my-crs-bar-fill" style={{width: "0%"}}></div></div>
                </div>
                <div className="my-crs-module-status">
                    <span><img src="images/super-user-dashboard/charm_circle-tick (1).svg" alt=""/> Current Module</span><strong>CSS Fundamentals</strong>
                </div>
                <button className="my-crs-action-btn premium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-crs-lock-icon"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg>
                    Upgrade to Access
                </button>
            </div>
        </div>

        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-level advanced">Advanced</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title">Course: 4</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <div className="my-crs-progress-block">
                    <div className="my-crs-progress-meta"><span>Progress</span><strong>0%</strong></div>
                    <div className="my-crs-bar-bg"><div className="my-crs-bar-fill" style={{width: "0%"}}></div></div>
                </div>
                <div className="my-crs-module-status">
                    <span><img src="images/super-user-dashboard/charm_circle-tick (1).svg" alt=""/> Current Module</span><strong>CSS Fundamentals</strong>
                </div>
                <button className="my-crs-action-btn premium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-crs-lock-icon"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg>
                    Upgrade to Access
                </button>
            </div>
        </div>

        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-level intermediate">Intermediate</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title">Course: 6</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <div className="my-crs-progress-block">
                    <div className="my-crs-progress-meta"><span>Progress</span><strong>0%</strong></div>
                    <div className="my-crs-bar-bg"><div className="my-crs-bar-fill" style={{width:"0%"}}></div></div>
                </div>
                <div className="my-crs-module-status">
                    <span><img src="images/super-user-dashboard/charm_circle-tick (1).svg" alt=""/> Current Module</span><strong>CSS Fundamentals</strong>
                </div>
                <Link to="/student/lesson" className="my-crs-action-btn primary">Start Learning →</Link>
            </div>
        </div>

    </div>

    <h2 className="my-crs-section-heading recommended-title">Recommended Courses</h2>
    <p className="my-crs-section-subtext">Courses matched to your learning goals</p>

    <div className="my-crs-grid">
        
        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-top-left recommendation">Based on your interest in Technology</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title font-large">Fiber Optics Installation</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <button className="my-crs-action-btn primary margin-top-auto">View Course →</button>
            </div>
        </div>

        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-top-left recommendation blue-theme">Recommended for Career Development</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title font-large">Project Management Fundamentals</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <button className="my-crs-action-btn primary margin-top-auto">View Course →</button>
            </div>
        </div>

        <div className="my-crs-card">
            <div className="my-crs-media-container">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" alt="Course Thumbnail" className="my-crs-thumb"/>
                <span className="my-crs-badge-top-left recommendation">Based on your interest in Technology</span>
            </div>
            <div className="my-crs-card-body">
                <h3 className="my-crs-card-title font-large">Digital Marketing Strategies</h3>
                <p className="my-crs-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="my-crs-tags-row">
                    <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
                </div>
                <button className="my-crs-action-btn primary margin-top-auto">View Course →</button>
            </div>
        </div>

    </div>

  <footer className="gl-events-pagination-footer-row-bar">
        <div className="gl-pagination-show-selector-block">
            Show 
            <select aria-label="Items per page">
                <option>10</option>
                <option>25</option>
            </select>
            Showing 1-4 from 50 results
        </div>
        <div className="gl-pagination-numeric-pills-flex">
            <button className="gl-page-ctrl-arrow-btn" disabled>Prev</button>
            <button className="gl-numeric-pill-item gl-pill-active">1</button>
            <button className="gl-numeric-pill-item">2</button>
            <button className="gl-numeric-pill-item">3</button>
            <span className="gl-pagination-ellipsis-break">...</span>
            <button className="gl-numeric-pill-item">10</button>
            <button className="gl-page-ctrl-arrow-btn gl-arrow-active">Next</button>
        </div>
    </footer>

</div>
        </main>     
    </>
  )
}

export default Course
