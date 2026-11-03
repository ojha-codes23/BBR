import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useServices from "../../../hooks/user/useServices";

const RequestDetailsModal = ({ selectedService }) => {
 
  const navigate = useNavigate();

  const {
    getavailableTagsAsync,
    createReqServiceAsync,
    isLoading,
  } = useServices();

  const [selectedServices, setSelectedServices] = useState(
    selectedService?.length ? selectedService.map((s) => s.id) : []
  );

  const [tagSearch, setTagSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [currentService, setCurrentService] = useState(
    selectedService?.length ? selectedService[0]?.id : ""
  );

  const [requestedData, setRequestedData] = useState({
    subjectTopic: "",
    requestDescription: "",
  });

  // Modal ka backdrop aur body lock hatane ke liye helper function
  const cleanupModalBackdrop = () => {
    // 1. Bootstrap modal instance hide karein
    const modalElement = document.getElementById("requestDetailsModal");
    if (modalElement) {
      if (window.bootstrap?.Modal) {
        const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          try {
            modalInstance.hide();
          } catch (e) {
            console.log(e);
          }
        }
      }
      modalElement.classList.remove("show");
      modalElement.style.display = "none";
      modalElement.setAttribute("aria-hidden", "true");
    }

    // 2. DOM se saare dark background shadow (modal-backdrop) hatayein
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((backdrop) => backdrop.remove());

    // 3. Body aur html ke freeze/overflow styles reset karein taaki page hamesha scrollable aur clickable rahe
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

  // Component unmount hone par backdrop shadow hatana
  useEffect(() => {
    return () => {
      cleanupModalBackdrop();
    };
  }, []);

  // Jab parent se selectedService change ho to state update karein
  useEffect(() => {
    if (selectedService && selectedService.length > 0) {
      const ids = selectedService.map((item) => item.id);
      setSelectedServices(ids);
      setCurrentService(ids[0]);
    }
  }, [selectedService]);

  // Get available tags
  useEffect(() => {
    const getTags = async () => {
      try {
        const response = await getavailableTagsAsync();
        setAvailableTags(response || []);
      } catch (error) {
        console.log(error);
        toast.error(error?.message || "Something went wrong");
      }
    };

    getTags();
  }, []);

  // Filter tags according to search
  const filteredTags = availableTags?.filter((item) =>
    item?.name?.toLowerCase().includes(tagSearch.toLowerCase())
  );

  // Select tag
  const handleTagSelect = (item) => {
    if (!item?.id) return;

    setSelectedTags((prev) => {
      if (prev.includes(item.id)) {
        return prev;
      }
      return [...prev, item.id];
    });

    setTagSearch(""); // Correct state updater
  };

  // Select service
  const handleSelect = (e) => {
    const id = Number(e.target.value);
    setCurrentService(id);

    setSelectedServices((prev) => {
      if (prev.includes(id)) {
        return prev;
      }
      return [...prev, id];
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // Validation
    if (!selectedServices?.length) {
      toast.error("Please select at least one service");
      return;
    }

    if (!requestedData?.subjectTopic?.trim()) {
      toast.error("Please enter subject topic");
      return;
    }

    if (!requestedData?.requestDescription?.trim()) {
      toast.error("Please enter request description");
      return;
    }

    if (!selectedTags?.length) {
      toast.error("Please select at least one tag");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await createReqServiceAsync({
        service_id: selectedServices,
        subject_topic: requestedData?.subjectTopic,
        request_description: requestedData?.requestDescription,
        tags_id: selectedTags,
      });

      console.log("Create service request response:", response);

      if (response?.success || response?.code === 200 || response?.status === true) {
        toast.success(
          response?.message || "Service request created successfully"
        );

        // Response se service_requests ka array nikalna
        // API response format: { data: { service_requests: [{ id: 39 }, { id: 40 }] } }
        const serviceRequestsList =
          response?.data?.service_requests ||
          response?.service_requests ||
          (Array.isArray(response?.data) ? response.data : []);

        // Saari IDs ko ek clean array me nikalte hain: [39, 40, 41]
        let requestIds = [];

        if (Array.isArray(serviceRequestsList) && serviceRequestsList.length > 0) {
          requestIds = serviceRequestsList
            .map((item) => Number(item?.id || item?.service_request_id || item))
            .filter(Boolean);
        } else if (response?.data?.id) {
          requestIds = [Number(response.data.id)];
        } else if (response?.id) {
          requestIds = [Number(response.id)];
        }

        console.log("Extracted service request IDs array:", requestIds);

        // localStorage me array ko stringify karke save karein
        if (requestIds.length > 0) {
          localStorage.setItem("serviceRequestId", JSON.stringify(requestIds));
          localStorage.setItem("active_service_request_id", JSON.stringify(requestIds));
        }

        // Modal ka backdrop/shadow pehle poori tarah saaf karein
        cleanupModalBackdrop();

        // 100ms delay dekar navigate karein taaki modal fully hide ho sake aur agla page freeze na ho
        setTimeout(() => {
          cleanupModalBackdrop();
          navigate("/student/my-service2", {
            state: {
              serviceRequestId: requestIds, // array of ids: [39, 40, 41]
              service_request_id: requestIds,
              serviceRequestIds: requestIds,
              serviceRequests: serviceRequestsList, // full list agar aage detail dikhani ho
            },
          });
        }, 120);
      } else {
        toast.error(response?.message || "Something went wrong");
      }
    } catch (error) {
      console.log("Error creating service request:", error);
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
    <div className="modal fade" id="requestDetailsModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">

            <div className="">
                <div className="">

                    <div className="gl-popup-header-row d-flex align-items-start justify-content-between">
                        <div className="gl-popup-header-left d-flex align-items-start">
                            <div className="gl-popup-icon-box light-blue-theme-bg mr-3 p-2 rounded"
                                style={{
                                    backgroundColor: "#e6f0f5",
                                }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1H20v16H6.5a2.5 2.5 0 0 0-2.5 2.5z"
                                        stroke="#006699" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M9 5h6v4l-3-1.5L9 9V5z" fill="#006699" />
                                </svg>
                            </div>
                            <div className="gl-popup-title-block">
                                <h2 className="gl-popup-main-title h5 font-weight-bold mb-1" id="modalTitle">Request
                                    Details & Preferences</h2>
                                <p className="gl-popup-subtitle-desc text-muted small mb-0">Tell us about your
                                    requirements so we can recommend the most suitable providers for your needs.</p>
                            </div>
                        </div>

                        <a
                          type="button"
                          className="gl-popup-close-trigger text-dark"
                          data-bs-dismiss="modal"
                          aria-label="Close Popup"
                          onClick={cleanupModalBackdrop}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111"
                                stroke-width="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </a>
                    </div>

                    <div className="gl-popup-core-body mt-4">

                        <div className="gl-form-input-group-wrapper form-group mb-3">
                            <label className="gl-form-input-label font-weight-bold small text-dark">Request Services
                                <span className="gl-label-count-badge text-primary">({selectedService?.length})</span></label>
                            {/* <div className="gl-dropdown-select-façade position-relative">
                                {selectedService.map((item,index)=>(
                                <select className="gl-native-select-element form-control custom-select"  value={selectedServices} onChange={()=>handleSelect(item)} key={item?.id}>
                                    
                                    <option value={item?.id} >{item?.name}</option>
                              
                  
                                </select>))}
                            </div> */}

                           <div className="gl-dropdown-select-façade position-relative">

                            <select
                                className="gl-native-select-element form-control custom-select"
                                // multiple
                                value={selectedServices}
                                onChange={handleSelect}
                            >
                                {selectedService?.map((item) => (
                                <option
                                    key={item?.id}
                                    value={item?.id}
                                >
                                    {item?.name}
                                </option>
                                ))}
                            </select>

                            </div>
                        </div>

                        <div className="gl-form-input-group-wrapper form-group mb-3">
                            <label className="gl-form-input-label font-weight-bold small text-dark">Subject
                                Topic</label>
                            <textarea value={requestedData?.subjectTopic} onChange={(e)=>setRequestedData({...requestedData,subjectTopic:e.target.value})} className="gl-form-textarea-element form-control resize-disabled-height-spec"
                                rows="3"
                                placeholder="Enter the subject, topic, or service you need assistance with."></textarea>
                        </div>

                        <div className="gl-form-input-group-wrapper form-group mb-3">
                            <label className="gl-form-input-label font-weight-bold small text-dark">Request
                                Description</label>
                            <textarea  value={requestedData?.requestDescription} onChange={(e)=>setRequestedData({...requestedData,requestDescription:e.target.value})} className="gl-form-textarea-element form-control deep-textarea-height-spec"
                                rows="4"
                                placeholder="Describe your requirements, goals and any specific details that will help providers understand your request."></textarea>
                        </div>

                        <div className="gl-inner-section-spacer my-3"></div>

                        <div className="gl-tag-search-field-wrapper form-group position-relative mb-4">
                            <input  type="text" 
                                 value={tagSearch}
                                 onChange={(e) => setTagSearch(e.target.value)}
                                 className="gl-tag-input-element form-control pl-5"
                                 placeholder="Search Tags"
                                />
                            <span className="gl-search-lens-icon position-absolute"
                                style={{
                                    left: "15px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8"
                                    stroke-width="2.5">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                        </div>


                        {tagSearch && (
                            <div className="tag-suggestions">
                                {filteredTags?.length > 0 ? (
                               filteredTags?.map((item) => (
                                    <div
                                        key={item?.id}
                                        onClick={() => handleTagSelect(item)}
                                        className="gl-tag-pill pool-item-state badge badge-pill badge-light text-secondary"
                                        style={{
                                        backgroundColor: "#f1f5f9",
                                        cursor: "pointer",
                                        fontSize: "13px",
                                        }}
                                    >
                                        {item?.name}
                                    </div>
                                    ))
                                ) : (
                                <div className="text-muted p-2">
                                    No tags available
                                </div>
                                )}
                            </div>
                            )}



                        {/* <div className="gl-tags-section-block mb-4">
                            <h3 className="gl-tags-section-heading h6 font-weight-bold mb-2">Your Selected Tags (4)</h3>
                            <div className="gl-tags-flex-container d-flex flex-wrap gap-2"
                                style={{
                                    gap: "8px",
                                }}>
                                <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex"
                                    style={{
                                        backgroundColor: "#eff6ff",
                                        color: "#3b82f6",
                                        fontSize: "13px",
                                    }}>Lorem ipsum
                                    <span className="gl-pill-remove-trigger ml-2 text-danger"
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "16px",
                                        }}>&times;</span></div>

                                <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex"
                                    style={{
                                        backgroundColor: "#eff6ff",
                                        color: "#3b82f6",
                                        fontSize: "13px",
                                    }}>Lorem ipsum
                                    <span className="gl-pill-remove-trigger ml-2 text-danger"
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "16px",
                                        }}>&times;</span></div>

                                <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex"
                                    style={{
                                        backgroundColor: "#eff6ff",
                                        color: "#3b82f6",
                                        fontSize: "13px",
                                    }}>Lorem ipsum
                                    <span className="gl-pill-remove-trigger ml-2 text-danger"
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "16px",
                                        }}>&times;</span></div>

                                <div className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex"
                                    style={{
                                        backgroundColor: "#eff6ff",
                                        color: "#3b82f6",
                                        fontSize: "13px",
                                    }}>Lorem ipsum
                                    <span className="gl-pill-remove-trigger ml-2 text-danger"
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "16px",
                                        }}>&times;</span></div>
                            </div>
                        </div> */}

                        <div className="gl-tags-section-block mb-4">
  <h3 className="gl-tags-section-heading h6 font-weight-bold mb-2">
    Your Selected Tags ({selectedTags?.length})
  </h3>

  <div
    className="gl-tags-flex-container d-flex flex-wrap gap-2"
    style={{
      gap: "8px",
    }}
  >
    {selectedTags?.length > 0 ? (
     selectedTags?.map((id) => {
  const tag = availableTags?.find((item) => item.id === id);

  return (
    <div
      key={id}
      className="gl-tag-pill active-selected-state badge badge-pill p-2 px-3 align-items-center d-inline-flex"
      style={{
        backgroundColor: "#eff6ff",
        color: "#3b82f6",
        fontSize: "13px",
      }}
    >
      {tag?.name}

      <span
        className="gl-pill-remove-trigger ml-2 text-danger"
        style={{
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => {
          setSelectedTags((prev) =>
            prev.filter((tagId) => tagId !== id)
          );
        }}
      >
        &times;
      </span>
    </div>
  )
})
    ) : (
      <div className="text-muted small">
        No tags selectedd
      </div>
    )}
  </div>
</div>

                     <div className="gl-tags-section-block mb-4">
  <h3 className="gl-tags-section-heading h6 font-weight-bold mb-2">
    Available Tags
  </h3>

  <div
    className="gl-tags-flex-container d-flex flex-wrap"
    style={{
      gap: "8px",
    }}
  >
    {availableTags?.length > 0 ? (
      availableTags.map((item) => (
        <div
          key={item?.id}
          onClick={() => handleTagSelect(item)}
          className="gl-tag-pill pool-item-state badge badge-pill badge-light p-2 px-3 text-secondary"
          style={{
            backgroundColor: "#f1f5f9",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          {item?.name}
        </div>
      ))
    ) : (
      <div className="text-muted small">
        No tags available
      </div>
    )}
  </div>
                     </div>

                    </div>

                    <hr className="gl-popup-horizontal-divider my-4"/>

                    <div className="gl-popup-footer-action-row d-flex align-items-center justify-content-between">
                        <p className="gl-footer-helper-note-text text-muted small mb-0">You can update your tags later
                            in your profile</p>
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isLoading || isSubmitting}
                          className="gl-action-submit-pill-btn btn px-4 py-2 font-weight-bold text-white border-0"
                          style={{
                              backgroundColor: "#006699",
                              borderRadius: "8px",
                              cursor: (isLoading || isSubmitting) ? "not-allowed" : "pointer",
                              opacity: (isLoading || isSubmitting) ? 0.7 : 1,
                          }}>
                          {isLoading || isSubmitting ? "Saving..." : "Save & Continue"}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                              strokeWidth="2.5" className="ml-2 align-middle">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>
   </div>
    </>
  )
}

export default RequestDetailsModal
