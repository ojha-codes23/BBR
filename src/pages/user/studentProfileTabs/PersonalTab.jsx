// import React from "react";

// const PersonalTab = () => {
//   return (
//     <div className="tab-pane fade show active">
//       {/* Personal Information */}
//       <div className="gl-profile-form-container">
//         <div className="gl-form-section-title-row">
//           <h2 className="gl-section-main-heading">
//             Personal Information
//           </h2>
//         </div>

//         <form className="gl-profile-native-form-element">
//           <div className="gl-form-fields-grid-matrix">
//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">
//                 First Name
//               </label>
//               <input
//                 className="gl-form-text-input"
//                 value="James"
//                 readOnly
//               />
//             </div>

//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">
//                 Last Name
//               </label>
//               <input
//                 className="gl-form-text-input"
//                 value="Chen"
//                 readOnly
//               />
//             </div>

//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">Email</label>
//               <input
//                 type="email"
//                 className="gl-form-text-input"
//                 value="james@example.com"
//                 readOnly
//               />
//             </div>

//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">Phone</label>
//               <input
//                 className="gl-form-text-input"
//                 value="+1 (555) 123-4567"
//                 readOnly
//               />
//             </div>

//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">
//                 Date of Birth
//               </label>
//               <input
//                 className="gl-form-text-input"
//                 value="12-12-2002"
//                 readOnly
//               />
//             </div>

//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">Gender</label>
//               <select
//                 className="gl-form-select-native-field"
//                 value="female"
//                 disabled
//               >
//                 <option value="female">Female</option>
//                 <option value="male">Male</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">
//                 Organization Name
//               </label>
//               <input
//                 className="gl-form-text-input"
//                 value="ABC Organization"
//                 readOnly
//               />
//             </div>

//             <div className="gl-form-input-field-group">
//               <label className="gl-field-native-label">
//                 Organization Code
//               </label>
//               <input
//                 className="gl-form-text-input"
//                 value="D05 E5E5"
//                 readOnly
//               />
//             </div>
//           </div>

//           <div className="gl-form-textarea-field-row">
//             <label className="gl-field-native-label">Bio</label>
//             <textarea
//               className="gl-form-native-textarea"
//               value="I'm a passionate learner with an interest in STEM subjects."
//               readOnly
//             />
//           </div>
//         </form>
//       </div>

//       {/* Address */}
//       <div className="gl-address-form-card-container">
//         <div className="gl-form-section-header-block">
//           <h2 className="gl-section-main-heading">Address</h2>
//         </div>

//         <div className="gl-address-fields-grid-engine">
//           {[
//             ["Street Address", "123 Education Lane"],
//             ["City", "San Francisco"],
//             ["State/Province", "California"],
//             ["Country", "United States"],
//             ["ZIP/Postal Code", "94102"],
//           ].map(([label, value]) => (
//             <div
//               className="gl-form-field-group"
//               key={label}
//             >
//               <label className="gl-input-element-label">
//                 {label}
//               </label>
//               <input
//                 className="gl-form-native-input"
//                 value={value}
//                 readOnly
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Social Links */}
//       <div className="gl-social-links-card-container">
//         <div className="gl-social-section-header-row">
//           <h2 className="gl-section-main-heading">
//             Social & Portfolio Links
//           </h2>
//         </div>

//         <div className="gl-social-fields-grid-matrix">
//           {[
//             ["Personal Website", "https://example.com"],
//             ["LinkedIn", "https://linkedin.com"],
//             ["Twitter/X", "https://twitter.com"],
//             ["YouTube Channel", "https://youtube.com"],
//           ].map(([label, value]) => (
//             <div
//               className="gl-social-input-field-group"
//               key={label}
//             >
//               <label className="gl-social-field-label">
//                 {label}
//               </label>
//               <input
//                 type="url"
//                 className="gl-social-text-input"
//                 value={value}
//                 readOnly
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalTab;


import React, { useState, useEffect } from "react";

