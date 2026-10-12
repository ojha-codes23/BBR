import React from 'react'

const Community = () => {
    return (
        <main class="gl-content-body">
            <div class="content-scaffold">

                {/* <!-- Hero Header Rows Title Area Info element --> */}
                <div class="dashboard-hero-row">
                    <div>
                        <h1>Community Spaces</h1>
                        <p>Join spaces, host live lectures, mentor groups, and participate in discussions</p>
                    </div>
                    <button class="btn-create-space">
                        <i class="bi bi-plus-lg"></i> Create Space
                    </button>
                </div>

                {/* <!-- Toolbar Filters elements configuration Layout row --> */}
                <div class="filters-toolbar-row">
                    <div class="pill-tabs-container">
                        <button class="pill-tab-btn active-tab">Community Spaces</button>
                        <button class="pill-tab-btn blue-filled-tab">Moderation</button>
                    </div>
                    <div class="header-filters-row">
                        <div class="search-box-frame">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <select class="dropdown-filter-select form-select" style={{ width: "140px" }}>
                            <option>Category (All)</option>
                        </select>
                    </div>

                </div>

                {/* <!-- Space Card Item Box 1 (Cybersecurity Professionals with Flagged meta block) --> */}
                <div class="community-space-card">
                    <div class="card-thumbnail-container">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop"
                            alt="Cybersecurity Professionals" />
                    </div>
                    <div class="card-details-panel">
                        <div class="card-header-block">
                            <h2>Cybersecurity Professionals</h2>
                            <p>Discuss security trends, best practices & career opportunities.</p>

                            <div class="meta-stats-row">
                                <div class="stat-item-info">
                                    <i class="bi bi-people"></i> 342 Members
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item-info">
                                    <i class="bi bi-file-text"></i> 1247 Posts
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item-info">
                                    <i class="bi bi-person-gear"></i> 3 Moderators
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item-info flagged-status">
                                    <i class="bi bi-flag-fill"></i> 2 Flagged
                                </div>
                            </div>

                            <div class="tags-container-block">
                                <span class="space-tag-badge">Cybersecurity</span>
                                <span class="space-tag-badge">Security</span>
                                <span class="space-tag-badge">Technology</span>
                            </div>
                        </div>

                        <div class="live-session-panel">
                            <div class="session-info-left">
                                <div class="host-profile-box">
                                    <i class="bi bi-person"></i> Sarah Johnson
                                </div>
                            </div>
                            <a href="#" class="btn-view-space">Enter Space <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Space Card Item Box 2 (Youth Programs Network) --> */}
                <div class="community-space-card">
                    <div class="card-thumbnail-container">
                        <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&auto=format&fit=crop"
                            alt="Youth Programs Network" />
                    </div>
                    <div class="card-details-panel">
                        <div class="card-header-block">
                            <h2>Youth Programs Network</h2>
                            <p>Connect with educators and youth program coordinators.</p>

                            <div class="meta-stats-row">
                                <div class="stat-item-info">
                                    <i class="bi bi-people"></i> 342 Members
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item-info">
                                    <i class="bi bi-file-text"></i> 1247 Posts
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item-info">
                                    <i class="bi bi-person-gear"></i> 1 Moderators
                                </div>
                            </div>

                            <div class="tags-container-block">
                                <span class="space-tag-badge">Education</span>
                                <span class="space-tag-badge">Youth</span>
                                <span class="space-tag-badge">Programs</span>
                            </div>
                        </div>

                        <div class="live-session-panel">
                            <div class="session-info-left">
                                <div class="host-profile-box">
                                    <i class="bi bi-person"></i> Robert Kim
                                </div>
                            </div>
                            <a href="#" class="btn-view-space">Enter Space <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Space Card Item Box 3 (Cybersecurity Professionals Loop style element) --> */}
                <div class="community-space-card">
                    <div class="card-thumbnail-container">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
                            alt="Cybersecurity Professionals Alternative Image Grid" />
                    </div>
                    <div class="card-details-panel">
                        <div class="card-header-block">
                            <h2>Cybersecurity Professionals</h2>
                            <p>Discuss security trends, best practices & career opportunities.</p>

                            <div class="meta-stats-row">
                                <div class="stat-item-info">
                                    <i class="bi bi-people"></i> 342 Members
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item-info">
                                    <i class="bi bi-file-text"></i> 1247 Posts
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item-info">
                                    <i class="bi bi-person-gear"></i> 1 Moderators
                                </div>
                            </div>

                            <div class="tags-container-block">
                                <span class="space-tag-badge">Cybersecurity</span>
                                <span class="space-tag-badge">Security</span>
                                <span class="space-tag-badge">Technology</span>
                            </div>
                        </div>

                        <div class="live-session-panel">
                            <div class="session-info-left">
                                <div class="host-profile-box">
                                    <i class="bi bi-person"></i> Sarah Johnson
                                </div>
                            </div>
                            <a href="#" class="btn-view-space">Enter Space <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Community