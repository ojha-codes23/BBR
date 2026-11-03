import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import DeleteSowTemplate from "../../components/teacher/DeleteSowTemplate";
import DeleteContractTemplate from "../../components/teacher/DeleteContractTemplate";
import useService from "../../hooks/teacher/useService";

const SowContract = () => {
  const {
    templatList,
    isPendingTempList,
    templateAction,
    isPendingTemplateAction,
  } = useService();

  // Tab State: 'sow' | 'contract'
  const [activeTab, setActiveTab] = useState("sow");

  // Template Data & Pagination State
  const [templates, setTemplates] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 6 });
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("active");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  // Dropdown menu state
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle Dropdown menu
  const toggleDropdown = (dropdownId) => {
    setOpenDropdown((previous) => (previous === dropdownId ? null : dropdownId));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = () => {
      setOpenDropdown(null);
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Handle Tab Switch
  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setPage(1);
      setSearch("");
      setDebouncedSearch("");
      setFilterStatus("active");
    }
  };

  // Fetch templates from API
  const fetchTemplates = useCallback(async () => {
    try {
      const payload = {
        templateType: activeTab,
        filterStatus: filterStatus,
        search: debouncedSearch,
        page,
        limit,
      };

      const res = await templatList(payload);
      if (res?.success || res?.code === 200 || Array.isArray(res?.data)) {
        setTemplates(res?.data || []);
        if (res?.meta) {
          setMeta(res.meta);
        } else {
          setMeta({
            total: res?.data?.length || 0,
            page,
            limit,
          });
        }
      } else {
        setTemplates([]);
      }
    } catch (error) {
      console.error("Failed to fetch templates:", error);
      setTemplates([]);
    }
  }, [activeTab, filterStatus, debouncedSearch, page, limit, templatList]);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  // Action handling (active, inactive, duplicate, delete)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [templateToDelete, setTemplateToDelete] = useState(null);

  const handleOpenDelete = (item) => {
    setTemplateToDelete(item);
    setShowDeleteModal(true);
    setOpenDropdown(null);
  };

  const handleCloseDelete = () => {
    if (isPendingTemplateAction) return;
    setShowDeleteModal(false);
    setTemplateToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (!templateToDelete?.id) return;
    try {
      const res = await templateAction({
        templateId: templateToDelete.id,
        action: "delete",
      });
      if (res?.success || res?.code === 200) {
        toast.success(res?.message || "Template deleted successfully!");
        setShowDeleteModal(false);
        setTemplateToDelete(null);
        fetchTemplates();
      } else {
        toast.error(res?.message || "Failed to delete template.");
      }
    } catch (err) {
      console.error("Failed to delete template:", err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to delete template."
      );
    }
  };

  const handleTemplateAction = async (targetId, action) => {
    try {
      const res = await templateAction({ templateId: targetId, action });
      if (res?.success || res?.code === 200) {
        toast.success(res?.message || `Template ${action}d successfully!`);
        fetchTemplates();
      } else {
        toast.error(res?.message || `Failed to ${action} template.`);
      }
    } catch (err) {
      console.error(`Failed to execute template action (${action}):`, err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          `Failed to ${action} template.`
      );
    } finally {
      setOpenDropdown(null);
    }
  };

  // Derived Pagination
  const total = meta?.total ?? templates.length ?? 0;
  const currentLimit = meta?.limit ?? limit ?? 6;
  const currentPage = meta?.page ?? page ?? 1;
  const totalPages = Math.max(1, Math.ceil(total / currentLimit));
  const startRecord = total === 0 ? 0 : (currentPage - 1) * currentLimit + 1;
  const endRecord = Math.min(currentPage * currentLimit, total);

  // Pagination buttons builder
  const renderPaginationButtons = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages.map((p, idx) => {
      if (p === "...") {
        return (
          <li key={`ellipsis-${idx}`} className="page-item disabled">
            <span className="page-link pager-ellipsis">...</span>
          </li>
        );
      }
      return (
        <li
          key={`page-${p}`}
          className={`page-item ${p === currentPage ? "active" : ""}`}
        >
          <button
            type="button"
            className="page-link pager-num-trigger"
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        </li>
      );
    });
  };

  return (
    <>
      <main className="gl-content-body">
        {/* <!-- PRIMARY MAIN HEADER --> */}
        <div className="glnc-header-row">
          <div>
            <h1 className="glnc-page-title">SOW & Contract Templates</h1>
            <p className="glnc-page-subtitle">
              Manage reusable statement of work and contract templates
            </p>
          </div>
          <Link to="/teacher/draft?tab=draft" className="glnc-btn-new ms-auto me-3">
            SOW Drafts
          </Link>
          <Link to="/teacher/create-template" className="glnc-btn-new">
            <i className="bi bi-plus-lg"></i> New Template
          </Link>
        </div>

        {/* <!-- TABS ROW SELECTION MATRIX --> */}
        <div className="glnc-tab-pill-box">
          <button
            type="button"
            className={`glnc-tab-pill ${activeTab === "sow" ? "active" : ""}`}
            onClick={() => handleTabChange("sow")}
          >
            SOW Templates
          </button>
          <button
            type="button"
            className={`glnc-tab-pill ${activeTab === "contract" ? "active" : ""
              }`}
            onClick={() => handleTabChange("contract")}
          >
            Contract Templates
          </button>
        </div>

        {/* <!-- FILTER BAR INTERFACE --> */}
        <div className="filter-bar mt-4">
          <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* <!-- Status Dropdown --> */}
          <div className="custom-select-wrapper">
            <select
              className="custom-select"
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">
                {activeTab === "sow" ? "All SOW" : "All Contract"}
              </option>
              <option value="active">Active Template</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* ================= TEMPLATES PANEL ================= */}
        <div
          id={`${activeTab}-panel`}
          className="row g-4 tab-content-panel active-panel mt-2"
        >
          {isPendingTempList ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2 text-muted small">Loading templates...</p>
            </div>
          ) : templates.length === 0 ? (
            <div className="col-12 text-center py-5">
              <div className="py-4">
                <i
                  className="bi bi-file-earmark-text text-muted"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="mt-3 text-muted">
                  No {activeTab === "sow" ? "SOW" : "Contract"} Templates Found
                </h5>
                <p className="text-secondary small">
                  {search || filterStatus !== "all"
                    ? "Try adjusting your search or filters."
                    : "Click 'New Template' to create your first template."}
                </p>
              </div>
            </div>
          ) : (
            templates.map((item) => {
              const statusLower = item.status?.toLowerCase() || "";
              const badgeClass =
                statusLower === "active"
                  ? "status-active"
                  : statusLower === "draft"
                    ? "status-draft"
                    : "status-draft";

              return (
                <div className="col-md-6" key={item.id}>
                  <div className="glnc-template-card">
                    <button
                      type="button"
                      className="glnc-card-triple-dot-btn"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleDropdown(item.id);
                      }}
                    >
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>

                    <div
                      className={`glnc-context-dropdown ${openDropdown === item.id ? "show" : ""
                        }`}
                    >
                      <Link
                        to={`/teacher/create-template?templateId=${item.id}&type=${activeTab}`}
                        className="glnc-dropdown-item text-decoration-none"
                      >
                        <i className="bi bi-pencil"></i> Edit
                      </Link>
                      <button
                        type="button"
                        className="glnc-dropdown-item visibility-btn-trigger"
                        data-template-type={activeTab.toUpperCase()}
                        disabled={isPendingTemplateAction}
                        onClick={() => handleTemplateAction(item.id, "duplicate")}
                      >
                        <i className="bi bi-copy"></i> Duplicate
                      </button>
                      {statusLower === "active" ? (
                        <button
                          type="button"
                          className="glnc-dropdown-item text-danger"
                          disabled={isPendingTemplateAction}
                          onClick={() => handleTemplateAction(item.id, "inactive")}
                        >
                          <i className="bi bi-ban"></i> Inactive
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="glnc-dropdown-item text-success"
                          disabled={isPendingTemplateAction}
                          onClick={() => handleTemplateAction(item.id, "active")}
                        >
                          <i className="bi bi-check-circle"></i> Activate
                        </button>
                      )}
                      <button
                        type="button"
                        className="glnc-dropdown-item delete-trigger"
                        onClick={() => handleOpenDelete(item)}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>

                    <div className="glnc-card-title-row">
                      <h3 className="glnc-card-title">{item.templateName}</h3>
                      {item.status && (
                        <span className={`glnc-status-badge ${badgeClass}`}>
                          {item.status}
                        </span>
                      )}
                    </div>

                    <p className="glnc-card-subtitle" title={item.description}>
                      {item.description || "No description provided."}
                    </p>

                    <div className="glnc-meta-matrix">
                      <div className="glnc-meta-col">
                        <img
                          src="/images/teacher/super-user-dashboard/calendar-icon-blue.svg"
                          alt=""
                        />
                        <span>{item.createdDate || "N/A"}</span>
                      </div>

                      {item.estimate && (
                        <>
                          <div className="glnc-vertical-divider"></div>
                          <div className="glnc-meta-col">
                            <i className="bi bi-clock"></i>{" "}
                            <span>Estimate {item.estimate}</span>
                          </div>
                        </>
                      )}

                      {item.version && (
                        <div className="glnc-meta-col">
                          <img
                            src="/images/teacher/super-user-dashboard/version-icon.svg"
                            alt=""
                          />
                          <span>Version {item.version}</span>
                        </div>
                      )}
                    </div>

                    {Array.isArray(item.tags) && item.tags.length > 0 && (
                      <div className="glnc-tag-pool">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="glnc-badge-tag">
                            {typeof tag === "object" ? tag.name || tag.label : tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}

          {/* PAGINATION */}
          {templates.length > 0 && (
            <div className="col-md-12">
              <div className="gl-matrix-footer-pagination">
                <div className="gl-pagination-left-side">
                  <span className="gl-pagination-lbl">Show</span>
                  <div className="gl-dropdown-wrapper mini-select-box">
                    <select
                      className="gl-pipeline-select select-mini"
                      value={limit}
                      onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(1);
                      }}
                    >
                      <option value="6">6</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                    <i className="fas fa-chevron-down dropdown-arrow-icon"></i>
                  </div>
                  <span className="gl-pagination-counter-info">
                    Showing {startRecord}-{endRecord} from {total} results
                  </span>
                </div>

                <div className="gl-pagination-right-side">
                  <nav aria-label="Data Grid Navigation Pack">
                    <ul className="pagination gl-custom-pager-list">
                      <li
                        className={`page-item ${currentPage <= 1 ? "disabled" : ""
                          }`}
                      >
                        <button
                          type="button"
                          className="page-link pager-trigger-prev"
                          disabled={currentPage <= 1}
                          onClick={() =>
                            setPage((p) => Math.max(1, p - 1))
                          }
                        >
                          Prev
                        </button>
                      </li>
                      {renderPaginationButtons()}
                      <li
                        className={`page-item ${currentPage >= totalPages ? "disabled" : ""
                          }`}
                      >
                        <button
                          type="button"
                          className="page-link pager-trigger-next"
                          disabled={currentPage >= totalPages}
                          onClick={() =>
                            setPage((p) => Math.min(totalPages, p + 1))
                          }
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {activeTab === "sow" ? (
        <DeleteSowTemplate
          show={showDeleteModal}
          onClose={handleCloseDelete}
          onConfirm={handleConfirmDelete}
          isPending={isPendingTemplateAction}
        />
      ) : (
        <DeleteContractTemplate
          show={showDeleteModal}
          onClose={handleCloseDelete}
          onConfirm={handleConfirmDelete}
          isPending={isPendingTemplateAction}
        />
      )}
    </>
  );
};

export default SowContract;
