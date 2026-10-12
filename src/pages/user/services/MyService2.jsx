import React from 'react'
import RequestPendingModal from '../../../components/user/servicesmodal/RequestPendingModal'

const MyService2 = () => {
  return (
    <>
             {/* <main className="gl-content-body" style={{padding:'0px 0px'}}> */}
         
     <div className="container py-4">

        <div className="d-flex align-items-center justify-content-between mb-4">
    
    {/* <!-- Left Section: Back Button + Text Details --> */}
    <div className="d-flex align-items-start gap-3">
        {/* <!-- Isolated left edge capsule button (adjust margin/positioning if placing inside a wrapper) --> */}
        <button className="back-capsule-btn">
            <img src="/images/user/super-user-dashboard/left-icon-btn.svg" alt=""/>
        </button>
        
        <div>
            <h2 className="page-title">Choose Your Provider</h2>
            <div className="page-subtitle">Select up to 2 preferred providers</div>
        </div>
    </div>

    {/* <!-- Right Section: Dropdown Filter Component --> */}
    <div>
        <button className="dropdown-pill-btn">
            <span>One-on-One Coaching (SOW)</span>
            <i className="bi bi-chevron-down"></i>
        </button>
    </div>

</div>

           {/* <!-- SEARCH CONTAINER COMPONENT --> */}
    <div className="search-container">
        <i className="bi bi-search"></i>
        <input type="text" className="search-input-field" placeholder="Search by skills & tags"/>
    </div>

    {/* <!-- SKILLS TAG PILLS ROW (Exactly matching image count) --> */}
    <div className="tags-wrapper">
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
        <a href="#" className="tag-pill">Lorem ipsum</a>
    </div>
</div>

    {/* <!-- NO PREFERENCE ROW CARD --> */}
    <div className="no-preference-card">
        <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="icon-question-circle">?</div>
            <span className="selection-tag tag-secondary"><span className="number-count">2</span> Selected (Secondary)</span>
        </div>
        <h3 className="h6 fw-bold text-dark mb-2">No Preference</h3>
        <p className="text-muted small mb-0" style={{
  lineHeight: "1.5",
  maxWidth: "95%",
}}>
            Optional. Can be selected as your 1st or 2nd choice. If selected, the system will match you with an available provider whose skills are relevant to your request. If selected as your 2nd choice, this option will only be used if your 1st choice is unavailable.
        </p>
    </div>

    {/* <!-- MAIN PROVIDERS GRID (2 COLUMNS AS PER IMAGE) --> */}
    <div className="row g-4 mb-4">
        
        {/* <!-- CARD 1: Sarah Johnson (Selected Primary) --> */}
        <div className="col-md-6">
            <div className="provider-card selected-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-start gap-3 ser-pro">
                        <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                        <div>
                            <div className="d-flex align-items-center gap-2">
                                <h4 className="h6 fw-bold text-dark mb-0">Sarah Johnson</h4>
                                <span className="badge-state state-available">Available</span>
                            </div>
                            <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                        </div>
                    </div>
                    <span className="selection-tag tag-primary"><span className="number-count">1</span> Selected (Primary)</span>
                </div>
                <p className="text-muted small mb-3">Experienced career coach with 10+ years helping professionals achieve their goals.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Career Planning</span>
                    <span className="skill-tag">Leadership</span>
                    <span className="skill-tag">Professional Development</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><img src="/images/user/super-user-dashboard/iconoir_language.svg" alt=""/>English, Spanish</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/> 4.9</span>
                </div>
            </div>
        </div>

        {/* <!-- CARD 2: Michael Chen (Selected Secondary) --> */}
        <div className="col-md-6">
            <div className="provider-card selected-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-start gap-3 ser-pro">
                        <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                        <div>
                            <div className="d-flex align-items-center gap-2">
                                <h4 className="h6 fw-bold text-dark mb-0">Michael Chen</h4>
                                <span className="badge-state state-available">Available</span>
                            </div>
                            <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                        </div>
                    </div>
                    <span className="selection-tag tag-secondary"><span className="number-count">2</span> Selected (Secondary)</span>
                </div>
                <p className="text-muted small mb-3">Tech leader and coach specializing in career transitions and skill development.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Technology</span>
                    <span className="skill-tag">Team Leadership</span>
                    <span className="skill-tag">Project Management</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><i className="bi bi-globe me-2 text-primary"></i>English, Mandarin</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/> 4.8</span>
                </div>
            </div>
        </div>

        {/* <!-- CARD 3: Emily Rodriguez (Available Default) --> */}
        <div className="col-md-6">
            <div className="provider-card">
                <div className="d-flex align-items-start gap-3 mb-3 ser-pro">
                    <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <h4 className="h6 fw-bold text-dark mb-0">Emily Rodriguez</h4>
                            <span className="badge-state state-available">Available</span>
                        </div>
                        <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                    </div>
                </div>
                <p className="text-muted small mb-3">Grant writing expert who has helped secure millions in funding for organizations.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Grant Writing</span>
                    <span className="skill-tag">Nonprofit Management</span>
                    <span className="skill-tag">Strategic Planning</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><img src="/images/user/super-user-dashboard/iconoir_language.svg" alt=""/>English, Spanish</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/> 4.7</span>
                </div>
            </div>
        </div>

        {/* <!-- CARD 4: Livia Workman (Limited) --> */}
        <div className="col-md-6">
            <div className="provider-card">
                <div className="d-flex align-items-start gap-3 mb-3 ser-pro">
                    <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <h4 className="h6 fw-bold text-dark mb-0">Livia Workman</h4>
                            <span className="badge-state state-limited">Limited</span>
                        </div>
                        <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                    </div>
                </div>
                <p className="text-muted small mb-3">Grant writing expert who has helped secure millions in funding for organizations.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Grant Writing</span>
                    <span className="skill-tag">Nonprofit Management</span>
                    <span className="skill-tag">Strategic Planning</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><img src="/images/user/super-user-dashboard/iconoir_language.svg" alt=""/>English, Spanish</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/> 4.7</span>
                </div>
            </div>
        </div>

        {/* <!-- CARD 5: Emily Rodriguez (Available Duplicate) --> */}
        <div className="col-md-6">
            <div className="provider-card">
                <div className="d-flex align-items-start gap-3 mb-3 ser-pro">
                    <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <h4 className="h6 fw-bold text-dark mb-0">Emily Rodriguez</h4>
                            <span className="badge-state state-available">Available</span>
                        </div>
                        <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                    </div>
                </div>
                <p className="text-muted small mb-3">Grant writing expert who has helped secure millions in funding for organizations.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Grant Writing</span>
                    <span className="skill-tag">Nonprofit Management</span>
                    <span className="skill-tag">Strategic Planning</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><img src="/images/user/super-user-dashboard/iconoir_language.svg" alt=""/>, Spanish</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/>4.7</span>
                </div>
            </div>
        </div>

        {/* <!-- CARD 6: Livia Workman (Available) --> */}
        <div className="col-md-6">
            <div className="provider-card">
                <div className="d-flex align-items-start gap-3 mb-3 ser-pro">
                    <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <h4 className="h6 fw-bold text-dark mb-0">Livia Workman</h4>
                            <span className="badge-state state-available">Available</span>
                        </div>
                        <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                    </div>
                </div>
                <p className="text-muted small mb-3">Grant writing expert who has helped secure millions in funding for organizations.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Grant Writing</span>
                    <span className="skill-tag">Nonprofit Management</span>
                    <span className="skill-tag">Strategic Planning</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><img src="/images/user/super-user-dashboard/iconoir_language.svg" alt=""/>English, Spanish</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/> 4.7</span>
                </div>
            </div>
        </div>

        {/* <!-- CARD 7: Emily Rodriguez (Limited) --> */}
        <div className="col-md-6">
            <div className="provider-card">
                <div className="d-flex align-items-start gap-3 mb-3 ser-pro">
                    <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <h4 className="h6 fw-bold text-dark mb-0">Emily Rodriguez</h4>
                            <span className="badge-state state-limited">Limited</span>
                        </div>
                        <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                    </div>
                </div>
                <p className="text-muted small mb-3">Grant writing expert who has helped secure millions in funding for organizations.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Grant Writing</span>
                    <span className="skill-tag">Nonprofit Management</span>
                    <span className="skill-tag">Strategic Planning</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><img src="/images/user/super-user-dashboard/iconoir_language.svg" alt=""/>English, Spanish</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/> 4.7</span>
                </div>
            </div>
        </div>

        {/* <!-- CARD 8: Livia Workman (Unavailable) --> */}
        <div className="col-md-6">
            <div className="provider-card">
                <div className="d-flex align-items-start gap-3 mb-3 ser-pro">
                    <div className="provider-avatar d-flex align-items-center justify-content-center text-muted fw-bold"><img src="/images/user/super-user-dashboard/user-profile-img.svg" alt=""/></div>
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <h4 className="h6 fw-bold text-dark mb-0">Livia Workman</h4>
                            <span className="badge-state state-unavailable">Unavailable</span>
                        </div>
                        <a href="#" className="text-primary small text-decoration-underline" style={{
  fontSize: "12px",
}}>User Profile</a>
                    </div>
                </div>
                <p className="text-muted small mb-3">Grant writing expert who has helped secure millions in funding for organizations.</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="skill-tag">Grant Writing</span>
                    <span className="skill-tag">Nonprofit Management</span>
                    <span className="skill-tag">Strategic Planning</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 small">
                    <span className="text-dark"><img src="/images/user/super-user-dashboard/iconoir_language.svg" alt=""/>English, Spanish</span>
                    <span className="fw-bold text-dark"><img src="/images/user/super-user-dashboard/solar_star-bold.svg" alt=""/>4.7</span>
                </div>
            </div>
        </div>

    </div>

    {/* <!-- PAGINATION & BOTTOM ACTION ROW --> */}
    <div className="d-flex flex-wrap align-items-center justify-content-between border-top pt-4 mt-4">
        <div className="small text-muted">
            Showing 4 from 50 results
        </div>

        <div className="pagination-container d-flex align-items-center gap-1">
            <button className="btn btn-sm btn-light border" disabled>Prev</button>
            <a href="#" className="page-num active">1</a>
            <a href="#" className="page-num">2</a>
            <a href="#" className="page-num">3</a>
            <span className="text-muted px-1">...</span>
            <a href="#" className="page-num">10</a>
            <button className="btn btn-sm btn-light border text-primary" style={{
  backgroundColor: "var(--primary-blue)",
  color: "white",
}}>Next</button>
        </div>
    </div>

    {/* <!-- SEND REQUEST FLOATING/BOTTOM END ALIGNMENT BUTTON --> */}
    <div className="text-end mt-4">
        {/* <!-- <button class="btn-send-request" data-bs-toggle="modal" data-bs-target="#requestPendingModal">Send Request &nbsp;<i class="bi bi-arrow-right"></i></button> --> */}
        <a href="#requestPendingModal" className="btn-send-request">Send Request &nbsp;<i className="bi bi-arrow-right"></i></a>
         {/* <!-- <a href="#requestPendingModal" class="btn btn-primary">View Request Status</a> --> */}
    </div>
    {/* <!-- <a href="#requestPendingModal" class="btn btn-primary">View Request Status</a> --> */}
    


        {/* </main> */}

        <RequestPendingModal/>



    </>
  )
}

export default MyService2
