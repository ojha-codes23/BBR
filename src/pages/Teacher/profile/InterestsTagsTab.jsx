import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCommon from "../../../hooks/teacher/useCommon";
import useProfile from "../../../hooks/teacher/useProfile";

const InterestsTagsTab = ({
  isEditing: parentIsEditing,
  setIsEditing: parentSetIsEditing,
}) => {
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const isEditing =
    parentIsEditing !== undefined ? parentIsEditing : localIsEditing;
  const setIsEditing = parentSetIsEditing || setLocalIsEditing;
  const [searchQuery, setSearchQuery] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchWrapperRef = useRef(null);

  const {
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      interests: [],
    },
    mode: "onBlur",
  });

  // Query for interests tab
  const { profileData, isPendingProfile, refetchProfile } = useCommon({
    tabs: "interests-tags",
  });
  const { searchTAGs,
    isSearchingTags,
    isSearchingError,

    updateTags,
    isUpdateTags,
    isUpdateTagsError, } = useProfile();
  //
  const rawInterests = watch("interests");
  const selectedTags = Array.isArray(rawInterests) ? rawInterests : [];

  // Hydrate local form and available tags from profile data
  useEffect(() => {
    if (!profileData) return;
    const resData = profileData?.data || profileData;
    const details = resData?.details || resData?.user || resData || {};

    const selected = Array.isArray(details?.selectedTags)
      ? details.selectedTags
      : Array.isArray(details?.interests)
        ? details.interests
        : Array.isArray(details?.tags)
          ? details.tags
          : [];

    reset({ interests: selected });

    const available = Array.isArray(details?.availableTags)
      ? details.availableTags
      : [];
    setAvailableTags(available);
  }, [profileData, reset]);

  // Debounced searchTAGs call when user types in search box
  useEffect(() => {
    const trimmed = searchQuery.trim();
    if (!trimmed) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await searchTAGs({ search: trimmed });
        const list = res;
        setSuggestions(list);
        setShowSuggestions(true);
      } catch (err) {
        console.error("Search tags failed:", err);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [searchQuery, searchTAGs]);

  // Close suggestion dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAddTag = (tag) => {
    if (!isEditing) return;
    const tagName = typeof tag === "object" ? tag.name : tag;
    if (!tagName) return;

    const alreadyExists = selectedTags.some(
      (item) =>
        (typeof item === "object" ? item.name : item)?.toLowerCase() ===
        tagName.toLowerCase()
    );
    if (!alreadyExists) {
      setValue("interests", [...selectedTags, tagName], { shouldDirty: true });
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    if (!isEditing) return;
    const target =
      typeof tagToRemove === "object" ? tagToRemove.name : tagToRemove;
    const updated = selectedTags.filter(
      (item) =>
        (typeof item === "object" ? item.name : item)?.toLowerCase() !==
        target.toLowerCase()
    );
    setValue("interests", updated, { shouldDirty: true });
  };

  // Filter available tags that aren't already selected and match search query
  const filteredAvailableTags = availableTags.filter((tagItem) => {
    const tagName = typeof tagItem === "object" ? tagItem.name : tagItem;
    if (!tagName) return false;

    const isAlreadySelected = selectedTags.some(
      (sel) =>
        (typeof sel === "object" ? sel.name : sel)?.toLowerCase() ===
        tagName.toLowerCase()
    );
    if (isAlreadySelected) return false;

    const query = searchQuery.trim().toLowerCase();
    return !query || tagName.toLowerCase().includes(query);
  });

  const onSubmit = async () => {
    try {
      const tagNames = selectedTags
        .map((t) => (typeof t === "object" ? t.name : t))
        .filter(Boolean);

      const payload = {
        selectedTags: tagNames,
      };

      await updateTags(payload);
      toast.success("Interests & tags saved successfully!");
      setIsEditing(false);
      refetchProfile();
    } catch (err) {
      console.error("Save interests failed:", err);
      const errorMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to save interests & tags";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="interests-tab-wrapper">
      <form id="profile-tab-active-form" onSubmit={handleSubmit(onSubmit)}>
        <main className="interests-master-card">
          <h2 className="interests-header-title">
            <i className="fa-regular fa-bookmark"></i> Tags &amp; Preferences
          </h2>
          <p className="interests-sub-description">
            Select tags to personalize your course, event, and resource
            recommendations
          </p>

          <fieldset
            disabled={!isEditing || isUpdateTags || isSubmitting}
            style={{ border: "none", padding: 0, margin: 0 }}
          >
            <div className="interests-form-body">
              {/* Search Control Element */}
              <div className="search-tags-input-group" ref={searchWrapperRef}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className="search-tags-field-control"
                  placeholder="Search Tags"
                  value={searchQuery}
                  disabled={!isEditing}
                  onFocus={() => {
                    if (suggestions.length > 0) setShowSuggestions(true);
                  }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Suggestions Dropdown */}
                {isEditing && showSuggestions && searchQuery.trim() && (
                  <div
                    className="tags-suggestion-dropdown"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 4px)",
                      left: 0,
                      right: 0,
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      border: "1px solid #d0d5dd",
                      boxShadow:
                        "0 10px 25px -5px rgba(16, 24, 40, 0.1), 0 8px 10px -6px rgba(16, 24, 40, 0.08)",
                      zIndex: 100,
                      maxHeight: "220px",
                      overflowY: "auto",
                      padding: "6px 0",
                    }}
                  >
                    {isSearchingTags ? (
                      <div
                        style={{
                          padding: "10px 16px",
                          color: "#667085",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        <span>Searching tags...</span>
                      </div>
                    ) : suggestions.length > 0 ? (
                      suggestions.map((item, idx) => {
                        const tagName =
                          typeof item === "object" ? item.name : item;
                        const tagId =
                          typeof item === "object" ? item.id : tagName;
                        const isSelected = selectedTags.some(
                          (sel) =>
                            (typeof sel === "object"
                              ? sel.name
                              : sel
                            )?.toLowerCase() === tagName?.toLowerCase()
                        );

                        return (
                          <div
                            key={tagId || idx}
                            onClick={() => {
                              if (!isSelected) {
                                handleAddTag(tagName);
                              }
                              setShowSuggestions(false);
                              setSearchQuery("");
                            }}
                            style={{
                              padding: "10px 16px",
                              cursor: isSelected ? "default" : "pointer",
                              fontSize: "14px",
                              fontWeight: 500,
                              color: isSelected ? "#98a2b3" : "#101828",
                              backgroundColor: isSelected
                                ? "#f9fafb"
                                : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              transition: "background-color 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected)
                                e.currentTarget.style.backgroundColor =
                                  "#f2f4f7";
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected)
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                            }}
                          >
                            <span>{tagName}</span>
                            {isSelected ? (
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "#0284c7",
                                }}
                              >
                                Added
                              </span>
                            ) : (
                              <i
                                className="fa-solid fa-plus"
                                style={{
                                  fontSize: "12px",
                                  color: "#667085",
                                }}
                              ></i>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <div
                        style={{
                          padding: "10px 16px",
                          color: "#667085",
                          fontSize: "14px",
                        }}
                      >
                        No tags found matching "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Block 1: Currently Selected State Panels */}
              <h3 className="tags-section-heading">
                Your Selected Tags ({selectedTags.length})
              </h3>
              <div className="tags-flex-cloud-deck">
                {isPendingProfile ? (
                  <p className="text-muted small">Loading tags...</p>
                ) : selectedTags.length > 0 ? (
                  selectedTags.map((tag) => {
                    const tagName = typeof tag === "object" ? tag.name : tag;
                    return (
                      <div className="pill-badge-selected-node" key={tagName}>
                        {tagName}{" "}
                        {isEditing && (
                          <i
                            className="fa-solid fa-xmark"
                            role="button"
                            tabIndex={0}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleRemoveTag(tagName)}
                          ></i>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <p className="text-muted small">No tags selected yet.</p>
                )}
              </div>

              {/* Block 2: Pool of Available Elements */}
              <h3 className="tags-section-heading">Available Tags</h3>
              <div className="tags-flex-cloud-deck">
                {isPendingProfile ? (
                  <p className="text-muted small">Loading available tags...</p>
                ) : filteredAvailableTags.length > 0 ? (
                  filteredAvailableTags.map((tagItem) => {
                    const tagName =
                      typeof tagItem === "object" ? tagItem.name : tagItem;
                    const tagId =
                      typeof tagItem === "object" ? tagItem.id : tagName;
                    return (
                      <button
                        type="button"
                        className="pill-badge-available-node"
                        key={tagId || tagName}
                        disabled={!isEditing}
                        onClick={() => handleAddTag(tagName)}
                      >
                        + {tagName}
                      </button>
                    );
                  })
                ) : (
                  <p className="text-muted small">
                    {searchQuery.trim()
                      ? "No matching available tags."
                      : availableTags.length > 0
                        ? "All available tags are already selected."
                        : "No available tags found."}
                  </p>
                )}
              </div>
            </div>
          </fieldset>
        </main>
      </form>
    </div>
  );
};

export default InterestsTagsTab;

