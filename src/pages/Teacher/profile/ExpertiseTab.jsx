import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCommon from "../../../hooks/teacher/useCommon";
import useProfile from "../../../hooks/teacher/useProfile";
import AddSubjectModal from "../../../components/teacher/AddSubjectModal";

const getBadgeClass = (level) => {
  const l = (level || "").toLowerCase();
  if (l.includes("adv")) return "badge-advanced";
  if (l.includes("int")) return "badge-intermediate";
  return "badge-beginner";
};

const ExpertiseTab = ({
  isEditing: parentIsEditing,
  setIsEditing: parentSetIsEditing,
}) => {
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const isEditing =
    parentIsEditing !== undefined ? parentIsEditing : localIsEditing;
  const setIsEditing = parentSetIsEditing || setLocalIsEditing;
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      teachingStyle: "",
      preferredSessionDurationMinutes: "",
      maxUsersPerSession: "",
      timezone: "",
      isAvailableForOneOnOne: true,
      isAvailableForGroupSessions: true,
      subjects: [],
    },
    mode: "onBlur",
  });

  // GET query for expertise tab
  const { profileData, isPendingProfile, refetchProfile } = useCommon({
    tabs: "expertise",
  });

  // Profile mutations
  const {
    updateExpertiseAndPreferences,
    isUpdatingExpertisePreferences,
    addExpertiseSubject,
    isAddingExpertiseSubject,
    removeExpertiseSubject,
    isRemovingExpertiseSubject,
    getExpertiseDropdownOptions,
    isLoadingExpertiseDropdownOptions,


  } = useProfile();

  const [dropdownOptions, setDropdownOptions] = useState({
    levelOfMastery: [],
    teachingStyles: [],
    preferredSessionDurations: [],
    timezones: [],
    maxUsersPerSession: [],
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await getExpertiseDropdownOptions();
        const data = res?.data || res || {};
        setDropdownOptions({
          levelOfMastery: data?.levelOfMastery || [],
          teachingStyles: data?.teachingStyles || [],
          preferredSessionDurations: data?.preferredSessionDurations || [],
          timezones: data?.timezones || [],
          maxUsersPerSession: data?.maxUsersPerSession || data?.maxUsers || [],
        });
      } catch (err) {
        console.error("Failed to load expertise dropdown options:", err);
      }
    };
    fetchOptions();
  }, []);

  const rawSubjects = watch("subjects");
  const subjectsList = Array.isArray(rawSubjects) ? rawSubjects : [];

  // Hydrate local form when data arrives
  useEffect(() => {
    if (!profileData) return;
    const resData = profileData?.data || profileData;
    const details = resData?.details || resData?.user || resData || {};
    const preferences = details?.preferences || details || {};
    const apiSubjects = Array.isArray(details?.subjects) ? details.subjects : [];

    reset({
      teachingStyle: preferences?.teachingStyle || "",
      preferredSessionDurationMinutes:
        preferences?.preferredSessionDurationMinutes !== undefined &&
          preferences?.preferredSessionDurationMinutes !== null
          ? String(preferences.preferredSessionDurationMinutes)
          : "",
      maxUsersPerSession:
        preferences?.maxUsersPerSession !== undefined &&
          preferences?.maxUsersPerSession !== null
          ? String(preferences.maxUsersPerSession)
          : "",
      timezone: preferences?.timezone || "",
      isAvailableForOneOnOne:
        preferences?.isAvailableForOneOnOne !== undefined
          ? Boolean(preferences.isAvailableForOneOnOne)
          : true,
      isAvailableForGroupSessions:
        preferences?.isAvailableForGroupSessions !== undefined
          ? Boolean(preferences.isAvailableForGroupSessions)
          : true,
      subjects: apiSubjects,
    });
  }, [profileData, reset]);

  const [deletingSubjectId, setDeletingSubjectId] = useState(null);

  const handleDeleteSubject = async (id) => {
    if (!id || isRemovingExpertiseSubject) return;
    try {
      setDeletingSubjectId(id);
      await removeExpertiseSubject({ subjectId: id });
      const updated = subjectsList.filter(
        (item) => (item.id || item.subjectId) !== id
      );
      setValue("subjects", updated, { shouldDirty: true });
      toast.success("Subject deleted successfully");
      refetchProfile();
    } catch (err) {
      console.error("Remove subject failed:", err);
      const errorMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to delete subject";
      toast.error(errorMsg);
    } finally {
      setDeletingSubjectId(null);
    }
  };

  const handleAddSubject = (subjectData) => {
    const createdId = subjectData?.id || `sub_${Date.now()}`;
    setValue(
      "subjects",
      [...subjectsList, { ...subjectData, id: createdId }],
      { shouldDirty: true }
    );
    refetchProfile();
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        teachingStyle: data.teachingStyle || "",
        preferredSessionDurationMinutes:
          data.preferredSessionDurationMinutes !== "" &&
          data.preferredSessionDurationMinutes !== undefined
            ? Number(data.preferredSessionDurationMinutes)
            : 0,
        maxUsersPerSession:
          data.maxUsersPerSession !== "" &&
          data.maxUsersPerSession !== undefined
            ? Number(data.maxUsersPerSession)
            : 0,
        timezone: data.timezone || "",
        isAvailableForOneOnOne: data.isAvailableForOneOnOne ? 1 : 0,
        isAvailableForGroupSessions: data.isAvailableForGroupSessions ? 1 : 0,
      };

      await updateExpertiseAndPreferences(payload);
      toast.success("Expertise & preferences saved successfully!");
      setIsEditing(false);
      refetchProfile();
    } catch (err) {
      console.error("Update expertise failed:", err);
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to save expertise details";
      toast.error(msg);
    }
  };

  const isUpdating =
    isSubmitting ||
    isUpdatingExpertisePreferences ||
    isAddingExpertiseSubject ||
    isRemovingExpertiseSubject;

  return (
    <div className="expertise-tab-wrapper">
      <form id="profile-tab-active-form" onSubmit={handleSubmit(onSubmit)}>

        <div className="main-dashboard-wrapper">
          <div className="row g-4">
            {/* COLUMN 1: Subjects & Expertise Panel */}
            <div className="col-lg-6">
              <div className="dashboard-feature-card">
                <div>
                  <div className="panel-headline-title">
                    <i className="fa-regular fa-file-lines"></i> Subjects &amp;
                    Expertise
                  </div>

                  {/* Dynamic Subject Strips */}
                  {subjectsList.length > 0 ? (
                    subjectsList.map((subject) => {
                      const id = subject.id || subject.subjectId;
                      const name =
                        subject.subjectName || subject.title || "Subject";
                      const level =
                        subject.levelOfMastery || subject.level || "Beginner";
                      const exp =
                        subject.yearsOfExperience !== undefined
                          ? `${subject.yearsOfExperience} years teaching`
                          : subject.exp || "1 year teaching";

                      return (
                        <div className="subject-item-strip" key={id || name}>
                          <div className="subject-meta-left">
                            <h4 className="subject-title-text">{name}</h4>
                            <span
                              className={`expertise-badge-pill ${getBadgeClass(
                                level
                              )}`}
                            >
                              {level}
                            </span>
                            <span className="teaching-experience-subtext">
                              {exp}
                            </span>
                          </div>
                          {isEditing && (
                            <button
                              type="button"
                              className="btn-subject-strip-delete"
                              title="Remove Subject"
                              disabled={
                                isRemovingExpertiseSubject &&
                                deletingSubjectId === id
                              }
                              onClick={() => handleDeleteSubject(id)}
                            >
                              {isRemovingExpertiseSubject &&
                              deletingSubjectId === id ? (
                                <i className="fa-solid fa-spinner fa-spin"></i>
                              ) : (
                                <i className="fa-solid fa-xmark"></i>
                              )}
                            </button>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-3 text-muted small text-center">
                      No subjects added yet.
                    </div>
                  )}
                </div>

                <div className="d-flex gap-2 mt-3">
                  <button
                    type="button"
                    className="btn-append-primary-action flex-grow-1"
                    onClick={() => setShowAddSubjectModal(true)}
                    disabled={!isEditing}
                    style={
                      !isEditing
                        ? {
                          opacity: 0.5,
                          cursor: "not-allowed",
                          filter: "grayscale(20%)",
                        }
                        : {}
                    }
                    title={
                      !isEditing
                        ? "Click 'Edit Changes' to enable adding subjects"
                        : "Add Subject"
                    }
                  >
                    <i className="fa-solid fa-plus"></i> Add Subject
                  </button>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Teaching Preferences Panel */}
            <div className="col-lg-6">
              <div className="dashboard-feature-card">
                <div>
                  <div className="panel-headline-title">
                    <i className="fa-regular fa-file-lines"></i> Teaching
                    Preferences
                  </div>

                  <fieldset
                    disabled={!isEditing}
                    style={{ border: "none", padding: 0, margin: 0 }}
                  >
                    {/* Control Field 1: Teaching Style */}
                    <div className="preference-field-group">
                      <label className="preference-field-label">
                        Teaching Style
                      </label>
                      <div className="select-chevron-wrapper">
                        <select
                          className="custom-select-input-node"
                          {...register("teachingStyle")}
                        >
                          <option value="">
                            {isLoadingExpertiseDropdownOptions
                              ? "Loading styles..."
                              : "Select Teaching Style"}
                          </option>
                          {dropdownOptions.teachingStyles.map((item, idx) => {
                            const val =
                              typeof item === "object" ? item.value : item;
                            const lbl =
                              typeof item === "object" ? item.label : item;
                            return (
                              <option key={val || idx} value={val}>
                                {lbl}
                              </option>
                            );
                          })}
                        </select>
                        <i className="fa-solid fa-caret-down"></i>
                      </div>
                    </div>

                    {/* Control Field 2: Duration */}
                    <div className="preference-field-group">
                      <label className="preference-field-label">
                        Preferred Session Duration (minutes)
                      </label>
                      <div className="select-chevron-wrapper">
                        <select
                          className="custom-select-input-node"
                          {...register("preferredSessionDurationMinutes")}
                        >
                          <option value="">
                            {isLoadingExpertiseDropdownOptions
                              ? "Loading durations..."
                              : "Select Duration"}
                          </option>
                          {dropdownOptions.preferredSessionDurations.map(
                            (item, idx) => {
                              const val =
                                typeof item === "object" ? item.value : item;
                              const lbl =
                                typeof item === "object" ? item.label : item;
                              return (
                                <option key={val || idx} value={val}>
                                  {lbl}
                                </option>
                              );
                            }
                          )}
                        </select>
                        <i className="fa-solid fa-caret-down"></i>
                      </div>
                    </div>

                    {/* Control Field 3: Max Users */}
                    <div className="preference-field-group">
                      <label className="preference-field-label">
                        Max Users Per Session
                      </label>
                      <div className="select-chevron-wrapper">
                        <select
                          className="custom-select-input-node"
                          {...register("maxUsersPerSession")}
                        >
                          <option value="">Select Max Users</option>
                          {dropdownOptions.maxUsersPerSession.length > 0
                            ? dropdownOptions.maxUsersPerSession.map(
                              (item, idx) => {
                                const val =
                                  typeof item === "object"
                                    ? item.value
                                    : item;
                                const lbl =
                                  typeof item === "object"
                                    ? item.label
                                    : item;
                                return (
                                  <option key={val || idx} value={val}>
                                    {lbl}
                                  </option>
                                );
                              }
                            )
                            : [1, 5, 10, 20, 50].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                        </select>
                        <i className="fa-solid fa-caret-down"></i>
                      </div>
                    </div>

                    {/* Control Field 4: Timezone */}
                    <div className="preference-field-group mb-4">
                      <label className="preference-field-label">Timezone</label>
                      <div className="select-chevron-wrapper">
                        <select
                          className="custom-select-input-node"
                          {...register("timezone")}
                        >
                          <option value="">
                            {isLoadingExpertiseDropdownOptions
                              ? "Loading timezones..."
                              : "Select Timezone"}
                          </option>
                          {dropdownOptions.timezones.map((item, idx) => {
                            const val =
                              typeof item === "object" ? item.value : item;
                            const lbl =
                              typeof item === "object" ? item.label : item;
                            return (
                              <option key={val || idx} value={val}>
                                {lbl}
                              </option>
                            );
                          })}
                        </select>
                        <i className="fa-solid fa-caret-down"></i>
                      </div>
                    </div>

                    {/* Toggle Switch 1 */}
                    <div className="preference-toggle-item-line">
                      <div className="toggle-meta-headers">
                        <h5>Available for One-on-One Sessions</h5>
                        <p>Accept individual tutoring requests</p>
                      </div>
                      <div className="form-check form-switch p-0 m-0">
                        <input
                          className="form-check-input custom-form-switch-input mx-0"
                          type="checkbox"
                          role="switch"
                          {...register("isAvailableForOneOnOne")}
                        />
                      </div>
                    </div>

                    {/* Toggle Switch 2 */}
                    <div className="preference-toggle-item-line">
                      <div className="toggle-meta-headers">
                        <h5>Available for Group Sessions</h5>
                        <p>Accept group class requests</p>
                      </div>
                      <div className="form-check form-switch p-0 m-0">
                        <input
                          className="form-check-input custom-form-switch-input mx-0"
                          type="checkbox"
                          role="switch"
                          {...register("isAvailableForGroupSessions")}
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Custom Modal: Add Subject */}
      <AddSubjectModal
        show={showAddSubjectModal}
        onClose={() => setShowAddSubjectModal(false)}
        onAddSubject={handleAddSubject}
        isLoading={isAddingExpertiseSubject}
        masteryOptions={dropdownOptions.levelOfMastery}
      />
    </div>
  );
};


export default ExpertiseTab;


