import React, {useState} from 'react';
import AddQualification from '../../components/teacher/AddQualification';
import removeQualification from '../../components/teacher/removeQualification';
import AddCertificate from '../../components/teacher/AddCertificate';
import removeertificate from '../../components/teacher/removeertificate';

const MyProfile = () => {
    return (
        <main className="content-body">

            {/* <!-- Page Identity Header Controls --> */}
            <div className="page-header-row">
                <div>
                    <h1 className="page-title">My Profile</h1>
                    <p className="page-subtitle">Manage your professional profile and preferences</p>
                </div>
                <button className="btn-edit-profile">
                    <i className="fa-regular fa-pen-to-square"></i> Edit Profile
                </button>
            </div>



            {/* <!-- Profile Summary Card Section Banner --> */}
            <header className="instructor-header-banner-card">
                <div className="avatar-circle-frame">
                    {/* <!-- Simulated accurate persona image place node --> */}
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                        alt="Sarah Johnson" />
                </div>
                <div className="instructor-meta-details-box">
                    <div className="name-rating-row">
                        <h2>Sarah Johnson</h2>
                        <div className="rating-metrics-tag">
                            <i className="fa-solid fa-star"></i> 4.8 <span>(156 reviews)</span>
                        </div>
                    </div>
                    <div className="sub-subtitle-code-line">
                        Senior Mathematics Instructor <span>|</span> Stanford University • Mathematics
                        <span>|</span>
                        Company Code- D05 E5E5
                    </div>
                    <div className="skills-badges-wrapper-flex">
                        <span className="skill-node-pill">Calculus</span>
                        <span className="skill-node-pill">Linear Algebra</span>
                        <span className="skill-node-pill">Statistics</span>
                        <span className="skill-node-pill">Python Programming</span>
                    </div>
                </div>
            </header>



            {/* <!-- Profile Field Inputs Section Container --> */}
            <div className="gl-dashboard-tabs-wrapper">
                <ul className="nav nav-pills gl-custom-nav-pills" id="dashboardMatrixTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="tab-personal-trigger" data-bs-toggle="pill"
                            data-bs-target="#pane-personal" type="button" role="tab">Personal</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab-professional-trigger" data-bs-toggle="pill"
                            data-bs-target="#pane-professional-tags" type="button" role="tab">Professional</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab-bankdetails-trigger" data-bs-toggle="pill"
                            data-bs-target="#pane-bankdetails-tags" type="button" role="tab">Bank Details</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab-expertise-trigger" data-bs-toggle="pill"
                            data-bs-target="#pane-expertise-tags" type="button" role="tab">Expertise</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab-intereststags-trigger" data-bs-toggle="pill"
                            data-bs-target="#pane-intereststags-tags" type="button" role="tab">Interests &
                            Tags</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab-interests-trigger" data-bs-toggle="pill"
                            data-bs-target="#pane-interests-tags" type="button" role="tab">Documents</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab-availability-trigger" data-bs-toggle="pill"
                            data-bs-target="#pane-availability-tags" type="button" role="tab">Availability</button>
                    </li>



                </ul>

                <div className="tab-content gl-custom-tab-content-wrapper" id="dashboardMatrixTabsContent">
                    {/* <!-- OVERVIEW CORE DASHBOARD WRAPPER --> */}
                    <div className="tab-pane fade show active" id="pane-personal" role="tabpanel">
                        {/* <!-- SECTION 1: Personal Information Form Block --> */}
                        <section className="profile-section-block-card">
                            <div className="section-headline-header">
                                <i className="fa-regular fa-user"></i> Personal Information
                            </div>

                            <form>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">First Name</label>
                                        <input type="text" className="form-control-custom-input" placeholder="Sarah" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Last Name</label>
                                        <input type="text" className="form-control-custom-input" placeholder="Johnson" />
                                    </div>
                                </div>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Email</label>
                                        <input type="email" className="form-control-custom-input"
                                            placeholder="12-12-2025" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Phone</label>
                                        <input type="text" className="form-control-custom-input"
                                            placeholder="+1 (555) 123-4567" />
                                    </div>
                                </div>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Date of Birth</label>
                                        <div className="date-input-icon-wrapper">
                                            <input type="text" className="form-control-custom-input"
                                                placeholder="12-12-2025" />
                                            <i className="fa-regular fa-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Gender</label>
                                        <div className="select-input-chevron-wrapper">
                                            <select className="form-control-custom-input">
                                                <option value="" disabled selected hidden>Female</option>
                                                <option value="female">Female</option>
                                                <option value="male">Male</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <i className="fa-solid fa-caret-down"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <label className="form-label-custom">Bio</label>
                                        <textarea className="form-control-custom-input textarea-bio-custom"
                                            placeholder="Passionate educator with over 10 years of experience in mathematics and computer science. I believe in making complex concepts simple and engaging for Users of Level (All)."></textarea>
                                    </div>
                                </div>
                            </form>
                        </section>

                        {/* <!-- SECTION 2: Address Specification Block --> */}
                        <section className="profile-section-block-card">
                            <div className="section-headline-header">
                                <i className="fa-solid fa-location-dot"></i> Address
                            </div>

                            <form>
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <label className="form-label-custom">Street Address</label>
                                        <input type="text" className="form-control-custom-input"
                                            placeholder="123 Education Lane" />
                                    </div>
                                </div>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">City</label>
                                        <input type="text" className="form-control-custom-input"
                                            placeholder="San Francisco" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">State/Province</label>
                                        <input type="text" className="form-control-custom-input"
                                            placeholder="California" />
                                    </div>
                                </div>

                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Country</label>
                                        <input type="text" className="form-control-custom-input"
                                            placeholder="United States" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">ZIP/Postal Code</label>
                                        <input type="text" className="form-control-custom-input" placeholder="94102" />
                                    </div>
                                </div>
                            </form>
                        </section>

                        {/* <!-- SECTION 3: Social & Portfolio Links Block --> */}
                        <section className="profile-section-block-card">
                            <div className="section-headline-header">
                                <i className="fa-solid fa-link"></i> Social & Portfolio Links
                            </div>

                            <form>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Personal Website</label>
                                        <input type="url" className="form-control-custom-input"
                                            placeholder="https://sarahjohnson.edu" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">LinkedIn</label>
                                        <input type="url" className="form-control-custom-input"
                                            placeholder="https://linkedin.com/in/sarahjohnson" />
                                    </div>
                                </div>

                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Twitter/X</label>
                                        <input type="url" className="form-control-custom-input"
                                            placeholder="https://twitter.com/sarahteaches" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">YouTube Channel</label>
                                        <input type="url" className="form-control-custom-input"
                                            placeholder="https://youtube.com/@sarahmathclass" />
                                    </div>
                                </div>
                            </form>
                        </section>

                    </div>

                    <div className="tab-pane fade" id="pane-professional-tags" role="tabpanel">
                        <div className="professional-profile-container">

                            <section className="professional-section-card">
                                <div className="card-headline-title">
                                    <i className="fa-solid fa-briefcase"></i> Employment Details
                                </div>

                                <form>
                                    <div className="row g-4 mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label-header">Job Title</label>
                                            <input type="text" className="form-control-custom-field"
                                                value="Senior Mathematics Instructor" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-header">Institution</label>
                                            <input type="text" className="form-control-custom-field"
                                                value="Stanford University" />
                                        </div>
                                    </div>

                                    <div className="row g-4 mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label-header">Department</label>
                                            <input type="text" className="form-control-custom-field"
                                                value="Mathematics" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-header">Employee ID</label>
                                            <input type="text" className="form-control-custom-field"
                                                value="TH-2024-001" />
                                        </div>
                                    </div>

                                    <div className="row g-4 mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label-header">Years of Experience</label>
                                            <input type="text" className="form-control-custom-field" value="10" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-header">Teaching Level</label>
                                            <div className="select-field-chevron-position">
                                                <select className="form-control-custom-field">
                                                    <option value="university" selected>University</option>
                                                    <option value="highschool">High School</option>
                                                    <option value="primary">Primary</option>
                                                </select>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label-header">Employment Type</label>
                                            <input type="text" className="form-control-custom-field" value="Full-time" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-header">Start Date</label>
                                            <input type="text" className="form-control-custom-field" value="01-08-2024" />
                                        </div>
                                    </div>
                                </form>
                            </section>

                            <div className="row g-4">

                                <div className="col-lg-6">
                                    <div className="professional-section-card">
                                        <div className="card-headline-title">
                                            <i className="fa-solid fa-graduation-cap"></i> Educational Qualifications
                                        </div>

                                        <div className="record-entry-strip-node">
                                            <div className="record-content-flex-left">
                                                <div className="record-avatar-blue-box"><i
                                                    className="fa-solid fa-graduation-cap"></i></div>
                                                <div className="record-meta-texts">
                                                    <h3>Ph.D. in Mathematics</h3>
                                                    <div className="institution-label">MIT</div>
                                                    <p className="extra-details-timeline">Applied Mathematics • 2012</p>
                                                </div>
                                            </div>
                                            <div className="record-action-triggers-group">
                                                <button className="btn-trigger-action-edit"><i
                                                    className="fa-regular fa-pen-to-square"></i></button>
                                                <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                                                    data-bs-target="#removeQualificationModal"><i
                                                        className="fa-solid fa-xmark"></i></button>
                                            </div>
                                        </div>

                                        <div className="record-entry-strip-node">
                                            <div className="record-content-flex-left">
                                                <div className="record-avatar-blue-box"><i
                                                    className="fa-solid fa-graduation-cap"></i></div>
                                                <div className="record-meta-texts">
                                                    <h3>M.S. in Computer Science</h3>
                                                    <div className="institution-label">Stanford University</div>
                                                    <p className="extra-details-timeline">Machine Learning • 2008</p>
                                                </div>
                                            </div>
                                            <div className="record-action-triggers-group">
                                                <button className="btn-trigger-action-edit"><i
                                                    className="fa-regular fa-pen-to-square"></i></button>
                                                <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                                                    data-bs-target="#removeQualificationModal"><i
                                                        className="fa-solid fa-xmark"></i></button>
                                            </div>
                                        </div>

                                        <button className="btn-append-record-block" data-bs-toggle="modal"
                                            data-bs-target="#addQualificationModal">
                                            <i className="fa-solid fa-plus"></i> Add Qualification
                                        </button>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="professional-section-card">
                                        <div className="card-headline-title">
                                            <i className="fa-solid fa-award"></i> Certifications & Licenses
                                        </div>

                                        <div className="record-entry-strip-node flex-column align-items-stretch">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="record-content-flex-left align-items-start">
                                                    <div className="record-avatar-blue-box"><i
                                                        className="fa-solid fa-medal"></i></div>
                                                    <div className="record-meta-texts">
                                                        <h3>Certified Online Instructor</h3>
                                                        <div className="institution-label">Online Learning Consortium
                                                        </div>
                                                        <p className="extra-details-timeline">Credential ID:
                                                            OLC-2022-4567</p>
                                                    </div>
                                                </div>
                                                <div className="record-action-triggers-group">
                                                    <button className="btn-trigger-action-edit"><i
                                                        className="fa-regular fa-pen-to-square"></i></button>
                                                    <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                                                        data-bs-target="#removeCertificationModal"><i
                                                            className="fa-solid fa-xmark"></i></button>
                                                </div>
                                            </div>
                                            <div className="cert-extended-meta-grid ps-5">
                                                <div>Issued: 03-09-2018</div>
                                                <div>Expires: 03-09-2026</div>
                                            </div>
                                        </div>

                                        <div className="record-entry-strip-node flex-column align-items-stretch">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="record-content-flex-left align-items-start">
                                                    <div className="record-avatar-blue-box"><i
                                                        className="fa-solid fa-medal"></i></div>
                                                    <div className="record-meta-texts">
                                                        <h3>Google Certified Educator Level 2</h3>
                                                        <div className="institution-label">Google</div>
                                                        <p className="extra-details-timeline">Credential ID:
                                                            GCE2-2021-12345</p>
                                                    </div>
                                                </div>
                                                <div className="record-action-triggers-group">
                                                    <button className="btn-trigger-action-edit"><i
                                                        className="fa-regular fa-pen-to-square"></i></button>
                                                    <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                                                        data-bs-target="#removeCertificationModal"><i
                                                            className="fa-solid fa-xmark"></i></button>
                                                </div>
                                            </div>
                                            <div className="cert-extended-meta-grid ps-5">
                                                <div>Issued: 03-09-2018</div>
                                                <div>Expires: 03-09-2026</div>
                                            </div>
                                        </div>

                                        <button className="btn-append-record-block" data-bs-toggle="modal"
                                            data-bs-target="#addCertificationModal">
                                            <i className="fa-solid fa-plus"></i> Add Certification
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pane-bankdetails-tags" role="tabpanel">
                        <div className="bank-details-wrapper-container">

                            {/* <!-- Main Entry Panel Container Map Verbatim to Bank-Details.png --> */}
                            <main className="bank-details-master-card">

                                <div className="bank-card-header-title">
                                    <i className="fa-solid fa-building-columns"></i> Add Bank
                                </div>

                                <form>
                                    {/* <!-- Row 1: Name Information --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">First Name</label>
                                            <input type="text" className="custom-form-input-node" value="John" />
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Last Name</label>
                                            <input type="text" className="custom-form-input-node" value="Doe" />
                                        </div>
                                    </div>

                                    {/* <!-- Row 2: Contact Specifications --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Email</label>
                                            <input type="email" className="custom-form-input-node"
                                                value="john.doe@example.com" />
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Phone</label>
                                            <input type="text" className="custom-form-input-node"
                                                value="+1 (555) 123-4567" />
                                        </div>
                                    </div>

                                    {/* <!-- Row 3: DOB & ID Configurations --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Date of Birth</label>
                                            <div className="input-relative-glyph-wrapper">
                                                <input type="text" className="custom-form-input-node"
                                                    value="12-12-2025" />
                                                <i className="fa-regular fa-calendar-days"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">ID Type</label>
                                            <div className="select-chevron-relative-wrapper">
                                                <select className="custom-form-input-node">
                                                    <option selected>Passport</option>
                                                    <option>Driver's License</option>
                                                    <option>National ID</option>
                                                </select>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Row 4: Personal Identifiers --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Personal Identification Number</label>
                                            <input type="text" className="custom-form-input-node" value="A123456789" />
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">SSN (Last 4 Number)</label>
                                            <input type="text" className="custom-form-input-node" value="4587" />
                                        </div>
                                    </div>

                                    {/* <!-- Row 5: Address Core & Country Selection --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Address</label>
                                            <input type="text" className="custom-form-input-node"
                                                value="245 Green Valley Street" />
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Country</label>
                                            <div className="select-chevron-relative-wrapper">
                                                <select className="custom-form-input-node">
                                                    <option selected>United States</option>
                                                    <option>Canada</option>
                                                    <option>United Kingdom</option>
                                                </select>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Row 6: State & City Select Grid --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">State</label>
                                            <div className="select-chevron-relative-wrapper">
                                                <select className="custom-form-input-node">
                                                    <option selected>California</option>
                                                    <option>New York</option>
                                                    <option>Texas</option>
                                                </select>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">City</label>
                                            <div className="select-chevron-relative-wrapper">
                                                <select className="custom-form-input-node">
                                                    <option selected>Los Angeles</option>
                                                    <option>San Francisco</option>
                                                    <option>San Diego</option>
                                                </select>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Row 7: Postal & Bank Name Inputs --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Postal Code</label>
                                            <input type="text" className="custom-form-input-node" value="90001" />
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Bank Name</label>
                                            <input type="text" className="custom-form-input-node"
                                                value="Bank of America" />
                                        </div>
                                    </div>

                                    {/* <!-- Row 8: Account Identity Numbers --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Account Holder Name</label>
                                            <input type="text" className="custom-form-input-node" value="John Doe" />
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Bank Account Number</label>
                                            <input type="text" className="custom-form-input-node" value="123456789012" />
                                        </div>
                                    </div>

                                    {/* <!-- Row 9: Confirmations & Routing Lines --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Confirm Account Number</label>
                                            <input type="text" className="custom-form-input-node" value="123456789012" />
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Routing Number</label>
                                            <input type="text" className="custom-form-input-node" value="021000021" />
                                        </div>
                                    </div>

                                    {/* <!-- Row 10: Proof Type Selection & Media Line Component --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Select Bank Proof Type</label>
                                            <div className="select-chevron-relative-wrapper">
                                                <select className="custom-form-input-node">
                                                    <option selected>Bank Statement</option>
                                                    <option>Void Check</option>
                                                    <option>Passbook Copy</option>
                                                </select>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Bank Proof</label>
                                            <div className="bank-proof-integration-flex">
                                                <button type="button" className="btn-upload-trigger-square">
                                                    <i className="fa-solid fa-upload"></i>
                                                </button>
                                                <div className="uploaded-file-row-strip">
                                                    <div className="file-meta-flex-left">
                                                        <i className="fa-regular fa-file-lines"></i>
                                                        <span>bank_statement_march.pdf</span>
                                                    </div>
                                                    <button type="button" className="btn-remove-file-trash">
                                                        <i className="fa-regular fa-trash-can"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Verification Document Master Drop Vault --> */}
                                    <div className="row mt-2">
                                        <div className="col-12 custom-form-group">
                                            <label className="custom-field-label">Verification Document</label>
                                            <div className="drag-drop-vault-dash-panel">
                                                <i className="fa-solid fa-upload upload-cloud-icon"></i>
                                                <p className="main-prompt-text">Drag and drop files here, or <span
                                                    style={{ color: "var(--primary-blue)", fontWeight: "600" }}>click
                                                    to browse</span></p>
                                                <p className="sub-extension-text">Supported: PDF, PNG, JPG</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Twin Document Attachments Grid Row Footer --> */}
                                    <div className="row">
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Front</label>
                                            <div className="uploaded-file-row-strip">
                                                <div className="file-meta-flex-left">
                                                    <i className="fa-regular fa-file-lines"></i>
                                                    <span>passport_front.jpg</span>
                                                </div>
                                                <button type="button" className="btn-remove-file-trash">
                                                    <i className="fa-regular fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-form-group">
                                            <label className="custom-field-label">Back</label>
                                            <div className="uploaded-file-row-strip">
                                                <div className="file-meta-flex-left">
                                                    <i className="fa-regular fa-file-lines"></i>
                                                    <span>passport_back.jpg</span>
                                                </div>
                                                <button type="button" className="btn-remove-file-trash">
                                                    <i className="fa-regular fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </main>

                        </div>
                    </div>

                    <div className="tab-pane fade" id="pane-expertise-tags" role="tabpanel">
                        <div className="main-dashboard-wrapper">
                            <div className="row g-4">

                                {/* <!-- COLUMN 1: Subjects & Expertise Panel --> */}
                                <div className="col-lg-6">
                                    <div className="dashboard-feature-card">
                                        <div>
                                            <div className="panel-headline-title">
                                                <i className="fa-regular fa-file-lines"></i> Subjects & Expertise
                                            </div>

                                            {/* <!-- Strip Item 1 --> */}
                                            <div className="subject-item-strip">
                                                <div className="subject-meta-left">
                                                    <h4 className="subject-title-text">Linear Algebra</h4>
                                                    <span
                                                        className="expertise-badge-pill badge-advanced">Advanced</span>
                                                    <span className="teaching-experience-subtext">7 years
                                                        teaching</span>
                                                </div>
                                                <button className="btn-subject-strip-delete"><i
                                                    className="fa-solid fa-xmark"></i></button>
                                            </div>

                                            {/* <!-- Strip Item 2 --> */}
                                            <div className="subject-item-strip">
                                                <div className="subject-meta-left">
                                                    <h4 className="subject-title-text">Calculus</h4>
                                                    <span
                                                        className="expertise-badge-pill badge-advanced">Advanced</span>
                                                    <span className="teaching-experience-subtext">8 years
                                                        teaching</span>
                                                </div>
                                                <button className="btn-subject-strip-delete"><i
                                                    className="fa-solid fa-xmark"></i></button>
                                            </div>

                                            {/* <!-- Strip Item 3 --> */}
                                            <div className="subject-item-strip">
                                                <div className="subject-meta-left">
                                                    <h4 className="subject-title-text">Statistics</h4>
                                                    <span
                                                        className="expertise-badge-pill badge-intermediate">Intermediate</span>
                                                    <span className="teaching-experience-subtext">5 years
                                                        teaching</span>
                                                </div>
                                                <button className="btn-subject-strip-delete"><i
                                                    className="fa-solid fa-xmark"></i></button>
                                            </div>

                                            {/* <!-- Strip Item 4 --> */}
                                            <div className="subject-item-strip">
                                                <div className="subject-meta-left">
                                                    <h4 className="subject-title-text">Python Programming</h4>
                                                    <span
                                                        className="expertise-badge-pill badge-intermediate">Intermediate</span>
                                                    <span className="teaching-experience-subtext">4 years
                                                        teaching</span>
                                                </div>
                                                <button className="btn-subject-strip-delete"><i
                                                    className="fa-solid fa-xmark"></i></button>
                                            </div>

                                            {/* <!-- Strip Item 5 --> */}
                                            <div className="subject-item-strip">
                                                <div className="subject-meta-left">
                                                    <h4 className="subject-title-text">Data Science</h4>
                                                    <span
                                                        className="expertise-badge-pill badge-beginner">Beginner</span>
                                                    <span className="teaching-experience-subtext">2 years
                                                        teaching</span>
                                                </div>
                                                <button className="btn-subject-strip-delete"><i
                                                    className="fa-solid fa-xmark"></i></button>
                                            </div>
                                        </div>

                                        <button className="btn-append-primary-action" data-bs-toggle="modal"
                                            data-bs-target="#addNewSubjectModal">
                                            <i className="fa-solid fa-plus"></i> Add Subject
                                        </button>
                                    </div>
                                </div>

                                {/* <!-- COLUMN 2: Teaching Preferences Panel --> */}
                                <div className="col-lg-6">
                                    <div className="dashboard-feature-card">
                                        <div>
                                            <div className="panel-headline-title">
                                                <i className="fa-regular fa-file-lines"></i> Teaching Preferences
                                            </div>

                                            {/* <!-- Control Field 1 --> */}
                                            <div className="preference-field-group">
                                                <label className="preference-field-label">Teaching Style</label>
                                                <div className="select-chevron-wrapper">
                                                    <select className="custom-select-input-node"
                                                        style={{ color: "#98A2B3" }}>
                                                        <option selected disabled>Interactive</option>
                                                        <option>Lecture-based</option>
                                                        <option>Hands-on Project</option>
                                                    </select>
                                                    <i className="fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>

                                            {/* <!-- Control Field 2 --> */}
                                            <div className="preference-field-group">
                                                <label className="preference-field-label">Preferred Session Duration
                                                    (minutes)</label>
                                                <div className="select-chevron-wrapper">
                                                    <select className="custom-select-input-node"
                                                        style={{ color: "#98A2B3" }}>
                                                        <option selected disabled>60 minutes</option>
                                                        <option>30 minutes</option>
                                                        <option>90 minutes</option>
                                                    </select>
                                                    <i className="fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>

                                            {/* <!-- Control Field 3 --> */}
                                            <div className="preference-field-group">
                                                <label className="preference-field-label">Max Users Per Session</label>
                                                <div className="select-chevron-wrapper">
                                                    <select className="custom-select-input-node"
                                                        style={{ color: "#98A2B3" }}>
                                                        <option selected disabled>5</option>
                                                        <option>1</option>
                                                        <option>10</option>
                                                        <option>20</option>
                                                    </select>
                                                    <i className="fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>

                                            {/* <!-- Control Field 4 --> */}
                                            <div className="preference-field-group mb-4">
                                                <label className="preference-field-label">Timezone</label>
                                                <div className="select-chevron-wrapper">
                                                    <select className="custom-select-input-node"
                                                        style={{ color: "#98A2B3" }}>
                                                        <option selected disabled>Pacific Time (PT)</option>
                                                        <option>Eastern Time (ET)</option>
                                                        <option>Greenwich Mean Time (GMT)</option>
                                                    </select>
                                                    <i className="fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>

                                            {/* <!-- Toggle Switches Area --> */}
                                            <div className="preference-toggle-item-line">
                                                <div className="toggle-meta-headers">
                                                    <h5>Available for One-on-One Sessions</h5>
                                                    <p>Accept individual tutoring requests</p>
                                                </div>
                                                <div className="form-check form-switch p-0 m-0">
                                                    <input className="form-check-input custom-form-switch-input mx-0"
                                                        type="checkbox" role="switch" checked />
                                                </div>
                                            </div>

                                            <div className="preference-toggle-item-line">
                                                <div className="toggle-meta-headers">
                                                    <h5>Available for Group Sessions</h5>
                                                    <p>Accept group class requests</p>
                                                </div>
                                                <div className="form-check form-switch p-0 m-0">
                                                    <input className="form-check-input custom-form-switch-input mx-0"
                                                        type="checkbox" role="switch" checked />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="pane-intereststags-tags" role="tabpanel">
                        <main className="interests-master-card">

                            <h2 className="interests-header-title">
                                <i className="fa-regular fa-bookmark"></i> Interests &amp; Tags
                            </h2>
                            <p className="interests-sub-description">
                                Select tags to personalize your course, event, and resource recommendations
                            </p>

                            <form onsubmit="event.preventDefault();">

                                {/* <!-- Search Control Element --> */}
                                <div className="search-tags-input-group">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" className="search-tags-field-control" placeholder="Search Tags" />
                                </div>

                                {/* <!-- Block 1: Currently Selected State Panels --> */}
                                <h3 className="tags-section-heading">Your Selected Tags (4)</h3>
                                <div className="tags-flex-cloud-deck">
                                    <div className="pill-badge-selected-node">
                                        Cybersecurity <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <div className="pill-badge-selected-node">
                                        Technology <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <div className="pill-badge-selected-node">
                                        Career Development <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>

                                {/* <!-- Block 2: Pool of Available Elements --> */}
                                <h3 className="tags-section-heading">Available Tags</h3>
                                <div className="tags-flex-cloud-deck">
                                    <button type="button" className="pill-badge-available-node">Grant Writing</button>
                                    <button type="button" className="pill-badge-available-node">Data Analytics</button>
                                    <button type="button" className="pill-badge-available-node">Fiber Optics</button>
                                    <button type="button" className="pill-badge-available-node">Business</button>
                                    <button type="button" className="pill-badge-available-node">Marketing</button>
                                    <button type="button" className="pill-badge-available-node">Leadership</button>
                                    <button type="button" className="pill-badge-available-node">Youth Program</button>
                                </div>

                                {/* <!-- Action Form Operations Bar Trigger --> */}
                                <button type="submit" className="btn-update-tags-action">
                                    Update Tags
                                </button>

                            </form>

                        </main>
                    </div>

                    {/* <!-- Other Tabs Content View Blockholders --> */}
                    <div className="tab-pane fade" id="pane-interests-tags" role="tabpanel">

                        <div className="doc-verify-card">
                            <div className="doc-verify-header">
                                <svg className="doc-verify-header-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h2 className="doc-verify-title">Documents & Verification</h2>
                            </div>

                            <div className="doc-verify-upload-zone">
                                <input type="file" id="doc-verify-file-input" className="doc-verify-file-input"
                                    accept=".pdf,.png,.jpg" multiple />
                                <label for="doc-verify-file-input" className="doc-verify-upload-label">
                                    <svg className="doc-verify-upload-icon" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <span className="doc-verify-upload-text">Drag and drop files here, or <span
                                        className="doc-verify-browse">click to browse</span></span>
                                    <span className="doc-verify-supported-formats">Supported: PDF, PNG, JPG</span>
                                </label>
                            </div>

                            <div className="doc-verify-files-list">

                                <div className="doc-verify-file-item">
                                    <div className="doc-verify-file-info-block">
                                        <div className="doc-verify-doc-icon-box">
                                            <svg className="doc-verify-doc-svg" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <span className="doc-verify-icon-label">DOC</span>
                                        </div>
                                        <div className="doc-verify-file-details">
                                            <div className="doc-verify-file-name">License.pdf</div>
                                            <div className="doc-verify-file-meta">License • 2.4 MB • Uploaded
                                                01-08-2024</div>
                                        </div>
                                    </div>
                                    <div className="doc-verify-actions">
                                        <button type="button" className="doc-verify-btn doc-verify-download"
                                            title="Download">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </button>
                                        <button type="button" className="doc-verify-btn doc-verify-delete"
                                            title="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="doc-verify-file-item">
                                    <div className="doc-verify-file-info-block">
                                        <div className="doc-verify-doc-icon-box">
                                            <svg className="doc-verify-doc-svg" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <span className="doc-verify-icon-label">DOC</span>
                                        </div>
                                        <div className="doc-verify-file-details">
                                            <div className="doc-verify-file-name">PhD_Certificate.pdf</div>
                                            <div className="doc-verify-file-meta">Certificate • 1.8 MB • Uploaded
                                                01-08-2024</div>
                                        </div>
                                    </div>
                                    <div className="doc-verify-actions">
                                        <button type="button" className="doc-verify-btn doc-verify-download"
                                            title="Download">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </button>
                                        <button type="button" className="doc-verify-btn doc-verify-delete"
                                            title="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="doc-verify-file-item">
                                    <div className="doc-verify-file-info-block">
                                        <div className="doc-verify-doc-icon-box">
                                            <svg className="doc-verify-doc-svg" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <span className="doc-verify-icon-label">DOC</span>
                                        </div>
                                        <div className="doc-verify-file-details">
                                            <div className="doc-verify-file-name">Background_Check.pdf</div>
                                            <div className="doc-verify-file-meta">Verification • 0.5 MB • Uploaded
                                                01-08-2024</div>
                                        </div>
                                    </div>
                                    <div className="doc-verify-actions">
                                        <button type="button" className="doc-verify-btn doc-verify-download"
                                            title="Download">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </button>
                                        <button type="button" className="doc-verify-btn doc-verify-delete"
                                            title="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pane-availability-tags" role="tabpanel">

                        <main className="availability-master-card">

                            <div className="availability-header-title">
                                <i className="fa-regular fa-file-lines"></i> Availability Settings
                            </div>

                            <form onsubmit="event.preventDefault();">

                                {/* <!-- Section 1: Currently Available Control Block --> */}
                                <div className="availability-row-segment">
                                    <div className="availability-segment-meta">
                                        <h4>Currently Available</h4>
                                        <p>Turn this off if you are taking a break or unavailable.</p>
                                    </div>
                                    <div className="form-check form-switch p-0 m-0">
                                        <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" checked="" />
                                    </div>
                                </div>

                                {/* <!-- Section 2: Currently Unavailable Control Block --> */}
                                <div className="availability-row-segment mb-3">
                                    <div className="availability-segment-meta">
                                        <h4>Currently Unavailable</h4>
                                        <p>Turn this on if you are available. your profile will automatically become available again after the selected date and time.</p>
                                    </div>
                                    <div className="form-check form-switch p-0 m-0">
                                        <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" />
                                    </div>
                                </div>

                                {/* <!-- Section 3: Nested Dynamic Field Module Drawer Grid --> */}
                                <div className="unavailable-nested-vault-panel">
                                    <h5 className="nested-vault-heading">Unavailable Until</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="input-glyph-relative-container">
                                                <input type="text" className="vault-field-control-node" placeholder="Date" />
                                                <i className="fa-regular fa-calendar-days"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-glyph-relative-container">
                                                <input type="text" className="vault-field-control-node" placeholder="Time" />
                                                <i className="fa-regular fa-clock"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Section 4: Twin Mode Operations Panels Row Splitter --> */}
                                <div className="preferences-split-line-section">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="split-preference-toggle-node">
                                                <div className="preference-meta-headers">
                                                    <h5>Available for One-on-One Sessions</h5>
                                                    <p>Accept individual tutoring requests</p>
                                                </div>
                                                <div className="form-check form-switch p-0 m-0">
                                                    <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" checked="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="split-preference-toggle-node border-divider-left">
                                                <div className="preference-meta-headers">
                                                    <h5>Available for Group Sessions</h5>
                                                    <p>Accept group class requests</p>
                                                </div>
                                                <div className="form-check form-switch p-0 m-0">
                                                    <input className="form-check-input custom-availability-switch mx-0" type="checkbox" role="switch" checked="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Section 5: Control Anchors Execution Footer Bar --> */}
                                <div className="availability-action-dock">
                                    <button type="button" className="btn-link-action-cancel">Cancel</button>
                                    <button type="submit" className="btn-action-submit-save">Save Changes</button>
                                </div>

                            </form>

                        </main>
                    </div>




                </div>

            </div>

        </main>
    )
}

export default MyProfile