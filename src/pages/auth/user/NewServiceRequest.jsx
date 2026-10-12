import React from 'react'
import TagInterestModal from '../../../components/user/servicesmodal/TagInterestModal'
import RequestDetailsModal from '../../../components/user/servicesmodal/RequestDetailsModal'

const NewServiceRequest = () => {
  return (
   <>
      <main class="gl-content-body">
                <div class="srv-req-wrapper">

                    {/* <!-- Header Area --> */}
                    <div class="srv-req-header">
                        <div class="srv-req-header-left">
                            <a href="dashboard.html" class="srv-req-back-btn" aria-label="Go back">
                                <img src="images/super-user-dashboard/left-icon-btn.svg" alt=""/>
                            </a>
                            <div class="srv-req-title-block">
                                <h1 class="srv-req-main-title">New Service Request</h1>
                                <p class="srv-req-subtitle">Request coaching, mentorship, or support from our expert
                                    providers.</p>
                            </div>
                        </div>

                        {/* <!-- Selection Status Counter Pill --> */}
                        <div class="srv-req-status-pill">
                            <span class="srv-req-count-badge">Selected : (2)</span>
                            <span class="srv-req-selected-text">One-on-One Coaching, Grou...</span>
                        </div>
                    </div>

                    {/* <!-- Cards Grid --> */}
                    <div class="srv-req-grid">

                        {/* <!-- Card 1: Selected --> */}
                        <div class="srv-req-card srv-req-selected">
                            <div class="srv-req-card-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="srv-req-icon-subtext">1:1</span>
                            </div>
                            <div class="srv-req-card-content">
                                <h3 class="srv-req-card-title">One-on-One Coaching</h3>
                                <p class="srv-req-card-desc">Individual coaching Events tailored to your specific needs
                                </p>
                            </div>
                            <div class="srv-req-tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        {/* <!-- Card 2: Selected --> */}
                        <div class="srv-req-card srv-req-selected">
                            <div class="srv-req-card-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div class="srv-req-card-content">
                                <h3 class="srv-req-card-title">Group Coaching</h3>
                                <p class="srv-req-card-desc">Join a group coaching session with peers</p>
                            </div>
                            <div class="srv-req-tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        {/* <!-- Card 3: Default --> */}
                        <div class="srv-req-card">
                            <div class="srv-req-card-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div class="srv-req-card-content">
                                <h3 class="srv-req-card-title">Career Guidance</h3>
                                <p class="srv-req-card-desc">Get expert advice on career planning and transitions</p>
                            </div>
                        </div>

                        {/* <!-- Card 4: Default --> */}
                        <div class="srv-req-card">
                            <div class="srv-req-card-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div class="srv-req-card-content">
                                <h3 class="srv-req-card-title">Skill Development Events</h3>
                                <p class="srv-req-card-desc">Focused Events to develop specific skills</p>
                            </div>
                        </div>

                        {/* <!-- Card 5: Default --> */}
                        <div class="srv-req-card">
                            <div class="srv-req-card-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V9a5 5 0 00-9.751-1.551M12 11c0-3.517 1.009-6.799 2.753-9.571m3.44 2.04l-.054.09A13.916 13.916 0 0015 11v1.5M0 18h12M0 21h12" />
                                </svg>
                            </div>
                            <div class="srv-req-card-content">
                                <h3 class="srv-req-card-title">Project Support</h3>
                                <p class="srv-req-card-desc">Technical and strategic support for your projects</p>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Bottom Actions Container --> */}
                    <div class="srv-req-footer">
                        {/* <!-- <a href="my-services.html" class="srv-req-continue-btn">
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </a> --> */}
                        <a href="#" data-bs-toggle="modal" data-bs-target="#requestDetailsModal"
                            class="gl-open-modal-trigger-btn">Continue <img
                                src="images/super-user-dashboard/event-right-icon.svg" alt=""/></a>
                    </div>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#tagsInterestsModal"
                        class="gl-open-modal-trigger-btn">Open Tags & Interests</a>
                    {/* <!-- <a href="#requestDetailsModal" class="gl-open-modal-trigger-btn">Continue</a> --> */}
                </div>
            </main>

            <TagInterestModal/>
            <RequestDetailsModal/>
   </>
  )
}

export default NewServiceRequest
