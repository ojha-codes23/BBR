import React from 'react'

const RegisteredAttendes = () => {
  return (
    <div class="modal fade glnc-modal-wrapper" id="viewAttendeesModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            {/* <!-- OUTSIDE CLOSING BUTTON (White Circle with Black Cross Icon) --> */}
            <button type="button" class="glnc-modal-outside-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="bi bi-x-lg"></i>
            </button>

            {/* <!-- POPUP HEADER BLOCK --> */}
            <div class="glnc-popup-hdr-container">
                <div class="glnc-popup-icon-box">
                    <i class="bi bi-people"></i>
                </div>
                <div>
                    <h4 class="glnc-popup-title">Registered Attendees (99)</h4>
                    <p class="glnc-popup-subtitle">College Application Workshop</p>
                </div>
            </div>

            {/* <!-- SCROLLABLE LIST ENGINE --> */}
            <div class="glnc-attendees-scroll-list">

                {/* <!-- Row 1 --> */}
                <div class="glnc-attendee-card-row">
                    <div class="glnc-attendee-profile-info">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                            alt="Sarah Johnson Avatar" class="glnc-attendee-avatar" />
                        <h5 class="glnc-attendee-name">Sarah Johnson</h5>
                    </div>
                    <a href="#" class="glnc-link-user-profile"><i class="bi bi-person"></i> User Profile</a>
                </div>

                {/* <!-- Row 2 --> */}
                <div class="glnc-attendee-card-row">
                    <div class="glnc-attendee-profile-info">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                            alt="Penny Parker Avatar" class="glnc-attendee-avatar" />
                        <h5 class="glnc-attendee-name">Penny Parker</h5>
                    </div>
                    <a href="#" class="glnc-link-user-profile"><i class="bi bi-person"></i> User Profile</a>
                </div>

                {/* <!-- Row 3 --> */}
                <div class="glnc-attendee-card-row">
                    <div class="glnc-attendee-profile-info">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                            alt="Brian Gordon Avatar" class="glnc-attendee-avatar" />
                        <h5 class="glnc-attendee-name">Brian Gordon</h5>
                    </div>
                    <a href="#" class="glnc-link-user-profile"><i class="bi bi-person"></i> User Profile</a>
                </div>

                {/* <!-- Row 4 --> */}
                <div class="glnc-attendee-card-row">
                    <div class="glnc-attendee-profile-info">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
                            alt="Vera Welch Avatar" class="glnc-attendee-avatar" />
                        <h5 class="glnc-attendee-name">Vera Welch</h5>
                    </div>
                    <a href="#" class="glnc-link-user-profile"><i class="bi bi-person"></i> User Profile</a>
                </div>

                {/* <!-- Row 5 --> */}
                <div class="glnc-attendee-card-row">
                    <div class="glnc-attendee-profile-info">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
                            alt="Cooper Bergson Avatar" class="glnc-attendee-avatar" />
                        <h5 class="glnc-attendee-name">Cooper Bergson</h5>
                    </div>
                    <a href="#" class="glnc-link-user-profile"><i class="bi bi-person"></i> User Profile</a>
                </div>

                {/* <!-- Row 6 --> */}
                <div class="glnc-attendee-card-row">
                    <div class="glnc-attendee-profile-info">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
                            alt="Dulce Bator Avatar" class="glnc-attendee-avatar" />
                        <h5 class="glnc-attendee-name">Dulce Bator</h5>
                    </div>
                    <a href="#" class="glnc-link-user-profile"><i class="bi bi-person"></i> User Profile</a>
                </div>

            </div>

            {/* <!-- POPUP FOOTER ACTIONS --> */}
            <div class="glnc-popup-action-footer">
                <button type="button" class="glnc-btn-popup-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="glnc-btn-popup-notify-all">Notify All <i
                        class="bi bi-arrow-right"></i></button>
            </div>

        </div>
    </div>
</div>
  )
}

export default RegisteredAttendes