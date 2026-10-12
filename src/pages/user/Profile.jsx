import React from 'react'
import EditProfile from '../../components/user/profile/EditProfile'
import AddQualification from '../../components/user/profile/AddQualification'
import AddNewCertification from '../../components/user/profile/AddNewCertification'
import DeactivateAccount from '../../components/user/profile/DeactivateAccount'
import RemoveCertification from '../../components/user/profile/RemoveCertification'
import RemoveQualification from '../../components/user/profile/RemoveQualification'
import EditCertification from '../../components/user/profile/EditCertification'
import EditQualification from '../../components/user/profile/EditQualification'

const Profile = () => {
  return (
    <>
      <div className="container-fluid p-0">

    <header className="ps-header-container">
    <div className="ps-header-left">
        <a href="User-management.html" className="um-back-btn" aria-label="Go back">
        <img src="/images/user/super-user-dashboard/left-img-user-profile.svg" alt=""/>
</a>
        <div className="ps-text-group">
            <h1 className="ps-main-title">My Profile</h1>
            <p className="ps-sub-title">Manage user profile and permissions</p>
        </div>
    </div>
    <div className="ps-header-right">
        <button className="ps-action-btn spec-blue-btn" data-bs-toggle="modal" data-bs-target="#editUserProfileModal">
            <img src="/images/user/super-user-dashboard/su-mage_edit.svg" alt=""/> Edit User
        </button>
        {/* <!-- <button className="ps-action-btn" data-bs-toggle="modal" data-bs-target="#manageTagsModal">
           <img src="/images/user/super-user-dashboard/su-manage-tags.svg" alt=""> Manage Tags
        </button> --> */}
    </div>
</header>

  <div className="upc-card-container">
    <div className="upc-profile-section">
        <div className="upc-avatar-wrapper">
            <img src="/images/user/super-user-dashboard/su-james-chen.svg" alt="James Chen" className="upc-avatar-img"/>
        </div>
        
        <div className="upc-info-wrapper">
            <div className="upc-name-row">
                <h2 className="upc-user-name">James Chen</h2>
              
                {/* <!-- <span className="upc-badge upc-badge-active">Active</span> --> */}
            </div>
              <p className="ps-sub-title">abc Organization | Org ID- #10001 | Company Code- D05 E5E5</p>
            
            {/* <!-- <div className="upc-role-row">
                <span className="upc-badge upc-badge-blue">User</span>
            </div> --> */}
            
            {/* <!-- <ul className="upc-details-list">
                <li>
                    <img src="/images/user/super-user-dashboard/su-mage_id-card.svg" alt=""> <span>#10001</span>
                </li>
                <li>
                    <img src="/images/user/super-user-dashboard/su-lets-icons_map-light.svg" alt=""> <span>Springfield School District</span>
                </li>
                <li>
                    <div className="upc-inline-details">
                        <span><img src="/images/user/super-user-dashboard/su-mage_building-b.svg" alt=""> educationalsite.org</span>
                        <span><img src="/images/user/super-user-dashboard/su-hugeicons_coupon-percent.svg" alt=""> D05 E5E5</span>
                    </div>
                </li>
            </ul> --> */}

            <div className="upc-tags-container">
                <span className="upc-tag">Technology</span>
                <span className="upc-tag">Digital Equity</span>
                <span className="upc-tag">Innovation</span>
            </div>
        </div>
    </div>

    {/* <!-- <div className="upc-action-section">
        <button className="upc-deactivate-btn">
            <img src="/images/user/super-user-dashboard/su-deactivate.svg" alt=""> Deactivate
        </button>
    </div> --> */}
</div>


       <div className="gl-dashboard-tabs-wrapper">
        <ul className="nav nav-pills gl-custom-nav-pills" id="dashboardMatrixTabs" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tab-personal-trigger" data-bs-toggle="pill" data-bs-target="#pane-personal" type="button" role="tab">Personal</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-interests-trigger" data-bs-toggle="pill" data-bs-target="#pane-interests-tags" type="button" role="tab">Interests & Tags</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-qualifications-trigger" data-bs-toggle="pill" data-bs-target="#pane-qualifications" type="button" role="tab">Professional</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-photos-trigger" data-bs-toggle="pill" data-bs-target="#pane-photos" type="button" role="tab">Documents
</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-service-details-trigger" data-bs-toggle="pill" data-bs-target="#pane-service-details" type="button" role="tab">Security</button>
            </li>
            {/* <!-- <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-activity-trigger" data-bs-toggle="pill" data-bs-target="#pane-activity" type="button" role="tab">Activity</button>
            </li> --> */}
        </ul>

        <div className="tab-content gl-custom-tab-content-wrapper" id="dashboardMatrixTabsContent">
            {/* <!-- OVERVIEW CORE DASHBOARD WRAPPER --> */}
            <div className="tab-pane fade show active" id="pane-personal" role="tabpanel">
                
<div className="gl-profile-form-container">
    
    <div className="gl-form-section-title-row">
        <span className="gl-title-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        </span>
        <h2 className="gl-section-main-heading">Personal Information</h2>
    </div>

    <form className="gl-profile-native-form-element">
        <div className="gl-form-fields-grid-matrix">
            
            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">First Name</label>
                <input type="text" className="gl-form-text-input" placeholder="Emma"/>
            </div>

            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">Last Name</label>
                <input type="text" className="gl-form-text-input" placeholder="Wilson"/>
            </div>

            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">Email</label>
                <input type="email" className="gl-form-text-input" placeholder="emma@gmail.com"/>
            </div>

            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">Phone</label>
                <input type="tel" className="gl-form-text-input" placeholder="+1 (555) 123-4567"/>
            </div>

            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">Date of Birth</label>
                <div className="gl-input-with-end-icon-wrapper">
                    <input type="text" className="gl-form-text-input" placeholder="12-12-2002"/>
                    <span className="gl-field-trailing-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">Gender</label>
                <div className="gl-input-with-end-icon-wrapper">
                    <select className="gl-form-select-native-field">
                        <option value="" disabled selected hidden>Female</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <span className="gl-field-trailing-icon is-pointer-disabled">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">Organization Name</label>
                <input type="text" className="gl-form-text-input" placeholder="abc Organization"/>
            </div>

            <div className="gl-form-input-field-group">
                <label className="gl-field-native-label">Organization Code</label>
                <input type="text" className="gl-form-text-input" placeholder="#10001"/>
            </div>

        </div>

        <div className="gl-form-textarea-field-row">
            <label className="gl-field-native-label">Bio</label>
            <textarea className="gl-form-native-textarea" placeholder="I'm a passionate learner with a strong interest in STEM subjects. Currently focusing on advanced mathematics and physics to prepare for college. I enjoy problem-solving and have participated in several math competitions. Outside of academics, I love coding personal projects and exploring new technologies."></textarea>
        </div>
    </form>

</div>

<div className="gl-address-form-card-container">
    
    <div className="gl-form-section-header-block">
        <span className="gl-header-pin-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        </span>
        <h2 className="gl-section-main-heading">Address</h2>
    </div>

    <form className="gl-address-native-form">
        <div className="gl-address-fields-grid-engine">
            
            <div className="gl-form-field-group is-span-full-width">
                <label className="gl-input-element-label">Street Address</label>
                <input type="text" className="gl-form-native-input" placeholder="123 Education Lane"/>
            </div>

            <div className="gl-form-field-group">
                <label className="gl-input-element-label">City</label>
                <input type="text" className="gl-form-native-input" placeholder="San Francisco"/>
            </div>

            <div className="gl-form-field-group">
                <label className="gl-input-element-label">State/Province</label>
                <input type="text" className="gl-form-native-input" placeholder="California"/>
            </div>

            <div className="gl-form-field-group">
                <label className="gl-input-element-label">Country</label>
                <input type="text" className="gl-form-native-input" placeholder="United States"/>
            </div>

            <div className="gl-form-field-group">
                <label className="gl-input-element-label">ZIP/Postal Code</label>
                <input type="text" className="gl-form-native-input" placeholder="94102"/>
            </div>

        </div>
    </form>

</div>

<div className="gl-social-links-card-container">
    
    <div className="gl-social-section-header-row">
        <span className="gl-header-link-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2.5">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        </span>
        <h2 className="gl-section-main-heading">Social & Portfolio Links</h2>
    </div>

    <form className="gl-social-native-form-element">
        <div className="gl-social-fields-grid-matrix">
            
            <div className="gl-social-input-field-group">
                <label className="gl-social-field-label">Personal Website</label>
                <input type="url" className="gl-social-text-input" placeholder="https://EmmaWilson.edu"/>
            </div>

            <div className="gl-social-input-field-group">
                <label className="gl-social-field-label">LinkedIn</label>
                <input type="url" className="gl-social-text-input" placeholder="https://linkedin.com/in/sarahjohnson"/>
            </div>

            <div className="gl-social-input-field-group">
                <label className="gl-social-field-label">Twitter/X</label>
                <input type="url" className="gl-social-text-input" placeholder="https://twitter.com/sarahteaches"/>
            </div>

            <div className="gl-social-input-field-group">
                <label className="gl-social-field-label">YouTube Channel</label>
                <input type="url" className="gl-social-text-input" placeholder="https://youtube.com/@sarahmathclassName"/>
            </div>

        </div>
    </form>

</div>


            </div>
            
            {/* <!-- Other Tabs Content View Blockholders --> */}
            <div className="tab-pane fade" id="pane-interests-tags" role="tabpanel">
<div className="gl-tags-manager-card-wrapper">
    
    {/* <div className="gl-tags-section-header-row">
        <span className="gl-header-tag-polygon-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
        </span>
        <div className="gl-tags-title-stack">
            <h2 className="gl-section-main-title">Interests & Tags</h2>
            <p className="gl-section-supporting-text">Select tags to personalize your course, event, and resource recommendations</p>
        </div>
    </div> */}

    


     <div className="gl-tags-search-field-container">
        <span className="gl-tags-search-lens-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </span>
        <input type="text" className="gl-tags-native-search-input" placeholder="Search Tags"/>
    </div>

    <div className="gl-tags-grouping-section">
        <h3 className="gl-tags-group-label">Your Selected Tags (4)</h3>
        <div className="gl-tags-flex-container-row">
            
            <div className="gl-tag-chip-item is-active-selected">
                <span>Cybersecurity</span>
                <button type="button" className="gl-tag-remove-trigger">×</button>
            </div>

            <div className="gl-tag-chip-item is-active-selected">
                <span>Technology</span>
                <button type="button" className="gl-tag-remove-trigger">×</button>
            </div>

            <div className="gl-tag-chip-item is-active-selected">
                <span>Career Development</span>
                <button type="button" className="gl-tag-remove-trigger">×</button>
            </div>

        </div>
    </div>

     <div className="gl-tags-grouping-section">
        <h3 className="gl-tags-group-label">Available Tags</h3>
        <div className="gl-tags-flex-container-row">
            <div className="gl-tag-chip-item is-pool-available">Grant Writing</div>
            <div className="gl-tag-chip-item is-pool-available">Data Analytics</div>
            <div className="gl-tag-chip-item is-pool-available">Fiber Optics</div>
            <div className="gl-tag-chip-item is-pool-available">Business</div>
            <div className="gl-tag-chip-item is-pool-available">Marketing</div>
            <div className="gl-tag-chip-item is-pool-available">Leadership</div>
            <div className="gl-tag-chip-item is-pool-available">Youth Program</div>
        </div>
    </div> 

    <div className="gl-tags-action-footer-strip">
        <button type="button" className="gl-btn-tags-update-action">Update Tags</button>
    </div>

</div>
</div>
 <div className="tab-pane fade" id="pane-qualifications" role="tabpanel">
      <div className="gl-dual-panel-modules-wrapper">

    <div className="gl-panel-card-container">
        <div className="gl-panel-header-row">
            <span className="gl-panel-heading-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
            </span>
            <h2 className="gl-panel-main-heading">Educational Qualifications</h2>
        </div>

        <div className="gl-panel-list-stack-items">
            <div className="gl-nested-item-row-card">
                <div className="gl-item-icon-avatar blue-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                    </svg>
                </div>
                <div className="gl-item-details-metadata">
                    <h3 className="gl-item-main-title">M.S. in Computer Science</h3>
                    <p className="gl-item-subtitle-org">Stanford University</p>
                    <p className="gl-item-extra-muted-info">Machine Learning • 2008</p>
                </div>
                <div className="gl-item-actions-cluster">
                    <button className="gl-action-icon-btn edit-btn" aria-label="Edit" data-bs-toggle="modal"
                         data-bs-target="#editQualificationModal"><img src="/images/user/super-user-dashboard/edit-icon-profile.svg" alt=""/></button>
                    <button className="gl-action-icon-btn delete-btn"  data-bs-toggle="modal"
                      data-bs-target="#removeQualificationModal" aria-label="Delete">×</button>
                </div>
            </div>

            <div className="gl-nested-item-row-card">
                <div className="gl-item-icon-avatar blue-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                    </svg>
                </div>
                <div className="gl-item-details-metadata">
                    <h3 className="gl-item-main-title">B.S. in Mathematics</h3>
                    <p className="gl-item-subtitle-org">UC Berkeley</p>
                    <p className="gl-item-extra-muted-info">Pure Mathematics • 2006</p>
                </div>
                <div className="gl-item-actions-cluster">
                    <button className="gl-action-icon-btn edit-btn" aria-label="Edit" data-bs-toggle="modal"
                                                        data-bs-target="#editQualificationModal"   ><img src="/images/user/super-user-dashboard/edit-icon-profile.svg" alt=""/></button>
                    <button className="gl-action-icon-btn delete-btn" data-bs-toggle="modal"
                                                        data-bs-target="#removeQualificationModal" aria-label="Delete">×</button>
                </div>
            </div>
        </div>

        {/* <!-- <button className="gl-panel-add-action-btn">+ Add Qualification</button> --> */}
        <button  className="gl-panel-add-action-btn" data-bs-toggle="modal" data-bs-target="#QualificationModal">Add New Qualification</button>
    </div>

    <div className="gl-panel-card-container">
        <div className="gl-panel-header-row">
            <span className="gl-panel-heading-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
            </span>
            <h2 className="gl-panel-main-heading">Certifications</h2>
        </div>

        <div className="gl-panel-list-stack-items">
            <div className="gl-nested-item-row-card">
                <div className="gl-item-icon-avatar blue-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.47 14L19 21l-7-2-7 2 3.53-7"></path>
                    </svg>
                </div>
                <div className="gl-item-details-metadata">
                    <h3 className="gl-item-main-title">Certified Online User</h3>
                    <p className="gl-item-subtitle-org">Online Learning Consortium</p>
                    <p className="gl-item-inline-credential">Credential ID: OLC-2022-4567</p>
                    <div className="gl-item-timeline-split">
                        <span>Issued: 03-09-2018</span>
                        <span>Expires: 03-09-2026</span>
                    </div>
                </div>
                <div className="gl-item-actions-cluster">
                    <button className="gl-action-icon-btn edit-btn" data-bs-toggle="modal"
                                                        data-bs-target="#editCertificationModal" aria-label="Edit"><img src="/images/user/super-user-dashboard/edit-icon-profile.svg" alt=""/></button>
                    <button className="gl-action-icon-btn delete-btn" data-bs-toggle="modal"
                                                        data-bs-target="#removeCertificationModal" aria-label="Delete">×</button>
                </div>
            </div>

            <div className="gl-nested-item-row-card">
                <div className="gl-item-icon-avatar blue-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.47 14L19 21l-7-2-7 2 3.53-7"></path>
                    </svg>
                </div>
                <div className="gl-item-details-metadata">
                    <h3 className="gl-item-main-title">Google Certified Educator Level 2</h3>
                    <p className="gl-item-subtitle-org">Google</p>
                    <p className="gl-item-inline-credential">Credential ID: GCE2-2021-12345</p>
                    <div className="gl-item-timeline-split">
                        <span>Issued: 03-09-2018</span>
                        <span>Expires: 03-09-2026</span>
                    </div>
                </div>
                <div className="gl-item-actions-cluster">
                    <button className="gl-action-icon-btn edit-btn" data-bs-toggle="modal"
                                                        data-bs-target="#editCertificationModal" aria-label="Edit"><img src="/images/user/super-user-dashboard/edit-icon-profile.svg" alt=""/></button>
                    <button className="gl-action-icon-btn delete-btn" data-bs-toggle="modal"
                                                        data-bs-target="#removeCertificationModal"  aria-label="Delete">×</button>
                </div>
            </div>
        </div>

        {/* <!-- <button data-bs-toggle="modal" data-bs-target="#addCertificationModal" className="gl-panel-add-action-btn">+ Add Certification</button> --> */}
          <a href="#addCertificationModal" className="gl-panel-add-action-btn">Add New Certification</a>
    </div>

</div>
            </div>
            <div className="tab-pane fade" id="pane-photos" role="tabpanel">
                <div className="pv-section-container">

               <div className="mp-document-upload-section">
    <div className="mp-upload-header d-flex align-items-center mb-3">
        <div className="mp-title-icon me-2" style={{ marginRight: "8px", display: "inline-flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        </div>
        <h3 className="mp-upload-main-title h5 font-weight-bold mb-0 text-dark" style={{ fontSize: "18px" }}>Documents</h3>
    </div>

    <div className="mp-upload-dropzone-box" onclick="document.getElementById('mpProfileFileInput').click()">
        <input type="file" id="mpProfileFileInput" className="d-none" accept=".pdf,.png,.jpg,.jpeg"/>
        
        <div className="mp-upload-content-wrapper text-center">
            <div className="mp-cloud-upload-icon mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 16 12 12 8 16"></polyline>
                    <line x1="12" y1="12" x2="12" y2="21"></line>
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                    <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
            </div>
            
            <p className="mp-upload-click-text mb-1 text-secondary" style={{ fontSize: "14px" }}>
                Drag and drop files here, or <span className="text-primary" style={{ color: "#006699", cursor: "pointer" }}>click to browse</span>
            </p>
            <p className="mp-upload-supported-formats-label text-muted mb-0" style={{ fontSize: "12px", color: "#a0aec0" }}>
                Supported: PDF, PNG, JPG
            </p>
        </div>
    </div>
</div>     
        <div className="pv-section-header">
            <img src="/images/user/super-user-dashboard/photos-videos.svg" alt=""/>
            <h3>Photos & Videos</h3>
        </div>

        <div className="pv-sub-block">
            <h4 className="pv-sub-title">Photos</h4>
            <div className="pv-flex-row">
                <div className="pv-media-item pv-photo-item">
                    <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300" alt="Notebook and pencil"/>
                </div>
                <div className="pv-media-item pv-photo-item">
                    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300" alt="Writing close up"/>
                </div>
                <div className="pv-media-item pv-photo-item">
                    <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=300" alt="Sticky notes wall"/>
                </div>
                <div className="pv-media-item pv-photo-item">
                    <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300" alt="Checklist hand writing"/>
                </div>
                <div className="pv-media-item pv-photo-item">
                    <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=300" alt="Open blank book"/>
                </div>
            </div>
        </div>

        <div className="pv-sub-block">
            <h4 className="pv-sub-title">Videos</h4>
            <div className="pv-flex-row">
                <div className="pv-media-item pv-video-item">
                    <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400" alt="Video thumbnail"/>
                    <div className="pv-play-overlay">
                        <img src="/images/user/super-user-dashboard/su-play-icon.svg" alt=""/>
                    </div>
                </div>
                <div className="pv-media-item pv-video-item">
                    <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400" alt="Video thumbnail"/>
                    <div className="pv-play-overlay">
                        <img src="/images/user/super-user-dashboard/su-play-icon.svg" alt=""/>
                    </div>
                </div>
                <div className="pv-media-item pv-video-item">
                    <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400" alt="Video thumbnail"/>
                    <div className="pv-play-overlay">
                        <img src="/images/user/super-user-dashboard/su-play-icon.svg" alt=""/>
                    </div>
                </div>
                <div className="pv-media-item pv-video-item">
                    <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400" alt="Video thumbnail"/>
                    <div className="pv-play-overlay">
                        <img src="/images/user/super-user-dashboard/su-play-icon.svg" alt=""/>
                    </div>
                </div>
                <div className="pv-media-item pv-video-item">
                    <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400" alt="Video thumbnail"/>
                    <div className="pv-play-overlay">
                        <img src="/images/user/super-user-dashboard/su-play-icon.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    </div>
            </div>
            <div className="tab-pane fade" id="pane-service-details" role="tabpanel">
             <div className="gl-security-settings-master-container">

    <div className="gl-security-dashboard-header">
        <span className="gl-security-lock-vector">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        </span>
        <h2 className="gl-main-section-heading">Security Settings</h2>
    </div>

    <div className="gl-security-subcard-wrapper">
        <div className="gl-accordion-header-trigger-row">
            <div className="gl-text-content-stack">
                <h3 className="gl-subcard-bold-title">Change Password</h3>
                <p className="gl-subcard-description-text">Update your password to keep your account secure.</p>
            </div>
            <span className="gl-accordion-caret-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006699" stroke-width="3">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </span>
        </div>

        <form className="gl-password-change-native-form">
            <div className="gl-security-input-field-block">
                <label className="gl-native-field-label">Current Password</label>
                <div className="gl-input-with-icon-left-wrapper">
                    <span className="gl-field-leading-icon">🔒</span>
                    <input type="password" className="gl-security-native-input" placeholder="••••••••••••"/>
                </div>
            </div>

            <div className="gl-security-input-field-block">
                <label className="gl-native-field-label">New Password</label>
                <div className="gl-input-with-icon-left-wrapper">
                    <span className="gl-field-leading-icon">🔒</span>
                    <input type="password" className="gl-security-native-input" placeholder="••••••••••••"/>
                </div>
            </div>

            <div className="gl-security-input-field-block">
                <label className="gl-native-field-label">Confirm New Password</label>
                <div className="gl-input-with-icon-left-wrapper">
                    <span className="gl-field-leading-icon">🔒</span>
                    <input type="password" className="gl-security-native-input" placeholder="••••••••••••"/>
                </div>
            </div>

            <div className="gl-form-action-btn-row">
                <button type="submit" className="gl-btn-security-primary-action">Update Password</button>
            </div>
        </form>
    </div>

    <div className="gl-security-subcard-wrapper is-danger-zone-layout">
        <div className="gl-text-content-stack">
            <h3 className="gl-subcard-bold-title">Deactivate Account</h3>
            <p className="gl-subcard-description-text">Deactivating your account will permanently remove your data. You'll need to sign up again if you want to return.</p>
        </div>
        <div className="gl-danger-action-button-wrapper">
            {/* <!-- <button type="button" className="gl-btn-security-danger-action">Deactivate Account</button> --> */}
             <a href="#deactivateAccountModal" className="gl-btn-security-danger-action">Deactivate Account</a>
        </div>
    </div>

</div>





            </div>
            {/* <!-- <div className="tab-pane fade" id="pane-activity" role="tabpanel">
             <div className="act-section-container">
        <div className="act-section-header">
            <img src="/images/user/super-user-dashboard/su-ion_time-outline.svg" alt="">
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
            </div> --> */}
         
            </div>
           
        </div>


      </div>
      <RemoveCertification/>
      <RemoveQualification/>
      <EditCertification/>
      <EditQualification/>
      <EditProfile/>
      <AddQualification/>
      <AddNewCertification/>
      <DeactivateAccount/>
    </>
  )
}

export default Profile
