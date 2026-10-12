import React from 'react'
import CreateNewCourse from '../../components/teacher/CreateNewCourse'

const CourseManagement = () => {
  return (
    <>
          <main className="main-content">
        <div className="page-header">
          <div>
            <h1 className="page-title">Course Management</h1>
            <p className="page-subtitle">
              Create and manage your educational content
            </p>
          </div>
          <button className="btn-create-course" data-bs-toggle="modal" data-bs-target="#createCourseModal">
            <i className="bi bi-plus-lg"></i> Create Course
          </button>
        </div>

        {/* <!-- Toolbar / Filter Row --> */}
        <div className="toolbar-row">
          <div className="search-group">
            <i className="bi bi-search search-icon"></i>
            <input type="text" className="search-input" placeholder="Search" />
          </div>
          <div className="filter-group">
            <select className="form-select form-select-sm">
              <option selected>Category (All)</option>
            </select>
            <select className="form-select form-select-sm">
              <option selected>Published</option>
            </select>
            <select className="form-select form-select-sm">
              <option selected>Level (All)</option>
            </select>

            <div className="datepicker-wrapper">
              <button className="glnc-btn-cal-icon date-width">
                            <img src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg" alt="" />Date
                        </button>
            </div>
          </div>
        </div>

        <h2 className="category-title">Category (All)</h2>

        {/* <!-- Course Grid --> */}
        <div className="course-grid">
          {/* <!-- Card 1 --> */}
          <article className="course-card">
            <div className="card-image-wrapper">
              <img src="/images/teacher/requests-management/course-management-img.svg" alt="Course 1" className="card-img-top" />
              <span className="label-beginner">Beginner</span>
              <button className="btn-card-context">
                <i className="bi bi-three-dots-vertical"></i>
              </button>

              <div className="context-menu">
                <a href="#" className="context-menu-item"><i className="bi bi-pencil"></i> Edit</a>
                <a href="#" className="context-menu-item"><i className="bi bi-files"></i> Duplicate</a>
                <a href="#" className="context-menu-item"><i className="bi bi-eye"></i> Preview</a>
                <hr className="my-1" style={{borderColor: "#f2f4f7"}} />
                <a href="#" className="context-menu-item delete"><i className="bi bi-trash"></i> Delete</a>
              </div>

              <div className="enrolled-user-count">Enrolled User : 70</div>
            </div>
            <div className="card-body">
              <h3 className="course-title">Course: 1</h3>
              <p className="course-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="badge-list">
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
              </div>
              <div className="stats-row">
                <span><i className="bi bi-grid-3x3-gap"></i> 5 modules</span>
                <span><i className="bi bi-file-earmark-text"></i> 24 Lessons</span>
              </div>
              <div className="teachers-row">
                <span className="teachers-label">Teachers:</span>
                <div className="teacher-avatars">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Teacher" className="teacher-avatar" />
                  <span className="more-teachers">+3 More</span>
                </div>
              </div>
            </div>
          </article>

          {/* <!-- Card 2 --> */}
          <article className="course-card">
            <div className="card-image-wrapper">
              <img src="/images/teacher/requests-management/course-management-img.svg" alt="Course 2" className="card-img-top" />
              <span className="label-intermediate">Intermediate</span>
              <span className="label-draft intermediate-offset">Draft</span>
              <button className="btn-card-context">
                <i className="bi bi-three-dots-vertical"></i>
              </button>

              <div className="context-menu">
                <a href="#" className="context-menu-item"><i className="bi bi-pencil"></i> Edit</a>
                <a href="#" className="context-menu-item"><i className="bi bi-files"></i> Duplicate</a>
                <a href="#" className="context-menu-item"><i className="bi bi-eye"></i> Preview</a>
                <hr className="my-1" style={{borderColor: "#f2f4f7"}} />
                <a href="#" className="context-menu-item delete"><i className="bi bi-trash"></i> Delete</a>
              </div>

              <div className="enrolled-user-count">Enrolled User : 70</div>
            </div>
            <div className="card-body">
              <h3 className="course-title">Course: 2</h3>
              <p className="course-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="stats-row">
                <span><i className="bi bi-grid-3x3-gap"></i> 5 modules</span>
                <span><i className="bi bi-file-earmark-text"></i> 24 Lessons</span>
              </div>
              <div className="badge-list">
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
              </div>
              <div className="teachers-row">
                <span className="teachers-label">Teachers:</span>
                <div className="teacher-avatars">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Teacher" className="teacher-avatar" />
                  <span className="more-teachers">+3 More</span>
                </div>
              </div>
            </div>
          </article>

          {/* <!-- Card 3 --> */}
          <article className="course-card">
            <div className="card-image-wrapper">
              <img src="/images/teacher/requests-management/course-management-img.svg" alt="Course 3" className="card-img-top" />
              <span className="label-advanced">Advanced</span>
              <button className="btn-card-context">
                <i className="bi bi-three-dots-vertical"></i>
              </button>

              <div className="context-menu">
                <a href="#" className="context-menu-item"><i className="bi bi-pencil"></i> Edit</a>
                <a href="#" className="context-menu-item"><i className="bi bi-files"></i> Duplicate</a>
                <a href="#" className="context-menu-item"><i className="bi bi-eye"></i> Preview</a>
                <hr className="my-1" style={{borderColor: "#f2f4f7"}} />
                <a href="#" className="context-menu-item delete"><i className="bi bi-trash"></i> Delete</a>
              </div>

              <div className="enrolled-user-count">Enrolled User : 70</div>
            </div>
            <div className="card-body">
              <h3 className="course-title">Course: 3</h3>
              <p className="course-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="stats-row">
                <span><i className="bi bi-grid-3x3-gap"></i> 5 modules</span>
                <span><i className="bi bi-file-earmark-text"></i> 24 Lessons</span>
              </div>
              <div className="badge-list">
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
              </div>
              <div className="teachers-row">
                <span className="teachers-label">Teachers:</span>
                <div className="teacher-avatars">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Teacher" className="teacher-avatar" />
                  <span className="more-teachers">+3 More</span>
                </div>
              </div>
            </div>
          </article>

          {/* <!-- Card 4 --> */}
          <article className="course-card">
            <div className="card-image-wrapper">
              <img src="/images/teacher/requests-management/course-management-img.svg" alt="Course 4" className="card-img-top" />
              <span className="label-intermediate">Intermediate</span>
              <button className="btn-card-context">
                <i className="bi bi-three-dots-vertical"></i>
              </button>

              <div className="context-menu">
                <a href="#" className="context-menu-item"><i className="bi bi-pencil"></i> Edit</a>
                <a href="#" className="context-menu-item"><i className="bi bi-files"></i> Duplicate</a>
                <a href="#" className="context-menu-item"><i className="bi bi-eye"></i> Preview</a>
                <hr className="my-1" style={{borderColor: "#f2f4f7"}} />
                <a href="#" className="context-menu-item delete"><i className="bi bi-trash"></i> Delete</a>
              </div>

              <div className="enrolled-user-count">Enrolled User : 70</div>
            </div>
            <div className="card-body">
              <h3 className="course-title">Course: 4</h3>
              <p className="course-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="badge-list">
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
              </div>
              <div className="stats-row">
                <span><i className="bi bi-grid-3x3-gap"></i> 5 modules</span>
                <span><i className="bi bi-file-earmark-text"></i> 24 Lessons</span>
              </div>
              <div className="teachers-row">
                <span className="teachers-label">Teachers:</span>
                <div className="teacher-avatars">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Teacher" className="teacher-avatar" />
                  <span className="more-teachers">+3 More</span>
                </div>
              </div>
            </div>
          </article>

          {/* <!-- Card 5 --> */}
          <article className="course-card">
            <div className="card-image-wrapper">
              <img src="/images/teacher/requests-management/course-management-img.svg" alt="Course 5" className="card-img-top" />
              <span className="label-advanced">Advanced</span>
              <span className="label-draft advanced-offset">Draft</span>
              <button className="btn-card-context">
                <i className="bi bi-three-dots-vertical"></i>
              </button>

              <div className="context-menu">
                <a href="#" className="context-menu-item"><i className="bi bi-pencil"></i> Edit</a>
                <a href="#" className="context-menu-item"><i className="bi bi-files"></i> Duplicate</a>
                <a href="#" className="context-menu-item"><i className="bi bi-eye"></i> Preview</a>
                <hr className="my-1" style={{borderColor: "#f2f4f7"}} />
                <a href="#" className="context-menu-item delete"><i className="bi bi-trash"></i> Delete</a>
              </div>

              <div className="enrolled-user-count">Enrolled User : 70</div>
            </div>
            <div className="card-body">
              <h3 className="course-title">Course: 5</h3>
              <p className="course-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="stats-row">
                <span><i className="bi bi-grid-3x3-gap"></i> 5 modules</span>
                <span><i className="bi bi-file-earmark-text"></i> 24 Lessons</span>
              </div>
              <div className="badge-list">
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
              </div>
              <div className="teachers-row">
                <span className="teachers-label">Teachers:</span>
                <div className="teacher-avatars">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Teacher" className="teacher-avatar" />
                  <span className="more-teachers">+3 More</span>
                </div>
              </div>
            </div>
          </article>

          {/* <!-- Card 6 --> */}
          <article className="course-card">
            <div className="card-image-wrapper">
              <img src="/images/teacher/requests-management/course-management-img.svg" alt="Course 6" className="card-img-top" />
              <span className="label-advanced">Advanced</span>
              <button className="btn-card-context">
                <i className="bi bi-three-dots-vertical"></i>
              </button>

              <div className="context-menu">
                <a href="#" className="context-menu-item"><i className="bi bi-pencil"></i> Edit</a>
                <a href="#" className="context-menu-item"><i className="bi bi-files"></i> Duplicate</a>
                <a href="#" className="context-menu-item"><i className="bi bi-eye"></i> Preview</a>
                <hr className="my-1" style={{borderColor: "#f2f4f7"}} />
                <a href="#" className="context-menu-item delete"><i className="bi bi-trash"></i> Delete</a>
              </div>

              <div className="enrolled-user-count">Enrolled User : 70</div>
            </div>
            <div className="card-body">
              <h3 className="course-title">Course: 6</h3>
              <p className="course-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="stats-row">
                <span><i className="bi bi-grid-3x3-gap"></i> 5 modules</span>
                <span><i className="bi bi-file-earmark-text"></i> 24 Lessons</span>
              </div>
              <div className="badge-list">
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
                <span className="badge-item">Lorem ipsum</span>
              </div>
              <div className="teachers-row">
                <span className="teachers-label">Teachers:</span>
                <div className="teacher-avatars">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Teacher" className="teacher-avatar" />
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Teacher" className="teacher-avatar" />
                  <span className="more-teachers">+3 More</span>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* <!-- End Course Grid --> */}

        {/* <!-- Footer / Pagination --> */}
        <footer className="footer-pagination">
          <div>Showing 4 from 50 results</div>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item prev-item">
                <a className="page-link" href="#">Prev</a>
              </li>
              <li className="page-item number-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item number-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item number-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item ellipsis-item">
                <a className="page-link" href="#">...</a>
              </li>
              <li className="page-item number-item">
                <a className="page-link" href="#">10</a>
              </li>
              <li className="page-item next-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>

      <CreateNewCourse />

    </>
  )
}

export default CourseManagement