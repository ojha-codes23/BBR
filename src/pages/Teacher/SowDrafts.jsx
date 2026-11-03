import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import DeleteSowTemplate from "../../components/teacher/DeleteSowTemplate";
import useService from "../../hooks/teacher/useService";

const SowDrafts = () => {
  const { templatList, isPendingTempList, templateAction, isPendingTemplateAction } =
    useService();

  // Template Data & Pagination State
  const [templates, setTemplates] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 6 });
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

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
        toast.success(res?.message || "Draft deleted successfully!");
        setShowDeleteModal(false);
        setTemplateToDelete(null);
        fetchDraftTemplates();
      } else {
        toast.error(res?.message || "Failed to delete draft.");
      }
    } catch (err) {
      console.error("Failed to delete draft:", err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to delete draft."
      );
    }
  };

  // Dropdown menu state
  const [openDropdown, setOpenDropdown] = useState(null);

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

  // Fetch templates with filterStatus = "draft"
  const fetchDraftTemplates = useCallback(async () => {
    try {
      const payload = {
        templateType: "sow",
        filterStatus: "draft",
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
      console.error("Failed to fetch draft templates:", error);
      setTemplates([]);
    }
  }, [debouncedSearch, page, limit, templatList]);

  useEffect(() => {
    fetchDraftTemplates();
  }, [fetchDraftTemplates]);

  const handleTemplateAction = async (targetId, action) => {
    try {
      const res = await templateAction({ templateId: targetId, action });
      if (res?.success || res?.code === 200) {
        toast.success(res?.message || `Draft ${action}d successfully!`);
        fetchDraftTemplates();
      } else {
        toast.error(res?.message || `Failed to ${action} draft.`);
      }
    } catch (err) {
      console.error(`Failed to execute draft action (${action}):`, err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          `Failed to ${action} draft.`
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
        {/* PRIMARY MAIN HEADER */}
        <header className="template-header-action-row mb-4">
          <Link
            to="/teacher/sow-contract"
            className="btn-circle-back-navigation"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="header-title-meta-group">
            <h1>SOW Drafts</h1>
            <p>Manage reusable statement of work and contract templates</p>
          </div>
        </header>

        {/* SEARCH BAR INTERFACE */}
        <div className="glnc-search-bar-wrapper mb-4">
          <i className="bi bi-search"></i>
          <input
            type="text"
            className="glnc-search-input"
            placeholder="Search drafts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TEMPLATES LIST */}
        <div id="sow-panel" className="row g-4 tab-content-panel active-panel">
          {isPendingTempList ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2 text-muted small">Loading drafts...</p>
            </div>
          ) : templates.length === 0 ? (
            <div className="col-12 text-center py-5">
              <div className="py-4">
                <i
                  className="bi bi-file-earmark-text text-muted"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="mt-3 text-muted">No SOW Drafts Found</h5>
                <p className="text-secondary small">
                  {search
                    ? "Try adjusting your search query."
                    : "No draft templates are currently available."}
                </p>
              </div>
            </div>
          ) : (
            templates.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="glnc-template-card">
                  <button
                    type="button"
                    className="glnc-card-triple-dot-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(item.id);
                    }}
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>

                  <div
                    className={`glnc-context-dropdown ${
                      openDropdown === item.id ? "show" : ""
                    }`}
                  >
                    <Link
                      to={`/teacher/create-template?templateId=${item.id}&type=sow`}
                      className="glnc-dropdown-item text-decoration-none"
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </Link>
                    <button
                      type="button"
                      className="glnc-dropdown-item visibility-btn-trigger"
                      data-template-type="SOW"
                      disabled={isPendingTemplateAction}
                      onClick={() => handleTemplateAction(item.id, "duplicate")}
                    >
                      <i className="bi bi-copy"></i> Duplicate
                    </button>
                    <button
                      type="button"
                      className="glnc-dropdown-item text-success"
                      disabled={isPendingTemplateAction}
                      onClick={() => handleTemplateAction(item.id, "active")}
                    >
                      <i className="bi bi-check-circle"></i> Activate
                    </button>
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
                    <span className="glnc-status-badge status-draft">
                      {item.status || "Draft"}
                    </span>
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
            ))
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
                        className={`page-item ${
                          currentPage <= 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          type="button"
                          className="page-link pager-trigger-prev"
                          disabled={currentPage <= 1}
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                          Prev
                        </button>
                      </li>
                      {renderPaginationButtons()}
                      <li
                        className={`page-item ${
                          currentPage >= totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          type="button"
                          className="page-link pager-trigger-next"
                          disabled={currentPage >= totalPages}
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
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

      <DeleteSowTemplate
        show={showDeleteModal}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
        isPending={isPendingTemplateAction}
      />
    </>
  );
};

export default SowDrafts;
