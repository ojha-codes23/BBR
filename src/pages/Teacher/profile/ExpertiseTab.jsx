import React, { useState } from 'react'
import AddSubjectModal from '../../../components/teacher/AddSubjectModal'

const ExpertiseTab = () => {
    // const [showSubjectModal, setShowSubjectModal] = useState(false);

    return (
        <>
            <div>
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

                                {/* <button className="btn-append-primary-action" onClick={() => {setShowSubjectModal(true); console.log("Add Subject Clicked...")}}>
                                    <i className="fa-solid fa-plus"></i> Add Subject
                                </button> */}

                                <button class="btn-append-primary-action" data-bs-toggle="modal"
                                    data-bs-target="#addNewSubjectModal">
                                    <i class="fa-solid fa-plus"></i> Add Subject
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

            {/* <AddSubjectModal show={showSubjectModal} onClose={() => setShowSubjectModal(false)} /> */}
            <AddSubjectModal />

        </>
    )
}

export default ExpertiseTab