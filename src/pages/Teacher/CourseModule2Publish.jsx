import React from 'react'
import { Link } from 'react-router-dom'

const CourseModule2Publish = () => {
  return (
    <div className="content-body">
    <div className="page-header-row">
        <div className="title-with-back">
            <a href="course-management-modules-and-lessons.html" className="back-btn-circle">
                <i className="bi bi-arrow-left"></i>
            </a>
            <div>
                <h1 className="page-title">Course Management</h1>
                <p className="page-subtitle">Create and manage your educational content</p>
            </div>
        </div>
    </div>

    <div className="stepper-container">
        <div className="step-connector-line line-1"></div>
        <div className="step-connector-line line-3"></div>

        <div className="step-item completed">
            <div className="step-circle"><i className="bi bi-check"></i></div>
            <div className="step-label">Create New Course</div>
        </div>

        <div className="step-item completed">
            <div className="step-circle"><i className="bi bi-check"></i></div>
            <div className="step-label">Modules & Lessons</div>
        </div>


        <div className="step-item active">
            <div className="step-circle">03</div>
            <div className="step-label">Publish</div>
        </div>
    </div>

    <div className="setup-card">
        <h2 className="setup-card-title">Publish Settings</h2>
        <p className="setup-card-subtitle">Configure course visibility and enrollment options</p>

        <div className="setting-panel-item">
            <div className="setting-header-flex">
                <div className="setting-text-block">
                    <h3 className="setting-title-text">Publish Course</h3>
                    <p className="setting-desc-text">Make this course visible to Users</p>
                </div>
                <label className="form-switch-custom">
                    <input type="checkbox" checked />
                    <span className="switch-slider-element"></span>
                </label>
            </div>
        </div>

        <div className="setting-panel-item">
            <div className="setting-header-flex">
                <div className="setting-text-block">
                    <h3 className="setting-title-text">Allow Enrollment</h3>
                    <p className="setting-desc-text">Users can enroll in this course</p>
                </div>
                <label className="form-switch-custom">
                    <input type="checkbox" checked />
                    <span className="switch-slider-element"></span>
                </label>
            </div>
        </div>

        <div className="setting-panel-item">
            <div className="setting-header-flex">
                <div className="setting-text-block">
                    <h3 className="setting-title-text">Course Availability Window</h3>
                    <p className="setting-desc-text">Set a specific date range the course is accessible</p>
                </div>
                <label className="form-switch-custom">
                    <input type="checkbox" checked />
                    <span className="switch-slider-element"></span>
                </label>
            </div>
            <div className="expanded-inputs-row">
                <div className="input-group-field">
                    <label>Start Date</label>
                    <div className="datepicker-input-wrapper">
                        <input type="text" placeholder="MM-DD-YYYY" />
                        <i className="bi bi-calendar3"></i>
                    </div>
                </div>
                <div className="input-group-field">
                    <label>End Date</label>
                    <div className="datepicker-input-wrapper">
                        <input type="text" placeholder="MM-DD-YYYY" />
                        <i className="bi bi-calendar3"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="setting-panel-item">
            <div className="setting-header-flex">
                <div className="setting-text-block">
                    <h3 className="setting-title-text">Limited Access Duration</h3>
                    <p className="setting-desc-text">Limit how long a User has access after enrolling</p>
                </div>
                <label className="form-switch-custom">
                    <input type="checkbox" checked />
                    <span className="switch-slider-element"></span>
                </label>
            </div>
            <div className="duration-controls-inline">
                <input type="text" className="numeric-input-spinner" value="e.g., 90" />
                <select className="unit-dropdown-select">
                    <option>Days</option>
                </select>
                <span className="duration-context-text">After enrollment</span>
            </div>
        </div>



   

        <div className="setting-panel-item">
            <div className="setting-header-flex">
                <div className="setting-text-block">
                    <h3 className="setting-title-text">Certificate on Completion</h3>
                    <p className="setting-desc-text">Award certificate when course is completed</p>
                </div>
                <label className="form-switch-custom">
                    <input type="checkbox" checked />
                    <span className="switch-slider-element"></span>
                </label>
            </div>
        </div>

        <div className="form-action-footer">
            <button className="btn-action-cancel">Cancel</button>
            <Link to="/teacher/course-management" className="btn-action-save-publish">
                <i className="bi bi-hdd"></i> Save & Publish
            </Link>
        </div>
    </div>
</div>
  )
}

export default CourseModule2Publish