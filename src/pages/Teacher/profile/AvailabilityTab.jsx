import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import useCommon from "../../../hooks/teacher/useCommon";
import useProfile from "../../../hooks/teacher/useProfile";
import useGetService from "../../../hooks/teacher/useGetService";
import useService from "../../../hooks/teacher/useService";

// Helper to format date string to YYYY-MM-DD for date inputs
const formatDateForInput = (dateStr) => {
  if (!dateStr) return "";
  const str = String(dateStr).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const parts = str.split(/[-/]/);
  if (parts.length === 3) {
    if (parts[0].length <= 2 && parts[2].length === 4) {
      return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
    }
    if (parts[0].length === 4 && parts[2].length <= 2) {
      return `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].padStart(2, "0")}`;
    }
  }
  const d = new Date(str);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split("T")[0];
  }
  return str;
};

// Helper to format time string to HH:mm for time inputs
const formatTimeForInput = (timeStr) => {
  if (!timeStr) return "";
  const str = String(timeStr).trim();
  if (/^\d{2}:\d{2}$/.test(str)) return str;
  if (/^\d{2}:\d{2}:\d{2}$/.test(str)) return str.substring(0, 5);
  const match = str.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (match) {
    let hours = parseInt(match[1], 10);
    const minutes = match[2];
    const ampm = match[3] ? match[3].toUpperCase() : null;
    if (ampm === "PM" && hours < 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;
    return `${String(hours).padStart(2, "0")}:${minutes}`;
  }
  return str;
};

// Modern Pill Switch component matching Figma design
const ToggleSwitch = ({ checked, onChange, disabled, id, name }) => {
  return (
    <button
      type="button"
      role="switch"
      id={id}
      name={name}
      aria-checked={checked}
      disabled={disabled}
      onClick={() => {
        if (!disabled) onChange(!checked);
      }}
      className="availability-toggle-btn"
      style={{
        position: "relative",
        width: "44px",
        height: "24px",
        borderRadius: "9999px",
        border: "none",
        backgroundColor: checked ? "#0076A8" : "#CBD5E1",
        transition: "background-color 0.2s ease",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
        padding: 0,
        outline: "none",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          display: "block",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          top: "3px",
          left: checked ? "23px" : "3px",
          transition: "left 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </button>
  );
};

const AvailabilityTab = ({
  isEditing: parentIsEditing,
  setIsEditing: parentSetIsEditing,
}) => {
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const isEditing =
    parentIsEditing !== undefined ? parentIsEditing : localIsEditing;

  const setIsEditing = (val) => {
    if (typeof parentSetIsEditing === "function") {
      parentSetIsEditing(val);
    }
    setLocalIsEditing(val);
  };

  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  // Calendly Status & Mutations
  const [searchParams] = useSearchParams();
  const { calendlyStatus, isCalendyStatusPending, refetchCalendy } =
    useGetService();
  const {
    connectCalendy,
    isConnectionPending,
    syncCalender,
    isSyncCalenderPending,
    webhookSubscribe,
    isPendignWebhookSubscribe,
  } = useService();

  const statusPayload = calendlyStatus?.data ?? calendlyStatus;
  const isConnected = Boolean(
    statusPayload?.connection_stored === true ||
    statusPayload?.connection_stored === 1 ||
    Boolean(statusPayload?.connected_at) ||
    statusPayload?.is_connected === true ||
    statusPayload?.connected === true
  );

  const isProcessingCalendly =
    isConnectionPending || isPendignWebhookSubscribe || isSyncCalenderPending;

  // Re-fetch status whenever the teacher revisits / focuses this tab/window
  useEffect(() => {
    const handleRevisit = () => {
      if (document.visibilityState === "visible") {
        refetchCalendy();
      }
    };

    window.addEventListener("focus", handleRevisit);
    document.addEventListener("visibilitychange", handleRevisit);

    return () => {
      window.removeEventListener("focus", handleRevisit);
      document.removeEventListener("visibilitychange", handleRevisit);
    };
  }, [refetchCalendy]);

  const handleCalendlyAction = async () => {
    if (isConnected) {
      // When connected (Sync Calendar):
      // 1. First hit webhookSubscribe
      // 2. Once response success, hit syncCalender
      // 3. Again check status and change button based on status
      try {
        await webhookSubscribe();
        const syncRes = await syncCalender();
        toast.success(
          syncRes?.message || "Calendly webhook subscribed and calendar synced!"
        );
        await refetchCalendy();
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to sync Calendly";
        toast.error(errorMsg);
        await refetchCalendy();
      }
    } else {
      // When not connected (Connect to Calendly):
      // Once get response, redirect to authorization_url in a new tab
      try {
        const res = await connectCalendy();
        const authUrl =
          res?.data?.authorization_url ||
          res?.authorization_url ||
          res?.url ||
          res?.data?.url;

        if (authUrl) {
          window.open(authUrl, "_blank");
          toast.success(
            "Opened Calendly in a new tab. Please complete authorization."
          );
          return;
        }

        toast.success(res?.message || "Calendly connected successfully!");
        await refetchCalendy();
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to connect to Calendly";
        toast.error(errorMsg);
      }
    }
  };

  const {
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      isCurrentlyAvailable: true,
      isCurrentlyUnavailable: false,
      unavailableUntilDate: "",
      unavailableUntilTime: "",
      isAvailableForOneOnOne: true,
      isAvailableForGroupSessions: true,
    },
    mode: "onBlur",
  });

  // Query for availability tab data
  const { profileData, isPendingProfile, refetchProfile } = useCommon({
    tabs: "availability",
  });

  // Profile hook actions for availability update
  const { updateAvailabilityTab, isUpdatingAvailability } = useProfile();

  const isCurrentlyAvailable = watch("isCurrentlyAvailable", true);
  const isCurrentlyUnavailable = watch("isCurrentlyUnavailable", false);
  const unavailableUntilDate = watch("unavailableUntilDate", "");
  const unavailableUntilTime = watch("unavailableUntilTime", "");
  const isAvailableForOneOnOne = watch("isAvailableForOneOnOne", true);
  const isAvailableForGroupSessions = watch("isAvailableForGroupSessions", true);

  // Hydrate local form from profile data
  useEffect(() => {
    if (!profileData) return;
    const resData = profileData?.data || profileData;
    const details = resData?.details || resData?.user || resData || {};

    const isAvail =
      details?.isCurrentlyAvailable !== undefined
        ? Boolean(Number(details.isCurrentlyAvailable))
        : details?.currentlyAvailable !== undefined
          ? Boolean(Number(details.currentlyAvailable))
          : true;

    const isUnavail =
      details?.isCurrentlyUnavailable !== undefined
        ? Boolean(Number(details.isCurrentlyUnavailable))
        : details?.currentlyUnavailable !== undefined
          ? Boolean(Number(details.currentlyUnavailable))
          : false;

    const unavailDate =
      details?.unavailableUntilDate || details?.unavailableUntil?.date || "";

    const unavailTime =
      details?.unavailableUntilTime || details?.unavailableUntil?.time || "";

    const isOneOnOne =
      details?.isAvailableForOneOnOne !== undefined
        ? Boolean(Number(details.isAvailableForOneOnOne))
        : details?.oneOnOneSessions !== undefined
          ? Boolean(Number(details.oneOnOneSessions))
          : true;

    const isGroup =
      details?.isAvailableForGroupSessions !== undefined
        ? Boolean(Number(details.isAvailableForGroupSessions))
        : details?.groupSessions !== undefined
          ? Boolean(Number(details.groupSessions))
          : true;

    reset({
      isCurrentlyAvailable: isAvail,
      isCurrentlyUnavailable: isUnavail,
      unavailableUntilDate: unavailDate ? formatDateForInput(unavailDate) : "",
      unavailableUntilTime: unavailTime ? formatTimeForInput(unavailTime) : "",
      isAvailableForOneOnOne: isOneOnOne,
      isAvailableForGroupSessions: isGroup,
    });
  }, [profileData, reset]);

  // Handle toggles with mutual exclusivity (only when in edit mode)
  const handleToggleAvailable = (checked) => {
    if (!isEditing) return;
    setValue("isCurrentlyAvailable", checked, { shouldDirty: true });
    if (checked) {
      setValue("isCurrentlyUnavailable", false, { shouldDirty: true });
    }
  };

  const handleToggleUnavailable = (checked) => {
    if (!isEditing) return;
    setValue("isCurrentlyUnavailable", checked, { shouldDirty: true });
    if (checked) {
      setValue("isCurrentlyAvailable", false, { shouldDirty: true });
    }
  };

  const handleToggleOneOnOne = (checked) => {
    if (!isEditing) return;
    setValue("isAvailableForOneOnOne", checked, { shouldDirty: true });
  };

  const handleToggleGroup = (checked) => {
    if (!isEditing) return;
    setValue("isAvailableForGroupSessions", checked, { shouldDirty: true });
  };

  const handleCancel = () => {
    if (!profileData) {
      reset({
        isCurrentlyAvailable: true,
        isCurrentlyUnavailable: false,
        unavailableUntilDate: "",
        unavailableUntilTime: "",
        isAvailableForOneOnOne: true,
        isAvailableForGroupSessions: true,
      });
    } else {
      const resData = profileData?.data || profileData;
      const details = resData?.details || resData?.user || resData || {};
      reset({
        isCurrentlyAvailable:
          details?.isCurrentlyAvailable !== undefined
            ? Boolean(details.isCurrentlyAvailable)
            : true,
        isCurrentlyUnavailable:
          details?.isCurrentlyUnavailable !== undefined
            ? Boolean(details.isCurrentlyUnavailable)
            : false,
        unavailableUntilDate: details?.unavailableUntil?.date
          ? formatDateForInput(details.unavailableUntil.date)
          : "",
        unavailableUntilTime: details?.unavailableUntil?.time
          ? formatTimeForInput(details.unavailableUntil.time)
          : "",
        isAvailableForOneOnOne:
          details?.isAvailableForOneOnOne !== undefined
            ? Boolean(details.isAvailableForOneOnOne)
            : true,
        isAvailableForGroupSessions:
          details?.isAvailableForGroupSessions !== undefined
            ? Boolean(details.isAvailableForGroupSessions)
            : true,
      });
    }
    setIsEditing(false);
  };

  const onSubmit = async (formData) => {
    const payload = {
      isCurrentlyAvailable: formData.isCurrentlyAvailable ? 1 : 0,
      isCurrentlyUnavailable: formData.isCurrentlyUnavailable ? 1 : 0,
      unavailableUntilDate: formData.unavailableUntilDate || null,
      unavailableUntilTime: formData.unavailableUntilTime || null,
      isAvailableForOneOnOne: formData.isAvailableForOneOnOne ? 1 : 0,
      isAvailableForGroupSessions: formData.isAvailableForGroupSessions ? 1 : 0,
    };

    try {
      const response = await updateAvailabilityTab(payload);
      toast.success(
        response?.message || "Availability preferences saved successfully!"
      );
      refetchProfile();
    } catch (err) {
      console.error("Save availability failed:", err);
      const errMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to save availability settings";
      toast.error(errMsg);
    } finally {
      // Automatically toggle edit mode back so the top header button switches to "Edit Changes"
      setIsEditing(false);
    }
  };

  return (
    <div className="availability-tab-wrapper">
      <style>{`
        .availability-tab-wrapper {
          width: 100%;
        }

        .availability-outer-card {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 28px 32px;
          box-shadow: 0 1px 3px rgba(16, 24, 40, 0.04);
        }

        .availability-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }

        .availability-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-calendly-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
          line-height: 1.4;
          white-space: nowrap;
        }

        .btn-calendly-action.is-disconnected {
          background-color: #0086c9;
          color: #ffffff;
          border-color: #0086c9;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        }

        .btn-calendly-action.is-disconnected:hover:not(:disabled) {
          background-color: #00648f;
          border-color: #00648f;
        }

        .btn-calendly-action.is-connected {
          background-color: #f0fdf4;
          color: #15803d;
          border-color: #bbf7d0;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        }

        .btn-calendly-action.is-connected:hover:not(:disabled) {
          background-color: #dcfce7;
          color: #166534;
          border-color: #86efac;
        }

        .btn-calendly-action:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .availability-header-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0086c9;
        }

        .availability-header-title {
          font-size: 16px;
          font-weight: 600;
          color: #101828;
          margin: 0;
        }

        .availability-primary-card {
          background-color: #f8fafc;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .availability-secondary-card {
          background-color: #f8fafc;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .availability-text-group h3 {
          font-size: 15px;
          font-weight: 600;
          color: #101828;
          margin: 0 0 4px 0;
        }

        .availability-text-group p {
          font-size: 13px;
          font-weight: 400;
          color: #94a3b8;
          margin: 0;
          line-height: 1.4;
        }

        .availability-unavailable-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .unavailable-until-panel {
          background-color: #eef4f8;
          border-radius: 12px;
          padding: 16px 20px 20px 20px;
          margin-top: 16px;
        }

        .unavailable-until-title {
          font-size: 14px;
          font-weight: 600;
          color: #101828;
          margin: 0 0 12px 0;
        }

        .unavailable-until-inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .availability-input-wrapper {
          position: relative;
          width: 100%;
        }

        .availability-input-control {
          width: 100%;
          height: 44px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0 14px;
          font-size: 14px;
          color: #101828;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          box-sizing: border-box;
          cursor: pointer;
        }

        .availability-input-control::placeholder {
          color: #94a3b8;
        }

        .availability-input-control:focus {
          border-color: #0086c9;
          box-shadow: 0 0 0 3px rgba(0, 134, 201, 0.12);
        }

        .availability-input-control:disabled {
          background-color: #f8fafc;
          color: #94a3b8;
          cursor: not-allowed !important;
          pointer-events: none;
        }

        .availability-toggle-btn:disabled {
          cursor: not-allowed !important;
          opacity: 0.6;
          pointer-events: none;
        }

        .btn-availability-cancel:disabled {
          opacity: 0.5;
          cursor: not-allowed !important;
          pointer-events: none;
        }

        .btn-availability-save:disabled {
          opacity: 0.5;
          cursor: not-allowed !important;
          pointer-events: none;
        }

        /* Native calendar & clock picker icon styling */
        .availability-input-control::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(36%) sepia(93%) saturate(1637%) hue-rotate(178deg) brightness(92%) contrast(101%);
          opacity: 0.9;
          transition: opacity 0.15s ease, transform 0.15s ease;
        }

        .availability-input-control::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
          transform: scale(1.08);
        }

        .availability-sessions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 24px;
          align-items: center;
        }

        .availability-session-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .availability-actions-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }

        .btn-availability-cancel {
          background: transparent;
          border: none;
          color: #101828;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .btn-availability-cancel:hover {
          background-color: #f1f5f9;
        }

        .btn-availability-save {
          background-color: #0076a8;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 24px;
          cursor: pointer;
          transition: background-color 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-availability-save:hover {
          background-color: #00648f;
        }

        .btn-availability-save:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .availability-outer-card {
            padding: 20px 16px;
          }
          .unavailable-until-inputs-grid {
            grid-template-columns: 1fr;
          }
          .availability-sessions-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .availability-actions-footer {
            flex-direction: column-reverse;
            width: 100%;
          }
          .btn-availability-cancel,
          .btn-availability-save {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <form id="profile-tab-active-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="availability-outer-card">
          {/* Header Title with Calendly single toggle button */}
          <div className="availability-header">
            <div className="availability-header-left">
              <div className="availability-header-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0086C9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h2 className="availability-header-title">Availability Settings</h2>
            </div>

            {/* Single button toggle: Connect to Calendly or Sync Calendar */}
            <button
              type="button"
              className={`btn-calendly-action ${
                isConnected ? "is-connected" : "is-disconnected"
              }`}
              onClick={handleCalendlyAction}
              disabled={isProcessingCalendly}
              title={
                isConnected
                  ? "Calendly Connected - Click to Sync"
                  : "Connect your Calendly account"
              }
            >
              {isConnectionPending ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Connecting...
                </>
              ) : isPendignWebhookSubscribe ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Subscribing...
                </>
              ) : isSyncCalenderPending ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Syncing...
                </>
              ) : isConnected ? (
                <>
                  <i className="fa-solid fa-arrows-rotate me-1"></i>
                  Sync Calendar
                </>
              ) : (
                <>
                  <i className="fa-regular fa-calendar-check me-1"></i>
                  Connect to Calendly
                </>
              )}
            </button>
          </div>

          <fieldset
            disabled={!isEditing || isSubmitting || isUpdatingAvailability}
            style={{ border: "none", padding: 0, margin: 0 }}
          >

            {/* Section 1: Currently Available */}
            <div className="availability-primary-card">
              <div className="availability-text-group">
                <h3>Currently Available</h3>
                <p>Turn this off if you are taking a break or unavailable.</p>
              </div>
              <ToggleSwitch
                id="switch-currently-available"
                name="isCurrentlyAvailable"
                checked={isCurrentlyAvailable}
                onChange={handleToggleAvailable}
                disabled={!isEditing || isSubmitting || isUpdatingAvailability}
              />
            </div>

          {/* Section 2: Currently Unavailable + Nested Inputs + Session Preferences */}
          <div className="availability-secondary-card">
            {/* Top row: Currently Unavailable */}
            <div className="availability-unavailable-row">
              <div className="availability-text-group">
                <h3>Currently Unavailable</h3>
                <p>
                  Turn this on if you are available. your profile will
                  automatically become available again after the selected date
                  and time.
                </p>
              </div>
              <ToggleSwitch
                id="switch-currently-unavailable"
                name="isCurrentlyUnavailable"
                checked={isCurrentlyUnavailable}
                onChange={handleToggleUnavailable}
                disabled={!isEditing || isSubmitting || isUpdatingAvailability}
              />
            </div>

            {/* Nested Block: Unavailable Until */}
            <div className="unavailable-until-panel">
              <h4 className="unavailable-until-title">Unavailable Until</h4>
              <div className="unavailable-until-inputs-grid">
                {/* Date Input */}
                <div className="availability-input-wrapper">
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={unavailableUntilDate || ""}
                    onClick={(e) => {
                      if (!isEditing) return;
                      try {
                        e.target.showPicker?.();
                      } catch (err) {}
                    }}
                    onChange={(e) => {
                      if (!isEditing) return;
                      setValue("unavailableUntilDate", e.target.value, {
                        shouldDirty: true,
                      });
                    }}
                    disabled={!isEditing || isSubmitting || isUpdatingAvailability}
                    className="availability-input-control"
                  />
                </div>

                {/* Time Input */}
                <div className="availability-input-wrapper">
                  <input
                    ref={timeInputRef}
                    type="time"
                    value={unavailableUntilTime || ""}
                    onClick={(e) => {
                      if (!isEditing) return;
                      try {
                        e.target.showPicker?.();
                      } catch (err) {}
                    }}
                    onChange={(e) => {
                      if (!isEditing) return;
                      setValue("unavailableUntilTime", e.target.value, {
                        shouldDirty: true,
                      });
                    }}
                    disabled={!isEditing || isSubmitting || isUpdatingAvailability}
                    className="availability-input-control"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: One-on-One and Group Sessions */}
            <div className="availability-sessions-grid">
              {/* One-on-One Sessions */}
              <div className="availability-session-item">
                <div className="availability-text-group">
                  <h3>Available for One-on-One Sessions</h3>
                  <p>Accept individual tutoring requests</p>
                </div>
                <ToggleSwitch
                  id="switch-one-on-one"
                  name="isAvailableForOneOnOne"
                  checked={isAvailableForOneOnOne}
                  onChange={handleToggleOneOnOne}
                  disabled={!isEditing || isSubmitting || isUpdatingAvailability}
                />
              </div>

              {/* Group Sessions */}
              <div className="availability-session-item">
                <div className="availability-text-group">
                  <h3>Available for Group Sessions</h3>
                  <p>Accept group class requests</p>
                </div>
                <ToggleSwitch
                  id="switch-group-sessions"
                  name="isAvailableForGroupSessions"
                  checked={isAvailableForGroupSessions}
                  onChange={handleToggleGroup}
                  disabled={!isEditing || isSubmitting || isUpdatingAvailability}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons: Cancel and Save Changes */}
          <div className="availability-actions-footer">
            <button
              type="button"
              className="btn-availability-cancel"
              onClick={handleCancel}
              disabled={!isEditing || isSubmitting || isUpdatingAvailability}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-availability-save"
              disabled={!isEditing || isSubmitting || isUpdatingAvailability}
            >
              {isSubmitting || isUpdatingAvailability ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </fieldset>
      </div>
    </form>
    </div>
  );
};

export default AvailabilityTab;
