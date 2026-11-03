import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import RequestPendingModal from '../../../components/user/servicesmodal/RequestPendingModal';
import Pagination from '../../../components/common/Pagination';
import useServices from '../../../hooks/user/useServices';
import { BaseUrl } from '../../../config/constant';

const ITEMS_PER_PAGE =6;

const MyService2 = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Hooks from useServices
    const {
        getAllProvidersAsync,
        getavailableTagsAsync,
        serviceAsync,
        isProviderLoading,
        updateServiceAsync,
        isUpdating,
    } = useServices();

    // Data states
    const [providers, setProviders] = useState([]);
    const [availableTags, setAvailableTags] = useState([]);
    const [servicesList, setServicesList] = useState([]);
    const [selectedService, setSelectedService] = useState("One-on-One Coaching (SOW)");

    // Search & Filter states
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTagFilter, setActiveTagFilter] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Provider selections: array of teacher objects or ids
    // Order matters: index 0 is Primary, index 1 is Secondary
    const [selectedTeachers, setSelectedTeachers] = useState([]);

    // No preference flag: null (not selected), 1 (Primary), or 2 (Secondary)
    const [noPreferenceChoice, setNoPreferenceChoice] = useState(null);

    // Modal state for Request Pending popup
    const [isPendingModalOpen, setIsPendingModalOpen] = useState(false);

    // Page load hone par purane modal ka koi bhi leftover shadow, invisible overlay ya scroll-lock hatana
    useEffect(() => {
        const removeLocks = () => {
            // 1. Saare residual backdrops hatayein
            document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());

            // 2. Koi bhi purana open modal hide karein (requestPendingModal ko chhod kar)
            document.querySelectorAll(".modal").forEach((el) => {
                if (el.id !== "requestPendingModal") {
                    el.classList.remove("show");
                    el.style.display = "none";
                    el.setAttribute("aria-hidden", "true");
                }
            });

            // 3. Body aur html ka scroll & click unlock karein
            document.body.classList.remove("modal-open");
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("overflow-y");
            document.body.style.removeProperty("padding-right");
            document.body.style.removeProperty("pointer-events");
            document.body.style.overflowY = "auto";

            document.documentElement.classList.remove("modal-open");
            document.documentElement.style.removeProperty("overflow");
            document.documentElement.style.removeProperty("overflow-y");
            document.documentElement.style.removeProperty("padding-right");
            document.documentElement.style.overflowY = "auto";
        };

        removeLocks();

        // 100ms baad bhi ek baar verify karein taaki bootstrap async callbacks override na karein
        const timer = setTimeout(removeLocks, 100);
        return () => clearTimeout(timer);
    }, []);

    // 1. Fetch Providers, Tags, and Services on mount
    useEffect(() => {
        const fetchInitialData = async () => {
            // Fetch available tags
            try {
                const tagsRes = await getavailableTagsAsync();
                const tagsData = Array.isArray(tagsRes)
                    ? tagsRes
                    : Array.isArray(tagsRes?.data)
                    ? tagsRes.data
                    : [];
                if (tagsData.length > 0) {
                    setAvailableTags(tagsData);
                }
            } catch (err) {
                console.log("Error fetching tags:", err);
            }

            // Fetch services for dropdown
            try {
                const serviceRes = await serviceAsync();
                const sData = Array.isArray(serviceRes)
                    ? serviceRes
                    : Array.isArray(serviceRes?.data)
                    ? serviceRes.data
                    : [];
                if (sData.length > 0) {
                    setServicesList(sData);
                }
            } catch (err) {
                console.log("Error fetching services:", err);
            }

            // Fetch providers from API
            try {
                const providerRes = await getAllProvidersAsync();
                console.log("Fetched providers from API:", providerRes);

                // Exact response structure: response.data.provider
                const list =
                    providerRes?.data?.provider ||
                    providerRes?.provider ||
                    providerRes?.data?.data?.provider ||
                    (Array.isArray(providerRes?.data) ? providerRes.data : []) ||
                    [];

                // Normalize provider data based on API response
                const formatted = list.map((item) => {
                    // Extract skills/tags from job_title, department, institution, teaching_level
                    const dynamicSkills = [];
                    if (item?.job_title) dynamicSkills.push(item.job_title);
                    if (item?.department) dynamicSkills.push(item.department);
                    if (item?.institution) dynamicSkills.push(item.institution);
                    if (item?.teaching_level) dynamicSkills.push(item.teaching_level);
                    if (item?.years_of_experience) dynamicSkills.push(`${item.years_of_experience} yrs exp`);

                    if (Array.isArray(item?.skills)) {
                        dynamicSkills.push(...item.skills);
                    }
                    if (Array.isArray(item?.tags)) {
                        dynamicSkills.push(...item.tags.map(t => typeof t === 'string' ? t : t?.name));
                    }

                    // Default tag if empty
                    if (dynamicSkills.length === 0) {
                        dynamicSkills.push("Mathematics", "Teaching");
                    }

                    // Construct photo URL
                    let photoUrl = "/images/user/super-user-dashboard/user-profile-img.svg";
                    if (item?.profile_photo) {
                        if (item.profile_photo.startsWith("http://") || item.profile_photo.startsWith("https://")) {
                            photoUrl = item.profile_photo;
                        } else {
                            const cleanPath = item.profile_photo.replace(/^\/+/, '');
                            photoUrl = `${BaseUrl}/${cleanPath}`;
                        }
                    }

                    return {
                        id: item?.id,
                        user_id: item?.user_id,
                        name: item?.name || "Teacher",
                        status: item?.status || "Available",
                        avatar: photoUrl,
                        description: item?.bio || "Experienced teacher dedicated to your learning and progress.",
                        skills: Array.from(new Set(dynamicSkills.filter(Boolean))),
                        languages: item?.languages || (item?.city ? `${item.city}, ${item.country}` : "English"),
                        rating: item?.rating || "4.8",
                        profileLink: item?.linkedin_url || item?.website || "#"
                    };
                });

                setProviders(formatted);
            } catch (err) {
                console.log("Error fetching providers from API:", err);
            }
        };

        fetchInitialData();
    }, []);

    // 2. Filter providers by search query and clicked tag
    const filteredProviders = useMemo(() => {
        return providers.filter((provider) => {
            const query = searchQuery.trim().toLowerCase();

            // Match text query against name, skills, and description
            const matchesQuery = query === "" ||
                provider.name?.toLowerCase().includes(query) ||
                provider.description?.toLowerCase().includes(query) ||
                provider.skills?.some(skill => skill?.toLowerCase().includes(query));

            // Match active tag filter if a tag pill was clicked
            const matchesTag = !activeTagFilter ||
                provider.skills?.some(skill => skill?.toLowerCase() === activeTagFilter.toLowerCase());

            return matchesQuery && matchesTag;
        });
    }, [providers, searchQuery, activeTagFilter]);

    // 3. Pagination calculations
    const totalResults = filteredProviders.length;
    const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE) || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProviders = filteredProviders.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Reset pagination when search or tag filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, activeTagFilter]);

    // 4. Handle Tag Pill selection / toggle
    const handleTagClick = (tagName, e) => {
        e.preventDefault();
        if (activeTagFilter === tagName) {
            setActiveTagFilter(null); // Unselect if already selected
        } else {
            setActiveTagFilter(tagName);
        }
    };

    // 5. Handle Teacher Card selection (Max 2 choices total including No Preference)
    const handleTeacherSelect = (teacher) => {
        // Qualified but unavailable teachers remain visible and cannot be selected
        const statusLower = (teacher.status || "").toLowerCase();
        if (statusLower === "unavailable") {
            toast.error("This teacher is currently unavailable and cannot be selected.");
            return;
        }

        const isAlreadySelected = selectedTeachers.some(t => t.id === teacher.id);

        if (isAlreadySelected) {
            // Deselect teacher
            const remaining = selectedTeachers.filter(t => t.id !== teacher.id);
            setSelectedTeachers(remaining);

            // If No Preference is selected as secondary and we removed primary, promote No Preference or keep it intact
            if (noPreferenceChoice === 2 && remaining.length === 0) {
                setNoPreferenceChoice(1);
            }
        } else {
            // Total current choices count
            const currentTotal = selectedTeachers.length + (noPreferenceChoice ? 1 : 0);

            if (currentTotal >= 2) {
                toast.error("You can select up to 2 providers. Please deselect one to choose another.");
                return;
            }

            // Add teacher as next choice
            setSelectedTeachers(prev => [...prev, teacher]);
        }
    };

    // 6. Handle "No Preference" selection
    const handleNoPreferenceToggle = () => {
        if (noPreferenceChoice) {
            // Deselect No Preference
            setNoPreferenceChoice(null);
        } else {
            const currentTotal = selectedTeachers.length;

            if (currentTotal >= 2) {
                toast.error("You can select up to 2 choices. Please deselect a teacher first.");
                return;
            }

            // If 0 teachers selected, No Preference is choice 1. If 1 teacher selected, it becomes choice 2.
            const nextChoice = currentTotal === 0 ? 1 : 2;
            setNoPreferenceChoice(nextChoice);
        }
    };

    // Helper to get selection badge details for a teacher
    const getTeacherChoiceNumber = (teacherId) => {
        const index = selectedTeachers.findIndex(t => t.id === teacherId);
        if (index === -1) return null;

        // If No Preference is choice 1, then teacher is choice 2
        if (noPreferenceChoice === 1) {
            return 2;
        }
        return index + 1; // 1 or 2
    };

    // 7. Handle "Send Request" submission
    const handleSendRequest = async () => {
        const totalSelections = selectedTeachers.length + (noPreferenceChoice ? 1 : 0);

        if (totalSelections === 0) {
            toast.error("Please select at least one provider or choose 'No Preference'.");
            return;
        }

        // Check if any selected teacher is unavailable (per FRS: "If a selection becomes unavailable before submission, the Student must choose an available alternative.")
        const hasUnavailable = selectedTeachers.some(t => (t.status || "").toLowerCase() === "unavailable");
        if (hasUnavailable) {
            toast.error("One of your selected teachers is unavailable. Please choose an available alternative.");
            return;
        }

        try {
            // Service request IDs array route state ya localStorage se lena
            let activeServiceRequestIds =
                location.state?.serviceRequestId ||
                location.state?.service_request_id ||
                location.state?.serviceRequestIds ||
                location.state?.id;

            // Agar state me na mile to localStorage se parse karein
            if (!activeServiceRequestIds) {
                const stored =
                    localStorage.getItem("serviceRequestId") ||
                    localStorage.getItem("active_service_request_id");
                if (stored) {
                    try {
                        activeServiceRequestIds = JSON.parse(stored);
                    } catch {
                        activeServiceRequestIds = stored;
                    }
                }
            }

            // Array format ensure karein: [39, 40, 41]
            const requestIdsArray = Array.isArray(activeServiceRequestIds)
                ? activeServiceRequestIds.map((id) => Number(id)).filter(Boolean)
                : (activeServiceRequestIds ? [Number(activeServiceRequestIds)] : []);

            console.log("Active Service Request IDs Array:", requestIdsArray);

            if (requestIdsArray.length === 0) {
                toast.error("Service Request ID nahi mila. Kripya pehle request create karein.");
                return;
            }

            // Extract provider_id (user_id / id) array from selected teachers
            let providerIds = selectedTeachers.map(t => Number(t.user_id || t.id));

            // Fallback if user selected No Preference without teacher selection
            if (providerIds.length === 0 && providers.length > 0) {
                const availableTeacher = providers.find(p => (p.status || "").toLowerCase() !== "unavailable");
                if (availableTeacher) {
                    providerIds = [Number(availableTeacher.user_id || availableTeacher.id)];
                }
            }

            if (providerIds.length === 0) {
                toast.error("Please select at least one provider.");
                return;
            }

            // Payload me serviceRequestId array pass karein
            const updatePayload = {
                serviceRequestId: requestIdsArray,
                service_request_id: requestIdsArray,
                provider_id: providerIds,
            };

            console.log("Submitting updateServiceAsync with payload:", updatePayload);

            const response = await updateServiceAsync(updatePayload);

            console.log("Response from updateServiceAsync:", response);

            if (response?.success || response?.code === 200) {
                toast.success(response?.message || "Provider Selection updated successfully.");
                // Open Request Pending popup modal on success
                setIsPendingModalOpen(true);
            } else {
                toast.error(response?.message || "Validation Error.");
            }
        } catch (error) {
            console.error("Error submitting request:", error);
            const errorMsg =
                error?.response?.data?.message ||
                error?.message ||
                "Failed to submit request. Please try again.";
            toast.error(errorMsg);
        }
    };

    return (
        <>
            <div className="container py-4">

                {/* 1. Header Section: Back Button + Title + Dropdown */}
                <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">

                    {/* Left: Back Button + Headings */}
                    <div className="d-flex align-items-start gap-3">
                        <button
                            type="button"
                            className="back-capsule-btn border-0 bg-transparent p-0"
                            onClick={() => navigate(-1)}
                            aria-label="Go back"
                            title="Go back"
                        >
                            <img src="/images/user/super-user-dashboard/left-icon-btn.svg" alt="Back" />
                        </button>

                        <div>
                            <h2 className="page-title mb-1">Choose Your Provider</h2>
                            <div className="page-subtitle">Select up to 2 preferred providers</div>
                        </div>
                    </div>

                    {/* Right: Service Category Dropdown */}
                    <div className="position-relative">
                        <button
                            type="button"
                            className="dropdown-pill-btn"
                            onClick={() => setIsDropdownOpen(prev => !prev)}
                        >
                            <span>{selectedService}</span>
                            <i className="bi bi-chevron-down"></i>
                        </button>

                        {isDropdownOpen && servicesList.length > 0 && (
                            <div
                                className="dropdown-menu show shadow-sm border mt-1"
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    zIndex: 1000,
                                    borderRadius: "12px",
                                    minWidth: "220px",
                                }}
                            >
                                {servicesList.map((srv) => (
                                    <button
                                        key={srv.id}
                                        type="button"
                                        className="dropdown-item py-2 px-3 small"
                                        onClick={() => {
                                            setSelectedService(srv.name || srv.title);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {srv.name || srv.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                {/* 2. SEARCH BAR COMPONENT */}
                <div className="search-container">
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        className="search-input-field"
                        placeholder="Search by skills & tags (e.g. Career Planning, Leadership, Grant Writing)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* 3. SKILLS TAG PILLS ROW (Dynamic from API + Filterable) */}
                <div className="tags-wrapper mb-4">
                    {availableTags.length > 0 ? (
                        availableTags.map((tag) => {
                            const tagName = typeof tag === 'string' ? tag : tag?.name;
                            const isActive = activeTagFilter?.toLowerCase() === tagName?.toLowerCase();

                            return (
                                <a
                                    href="#"
                                    key={tag.id || tagName}
                                    onClick={(e) => handleTagClick(tagName, e)}
                                    className={`tag-pill ${isActive ? 'active shadow-sm' : ''}`}
                                    style={isActive ? {
                                        backgroundColor: "var(--primary-blue, #0076a8)",
                                        color: "#ffffff",
                                        fontWeight: 600,
                                    } : {}}
                                >
                                    {tagName}
                                    {isActive && <i className="bi bi-x ms-1"></i>}
                                </a>
                            );
                        })
                    ) : (
                        // Standard default tags if database tags are still loading
                        ["Career Planning", "Leadership", "Technology", "Grant Writing", "Strategic Planning", "Project Management", "Team Leadership"].map((item, idx) => {
                            const isActive = activeTagFilter?.toLowerCase() === item.toLowerCase();
                            return (
                                <a
                                    href="#"
                                    key={idx}
                                    onClick={(e) => handleTagClick(item, e)}
                                    className={`tag-pill ${isActive ? 'active' : ''}`}
                                    style={isActive ? {
                                        backgroundColor: "var(--primary-blue, #0076a8)",
                                        color: "#ffffff",
                                        fontWeight: 600,
                                    } : {}}
                                >
                                    {item}
                                </a>
                            );
                        })
                    )}

                    {activeTagFilter && (
                        <button
                            type="button"
                            className="btn btn-sm btn-link text-decoration-none text-danger py-0 px-2 align-self-center"
                            onClick={() => setActiveTagFilter(null)}
                        >
                            Clear Filter
                        </button>
                    )}
                </div>

                {/* 4. NO PREFERENCE CARD */}
                <div
                    className={`no-preference-card ${noPreferenceChoice ? 'selected-card' : ''}`}
                    onClick={handleNoPreferenceToggle}
                    style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="icon-question-circle">?</div>

                        {noPreferenceChoice ? (
                            <span className={`selection-tag ${noPreferenceChoice === 1 ? 'tag-primary' : 'tag-secondary'}`}>
                                <span className="number-count">{noPreferenceChoice}</span> Selected ({noPreferenceChoice === 1 ? 'Primary' : 'Secondary'})
                            </span>
                        ) : (
                            <span className="badge bg-light text-muted border px-2 py-1 small">
                                Click to select
                            </span>
                        )}
                    </div>

                    <h3 className="h6 fw-bold text-dark mb-2">No Preference</h3>
                    <p
                        className="text-muted small mb-0"
                        style={{
                            lineHeight: "1.5",
                            maxWidth: "95%",
                        }}
                    >
                        Optional. Can be selected as your 1st or 2nd choice. If selected, the system will match you with an available provider whose skills are relevant to your request. If selected as your 2nd choice, this option will only be used if your 1st choice is unavailable.
                    </p>
                </div>

                {/* 5. MAIN PROVIDERS GRID (2 COLUMNS) */}
                {isProviderLoading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading Providers...</span>
                        </div>
                        <p className="text-muted mt-2 small">Loading available providers...</p>
                    </div>
                ) : currentProviders.length === 0 ? (
                    <div className="text-center py-5 bg-white rounded-3 border p-4 mb-4">
                        <i className="bi bi-person-x text-muted" style={{ fontSize: "40px" }}></i>
                        <h4 className="h6 fw-bold text-dark mt-2">No Providers Found</h4>
                        <p className="text-muted small mb-3">
                            No providers match your search for "{searchQuery || activeTagFilter}".
                        </p>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => {
                                setSearchQuery("");
                                setActiveTagFilter(null);
                            }}
                        >
                            Reset Search Filters
                        </button>
                    </div>
                ) : (
                    <div className="row g-4 mb-4">
                        {currentProviders.map((teacher) => {
                            const choiceNumber = getTeacherChoiceNumber(teacher.id);
                            const isSelected = Boolean(choiceNumber);
                            const statusLower = (teacher.status || "").toLowerCase();
                            const isUnavailable = statusLower === "unavailable";
                            const isLimited = statusLower === "limited";

                            return (
                                <div className="col-md-6" key={teacher.id}>
                                    <div
                                        className={`provider-card ${isSelected ? 'selected-card' : ''}`}
                                        onClick={() => handleTeacherSelect(teacher)}
                                        style={{
                                            cursor: isUnavailable ? "not-allowed" : "pointer",
                                            opacity: isUnavailable ? 0.75 : 1,
                                            boxShadow: isSelected ? "0 4px 12px rgba(0, 118, 168, 0.12)" : "none",
                                            transition: "all 0.2s ease"
                                        }}
                                        title={isUnavailable ? "This teacher is currently unavailable and cannot be selected." : "Click to select/deselect"}
                                    >
                                        {/* Card Top Row: Avatar, Name, Status, and Selection Badge */}
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <div className="d-flex align-items-start gap-3 ser-pro">
                                                <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold">
                                                    <img
                                                        src={teacher.avatar}
                                                        alt={teacher.name}
                                                        onError={(e) => {
                                                            e.target.src = "/images/user/super-user-dashboard/user-profile-img.svg";
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                                        <h4 className="h6 fw-bold text-dark mb-0">{teacher.name}</h4>

                                                        <span
                                                            className={`badge-state ${
                                                                isUnavailable
                                                                    ? 'state-unavailable'
                                                                    : isLimited
                                                                    ? 'state-limited'
                                                                    : 'state-available'
                                                            }`}
                                                        >
                                                            {teacher.status || "Available"}
                                                        </span>
                                                    </div>

                                                    <a
                                                        href={teacher.profileLink || "#"}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="text-primary small text-decoration-underline"
                                                        style={{ fontSize: "12px" }}
                                                    >
                                                        User Profile
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Selection Tag Badge */}
                                            {isSelected && (
                                                <span className={`selection-tag ${choiceNumber === 1 ? 'tag-primary' : 'tag-secondary'}`}>
                                                    <span className="number-count">{choiceNumber}</span> Selected ({choiceNumber === 1 ? 'Primary' : 'Secondary'})
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted small mb-3">
                                            {teacher.description}
                                        </p>

                                        {/* Relevant Skills / Tags */}
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            {teacher.skills?.map((skill, sIdx) => (
                                                <span className="skill-tag" key={sIdx}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Bottom Meta Row: Languages & Rating */}
                                        <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                                            <span className="text-dark d-flex align-items-center gap-1">
                                                <img src="/images/user/super-user-dashboard/iconoir_language.svg" alt="Languages" />
                                                {teacher.languages}
                                            </span>

                                            <span className="fw-bold text-dark d-flex align-items-center gap-1">
                                                <img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt="Rating" />
                                                {teacher.rating}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* 6. PAGINATION & RESULTS COUNT */}
                <Pagination
                    currentPage={currentPage}
                    totalResults={totalResults}
                    itemsPerPage={ITEMS_PER_PAGE}
                    onPageChange={(page) => setCurrentPage(page)}
                />

                {/* 7. SEND REQUEST BUTTON */}
                <div className="text-end mt-4">
                    <button
                        type="button"
                        className="btn-send-request"
                        onClick={handleSendRequest}
                        disabled={isUpdating}
                        style={{
                            opacity: isUpdating ? 0.7 : 1,
                            cursor: isUpdating ? "not-allowed" : "pointer"
                        }}
                    >
                        {isUpdating ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Request &nbsp;<i className="bi bi-arrow-right"></i>
                            </>
                        )}
                    </button>
                </div>

            </div>

            {/* Request Pending Popup Modal */}
            <RequestPendingModal 
                isOpen={isPendingModalOpen} 
                onClose={() => setIsPendingModalOpen(false)} 
            />
        </>
    );
};

export default MyService2;
