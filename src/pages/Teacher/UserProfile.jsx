import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import useService from "../../hooks/teacher/useService";

const UserProfile = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const userId =
    searchParams.get("userId") ||
    searchParams.get("id") ||
    location.state?.userId ||
    location.state?.id;

  const { getUserData } = useService();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(userId));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const payload = userId ? { userId, user_id: userId } : {};
        const res = await getUserData(payload);
        if (res?.data) {
          setUserData(res.data);
        } else if (res) {
          setUserData(res);
        }
      } catch (err) {
        console.error("Failed to load complete user details:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, [userId, getUserData]);

  const profile = userData?.data || userData || {};
  const header = profile.header || {};
  const personal = profile.personal || {};
  const contactInfo = personal.contactInformation || {};
  const socialLinks = personal.socialAndPortfolioLinks || {};
  const interestsAndTags = Array.isArray(profile.interestsAndTags)
    ? profile.interestsAndTags
    : [];
  const qualifications = profile.qualifications || {};
  const educationalQualifications = Array.isArray(
    qualifications.educationalQualifications
  )
    ? qualifications.educationalQualifications
    : [];
  const certifications = Array.isArray(qualifications.certifications)
    ? qualifications.certifications
    : [];
  const photosAndVideos = profile.photosAndVideos || {};
  const photos = Array.isArray(photosAndVideos.photos)
    ? photosAndVideos.photos
    : [];
  const videos = Array.isArray(photosAndVideos.videos)
    ? photosAndVideos.videos
    : [];
  const recentActivity = Array.isArray(profile.recentActivity)
    ? profile.recentActivity
    : [];
  const comingSoonList = Array.isArray(profile.comingSoon)
    ? profile.comingSoon
    : [];

  const isComingSoon = (fieldKey) => comingSoonList.includes(fieldKey);

  const userName =
    header.name ||
    profile.name ||
    profile.user_name ||
    profile.full_name ||
    profile.user?.name ||
    "User";
  const userAvatar =
    header.avatarUrl ||
    header.avatar ||
    profile.avatar ||
    profile.profile_image ||
    profile.user_avatar ||
    profile.user?.avatar ||
    "/images/teacher/super-user-dashboard/su-james-chen.svg";
  const userStatus = header.status || profile.status || "active";
  const userRole = header.role || profile.role || profile.role_name || "user";
  const userIdDisplay =
    header.userCode ||
    profile.id_display ||
    profile.id_number ||
    (userId ? `#${userId}` : profile.id ? `#${profile.id}` : "");
  const userOrganization =
    header.organization ||
    profile.school_district ||
    profile.organization ||
    profile.company ||
    "";
  const userSite =
    socialLinks.personalWebsite ||
    header.website ||
    profile.domain ||
    profile.website ||
    "";
  const userCode = header.userCode || profile.code || profile.coupon_code || "";
  const userTags =
    Array.isArray(header.profileTags) && header.profileTags.length > 0
      ? header.profileTags
      : interestsAndTags.length > 0
      ? interestsAndTags
      : Array.isArray(profile.tags) && profile.tags.length > 0
      ? profile.tags
      : [];
  const userEmail =
    contactInfo.email || profile.email || profile.user?.email || "";
  const userPhone =
    contactInfo.phone || profile.phone || profile.contact_number || "";
  const userDob =
    contactInfo.dob || profile.dob || profile.date_of_birth || "";
  const userGender = contactInfo.gender || profile.gender || "";
  const userAddress = contactInfo.address || profile.address || "";
  const userLanguage = contactInfo.language || profile.language || "";
  const userBio = contactInfo.bio || profile.bio || "";

  const websiteUrl =
    socialLinks.personalWebsite ||
    profile.social_links?.website ||
    profile.website ||
    "";
  const linkedinUrl =
    socialLinks.linkedIn ||
    profile.social_links?.linkedin ||
    profile.linkedin ||
    "";
  const twitterUrl =
    socialLinks.twitter ||
    profile.social_links?.twitter ||
    profile.twitter ||
    "";
  const youtubeUrl =
    socialLinks.youtubeChannel ||
    profile.social_links?.youtube ||
    profile.youtube ||
    "";

  return (
    <>
      <main className="gl-content-body">
        <div className="container-fluid p-0">
          <header className="ps-header-container">
            <div className="ps-header-left">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="um-back-btn"
                aria-label="Go back"
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <img
                  src="/images/teacher/super-user-dashboard/left-img-user-profile.svg"
                  alt="Back"
                />
              </button>
              <div className="ps-text-group">
                <h1 className="ps-main-title">User Profile</h1>
                <p className="ps-sub-title">
                  Manage user profile and permissions
                </p>
              </div>
            </div>
          </header>

          {isLoading ? (
            <div className="p-5 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading profile...</span>
              </div>
              <p className="mt-3 text-muted">Loading user profile...</p>
            </div>
          ) : (
            <div className="upc-card-container">
              <div className="upc-profile-section">
                <div className="upc-avatar-wrapper">
                  <img
                    src={userAvatar}
                    alt={userName}
                    className="upc-avatar-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "/images/teacher/super-user-dashboard/su-james-chen.svg";
                    }}
                  />
                </div>

                <div className="upc-info-wrapper">
                  <div className="upc-name-row">
                    <h2 className="upc-user-name">{userName}</h2>
                    {userStatus && (
                      <span
                        className={`upc-badge ${
                          userStatus.toLowerCase() === "active"
                            ? "upc-badge-active"
                            : "upc-badge-inactive"
                        }`}
                        style={{ textTransform: "capitalize" }}
                      >
                        {userStatus}
                      </span>
                    )}
                  </div>

                  <div className="upc-role-row">
                    {userRole && (
                      <span
                        className="upc-badge upc-badge-blue"
                        style={{ textTransform: "capitalize" }}
                      >
                        {userRole}
                      </span>
                    )}
                  </div>

                  <ul className="upc-details-list">
                    {userIdDisplay && (
                      <li>
                        <img
                          src="/images/teacher/super-user-dashboard/su-mage_id-card.svg"
                          alt=""
                        />
                        <span>{userIdDisplay}</span>
                      </li>
                    )}
                    {userOrganization && (
                      <li>
                        <img
                          src="/images/teacher/super-user-dashboard/su-lets-icons_map-light.svg"
                          alt=""
                        />
                        <span>{userOrganization}</span>
                      </li>
                    )}
                    {(userSite || userCode) && (
                      <li>
                        <div className="upc-inline-details">
                          {userSite && (
                            <span>
                              <img
                                src="/images/teacher/super-user-dashboard/su-mage_building-b.svg"
                                alt=""
                              />
                              {userSite}
                            </span>
                          )}
                          {userCode && (
                            <span>
                              <img
                                src="/images/teacher/super-user-dashboard/su-hugeicons_coupon-percent.svg"
                                alt=""
                              />{" "}
                              {userCode}
                            </span>
                          )}
                        </div>
                      </li>
                    )}
                  </ul>

                  {userTags && userTags.length > 0 && (
                    <div className="upc-tags-container">
                      {userTags.map((tag, idx) => (
                        <span className="upc-tag" key={idx}>
                          {typeof tag === "object"
                            ? tag.name || tag.label || tag.title
                            : tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="gl-dashboard-tabs-wrapper">
            <ul
              className="nav nav-pills gl-custom-nav-pills"
              id="dashboardMatrixTabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="tab-personal-trigger"
                  data-bs-toggle="pill"
                  data-bs-target="#pane-personal"
                  type="button"
                  role="tab"
                >
                  Personal
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-interests-trigger"
                  data-bs-toggle="pill"
                  data-bs-target="#pane-interests-tags"
                  type="button"
                  role="tab"
                >
                  Interests & Tags
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-qualifications-trigger"
                  data-bs-toggle="pill"
                  data-bs-target="#pane-qualifications"
                  type="button"
                  role="tab"
                >
                  Qualifications
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-photos-trigger"
                  data-bs-toggle="pill"
                  data-bs-target="#pane-photos"
                  type="button"
                  role="tab"
                >
                  Photos & Videos
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-activity-trigger"
                  data-bs-toggle="pill"
                  data-bs-target="#pane-activity"
                  type="button"
                  role="tab"
                >
                  Activity
                </button>
              </li>
            </ul>

            <div
              className="tab-content gl-custom-tab-content-wrapper"
              id="dashboardMatrixTabsContent"
            >
              {/* OVERVIEW CORE DASHBOARD WRAPPER */}
              <div
                className="tab-pane fade show active"
                id="pane-personal"
                role="tabpanel"
              >
                <div className="ci-section-container">
                  <div className="ci-section-header">
                    <img
                      src="/images/teacher/super-user-dashboard/contact-information.svg"
                      alt=""
                    />
                    <h3>Contact Information</h3>
                  </div>

                  <form className="ci-flex-layout" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                    <div className="ci-info-card ci-half-width">
                      <img
                        src="/images/teacher/super-user-dashboard/su-hugeicons_mail-01.svg"
                        alt=""
                      />
                      <input
                        type="email"
                        className="ci-form-input"
                        name="email"
                        value={userEmail}
                        placeholder="Email Address"
                        disabled
                      />
                    </div>

                    <div className="ci-info-card ci-half-width">
                      <img
                        src="/images/teacher/super-user-dashboard/su-fluent_call-24-regular.svg"
                        alt=""
                      />
                      <input
                        type="tel"
                        className="ci-form-input"
                        name="phone"
                        value={userPhone}
                        placeholder="Phone Number"
                        disabled
                      />
                    </div>

                    <div className="ci-info-card ci-half-width">
                      <img
                        src="/images/teacher/super-user-dashboard/su-proicons_cake.svg"
                        alt=""
                      />
                      <input
                        type="text"
                        className="ci-form-input"
                        name="dob"
                        value={userDob}
                        placeholder="Date of Birth (DD-MM-YYYY)"
                        disabled
                      />
                    </div>

                    <div className="ci-info-card ci-half-width">
                      <img
                        src="/images/teacher/super-user-dashboard/su-icons8_gender.svg"
                        alt=""
                      />
                      <select
                        className="ci-form-input ci-form-select"
                        name="gender"
                        value={
                          userGender
                            ? userGender.charAt(0).toUpperCase() +
                              userGender.slice(1).toLowerCase()
                            : ""
                        }
                        disabled
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="ci-info-card ci-half-width">
                      <img
                        src="/images/teacher/super-user-dashboard/su-hugeicons_location-05.svg"
                        alt=""
                      />
                      <input
                        type="text"
                        className="ci-form-input"
                        name="address"
                        value={userAddress}
                        placeholder="Address"
                        disabled
                      />
                    </div>

                    <div className="ci-info-card ci-half-width">
                      <img
                        src="/images/teacher/super-user-dashboard/su-heroicons_language-solid.svg"
                        alt=""
                      />
                      <input
                        type="text"
                        className="ci-form-input"
                        name="language"
                        value={userLanguage}
                        placeholder={
                          isComingSoon("personal.contactInformation.language")
                            ? "Language (Coming Soon)"
                            : "Language"
                        }
                        disabled
                      />
                    </div>

                    <div className="ci-info-card ci-full-width">
                      <img
                        src="/images/teacher/super-user-dashboard/su-hugeicons_user-03.svg"
                        alt=""
                      />
                      <textarea
                        className="ci-form-input ci-form-textarea"
                        name="bio"
                        rows="4"
                        placeholder="Tell us about yourself..."
                        value={userBio}
                        disabled
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div className="spl-section-container">
                  <div className="spl-section-header">
                    <img
                      src="/images/teacher/super-user-dashboard/su-pajamas_earth.svg"
                      alt=""
                    />
                    <h3>Social & Portfolio Links</h3>
                  </div>

                  <div className="spl-flex-layout">
                    <a
                      href={websiteUrl || "#"}
                      target={websiteUrl ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`spl-link-card ${!websiteUrl ? "opacity-75" : ""}`}
                      onClick={(e) => {
                        if (!websiteUrl || websiteUrl === "#") e.preventDefault();
                      }}
                    >
                      <div className="spl-left-content">
                        <img
                          src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg"
                          alt=""
                        />
                        <span className="spl-link-text">
                          {websiteUrl || "Personal Website"}
                        </span>
                      </div>
                      <img
                        src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                        alt=""
                      />
                    </a>

                    <a
                      href={linkedinUrl || "#"}
                      target={linkedinUrl ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`spl-link-card ${!linkedinUrl ? "opacity-75" : ""}`}
                      onClick={(e) => {
                        if (!linkedinUrl || linkedinUrl === "#") e.preventDefault();
                      }}
                    >
                      <div className="spl-left-content">
                        <img
                          src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg"
                          alt=""
                        />
                        <span className="spl-link-text">
                          {linkedinUrl || "LinkedIn"}
                        </span>
                      </div>
                      <img
                        src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                        alt=""
                      />
                    </a>

                    <a
                      href={twitterUrl || "#"}
                      target={twitterUrl ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`spl-link-card ${!twitterUrl ? "opacity-75" : ""}`}
                      onClick={(e) => {
                        if (!twitterUrl || twitterUrl === "#") e.preventDefault();
                      }}
                    >
                      <div className="spl-left-content">
                        <img
                          src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg"
                          alt=""
                        />
                        <span className="spl-link-text">
                          {twitterUrl || "Twitter/X"}
                        </span>
                      </div>
                      <img
                        src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                        alt=""
                      />
                    </a>

                    <a
                      href={youtubeUrl || "#"}
                      target={youtubeUrl ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`spl-link-card ${!youtubeUrl ? "opacity-75" : ""}`}
                      onClick={(e) => {
                        if (!youtubeUrl || youtubeUrl === "#") e.preventDefault();
                      }}
                    >
                      <div className="spl-left-content">
                        <img
                          src="/images/teacher/super-user-dashboard/iconamoon_link-light.svg"
                          alt=""
                        />
                        <span className="spl-link-text">
                          {youtubeUrl || "YouTube Channel"}
                        </span>
                      </div>
                      <img
                        src="/images/teacher/super-user-dashboard/su-hugeicons_image-upload-01.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Tabs Content View Blockholders */}
              <div
                className="tab-pane fade"
                id="pane-interests-tags"
                role="tabpanel"
              >
                <div className="it-section-container">
                  <div className="it-section-header">
                    <img
                      src="/images/teacher/super-user-dashboard/su-interests-tags.svg"
                      alt=""
                    />
                    <h3>Interests & Tags</h3>
                  </div>

                  <div className="it-tags-layout">
                    {userTags && userTags.length > 0 ? (
                      userTags.map((tag, idx) => (
                        <span className="it-badge-tag" key={idx}>
                          {typeof tag === "object"
                            ? tag.name || tag.label || tag.title
                            : tag}
                        </span>
                      ))
                    ) : (
                      <p className="text-muted m-0">
                        No interests or tags added yet.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pane-qualifications"
                role="tabpanel"
              >
                <div className="ql-main-flex-wrapper">
                  <div className="ql-column-block">
                    <div className="ql-section-header">
                      <img
                        src="/images/teacher/super-user-dashboard/su-streamline-plump_graduation-cap.svg"
                        alt=""
                      />
                      <h3>Educational Qualifications</h3>
                    </div>

                    <div className="ql-cards-stack">
                      {educationalQualifications.length > 0 ? (
                        educationalQualifications.map((item, idx) => (
                          <div className="ql-info-card" key={idx}>
                            <div className="ql-icon-thumb">
                              <img
                                src="/images/teacher/super-user-dashboard/su-stanford-university.svg"
                                alt=""
                              />
                            </div>
                            <div className="ql-card-details">
                              <h4 className="ql-card-title">
                                {item.degree ||
                                  item.title ||
                                  item.name ||
                                  "Degree / Qualification"}
                              </h4>
                              <p className="ql-card-subtitle">
                                {item.institution ||
                                  item.university ||
                                  item.school ||
                                  "Institution / University"}
                              </p>
                              <p className="ql-card-meta">
                                {[
                                  item.specialization ||
                                    item.fieldOfStudy ||
                                    item.major,
                                  item.year || item.graduationYear,
                                ]
                                  .filter(Boolean)
                                  .join(" • ") || "--"}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted py-2 m-0">
                          No educational qualifications added yet.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="ql-column-block">
                    <div className="ql-section-header">
                      <img
                        src="/images/teacher/super-user-dashboard/su-certifications.svg"
                        alt=""
                      />
                      <h3>Certifications</h3>
                    </div>

                    <div className="ql-cards-stack">
                      {certifications.length > 0 ? (
                        certifications.map((cert, idx) => (
                          <div className="ql-info-card" key={idx}>
                            <div className="ql-icon-thumb-alt">
                              <img
                                src="/images/teacher/super-user-dashboard/su-cil_badge.svg"
                                alt=""
                              />
                            </div>
                            <div className="ql-card-details ql-full-width-details">
                              <h4 className="ql-card-title">
                                {cert.title ||
                                  cert.name ||
                                  cert.certificationName ||
                                  "Certification"}
                              </h4>
                              {(cert.issuingOrganization ||
                                cert.organization ||
                                cert.issuer) && (
                                <p className="ql-card-subtitle">
                                  {cert.issuingOrganization ||
                                    cert.organization ||
                                    cert.issuer}
                                </p>
                              )}
                              {(cert.credentialId || cert.credential_id) && (
                                <p className="ql-card-credential">
                                  Credential ID:{" "}
                                  {cert.credentialId || cert.credential_id}
                                </p>
                              )}
                              {(cert.issueDate ||
                                cert.expiryDate ||
                                cert.issue_date ||
                                cert.expiry_date) && (
                                <div className="ql-card-dates">
                                  {(cert.issueDate || cert.issue_date) && (
                                    <span>
                                      Issued: {cert.issueDate || cert.issue_date}
                                    </span>
                                  )}
                                  {(cert.expiryDate || cert.expiry_date) && (
                                    <span>
                                      Expires: {cert.expiryDate || cert.expiry_date}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted py-2 m-0">
                          No certifications added yet.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pane-photos" role="tabpanel">
                <div className="pv-section-container">
                  <div className="pv-section-header">
                    <img
                      src="/images/teacher/super-user-dashboard/photos-videos.svg"
                      alt=""
                    />
                    <h3>Photos & Videos</h3>
                  </div>

                  <div className="pv-sub-block">
                    <h4 className="pv-sub-title">Photos</h4>
                    {photos.length > 0 ? (
                      <div className="pv-flex-row">
                        {photos.map((photo, idx) => {
                          const src =
                            typeof photo === "string"
                              ? photo
                              : photo?.url || photo?.image || photo?.src;
                          return (
                            <div
                              className="pv-media-item pv-photo-item"
                              key={idx}
                            >
                              <img
                                src={src}
                                alt={photo?.title || `Photo ${idx + 1}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-muted py-2 m-0">
                        {isComingSoon("photosAndVideos.photos")
                          ? "Photos coming soon."
                          : "No photos available."}
                      </p>
                    )}
                  </div>

                  <div className="pv-sub-block">
                    <h4 className="pv-sub-title">Videos</h4>
                    {videos.length > 0 ? (
                      <div className="pv-flex-row">
                        {videos.map((video, idx) => {
                          const thumb =
                            typeof video === "string"
                              ? video
                              : video?.thumbnail ||
                                video?.url ||
                                "/images/teacher/super-user-dashboard/su-video-placeholder.png";
                          return (
                            <div
                              className="pv-media-item pv-video-item"
                              key={idx}
                            >
                              <img
                                src={thumb}
                                alt={video?.title || `Video ${idx + 1}`}
                              />
                              <div className="pv-play-overlay">
                                <img
                                  src="/images/teacher/super-user-dashboard/su-play-icon.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-muted py-2 m-0">
                        {isComingSoon("photosAndVideos.videos")
                          ? "Videos coming soon."
                          : "No videos available."}
                      </p>
                    )}
                  </div>
                </div>
              </div>


{/* extra */}
                            <div className="tab-pane fade" id="pane-service-details" role="tabpanel">
                                <div className="gl-matrix-display-card">
                                    <div className="gl-service-header">
                                        <i className="far fa-clock gl-header-icon"></i>
                                        <h4 className="gl-header-title">Service Details</h4>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table gl-matrix-data-table align-middle">
                                            <thead>
                                                <tr>
                                                    <th className="gl-th-name">Service Name</th>
                                                    <th>Teacher Assigned</th>
                                                    <th>Program Officer</th>
                                                    <th>Progress</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Guidance</td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
                                                                alt="James Chen" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">James Chen</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80"
                                                                alt="Nolan Levin" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Nolan Levin</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-progress-wrapper">
                                                            <span className="gl-progress-text">92%</span>
                                                            <div className="progress gl-custom-progress-bg">
                                                                <div className="progress-bar gl-progress-bar-fill w-92"
                                                                    role="progressbar" aria-valuenow="92"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-in-progress">In Progress</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn gl-btn-view">
                                                            <i className="far fa-eye me-2"></i> View
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">One-on-One Coaching</td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
                                                                alt="Vincent Cervantes" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Vincent Cervantes</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80"
                                                                alt="Ryan Workman" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Ryan Workman</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-progress-wrapper">
                                                            <span className="gl-progress-text">20%</span>
                                                            <div className="progress gl-custom-progress-bg">
                                                                <div className="progress-bar gl-progress-bar-fill w-20"
                                                                    role="progressbar" aria-valuenow="20"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-in-progress">In Progress</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn gl-btn-view">
                                                            <i className="far fa-eye me-2"></i> View
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Skill Development Events
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80"
                                                                alt="Devin Harris" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Devin Harris</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-cell-admin">
                                                            <img src="https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&q=80&w=80"
                                                                alt="Alfredo Dorwart" className="gl-admin-avatar" />
                                                            <span className="gl-link-admin-name">Alfredo Dorwart</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="gl-progress-wrapper">
                                                            <span className="gl-progress-text">100%</span>
                                                            <div className="progress gl-custom-progress-bg">
                                                                <div className="progress-bar gl-progress-bar-fill w-100"
                                                                    role="progressbar" aria-valuenow="100"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-completed">Completed</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn gl-btn-view">
                                                            <i className="far fa-eye me-2"></i> View
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="gl-matrix-display-card">
                                    {/* <!-- Header Section --> */}
                                    <div className="gl-course-header">
                                        <i className="fas fa-book-open gl-header-icon"></i>
                                        <h4 className="gl-header-title">Course Details</h4>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table gl-matrix-data-table align-middle">
                                            <thead>
                                                <tr>
                                                    <th className="gl-th-course">Course Name</th>
                                                    <th className="gl-th-module">Module</th>
                                                    <th className="gl-th-lesson">Lesson</th>
                                                    <th className="text-center gl-th-status">Status</th>
                                                    <th className="text-center gl-th-ratings">Ratings</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <!-- Row 1: Main Course Header --> */}
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Planning Workshop
                                                    </td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>All Modules</span>
                                                            <i className="fas fa-chevron-up gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-completed">Completed</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="gl-rating-wrapper">
                                                            <i className="fas fa-star gl-star-icon"></i>
                                                            <span>4.8</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* <!-- Row 2: Sub-Module 1 (Expanded) --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-1">
                                                    <td className="gl-empty-cell"></td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>Module 1</span>
                                                            <i className="fas fa-chevron-up gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 3: Lesson 1 under Module 1 --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-2">
                                                    <td className="gl-empty-cell"></td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td>Lesson 1</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-pending">Pending</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 4: Lesson 2 under Module 1 --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-2">
                                                    <td className="gl-empty-cell"></td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td>Lesson 2</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-reviewed">Reviewed</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 5: Lesson 3 under Module 1 --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-2">
                                                    <td className="gl-empty-cell"></td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td>Lesson 3</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-reviewed">Reviewed</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 6: Module 2 (Collapsed) --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-1">
                                                    <td className="gl-empty-cell"></td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>Module 2</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 7: Module 3 (Collapsed) --> */}
                                                <tr className="gl-matrix-row gl-sub-row-level-1">
                                                    <td className="gl-empty-cell"></td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>Module 3</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 8: Course 2 (Needs Improvement) --> */}
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Planning Workshop
                                                    </td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>All Modules</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-needs-improvement">Needs
                                                            Improvement</span>
                                                    </td>
                                                    <td className="text-center gl-empty-cell">--</td>
                                                </tr>

                                                {/* <!-- Row 9: Course 3 --> */}
                                                <tr className="gl-matrix-row">
                                                    <td className="gl-cell-plain-text gl-cell-bold">Career Planning Workshop
                                                    </td>
                                                    <td>
                                                        <div className="gl-dropdown-cell">
                                                            <span>All Modules</span>
                                                            <i className="fas fa-chevron-down gl-arrow-indicator"></i>
                                                        </div>
                                                    </td>
                                                    <td className="gl-empty-cell">--</td>
                                                    <td className="text-center">
                                                        <span className="gl-status-pill pill-completed">Completed</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="gl-rating-wrapper">
                                                            <i className="fas fa-star gl-star-icon"></i>
                                                            <span>4.8</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>





                            </div>

                            {/* extra */}

                            <div className="tab-pane fade" id="pane-activity" role="tabpanel">
                                <div className="act-section-container">
                                    <div className="act-section-header">
                                        <img src="/images/teacher/super-user-dashboard/su-ion_time-outline.svg" alt="" />
                                        <h3>Recent Activity</h3>
                                    </div>

                                    <div className="act-timeline-wrapper">
                                        {recentActivity.length > 0 ? (
                                            recentActivity.map((act, idx) => (
                                                <div className="act-timeline-item" key={idx}>
                                                    <div className="act-left-block">
                                                        <span className="act-status-dot"></span>
                                                        <div className="act-content-meta">
                                                            <h4 className="act-title-text">
                                                                {act.title || act.description || act.name || act.activity || "Activity"}
                                                            </h4>
                                                            <span className="act-date-text">
                                                                {act.date || act.created_at || act.timestamp || ""}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="act-right-block">
                                                        <span className="act-type-badge">
                                                            {act.type || act.category || act.action || "Activity"}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-muted py-2 m-0">
                                                {isComingSoon("recentActivity")
                                                    ? "Recent activity coming soon."
                                                    : "No recent activity available."}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
                {/* </div> */}
            </main>
        </>
    )
}

export default UserProfile