import React from 'react'
import ReviewDetailsModal from '../../../components/user/eventmodal/ReviewDetailsModal'

const MyEventCalendar = () => {
  return (
    <>
           <main className="calendar-board-card">

               <header className="gl-events-main-header">
              <div className="gl-events-brand-text-stack">
                <h1 className="gl-events-page-headline">My Registered Events</h1>
                <p className="gl-events-page-subtext">
                 Manage your sessions, events, and coaching appointments in one place.
                </p>
              </div>
              {/* <a
                href="#"
                data-bs-target="#careerWorkshopDetailsModal"
                data-bs-toggle="modal"
                className="gl-events-btn-registered-action"
                ><img
                  src="/images/user/super-user-dashboard/sus-basil_calendar-outline (2).svg"
                  alt=""
                />
                Registered Events</a
              > */}
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
        
        {/* <!-- Month Matrix Changer Bar --> */}
        <div className="calendar-month-navigator">
            <button className="nav-circle-arrow-btn"><i className="fa-solid fa-chevron-left"></i></button>
            <span className="current-month-label text-center">December 2025</span>
            <button className="nav-circle-arrow-btn"><i className="fa-solid fa-chevron-right"></i></button>
        </div>

        {/* <!-- Structural Calendar Render Grid Block --> */}
        <table className="calendar-grid-table">
            <thead>
                <tr>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Row Week 1 --> */}
                <tr>
                    <td><span className="cell-day-number faded-date">30</span></td>
                    <td><span className="cell-day-number faded-date">01</span></td>
                    <td>
                        <span className="cell-day-number active-selected-day-badge">02</span>
                        {/* Clickable Time Slot Triggers the SAT Review Modal Inside */}
                        <button className="event-time-pill blue-type" data-bs-toggle="modal" data-bs-target="#satReviewDetailsModal">10:00 AM</button>
                    </td>
                    <td><span className="cell-day-number">03</span></td>
                    <td><span className="cell-day-number">04</span></td>
                    <td>
                        <span className="cell-day-number">05</span>
                        <button className="event-time-pill blue-type" data-bs-toggle="modal" data-bs-target="#satReviewDetailsModal">02:00 PM</button>
                    </td>
                    <td><span className="cell-day-number">06</span></td>
                </tr>
                {/* <!-- Row Week 2 --> */}
                <tr>
                    <td><span className="cell-day-number">07</span></td>
                    <td>
                        <span className="cell-day-number">08</span>
                        <button className="event-time-pill blue-type" data-bs-toggle="modal" data-bs-target="#satReviewDetailsModal">10:00 AM</button>
                        <button className="event-time-pill yellow-type" data-bs-toggle="modal" data-bs-target="#satReviewDetailsModal">01:00 PM</button>
                    </td>
                    <td><span className="cell-day-number">09</span></td>
                    <td>
                        <span className="cell-day-number">10</span>
                        <button className="event-time-pill blue-type" data-bs-toggle="modal" data-bs-target="#satReviewDetailsModal">01:00 PM</button>
                    </td>
                    <td><span className="cell-day-number">11</span></td>
                    <td><span className="cell-day-number">12</span></td>
                    <td><span className="cell-day-number">13</span></td>
                </tr>
                {/* <!-- Row Week 3 --> */}
                <tr>
                    <td><span className="cell-day-number">14</span></td>
                    <td><span className="cell-day-number">15</span></td>
                    <td><span className="cell-day-number">16</span></td>
                    <td><span className="cell-day-number">17</span></td>
                    <td><span className="cell-day-number">18</span></td>
                    <td><span className="cell-day-number">19</span></td>
                    <td><span className="cell-day-number">20</span></td>
                </tr>
                {/* <!-- Row Week 4 --> */}
                <tr>
                    <td><span className="cell-day-number">21</span></td>
                    <td><span className="cell-day-number">22</span></td>
                    <td><span className="cell-day-number">23</span></td>
                    <td><span className="cell-day-number">24</span></td>
                    <td><span className="cell-day-number">25</span></td>
                    <td><span className="cell-day-number">26</span></td>
                    <td><span className="cell-day-number">27</span></td>
                </tr>
                {/* <!-- Row Week 5 --> */}
                <tr>
                    <td><span className="cell-day-number">28</span></td>
                    <td><span className="cell-day-number">29</span></td>
                    <td><span className="cell-day-number">30</span></td>
                    <td><span className="cell-day-number">31</span></td>
                    <td><span className="cell-day-number faded-date">01</span></td>
                    <td><span className="cell-day-number faded-date">02</span></td>
                    <td><span className="cell-day-number faded-date">03</span></td>
                </tr>
            </tbody>
        </table>

    </main>

    <ReviewDetailsModal/>
    </>
  )
}

export default MyEventCalendar
