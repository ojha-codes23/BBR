import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useServices from "../../../hooks/user/useServices";
import Pagination from "../../../components/common/Pagination";

// Dropdown filter options array
const STATUS_OPTIONS = [
  "All Status",
  "Pending",
  "Approved",
  "In Progress",
  "Closed",
  "Accepted"
];

const MyServiceRequest = () => {
  const navigate = useNavigate();

  // API hook
  const { userRequestedServicesAsync, isRequestedServiceLoading } =
    useServices();

  // States
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(10)
  const [pagination,setPagination]=useState({})

  // 1. API se service requests fetch karna
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await userRequestedServicesAsync();
        const list =
          response?.data?.services ||
          response?.services ||
          response?.data ||
          [];
        setServices(Array.isArray(list) ? list : []);
        setPagination(response?.data?.pagination || {});
      } catch (error) {
        console.log("Error fetching service requests:", error);
      }
    };

    fetchServices();
  }, [page,limit]);

  // 2. Search aur Status filter logic
  const filteredServices = services.filter((item) => {
    // Search match (service_name, subject_topic ya request_number)
    const search = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !search ||
      item?.service_name?.toLowerCase().includes(search) ||
      item?.subject_topic?.toLowerCase().includes(search) ||
      item?.request_number?.toString().includes(search);

    // Status match
    const normalizedItemStatus = (item?.status || "pending")
      .toLowerCase()
      .replace("-", "_");
    const normalizedSelected = selectedStatus.toLowerCase().replace(" ", "_");

    const matchesStatus =
      selectedStatus === "All Status" ||
      normalizedItemStatus === normalizedSelected;

    return matchesSearch && matchesStatus;
  });

      const totalPages = Math.ceil(filteredServices.length / limit);

      const paginatedServices = filteredServices.slice(
        (page - 1) * limit,
        page * limit
      );


  // const handleFillSow=(data)=>{
  //     navigate("/student/sow-detail-1",{state:{{
  //        serviceData:data
  //     }}})
  // }

  const handleFillSow = (data) => {
   navigate("/student/sow-detail-1", {
    state: {
      serviceData: data,
    },
    });
  };

  return (
    <div className="gl-dashboard-view-container">
      {/* Header: Back Button + Title */}
      <div className="gl-main-dashboard-header">
        <div className="gl-header-identity-group">
          <button
            type="button"
            className="gl-circle-back-trigger border-0 bg-transparent p-0"
            // onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            {/* <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 19"></polyline>
            </svg> */}

         <Link href="/student/dashboard" className="srv-req-back-btn" aria-label="Go back">
          <img src="/images/user/super-user-dashboard/left-icon-btn.svg" alt=""/>
        </Link>
          </button>
          <div className="gl-header-meta-titles">
            <h1 className="gl-view-primary-title">My Service Request</h1>
            <p className="gl-view-subtitle-caption">
              Track your coaching, mentorship, and support requests in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Toolbar: Search + Status Filter Dropdown + New Request */}
      <div className="gl-dashboard-toolbar-strip sp-bt">
        {/* Search Input */}
        <div className="gl-search-bar-modular-input">
          <span className="gl-lens-absolute-svg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            className="gl-search-native-field"
            placeholder="Search by topic or service"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Right Actions: Filter Dropdown & New Request Button */}
        <div className="gl-header-utility-actions">
          {/* Status Dropdown Filter */}
          <div className="position-relative">
            <div
              className="gl-facade-filter-badge"
              style={{ cursor: "pointer" }}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                className="me-1"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <span>{selectedStatus}</span>
            </div>

            {/* Dropdown Menu mapped cleanly from array */}
            {isDropdownOpen && (
              <div
                className="dropdown-menu show shadow-sm border mt-1"
                style={{
                  position: "absolute",
                  right: 0,
                  zIndex: 1000,
                  borderRadius: "8px",
                  minWidth: "150px",
                }}
              >
                {STATUS_OPTIONS.map((status) => (
                  <button
                    key={status}
                    type="button"
                    className={`dropdown-item small py-2 px-3 ${
                      selectedStatus.toLocaleLowerCase() === status ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedStatus(status);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/student/new-requested-service"
            className="gl-solid-action-blue-btn text-decoration-none"
          >
            + New Request
          </Link>
        </div>
      </div>

      {/* Cards List */}
      <div className="gl-cards-feed-stream-wrapper">
        {isRequestedServiceLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="text-muted mt-2 small">Loading your requests...</p>
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="text-center py-5 bg-white rounded-3 border p-4 mb-4">
            <h4 className="h6 fw-bold text-dark mt-2">
              No Service Requests Found
            </h4>
            {/* <p className="text-muted small mb-3">
              No service requests match your search or filter.
            </p>
            <Link
              to="/student/new-requested-service"
              className="btn btn-sm btn-primary"
            >
              + Create New Request
            </Link> */}
          </div>
        ) : (
          paginatedServices.map((item) => {
            const status = (item?.status || "pending").toLowerCase();
            const providerName =
              Array.isArray(item?.providers) && item.providers.length > 0
                ? item.providers.map((p) => p.name).join(", ")
                : "Pending Assignment";

            const submittedDate = item?.created_at
              ? new Date(item.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "N/A";

              const UpdatedDate = item?.created_at
              ? new Date(item.updated_at
).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "N/A";

            return (
              <div className="gl-modular-request-card" key={item.id}>
                <div className="gl-request-card-flex-node">
                  {/* Icon */}
                  <div className="gl-icon-category-badge-box">
                    <img
                      src="/images/user/super-user-dashboard/fluent_ratio-one-regular.svg"
                      alt="Service Icon"
                    />
                  </div>

                  {/* Content Block */}
                  <div className="gl-request-card-main-data-block position-relative">
                    <div className="gl-card-title-header-row">
                      <h3 className="gl-request-item-title">
                        {item.service_name || item.subject_topic}
                      </h3>
                                <span
                      className={`gl-status-pill-badge skin-${
                        status === "in_progress"
                          ? "in-progress"
                          : status === "accepted"
                          ? "pending"
                          : status
                      }`}
                    >
                        {item.status==="accepted"?"pending":status || "Pending"}
                      </span>
                    </div>

                    <p className="gl-request-item-desc-text">
                      {item.description ||
                        item.subject_topic ||
                        "Service Request"}
                    </p>

                    {/* Metadata Grid */}
                    <div className="gl-card-meta-grid-three-column">
                     {status !== "pending" && <div className="gl-grid-meta-cell">
                        <strong>Provider:</strong> {providerName}
                      </div>}
                      { <div className="gl-grid-meta-cell">
                        <strong>Submitted:</strong> {submittedDate}
                      </div>}
                      {status !== "pending" && <div className="gl-grid-meta-cell text-md-end">
                        {/* <strong>Request #:</strong>{" "}
                        {item.request_number || item.id} */}
                        <strong>Last Updated:</strong> {UpdatedDate}
                      </div>}
                    </div>

                    {/* Action buttons based on status */}
                    <div className="gl-card-action-triggers-row gap-3">
                      {status === "approved" && (
                        <Link
                          to="/student/project-support"
                          className="gl-btn-solid-green-interactive text-decoration-none"
                        >
                          Start Learning →
                        </Link>
                      )}
                      {(status === "in_progress" ||
                        status === "in-progress") && (
                          <>

                           <button type="button" class="gl-btn-outline-red-destructive">Cancel
                               Request</button>
                            <Link
                          to="/student/project-support"
                          className="gl-btn-solid-blue-interactive text-decoration-none"
                        >
                          Resume Learning →
                        </Link>
                          </>
                        
                          
                      )}
                      {status === "accepted" && (
                       <>
                       
                        {/* <Link
                          to="/student/sow-detail-1"
                          className="gl-btn-solid-red-interactive text-decoration-none"
                        >
                          Cancel Request
                        </Link> */}
                        <button type="button" class="gl-btn-outline-red-destructive">Cancel
                          Request</button>

                        <button
                          className="gl-btn-solid-blue-interactive text-decoration-none"
                          onClick={()=>handleFillSow(item)}
                        >
                          Fill SOW Now →
                        </button>

                         {/* <button
                          className="gl-btn-solid-blue-interactive text-decoration-none"
                          onClick={()=>handleFillSow(item)}
                        >
                          Provider Agreement
                        </button> */}
                       </>
                      )}
                      {status === "pending" && (
                        <button
                          type="button"
                          className="gl-btn-flat-grey-disabled"
                          disabled
                        >
                          Request Pending
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
        <Pagination
             currentPage={page}
              totalResults={filteredServices.length}
              itemsPerPage={limit}
              totalPages={totalPages}
              onPageChange={(newPage) => setPage(newPage)}
        />
    </div>
  );
};

export default MyServiceRequest;
