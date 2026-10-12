import React from 'react'
import { Link } from 'react-router-dom';
import HelpSelectionModal from '../../../components/user/course/HelpSelectionModal';
import QuizInstructionsModal from '../../../components/user/course/QuizInstructionsModal';
import MyNotesManagementModal from '../../../components/user/course/MyNotesManagementModal';

const CareerPlanningWorkshop = () => {
  return (
   <>
     <div className="career-planning-wrp">
      

            <div className="d-flex align-items-center mb-4">
              <a href="#" type="button" className="gl-back-round-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </a>
              <div className="career-planning-head-right">
                <div className="career-planning-head-right-in">
                  <h1 className="h4 fw-bold mb-0 ms-4">Career Planning Workshop</h1>
                  <small className="text-muted ms-4"
                    ><img
                      src="/images/user/super-user-dashboard/material-symbols_target.svg"
                      className="me-1"
                      alt=""
                    />6 weeks &nbsp;|&nbsp;
                    <img
                      src="/images/user/super-user-dashboard/book_svgrepo.com.svg"
                      className="me-1"
                      alt=""
                    />
                    08 Modules</small               
                  >


                            <button
  type="button"
  onClick={() => {
    console.log("React is working");
    console.log("Bootstrap:", window.bootstrap);
    console.log("Collapse:", window.bootstrap?.Collapse);
  }}
>
  Test Bootstrap
</button>
                </div>
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

              {/* <!-- <div className="ms-auto text-end overall-progress" style="width: 200px;">
                            <div className="small fw-bold">Overall Progress</div>
                            <div>
                                <div className="">

                                    <span className="text-success small fw-bold">10%</span>
                                </div>
                                <div className="progress-bar-custom">
                                    <div className="progress-fill" style="width: 10%;"></div>
                                </div>
                            </div>
                        </div> --> */}
            </div>

            <div
              className="mb-4 position-relative rounded-4 overflow-hidden shadow-sm"
              style={{
                height: "320px",
                background:
                    'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200") center/cover no-repeat',
                }}
            >
              <div className="position-absolute top-50 start-50 translate-middle">
                <button type="button" className="video-play-icon">
                  <img
                    src="/images/user/super-user-dashboard/video-icon-user.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-8">
                <div className="mb-4">
                  <h2 className="h5 fw-bold mb-3">Overview</h2>

                  <div className="mb-2">
                    <button
                      className="accordion-custom-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseObjective"
                    >
                      <span
                        ><i className="bi bi-bullseye me-2"></i> Course
                        Objective</span
                      >
                    </button>
                    <div id="collapseObjective" className="collapse show mt-2">
                      <div
                        className="card card-body custom-card small text-muted lh-lg"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <button
                      className="accordion-custom-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTeacher"
                    >
                      <span
                        ><i className="bi bi-person-video3 me-2"></i> Teacher's
                        Introduction</span
                      >
                    </button>
                    <div id="collapseTeacher" className="collapse mt-2">
                      <div
                        className="card card-body custom-card small text-muted lh-lg"
                      >
                        Meet your instructor! Experienced team lead specializing
                        in complete career transformations and system design
                        development processes.
                      </div>
                    </div>
                  </div>
                </div>



                <div className="mb-4">
                  <h2 className="h5 fw-bold mb-3">Course Modules</h2>

                  <div className="mb-3">
                    <button
                      className="accordion-custom-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#module1"
                    >
                      <div>
                        <span className="fw-bold">Module: 1</span>
                        <i
                          className="bi bi-check-circle-fill text-success ms-2"
                        ></i>
                        <div className="small fw-normal mt-1 opacity-75">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </div>
                      </div>
                    </button>
                    <div id="module1" className="collapse mt-2">
                      <div className="p-2">
                        <div className="lesson-row">
                          <div className="d-flex align-items-center gap-3">
                            <div className="circle-num">1</div>
                            <div>
                              <div className="fw-bold small">
                                Introduction to Strategy
                              </div>
                              <small className="text-muted"
                                ><i className="bi bi-clock"></i> 20 min</small
                              >
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-success rounded-pill px-3"
                          >
                            Completed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button
                      className="accordion-custom-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#module2"
                    >
                      <div>
                        <span className="fw-bold">Module: 2</span>
                        <i className="bi bi-play-circle text-white ms-2"></i>
                        <div className="small fw-normal mt-1 opacity-75">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </div>
                      </div>
                    </button>
                    <div id="module2" className="collapse show mt-2">
                      <div className="p-2">
                        <div className="lesson-row">
                          <div className="d-flex align-items-center gap-3">
                            <div className="circle-num">1</div>
                            <div>
                              <div className="fw-bold small">
                                Lesson 1 &nbsp;<i
                                  className="bi bi-check-circle text-success"
                                ></i>
                              </div>
                              <small className="text-muted"
                                ><i className="bi bi-clock"></i> 30 min</small
                              >
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-primary rounded-pill px-3"
                           style={{ backgroundColor: "var(--primary-blue)" }}
                          >
                            View Result
                          </button>
                        </div>

                        <div className="lesson-row">
                          <div className="d-flex align-items-center gap-3">
                            <div className="circle-num">2</div>
                            <div>
                              <div className="fw-bold small">
                                Lesson 2 &nbsp;<i
                                  className="bi bi-play-circle text-primary"
                                ></i>
                              </div>
                              <small className="text-muted"
                                ><i className="bi bi-clock"></i> 30 min</small
                              >
                            </div>
                          </div>
                          <Link
                            to="/student/lesson-detail"
                            className="btn btn-sm btn-outline-primary rounded-pill px-3"
                          >
                            Start Lesson
                          </Link>
                        </div>

                        <div className="lesson-row opacity-75">
                          <div className="d-flex align-items-center gap-3">
                            <div className="circle-num">3</div>
                            <div>
                              <div className="fw-bold small">
                                Lesson 3 &nbsp;<i className="bi bi-lock"></i>
                              </div>
                              <small className="text-muted"
                                ><i className="bi bi-clock"></i> 30 min</small
                              >
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-light rounded-pill px-3"
                            disabled
                          >
                            Start Lesson
                          </button>
                        </div>

                        <div className="lesson-row opacity-75">
                          <div className="d-flex align-items-center gap-3">
                            <div className="circle-num">4</div>
                            <div>
                              <div className="fw-bold small">
                                Module Quiz &nbsp;<i className="bi bi-lock"></i>
                              </div>
                              <small className="text-muted"
                                ><i className="bi bi-clock"></i> 30 min</small
                              >
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-light rounded-pill px-3"
                            disabled
                          >
                            Start Quiz
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div
                      className="lesson-row bg-light border-dashed p-4 justify-content-center text-center"
                    >
                      <div className="text-muted small fw-bold">
                        <i className="bi bi-lock-fill me-2 text-primary"></i>
                        Upgrade to Access premium layers to open further
                        details.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="h5 fw-bold mb-3">Resources</h2>
                  <button
                    className="accordion-custom-btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#resourcesPanel"
                  >
                    <span
                      ><i className="bi bi-grid-1x2 me-2"></i> View Resources</span
                    >
                  </button>
                  <div id="resourcesPanel" className="collapse mt-2">
                    <div className="card card-body custom-card small text-muted">
                      Worksheets, templates, and additional learning materials
                      are available here.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card custom-card p-4 mb-4">
                  <h3 className="h6 fw-bold mb-3">Notes</h3>
                  <Link
                    to="/student/my-notes"
                    className="btn btn-outline-secondary w-100 text-start d-flex justify-content-between align-items-center"
                  >
                    <span
                      ><i className="bi bi-question-circle me-2"></i> My Nogdfdfgfdgdgtes</span
                    >
                    <i className="bi bi-chevron-right small"></i>
                  </Link>
                </div>

                <div className="card custom-card p-4 mb-4">
                  <h3 className="h6 fw-bold mb-3">Support</h3>
                  <a
                    type="button"
                    href="#helpSelectionModal"
                    className="btn btn-outline-secondary w-100 text-start d-flex justify-content-between align-items-center"
                  >
                    <span
                      ><i className="bi bi-question-circle me-2"></i> Get Help</span
                    >
                    <i className="bi bi-chevron-right small"></i>
                  </a>
                </div>

                <div className="card custom-card p-4">
                  <h3 className="h6 fw-bold mb-3">Instructor</h3>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100"
                      className="rounded-circle"
                      width="48"
                      height="48"
                      alt="Instructor"
                    />
                    <div>
                      <h4 className="h6 fw-bold mb-0">Michael Chen</h4>
                      <small className="text-warning"
                        ><i className="bi bi-star-fill"></i> 4.5</small
                      >
                    </div>
                  </div>
                  <p className="small text-muted mb-0">
                    Tech leader and coach specializing in career transitions and
                    agile skill development paradigms.
                  </p>
                  <div className="mt-3 pt-2 border-top small">
                    <strong>Teaching Style:</strong> Interactive
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- <a href="#helpSelectionModal" className="btn btn-primary">Need Help?</a> --> */}
            {/* <a  data-bs-toggle="modal"  data-bs-target="#quizInstructionsModal" className="btn btn-primary"
              >Start Quiz Attempt</a
            >
            <a  data-bs-toggle="modal" data-bs-target="#myNotesManagementModal" className="btn btn-primary"
              >Open My Notes Workspace</a
            > */}

    <button
  type="button"
  className="btn"
  data-bs-toggle="modal"
  data-bs-target="#quizInstructionsModal"
>
  Open Quiz Instructions
</button>

<button
  type="button"
  data-bs-toggle="modal"
  data-bs-target="#myNotesManagementModal"
  className="btn btn-primary"
>
  Open My Notes Workspace
</button>
          </div>

          <HelpSelectionModal/>
          <QuizInstructionsModal/>
          <MyNotesManagementModal/>
   </>
  )
}

export default CareerPlanningWorkshop
