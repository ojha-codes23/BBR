import React from 'react'
import CareerWorkshopDetailsModal from '../../../components/user/eventmodal/CareerWorkshopDetailsModal'

const Event = () => {
  return (
    <>
         <div className="gl-events-master-container">
            <header className="gl-events-main-header">
              <div className="gl-events-brand-text-stack">
                <h1 className="gl-events-page-headline">Events</h1>
                <p className="gl-events-page-subtext">
                  Browse webinars, workshops, coaching groups, and live
                  sessions. Filter by tags, language, region, date and topic.
                </p>
              </div>
              <a
                href="#"
                data-bs-target="#careerWorkshopDetailsModal"
                data-bs-toggle="modal"
                className="gl-events-btn-registered-action"
                ><img
                  src="/images/user/super-user-dashboard/sus-basil_calendar-outline (2).svg"
                  alt=""
                />
                Registered Events</a
              >
              {/* <!-- <button type="button" className="gl-events-btn-registered-action" data-bs-toggle="modal" data-bs-target="#careerWorkshopDetailsModal"><img src="images/super-user-dashboard/basil_calendar-outline (2).svg" alt=""> Registered Events</button> --> */}
            </header>

            <div className="gl-events-filter-action-strip">
              <div className="gl-events-search-input-box">
                <span className="gl-search-icon-placeholder">
                  <img
                    src="/images/user/super-user-dashboard/Search (1).svg"
                    alt=""
                  />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  aria-label="Search events"
                />
              </div>
              <div className="gl-events-dropdowns-group-flex">
                <div className="gl-events-select-custom-wrapper">
                  <select aria-label="Filter by Session">
                    <option>Session (All)</option>
                  </select>
                </div>
                <div className="gl-events-select-custom-wrapper">
                  <select aria-label="Filter by Region">
                    <option>All Regions</option>
                  </select>
                </div>
                <div className="gl-events-select-custom-wrapper">
                  <select aria-label="Filter by Language">
                    <option>Language (All)</option>
                  </select>
                </div>
                <button
                  className="gl-events-square-cal-view-btn"
                  aria-label="Calendar view"
                >
                  <img
                    src="/images/user/super-user-dashboard/sus-basil_calendar-outline (2).svg"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <section className="gl-events-vertical-list-stack">
              <div className="gl-event-row-item-card">
                <div
                  className="gl-event-card-media-banner"
                 style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop")',
                }}
                ></div>
                <div className="gl-event-card-body-content">
                  <h2 className="gl-event-item-title">Career Planning Workshop</h2>
                  <p className="gl-event-item-tagline">
                    Learn how to create a roadmap for your career success.
                  </p>

                  <div className="gl-event-meta-info-grid-row">
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/basil_calendar-outline (2).svg"
                        alt=""
                      />
                      Friday, December 5, 2025</span
                    >
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/ion_time-outline (2).svg"
                        alt=""
                      />
                      2:00 PM EST (2 hours)</span
                    >
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/hugeicons_location.svg"
                        alt=""
                      />
                      Virtual - Zoom</span
                    >
                  </div>

                  <div className="gl-event-badge-pills-row">
                    <span className="gl-event-badge-tag-pill"
                      >Career Development</span
                    >
                    <span className="gl-event-badge-tag-pill">Planning</span>
                  </div>

                  <div className="gl-event-footer-host-action-bar">
                    <div className="gl-event-host-profile-block">
                      <img
                        src="/images/user/super-user-dashboard/su-user-icon-dash.svg"
                        alt=""
                      />
                      Michael Chen
                    </div>
                    <div className="gl-event-action-buttons-wrapper">
                      <button className="gl-btn-event-hollow-info">
                        More Info
                      </button>
                      <button className="gl-btn-event-solid-register">
                        Register Now
                        <img
                          src="/images/user/super-user-dashboard/event-right-icon.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gl-event-row-item-card">
                <div
                  className="gl-event-card-media-banner"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1552581230-c01bc0d48453?q=80&w=600&auto=format&fit=crop")',
                  }}
                ></div>
                <div className="gl-event-card-body-content">
                  <h2 className="gl-event-item-title">
                    Networking Event: Tech Professionals
                  </h2>
                  <p className="gl-event-item-tagline">
                    Connect with fellow tech professionals and industry leaders.
                  </p>

                  <div className="gl-event-meta-info-grid-row">
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/basil_calendar-outline (2).svg"
                        alt=""
                      />
                      Monday, December 8, 2025</span
                    >
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/ion_time-outline (2).svg"
                        alt=""
                      />
                      6:00 PM EST (3 hours)</span
                    >
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/hugeicons_location.svg"
                        alt=""
                      />
                      Virtual - Zoom</span
                    >
                  </div>

                  <div className="gl-event-badge-pills-row">
                    <span className="gl-event-badge-tag-pill">Technology</span>
                    <span className="gl-event-badge-tag-pill">Networking</span>
                  </div>

                  <div className="gl-event-footer-host-action-bar">
                    <div className="gl-event-host-profile-block">
                      <img
                        src="/images/user/super-user-dashboard/su-user-icon-dash.svg"
                        alt=""
                      />
                      Sarah Johnson
                    </div>
                    <div className="gl-event-action-buttons-wrapper">
                      <button className="gl-btn-event-hollow-info">
                        More Info
                      </button>
                      <button className="gl-btn-event-solid-register">
                        Register Now
                        <img
                          src="/images/user/super-user-dashboard/event-right-icon.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gl-event-row-item-card">
                <div
                  className="gl-event-card-media-banner"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop")',
                  }}
                >
                  <span className="gl-event-premium-badge-lock">🔒 Premium</span>
                </div>
                <div className="gl-event-card-body-content">
                  <h2 className="gl-event-item-title">Grant Writing MasterclassName</h2>
                  <p className="gl-event-item-tagline">
                    Advanced techniques for writing winning grant proposals.
                  </p>

                  <div className="gl-event-meta-info-grid-row">
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/basil_calendar-outline (2).svg"
                        alt=""
                      />
                      Friday, December 12, 2025</span
                    >
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/ion_time-outline (2).svg"
                        alt=""
                      />
                      10:00 AM EST (4 hours)</span
                    >
                    <span className="gl-meta-info-unit-pill"
                      ><img
                        src="/images/user/super-user-dashboard/hugeicons_location.svg"
                        alt=""
                      />
                      Virtual - Zoom</span
                    >
                  </div>

                  <div className="gl-event-badge-pills-row">
                    <span className="gl-event-badge-tag-pill"
                      >Career Development</span
                    >
                    <span className="gl-event-badge-tag-pill">Grant Writing</span>
                  </div>

                  <div className="gl-event-footer-host-action-bar">
                    <div className="gl-event-host-profile-block">
                      <img
                        src="/images/user/super-user-dashboard/su-user-icon-dash.svg"
                        alt=""
                      />
                      Emily Rodriguez
                    </div>
                    <div className="gl-event-action-buttons-wrapper">
                      <button className="gl-btn-event-hollow-info">
                        More Info
                      </button>
                      <button className="gl-btn-event-solid-upgrade">
                        Upgrade to Register
                        <img
                          src="/images/user/super-user-dashboard/event-right-icon.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="gl-events-recommended-outer-deck">
              <h2 className="gl-events-section-subheading">Recommended Events</h2>
              <p className="gl-events-section-subcaption">
                Upcoming events you might enjoy
              </p>

              <div className="gl-events-vertical-list-stack">
                <div className="gl-event-row-item-card">
                  <div
                    className="gl-event-card-media-banner"
                 style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop")',
                }}
                  ></div>
                  <div className="gl-event-card-body-content">
                    <h3 className="gl-event-item-title">Women in Tech Meetup</h3>
                    <p className="gl-event-item-tagline">
                      Friday, December 5, 2025 |
                      <img
                        src="/images/user/super-user-dashboard/ion_time-outline (2).svg"
                        alt=""
                      />
                      2:00 PM EST (2 hours) |
                      <img
                        src="/images/user/super-user-dashboard/hugeicons_location.svg"
                        alt=""
                      />
                      Virtual - Zoom
                    </p>
                    <div className="gl-event-badge-pills-row">
                      <span className="gl-event-badge-tag-pill"
                        >Career Development</span
                      >
                      <span className="gl-event-badge-tag-pill">Planning</span>
                    </div>
                    <div className="gl-event-footer-host-action-bar">
                      <div className="gl-event-host-profile-block"></div>
                      <div className="gl-event-action-buttons-wrapper">
                        <button className="gl-btn-event-hollow-info">
                          More Info
                        </button>
                        <button className="gl-btn-event-solid-register">
                          Register Now
                          <img
                            src="/images/user/super-user-dashboard/event-right-icon.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <footer className="gl-events-pagination-footer-row-bar">
              <div className="gl-pagination-show-selector-block">
                Show
                <select aria-label="Items per page">
                  <option>10</option>
                  <option>25</option>
                </select>
                Showing 1-4 from 50 results
              </div>
              <div className="gl-pagination-numeric-pills-flex">
                <button className="gl-page-ctrl-arrow-btn" disabled>Prev</button>
                <button className="gl-numeric-pill-item gl-pill-active">1</button>
                <button className="gl-numeric-pill-item">2</button>
                <button className="gl-numeric-pill-item">3</button>
                <span className="gl-pagination-ellipsis-break">...</span>
                <button className="gl-numeric-pill-item">10</button>
                <button className="gl-page-ctrl-arrow-btn gl-arrow-active">
                  Next
                </button>
              </div>
            </footer>
          </div>


          <CareerWorkshopDetailsModal />
    </>
  )
}

export default Event
