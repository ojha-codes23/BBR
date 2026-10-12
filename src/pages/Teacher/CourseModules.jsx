import React, { useState } from 'react'
import AddModuleModal from '../../components/teacher/AddModuleModal'
import AddLesson from '../../components/teacher/AddLesson'
import { Link } from 'react-router-dom';

const CourseModules = () => {

    const [openModules, setOpenModules] = useState([1]);

    const [openLessons, setOpenLessons] = useState([1]);

    const [moduleOneContentType, setModuleOneContentType] = useState("text");
    const [moduleTwoContentType, setModuleTwoContentType] = useState("text");

    const [moduleOneInteractionType, setModuleOneInteractionType] = useState("text");
    const [moduleTwoInteractionType, setModuleTwoInteractionType] = useState("blank");



    const toggleModule = (moduleId) => {
        setOpenModules((previous) => {
            if (previous.includes(moduleId)) {
                return previous.filter((id) => id !== moduleId);
            }

            return [...previous, moduleId];
        });
    };

    const toggleLesson = (lessonId) => {
        setOpenLessons((previous) => {
            if (previous.includes(lessonId)) {
                return previous.filter((id) => id !== lessonId);
            }

            return [...previous, lessonId];
        });
    };

    return (
        <>
            <main className="main-content">
                {/* <!-- Core Work Canvas Application Frame --> */}
                <div className="glnc-canvas-container flex-grow-1">
                    <div className="d-flex align-items-start gap-3 mb-4">
                        <a href="course-management.html" className="glnc-back-btn">
                            <i className="bi bi-arrow-left"></i>
                        </a>
                        <div>
                            <h1 className="fw-bold m-0" style={{ fontSize: "24px", color: "var(--glnc-text-primary)" }}>
                                Course Management
                            </h1>
                            <p className="text-muted m-0" style={{ fontSize: "13px" }}>
                                Create and manage your educational content
                            </p>
                        </div>
                    </div>

                    {/* <!-- Wizard Stepper Segment Strip --> */}
                    <div className="glnc-wizard-timeline-strip">
                        <div className="glnc-wizard-node status-complete">
                            <div className="glnc-wizard-circle">
                                <i className="bi bi-check"></i>
                            </div>
                            <span className="glnc-wizard-label">Create New Course</span>
                        </div>
                        <div className="glnc-wizard-connector-line"></div>
                        <div className="glnc-wizard-node status-active">
                            <div className="glnc-wizard-circle">02</div>
                            <span className="glnc-wizard-label">Modules & Lessons</span>
                        </div>
                        <div className="glnc-wizard-connector-line upcoming-line"></div>


                        <div className="glnc-wizard-node status-pending">
                            <div className="glnc-wizard-circle">03</div>
                            <span className="glnc-wizard-label">Publish</span>
                        </div>
                    </div>

                    {/* <!-- Layout Column Grid System Base Framework --> */}
                    <div className="row g-4">
                        {/* <!-- Left Side Block Context Course Profile Form Metadata Input Frame Panel Node Component Section Area --> */}
                        <div className="col-lg-4" style={{ maxWidth: "380px" }}>
                            <div className="glnc-card-panel mb-4">
                                <h2 className="glnc-panel-title">Course Details</h2>

                                <div className="mb-3">
                                    <label className="glnc-field-label">Course Category</label>
                                    <div className="glnc-styled-select-trigger">
                                        <span style={{ color: "var(--glnc-text-primary)" }}>UX/UI</span>
                                        <i className="bi bi-caret-down-fill"></i>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="glnc-field-label">Course</label>
                                    <div className="d-flex flex-column gap-2 pt-1">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="courseLevel" id="lvlBeg" defaultChecked />
                                            <label className="form-check-label fw-semibold text-primary" style={{ fontSize: "13px !important" }}
                                                for="lvlBeg">Beginners</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="courseLevel" id="lvlInt" />
                                            <label className="form-check-label fw-medium text-muted" style={{ fontSize: "13px !important" }}
                                                for="lvlInt">Intermediate</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="courseLevel" id="lvlAdv" />
                                            <label className="form-check-label fw-medium text-muted" style={{ fontSize: "13px !important" }}
                                                for="lvlAdv">Advanced</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="glnc-field-label">Select Course Type</label>
                                    <div className="glnc-styled-select-trigger">
                                        <span style={{ color: "var(--glnc-text-primary)" }}>Free</span>
                                        <i className="bi bi-caret-down-fill"></i>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="glnc-field-label">Course Title</label>
                                    <input type="text" className="form-control" defaultValue="SAT Math History"
                                        style={{ height: "44px", fontSize: "13px", borderRadius: "8px" }} />
                                </div>

                                <div className="mb-3">
                                    <label className="glnc-field-label">Description</label>
                                    <textarea className="form-control" style={{
                                        height: "90px",
                                        fontSize: "13px",
                                        borderRadius: "8px",
                                        resize: "none"
                                    }}>
                                        Comprehensive SAT Math preparation.</textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="glnc-field-label">Tags</label>
                                    <input type="text" className="form-control mb-2" placeholder="Type and Press Enter"
                                        style={{ height: "44px", fontSize: "13px", borderRadius: "8px" }} />
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge" style={{
                                            backgroundColor: "#eff8ff",
                                            color: "#175cd3",
                                            fontWeight: "600",
                                            padding: "6px 12px",
                                            borderRadius: "12px",
                                            fontSize: "11px"
                                        }}>SAT <i className="bi bi-x ms-1 cursor-pointer"></i></span>
                                        <span className="badge" style={{
                                            backgroundColor: "#eff8ff",
                                            color: "#175cd3",
                                            fontWeight: "600",
                                            padding: "6px 12px",
                                            borderRadius: "12px",
                                            fontSize: "11px"
                                        }}>Math <i className="bi bi-x ms-1 cursor-pointer"></i></span>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label className="glnc-field-label">Upload Image / Thumbnail</label>
                                    <div style={{
                                        border: "1px dashed #d0d5dd",
                                        padding: "10px",
                                        borderRadius: "12px",
                                        position: "relative"
                                    }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
                                            alt="Thumbnail Preview" style={{
                                                width: "100%",
                                                height: "110px",
                                                objectFit: "cover",
                                                borderRadius: "8px"
                                            }} />
                                        <button type="button" className="btn btn-danger btn-sm rounded-circle position-absolute" style={{
                                            top: "-5px",
                                            right: "-5px",
                                            width: "22px",
                                            height: "22px",
                                            padding: "0",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "12px"
                                        }}>
                                            <i className="bi bi-x"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="glnc-card-panel">
                                <h2 className="glnc-panel-title mb-3">Instructor</h2>
                                <div className="d-flex align-items-start gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                                        alt="Instructor Profile Image" style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "50%",
                                            objectFit: "cover"
                                        }} />
                                    <div style={{ width: "80%" }}>
                                        <h3 className="fw-bold m-0" style={{ fontSize: "14px", color: "var(--glnc-text-primary)" }}>
                                            Sarah Johnson
                                        </h3>
                                        <p className="text-muted m-0 mt-1" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                                            Tech leader and coach specializing in career transitions
                                            and skill development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right Columns Master Builder Workspace Accordions --> */}
                        <div className="col">
                            {/* <!-- Course Objective --> */}
                            <div className="glnc-card-panel mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h2 className="glnc-panel-title mb-0">Course Objective</h2>
                                </div>

                                {/* <!-- Accordion Wrapper Frame Component --> */}
                                <div className="glnc-accordion-block-wrapper border-0 mb-0 overflow-hidden">
                                    <div className="mb-3">
                                        <label className="glnc-field-label">Title</label>
                                        <input type="text" className="form-control" defaultValue="SAT Math Mastery"
                                            style={{ height: "44px", fontSize: "13px", borderRadius: "8px" }} />
                                    </div>
                                    <div className="mb-1">
                                        <label className="glnc-field-label">Description</label>
                                        <textarea className="form-control" style={{
                                            height: "90px",
                                            fontSize: "13px",
                                            borderRadius: "8px",
                                            resize: "none"
                                        }}>Comprehensive SAT Math preparation.</textarea>
                                    </div>
                                </div>


                            </div>

                            {/* <!-- Teacher’s Introduction Video --> */}
                            <div className="glnc-card-panel mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h2 className="glnc-panel-title mb-0">Teacher’s Introduction Video</h2>
                                </div>

                                {/* <!-- Accordion Wrapper Frame Component --> */}
                                <div className="glnc-accordion-block-wrapper border-0 mb-0">
                                    <div className="mb-3">
                                        <label className="glnc-field-label">Paste Embedded Video</label>
                                        <input type="text" className="form-control" defaultValue="https://www.example.com/"
                                            style={{ height: "44px", fontSize: "13px", borderRadius: "8px" }} />
                                    </div>
                                    <div className="mb-0">
                                        <label className="glnc-field-label">Preview</label>
                                        <div className="glnc-video-preview-viewport-box">
                                            <img
                                                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"
                                                alt="Video Player Screen" style={{
                                                    height: "240px",
                                                    objectFit: "cover",
                                                    opacity: "0.9"
                                                }} />
                                            <div className="glnc-video-timeline-playback-bar">
                                                <span className="glnc-video-time-stamp">0:50</span>
                                                <div className="glnc-progress-track-line">
                                                    <div className="glnc-progress-fill-active" style={{ width: "40%" }}></div>
                                                </div>
                                                <span className="glnc-video-time-stamp">2:33</span>
                                            </div>
                                            <div className="glnc-video-controls-row">
                                                <i className="bi bi-play-circle-fill" style={{ fontSize: "28px" }}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            {/* <!-- Modules --> */}

                            <div className="glnc-card-panel mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h2 className="glnc-panel-title mb-0">Modules & Lessons</h2>
                                    <button type="button" className="btn btn-primary fw-semibold" data-bs-toggle="modal"
                                        data-bs-target="#addModuleModal" style={{
                                            backgroundColor: "#006699",
                                            border: "none",
                                            fontSize: "13px",
                                            padding: "8px 16px",
                                            borderRadius: "8px"
                                        }}>
                                        <i className="bi bi-plus-lg me-1"></i> Add Module
                                    </button>
                                </div>

                                {/* <!-- Accordion Wrapper Frame Component --> */}
                                {/* <div className="glnc-accordion-block-wrapper"> */}
                                <div
                                    className={`glnc-accordion-block-wrapper ${openModules.includes(1) ? "" : "state-collapsed"
                                        }`}
                                >
                                    <div className="glnc-accordion-header-row glnc-js-module-toggle" onClick={() => toggleModule(1)}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="glnc-grab-drag-handle">
                                                <img src="images/dragg-icon.svg" alt="" />
                                            </div>
                                            <div>
                                                <h4 className="glnc-module-title-headline">
                                                    Introduction of SAT Math
                                                </h4>
                                                <span className="glnc-module-subtitle-meta">3 Lessons</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button type="button" className="glnc-action-node-trigger btn-edit-node"
                                                onClick={(event) => event.stopPropagation()}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button type="button" className="glnc-action-node-trigger btn-delete-node"
                                                onClick={(event) => event.stopPropagation()}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                            {/* <i className="bi bi-caret-down-fill ms-3 fs-6 glnc-caret-icon rotate-icon-180"></i> */}
                                            <i
                                                className={`bi bi-caret-down-fill ms-3 fs-6 glnc-caret-icon ${openModules.includes(1) ? "rotate-icon-180" : ""
                                                    }`}
                                            ></i>
                                        </div>
                                    </div>

                                    <div className="glnc-accordion-collapsible-canvas-body">
                                        {/* <!-- Lesson Row Segment Wrapper Block --> */}
                                        {/* <div className="glnc-lesson-item-wrapper state-expanded"> */}
                                        <div
                                            className={`glnc-lesson-item-wrapper ${openLessons.includes(1) ? "state-expanded" : "state-collapsed"
                                                }`}
                                        >
                                            <div className="glnc-lesson-item-card-row glnc-js-lesson-toggle" onClick={() => toggleLesson(1)}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="glnc-lesson-circle-index">2</div>
                                                    <div className="glnc-grab-drag-handle text-secondary" style={{ opacity: "0.5" }}>
                                                        <i className="bi bi-grid-3x2-gap-vertical"></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="glnc-lesson-title-headline">
                                                            Key Strategies Overview
                                                        </h5>
                                                        <span className="glnc-lesson-attachment-meta-text">15 mins</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <button type="button" className="glnc-action-node-trigger btn-edit-node"
                                                        onClick={(event) => event.stopPropagation()}>
                                                        <i className="bi bi-pencil-square"></i>
                                                    </button>
                                                    <button type="button" className="glnc-action-node-trigger btn-delete-node"
                                                        onClick={(event) => event.stopPropagation()}>
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                    {/* <i className="bi bi-caret-down-fill ms-3 text-primary glnc-caret-icon"
                                                        style={{ fontSize: "12px" }}></i> */}

                                                    <i
                                                        className={`bi bi-caret-down-fill ms-3 text-primary glnc-caret-icon ${openLessons.includes(1) ? "rotate-icon-180" : ""
                                                            }`}
                                                        style={{ fontSize: "12px" }}
                                                    ></i>
                                                </div>
                                            </div>

                                            {/* <!-- Collapsible Inner Dropdown Area Layout Block --> */}
                                            <div className="glnc-lesson-details-dropdown-content">
                                                <div className="px-1">
                                                    <label className="glnc-field-label">Add Section</label>

                                                    {/* <!-- Layout Row Horizontal Cards Multi View Selector Trigger Switch Tabs --> */}
                                                    <div className="glnc-section-selector-row">
                                                        {/* <div className="glnc-type-selector-card glnc-js-main-tab-trigger active-state"
                                                            data-main-target="glnc-main-tab-text"> */}
                                                        <div
                                                            className={`glnc-type-selector-card glnc-js-main-tab-trigger ${moduleOneContentType === "text" ? "active-state" : ""
                                                                }`}
                                                            onClick={() => setModuleOneContentType("text")}
                                                        >
                                                            <i className="bi bi-type"></i>
                                                            <span>Text</span>
                                                            <p>Rich text with Description</p>
                                                        </div>

                                                        {/* <div className="glnc-type-selector-card glnc-js-main-tab-trigger"
                                                            data-main-target="glnc-main-tab-video"> */}

                                                        <div
                                                            className={`glnc-type-selector-card glnc-js-main-tab-trigger ${moduleOneContentType === "video" ? "active-state" : ""
                                                                }`}
                                                            onClick={() => setModuleOneContentType("video")}
                                                        >
                                                            <i className="bi bi-camera-video"></i>
                                                            <span>Video</span>
                                                            <p>Video Content</p>
                                                        </div>
                                                    </div>

                                                    {/* <div id="glnc-main-tab-text" className="glnc-main-view-tab-block active-view"> */}
                                                    <div
                                                        id="glnc-main-tab-text"
                                                        className={`glnc-main-view-tab-block ${moduleOneContentType === "text" ? "active-view" : ""
                                                            }`}
                                                    >
                                                        <div className="mb-3">
                                                            <label className="glnc-field-label">Text Title</label>
                                                            <div className="glnc-rte-mock-container">
                                                                <div className="glnc-rte-toolbar">
                                                                    <i className="bi bi-arrow-counterclockwise"></i><i className="bi bi-arrow-clockwise"></i>
                                                                    <select>
                                                                        <option>Paragraph</option>
                                                                    </select>
                                                                </div>
                                                                <div className="glnc-rte-body-area text-primary fw-medium" contenteditable="true">
                                                                    Enter your textbook documentation title...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="glnc-field-label">Full Body Article Content</label>
                                                            <div className="glnc-rte-mock-container">
                                                                <div className="glnc-rte-toolbar">
                                                                    <select>
                                                                        <option>Normal Text</option>
                                                                    </select>
                                                                    <i className="bi bi-type-bold"></i><i className="bi bi-type-italic"></i><i
                                                                        className="bi bi-link-45deg"></i>
                                                                </div>
                                                                <div className="glnc-rte-body-area text-muted" style={{ minHeight: "150px" }}
                                                                    contenteditable="true">
                                                                    Write clear study references and guide
                                                                    descriptions here for the students to follow
                                                                    along before doing interactions...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-end gap-2 pt-2">
                                                            <button type="button"
                                                                className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                Cancel
                                                            </button>
                                                            <button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                style={{ backgroundColor: "#006699" }}>
                                                                Save Section
                                                            </button>
                                                        </div>
                                                    </div>


                                                    {/* <div id="glnc-main-tab-video" className="glnc-main-view-tab-block"> */}
                                                    <div
                                                        id="glnc-main-tab-video"
                                                        className={`glnc-main-view-tab-block ${moduleOneContentType === "video" ? "active-view" : ""
                                                            }`}
                                                    >
                                                        <div className="mb-3">
                                                            <label className="glnc-field-label">Video Title</label>
                                                            <div className="glnc-rte-mock-container">
                                                                <div className="glnc-rte-toolbar">
                                                                    <i className="bi bi-arrow-counterclockwise"></i><i className="bi bi-arrow-clockwise"></i>
                                                                    <select>
                                                                        <option>Paragraph</option>
                                                                    </select>
                                                                </div>
                                                                <div className="glnc-rte-body-area fw-semibold text-primary"
                                                                    style={{ color: "#175cd3 !important" }} contenteditable="true">
                                                                    Life Dream Helps You
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <label className="glnc-field-label">Preview</label>
                                                            <div className="glnc-video-preview-viewport-box">
                                                                <img
                                                                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
                                                                    alt="Video Player Screen" style={{
                                                                        height: "240px",
                                                                        objectFit: "cover",
                                                                        opacity: "0.9"
                                                                    }} />
                                                                <div className="glnc-video-timeline-playback-bar">
                                                                    <span className="glnc-video-time-stamp">0:50</span>
                                                                    <div className="glnc-progress-track-line">
                                                                        <div className="glnc-progress-fill-active" style={{ width: "40%" }}></div>
                                                                    </div>
                                                                    <span className="glnc-video-time-stamp">2:33</span>
                                                                </div>
                                                                <div className="glnc-video-controls-row">
                                                                    <i className="bi bi-play-circle-fill" style={{ fontSize: "28px" }}></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="glnc-micro-interaction-badge-row">
                                                            <span className="glnc-micro-pill-node">0.50sec <i className="bi bi-x-circle-fill"></i></span>
                                                            <span className="glnc-micro-pill-node">1.20sec <i className="bi bi-x-circle-fill"></i></span>
                                                            <button type="button" className="btn btn-primary fw-semibold ms-auto" style={{
                                                                backgroundColor: "#006699",
                                                                border: "none",
                                                                fontSize: "12px",
                                                                padding: "6px 14px",
                                                                borderRadius: "8px"
                                                            }}>
                                                                <i className="bi bi-plus-lg"></i> Add Interaction
                                                            </button>
                                                        </div>

                                                        {/* <!-- 5 DISTINCT INTERACTION TOGGLE SUB-TABS GRID MATRIX LAYOUT BLOCK --> */}
                                                        <div className="glnc-interaction-type-grid">
                                                            {/* <!-- Sub-Tab 1: Text Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger active-state"
                                                                data-sub-target="pane-sub-text"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleOneInteractionType === "text" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleOneInteractionType("text")}
                                                            >
                                                                <i className="bi bi-type"></i>
                                                                <span>Text</span>
                                                                <p>Rich text with Description</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 2: Multiple Choice Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger" data-sub-target="pane-sub-mcq"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleOneInteractionType === "mcq" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleOneInteractionType("mcq")}
                                                            >
                                                                <i className="bi bi-check2-circle"></i>
                                                                <span>Multiple Choice</span>
                                                                <p>MCQ Question with one correct</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 3: Match Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger"
                                                                data-sub-target="pane-sub-match"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleOneInteractionType === "match" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleOneInteractionType("match")}
                                                            >
                                                                <i className="bi bi-arrow-left-right"></i>
                                                                <span>Match</span>
                                                                <p>Match with answer</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 4: Fill in the Blank Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger"
                                                                data-sub-target="pane-sub-blank"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleOneInteractionType === "blank" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleOneInteractionType("blank")}
                                                            >
                                                                <i className="bi bi-pencil"></i>
                                                                <span>Fill in the Blank</span>
                                                                <p>Fill in the Blank prompts</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 5: Drag & Drop Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger"
                                                                data-sub-target="pane-sub-drag"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleOneInteractionType === "drag" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleOneInteractionType("drag")}
                                                            >
                                                                <i className="bi bi-hand-index-thumb"></i>
                                                                <span>Drag & Drop</span>
                                                                <p>Fill in the Blank blocks</p>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 1: TEXT FORM --> */}
                                                        {/* <div id="pane-sub-text" className="glnc-tab-content-block active-view"> */}
                                                        <div
                                                            id="pane-sub-text"
                                                            className={`glnc-tab-content-block ${moduleOneInteractionType === "text" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Text Section Properties</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Header Overlay Text</label>
                                                                    <div className="glnc-rte-mock-container">
                                                                        <div className="glnc-rte-toolbar">
                                                                            <select>
                                                                                <option>Heading 1</option>
                                                                            </select><i className="bi bi-type-bold"></i>
                                                                        </div>
                                                                        <div className="glnc-rte-body-area text-primary fw-medium" contenteditable="true">
                                                                            Life Dream Helps You
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Overlay Long Description Block</label>
                                                                    <div className="glnc-rte-mock-container">
                                                                        <div className="glnc-rte-toolbar">
                                                                            <select>
                                                                                <option>Paragraph</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="glnc-rte-body-area text-muted" style={{
                                                                            fontSize: "12px",
                                                                            lineHeight: "1.6"
                                                                        }} contenteditable="true">
                                                                            Life Dream helps you visualize success
                                                                            in the future. It also keeps you
                                                                            inspired to overcome obstacles when
                                                                            trying to accomplish what you want.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-2">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 2: MULTIPLE CHOICE FORM --> */}
                                                        {/* <div id="pane-sub-mcq" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-mcq"
                                                            className={`glnc-tab-content-block ${moduleOneInteractionType === "mcq" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Multiple Choice Question Meta</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Question Text Prompt</label>
                                                                    <input type="text" className="form-control" defaultValue="What was the lesson about?" style={{
                                                                        height: "44px",
                                                                        fontSize: "13px",
                                                                        borderRadius: "8px"
                                                                    }} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Answer Options Matrix (Select radio node
                                                                        for correct target)</label>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" /><input type="text"
                                                                            className="form-control" defaultValue="Option 1: Concept Introduction" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" /><input type="text"
                                                                            className="form-control" defaultValue="Option 2: Tactical Application Analysis" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" defaultChecked /><input
                                                                            type="text" className="form-control"
                                                                            defaultValue="Option 3: Future Perspective Blueprinting" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" /><input type="text"
                                                                            className="form-control" defaultValue="Option 4: None of the above metrics" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <a href="#" className="text-primary fw-bold text-decoration-none d-inline-block mt-2"
                                                                        style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add
                                                                        Custom Option Row</a>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Active Flag Validation</label>
                                                                    <div className="p-3 border rounded-3 bg-light fw-semibold text-success" style={{
                                                                        fontSize: "13px",
                                                                        borderColor: "var(--glnc-green-border)",
                                                                        backgroundColor: "#f6fbf7"
                                                                    }}>
                                                                        Selected Correct Key: Option 3
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-2">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 3: MATCH PAIRS FORM --> */}
                                                        {/* <div id="pane-sub-match" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-match"
                                                            className={`glnc-tab-content-block ${moduleOneInteractionType === "match" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Match Matrix Pairs Configurations</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <label className="glnc-field-label">Pairs (Left Target Anchor — Right Matching
                                                                    Key Value)</label>
                                                                <div className="row g-2 mb-2 align-items-center">
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Life Dream Blueprint" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Future Mapping Metric" />
                                                                    </div>
                                                                    <div className="col-auto d-flex align-items-center gap-2">
                                                                        <i className="bi bi-grid-3x2-gap-vertical text-muted"></i><i
                                                                            className="bi bi-trash text-muted"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row g-2 mb-2 align-items-center">
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Tactical Practice" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Execution Logic Strategy" />
                                                                    </div>
                                                                    <div className="col-auto d-flex align-items-center gap-2">
                                                                        <i className="bi bi-grid-3x2-gap-vertical text-muted"></i><i
                                                                            className="bi bi-trash text-muted"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row g-2 mb-2 align-items-center">
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Equation Core" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Variable Dynamic Rules" />
                                                                    </div>
                                                                    <div className="col-auto d-flex align-items-center gap-2">
                                                                        <i className="bi bi-grid-3x2-gap-vertical text-muted"></i><i
                                                                            className="bi bi-trash text-muted"></i>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="text-primary fw-bold text-decoration-none d-inline-block mt-2"
                                                                    style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add New
                                                                    Pair Row Node</a>
                                                                <div className="d-flex justify-content-end gap-2 pt-3">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 4: FILL IN THE BLANK FORM --> */}
                                                        {/* <div id="pane-sub-blank" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-blank"
                                                            className={`glnc-tab-content-block ${moduleOneInteractionType === "blank" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Fill in the Blank</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Prompt (use ___ for blanks)</label>
                                                                    <input type="text" className="form-control" defaultValue="Complete the sentence: ___" style={{
                                                                        height: "44px",
                                                                        fontSize: "13px",
                                                                        borderRadius: "8px"
                                                                    }} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Correct answer(s)</label>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="text" className="form-control" defaultValue="Answer" />
                                                                        <i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <a href="#" className="text-primary fw-bold text-decoration-none d-inline-block mt-2"
                                                                        style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add
                                                                        Answer</a>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-2">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 5: DRAG & DROP FORM WORKSPACE --> */}
                                                        {/* <div id="pane-sub-drag" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-drag"
                                                            className={`glnc-tab-content-block ${moduleOneInteractionType === "drag" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Drag & Drop Canvas Mapping</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Question Instructions Headline</label>
                                                                    <input type="text" className="form-control"
                                                                        defaultValue="Drag matching asset layout blocks into correct highlighted target nodes placeholders"
                                                                        style={{
                                                                            height: "44px",
                                                                            fontSize: "13px",
                                                                            borderRadius: "8px"
                                                                        }} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Draggable Elements Asset Source File
                                                                        Registry</label>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="text" className="form-control" defaultValue="Vector_Asset_Thumb_01.png" /><i
                                                                            className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="text" className="form-control" defaultValue="Vector_Asset_Thumb_02.png" /><i
                                                                            className="bi bi-trash"></i>
                                                                    </div>
                                                                    <a href="#" className="text-primary fw-bold text-decoration-none"
                                                                        style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add
                                                                        Asset Element Vector</a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label className="glnc-field-label">Interactive Simulation Testing Container
                                                                        Grid</label>
                                                                    <div className="glnc-preview-test-drag-box">
                                                                        <div
                                                                            className="glnc-square-asset-thumb-node d-flex align-items-center justify-content-center text-muted"
                                                                            style={{
                                                                                fontSize: "10px",
                                                                                fontWeight: "700"
                                                                            }}>
                                                                            IMG 1
                                                                        </div>
                                                                        <div
                                                                            className="glnc-square-asset-thumb-node d-flex align-items-center justify-content-center text-muted"
                                                                            style={{
                                                                                fontSize: "10px",
                                                                                fontWeight: "700"
                                                                            }}>
                                                                            IMG 2
                                                                        </div>
                                                                        <div
                                                                            className="glnc-square-asset-thumb-placeholder d-flex align-items-center justify-content-center text-muted fw-bold"
                                                                            style={{ fontSize: "11px" }}>
                                                                            Drop Node Box Target Alpha
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-3">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-end mt-2">
                                            <a data-bs-toggle="modal" data-bs-target="#addNewLessonModal"
                                                className="text-primary fw-bold text-decoration-none" style={{ fontSize: "13px" }}><i
                                                    className="bi bi-plus-lg me-1"></i> Add Lesson</a>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="glnc-accordion-block-wrapper state-collapsed"> */}
                                <div
                                    className={`glnc-accordion-block-wrapper ${openModules.includes(2) ? "" : "state-collapsed"
                                        }`}
                                >
                                    <div className="glnc-accordion-header-row glnc-js-module-toggle" onClick={() => toggleModule(2)}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="glnc-grab-drag-handle">
                                                <img src="images/dragg-icon.svg" alt="" />
                                            </div>
                                            <div>
                                                <h4 className="glnc-module-title-headline">
                                                    Algebra Fundamentals
                                                </h4>
                                                <span className="glnc-module-subtitle-meta">3 Lessons</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button type="button" className="glnc-action-node-trigger btn-edit-node"
                                                onClick={(event) => event.stopPropagation()}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button type="button" className="glnc-action-node-trigger btn-delete-node"
                                                onClick={(event) => event.stopPropagation()}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                            {/* <i className="bi bi-caret-down-fill ms-3 fs-6 glnc-caret-icon"></i> */}
                                            <i
                                                className={`bi bi-caret-down-fill ms-3 fs-6 glnc-caret-icon ${openModules.includes(2) ? "rotate-icon-180" : ""
                                                    }`}
                                            ></i>
                                        </div>
                                    </div>

                                    <div className="glnc-accordion-collapsible-canvas-body">
                                        {/* <!-- Lesson Row Segment Wrapper Block --> */}
                                        {/* <div className="glnc-lesson-item-wrapper state-expanded"> */}
                                        <div
                                            className={`glnc-lesson-item-wrapper ${openLessons.includes(2) ? "state-expanded" : "state-collapsed"
                                                }`}
                                        >

                                            <div className="glnc-lesson-item-card-row glnc-js-lesson-toggle" onClick={() => toggleLesson(2)}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="glnc-lesson-circle-index">2</div>
                                                    <div className="glnc-grab-drag-handle text-secondary" style={{ opacity: "0.5" }}>
                                                        <i className="bi bi-grid-3x2-gap-vertical"></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="glnc-lesson-title-headline">
                                                            Key Strategies Overview
                                                        </h5>
                                                        <span className="glnc-lesson-attachment-meta-text">15 mins</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <button type="button" className="glnc-action-node-trigger btn-edit-node"
                                                        onClick={(event) => event.stopPropagation()}>
                                                        <i className="bi bi-pencil-square"></i>
                                                    </button>
                                                    <button type="button" className="glnc-action-node-trigger btn-delete-node"
                                                        onClick={(event) => event.stopPropagation()}>
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                    {/* <i className="bi bi-caret-down-fill ms-3 text-primary glnc-caret-icon"
                                                        style={{ fontSize: "12px" }}></i> */}
                                                    <i
                                                        className={`bi bi-caret-down-fill ms-3 text-primary glnc-caret-icon ${openLessons.includes(2) ? "rotate-icon-180" : ""
                                                            }`}
                                                        style={{ fontSize: "12px" }}
                                                    ></i>
                                                </div>
                                            </div>

                                            {/* <!-- Collapsible Inner Dropdown Area Layout Block --> */}
                                            <div className="glnc-lesson-details-dropdown-content">
                                                <div className="px-1">
                                                    <label className="glnc-field-label">Add Section</label>

                                                    {/* <!-- Layout Row Horizontal Cards Multi View Selector Trigger Switch Tabs --> */}
                                                    <div className="glnc-section-selector-row">
                                                        {/* <div className="glnc-type-selector-card glnc-js-main-tab-trigger"
                                                            data-main-target="glnc-main-tab-text"> */}
                                                        <div
                                                            className={`glnc-type-selector-card glnc-js-main-tab-trigger ${moduleTwoContentType === "text" ? "active-state" : ""
                                                                }`}
                                                            onClick={() => setModuleTwoContentType("text")}
                                                        >
                                                            <i className="bi bi-type"></i>
                                                            <span>Text</span>
                                                            <p>Rich text with Description</p>
                                                        </div>
                                                        {/* <div className="glnc-type-selector-card glnc-js-main-tab-trigger active-state"
                                                            data-main-target="glnc-main-tab-video"> */}

                                                        <div
                                                            className={`glnc-type-selector-card glnc-js-main-tab-trigger ${moduleTwoContentType === "video" ? "active-state" : ""
                                                                }`}
                                                            onClick={() => setModuleTwoContentType("video")}
                                                        >
                                                            <i className="bi bi-camera-video"></i>
                                                            <span>Video</span>
                                                            <p>Video Content</p>
                                                        </div>
                                                    </div>


                                                    {/* <div id="glnc-main-tab-text" className="glnc-main-view-tab-block"> */}
                                                    <div
                                                        id="glnc-main-tab-text"
                                                        className={`glnc-main-view-tab-block ${moduleTwoContentType === "text" ? "active-view" : ""
                                                            }`}
                                                    >
                                                        <div className="mb-3">
                                                            <label className="glnc-field-label">Text Title</label>
                                                            <div className="glnc-rte-mock-container">
                                                                <div className="glnc-rte-toolbar">
                                                                    <i className="bi bi-arrow-counterclockwise"></i><i className="bi bi-arrow-clockwise"></i>
                                                                    <select>
                                                                        <option>Paragraph</option>
                                                                    </select>
                                                                </div>
                                                                <div className="glnc-rte-body-area text-primary fw-medium" contenteditable="true">
                                                                    Enter your textbook documentation title...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="glnc-field-label">Full Body Article Content</label>
                                                            <div className="glnc-rte-mock-container">
                                                                <div className="glnc-rte-toolbar">
                                                                    <select>
                                                                        <option>Normal Text</option>
                                                                    </select>
                                                                    <i className="bi bi-type-bold"></i><i className="bi bi-type-italic"></i><i
                                                                        className="bi bi-link-45deg"></i>
                                                                </div>
                                                                <div className="glnc-rte-body-area text-muted" style={{ minHeight: "150px" }}
                                                                    contenteditable="true">
                                                                    Write clear study references and guide
                                                                    descriptions here for the students to follow
                                                                    along before doing interactions...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-end gap-2 pt-2">
                                                            <button type="button"
                                                                className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                Cancel
                                                            </button>
                                                            <button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                style={{ backgroundColor: "#006699" }}>
                                                                Save Section
                                                            </button>
                                                        </div>
                                                    </div>


                                                    {/* <div id="glnc-main-tab-video" className="glnc-main-view-tab-block active-view"> */}
                                                    <div
                                                        id="glnc-main-tab-video"
                                                        className={`glnc-main-view-tab-block ${moduleTwoContentType === "video" ? "active-view" : ""
                                                            }`}
                                                    >
                                                        <div className="mb-3">
                                                            <label className="glnc-field-label">Video Title</label>
                                                            <div className="glnc-rte-mock-container">
                                                                <div className="glnc-rte-toolbar">
                                                                    <i className="bi bi-arrow-counterclockwise"></i><i className="bi bi-arrow-clockwise"></i>
                                                                    <select>
                                                                        <option>Paragraph</option>
                                                                    </select>
                                                                </div>
                                                                <div className="glnc-rte-body-area fw-semibold text-primary"
                                                                    style={{ color: "#175cd3 !important" }} contenteditable="true">
                                                                    Life Dream Helps You
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <label className="glnc-field-label">Preview</label>
                                                            <div className="glnc-video-preview-viewport-box">
                                                                <img
                                                                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
                                                                    alt="Video Player Screen" style={{
                                                                        height: "240px",
                                                                        objectFit: "cover",
                                                                        opacity: "0.9"
                                                                    }} />
                                                                <div className="glnc-video-timeline-playback-bar">
                                                                    <span className="glnc-video-time-stamp">0:50</span>
                                                                    <div className="glnc-progress-track-line">
                                                                        <div className="glnc-progress-fill-active" style={{ width: "40%" }}></div>
                                                                    </div>
                                                                    <span className="glnc-video-time-stamp">2:33</span>
                                                                </div>
                                                                <div className="glnc-video-controls-row">
                                                                    <i className="bi bi-play-circle-fill" style={{ fontSize: "28px" }}></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="glnc-micro-interaction-badge-row">
                                                            <span className="glnc-micro-pill-node">0.50sec <i className="bi bi-x-circle-fill"></i></span>
                                                            <span className="glnc-micro-pill-node">1.20sec <i className="bi bi-x-circle-fill"></i></span>
                                                            <button type="button" className="btn btn-primary fw-semibold ms-auto" style={{
                                                                backgroundColor: "#006699",
                                                                border: "none",
                                                                fontSize: "12px",
                                                                padding: "6px 14px",
                                                                borderRadius: "8px"
                                                            }}>
                                                                <i className="bi bi-plus-lg"></i> Add Interaction
                                                            </button>
                                                        </div>

                                                        {/* <!-- 5 DISTINCT INTERACTION TOGGLE SUB-TABS GRID MATRIX LAYOUT BLOCK --> */}
                                                        <div className="glnc-interaction-type-grid">
                                                            {/* <!-- Sub-Tab 1: Text Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger"
                                                                data-sub-target="pane-sub-text"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleTwoInteractionType === "text" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleTwoInteractionType("text")}
                                                            >
                                                                <i className="bi bi-type"></i>
                                                                <span>Text</span>
                                                                <p>Rich text with Description</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 2: Multiple Choice Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger" data-sub-target="pane-sub-mcq"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleTwoInteractionType === "mcq" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleTwoInteractionType("mcq")}
                                                            >
                                                                <i className="bi bi-check2-circle"></i>
                                                                <span>Multiple Choice</span>
                                                                <p>MCQ Question with one correct</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 3: Match Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger"
                                                                data-sub-target="pane-sub-match"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleTwoInteractionType === "match" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleTwoInteractionType("match")}
                                                            >
                                                                <i className="bi bi-arrow-left-right"></i>
                                                                <span>Match</span>
                                                                <p>Match with answer</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 4: Fill in the Blank Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger active-state"
                                                                data-sub-target="pane-sub-blank"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleTwoInteractionType === "blank" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleTwoInteractionType("blank")}
                                                            >
                                                                <i className="bi bi-pencil"></i>
                                                                <span>Fill in the Blank</span>
                                                                <p>Fill in the Blank prompts</p>
                                                            </div>

                                                            {/* <!-- Sub-Tab 5: Drag & Drop Card Trigger --> */}
                                                            {/* <div className="glnc-sub-interaction-card glnc-js-sub-trigger"
                                                                data-sub-target="pane-sub-drag"> */}
                                                            <div
                                                                className={`glnc-sub-interaction-card glnc-js-sub-trigger ${moduleTwoInteractionType === "drag" ? "active-state" : ""
                                                                    }`}
                                                                onClick={() => setModuleTwoInteractionType("drag")}
                                                            >
                                                                <i className="bi bi-hand-index-thumb"></i>
                                                                <span>Drag & Drop</span>
                                                                <p>Fill in the Blank blocks</p>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 1: TEXT FORM --> */}
                                                        {/* <div id="pane-sub-text" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-text"
                                                            className={`glnc-tab-content-block ${moduleTwoInteractionType === "text" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Text Section Properties</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Header Overlay Text</label>
                                                                    <div className="glnc-rte-mock-container">
                                                                        <div className="glnc-rte-toolbar">
                                                                            <select>
                                                                                <option>Heading 1</option>
                                                                            </select><i className="bi bi-type-bold"></i>
                                                                        </div>
                                                                        <div className="glnc-rte-body-area text-primary fw-medium" contenteditable="true">
                                                                            Life Dream Helps You
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Overlay Long Description Block</label>
                                                                    <div className="glnc-rte-mock-container">
                                                                        <div className="glnc-rte-toolbar">
                                                                            <select>
                                                                                <option>Paragraph</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="glnc-rte-body-area text-muted" style={{
                                                                            fontSize: "12px",
                                                                            lineHeight: "1.6"
                                                                        }} contenteditable="true">
                                                                            Life Dream helps you visualize success
                                                                            in the future. It also keeps you
                                                                            inspired to overcome obstacles when
                                                                            trying to accomplish what you want.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-2">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 2: MULTIPLE CHOICE FORM --> */}
                                                        {/* <div id="pane-sub-mcq" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-mcq"
                                                            className={`glnc-tab-content-block ${moduleTwoInteractionType === "mcq" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Multiple Choice Question Meta</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Question Text Prompt</label>
                                                                    <input type="text" className="form-control" defaultValue="What was the lesson about?" style={{
                                                                        height: "44px",
                                                                        fontSize: "13px",
                                                                        borderRadius: "8px"
                                                                    }} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Answer Options Matrix (Select radio node
                                                                        for correct target)</label>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" /><input type="text"
                                                                            className="form-control" defaultValue="Option 1: Concept Introduction" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" /><input type="text"
                                                                            className="form-control" defaultValue="Option 2: Tactical Application Analysis" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" defaultChecked /><input
                                                                            type="text" className="form-control"
                                                                            defaultValue="Option 3: Future Perspective Blueprinting" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="radio" name="sub_mcq_opt" className="form-check-input" /><input type="text"
                                                                            className="form-control" defaultValue="Option 4: None of the above metrics" /><i
                                                                                className="bi bi-grid-3x2-gap-vertical text-muted"></i><i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <a href="#" className="text-primary fw-bold text-decoration-none d-inline-block mt-2"
                                                                        style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add
                                                                        Custom Option Row</a>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Active Flag Validation</label>
                                                                    <div className="p-3 border rounded-3 bg-light fw-semibold text-success" style={{
                                                                        fontSize: "13px",
                                                                        borderColor: "var(--glnc-green-border)",
                                                                        backgroundColor: "#f6fbf7"
                                                                    }}>
                                                                        Selected Correct Key: Option 3
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-2">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 3: MATCH PAIRS FORM --> */}
                                                        {/* <div id="pane-sub-match" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-match"
                                                            className={`glnc-tab-content-block ${moduleTwoInteractionType === "match" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Match Matrix Pairs Configurations</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <label className="glnc-field-label">Pairs (Left Target Anchor — Right Matching
                                                                    Key Value)</label>
                                                                <div className="row g-2 mb-2 align-items-center">
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Life Dream Blueprint" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Future Mapping Metric" />
                                                                    </div>
                                                                    <div className="col-auto d-flex align-items-center gap-2">
                                                                        <i className="bi bi-grid-3x2-gap-vertical text-muted"></i><i
                                                                            className="bi bi-trash text-muted"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row g-2 mb-2 align-items-center">
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Tactical Practice" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Execution Logic Strategy" />
                                                                    </div>
                                                                    <div className="col-auto d-flex align-items-center gap-2">
                                                                        <i className="bi bi-grid-3x2-gap-vertical text-muted"></i><i
                                                                            className="bi bi-trash text-muted"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row g-2 mb-2 align-items-center">
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Equation Core" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" className="form-control" defaultValue="Variable Dynamic Rules" />
                                                                    </div>
                                                                    <div className="col-auto d-flex align-items-center gap-2">
                                                                        <i className="bi bi-grid-3x2-gap-vertical text-muted"></i><i
                                                                            className="bi bi-trash text-muted"></i>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="text-primary fw-bold text-decoration-none d-inline-block mt-2"
                                                                    style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add New
                                                                    Pair Row Node</a>
                                                                <div className="d-flex justify-content-end gap-2 pt-3">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 4: FILL IN THE BLANK FORM --> */}
                                                        {/* <div id="pane-sub-blank" className="glnc-tab-content-block active-view"> */}
                                                        <div
                                                            id="pane-sub-blank"
                                                            className={`glnc-tab-content-block ${moduleTwoInteractionType === "blank" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Fill in the Blank</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Prompt (use ___ for blanks)</label>
                                                                    <input type="text" className="form-control" defaultValue="Complete the sentence: ___" style={{
                                                                        height: "44px",
                                                                        fontSize: "13px",
                                                                        borderRadius: "8px"
                                                                    }} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Correct answer(s)</label>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="text" className="form-control" defaultValue="Answer" />
                                                                        <i className="bi bi-trash"></i>
                                                                    </div>
                                                                    <a href="#" className="text-primary fw-bold text-decoration-none d-inline-block mt-2"
                                                                        style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add
                                                                        Answer</a>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-2">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- SUB PANE 5: DRAG & DROP FORM WORKSPACE --> */}
                                                        {/* <div id="pane-sub-drag" className="glnc-tab-content-block"> */}
                                                        <div
                                                            id="pane-sub-drag"
                                                            className={`glnc-tab-content-block ${moduleTwoInteractionType === "drag" ? "active-view" : ""
                                                                }`}
                                                        >
                                                            <div className="glnc-interaction-sub-panel-card">
                                                                <div className="glnc-interaction-section-header">
                                                                    <span>Drag & Drop Canvas Mapping</span><i className="bi bi-trash text-danger"></i>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Question Instructions Headline</label>
                                                                    <input type="text" className="form-control"
                                                                        defaultValue="Drag matching asset layout blocks into correct highlighted target nodes placeholders"
                                                                        style={{
                                                                            height: "44px",
                                                                            fontSize: "13px",
                                                                            borderRadius: "8px"
                                                                        }} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="glnc-field-label">Draggable Elements Asset Source File
                                                                        Registry</label>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="text" className="form-control" defaultValue="Vector_Asset_Thumb_01.png" /><i
                                                                            className="bi bi-trash"></i>
                                                                    </div>
                                                                    <div className="glnc-interaction-option-row-grid">
                                                                        <input type="text" className="form-control" defaultValue="Vector_Asset_Thumb_02.png" /><i
                                                                            className="bi bi-trash"></i>
                                                                    </div>
                                                                    <a href="#" className="text-primary fw-bold text-decoration-none"
                                                                        style={{ fontSize: "12px" }}><i className="bi bi-plus-lg me-1"></i> Add
                                                                        Asset Element Vector</a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label className="glnc-field-label">Interactive Simulation Testing Container
                                                                        Grid</label>
                                                                    <div className="glnc-preview-test-drag-box">
                                                                        <div
                                                                            className="glnc-square-asset-thumb-node d-flex align-items-center justify-content-center text-muted"
                                                                            style={{
                                                                                fontSize: "10px",
                                                                                fontWeight: "700"
                                                                            }}>
                                                                            IMG 1
                                                                        </div>
                                                                        <div
                                                                            className="glnc-square-asset-thumb-node d-flex align-items-center justify-content-center text-muted"
                                                                            style={{
                                                                                fontSize: "10px",
                                                                                fontWeight: "700"
                                                                            }}>
                                                                            IMG 2
                                                                        </div>
                                                                        <div
                                                                            className="glnc-square-asset-thumb-placeholder d-flex align-items-center justify-content-center text-muted fw-bold"
                                                                            style={{ fontSize: "11px" }}>
                                                                            Drop Node Box Target Alpha
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-end gap-2 pt-3">
                                                                    <button type="button"
                                                                        className="btn btn-link text-decoration-none text-secondary fw-semibold btn-sm">
                                                                        Cancel</button><button type="button" className="btn btn-primary fw-semibold btn-sm px-4"
                                                                            style={{ backgroundColor: "#006699" }}>
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-end mt-2">
                                            <a data-bs-toggle="modal" data-bs-target="#addNewLessonModal" className="text-primary fw-bold text-decoration-none" style={{ fontSize: "13px" }}><i className="bi bi-plus-lg me-1"></i> Add Lesson</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- MASTERY QUIZ PANEL PREVIEW SECTION BLOCK --> */}
                            <div className="glnc-card-panel">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h2 className="glnc-panel-title mb-0">Mastery Quiz</h2>
                                    <button className="btn btn-sm text-white fw-medium d-flex align-items-center gap-1" style={{
                                        backgroundColor: "#006699",
                                        padding: "6px 12px",
                                        borderRadius: "6px"
                                    }}>
                                        <i className="bi bi-plus"></i> Add Question
                                    </button>
                                </div>

                                <div className="p-3 border rounded-3 bg-light position-relative"
                                    style={{ borderColor: "var(--glnc-border)" }}>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="fw-bold text-dark" style={{ fontSize: "13px" }}>Multiple Choice</span>
                                        <i className="bi bi-trash text-danger cursor-pointer" style={{ fontSize: "14px" }}></i>
                                    </div>

                                    <div className="mb-3">
                                        <label className="glnc-field-label">Question</label>
                                        <input type="text" className="form-control form-control-sm text-primary fw-medium"
                                            defaultValue="What was the lesson about?" style={{
                                                height: "38px",
                                                fontSize: "13px",
                                                background: "#ffffff"
                                            }} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="glnc-field-label">Options</label>

                                        <div className="glnc-quiz-option-item">
                                            <input type="radio" name="qz_mock_opt" id="opt1" />
                                            <input type="text" defaultValue="Option 1..." />
                                            <i className="bi bi-grid-3x2-gap-vertical text-muted"></i>
                                            <i className="bi bi-trash text-danger ms-2" style={{ cursor: "pointer" }}></i>
                                        </div>

                                        <div className="glnc-quiz-option-item">
                                            <input type="radio" name="qz_mock_opt" id="opt2" />
                                            <input type="text" defaultValue="Option 2..." />
                                            <i className="bi bi-grid-3x2-gap-vertical text-muted"></i>
                                            <i className="bi bi-trash text-danger ms-2" style={{ cursor: "pointer" }}></i>
                                        </div>

                                        <div className="glnc-quiz-option-item">
                                            <input type="radio" name="qz_mock_opt" id="opt3" defaultChecked />
                                            <input type="text" defaultValue="Option 3..." />
                                            <i className="bi bi-grid-3x2-gap-vertical text-muted"></i>
                                            <i className="bi bi-trash text-danger ms-2" style={{ cursor: "pointer" }}></i>
                                        </div>

                                        <a href="#" className="text-decoration-none fw-semibold d-inline-block mt-1"
                                            style={{ fontSize: "12px", color: "#006699" }}><i className="bi bi-plus"></i> Add Option</a>
                                    </div>

                                    <div className="mb-3">
                                        <label className="glnc-field-label">Correct Answer</label>
                                        <div id="correctAnswerBlock" className="p-2 border rounded-3 fw-medium text-success" style={{
                                            fontSize: "13px",
                                            backgroundColor: "#ecfdf3",
                                            borderColor: "#a3e635 !important",
                                            paddingLeft: "12px !important"
                                        }}>
                                            Option 3...
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end gap-2 pt-2">
                                        <button className="btn btn-sm btn-link text-decoration-none text-secondary fw-semibold">
                                            Cancel
                                        </button>
                                        <button className="btn btn-sm px-3 text-white fw-medium" style={{ backgroundColor: "#006699" }}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="glnc-master-footer-actions-row">
                                <a href="#" className="glnc-btn-master-cancel-anchor">Cancel</a>
                                <Link to="/teacher/course-modules-publish" className="glnc-btn-master-raised-primary-trigger">Save &
                                    Next <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

            <AddModuleModal />
            <AddLesson />
        </>
    )
}

export default CourseModules