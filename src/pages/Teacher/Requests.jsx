import React from 'react'
import { Link } from 'react-router-dom'

const Requests = () => {
  return (
    <main className="content">
    <div className="page-title">
      <h1>View Requests</h1>
      <p>Review and respond to new requests</p>
    </div>


    <div className="filter-bar mt-4">
      <div className="search-wrapper">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
      </div>

      {/* <!-- Company Dropdown --> */}
      <div className="custom-select-wrapper">
        <select className="custom-select">
          <option value="all">Company (All)</option>
          <option value="1">Company Alpha</option>
          <option value="2">Company Beta</option>
        </select>
      </div>

      {/* <!-- Users Dropdown --> */}
      <div className="custom-select-wrapper">
        <select className="custom-select">
          <option value="all">Users (All)</option>
          <option value="1">Admin</option>
          <option value="2">Subscriber</option>
        </select>
      </div>

      {/* <!-- Services Dropdown --> */}
      <div className="custom-select-wrapper">
        <select className="custom-select">
          <option value="all">Services (All)</option>
          <option value="1">Consulting</option>
          <option value="2">Support</option>
        </select>
      </div>

      {/* <!-- Status / Pending Dropdown --> */}
      <div className="custom-select-wrapper">
        <select className="custom-select">
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>

    <div className="requests-list">
      <div className="request-item">
        <div className="request-profile-section">
          <img className="request-avatar"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            alt="Emma Wilson" />
          <div className="request-info-meta">
            <div className="user-name-row">
              <span className="user-name">Emma Wilson</span>
              <span className="badge-escalated">Escalated</span>
            </div>
            <Link to="/teacher/user-profile" className="view-profile-btn">View Profile</Link>
            <div className="details-row">
              <div className="detail-tag">
                <i className="bi bi-book"></i> Math Tutoring
              </div>
          
            </div>
          </div>
        </div>
        <Link className="action-btn" to="/teacher/request-details">
          <i className="fa-regular fa-eye"></i> View Details
        </Link>
      </div>

      <div className="request-item">
        <div className="request-profile-section">
          <img className="request-avatar"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
            alt="Haylie Lubin" />
          <div className="request-info-meta">
            <div className="user-name-row">
              <span className="user-name">Haylie Lubin</span>
            </div>
            <Link to="/teacher/user-profile" className="view-profile-btn">View Profile</Link>
            <div className="details-row">
              <div className="detail-tag">
                <i className="bi bi-book"></i> Math Tutoring
              </div>
             
            </div>
          </div>
        </div>
        <Link className="action-btn" to="/teacher/request-details">
          <i className="fa-regular fa-eye"></i> View Details
        </Link>
      </div>

      <div className="request-item">
        <div className="request-profile-section">
          <img className="request-avatar"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            alt="Abram Bergson" />
          <div className="request-info-meta">
            <div className="user-name-row">
              <span className="user-name">Abram Bergson</span>
              <span className="badge-escalated failed">Action Required</span>
            </div>
            <Link to="/teacher/user-profile" className="view-profile-btn">View Profile</Link>
            <div className="details-row">
              <div className="detail-tag">
                <i className="bi bi-book"></i> Math Tutoring
              </div>
              
            </div>
          </div>
        </div>
        <Link className="action-btn" to="/teacher/request-details">
          <i className="fa-regular fa-eye"></i> View Details
        </Link>
      </div>
    </div>
    <footer className="footer-pagination-panel">
      <div className="results-count-label">
        Showing 4 from 50 results
      </div>

      <ul className="custom-pagination-row">
        <li><span className="pag-nav-link-btn">Prev</span></li>
        <li><a href="#" className="pag-numeric-circle-btn active-blue-node">1</a></li>
        <li><a href="#" className="pag-numeric-circle-btn">2</a></li>
        <li><a href="#" className="pag-numeric-circle-btn">3</a></li>
        <li><span className="text-muted px-1">...</span></li>
        <li><a href="#" className="pag-numeric-circle-btn">10</a></li>
        <li><a href="#" className="pag-nav-link-btn next-blue-active">Next</a></li>
      </ul>
    </footer>
  </main>
  )
}

export default Requests