import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGetService from "../../hooks/teacher/useGetService";

const Requests = () => {
  const [filters, setFilters] = useState({
    search: "",
    companyId: "all",
    userId: "all",
    serviceId: "all",
    status: "pending",
    page: 1,
    limit: 4,
  });

  const {
    teacherList,
    isPendingTeacherList,
    getRequestFilter,
    isPendingRequestFilter,
  } = useGetService({
    params: filters,
  });

  // Extract requests list safely
  const requests =
    (Array.isArray(teacherList?.data?.data) && teacherList.data.data) ||
    (Array.isArray(teacherList?.data?.requests) && teacherList.data.requests) ||
    (Array.isArray(teacherList?.data) && teacherList.data) ||
    (Array.isArray(teacherList?.requests) && teacherList.requests) ||
    [];

  // Pagination details
  const total =
    teacherList?.data?.total ||
    teacherList?.total ||
    (requests.length > 0 ? requests.length : 0);
  const currentPage =
    teacherList?.data?.current_page ||
    teacherList?.data?.currentPage ||
    filters.page ||
    1;
  const lastPage =
    teacherList?.data?.last_page ||
    teacherList?.data?.lastPage ||
    Math.max(1, Math.ceil(total / (filters.limit || 4)));

  // Filter options from API or defaults
  const filterOptions = getRequestFilter?.data || getRequestFilter || {};
  const companyOptions = filterOptions?.companies || [];
  const userOptions = filterOptions?.users || [];
  const serviceOptions = filterOptions?.services || [];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: 1, // Reset page when filter changes
    }));
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= lastPage && newPage !== currentPage) {
      setFilters((prev) => ({
        ...prev,
        page: newPage,
      }));
    }
  };

  const startRecord = total === 0 ? 0 : (currentPage - 1) * filters.limit + 1;
  const endRecord = Math.min(currentPage * filters.limit, total);

  return (
    <main className="content">
      <div className="page-title">
        <h1>View Requests</h1>
        <p>Review and respond to new requests</p>
      </div>

      <div className="filter-bar mt-4">
        {/* Search */}
        <div className="search-wrapper">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>

        {/* Company Dropdown */}
        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={filters.companyId}
            onChange={(e) => handleFilterChange("companyId", e.target.value)}
          >
            <option value="all">Company (All)</option>
            {companyOptions.map((comp) => (
              <option key={comp.id || comp.value} value={comp.id || comp.value}>
                {comp.name || comp.label || comp.title}
              </option>
            ))}
          </select>
        </div>

        {/* Users Dropdown */}
        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={filters.userId}
            onChange={(e) => handleFilterChange("userId", e.target.value)}
          >
            <option value="all">Users (All)</option>
            {userOptions.map((usr) => (
              <option key={usr.id || usr.value} value={usr.id || usr.value}>
                {usr.name || usr.label || usr.full_name}
              </option>
            ))}
          </select>
        </div>

        {/* Services Dropdown */}
        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={filters.serviceId}
            onChange={(e) => handleFilterChange("serviceId", e.target.value)}
          >
            <option value="all">Services (All)</option>
            {serviceOptions.map((srv) => (
              <option key={srv.id || srv.value} value={srv.id || srv.value}>
                {srv.name || srv.label || srv.title}
              </option>
            ))}
          </select>
        </div>

        {/* Status Dropdown */}
        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="requests-list">
        {isPendingTeacherList ? (
          <div className="p-5 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading requests...</p>
          </div>
        ) : requests.length === 0 ? (
          <div className="p-5 text-center text-muted">
            <i className="fa-regular fa-folder-open fa-2x mb-2 d-block"></i>
            No requests found.
          </div>
        ) : (
          requests.map((item, index) => {
            const reqId =
              item.id ||
              item.request_id ||
              item.requestId ||
              item._id ||
              item.service_request_id ||
              item.request?.id;
            const usrId =
              item?.student?.id ||
              item?.student_id ||
              item?.user_id ||
              item?.user?.id ||
              item?.userId;

            const userName =
              item.user_name ||
              item.name ||
              item.user?.name ||
              item.student?.name ||
              item.student_name ||
              "User";
            const userAvatar =
              item.user_avatar ||
              item.avatar ||
              item.user?.avatar ||
              item.student?.avatar ||
              item.user?.profile_image ||
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80";
            const serviceName =
              item.service_name ||
              item.service?.name ||
              item.service_title ||
              item.title ||
              "Tutoring Service";
            const isEscalated =
              item.is_escalated ||
              item.escalated ||
              item.status === "escalated";
            const isActionRequired =
              item.action_required || item.status === "action_required";

            return (
              <div className="request-item" key={reqId || index}>
                <div className="request-profile-section">
                  <img
                    className="request-avatar"
                    src={userAvatar}
                    alt={userName}
                  />
                  <div className="request-info-meta">
                    <div className="user-name-row">
                      <span className="user-name">{userName}</span>
                      {isEscalated && (
                        <span className="badge-escalated">Escalated</span>
                      )}
                      {isActionRequired && (
                        <span className="badge-escalated failed">
                          Action Required
                        </span>
                      )}
                    </div>
                    {usrId ? (
                      <Link
                        to={`/teacher/user-profile?userId=${usrId}`}
                        state={{ userId: usrId, from: "requests" }}
                        className="view-profile-btn"
                      >
                        View Profile
                      </Link>
                    ) : (
                      <Link
                        to="/teacher/user-profile"
                        state={{ from: "requests" }}
                        className="view-profile-btn"
                      >
                        View Profile
                      </Link>
                    )}
                    <div className="details-row">
                      <div className="detail-tag">
                        <i className="bi bi-book"></i> {serviceName}
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  className="action-btn"
                  to={
                    reqId
                      ? `/teacher/request-details?requestId=${reqId}`
                      : `/teacher/request-details`
                  }
                  state={{
                    requestId: reqId,
                    id: reqId,
                    request: item,
                    userId: usrId,
                    from: "requests",
                  }}
                  style={{
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "auto",
                    height: "auto",
                    minWidth: "max-content",
                    flexShrink: 0,
                    padding: "10px 18px",
                  }}
                >
                  <i className="fa-regular fa-eye"></i>
                  <span>View Details</span>
                </Link>
              </div>
            );
          })
        )}
      </div>

      <footer className="footer-pagination-panel">
        <div className="results-count-label">
          Showing {startRecord}-{endRecord} from {total} results
        </div>

        <ul className="custom-pagination-row">
          <li>
            <button
              type="button"
              className={`pag-nav-link-btn ${
                currentPage <= 1 ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              style={{
                border: "none",
                background: "transparent",
                cursor: currentPage <= 1 ? "not-allowed" : "pointer",
              }}
            >
              Prev
            </button>
          </li>
          {Array.from({ length: lastPage }, (_, i) => i + 1).map(
            (pageNumber) => (
              <li key={pageNumber}>
                <button
                  type="button"
                  className={`pag-numeric-circle-btn ${
                    currentPage === pageNumber ? "active-blue-node" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {pageNumber}
                </button>
              </li>
            )
          )}
          <li>
            <button
              type="button"
              className={`pag-nav-link-btn ${
                currentPage < lastPage ? "next-blue-active" : "disabled"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= lastPage}
              style={{
                border: "none",
                background: "transparent",
                cursor: currentPage >= lastPage ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default Requests;
