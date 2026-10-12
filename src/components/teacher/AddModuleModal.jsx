import React from 'react'

const AddModuleModal = () => {
  return (
    <div className="modal fade" id="addModuleModal" tabindex="-1" aria-hidden="true">
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
          <h4 className="popup-title">Add Module</h4>
        </div>

        {/* <!-- Modal Body / Form --> */}
        <form>
          <div className="mb-4">
            <label className="form-label">Module Title</label>
            <input type="text" className="form-control" placeholder="SAT Prep" />
          </div>

          <div className="mb-4">
            <label className="form-label">Description (Optional)</label>
            <textarea className="form-control" rows="4" placeholder="Brief description of the module..."></textarea>
          </div>

          {/* <!-- Form Actions (Footer) --> */}
          <div className="d-flex justify-content-end align-items-center mt-4">
            <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-submit">Add Module</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  )
}

export default AddModuleModal