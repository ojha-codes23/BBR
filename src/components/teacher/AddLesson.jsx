import React from 'react'

const AddLesson = () => {
  return (
    <div className="modal fade" id="addNewLessonModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" style={{maxWidth: "650px"}}>
      <div className="modal-content position-relative">

        {/* <!-- Outside Top-Right Close Button --> */}
        <button type="button" className="custom-close-btn" data-bs-dismiss="modal" aria-label="Close">
          <i className="bi bi-x-lg"></i>
        </button>

        {/* <!-- Modal Header / Title Area --> */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="popup-icon-box">
            <i className="bi bi-grid-3x3-gap"></i>
          </div>
          <h4 className="popup-title">Add New Lesson</h4>
        </div>

        {/* <!-- Modal Body / Form --> */}
        <form>
          <div className="mb-4">
            <label className="form-label">Lesson Title<span className="required-star">*</span></label>
            <input type="text" className="form-control" placeholder="e.g., Abc" required />
          </div>

          <div className="mb-4">
            <label className="form-label">Lesson Type<span className="required-star">*</span></label>
            <select className="form-select" required
              style={{backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23bcbcbc\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e')"}}>
              <option value="" disabled selected hidden>Select Lesson Type</option>
              <option value="video">Video Lecture</option>
              <option value="quiz">Quiz / Assignment</option>
              <option value="document">Reading Material (PDF)</option>
            </select>
          </div>

          {/* <!-- Form Actions (Footer) --> */}
          <div className="d-flex justify-content-end align-items-center mt-4">
            <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-submit">Add Lesson</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  )
}

export default AddLesson