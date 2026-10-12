import React from 'react'

const ListDetail = () => {
  return (
    <>
        <main className="glnc-canvas-container">

        <div className="gl-toolkit-master-wrapper-view">

    <header className="gl-toolkit-top-navigation-strip">
        <div className="gl-toolkit-branding-left-stack">
            <a href="#" type="button" className="gl-back-round-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </a>
            <div className="gl-toolkit-headline-group">
                <h1 className="gl-toolkit-primary-title">Parent Engagement Toolkit (Multilingual)</h1>
                <p className="gl-toolkit-sub-subtitle">Discover funding opportunities, professional certifications, and helpful resources for your educational journey</p>
            </div>
        </div>
        <button className="gl-fund-btn-add-to-mylist-action"><img src="images/super-user-dashboard/si_add-duotone (1).svg" alt=""/> Add to List</button>
        <button className="gl-toolkit-btn-danger-remove-list"><img src="images/super-user-dashboard/loss-icon.svg" alt=""/> Remove from list</button>
    </header>

    <main className="gl-toolkit-two-column-split-grid">
        
        <aside className="gl-toolkit-sidebar-left-card">
            <div className="gl-toolkit-preview-canvas" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=600&auto=format&fit=crop')" }}>
                <button className="gl-toolkit-canvas-heart-action" aria-label="Favorite">❤️</button>
            </div>
            
            <div className="gl-toolkit-sidebar-body-padding">
                <div className="gl-toolkit-pills-row-flex">
                    <span className="gl-badge-pill-item-tag">Parents</span>
                    <span className="gl-badge-pill-item-tag">Family Engagement</span>
                    <span className="gl-badge-pill-item-tag">Planning</span>
                </div>

                <div className="gl-toolkit-meta-attributes-stack">
                    <div className="gl-toolkit-meta-attribute-row"><span>📅</span> <strong>Deadline:</strong> Next 30 days</div>
                    <div className="gl-toolkit-meta-attribute-row"><span>💲</span> <strong>Award:</strong> $25,000 - $100,000</div>
                    <div className="gl-toolkit-meta-attribute-row"><span>🏢</span> <strong>Eligibility:</strong> Nonprofits, Forprofits</div>
                    <div className="gl-toolkit-meta-attribute-row"><span>🌐</span> <strong>Type:</strong> Federal</div>
                </div>

                <div className="gl-toolkit-cta-buttons-vertical-stack">
                    <button className="gl-toolkit-btn-cta-secondary-hollow">Join Contest ➔</button>
                    <div className="gl-toolkit-cta-horizontal-split-row">
                        <button className="gl-toolkit-btn-cta-primary-solid">Request Support ➔</button>
                        <button className="gl-toolkit-btn-cta-square-icon-only" aria-label="Share"><img src="images/super-user-dashboard/mdi_share.svg" alt=""/>Share</button>
                    </div>
                </div>
            </div>
        </aside>

        <article className="gl-toolkit-description-right-panel">
            <h2 className="gl-toolkit-section-heading-bold">Details</h2>
            <p className="gl-toolkit-prose-body-paragraph">The National Grassroots Organizing Program (NGO) supports community-based, constituent-led organizations working to confront social and environmental injustice. Inspired by John Lewis' call to "get in good trouble," the NGO funds organizations whose work centers community organizing principles such as clear decision-making power for directly impacted people, strong issue analysis, and strategies that build broad support and momentum.</p>

            <h3 className="gl-toolkit-sub-heading-bold">Additional Eligibility Details:</h3>
            <p className="gl-toolkit-prose-body-paragraph">U.S.-based, constituent-led grassroots nonprofits or fiscally sponsored forprofits with annual budgets under $350,000. Organizations must demonstrate community organizing practices. See website for areas not funded</p>

            <div className="gl-toolkit-hyperlink-row-block">
                <strong>View Opportunity:</strong> <a href="https://www.funderwebsite.com" target="_blank" className="gl-toolkit-native-anchor">www.funderwebsite.com</a>
            </div>

            <div className="gl-toolkit-keywords-tag-cloud-section">
                <h4 className="gl-toolkit-keywords-title-label">Keywords:</h4>
                <div className="gl-toolkit-keywords-flex-pills-row">
                    <span className="gl-keyword-pale-pill">Cybersecurity</span>
                    <span className="gl-keyword-pale-pill">Technology</span>
                    <span className="gl-keyword-pale-pill">Career Development</span>
                </div>
            </div>
        </article>
    </main>

    <section className="gl-toolkit-related-bottom-master-section">
        <div className="gl-toolkit-section-title-strip-row">
            <h2 className="gl-block-section-heading">Related Resources</h2>
            <a href="#" className="gl-section-view-all-anchor">View All ➔</a>
        </div>

        <div className="gl-toolkit-cards-three-column-grid-matrix">
            <div className="gl-content-item-card">
                <div className="gl-card-thumbnail-display-wrapper" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop')" }}>
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
                        <button className="gl-btn-card-square-share-trigger" aria-label="Share"><img src="images/super-user-dashboard/mdi_share.svg" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="gl-content-item-card">
                <div className="gl-card-thumbnail-display-wrapper" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto=format&fit=crop')" }}>
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
                        <button className="gl-btn-card-square-share-trigger" aria-label="Share"><img src="images/super-user-dashboard/mdi_share.svg" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="gl-content-item-card">
                <div className="gl-card-thumbnail-display-wrapper" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop')" }}>
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
                        <button className="gl-btn-card-square-share-trigger" aria-label="Share"><img src="images/super-user-dashboard/mdi_share.svg" alt=""/></button>
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

export default ListDetail
