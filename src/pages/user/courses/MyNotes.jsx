import React from 'react'

const MyNotes = () => {
  return (
    <>
           <div className="my-notes-wrp">
            {/* <!-- TOP HEADER SECTION --> */}
            <div className="row align-items-start mb-2">
              <div className="col-md-8 col-12">
                <h1 className="page-title">My Notes</h1>
                <p className="page-desc">
                  Cornell Notes help you organize questions, key points, and
                  summaries for better understanding.
                </p>
              </div>
              <div className="col-md-4 col-12 text-end">
                <button className="btn-add-notes">
                  <i className="bi bi-journal-text"></i> Add Notes
                </button>
              </div>
            </div>

            {/* <!-- FILTERS ROW --> */}
            <div className="row g-3 mb-5">
              <div className="col-lg-3 col-md-6">
                <div className="search-box-wrapper">
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <select className="filter-select">
                  <option selected>Select Course</option>
                </select>
              </div>
              <div className="col-lg-3 col-md-6">
                <select className="filter-select">
                  <option selected>Select Module</option>
                </select>
              </div>
              <div className="col-lg-3 col-md-6">
                <select className="filter-select">
                  <option selected>Select Lesson</option>
                </select>
              </div>
            </div>

            {/* <!-- NOTES CONTAINER --> */}
            <div className="notes-wrapper">
              {/* <!-- Note 1 --> */}
              <div className="notes-card">
                <div>
                  <div className="note-text">
                    Identified short-term and long-term career goals.
                  </div>
                  <div className="note-meta">
                    <i className="bi bi-clock"></i>
                    <span>12:34</span>
                    <span className="ms-1">Saved on Oct 12, 2025</span>
                  </div>
                </div>
                <div className="action-btn-group">
                  <button className="action-btn btn-edit" title="Edit">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="action-btn btn-delete" title="Delete">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>

              {/* <!-- Note 2 --> */}
              <div className="notes-card">
                <div>
                  <div className="note-text">
                    Need to improve communication skills for leadership roles.
                  </div>
                  <div className="note-meta">
                    <i className="bi bi-clock"></i>
                    <span>15:20</span>
                    <span className="ms-1">Saved on Oct 12, 2025</span>
                  </div>
                </div>
                <div className="action-btn-group">
                  <button className="action-btn btn-edit" title="Edit">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="action-btn btn-delete" title="Delete">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>

              {/* <!-- HIGHLIGHTS SECTION --> */}
              <h2 className="section-title">Highlights</h2>

              {/* <!-- Highlight Quote 1 --> */}
              <div className="notes-card">
                <div>
                  <div className="note-text">
                    “Align your skills today with where you want to be
                    tomorrow.”
                  </div>
                  <div className="note-meta">
                    <i className="bi bi-clock"></i>
                    <span>10:05</span>
                    <span className="ms-1">Saved on Oct 12, 2025</span>
                  </div>
                </div>
                <div className="action-btn-group">
                  <button className="action-btn btn-edit" title="Edit">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="action-btn btn-delete" title="Delete">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>

              {/* <!-- Highlight Quote 2 --> */}
              <div className="notes-card">
                <div>
                  <div className="note-text">
                    “Align your skills today with where you want to be
                    tomorrow.”
                  </div>
                  <div className="note-meta">
                    <i className="bi bi-clock"></i>
                    <span>10:05</span>
                    <span className="ms-1">Saved on Oct 12, 2025</span>
                  </div>
                </div>
                <div className="action-btn-group">
                  <button className="action-btn btn-edit" title="Edit">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="action-btn btn-delete" title="Delete">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
            </div>
           </div>
    </>
  )
}

export default MyNotes
