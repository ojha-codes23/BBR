import React from 'react'
import { Link } from 'react-router-dom'

const LiveCoaching = () => {
  return (
    <>
         <div className="lsc-dashboard-wrapper container-fluid">
    
    <div className="lsc-top-header">
        <div className="lsc-header-text-block">
            <h1 className="lsc-main-page-title">Live Sessions & Coaching</h1>
            <p className="lsc-sub-page-desc">Join real-time lectures, coaching circles, and Q&A sessions with teachers and mentors</p>
        </div>
        <Link to="/student/my-event-calendar" className="lsc-btn-calendar text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            View Calendar
        </Link>
    </div>

    <div className="lsc-filter-tabs-row">
    <button className="btn lsc-tab-item active">Session (All) (3)</button>
    <button className="btn lsc-tab-item lsc-live-tab">
        <span className="lsc-live-dot"></span>Live Now (1)
    </button>
    <button className="btn lsc-tab-item">Upcoming (2)</button>
    <button className="btn lsc-tab-item">Past Sessions</button>
</div>

    <div className="lsc-info-alert-bar border rounded">
        <div className="lsc-alert-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        </div>
        <p className="lsc-alert-text">Some sessions require a premium account. Free sessions are marked with a "Free" badge.</p>
    </div>

    <div className="lsc-cards-stack">

        <div className="lsc-session-card border rounded bg-white">
            <div className="lsc-card-img-wrapper">
                <img src="https:/images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Session Image"/>
            </div>
            <div className="lsc-card-content-body">
                <div className="lsc-card-main-info">
                    <div className="lsc-card-header-line">
                        <h2 className="lsc-card-main-title">Advanced Threat Detection Techniques</h2>
                        <span className="badge lsc-badge-free">&#128274; Free</span>
                    </div>
                    <p className="lsc-card-category">Cybersecurity</p>
                    <div className="lsc-meta-info-strip">
                        <span>&#128197; Sat, Dec 6, 04:18 PM</span>
                        <span>&#128161; 90 minutes</span>
                        <span>&#128101; 32 / 50 enrolled</span>
                    </div>
                    <div className="lsc-progress-block">
                        <div className="lsc-progress-labels">
                            <span>Progress</span>
                            <span className="lsc-spots-blue">18 spots remaining</span>
                        </div>
                        <div className="progress lsc-custom-progress">
                            <div className="progress-bar lsc-progress-green lsc-w-64"></div>
                        </div>
                    </div>
                </div>
                <div className="lsc-card-footer-line">
                    <div className="lsc-host-info">Hosted By <strong>Michael Chen</strong></div>
                    <Link to="/student/mentorship-group" className="btn btn-primary lsc-btn-reserve font-weight-bold">Reserve Now &nbsp;&rarr;</Link>
                </div>
            </div>
        </div>

        <div className="lsc-session-card border rounded bg-white">
            <div className="lsc-card-img-wrapper">
                <img src="https:/images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Session Image"/>
            </div>
            <div className="lsc-card-content-body">
                <div className="lsc-card-main-info">
                    <div className="lsc-card-header-line">
                        <h2 className="lsc-card-main-title">Grant Proposal Workshop</h2>
                        <div className="lsc-badge-group">
                            <span className="badge lsc-badge-free">&#128274; Free</span>
                            <span className="badge bg-danger text-white lsc-badge-live">&#9679; Live</span>
                        </div>
                    </div>
                    <p className="lsc-card-category">Grant Writing</p>
                    <div className="lsc-meta-info-strip">
                        <span>&#128197; Thu, Dec 4, 04:18 PM</span>
                        <span>&#128161; 60 minutes</span>
                        <span>&#128101; 25 / 25 enrolled</span>
                    </div>
                    <div className="lsc-progress-block">
                        <div className="lsc-progress-labels">
                            <span>Progress</span>
                            <span className="lsc-spots-red">0 spots remaining</span>
                        </div>
                        <div className="progress lsc-custom-progress">
                            <div className="progress-bar lsc-progress-green lsc-w-100"></div>
                        </div>
                    </div>
                </div>
                <div className="lsc-card-footer-line">
                    <div className="lsc-host-info">Hosted By <strong>Rachel Thompson</strong></div>
                    <button className="btn btn-danger lsc-btn-live font-weight-bold">Join Live</button>
                </div>
            </div>
        </div>

        <div className="lsc-session-card border rounded bg-white">
            <div className="lsc-card-img-wrapper">
                <img src="https:/images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Session Image"/>
            </div>
            <div className="lsc-card-content-body">
                <div className="lsc-card-main-info">
                    <div className="lsc-card-header-line">
                        <h2 className="lsc-card-main-title">Advanced Threat Detection Techniques</h2>
                        <span className="badge lsc-badge-free">&#128274; Free</span>
                    </div>
                    <p className="lsc-card-category">Cybersecurity</p>
                    <div className="lsc-meta-info-strip">
                        <span>&#128197; Sat, Dec 6, 04:18 PM</span>
                        <span>&#128161; 90 minutes</span>
                        <span>&#128101; 32 / 50 enrolled</span>
                    </div>
                    <div className="lsc-progress-block">
                        <div className="lsc-progress-labels">
                            <span>Progress</span>
                            <span className="lsc-spots-blue">18 spots remaining</span>
                        </div>
                        <div className="progress lsc-custom-progress">
                            <div className="progress-bar lsc-progress-green lsc-w-64"></div>
                        </div>
                    </div>
                </div>
                <div className="lsc-card-footer-line">
                    <div className="lsc-host-info">Hosted By <strong>Michael Chen</strong></div>
                    <button className="btn lsc-btn-confirmed font-weight-bold">&#10004; RSVP Confirmed</button>
                </div>
            </div>
        </div>

        <div className="lsc-session-card border rounded bg-white">
            <div className="lsc-card-img-wrapper">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Session Image"/>
            </div>
            <div className="lsc-card-content-body">
                <div className="lsc-card-main-info">
                    <div className="lsc-card-header-line">
                        <h2 className="lsc-card-main-title">Advanced Threat Detection Techniques</h2>
                        <span className="badge lsc-badge-free">&#128274; Free</span>
                    </div>
                    <p className="lsc-card-category">Cybersecurity</p>
                    <div className="lsc-meta-info-strip">
                        <span>&#128197; Sat, Dec 6, 04:18 PM</span>
                        <span>&#128161; 90 minutes</span>
                        <span>&#128101; 32 / 50 enrolled</span>
                    </div>
                    <div className="lsc-progress-block">
                        <div className="lsc-progress-labels">
                            <span>Progress</span>
                            <span className="lsc-spots-blue">18 spots remaining</span>
                        </div>
                        <div className="progress lsc-custom-progress">
                            <div className="progress-bar lsc-progress-green lsc-w-64"></div>
                        </div>
                    </div>
                </div>
                <div className="lsc-card-footer-line">
                    <div className="lsc-host-info">Hosted By <strong>Michael Chen</strong></div>
                    <button className="btn btn-danger lsc-btn-cancel font-weight-bold">&times; Cancel Reservation</button>
                </div>
            </div>
        </div>

        <div className="lsc-session-card border rounded bg-white">
            <div className="lsc-card-img-wrapper">
                <img src="https:/images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Session Image"/>
            </div>
            <div className="lsc-card-content-body">
                <div className="lsc-card-main-info">
                    <div className="lsc-card-header-line">
                        <h2 className="lsc-card-main-title">Security Career Paths</h2>
                        <span className="badge lsc-badge-premium">&#128274; Premium</span>
                    </div>
                    <p className="lsc-card-category">Career Development</p>
                    <div className="lsc-meta-info-strip">
                        <span>&#128197; Thu, Dec 4, 04:18 PM</span>
                        <span>&#128161; 90 minutes</span>
                        <span>&#128101; 32 / 50 enrolled</span>
                    </div>
                    <div className="lsc-progress-block">
                        <div className="lsc-progress-labels">
                            <span>Progress</span>
                            <span className="lsc-spots-blue">2 spots remaining</span>
                        </div>
                        <div className="progress lsc-custom-progress">
                            <div className="progress-bar lsc-progress-green lsc-w-85"></div>
                        </div>
                    </div>
                </div>
                <div className="lsc-card-footer-line">
                    <div className="lsc-host-info">Hosted By <strong>Michael Chen</strong></div>
                    <button className="btn lsc-btn-upgrade font-weight-bold text-dark">Upgrade to Reserve Spot &nbsp;&rarr;</button>
                </div>
            </div>
        </div>

    </div>

    <div className="lsc-pagination-strip">
    <div className="lsc-results-count">Showing 4 from 50 results</div>
    <nav aria-label="Page navigation" className="lsc-pagination-nav">
        <ul className="lsc-pagination-list">
            <li className="lsc-page-item disabled"><a className="lsc-page-link" href="#">Prev</a></li>
            <li className="lsc-page-item active"><a className="lsc-page-link" href="#">1</a></li>
            <li className="lsc-page-item"><a className="lsc-page-link" href="#">2</a></li>
            <li className="lsc-page-item"><a className="lsc-page-link" href="#">3</a></li>
            <li className="lsc-page-item disabled"><span className="lsc-dot-break">...</span></li>
            <li className="lsc-page-item"><a className="lsc-page-link" href="#">10</a></li>
            <li className="lsc-page-item action-next"><a className="lsc-page-link" href="#">Next</a></li>
        </ul>
    </nav>
</div>

             </div>
    </>
  )
}

export default LiveCoaching
