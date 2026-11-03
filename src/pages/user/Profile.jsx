import React, { useState, useRef, useEffect } from "react";

import PersonalTab from "./studentProfileTabs/PersonalTab";
import InterestsTab from "./studentProfileTabs/InterestsTab";
import ProfessionalTab from "./studentProfileTabs/ProfessionalTab";
import DocumentsTab from "./studentProfileTabs/DocumentsTab";
import SecurityTab from "./studentProfileTabs/SecurityTab";

import EditProfile from "../../components/user/profile/EditProfile";
import AddQualification from "../../components/user/profile/AddQualification";
import AddNewCertification from "../../components/user/profile/AddNewCertification";
import DeactivateAccount from "../../components/user/profile/DeactivateAccount";
import RemoveCertification from "../../components/user/profile/RemoveCertification";
import RemoveQualification from "../../components/user/profile/RemoveQualification";
import EditCertification from "../../components/user/profile/EditCertification";
import EditQualification from "../../components/user/profile/EditQualification";
import useStudentProfile from "../../hooks/user/useStudentProfile";
import { baseURL } from "../../config/constant";

import toast from "react-hot-toast";

const Profile = () => {
  const {
    studentProfile,
    isLoadingStudentProfile,
    studentProfileError,
    refetchStudentProfile,

    saveStudentPersonalInfoAsync,
    isSavingStudentPersonalInfo,

    saveStudentInterestTagsAsync,
    isSavingStudentInterestTags,

    updateProfilePictureAsync,
    isUpdatingProfilePicture,
  } = useStudentProfile();

  const profileImageInputRef = useRef(null);
  const [previewProfileImage, setPreviewProfileImage] = useState(null);

  const personalInfo = studentProfile?.personal_info ?? {};

  const interestTags = studentProfile?.interest_tags ?? [];

  const professionalInfo = studentProfile?.professional_info ?? {};

  const qualifications = professionalInfo.qualifications ?? [];
  const certifications = professionalInfo.certifications ?? [];

  const documents = studentProfile?.documents ?? {};

  const uploadedDocuments = documents.documents ?? [];
  const photos = documents.photos ?? [];
  const videos = documents.videos ?? [];

  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "interests", label: "Interests & Tags" },
    { id: "professional", label: "Professional" },
    { id: "documents", label: "Documents" },
    { id: "security", label: "Security" },
  ];

  // for edit screen states
  const [personalFormData, setPersonalFormData] = useState({});
  const [interestFormTags, setInterestFormTags] = useState([]);

  // Open the file selector when the plus icon is clicked
  const handleProfileImageClick = () => {
    if (!isUpdatingProfilePicture) {
      profileImageInputRef.current?.click();
    }
  };

  // Upload the selected profile image
  const handleProfileImageChange = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Allow image files only
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      event.target.value = "";
      return;
    }

    // Optional: restrict image size to 5 MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5 MB.");
      event.target.value = "";
      return;
    }

    // Show a preview immediately
    const imagePreview = URL.createObjectURL(file);
    setPreviewProfileImage(imagePreview);

    const formData = new FormData();
    formData.append("profile_photo", file);

    try {
      const response = await updateProfilePictureAsync(formData);

      if (response?.success === false) {
        toast.error(response.message || "Unable to update profile picture.");

        setPreviewProfileImage(null);
        return;
      }

      toast.success(
        response?.message || "Profile picture updated successfully."
      );

      // Refresh the profile to get the latest image from the server
      await refetchStudentProfile();

      setPreviewProfileImage(null);
    } catch (error) {
      console.error("Profile picture upload error:", error);

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to upload profile picture. Please try again."
      );

      setPreviewProfileImage(null);
    } finally {
      // Allow selecting the same file again if needed
      event.target.value = "";
    }
  };

  // Clean up the temporary preview URL
  useEffect(() => {
    return () => {
      if (previewProfileImage) {
        URL.revokeObjectURL(previewProfileImage);
      }
    };
  }, [previewProfileImage]);

  const handleEditSave = async () => {
    // First click: enable editing

    if (!isEditing) {
      if (activeTab === "personal") {
        setPersonalFormData(personalInfo);
      }

      if (activeTab === "interests") {
        setInterestFormTags(interestTags);
      }

      setIsEditing(true);
      return;
    }

    if (activeTab === "interests") {
      const payload = {
        interest_tags_ids: interestFormTags.map((tag) => tag.id).join(","),
      };

      try {
        const response = await saveStudentInterestTagsAsync(payload);

        if (response?.success === false) {
          toast.error(response.message || "Unable to save interest tags.");
          return;
        }

        toast.success(response?.message || "Interest tags saved successfully.");

        await refetchStudentProfile();
        setIsEditing(false);
      } catch (error) {
        toast.error(
          error?.message ||
            error?.response?.data?.message ||
            "Unable to save interest tags."
        );
      }

      return;
    }

    // Save only when the Personal tab is active
    if (activeTab !== "personal") {
      setIsEditing(false);
      return;
    }

    const formData = new FormData();

    const fields = [
      "first_name",
      "last_name",
      "phone",
      "date_of_birth",
      "gender",
      "bio",
      "street_address",
      "city",
      "state_province",
      "country",
      "postal_code",
      "personal_website",
      "linkedin",
      "twitter",
      "youtube_channel",
    ];

    fields.forEach((field) => {
      formData.append(field, personalFormData[field] ?? "");
    });

    // Keep the student's existing organization
    formData.append("organization_id", personalInfo.organization_id ?? "");

    // The API expects organization_code, not organization_name
    formData.append("organization_code", personalInfo.organization_code ?? "");

    try {
      const response = await saveStudentPersonalInfoAsync(formData);

      if (response?.success === false) {
        toast.error(response.message || "Unable to save profile.");
        return;
      }

      toast.success(response?.message || "Profile updated successfully.");

      await refetchStudentProfile();
      setIsEditing(false);
    } catch (error) {
      toast.error(
        error?.message ||
          error?.response?.data?.message ||
          "Unable to save profile. Please try again."
      );
    }
  };

  // if (isLoadingStudentProfile) {
  //     return <p>Loading student profile...</p>;
  //   }

  //                   if (studentProfileError) {
  //     return (
  //                   <div className="p-4">
  //                       <p>Unable to load your profile.</p>

  //                       <button
  //                           type="button"
  //                           onClick={() => refetchStudentProfile()}
  //                       >
  //                           Try Again
  //                       </button>
  //                   </div>
  //                   );
  //   }

  //                   if (!studentProfile) {
  //     return <p>No profile data found.</p>;
  //   }

  const renderActiveTab = () => {
    switch (activeTab) {
      case "personal":
        return (
          <PersonalTab
            data={personalInfo}
            isEditing={isEditing}
            onFormDataChange={setPersonalFormData}
          />
        );

      case "interests":
        return (
          <InterestsTab
            data={interestTags}
            isEditing={isEditing}
            onTagsChange={setInterestFormTags}
          />
        );

      case "professional":
        return (
          <ProfessionalTab
            qualifications={qualifications}
            certifications={certifications}
            isEditing={isEditing}
          />
        );

      case "documents":
        return (
          <DocumentsTab
            documents={uploadedDocuments}
            photos={photos}
            videos={videos}
            isEditing={isEditing}
          />
        );

      case "security":
        return <SecurityTab isEditing={isEditing} />;

      default:
        return <PersonalTab data={personalInfo} />;
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        {/* Profile Header */}
        <header className="ps-header-container">
          <div className="ps-header-left">
            <button
              type="button"
              className="um-back-btn"
              aria-label="Go back"
              onClick={() => window.history.back()}
            >
              <img
                src="/images/user/super-user-dashboard/left-img-user-profile.svg"
                alt=""
              />
            </button>

            <div className="ps-text-group">
              <h1 className="ps-main-title">My Profile</h1>
              <p className="ps-sub-title">
                Manage user profile and permissions
              </p>
            </div>
          </div>

          <div className="ps-header-right">
            <button
              type="button"
              className="ps-action-btn spec-blue-btn"
              // data-bs-toggle="modal"
              // data-bs-target="#editUserProfileModal"
              // onClick={() => setIsEditing((previous) => !previous)}
              onClick={handleEditSave}
              disabled={
                isSavingStudentPersonalInfo || isSavingStudentInterestTags
              }
            >
              <img
                // src="/images/user/super-user-dashboard/su-mage_edit.svg"
                src={
                  isEditing
                    ? "/images/user/save-changes-icon.png"
                    : "/images/user/edit-icon.png"
                }
                alt=""
              />
              {isSavingStudentPersonalInfo || isSavingStudentInterestTags
                ? "Saving..."
                : isEditing
                ? "Save Changes"
                : "Edit Profile"}
            </button>
          </div>
        </header>

        {/* Profile Summary */}
        <div className="upc-card-container">
          <div className="upc-profile-section">
            {/* <div className="upc-avatar-wrapper">
                            <img
                                // src="/images/user/super-user-dashboard/su-james-chen.svg"
                                src={personalInfo?.profile_photo ? `${baseURL}/${personalInfo?.profile_photo}` : "/images/user/default_student.jpg"}
                                alt="User profile"
                                className="upc-avatar-img"
                            />
                        </div> */}

            <div className="upc-avatar-wrapper profile-picture-upload-wrapper">
              {/* Hidden file input */}
              <input
                type="file"
                ref={profileImageInputRef}
                accept="image/*"
                onChange={handleProfileImageChange}
                style={{ display: "none" }}
              />

              {/* Profile picture */}
              <img
                src={
                  previewProfileImage ||
                  (personalInfo?.profile_photo
                    ? `${baseURL.replace(
                        /\/$/,
                        ""
                      )}/${personalInfo.profile_photo.replace(/^\//, "")}`
                    : "/images/user/default_student.jpg")
                }
                alt="User profile"
                className="upc-avatar-img"
              />

              {/* Upload button */}
              <button
                type="button"
                className="profile-picture-upload-button"
                onClick={handleProfileImageClick}
                disabled={isUpdatingProfilePicture}
                aria-label="Upload profile picture"
                title="Upload profile picture"
              >
                {isUpdatingProfilePicture ? (
                  <span className="profile-picture-upload-spinner"></span>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="upc-info-wrapper">
              <div className="upc-name-row">
                {/* <h2 className="upc-user-name">James Chen</h2> */}
                <h2 className="upc-user-name">
                  {[personalInfo?.first_name, personalInfo?.last_name]
                    .filter(Boolean)
                    .join(" ")}
                </h2>
              </div>

              <p className="ps-sub-title">
                {/* ABC Organization | Organization ID: #10001 |
                                Company Code: D05 E5E5 */}
                {personalInfo.organization_name || "No organization"}
                {" | Organization ID: "}
                {personalInfo.organization_id || "N/A"}
                {" | Company Code: "}
                {personalInfo.organization_code || "N/A"}
              </p>

              <div className="upc-tags-container">
                {/* <span className="upc-tag">Technology</span>
                                <span className="upc-tag">Digital Equity</span>
                                <span className="upc-tag">Innovation</span> */}
                {interestTags.map((tag, i) => (
                  <span key={i} className="upc-tag">
                    {tag?.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="gl-dashboard-tabs-wrapper">
          <ul className="nav nav-pills gl-custom-nav-pills" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" role="presentation" key={tab.id}>
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

          <div className="gl-custom-tab-content-wrapper">
            {renderActiveTab()}
          </div>
        </div>
      </div>

      {/* Keep all existing modal components in the parent */}
      {/* <RemoveCertification /> */}
      {/* <RemoveQualification /> */}
      {/* <EditCertification /> */}
      {/* <EditQualification /> */}
      {/* <EditProfile /> */}
      {/* <AddQualification /> */}
      {/* <AddNewCertification /> */}
      {/* <DeactivateAccount /> */}
    </>
  );
};

export default Profile;
