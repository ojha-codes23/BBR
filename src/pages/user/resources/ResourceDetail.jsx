import React from 'react'

const ResourceDetail = () => {
  return (
   <>
      <main>

      <div className="gl-fund-master-detail-viewport">

    {/* <!-- MASTER CONTENT HEADER HEADER PANEL --> */}
    <header className="gl-fund-top-navbar-strip">
        <div className="gl-fund-title-brand-stack">
            <a href="#" type="button" className="gl-back-round-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </a>
            <div className="gl-fund-heading-text-group">
                <h1 className="gl-fund-primary-page-title">Technology Access Innovation Fund</h1>
                <p className="gl-fund-sub-caption-description">Support for digital equity initiatives and technology access programs in underserved communities.</p>
            </div>
        </div>
        <button className="gl-fund-btn-add-to-mylist-action">➕ Add to My List</button>
    </header>

    {/* <!-- CONTENT BODY SECTION SPLITTER GRID --> */}
    <main className="gl-fund-two-column-split-grid">
        
        {/* SIDEBAR INFO ZONE (LEFT PANEL) */}
        <aside className="gl-fund-left-sidebar-card">
            {/* Media Canvas Aspect Canvas */}
            <div className="gl-fund-cover-image-canvas" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop')" }}>
                <button className="gl-fund-canvas-heart-toggle-btn" aria-label="Save to list">🤍</button>
            </div>
            
            <div className="gl-fund-sidebar-content-padding">
                {/* Tag Pills Group */}
                <div className="gl-fund-pills-row-flex">
                    <span className="gl-badge-pill-item-tag">Parents</span>
                    <span className="gl-badge-pill-item-tag">Family Engagement</span>
                    <span className="gl-badge-pill-item-tag">Planning</span>
                </div>

                {/* Structured Metadata Cluster */}
                <div className="gl-fund-meta-attributes-stack">
                    <div className="gl-fund-meta-attribute-row"><span>📅</span> <strong>Deadline:</strong> Next 30 days</div>
                    <div className="gl-fund-meta-attribute-row"><span>💲</span> <strong>Award:</strong> $25,000 - $100,000</div>
                </div>

                {/* Secondary Button Trigger */}
                <div className="gl-fund-sidebar-action-footer-row">
                    <button className="gl-fund-btn-hollow-share-trigger">↗ Share</button>
                </div>
            </div>
        </aside>

        {/* DESCRIPTION COMPONENT AREA (RIGHT PANEL) */}
        <article className="gl-fund-description-right-panel">
            <h2 className="gl-fund-section-heading-bold">Details</h2>
            <p className="gl-fund-prose-body-paragraph">The National Grassroots Organizing Program (NGO) supports community-based, constituent-led organizations working to confront social and environmental injustice. Inspired by John Lewis' call to "get in good trouble," the NGO funds organizations whose work centers community organizing principles such as clear decision-making power for directly impacted people, strong issue analysis, and strategies that build broad support and momentum.</p>

            {/* MEDIA VIDEO DECK CONTAINER */}
            <h3 className="gl-fund-video-title-label">Overview Video</h3>
            <div className="gl-fund-native-video-player-frame">
                <video controls poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <h3 className="gl-fund-sub-heading-bold">Details</h3>
            <p className="gl-fund-prose-body-paragraph">Inspired by John Lewis' call to "get in good trouble," the NGO funds organizations whose work centers community organizing principles.</p>

            {/* ATTACHMENTS SYSTEM DOWNLOAD DECK */}
            <div className="gl-fund-attachments-section-wrapper">
                <h4 className="gl-fund-attachments-title-label">Attachments</h4>
                <div className="gl-fund-attachments-flex-row">
                    <a href="#" className="gl-fund-attachment-download-pill" download>
                        <span>📎</span> Security_Assessment_Framework.pdf
                    </a>
                    <a href="#" className="gl-fund-attachment-download-pill" download>
                        <span>📎</span> Implementation_Checklist.pdf
                    </a>
                </div>
            </div>
        </article>
    </main>

    {/* RELATED GRANTS SECTION DECK */}
    <section className="gl-fund-related-bottom-master-section">
        <div className="gl-fund-section-title-strip-row">
            <h2 className="gl-block-section-heading">Related Grants</h2>
            <a href="#" className="gl-section-view-all-anchor">View All ➔</a>
        </div>

        <div className="gl-fund-cards-three-column-grid-matrix">
            {/* GRANTS DYNAMIC CARD 1 */}
            <div className="gl-content-item-card">
                <div className="gl-card-thumbnail-display-wrapper" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop')" }}>
                    <button className="gl-card-heart-save-action-badge" aria-label="Favorite">🤍</button>
                </div>
                <div className="gl-card-body-details-content">
                    <div className="gl-card-pills-horizontal-flex">
                        <span className="gl-badge-pill-tag">Community</span>
                        <span className="gl-badge-pill-tag">Assessment</span>
                        <span className="gl-badge-pill-tag">Planning</span>
                    </div>
                    <p className="gl-card-main-paragraph-description">Step-by-step guide for conducting community needs assessments and collecting stakeholder input.</p>
                    <div className="gl-card-metadata-lines-list">
                        <div className="gl-meta-info-row-item"><span>📅</span> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-info-row-item"><span>💲</span> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-info-row-item"><span>🏢</span> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-info-row-item"><span>🌐</span> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-triggers-flex-footer">
                        <button className="gl-btn-card-primary-view">View Details ➔</button>
                        <button className="gl-btn-card-square-share-trigger" aria-label="Share">↗</button>
                    </div>
                </div>
            </div>

            {/* GRANTS DYNAMIC CARD 2 */}
            <div className="gl-content-item-card">
                <div className="gl-card-thumbnail-display-wrapper" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552581230-c01bc0d48453?q=80&w=600&auto=format&fit=crop')" }}>
                    <button className="gl-card-heart-save-action-badge" aria-label="Favorite">🤍</button>
                </div>
                <div className="gl-card-body-details-content">
                    <div className="gl-card-pills-horizontal-flex">
                        <span className="gl-badge-pill-tag">Community</span>
                        <span className="gl-badge-pill-tag">Assessment</span>
                        <span className="gl-badge-pill-tag">Planning</span>
                    </div>
                    <p className="gl-card-main-paragraph-description">Step-by-step guide for conducting community needs assessments and collecting stakeholder input.</p>
                    <div className="gl-card-metadata-lines-list">
                        <div className="gl-meta-info-row-item"><span>📅</span> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-info-row-item"><span>💲</span> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-info-row-item"><span>🏢</span> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-info-row-item"><span>🌐</span> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-triggers-flex-footer">
                        <button className="gl-btn-card-primary-view">View Details ➔</button>
                        <button className="gl-btn-card-square-share-trigger" aria-label="Share">↗</button>
                    </div>
                </div>
            </div>

            {/* GRANTS DYNAMIC CARD 3 */}
            <div className="gl-content-item-card">
                <div className="gl-card-thumbnail-display-wrapper" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop')" }}>
                    <button className="gl-card-heart-save-action-badge" aria-label="Favorite">🤍</button>
                </div>
                <div className="gl-card-body-details-content">
                    <div className="gl-card-pills-horizontal-flex">
                        <span className="gl-badge-pill-tag">Community</span>
                        <span className="gl-badge-pill-tag">Assessment</span>
                        <span className="gl-badge-pill-tag">Planning</span>
                    </div>
                    <p className="gl-card-main-paragraph-description">Step-by-step guide for conducting community needs assessments and collecting stakeholder input.</p>
                    <div className="gl-card-metadata-lines-list">
                        <div className="gl-meta-info-row-item"><span>📅</span> <strong>Deadline:</strong> Next 30 days</div>
                        <div className="gl-meta-info-row-item"><span>💲</span> <strong>Award:</strong> $10,000 - $50,000</div>
                        <div className="gl-meta-info-row-item"><span>🏢</span> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                        <div className="gl-meta-info-row-item"><span>🌐</span> <strong>Type:</strong> Federal</div>
                    </div>
                    <div className="gl-card-action-triggers-flex-footer">
                        <button className="gl-btn-card-primary-view">View Details ➔</button>
                        <button className="gl-btn-card-square-share-trigger" aria-label="Share">↗</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
        </main>
   </>
  )
}

export default ResourceDetail
