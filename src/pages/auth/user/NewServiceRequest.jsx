import React, { useEffect, useState } from 'react'
import TagInterestModal from '../../../components/user/servicesmodal/TagInterestModal'
import RequestDetailsModal from '../../../components/user/servicesmodal/RequestDetailsModal'
import useServices from '../../../hooks/user/useServices'
import toast from 'react-hot-toast'

const NewServiceRequest = () => {


     const {getAllServices,serviceAsync,isServiceLoading}=useServices()

      const [service,setService]=useState(getAllServices)
    //   const [select,setSelect]=useState(false)
      const [selectedServices, setSelectedServices] = useState([])

        const fetchAllService = async () => {
        console.log("FETCH SERVICE FUNCTION CALLED");

        try {
            const response = await serviceAsync();
            console.log("API RESPONSE:", response);
            setService(response);
        } catch (error) {
            console.log("SERVICE ERROR:", error);
         }
        };

        const serviceIcons = {
        "One-on-One Coaching": (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="srv-req-icon-subtext">1:1</span>
          </>
        ),

          "Group Coaching": (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          ),

          "Career Guidance": (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          ),

          "Skill Development Events": (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          ),

          "Project Support": (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V9a5 5 0 00-9.751-1.551M12 11c0-3.517-1.009 6.799 2.753-9.571m3.44 2.04l-.054.09A13.916 13.916 0 0015 11v1.5M0 18h12M0 21h12"
              />
            </svg>
          ),
        };

      // const handleSelect = (item) => {
      //   setSelectedServices((prev) => {
      //       const alreadySelected = prev.some(
      //       (selectedItem) => selectedItem.id === item.id
      //       );

      //       if (alreadySelected) {
      //       return prev.filter(
      //           (selectedItem) => selectedItem.id !== item.id
      //       );
      //       }

      //       return [...prev, item];
      //   });
      // };
       
      const handleSelect = (item) => {
  setSelectedServices((prev) => {
    const alreadySelected = prev.some(
      (selectedItem) => selectedItem.id === item.id
    );

    // Already selected hai toh deselect kar do
    if (alreadySelected) {
      return prev.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
    }

    // Maximum 2 services allowed
    if (prev.length >= 2) {
      toast.error("Maximum 2 services can be selected at a time")
      return prev;
    }

    return [...prev, item];
  });
};

        useEffect(() => {
        console.log("USE EFFECT CALLED");
        fetchAllService();
        }, []);


      console.log(service,"my-services")
      console.log(selectedServices)


  return (
   <>
      <main className="gl-content-body">
                <div className="srv-req-wrapper">

                    {/* <!-- Header Area --> */}
                    <div className="srv-req-header">
                        <div className="srv-req-header-left">
                            <a href="dashboard.html" className="srv-req-back-btn" aria-label="Go back">
                                <img src="/images/user/super-user-dashboard/left-icon-btn.svg" alt=""/>
                            </a>
                            <div className="srv-req-title-block">
                                <h1 className="srv-req-main-title">New Service Request</h1>
                                <p className="srv-req-subtitle">Request coaching, mentorship, or support from our expert
                                    providers.</p>
                            </div>
                        </div>

                        {/* <!-- Selection Status Counter Pill --> */}
                        {/* <div className="srv-req-status-pill">
                            <span className="srv-req-count-badge">Selected : (2)</span>
                            <span className="srv-req-selected-text">One-on-One Coaching, Grou...</span>
                        </div> */}
                        <div className="srv-req-status-pill">
                        <span className="srv-req-count-badge">
                          Selected : ({selectedServices.length})
                        </span>

                        <span className="srv-req-selected-text">
                          {selectedServices.map((item) => item.name).join(", ") || "No service selected"}
                        </span>
                      </div>
                    </div>

                    {/* <!-- Cards Grid --> */}
                  
                    
                  <div className="srv-req-grid">
                    {isServiceLoading ? (
                      <div
                        style={{
                          width: "100%",
                          minHeight: "400px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gridColumn: "1 / -1",
                        }}
                      >
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : service?.length > 0 ? (
                      service.map((item) => {
                        const isSelected = selectedServices.some(
                          (selectedItem) => selectedItem.id === item.id
                        );

                        const serviceIcon = serviceIcons[item?.name];

                        return (
                          <div
                            className={
                              isSelected
                                ? "srv-req-card srv-req-selected"
                                : "srv-req-card"
                            }
                            onClick={() => handleSelect(item)}
                            key={item?.id}
                          >
                          <div className="srv-req-card-icon-box">
                            {serviceIcon || null}
                          </div>
                            {/* </div> */}

                            <div className="srv-req-card-content">
                              <h3 className="srv-req-card-title">
                                {item?.name}
                              </h3>

                              <p className="srv-req-card-desc">
                                {item?.description}
                              </p>
                            </div>

                            {isSelected && (
                              <div className="srv-req-tick-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          minHeight: "300px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gridColumn: "1 / -1",
                        }}
                      >
                        <p style={{ margin: 0 }}>No services available.</p>
                      </div>
                    )}
                  </div>


                    {/* <!-- Bottom Actions Container --> */}
                    <div className="srv-req-footer">
                        <a                        
                         style={{
                                opacity: selectedServices?.length === 0 ? 0.5 : 1,
                                cursor: selectedServices?.length === 0 ? "not-allowed" : "pointer",
                                pointerEvents: selectedServices?.length === 0 ? "none" : "auto",
                                }}

                            href="#" data-bs-toggle="modal" data-bs-target="#requestDetailsModal"
                            className="gl-open-modal-trigger-btn">Continue  <img
                                src="images/super-user-dashboard/event-right-icon.svg" alt=""/></a>
                    </div>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#tagsInterestsModal"
                        className="gl-open-modal-trigger-btn">Open Tags & Interests</a>
                    {/* <!-- <a href="#requestDetailsModal" className="gl-open-modal-trigger-btn">Continue</a> --> */}
                </div>
            </main>

            <TagInterestModal/>
            <RequestDetailsModal  selectedService={selectedServices} />
   </>
  )
}

export default NewServiceRequest
