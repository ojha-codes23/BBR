import React from 'react'
import SatReviewModal from '../../components/teacher/SatReviewModal'

const Calendar = () => {
    return (
        <>
            <div className="main-calendar-container">

                {/* <!-- Top Navigation Filter Header Section --> */}
                <header className="calendar-top-header">
                    <div className="title-block">
                        <h1>My Calendar</h1>
                        <p>Manage your sessions, events, and coaching appointments in one place.</p>
                    </div>

                    <div className="controls-filter-group">
                        <div className="search-input-wrapper">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <button className="custom-filter-dropdown">Event (All) <i
                            className="fa-solid fa-caret-down ms-1"></i></button>
                        <button className="custom-filter-dropdown">All Regions <i
                            className="fa-solid fa-caret-down ms-1"></i></button>
                        <button className="custom-filter-dropdown">Language (All) <i
                            className="fa-solid fa-caret-down ms-1"></i></button>
                        <button className="blue-square-icon-btn">
                            <img src="/images/teacher/super-user-dashboard/calendar-icon.svg" alt="" />
                               
                        </button>
                    </div>
                </header>

                {/* <!-- Main Dynamic Calendar Dashboard Framework Canvas --> */}
                <main className="calendar-board-card">

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
                                    {/* <!-- Clickable Time Slot Triggers the SAT Review Modal Inside --> */}
                                    <button className="event-time-pill blue-type" data-bs-toggle="modal"
                                        data-bs-target="#satReviewDetailsModal">10:00 AM</button>
                                </td>
                                <td><span className="cell-day-number">03</span></td>
                                <td><span className="cell-day-number">04</span></td>
                                <td>
                                    <span className="cell-day-number">05</span>
                                    <button className="event-time-pill blue-type" data-bs-toggle="modal"
                                        data-bs-target="#satReviewDetailsModal">02:00 PM</button>
                                </td>
                                <td><span className="cell-day-number">06</span></td>
                            </tr>
                            {/* <!-- Row Week 2 --> */}
                            <tr>
                                <td><span className="cell-day-number">07</span></td>
                                <td>
                                    <span className="cell-day-number">08</span>
                                    <button className="event-time-pill blue-type" data-bs-toggle="modal"
                                        data-bs-target="#satReviewDetailsModal">10:00 AM</button>
                                    <button className="event-time-pill yellow-type" data-bs-toggle="modal"
                                        data-bs-target="#satReviewDetailsModal">01:00 PM</button>
                                </td>
                                <td><span className="cell-day-number">09</span></td>
                                <td>
                                    <span className="cell-day-number">10</span>
                                    <button className="event-time-pill blue-type" data-bs-toggle="modal"
                                        data-bs-target="#satReviewDetailsModal">01:00 PM</button>
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
            </div>

            <SatReviewModal />
        </>
    )
}

export default Calendar