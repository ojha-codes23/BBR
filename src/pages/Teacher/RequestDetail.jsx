import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import useService from "../../hooks/teacher/useService";
import EscalateRequestModal from "../../components/teacher/EscalateRequestModal";

// Controlled Accept Request Modal with callbacks and API integration
const ControlledAcceptModal = ({
  isOpen,
  onClose,
  requestId,
  userName = "the user",
  onSuccess,
}) => {
  const { acceptRequest } = useService();
  const [reason, setReason] = useState("Available to support this request");
  const [explanation, setExplanation] = useState(
    "I can support the requested service."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleAccept = async () => {
    if (!requestId) {
      toast.error("Request ID is missing");
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await acceptRequest({
        requestId,
        reason: reason.trim() || undefined,
        explanation: explanation.trim() || undefined,
      });
      toast.success(res?.message || "Request accepted successfully!");
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to accept request";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "540px" }}
        >
          <button
            type="button"
            className="custom-close-outside-circle"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="modal-content">
            <div className="modal-body-wrapper">
              <div className="status-badge-circle success-green">
                <i className="fa-regular fa-circle-check"></i>
              </div>

              <h3 className="modal-main-title">Accept Request</h3>
              <p className="modal-subtitle-desc">
                Are you sure you want to accept the request from {userName}? Once
                accepted, {userName} will receive a link to schedule with you.
                You can still update your availability after the request is
                accepted.
              </p>

              <div className="modal-action-footer-btns">
                <button
                  type="button"
                  className="btn-modal-cancel"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn-action-primary-blue"
                  onClick={handleAccept}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Accepting...
                    </>
                  ) : (
                    <>
                      <i className="fa-regular fa-circle-check"></i> Accept Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Controlled Decline Request Modal with callbacks and API integration
const ControlledDeclineModal = ({
  isOpen,
  onClose,
  requestId,
  userName = "the user",
  onSuccess,
}) => {
  const { declineRequest } = useService();
  const [selectedReason, setSelectedReason] = useState("Scheduling conflict");
  const [explanation, setExplanation] = useState(
    "I am unavailable for this invitation."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const reasonOptions = [
    "Scheduling conflict",
    "Scope Issue",
    "Interpersonal Issue",
    "Other Issue",
  ];

  const handleDecline = async () => {
    if (!requestId) {
      toast.error("Request ID is missing");
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await declineRequest({
        requestId,
        reason: selectedReason.trim() || undefined,
        explanation: explanation.trim() || undefined,
      });
      toast.success(res?.message || "Request declined successfully!");
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to decline request";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "540px" }}
        >
          <button
            type="button"
            className="custom-close-outside-circle"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="modal-content">
            <div className="modal-body-wrapper">
              <div className="status-badge-circle danger-red">
                <i className="fa-regular fa-circle-xmark"></i>
              </div>

              <h3 className="modal-main-title">Decline Request</h3>
              <p className="modal-subtitle-desc">
                Are you sure you want to decline the request from {userName}?
              </p>

              <div className="form-block-container">
                <span className="input-meta-label">Reason for declining</span>
                <div className="reason-badge-flex-row">
                  {reasonOptions.map((r) => (
                    <div
                      key={r}
                      className={`reason-selectable-pill ${
                        selectedReason === r ? "active" : ""
                      }`}
                      onClick={() => setSelectedReason(r)}
                      style={{ cursor: "pointer" }}
                    >
                      {r}
                    </div>
                  ))}
                </div>
                <textarea
                  className="custom-reason-textarea"
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Please provide a reason for declining this request...."
                ></textarea>
              </div>

              <div className="modal-action-footer-btns">
                <button
                  type="button"
                  className="btn-modal-cancel"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn-action-danger-red"
                  onClick={handleDecline}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Declining...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-xmark"></i> Decline Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RequestDetail = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const rawRequestId =
    searchParams.get("requestId") ||
    searchParams.get("id") ||
    location.state?.requestId ||
    location.state?.id;

  const requestId =
    rawRequestId && rawRequestId !== "undefined" && rawRequestId !== "null"
      ? rawRequestId
      : "";

  const { getRequestDetails } = useService();
  const [detailData, setDetailData] = useState(
    location.state?.request || null
  );
  const [isLoading, setIsLoading] = useState(!location.state?.request);

  // Modal open/close callback states
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  const fetchRequestDetails = useCallback(async () => {
    if (!requestId) return;
    try {
      setIsLoading(true);
      const res = await getRequestDetails({
        requestId,
        request_id: requestId,
        id: requestId,
      });
      if (res?.data) {
        setDetailData(res.data);
      } else if (res) {
        setDetailData(res);
      }
    } catch (error) {
      console.error("Failed to load request details:", error);
    } finally {
      setIsLoading(false);
    }
  }, [requestId, getRequestDetails]);

  useEffect(() => {
    fetchRequestDetails();
  }, [fetchRequestDetails]);

  // Extract details with fallback
  const d = detailData || {};
  const userName =
    d.user_name ||
    d.name ||
    d.user?.name ||
    d.student_name ||
    "Emma Wilson";
  const userAvatar =
    d.user_avatar ||
    d.avatar ||
    d.user?.avatar ||
    d.user?.profile_image ||
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80";
  const status = d.status || "Pending";
  const serviceName =
    d.service_name ||
    d.service?.name ||
    d.service_title ||
    d.title ||
    "Math Tutoring";
  const submittedDate =
    d.submitted_at || d.created_at || d.date || "12-10-2025";
  const estimatedHours =
    d.estimated_hours || d.hours || (d.estimated ? `${d.estimated} Hours` : "10 Hours");
  const serviceType = d.service_type || serviceName || "Math Tutoring";
  const priority = d.priority || "Normal";
  const description =
    d.description ||
    d.details ||
    "Need help with advanced calculus and linear algebra concepts for upcoming exams.";
  const attachments = Array.isArray(d.attachments) ? d.attachments : [];
  const preferenceTitle = d.preference_title || "Choice Preference";
  const preferenceBadge =
    d.preference_badge || d.preference || d.choice_preference || "1st Choice";
  const preferenceDesc =
    d.preference_description ||
    d.preference_desc ||
    "You are the primary choice for this service request.";
  const userId =
    d.user_id ||
    d.userId ||
    d.user?.id ||
    location.state?.userId;

  return (
    <>
      <main className="content">
        <div className="page-title-row">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="page-title">
            <h1>Request Details</h1>
            <p>View details of this service request</p>
          </div>

          <Link
            to="/teacher/sow-call-discussion"
            className="btn-action btn-email-user ms-auto"
          >
            View SOW
          </Link>
        </div>

        {isLoading ? (
          <div className="p-5 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading details...</span>
            </div>
            <p className="mt-3 text-muted">Loading request details...</p>
          </div>
        ) : (
          <div className="details-grid">
            <div className="left-column">
              <div className="card">
                <div className="user-header-block">
                  <img
                    className="user-avatar-lg"
                    src={userAvatar}
                    alt={userName}
                  />
                  <div className="user-meta-info">
                    <div className="name-badge-row">
                      <span className="profile-name">{userName}</span>
                      <span className="badge-pending">{status}</span>
                    </div>
                    {userId ? (
                      <Link
                        to={`/teacher/user-profile?userId=${userId}`}
                        state={{ userId, from: "requests" }}
                        className="sub-link view-profile-btn"
                      >
                        User Profile
                      </Link>
                    ) : (
                      <Link
                        to="/teacher/user-profile"
                        state={{ from: "requests" }}
                        className="sub-link view-profile-btn"
                      >
                        User Profile
                      </Link>
                    )}
                    <div className="service-tag">
                      <i className="fa-solid fa-book-open"></i> {serviceName}
                    </div>
                  </div>
                </div>

                <div className="specs-grid">
                  <div className="spec-item">
                    <div className="spec-label">
                      <i className="fa-regular fa-calendar"></i> Submitted
                    </div>
                    <div className="spec-value">{submittedDate}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">
                      <i className="fa-regular fa-clock"></i> Estimated
                    </div>
                    <div className="spec-value">{estimatedHours}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">
                      <i className="fa-regular fa-user"></i> Service Type
                    </div>
                    <div className="spec-value">{serviceType}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">
                      <i className="fa-regular fa-star"></i> Priority
                    </div>
                    <div
                      className="spec-value"
                      style={{ paddingLeft: "22px", marginTop: "2px" }}
                    >
                      <span className="priority-badge">{priority}</span>
                    </div>
                  </div>
                </div>

                <div className="description-block">
                  <div className="section-subtitle">Description</div>
                  <p className="description-text">{description}</p>
                </div>

                <div className="attachments-block">
                  <div className="section-subtitle">Attachments</div>
                  <div className="attachment-badge-container">
                    {attachments.length > 0 ? (
                      attachments.map((att, idx) => (
                        <div className="attachment-pill" key={att.id || idx}>
                          <i className="fa-solid fa-paperclip"></i>{" "}
                          {att.name || att.file_name || att.title || `file_${idx + 1}`}
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="attachment-pill">
                          <i className="fa-solid fa-paperclip"></i> syllabus.pdf
                        </div>
                        <div className="attachment-pill">
                          <i className="fa-solid fa-paperclip"></i> requirements.docx
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="preference-card-container">
                <div className="preference-icon-box">
                  <i className="fa-solid fa-users-rectangle"></i>
                </div>

                <div className="preference-content-zone">
                  <h3 className="preference-title">{preferenceTitle}</h3>
                  <span className="preference-badge-text">{preferenceBadge}</span>
                  <p className="preference-description">{preferenceDesc}</p>
                </div>
              </div>

              <div className="actions-row">
                <button
                  type="button"
                  className="btn-action btn-sow-action revision"
                  data-bs-toggle="modal"
                  data-bs-target="#revisionPopupModal"
                >
                  <i className="bi bi-arrow-counterclockwise"></i> Return for
                  Revision
                </button>
                <button type="button" className="btn-action btn-email-user">
                  <i className="fa-regular fa-envelope"></i> Email User
                </button>

                {/* Callback driven buttons for Decline & Accept */}
                <button
                  type="button"
                  className="btn-sow-action decline"
                  onClick={() => setShowDeclineModal(true)}
                >
                  <i className="bi bi-x-lg"></i> Declined
                </button>
                <button
                  type="button"
                  className="btn-sow-action approve"
                  onClick={() => setShowAcceptModal(true)}
                >
                  <i className="bi bi-check2-circle"></i> Approve
                </button>
                <button type="button" className="btn-sow-action approve">
                  <i className="bi bi-pencil-square"></i> Draft SOW
                </button>
              </div>
            </div>

            <div className="right-column">
              <div className="timeline-card">
                <div className="timeline-title">
                  <i className="fa-solid fa-clock-rotate-left"></i> Service
                  Tracker
                </div>

                <div className="timeline-container">
                  <div className="timeline-item">
                    <div className="timeline-icon completed">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">Pending</span>
                      <span className="timeline-date">{submittedDate}</span>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div
                      className={`timeline-icon ${
                        status === "approved" || status === "accepted"
                          ? "completed"
                          : "disabled"
                      }`}
                    >
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">
                        Request Accepted
                      </span>
                      <span className="timeline-date">
                        {status === "approved" ? "Completed" : "--"}
                      </span>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon completed">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">
                        Call Discussion
                      </span>
                      <span className="timeline-date">12-11-2025</span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">SOW Created</span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">
                        Awaiting Revision / SOW Revised
                      </span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">SOW Approved</span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">
                        Agreement Signed
                      </span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">
                        Payment Completed
                      </span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">In Progress</span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">Completed</span>
                    </div>
                  </div>

                  <div className="timeline-item disabled">
                    <div className="timeline-icon current"></div>
                    <div className="timeline-details">
                      <span className="timeline-status-name">
                        Review & Feedback
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="sessions-section-container">
          <h2 className="section-main-heading">Sessions</h2>
          <div className="empty-state-card-wrapper">
            <div className="icon-circle-badge">
              <i className="fa-regular fa-calendar"></i>
            </div>
            <h3 className="empty-state-title">No sessions scheduled yet</h3>
            <p className="empty-state-subtitle">
              Click "Schedule Session" to get started
            </p>
            <button type="button" className="btn-schedule-action-trigger">
              <i className="fa-regular fa-calendar-plus"></i> Schedule Session
            </button>
          </div>
        </div>

        <div className="feedback-section-card">
          <div className="section-header">
            <h2>Review & Feedback</h2>
            <p>Complete this after service delivery is finished.</p>
          </div>

          <div className="feedback-form-body">
            <span className="field-label">Overall grantee experience</span>

            <div className="interactive-rating-row" id="ratingStarContainer">
              <i className="fa-solid fa-star active" data-value="1"></i>
              <i className="fa-solid fa-star active" data-value="2"></i>
              <i className="fa-solid fa-star active" data-value="3"></i>
              <i className="fa-solid fa-star active" data-value="4"></i>
              <i className="fa-solid fa-star active" data-value="5"></i>
            </div>

            <span className="field-label">
              Feedback Tags{" "}
              <span className="tags-selection-instruction">
                (Select up to 3)
              </span>
            </span>

            <div
              className="feedback-tags-flex-wrapper"
              id="dynamicTagsContainer"
            ></div>

            <span className="field-label">Teacher notes</span>
            <textarea
              className="notes-textarea-element"
              id="teacherNotesArea"
              placeholder="Type your experience details here..."
            ></textarea>
          </div>

          <div className="status-alert-banner-tray">
            <div className="status-left-info">
              <i className="fa-solid fa-circle-info"></i>
              <div>
                <span>
                  <strong>Available after agreement completion</strong>
                </span>
                <p>
                  You can submit your review once the service agreement is
                  marked as completed.
                </p>
              </div>
            </div>
            <div className="ready-badge-indicator">Ready to submit</div>
          </div>

          <div className="form-actions-footer-row">
            <button type="button" className="btn-action-submit">
              Submit Review
            </button>
            <button type="button" className="btn-action-draft">
              <i className="fa-regular fa-file-lines"></i> Save Draft
            </button>
          </div>
        </div>
      </main>

      {/* Controlled Modals with Callbacks and API Execution */}
      <ControlledAcceptModal
        isOpen={showAcceptModal}
        onClose={() => setShowAcceptModal(false)}
        requestId={requestId}
        userName={userName}
        onSuccess={fetchRequestDetails}
      />

      <ControlledDeclineModal
        isOpen={showDeclineModal}
        onClose={() => setShowDeclineModal(false)}
        requestId={requestId}
        userName={userName}
        onSuccess={fetchRequestDetails}
      />

      <EscalateRequestModal />
    </>
  );
};

export default RequestDetail;