const PersonalTab = ({ data = {}, isEditing = false, onFormDataChange, }) => {

  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  useEffect(() => {
    onFormDataChange?.(formData);
  }, [formData, onFormDataChange]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  return (
    <div className="tab-pane fade show active">
      {/* ================= PERSONAL INFORMATION ================= */}
      <div className="gl-profile-form-container">
        <div className="gl-form-section-title-row">
          <span className="gl-title-icon-wrapper">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006699"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <h2 className="gl-section-main-heading">Personal Information</h2>
        </div>

        <form className="gl-profile-native-form-element">
          <div className="gl-form-fields-grid-matrix">
            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">First Name</label>
              <input
                type="text"
                name="first_name"
                className="gl-form-text-input"
                placeholder="Emma"
                value={formData?.first_name || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">Last Name</label>
              <input
                type="text"
                className="gl-form-text-input"
                name="last_name"
                placeholder="Wilson"
                value={formData?.last_name || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">Email</label>
              <input
                type="email"
                className="gl-form-text-input"
                // placeholder="emma@gmail.com"
                value={formData?.email || ""}
                readOnly
              />
            </div>

            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">Phone</label>
              <input
                type="tel"
                className="gl-form-text-input"
                placeholder="+1 (555) 123-4567"
                name="phone"
                value={formData?.phone || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">Date of Birth</label>
              <div className="gl-input-with-end-icon-wrapper">
                <input
                  type="date"
                  className="gl-form-text-input"
                  placeholder="12-12-2002"
                  name="date_of_birth"
                  value={formData?.date_of_birth?.slice(0, 10) || ""}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
                <span className="gl-field-trailing-icon" style={{ pointerEvents: "none" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </span>
              </div>
            </div>

            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">Gender</label>
              <div className="gl-input-with-end-icon-wrapper">
                <select
                  className="gl-form-select-native-field"
                  name="gender"
                  value={formData?.gender || ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="" disabled hidden>
                    Select Gender
                  </option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                <span className="gl-field-trailing-icon is-pointer-disabled">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
            </div>

            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">Organization Name</label>
              <input
                type="text"
                className="gl-form-text-input"
                // placeholder="abc Organization"
                value={formData?.organization_name || ""}
                readOnly
              />
            </div>

            <div className="gl-form-input-field-group">
              <label className="gl-field-native-label">Organization Code</label>
              <input
                type="text"
                className="gl-form-text-input"
                // placeholder="#10001"
                value={formData?.organization_code || ""}
                readOnly
              />
            </div>
          </div>

          <div className="gl-form-textarea-field-row">
            <label className="gl-field-native-label">Bio</label>
            <textarea
              name="bio"
              className="gl-form-native-textarea"
              placeholder="I'm a passionate learner with a strong interest in STEM subjects. Currently focusing on advanced mathematics and physics to prepare for college. I enjoy problem-solving and have participated in several math competitions. Outside of academics, I love coding personal projects and exploring new technologies."
              value={formData?.bio || ""}
              onChange={handleChange}
              readOnly={!isEditing}
            ></textarea>
          </div>
        </form>
      </div>

      {/* ================= ADDRESS ================= */}
      <div className="gl-address-form-card-container">
        <div className="gl-form-section-header-block">
          <span className="gl-header-pin-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006699"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>
          <h2 className="gl-section-main-heading">Address</h2>
        </div>

        <form className="gl-address-native-form">
          <div className="gl-address-fields-grid-engine">
            <div className="gl-form-field-group is-span-full-width">
              <label className="gl-input-element-label">Street Address</label>
              <input
                type="text"
                className="gl-form-native-input"
                placeholder="123 Education Lane"
                name="street_address"
                value={formData?.street_address || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-form-field-group">
              <label className="gl-input-element-label">City</label>
              <input
                type="text"
                className="gl-form-native-input"
                placeholder="San Francisco"
                name="city"
                value={formData?.city || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-form-field-group">
              <label className="gl-input-element-label">State/Province</label>
              <input
                type="text"
                className="gl-form-native-input"
                placeholder="California"
                name="state_province"
                value={formData?.state_province || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-form-field-group">
              <label className="gl-input-element-label">Country</label>
              <input
                type="text"
                className="gl-form-native-input"
                placeholder="United States"
                name="country"
                value={formData?.country || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-form-field-group">
              <label className="gl-input-element-label">ZIP/Postal Code</label>
              <input
                type="text"
                className="gl-form-native-input"
                placeholder="94102"
                name="postal_code"
                value={formData?.postal_code || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </form>
      </div>

      {/* ================= SOCIAL & PORTFOLIO LINKS ================= */}
      <div className="gl-social-links-card-container">
        <div className="gl-social-section-header-row">
          <span className="gl-header-link-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006699"
              strokeWidth="2.5"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </span>
          <h2 className="gl-section-main-heading">Social & Portfolio Links</h2>
        </div>

        <form className="gl-social-native-form-element">
          <div className="gl-social-fields-grid-matrix">
            <div className="gl-social-input-field-group">
              <label className="gl-social-field-label">Personal Website</label>
              <input
                type="url"
                className="gl-social-text-input"
                placeholder="https://EmmaWilson.edu"
                name="personal_website"
                value={formData?.personal_website || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-social-input-field-group">
              <label className="gl-social-field-label">LinkedIn</label>
              <input
                type="url"
                className="gl-social-text-input"
                placeholder="https://linkedin.com/in/sarahjohnson"
                name="linkedin"
                value={formData?.linkedin || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-social-input-field-group">
              <label className="gl-social-field-label">Twitter/X</label>
              <input
                type="url"
                className="gl-social-text-input"
                placeholder="https://twitter.com/sarahteaches"
                name="twitter"
                value={formData?.twitter || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="gl-social-input-field-group">
              <label className="gl-social-field-label">YouTube Channel</label>
              <input
                type="url"
                className="gl-social-text-input"
                placeholder="https://youtube.com/@sarahmathclassName"
                name="youtube_channel"
                value={formData?.youtube_channel || ""}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalTab;