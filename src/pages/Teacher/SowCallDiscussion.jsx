import React, { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import useService from "../../hooks/teacher/useService";

const SowCallDiscussion = () => {
  const [searchParams] = useSearchParams();
  const rawRequestId =
    searchParams.get("requestId") ||
    searchParams.get("id");
  const requestId =
    rawRequestId && rawRequestId !== "undefined" && rawRequestId !== "null"
      ? rawRequestId
      : "";

  const { sowCallDiscussionDetails, isPendingSowCallDiscussionDetails } =
    useService();

  const [callData, setCallData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDiscussionDetails = useCallback(async () => {
    if (!requestId) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const res = await sowCallDiscussionDetails({ requestId });
      if (res?.success || res?.code === 200) {
        setCallData(res?.data || null);
      } else {
        toast.error(res?.message || "Failed to load call discussion details.");
      }
    } catch (err) {
      console.error("Error loading call discussion details:", err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to load call discussion details."
      );
    } finally {
      setLoading(false);
    }
  }, [requestId, sowCallDiscussionDetails]);

  useEffect(() => {
    fetchDiscussionDetails();
  }, [fetchDiscussionDetails]);

  const callDetails = callData?.callDetails || {};
  const sowStepStatuses = callData?.sowStepStatuses || {};
  const canStartCall = callData?.canStartCall ?? true;

  // Tracker status flags
  const isCallSchedulingCompleted = Boolean(
    sowStepStatuses?.callSchedulingCompleted
  );
  const isCallCompleted = Boolean(sowStepStatuses?.callCompleted);
  const isSowFormFillCompleted = Boolean(
    sowStepStatuses?.sowFormFillCompleted
  );
  const isPaymentCompleted = Boolean(sowStepStatuses?.paymentCompleted);

  return (
    <main className="content">
      <div>
        {/* Top Title Bar Segment */}
        <div className="header-section">
          <Link
            to={`/teacher/request-details?requestId=${requestId}`}
            className="back-arrow-btn"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div>
            <h1 className="header-title">SOW Details</h1>
            <p className="header-subtitle">
              {callData?.serviceTitle ||
                callDetails?.title ||
                "Career planning and skill development guidance"}
            </p>
          </div>
        </div>

        {/* Service Tracker Stepper Progress Card Layout with Horizontal Left-to-Right Scroll */}
        <div className="custom-card">
          <span
            className="meta-label d-block"
            style={{ fontSize: "15px", color: "#344054" }}
          >
            Service Tracker
          </span>

          <div className="tracker-scroll-container">
            <div className="tracker-wrapper">
              {/* Step 1: Pending (Completed) */}
              <div className="tracker-item completed">
                <div className="tracker-icon-circle">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <span className="tracker-label">Pending</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 2: Request Accepted (Completed) */}
              <div
                className={`tracker-item ${
                  isCallSchedulingCompleted ? "completed" : "active"
                }`}
              >
                <div className="tracker-icon-circle">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <span className="tracker-label">Request Accepted</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 3: Call Discussion (ACTIVE CURRENT PAGE) */}
              <div
                className={`tracker-item ${
                  isCallCompleted
                    ? "completed"
                    : isCallSchedulingCompleted
                    ? "active"
                    : ""
                }`}
              >
                <div className="tracker-icon-circle">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <span className="tracker-label">Call Discussion</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 4: SOW Created */}
              <div
                className={`tracker-item ${
                  isSowFormFillCompleted
                    ? "completed"
                    : isCallCompleted
                    ? "active"
                    : ""
                }`}
              >
                <div className="tracker-icon-circle">
                  {isSowFormFillCompleted && (
                    <i className="bi bi-check2-circle"></i>
                  )}
                </div>
                <span className="tracker-label">SOW Created</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 5: Awaiting Revision / SOW Revised */}
              <div className="tracker-item">
                <div className="tracker-icon-circle"></div>
                <span className="tracker-label">
                  Awaiting Revision / SOW Revised
                </span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 6: SOW Approved */}
              <div className="tracker-item">
                <div className="tracker-icon-circle"></div>
                <span className="tracker-label">SOW Approved</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 7: Agreement Signed */}
              <div className="tracker-item">
                <div className="tracker-icon-circle"></div>
                <span className="tracker-label">Agreement Signed</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 8: Payment Completed */}
              <div
                className={`tracker-item ${
                  isPaymentCompleted ? "completed" : ""
                }`}
              >
                <div className="tracker-icon-circle">
                  {isPaymentCompleted && (
                    <i className="bi bi-check2-circle"></i>
                  )}
                </div>
                <span className="tracker-label">Payment Completed</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 9: In Progress */}
              <div className="tracker-item">
                <div className="tracker-icon-circle"></div>
                <span className="tracker-label">In Progress</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 10: Completed */}
              <div className="tracker-item">
                <div className="tracker-icon-circle"></div>
                <span className="tracker-label">Completed</span>
              </div>

              <div className="tracker-line-divider"></div>

              {/* Step 11: Review & Feedback */}
              <div className="tracker-item">
                <div className="tracker-icon-circle"></div>
                <span className="tracker-label">Review &amp; Feedback</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Info Area Title */}
        <h2 className="section-main-heading">Call Discussion</h2>
        <p className="section-sub-heading">
          {callData?.sentBy
            ? `Sent by ${callData.sentBy}. Please fill, review, sign and submit to activate your service.`
            : "Sent by Sarah Johnson. Please fill, review, sign and submit to activate your service."}
        </p>

        {/* Main Inner Scheduled Call Details Box Card Block */}
        {loading || isPendingSowCallDiscussionDetails ? (
          <div className="call-details-box text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted small">
              Loading call discussion details...
            </p>
          </div>
        ) : (
          <div className="call-details-box">
            <div className="scheduled-call-header">
              <div className="calendar-blue-icon-box">
                <img
                  src="/images/teacher/super-user-dashboard/calendar-icon.svg"
                  alt=""
                />
              </div>
              <h3 className="scheduled-call-title">Scheduled Call</h3>
            </div>

            {/* Title Meta */}
            <div className="meta-label">Title</div>
            <div
              className="meta-value"
              style={{ color: "#344054", fontWeight: "600" }}
            >
              {callDetails?.title || "Service Requirement Discussion"}
            </div>

            {/* Quad Column Metadata Layout Alignment */}
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="meta-label">Date</div>
                <div className="meta-value">{callDetails?.date || "N/A"}</div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="meta-label">Time</div>
                <div className="meta-value">
                  {callDetails?.time || "N/A"}
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="meta-label">Duration</div>
                <div className="meta-value">
                  {callDetails?.duration || "60 minutes"}
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="meta-label">Meeting Platform</div>
                <div className="meta-value">
                  {callDetails?.meetingPlatform || "N/A"}
                </div>
              </div>
            </div>

            {/* Description Segment */}
            <div className="meta-label">Description</div>
            <p className="description-text">
              {callDetails?.description ||
                "No description provided for this session."}
            </p>

            {/* Calendly Link Segment */}
            <div className="meta-label">Calendly Link</div>
            {callDetails?.calendlyLink ? (
              <a
                href={
                  callDetails.calendlyLink.startsWith("http")
                    ? callDetails.calendlyLink
                    : `https://${callDetails.calendlyLink}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="calendly-link-url"
              >
                {callDetails.calendlyLink}
              </a>
            ) : (
              <p className="text-muted small">No Calendly link available.</p>
            )}

            <div className="pt-2">
              {/* BOTTOM BUTTON AS ANCHOR TAG (<a>) */}
              {callDetails?.meetingUrl ? (
                <a
                  href={callDetails.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-start-call-link ${
                    !canStartCall ? "disabled" : ""
                  }`}
                  style={
                    !canStartCall
                      ? { pointerEvents: "none", opacity: 0.6 }
                      : {}
                  }
                >
                  <i className="bi bi-camera-video"></i>
                  Start Call
                </a>
              ) : (
                <Link
                  to={`/teacher/sow-create-form?requestId=${requestId}`}
                  className={`btn-start-call-link ${
                    !canStartCall ? "disabled" : ""
                  }`}
                  style={
                    !canStartCall
                      ? { pointerEvents: "none", opacity: 0.6 }
                      : {}
                  }
                >
                  <i className="bi bi-camera-video"></i>
                  Start Call
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default SowCallDiscussion;
