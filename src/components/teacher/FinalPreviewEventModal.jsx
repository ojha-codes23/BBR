import React from 'react'

const FinalPreviewEventModal = () => {
  return (
    <div class="modal fade event-modal" id="finalEventDetailsPreviewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style={{maxWidth: "820px"}}>
        <div class="modal-content"
            style={{border: "none", borderRadius: "28px", position: "relative", background: "#ffffff", padding: "36px", boxShadow: "0px 12px 40px rgba(0,0,0,0.12)"}}>
            <button type="button" class="glnc-modal-outside-close" data-bs-dismiss="modal"
                style={{top: "-42px", right: "0"}}><i class="bi bi-x-lg"></i></button>

            <h2 class="glnc-ed-title">Career Planning Workshop</h2>
            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200"
                alt="Career Planning Banner" class="glnc-ed-banner" />

            <div class="row g-4">
                <div class="col-md-7">
                    <div class="glnc-ed-panel-box">
                        <h4 class="glnc-ed-subheading">About This Event</h4>
                        <p class="glnc-ed-text">Interactive framework blueprints layout for professional career
                            alignment benchmarking maps.</p>
                        <div class="d-flex flex-wrap gap-2 mt-4">
                            <span class="glnc-ee-tag-badge">Career Development</span>
                            <span class="glnc-ee-tag-badge">Planning</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="glnc-ed-panel-box">
                        <h4 class="glnc-ed-subheading">Event Logistics</h4>
                        <div class="glnc-ed-meta-item"><img src="images/super-user-dashboard/calendar-icon-blue.svg" alt="" /><span>Friday, Dec 5,
                                2025</span></div>
                        <div class="glnc-ed-meta-item"><i class="bi bi-clock"></i><span>2:00 PM EST</span></div>
                        <div class="glnc-ed-meta-item"><i class="bi bi-geo-alt"></i><span>Virtual Zoom Link</span></div>
                        <div class="glnc-ed-meta-item"><i class="bi bi-globe"></i><span>English</span></div>
                        <hr style={{borderTop: "1px solid #EAECF0"}} />
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=150" class="glnc-ed-avatar" />
                            <span style={{fontSize: "14px", fontWeight: "600"}}>Sarah Johnson (Instructor)</span>
                        </div>
                        <p class="glnc-preview-text" style={{margin: "0", fontSize: "13px"}}>
                            Tech leader and coach specializing in career transitions and skill development.
                        </p>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end mt-4">
                <button type="button" class="glnc-ed-btn-edit" data-bs-toggle="modal"
                    data-bs-target="#editCreatedEventModal"><i class="bi bi-pencil"></i> Edit</button>
            </div>
        </div>
    </div>
</div>

  )
}

export default FinalPreviewEventModal