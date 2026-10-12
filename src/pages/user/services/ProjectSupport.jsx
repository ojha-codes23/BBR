import React from 'react'

const ProjectSupport = () => {
  return (
   <>
      
   <div className="ps-supp-main-wrapper container-fluid">
            <header className="ps-supp-header-box row g-3">
              <div className="col-md-8 d-flex align-items-center gap-3">
                <a href="#" className="ps-supp-back-circle-btn"
                  ><img
                    src="/images/user/super-user-dashboard/left-icon-btn.svg"
                    alt=""
                /></a>
                <div>
                  <h1 className="ps-supp-title-main">Project Support</h1>
                  <p className="ps-supp-subtitle">
                    Technical guidance for cybersecurity project
                  </p>
                </div>
              </div>
              <div
                className="col-md-4 d-flex justify-content-md-end justify-content-start align-items-center"
              >
                <div className="ms-auto custom-progress-container">
                  <div className="progress-percentage-row">
                    <span className="progress-percentage-text">10%</span>
                  </div>

                  <div className="progress-layout-row">
                    <div className="progress-label">Overall Progress</div>

                    <div
                      className="progress progress-bar-wrapper"
                      role="progressbar"
                      aria-label="Overall Progress"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar progress-bar-filled"></div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <p className="ps-supp-intro-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul
              className="nav nav-pills ps-supp-capsule-tabs-row"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-upcoming-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-upcoming"
                  type="button"
                  role="tab"
                  aria-controls="pills-upcoming"
                  aria-selected="true"
                >
                  Upcoming classNamees
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-past-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-past"
                  type="button"
                  role="tab"
                  aria-controls="pills-past"
                  aria-selected="false"
                >
                  Past classNamees
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-upcoming"
                role="tabpanel"
                aria-labelledby="pills-upcoming-tab"
              >
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                  {/* <!-- <div className="col">
            <div className="ps-supp-course-card">
              <div>
                <h3 className="ps-supp-card-heading">IT Support Professional Certificate</h3>
                <p className="ps-supp-card-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="ps-supp-meta-info-row">
                  <div className="ps-supp-meta-item"><span><img src="images/super-user-dashboard/project-calender-icon.svg" alt=""></span> Sat, Dec 6, 04:18 PM</div>
                  <div className="ps-supp-meta-item"><span><img src="images/super-user-dashboard/project-time-icon.svg" alt=""></span> 90 minutes</div>
                </div>
              </div>
              <button type="button" className="ps-supp-action-btn active-blue">Join Call &nbsp;→</button>
            </div>
          </div> --> */}

                  <div className="col">
                    <div className="ps-supp-course-card">
                      <div>
                        <h3 className="ps-supp-card-heading">
                          IT Support Professional Certificate
                        </h3>
                        <p className="ps-supp-card-body-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div className="ps-supp-meta-info-row">
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-calender-icon.svg"
                                alt=""
                            /></span>
                            Sat, Dec 6, 04:18 PM
                          </div>
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-time-icon.svg"
                                alt=""
                            /></span>
                            90 minutes
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ps-supp-action-btn disabled-gray"
                      >
                        Join Call &nbsp;→
                      </button>
                    </div>
                  </div>

                  <div className="col">
                    <div className="ps-supp-course-card">
                      <div>
                        <h3 className="ps-supp-card-heading">
                          IT Support Professional Certificate
                        </h3>
                        <p className="ps-supp-card-body-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div className="ps-supp-meta-info-row">
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-calender-icon.svg"
                                alt=""
                            /></span>
                            Sat, Dec 6, 04:18 PM
                          </div>
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-time-icon.svg"
                                alt=""
                            /></span>
                            90 minutes
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ps-supp-action-btn disabled-gray"
                      >
                        Join Call &nbsp;→
                      </button>
                    </div>
                  </div>

                  <div className="col">
                    <div className="ps-supp-course-card">
                      <div>
                        <h3 className="ps-supp-card-heading">
                          IT Support Professional Certificate
                        </h3>
                        <p className="ps-supp-card-body-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div className="ps-supp-meta-info-row">
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-calender-icon.svg"
                                alt=""
                            /></span>
                            Sat, Dec 6, 04:18 PM
                          </div>
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-time-icon.svg"
                                alt=""
                            /></span>
                            90 minutes
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ps-supp-action-btn disabled-gray"
                      >
                        Join Call &nbsp;→
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ps-supp-course-card">
                      <div>
                        <h3 className="ps-supp-card-heading">
                          IT Support Professional Certificate
                        </h3>
                        <p className="ps-supp-card-body-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div className="ps-supp-meta-info-row">
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-calender-icon.svg"
                                alt=""
                            /></span>
                            Sat, Dec 6, 04:18 PM
                          </div>
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-time-icon.svg"
                                alt=""
                            /></span>
                            90 minutes
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ps-supp-action-btn disabled-gray"
                      >
                        Join Call &nbsp;→
                      </button>
                    </div>
                  </div>

                  <div className="col">
                    <div className="ps-supp-course-card">
                      <div>
                        <h3 className="ps-supp-card-heading">
                          IT Support Professional Certificate
                        </h3>
                        <p className="ps-supp-card-body-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div className="ps-supp-meta-info-row">
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-calender-icon.svg"
                                alt=""
                            /></span>
                            Sat, Dec 6, 04:18 PM
                          </div>
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-time-icon.svg"
                                alt=""
                            /></span>
                            90 minutes
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ps-supp-action-btn disabled-gray"
                      >
                        Join Call &nbsp;→
                      </button>
                    </div>
                  </div>

                  <div className="col">
                    <div className="ps-supp-course-card">
                      <div>
                        <h3 className="ps-supp-card-heading">
                          IT Support Professional Certificate
                        </h3>
                        <p className="ps-supp-card-body-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div className="ps-supp-meta-info-row">
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-calender-icon.svg"
                                alt=""
                            /></span>
                            Sat, Dec 6, 04:18 PM
                          </div>
                          <div className="ps-supp-meta-item">
                            <span
                              ><img
                                src="/images/user/super-user-dashboard/project-time-icon.svg"
                                alt=""
                            /></span>
                            90 minutes
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ps-supp-action-btn disabled-gray"
                      >
                        Join Call &nbsp;→
                      </button>
                    </div>
                  </div>
                </div>

                <footer
                  className="ps-supp-footer-controls flex-column flex-sm-row gap-3"
                >
                  <div>
                    <span>Show</span>
                    <select className="ps-supp-select-dropdown mx-2">
                      <option value="10">10</option>
                      <option value="25">25</option>
                    </select>
                    <span className="text-muted">Showing 1-4 from 50 results</span>
                  </div>
                  <ul className="ps-supp-pagination-list">
                    <li>
                      <a href="#" className="ps-supp-page-item-link text-btn"
                        >Prev</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        className="ps-supp-page-item-link active-blue-page"
                        >1</a
                      >
                    </li>
                    <li><a href="#" className="ps-supp-page-item-link">2</a></li>
                    <li>
                      <a href="#" className="ps-supp-page-item-link solid-blue-next"
                        >Next</a
                      >
                    </li>
                  </ul>
                </footer>
              </div>

              <div
                className="tab-pane fade"
                id="pills-past"
                role="tabpanel"
                aria-labelledby="pills-past-tab"
              >
                <div className="ps-card-section-wrapper container-fluid">
                  <div className="ps-card-custom-row">
                    <div className="ps-card-custom-col">
                      <div className="ps-card-container">
                        <div>
                          <h3 className="ps-card-title-text">
                            IT Support Professional Certificate
                          </h3>
                          <p className="ps-card-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="ps-card-meta-list">
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <span>Sat, Dec 6, 04:18 PM</span>
                            </div>
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span>90 minutes</span>
                            </div>
                          </div>
                        </div>
                       {/* <!--  <button
                          type="button"
                          className="ps-card-action-btn state-active"
                        >
                          Join Call &nbsp;→
                        </button> --> */}
                      </div>
                    </div>

                    <div className="ps-card-custom-col">
                      <div className="ps-card-container">
                        <div>
                          <h3 className="ps-card-title-text">
                            IT Support Professional Certificate
                          </h3>
                          <p className="ps-card-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="ps-card-meta-list">
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <span>Sat, Dec 6, 04:18 PM</span>
                            </div>
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span>90 minutes</span>
                            </div>
                          </div>
                        </div>
                        {/* <!--  <button
                          type="button"
                          className="ps-card-action-btn state-disabled"
                          disabled
                        >
                          Join Call &nbsp;→
                        </button> --> */}
                      </div>
                    </div>

                    <div className="ps-card-custom-col">
                      <div className="ps-card-container">
                        <div>
                          <h3 className="ps-card-title-text">
                            IT Support Professional Certificate
                          </h3>
                          <p className="ps-card-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="ps-card-meta-list">
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <span>Sat, Dec 6, 04:18 PM</span>
                            </div>
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span>90 minutes</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- <button
                          type="button"
                          className="ps-card-action-btn state-disabled"
                          disabled
                        >
                          Join Call &nbsp;→
                        </button> --> */}
                      </div>
                    </div>
                    <div className="ps-card-custom-col">
                      <div className="ps-card-container">
                        <div>
                          <h3 className="ps-card-title-text">
                            IT Support Professional Certificate
                          </h3>
                          <p className="ps-card-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="ps-card-meta-list">
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <span>Sat, Dec 6, 04:18 PM</span>
                            </div>
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span>90 minutes</span>
                            </div>
                          </div>
                        </div>
                       {/*  <button
                          type="button"
                          className="ps-card-action-btn state-active"
                        >
                          Join Call &nbsp;→
                        </button> */}
                      </div>
                    </div>

                    <div className="ps-card-custom-col">
                      <div className="ps-card-container">
                        <div>
                          <h3 className="ps-card-title-text">
                            IT Support Professional Certificate
                          </h3>
                          <p className="ps-card-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="ps-card-meta-list">
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <span>Sat, Dec 6, 04:18 PM</span>
                            </div>
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span>90 minutes</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- <button
                          type="button"
                          className="ps-card-action-btn state-disabled"
                          disabled
                        >
                          Join Call &nbsp;→
                        </button> --> */}
                      </div>
                    </div>

                    <div className="ps-card-custom-col">
                      <div className="ps-card-container">
                        <div>
                          <h3 className="ps-card-title-text">
                            IT Support Professional Certificate
                          </h3>
                          <p className="ps-card-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="ps-card-meta-list">
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <span>Sat, Dec 6, 04:18 PM</span>
                            </div>
                            <div className="ps-card-meta-item">
                              <svg
                                className="ps-card-meta-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span>90 minutes</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- <button
                          type="button"
                          className="ps-card-action-btn state-disabled"
                          disabled
                        >
                          Join Call &nbsp;→
                        </button> --> */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="ps-card-custom-row"></div> */}
                </div>

                <footer
                  className="ps-supp-footer-controls flex-column flex-sm-row gap-3"
                >
                  <div className="ps-supp-show-selector-box">
                    <span>Show</span>
                    <select className="ps-supp-select-dropdown">
                      <option value="10">10</option>
                      <option value="25">25</option>
                    </select>
                    <span className="text-muted ms-2"
                      >Showing 1-4 from 50 results</span
                    >
                  </div>

                  <ul className="ps-supp-pagination-list">
                    <li>
                      <a href="#" className="ps-supp-page-item-link text-btn"
                        >Prev</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        className="ps-supp-page-item-link active-blue-page"
                        >1</a
                      >
                    </li>
                    <li><a href="#" className="ps-supp-page-item-link">2</a></li>
                    <li><a href="#" className="ps-supp-page-item-link">3</a></li>
                    <li className="ps-supp-page-item-dots">...</li>
                    <li><a href="#" className="ps-supp-page-item-link">10</a></li>
                    <li>
                      <a href="#" className="ps-supp-page-item-link solid-blue-next"
                        >Next</a
                      >
                    </li>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
   </>
  )
}

export default ProjectSupport
