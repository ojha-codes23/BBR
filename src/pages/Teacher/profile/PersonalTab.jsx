import React from 'react'

const PersonalTab = () => {
  return (
    // <div className="tab-pane fade show active" id="pane-personal" role="tabpanel">
    <div>
      {/* <!-- SECTION 1: Personal Information Form Block --> */}
      <section className="profile-section-block-card">
        <div className="section-headline-header">
          <i className="fa-regular fa-user"></i> Personal Information
        </div>

        <form>
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <label className="form-label-custom">First Name</label>
              <input type="text" className="form-control-custom-input" placeholder="Sarah" />
            </div>
            <div className="col-md-6">
              <label className="form-label-custom">Last Name</label>
              <input type="text" className="form-control-custom-input" placeholder="Johnson" />
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <label className="form-label-custom">Email</label>
              <input type="email" className="form-control-custom-input"
                placeholder="12-12-2025" />
            </div>
            <div className="col-md-6">
              <label className="form-label-custom">Phone</label>
              <input type="text" className="form-control-custom-input"
                placeholder="+1 (555) 123-4567" />
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <label className="form-label-custom">Date of Birth</label>
              <div className="date-input-icon-wrapper">
                <input type="text" className="form-control-custom-input"
                  placeholder="12-12-2025" />
                <i className="fa-regular fa-calendar"></i>
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label-custom">Gender</label>
              <div className="select-input-chevron-wrapper">
                <select className="form-control-custom-input">
                  <option value="" disabled selected hidden>Female</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <label className="form-label-custom">Bio</label>
              <textarea className="form-control-custom-input textarea-bio-custom"
                placeholder="Passionate educator with over 10 years of experience in mathematics and computer science. I believe in making complex concepts simple and engaging for Users of Level (All)."></textarea>
            </div>
          </div>
        </form>
      </section>

      {/* <!-- SECTION 2: Address Specification Block --> */}
      <section className="profile-section-block-card">
        <div className="section-headline-header">
          <i className="fa-solid fa-location-dot"></i> Address
        </div>

        <form>
          <div className="row mb-4">
            <div className="col-12">
              <label className="form-label-custom">Street Address</label>
              <input type="text" className="form-control-custom-input"
                placeholder="123 Education Lane" />
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <label className="form-label-custom">City</label>
              <input type="text" className="form-control-custom-input"
                placeholder="San Francisco" />
            </div>
            <div className="col-md-6">
              <label className="form-label-custom">State/Province</label>
              <input type="text" className="form-control-custom-input"
                placeholder="California" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label-custom">Country</label>
              <input type="text" className="form-control-custom-input"
                placeholder="United States" />
            </div>
            <div className="col-md-6">
              <label className="form-label-custom">ZIP/Postal Code</label>
              <input type="text" className="form-control-custom-input" placeholder="94102" />
            </div>
          </div>
        </form>
      </section>

      {/* <!-- SECTION 3: Social & Portfolio Links Block --> */}
      <section className="profile-section-block-card">
        <div className="section-headline-header">
          <i className="fa-solid fa-link"></i> Social & Portfolio Links
        </div>

        <form>
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <label className="form-label-custom">Personal Website</label>
              <input type="url" className="form-control-custom-input"
                placeholder="https://sarahjohnson.edu" />
            </div>
            <div className="col-md-6">
              <label className="form-label-custom">LinkedIn</label>
              <input type="url" className="form-control-custom-input"
                placeholder="https://linkedin.com/in/sarahjohnson" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label-custom">Twitter/X</label>
              <input type="url" className="form-control-custom-input"
                placeholder="https://twitter.com/sarahteaches" />
            </div>
            <div className="col-md-6">
              <label className="form-label-custom">YouTube Channel</label>
              <input type="url" className="form-control-custom-input"
                placeholder="https://youtube.com/@sarahmathclass" />
            </div>
          </div>
        </form>
      </section>

    </div>
  )
}

export default PersonalTab