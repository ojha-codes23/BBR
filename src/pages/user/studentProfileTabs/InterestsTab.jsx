import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useStudentProfile from "../../../hooks/user/useStudentProfile";

const InterestsTagsTab = ({
  data = [],
  isEditing = false,
  onTagsChange,
}) => {
  const {
    getAvailableTagsAsync,
    isLoadingAvailableTags,
    searchStudentTagsAsync,
    isSearchingTags,
  } = useStudentProfile();

  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchMessage, setSearchMessage] = useState("");

  // Load selected tags from get-profile-summary
  useEffect(() => {
    setSelectedTags(Array.isArray(data) ? data : []);
  }, [data]);

  // Tell Profile.jsx which tags are selected
  useEffect(() => {
    onTagsChange?.(selectedTags);
  }, [selectedTags, onTagsChange]);

  // Load available tags only after Edit Profile is clicked
  useEffect(() => {
    if (!isEditing) {
      setSearchTerm("");
      setSearchResults([]);
      setSearchMessage("");
      setShowSearchDropdown(false);
      return;
    }

    const loadAvailableTags = async () => {
      try {
        const response = await getAvailableTagsAsync();

        setAvailableTags(
          Array.isArray(response?.data) ? response.data : []
        );
      } catch (error) {
        toast.error(
          error?.message || "Unable to load available tags."
        );
      }
    };

    loadAvailableTags();
  }, [isEditing, getAvailableTagsAsync]);

  // Search tags using the search API
  const handleSearch = async (event) => {
    const value = event.target.value;

    setSearchTerm(value);
    setSearchMessage("");
    setShowSearchDropdown(true);

    if (!value.trim()) {
      setSearchResults([]);
      setSearchMessage("");
      setShowSearchDropdown(false);
      return;
    }

    try {
      const response = await searchStudentTagsAsync({
        search: value.trim(),
      });

      const results = response?.data?.tags ?? [];

      if (!Array.isArray(results) || results.length === 0) {
        setSearchResults([]);
        setSearchMessage("No matching tags found.");
        return;
      }

      // If the matching tag is already selected, show a different message
      const matchingSelectedTags = results.filter((tag) =>
        selectedTags.some((selected) => selected.id === tag.id)
      );

      const unselectedResults = results.filter(
        (tag) =>
          !selectedTags.some(
            (selected) => selected.id === tag.id
          )
      );

      setSearchResults(unselectedResults);

      if (unselectedResults.length === 0 && matchingSelectedTags.length > 0) {
        setSearchMessage("This tag is already selected.");
      } else if (unselectedResults.length === 0) {
        setSearchMessage("No matching tags found.");
      }
    } catch (error) {
      setSearchResults([]);
      setSearchMessage("");
      toast.error(
        error?.message || "Unable to search tags."
      );
    }
  };

  // Add a tag to Selected Tags
  const handleAddTag = (tagToAdd) => {
    setSelectedTags((previous) => {
      if (previous.some((tag) => tag.id === tagToAdd.id)) {
        return previous;
      }

      return [...previous, tagToAdd];
    });

    // Remove it from Available Tags
    setAvailableTags((previous) =>
      previous.filter((tag) => tag.id !== tagToAdd.id)
    );

    setSearchResults((previous) =>
      previous.filter((tag) => tag.id !== tagToAdd.id)
    );

    setSearchTerm("");
    setSearchMessage("");
    setShowSearchDropdown(false);
  };

  // Remove a tag from Selected Tags
  const handleRemoveTag = (tagToRemove) => {
    setSelectedTags((previous) =>
      previous.filter((tag) => tag.id !== tagToRemove.id)
    );

    setAvailableTags((previous) => {
      if (previous.some((tag) => tag.id === tagToRemove.id)) {
        return previous;
      }

      return [...previous, tagToRemove];
    });
  };

  const selectedIds = selectedTags.map((tag) => tag.id);

  // Available Tags are NOT filtered by the search box
  const filteredAvailableTags = availableTags.filter(
    (tag) => !selectedIds.includes(tag.id)
  );

  return (
    <div>
      <main className="interests-master-card">
        <h2 className="interests-header-title">
          <i className="fa-regular fa-bookmark"></i> Interests &amp; Tags
        </h2>

        <p className="interests-sub-description">
          Select tags to personalize your course, event, and resource recommendations
        </p>

        {isEditing && (
          <div className="search-tags-input-group" style={{ position: "relative" }}>
            <i className="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              className="search-tags-field-control"
              placeholder="Search Tags"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => {
                if (searchTerm.trim()) {
                  setShowSearchDropdown(true);
                }
              }}
              onBlur={() => {
                // Allow a dropdown result click before hiding it
                setTimeout(() => setShowSearchDropdown(false), 150);
              }}
              autoComplete="off"
            />

            {/* Search dropdown */}
            {showSearchDropdown && searchTerm.trim() !== "" && (
              <div
                className="interest-tags-search-dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  zIndex: 1000,
                  background: "#fff",
                  border: "1px solid #d9e1e7",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                  maxHeight: "220px",
                  overflowY: "auto",
                }}
              >
                {isSearchingTags ? (
                  <p style={{ padding: "10px 14px", margin: 0 }}>
                    Searching tags...
                  </p>
                ) : searchResults.length > 0 ? (
                  searchResults.map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      className="pill-badge-available-node"
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        padding: "10px 14px",
                        border: "none",
                        borderRadius: 0,
                        background: "#fff",
                        cursor: "pointer",
                      }}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => handleAddTag(tag)}
                    >
                      {tag.name}
                    </button>
                  ))
                ) : (
                  <p style={{ padding: "10px 14px", margin: 0, color: "#666" }}>
                    {searchMessage || "No matching tags found."}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <h3 className="tags-section-heading">
          Your Selected Tags ({selectedTags.length})
        </h3>

        <div className="tags-flex-cloud-deck">
          {selectedTags.map((tag) => (
            <div
              key={tag.id}
              className="pill-badge-selected-node"
            >
              {tag.name}

              {isEditing && (
                <button
                  type="button"
                  aria-label={`Remove ${tag.name}`}
                  onClick={() => handleRemoveTag(tag)}
                  style={{
                    cursor: "pointer",
                    marginLeft: "8px",
                    border: "none",
                    background: "transparent",
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          ))}

          {selectedTags.length === 0 && (
            <p style={{ fontSize: "14px", color: "#666" }}>
              No interest tags selected.
            </p>
          )}
        </div>

        {isEditing && (
          <>
            <h3 className="tags-section-heading">
              Available Tags
            </h3>

            {isLoadingAvailableTags ? (
              <p>Loading available tags...</p>
            ) : (
              <div className="tags-flex-cloud-deck">
                {filteredAvailableTags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    className="pill-badge-available-node"
                    onClick={() => handleAddTag(tag)}
                  >
                    {tag.name}
                  </button>
                ))}

                {/* {filteredAvailableTags.length === 0 && (
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    {availableTags.length > 0
                      ? "All available tags have been selected."
                      : "No available tags found."}
                  </p>
                )} */}

                {filteredAvailableTags.length === 0 && (
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    {availableTags.length === 0
                      ? "No tags are available at the moment."
                      : "You have selected all available tags."}
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default InterestsTagsTab;