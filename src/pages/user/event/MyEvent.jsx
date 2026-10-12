import React from "react";
import CalendarSyncModal from "../../../components/user/eventmodal/CalendarSyncModal";
import { Link } from "react-router-dom";

const MyEvent = () => {
  return (
    <>
      <div className="gl-myevents-master-container">
        <header className="gl-myevents-main-header">
          <div className="gl-myevents-title-nav-group">
            <button
              className="gl-myevents-back-nav-circle-btn"
              aria-label="Go back"
            >
              ←
            </button>

            <div className="gl-myevents-text-identity-stack">
              <h1 className="gl-myevents-page-headline">My Events</h1>
              <p className="gl-myevents-page-subtext">
                Manage your sessions, events, and coaching appointments in one
                place.
              </p>
            </div>
          </div>
        </header>

        <div className="gl-myevents-filter-action-strip">
          <div className="gl-myevents-search-input-box">
            <span className="gl-search-icon-placeholder">🔍</span>

            <input
              type="text"
              placeholder="Search"
              aria-label="Search my events"
            />
          </div>

          <div className="gl-myevents-dropdowns-group-flex">
            <div className="gl-myevents-select-custom-wrapper">
              <select aria-label="Filter by Session Type">
                <option>Session (All)</option>
              </select>
            </div>

            <div className="gl-myevents-select-custom-wrapper">
              <select aria-label="Filter by Regions">
                <option>All Regions</option>
              </select>
            </div>

            <div className="gl-myevents-select-custom-wrapper">
              <select aria-label="Filter by Language">
                <option>Language (All)</option>
              </select>
            </div>

            <Link
              to="/student/my-event-calendar"
              className="gl-myevents-square-cal-view-btn"
              aria-label="Toggle grid or calendar view"
            >
              📅
            </Link>
          </div>
        </div>

        <main className="gl-myevents-vertical-list-stack">
          {/* Event 1 */}
          <article className="gl-myevent-row-item-card">
            <div
              className="gl-myevent-card-media-banner"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop')",
              }}
            ></div>

            <div className="gl-myevent-card-body-content">
              <h2 className="gl-myevent-item-title">
                Career Planning Workshop
              </h2>

              <p className="gl-myevent-item-tagline">
                Learn how to create a roadmap for your career success.
              </p>

              <div className="gl-myevent-meta-info-grid-row">
                <span className="gl-myevent-meta-unit">
                  📅 Friday, December 5, 2025
                </span>

                <span className="gl-myevent-meta-divider">|</span>

                <span className="gl-myevent-meta-unit">
                  🕒 2:00 PM EST (2 hours)
                </span>

                <span className="gl-myevent-meta-divider">|</span>

                <span className="gl-myevent-meta-unit">
                  📍 Virtual - Zoom
                </span>
              </div>

              <div className="gl-myevent-badge-pills-row">
                <span className="gl-myevent-badge-tag-pill">
                  Career Development
                </span>

                <span className="gl-myevent-badge-tag-pill">
                  Planning
                </span>
              </div>

              <div className="gl-myevent-footer-host-action-bar">
                <div className="gl-myevent-host-profile-block">
                  👤 Michael Chen
                </div>

                <div className="gl-myevent-action-buttons-wrapper">
                  <Link
                    to="/student/event/lesson-detail"
                    className="gl-btn-myevent-hollow-info"
                  >
                    More Info
                  </Link>

                  <button className="gl-btn-myevent-solid-join">
                    Join Now ➔
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Event 2 */}
          <article className="gl-myevent-row-item-card">
            <div
              className="gl-myevent-card-media-banner"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552581230-c01bc0d48453?q=80&w=600&auto=format&fit=crop')",
              }}
            ></div>

            <div className="gl-myevent-card-body-content">
              <h2 className="gl-myevent-item-title">
                Networking Event: Tech Professionals
              </h2>

              <p className="gl-myevent-item-tagline">
                Connect with fellow tech professionals and industry leaders.
              </p>

              <div className="gl-myevent-meta-info-grid-row">
                <span className="gl-myevent-meta-unit">
                  📅 Monday, December 8, 2025
                </span>

                <span className="gl-myevent-meta-divider">|</span>

                <span className="gl-myevent-meta-unit">
                  🕒 6:00 PM EST (3 hours)
                </span>

                <span className="gl-myevent-meta-divider">|</span>

                <span className="gl-myevent-meta-unit">
                  📍 Virtual - Zoom
                </span>
              </div>

              <div className="gl-myevent-badge-pills-row">
                <span className="gl-myevent-badge-tag-pill">
                  Technology
                </span>

                <span className="gl-myevent-badge-tag-pill">
                  Networking
                </span>
              </div>

              <div className="gl-myevent-footer-host-action-bar">
                <div className="gl-myevent-host-profile-block">
                  👤 Sarah Johnson
                </div>

                <div className="gl-myevent-action-buttons-wrapper">
                     <Link
                    to="/student/event/lesson-detail"
                    className="gl-btn-myevent-hollow-info"
                  >
                    More Info
                  </Link>

                  <button className="gl-btn-myevent-solid-join">
                    Join Now ➔
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Disabled Event */}
          <article className="gl-myevent-row-item-card gl-myevent-row-card-disabled">
            <div
              className="gl-myevent-card-media-banner"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552581230-c01bc0d48453?q=80&w=600&auto=format&fit=crop')",
              }}
            ></div>

            <div className="gl-myevent-card-body-content">
              <h2 className="gl-myevent-item-title">
                Networking Event: Tech Professionals
              </h2>

              <p className="gl-myevent-item-tagline">
                Connect with fellow tech professionals and industry leaders.
              </p>

              <div className="gl-myevent-meta-info-grid-row">
                <span className="gl-myevent-meta-unit">
                  📅 Monday, December 8, 2025
                </span>

                <span className="gl-myevent-meta-divider">|</span>

                <span className="gl-myevent-meta-unit">
                  🕒 6:00 PM EST (3 hours)
                </span>

                <span className="gl-myevent-meta-divider">|</span>

                <span className="gl-myevent-meta-unit">
                  📍 Virtual - Zoom
                </span>
              </div>

              <div className="gl-myevent-badge-pills-row">
                <span className="gl-myevent-badge-tag-pill">
                  Technology
                </span>

                <span className="gl-myevent-badge-tag-pill">
                  Networking
                </span>
              </div>

              <div className="gl-myevent-footer-host-action-bar">
                <div className="gl-myevent-host-profile-block">
                  👤 Sarah Johnson
                </div>

                <div className="gl-myevent-action-buttons-wrapper">
                  <Link
                    to="/student/event/lesson-detail"
                    className="gl-btn-myevent-hollow-info"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <a href="#calendarSyncModal"  data-bs-toggle="modal" data-bs-target="#calendarSyncModal" className="btn btn-primary">
            Sync Calendar
          </a>
        </main>
      </div>

      <CalendarSyncModal/>
    </>
  );
};

export default MyEvent;