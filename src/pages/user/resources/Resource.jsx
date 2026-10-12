import React from 'react'
import { Link } from 'react-router-dom'

const Resource = () => {
  return (
    <> 
    <main className="glnc-canvas-container">

            <div className="gl-rgc-dashboard-container">
    
    <div className="gl-rgc-main-header-row">
        <div className="gl-rgc-title-block">
            <h1 className="gl-rgc-main-title">Resources, Grants & Certifications</h1>
            <p className="gl-rgc-subtitle">Discover funding opportunities, professional certifications and helpful resources for your educational journey</p>
        </div>
        <Link to="/student/my-list" type="button" className="gl-rgc-my-list-btn">
            <span className="gl-heart-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </span>
            My List
        </Link>
    </div>

    <div className="gl-rgc-filter-toolbar">
        <div className="gl-rgc-search-wrapper">
            <span className="gl-search-icon-svg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </span>
            <input type="text" className="gl-rgc-search-input" placeholder="Search"/>
        </div>

        <div className="gl-rgc-dropdowns-cluster">
            <div className="gl-rgc-dropdown-select">
                <span>All Tags</span>
                <img src="/images/user/super-user-dashboard/drop-dwon-right-icon.svg" alt=""/>
            </div>
            <div className="gl-rgc-dropdown-select">
                <span>Category (All)</span>
                <img src="/images/user/super-user-dashboard/drop-dwon-right-icon.svg" alt=""/>
            </div>
            <div className="gl-rgc-dropdown-select">
                <span>Language (All)</span>
                <img src="/images/user/super-user-dashboard/drop-dwon-right-icon.svg" alt=""/>
            </div>
            <button type="button" className="gl-rgc-layout-toggle-btn">
              <img src="/images/user/super-user-dashboard/mynaui_filter.svg" alt=""/>
            </button>
        </div>
    </div>

    <div className="gl-rgc-row-section">
        <div className="gl-rgc-section-header">
            <h2 className="gl-rgc-section-title">Resources</h2>
            <a href="#" className="gl-rgc-view-all-link">View All →</a>
        </div>
        <div className="gl-rgc-cards-grid-row">
            
            <div className="gl-rgc-item-card">
                <div className="gl-card-media-banner">
                    <img src="https:/images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80" alt="Resource Banner"/>
                    <div className="gl-card-floating-badge-timer">⏱ 12d 3h left</div>
                    <button className="gl-card-heart-save-trigger">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
                <div className="gl-card-body-content">
                    <div className="gl-card-tags-row">
                        <span className="gl-badge-tag-chip">Parents</span>
                        <span className="gl-badge-tag-chip">Family Engagement</span>
                        <span className="gl-badge-tag-chip">Planning</span>
                    </div>
                    <h4 className="gl-card-item-heading">Resources for schools to engage families in multiple languages...</h4>
                    <div className="gl-card-metadata-list">
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/basil_calendar-outline (1).svg" alt=""/> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/solar_dollar-outline.svg" alt=""/> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/hugeicons_note-done.svg" alt=""/> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/mage_dashboard-4.svg" alt=""/> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-footer-row">
                        <Link to="/student/resource-detail" className="gl-btn-card-view-details">View Details <span className="ms-1">→</span></Link>
                        <button className="gl-btn-card-share-action">
                            <img src="/images/user/super-user-dashboard/mdi_share.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="gl-rgc-item-card">
                <div className="gl-card-media-banner">
                    <img src="https:///images/user.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80" alt="Resource Banner"/>
                    <button className="gl-card-heart-save-trigger is-saved-active">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
                <div className="gl-card-body-content">
                    <div className="gl-card-tags-row">
                        <span className="gl-badge-tag-chip">Community</span>
                        <span className="gl-badge-tag-chip">Assessment</span>
                        <span className="gl-badge-tag-chip">Planning</span>
                    </div>
                    <h4 className="gl-card-item-heading">Step-by-step guide for conducting community needs assessments...</h4>
                    <div className="gl-card-metadata-list">
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/basil_calendar-outline (1).svg" alt=""/> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/solar_dollar-outline.svg" alt=""/> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/hugeicons_note-done.svg" alt=""/> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/mage_dashboard-4.svg" alt=""/> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-footer-row">
                       <Link to="/student/resource-detail" className="gl-btn-card-view-details">View Details <span className="ms-1">→</span></Link>
                        <button className="gl-btn-card-share-action">
                            <img src="/images/user/super-user-dashboard/mdi_share.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="gl-rgc-item-card">
                <div className="gl-card-media-banner">
                    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80" alt="Resource Banner"/>
                    <button className="gl-card-heart-save-trigger">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
                <div className="gl-card-body-content">
                    <div className="gl-card-tags-row">
                        <span className="gl-badge-tag-chip">Literacy</span>
                        <span className="gl-badge-tag-chip">Family</span>
                        <span className="gl-badge-tag-chip">Spanish</span>
                    </div>
                    <h4 className="gl-card-item-heading">Materiales y actividades para promover la alfabetización en familias...</h4>
                    <div className="gl-card-metadata-list">
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/basil_calendar-outline (1).svg" alt=""/> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/solar_dollar-outline.svg" alt=""/> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/hugeicons_note-done.svg" alt=""/> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/mage_dashboard-4.svg" alt=""/> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-footer-row">
                       <Link to="/student/resource-detail" className="gl-btn-card-view-details">View Details <span className="ms-1">→</span></Link>
                        <button className="gl-btn-card-share-action">
                            <img src="/images/user/super-user-dashboard/mdi_share.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="gl-rgc-row-section">
        <div className="gl-rgc-section-header">
            <h2 className="gl-rgc-section-title">Grants</h2>
            <a href="#" className="gl-rgc-view-all-link">View All →</a>
        </div>
        <div className="gl-rgc-cards-grid-row">
            
            <div className="gl-rgc-item-card">
                <div className="gl-card-media-banner">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80" alt="Grant Banner"/>
                    <button className="gl-card-heart-save-trigger">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
                <div className="gl-card-body-content">
                    <div className="gl-card-tags-row">
                        <span className="gl-badge-tag-chip">Technology</span>
                        <span className="gl-badge-tag-chip">Digital Equity</span>
                        <span className="gl-badge-tag-chip">Innovation</span>
                    </div>
                    <h4 className="gl-card-item-heading">Support for digital equity initiatives and technology access...</h4>
                    <div className="gl-card-metadata-list">
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/basil_calendar-outline (1).svg" alt=""/> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/solar_dollar-outline.svg" alt=""/> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/hugeicons_note-done.svg" alt=""/> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/mage_dashboard-4.svg" alt=""/> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-footer-row">
                       <Link to="/student/resource-detail" className="gl-btn-card-view-details">View Details <span className="ms-1">→</span></Link>
                        <button className="gl-btn-card-share-action">
                            <img src="/images/user/super-user-dashboard/mdi_share.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="gl-rgc-item-card">
                <div className="gl-card-media-banner">
                    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80" alt="Grant Banner"/>
                    <button className="gl-card-heart-save-trigger is-saved-active">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
                <div className="gl-card-body-content">
                    <div className="gl-card-tags-row">
                        <span className="gl-badge-tag-chip">Technology</span>
                        <span className="gl-badge-tag-chip">Digital Equity</span>
                        <span className="gl-badge-tag-chip">Innovation</span>
                    </div>
                    <h4 className="gl-card-item-heading">Apoyo financiero para maestros que buscan certificación bilingüe...</h4>
                    <div className="gl-card-metadata-list">
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/basil_calendar-outline (1).svg" alt=""/> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/solar_dollar-outline.svg" alt=""/> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/hugeicons_note-done.svg" alt=""/> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/mage_dashboard-4.svg" alt=""/> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-footer-row">
                       <Link to="/student/resource-detail" className="gl-btn-card-view-details">View Details <span className="ms-1">→</span></Link>
                        <button className="gl-btn-card-share-action">
                            <img src="/images/user/super-user-dashboard/mdi_share.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="gl-rgc-item-card">
                <div className="gl-card-media-banner">
                    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80" alt="Resource Banner"/>
                    <button className="gl-card-heart-save-trigger">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
                <div className="gl-card-body-content">
                    <div className="gl-card-tags-row">
                        <span className="gl-badge-tag-chip">Education</span>
                        <span className="gl-badge-tag-chip">Community</span>
                        <span className="gl-badge-tag-chip">Innovation</span>
                    </div>
                    <h4 className="gl-card-item-heading">Funding for community-based education initiatives focused on adult literacy...</h4>
                    <div className="gl-card-metadata-list">
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/basil_calendar-outline (1).svg" alt=""/> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/solar_dollar-outline.svg" alt=""/> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/hugeicons_note-done.svg" alt=""/> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-item"><img src="/images/user/super-user-dashboard/mage_dashboard-4.svg" alt=""/> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-footer-row">
                       <Link to="/student/resource-detail" className="gl-btn-card-view-details">View Details <span className="ms-1">→</span></Link>
                        <button className="gl-btn-card-share-action">
                            <img src="/images/user/super-user-dashboard/mdi_share.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
        </main>
    </>
  )
}

export default Resource
