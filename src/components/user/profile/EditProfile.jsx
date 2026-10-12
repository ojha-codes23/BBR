import React from 'react'

const EditProfile = () => {
  return (
    <>
      <div className="modal fade gl-custom-popup-wrapper" id="editUserProfileModal" tabindex="-1" aria-labelledby="editUserProfileModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content gl-popup-main-box">
            
            <div className="gl-popup-header-row">
                <div className="gl-popup-header-left">
                    <div className="gl-popup-icon-box blue-theme-bg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="gl-popup-title-block">
                        <h2 className="gl-popup-main-title" id="editUserProfileModalLabel">Edit User Profile</h2>
                        <p className="gl-popup-subtitle">Update user information and settings</p>
                    </div>
                </div>
                <button type="button" className="gl-popup-close-trigger" data-bs-dismiss="modal" aria-label="Close">
                    <img src="/images/user/super-user-dashboard/popup-cross-icon.svg" alt="close"/>
                </button>
            </div>

            <div className="modal-body gl-popup-core-body">
                <form className="gl-custom-form-layout">
                    
                    <div className="gl-profile-form-card">
                        
                        <div className="gl-custom-grid-2">
                            <div className="gl-custom-field-group">
                                <label className="gl-popup-form-label">First Name</label>
                                <input type="text" className="gl-popup-form-input" placeholder="Emma"/>
                            </div>
                            <div className="gl-custom-field-group">
                                <label className="gl-popup-form-label">Last Name</label>
                                <input type="text" className="gl-popup-form-input" placeholder="Wilson"/>
                            </div>
                        </div>

                        <div className="gl-custom-grid-3">
                            <div className="gl-custom-field-group">
                                <label className="gl-popup-form-label">Email</label>
                                <input type="email" className="gl-popup-form-input" placeholder="emma@gmail.com"/>
                            </div>
                            <div className="gl-custom-field-group">
                                <label className="gl-popup-form-label">Phone</label>
                                <input type="text" className="gl-popup-form-input" placeholder="+1 (555) 123-4567"/>
                            </div>
                            <div className="gl-custom-field-group">
                                <label className="gl-popup-form-label">Company</label>
                                <input type="text" className="gl-popup-form-input" placeholder="educationalsite.org"/>
                            </div>
                        </div>

                        <div className="gl-custom-grid-2">
                            <div className="gl-custom-field-group">
                                <label className="gl-popup-form-label">Role</label>
                                <div className="gl-popup-select-wrapper">
                                    <select className="gl-popup-form-select">
                                        <option value="user" selected>User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="gl-custom-field-group">
                                <label className="gl-popup-form-label">Status</label>
                                <div className="gl-popup-select-wrapper">
                                    <select className="gl-popup-form-select">
                                        <option value="active" selected>Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="gl-custom-full-width-field">
                            <label className="gl-popup-form-label">Bio</label>
                            <textarea className="gl-popup-form-textarea" rows="4" placeholder="I'm a passionate learner with a strong interest in STEM subjects..."></textarea>
                        </div>

                    </div>

                </form>
            </div>

            <div className="modal-footer gl-popup-footer-row border-0">
                <button type="button" className="gl-popup-btn-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="gl-popup-btn-save spec-blue-btn">Save Changes</button>
            </div>

        </div>
    </div>
</div>
    
    </>
  )
}

export default EditProfile
