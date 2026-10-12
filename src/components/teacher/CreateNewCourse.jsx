import React from 'react'
import { Link } from 'react-router-dom'

const CreateNewCourse = () => {
  return (
    <div className="modal fade glnc-course-modal-wrapper" id="createCourseModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "600px"}}>
      <div className="modal-content glnc-course-modal-content">
        <div className="modal-header glnc-course-modal-header">
          <div className="glnc-course-modal-title-group">
            <div className="glnc-course-modal-title-icon">
              <i className="bi bi-book"></i>
            </div>
            <div className="glnc-course-modal-title-text">Create New Course</div>
          </div>
          <button type="button" className="glnc-course-modal-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="modal-body glnc-course-modal-body">
          <form id="createCourseForm">
            {/* <!-- Course Category Dropdown --> */}
            <div className="mb-4">
              <label className="glnc-course-modal-label">Course Category</label>
              <div className="glnc-course-modal-select-wrapper">
                <div className="glnc-course-modal-select-trigger" id="categoryTrigger">
                  <span>Select Category</span>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                <div className="glnc-course-modal-dropdown-menu" id="categoryDropdown">
                  <div className="glnc-course-modal-options-list">
                    <div className="glnc-course-modal-option-item" data-value="Academic">
                      Academic
                    </div>
                    <div className="glnc-course-modal-option-item" data-value="Technical">
                      Technical
                    </div>
                    <div className="glnc-course-modal-option-item" data-value="General Learning">
                      General Learning
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Level Radio Buttons --> */}
            <div className="mb-4">
              <label className="glnc-course-modal-label">Level</label>
              <div className="glnc-course-modal-radio-group">
                <label className="glnc-course-modal-radio-label active">
                  <input type="radio" name="courseLevel" value="Beginners" className="glnc-course-modal-radio-input"
                    checked />
                  Beginners
                </label>
                <label className="glnc-course-modal-radio-label">
                  <input type="radio" name="courseLevel" value="Intermediate" className="glnc-course-modal-radio-input" />
                  Intermediate
                </label>
                <label className="glnc-course-modal-radio-label">
                  <input type="radio" name="courseLevel" value="Advanced" className="glnc-course-modal-radio-input" />
                  Advanced
                </label>
              </div>
            </div>

            {/* <!-- Select Organizations Multi-select Dropdown (Ref: Select-Organizations-dropdown.png) --> */}

            {/* <!-- Select Course Type Dropdown (Ref: Select-Course-Type-dropdown.png) --> */}
            <div className="mb-4">
              <label className="glnc-course-modal-label">Select Course Type</label>
              <div className="glnc-course-modal-select-wrapper">
                <div className="glnc-course-modal-select-trigger has-value" id="typeTrigger">
                  <span id="typeTriggerText">Free</span>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                <div className="glnc-course-modal-dropdown-menu" id="typeDropdown">
                  <div className="glnc-course-modal-options-list">
                    <div className="glnc-course-modal-option-item type-select-item" data-value="Free">
                      Free
                    </div>
                    <div className="glnc-course-modal-option-item type-select-item" data-value="Paid">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Conditional Pricing Field --> */}
            <div className="mb-4 d-none" id="priceInputContainer">
              <label className="glnc-course-modal-label">Enter Price</label>
              <input type="text" className="glnc-course-modal-control" placeholder="$ 299" id="coursePrice" />
            </div>

            {/* <!-- Course Title --> */}
            <div className="mb-4">
              <label className="glnc-course-modal-label">Course Title</label>
              <input type="text" className="glnc-course-modal-control" placeholder="SAT Prep" />
            </div>

            {/* <!-- Description Box --> */}
            <div className="mb-4">
              <label className="glnc-course-modal-label">Description</label>
              <textarea className="glnc-course-modal-control type-textarea"
                placeholder="What will Users learn in this course?"></textarea>
            </div>

            {/* <!-- Tags Field --> */}
            <div className="mb-4">
              <label className="glnc-course-modal-label">Tags</label>
              <input type="text" className="glnc-course-modal-control" placeholder="Type and Press Enter"
                id="tagsInputField" />
              <div className="glnc-course-modal-tags-container" id="modalTagsWrapper">
                <div className="glnc-course-modal-tag-pill" data-tag="SAT">
                  SAT <i className="bi bi-x glnc-course-modal-tag-close"></i>
                </div>
                <div className="glnc-course-modal-tag-pill" data-tag="Math">
                  Math <i className="bi bi-x glnc-course-modal-tag-close"></i>
                </div>
              </div>
            </div>

            {/* <!-- Image/Thumbnail Upload Dropzone --> */}
            <div className="mb-2">
              <label className="glnc-course-modal-label">Upload Image / Thumbnail</label>
              <div className="glnc-course-modal-upload-zone">
                <i className="bi bi-upload glnc-course-modal-upload-icon"></i>
                <div className="glnc-course-modal-upload-text">
                  Drag and drop files here, or <span>click to browse</span>
                </div>
                <div className="glnc-course-modal-upload-subtext">
                  Recommended size: 1280 × 720 (16:9)
                </div>
              </div>
            </div>

            {/* <!-- Modal Actions Footer --> */}
            <div className="glnc-course-modal-footer">
              <button type="button" className="glnc-course-modal-btn-cancel" data-bs-dismiss="modal">
                Cancel
              </button>
              <Link to="/teacher/course-modules" className="glnc-course-modal-btn-submit">
                Create Course
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateNewCourse