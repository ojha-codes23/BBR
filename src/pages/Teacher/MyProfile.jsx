import { useState, useRef } from "react";
import toast from "react-hot-toast";
import PersonalTab from "./profile/PersonalTab";
import ProfessionalTab from "./profile/ProfessionalTab";
import ExpertiseTab from "./profile/ExpertiseTab";
import InterestsTagsTab from "./profile/InterestsTagsTab";
import AvailabilityTab from "./profile/AvailabilityTab";
import BankDetailsTab from "./profile/BankDetailsTab";
import DocumentsTab from "./profile/DocumentsTab";
import useCommon from "../../hooks/teacher/useCommon";
import useProfile from "../../hooks/teacher/useProfile";

const TABS = [
  { id: "personal", label: "Personal", component: PersonalTab },
  { id: "professional", label: "Professional", component: ProfessionalTab },
  { id: "bank", label: "Bank Details", component: BankDetailsTab },
  { id: "expertise", label: "Expertise", component: ExpertiseTab },
  { id: "interests", label: "Interests & Tags", component: InterestsTagsTab },
  { id: "documents", label: "Documents", component: DocumentsTab },
  { id: "availability", label: "Availability", component: AvailabilityTab },
];

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const { getProfileDetails, isPendingProfileDetails, refetchProfileDetails } =
    useCommon();
  const { updateProfilePicture, isUpdatingProfilePicture } = useProfile();

  const teacher = getProfileDetails?.data;

  const displayName =
    teacher?.name ||
    [teacher?.firstName, teacher?.lastName].filter(Boolean).join(" ") ||
    "Teacher Profile";

  const avatarUrl =
    teacher?.avatarUrl ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150";

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", file);

    try {
      const response = await updateProfilePicture(formData);
      toast.success(
        response?.message || "Profile picture updated successfully!"
      );
      if (refetchProfileDetails) {
        refetchProfileDetails();
      }
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update profile picture";
      toast.error(errorMsg);
    } finally {
      if (e.target) {
        e.target.value = "";
      }
    }
  };

  const ActiveComponent =
    TABS.find((tab) => tab.id === activeTab)?.component || PersonalTab;

  return (
    <main className="content-body">
      {/* Page Title Header with Edit Changes / Save Changes toggle button */}
      <div className="page-header-row mb-4">
        <div>
          <h1 className="page-title">My Profile</h1>
          <p className="page-subtitle">
            Manage your professional profile and preferences
          </p>
        </div>

        {!isEditing ? (
          <button
            key="btn-edit-mode"
            type="button"
            className="btn-edit-profile"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            <i className="fa-regular fa-pen-to-square me-2"></i>
            Edit Changes
          </button>
        ) : (
          <button
            key="btn-save-mode"
            type="submit"
            form="profile-tab-active-form"
            className="btn-edit-profile"
          >
            <i className="fa-solid fa-floppy-disk me-2"></i>
            Save Changes
          </button>
        )}
      </div>

      {/* Profile Summary Card Section Banner */}
      <header className="instructor-header-banner-card mb-4">
        <div
          className="avatar-circle-frame position-relative"
          style={{ width: "72px", height: "72px", flexShrink: 0 }}
        >
          <img
            src={avatarUrl}
            alt={displayName}
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: "none" }}
          />
          <button
            type="button"
            className="avatar-upload-btn"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUpdatingProfilePicture}
            title="Upload profile picture"
            style={{
              position: "absolute",
              bottom: "-2px",
              right: "-2px",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              backgroundColor: "#0076a8",
              color: "#ffffff",
              border: "2px solid #ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: isUpdatingProfilePicture ? "not-allowed" : "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              padding: 0,
              fontSize: "11px",
            }}
          >
            {isUpdatingProfilePicture ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              <i className="fa-solid fa-plus"></i>
            )}
          </button>
        </div>

        <div className="instructor-meta-details-box">
          <div className="name-rating-row">
            <h2>{displayName}</h2>
            {teacher?.rating != null && (
              <div className="rating-metrics-tag">
                <i className="fa-solid fa-star"></i> {teacher.rating}{" "}
                {teacher?.reviewsCount != null && (
                  <span>({teacher.reviewsCount} reviews)</span>
                )}
              </div>
            )}
          </div>
          <div className="sub-subtitle-code-line">
            {teacher?.jobTitle || "Teacher"}
            {(teacher?.institution || teacher?.department) && (
              <>
                <span> | </span>
                {teacher?.institution || teacher?.department}
              </>
            )}
            {teacher?.employeeId && (
              <>
                <span> | </span>
                Company Code- {teacher.employeeId}
              </>
            )}
          </div>
          {Array.isArray(teacher?.subjects) && teacher.subjects.length > 0 && (
            <div className="skills-badges-wrapper-flex">
              {teacher.subjects.map((sub, idx) => {
                const label =
                  typeof sub === "string"
                    ? sub
                    : sub?.subjectName || sub?.title || sub?.name || "";
                return label ? (
                  <span className="skill-node-pill" key={sub?.id || idx}>
                    {label}
                  </span>
                ) : null;
              })}
            </div>
          )}
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="gl-dashboard-tabs-wrapper">
        <ul className="nav nav-pills gl-custom-nav-pills" role="tablist">
          {TABS.map((tab) => (
            <li className="nav-item" key={tab.id} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsEditing(false);
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Panel Render (Independent Component) */}
        <div
          className="tab-content gl-custom-tab-content-wrapper mt-3"
          role="tabpanel"
        >
          <ActiveComponent isEditing={isEditing} setIsEditing={setIsEditing} />
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
