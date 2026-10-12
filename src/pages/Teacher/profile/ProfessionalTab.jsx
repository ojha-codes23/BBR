// import React, { useState } from 'react';
// import AddQualification from "../../../components/teacher/AddQualification";
// import RemoveQualification from "../../../components/teacher/RemoveQualification";
// import AddCertificate from "../../../components/teacher/AddCertificate";
// import RemoveCertificate from "../../../components/teacher/RemoveCertificate";

// const ProfessionalTab = () => {
//   const [showAddQualification, setShowAddQualification] = useState(false);
//   const [showRemoveQualification, setShowRemoveQualification] = useState(false);

//   const [showAddCertificate, setShowAddCertificate] = useState(false);
//   const [showRemoveCertificate, setShowRemoveCertificate] = useState(false);

//   return (

//     <>
//       {/* // <div className="show active" id="pane-professional-tags" role="tabpanel"> */}
//       <div>
//         <div className="professional-profile-container">

//           <section className="professional-section-card">
//             <div className="card-headline-title">
//               <i className="fa-solid fa-briefcase"></i> Employment Details
//             </div>

//             <form>
//               <div className="row g-4 mb-4">
//                 <div className="col-md-6">
//                   <label className="form-label-header">Job Title</label>
//                   <input type="text" className="form-control-custom-field"
//                     value="Senior Mathematics Instructor" />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label-header">Institution</label>
//                   <input type="text" className="form-control-custom-field"
//                     value="Stanford University" />
//                 </div>
//               </div>

//               <div className="row g-4 mb-4">
//                 <div className="col-md-6">
//                   <label className="form-label-header">Department</label>
//                   <input type="text" className="form-control-custom-field"
//                     value="Mathematics" />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label-header">Employee ID</label>
//                   <input type="text" className="form-control-custom-field"
//                     value="TH-2024-001" />
//                 </div>
//               </div>

//               <div className="row g-4 mb-4">
//                 <div className="col-md-6">
//                   <label className="form-label-header">Years of Experience</label>
//                   <input type="text" className="form-control-custom-field" value="10" />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label-header">Teaching Level</label>
//                   <div className="select-field-chevron-position">
//                     <select className="form-control-custom-field">
//                       <option value="university" selected>University</option>
//                       <option value="highschool">High School</option>
//                       <option value="primary">Primary</option>
//                     </select>
//                     <i className="fa-solid fa-caret-down"></i>
//                   </div>
//                 </div>
//               </div>

//               <div className="row g-4">
//                 <div className="col-md-6">
//                   <label className="form-label-header">Employment Type</label>
//                   <input type="text" className="form-control-custom-field" value="Full-time" />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label-header">Start Date</label>
//                   <input type="text" className="form-control-custom-field" value="01-08-2024" />
//                 </div>
//               </div>
//             </form>
//           </section>

//           <div className="row g-4">

//             <div className="col-lg-6">
//               <div className="professional-section-card">
//                 <div className="card-headline-title">
//                   <i className="fa-solid fa-graduation-cap"></i> Educational Qualifications
//                 </div>

//                 <div className="record-entry-strip-node">
//                   <div className="record-content-flex-left">
//                     <div className="record-avatar-blue-box"><i
//                       className="fa-solid fa-graduation-cap"></i></div>
//                     <div className="record-meta-texts">
//                       <h3>Ph.D. in Mathematics</h3>
//                       <div className="institution-label">MIT</div>
//                       <p className="extra-details-timeline">Applied Mathematics • 2012</p>
//                     </div>
//                   </div>
//                   <div className="record-action-triggers-group">
//                     <button className="btn-trigger-action-edit"><i
//                       className="fa-regular fa-pen-to-square"></i></button>
//                     {/* <button className="btn-trigger-action-delete" onClick={() => setShowRemoveQualification(true)}><i
//                         className="fa-solid fa-xmark"></i></button> */}
//                     <button class="btn-trigger-action-delete" data-bs-toggle="modal"
//                       data-bs-target="#removeQualificationModal"><i
//                         class="fa-solid fa-xmark"></i></button>
//                   </div>
//                 </div>

//                 <div className="record-entry-strip-node">
//                   <div className="record-content-flex-left">
//                     <div className="record-avatar-blue-box"><i
//                       className="fa-solid fa-graduation-cap"></i></div>
//                     <div className="record-meta-texts">
//                       <h3>M.S. in Computer Science</h3>
//                       <div className="institution-label">Stanford University</div>
//                       <p className="extra-details-timeline">Machine Learning • 2008</p>
//                     </div>
//                   </div>
//                   <div className="record-action-triggers-group">
//                     <button className="btn-trigger-action-edit"><i
//                       className="fa-regular fa-pen-to-square"></i></button>
//                     <button className="btn-trigger-action-delete"><i
//                       className="fa-solid fa-xmark"></i></button>
//                   </div>
//                 </div>

//                 <button className="btn-append-record-block" onClick={() => { setShowAddQualification(true); console.log("first clicked...") }}>
//                   <i className="fa-solid fa-plus"></i> Add Qualification123
//                 </button>
//               </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="professional-section-card">
//                 <div className="card-headline-title">
//                   <i className="fa-solid fa-award"></i> Certifications & Licenses
//                 </div>

//                 <div className="record-entry-strip-node flex-column align-items-stretch">
//                   <div className="d-flex justify-content-between align-items-start">
//                     <div className="record-content-flex-left align-items-start">
//                       <div className="record-avatar-blue-box"><i
//                         className="fa-solid fa-medal"></i></div>
//                       <div className="record-meta-texts">
//                         <h3>Certified Online Instructor</h3>
//                         <div className="institution-label">Online Learning Consortium
//                         </div>
//                         <p className="extra-details-timeline">Credential ID:
//                           OLC-2022-4567</p>
//                       </div>
//                     </div>
//                     <div className="record-action-triggers-group">
//                       <button className="btn-trigger-action-edit"><i
//                         className="fa-regular fa-pen-to-square"></i></button>
//                       <button className="btn-trigger-action-delete"><i
//                         className="fa-solid fa-xmark"></i></button>
//                     </div>
//                   </div>
//                   <div className="cert-extended-meta-grid ps-5">
//                     <div>Issued: 03-09-2018</div>
//                     <div>Expires: 03-09-2026</div>
//                   </div>
//                 </div>

//                 <div className="record-entry-strip-node flex-column align-items-stretch">
//                   <div className="d-flex justify-content-between align-items-start">
//                     <div className="record-content-flex-left align-items-start">
//                       <div className="record-avatar-blue-box"><i
//                         className="fa-solid fa-medal"></i></div>
//                       <div className="record-meta-texts">
//                         <h3>Google Certified Educator Level 2</h3>
//                         <div className="institution-label">Google</div>
//                         <p className="extra-details-timeline">Credential ID:
//                           GCE2-2021-12345</p>
//                       </div>
//                     </div>
//                     <div className="record-action-triggers-group">
//                       <button className="btn-trigger-action-edit"><i
//                         className="fa-regular fa-pen-to-square"></i></button>
//                       <button className="btn-trigger-action-delete" onClick={() => setShowRemoveCertificate(true)}><i
//                         className="fa-solid fa-xmark"></i></button>
//                     </div>
//                   </div>
//                   <div className="cert-extended-meta-grid ps-5">
//                     <div>Issued: 03-09-2018</div>
//                     <div>Expires: 03-09-2026</div>
//                   </div>
//                 </div>

//                 <button className="btn-append-record-block" onClick={() => setShowAddCertificate(true)}>
//                   <i className="fa-solid fa-plus"></i> Add Certification
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* {showAddQualification && ( */}
//         <AddQualification show={showAddQualification}
//           onClose={() => setShowAddQualification(false)}
//         />
//       {/* )} */}


//       {/* <RemoveQualification /> */}

//       {/* {showRemoveQualification && ( */}
//         <RemoveQualification show={showRemoveQualification}
//           onClose={() => setShowRemoveQualification(false)}
//         />
//       {/* )} */}

//       {/* {showAddCertificate && ( */}
//         <AddCertificate show={showAddCertificate}
//           onClose={() => setShowAddCertificate(false)}
//         />
//       {/* )} */}

//       {/* {showRemoveCertificate && ( */}
//         <RemoveCertificate show={showRemoveCertificate}
//           onClose={() => setShowRemoveCertificate(false)}
//         />
//       {/* )} */}

//     </>
//   )
// }

// export default ProfessionalTab





import React from 'react'
import AddQualification from '../../../components/teacher/AddQualification'
import RemoveCertificate from '../../../components/teacher/RemoveCertificate'
import AddCertificate from '../../../components/teacher/AddCertificate'
import RemoveQualification from '../../../components/teacher/RemoveQualification'

const ProfessionalTab = () => {
  return (
    <>
    <div>
      <div className="professional-profile-container">

        <section className="professional-section-card">
          <div className="card-headline-title">
            <i className="fa-solid fa-briefcase"></i> Employment Details
          </div>

          <form>
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="form-label-header">Job Title</label>
                <input type="text" className="form-control-custom-field"
                  value="Senior Mathematics Instructor" />
              </div>
              <div className="col-md-6">
                <label className="form-label-header">Institution</label>
                <input type="text" className="form-control-custom-field"
                  value="Stanford University" />
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="form-label-header">Department</label>
                <input type="text" className="form-control-custom-field"
                  value="Mathematics" />
              </div>
              <div className="col-md-6">
                <label className="form-label-header">Employee ID</label>
                <input type="text" className="form-control-custom-field"
                  value="TH-2024-001" />
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="form-label-header">Years of Experience</label>
                <input type="text" className="form-control-custom-field" value="10" />
              </div>
              <div className="col-md-6">
                <label className="form-label-header">Teaching Level</label>
                <div className="select-field-chevron-position">
                  <select className="form-control-custom-field">
                    <option value="university" selected>University</option>
                    <option value="highschool">High School</option>
                    <option value="primary">Primary</option>
                  </select>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label-header">Employment Type</label>
                <input type="text" className="form-control-custom-field" value="Full-time" />
              </div>
              <div className="col-md-6">
                <label className="form-label-header">Start Date</label>
                <input type="text" className="form-control-custom-field" value="01-08-2024" />
              </div>
            </div>
          </form>
        </section>

        <div className="row g-4">

          <div className="col-lg-6">
            <div className="professional-section-card">
              <div className="card-headline-title">
                <i className="fa-solid fa-graduation-cap"></i> Educational Qualifications
              </div>

              <div className="record-entry-strip-node">
                <div className="record-content-flex-left">
                  <div className="record-avatar-blue-box"><i
                    className="fa-solid fa-graduation-cap"></i></div>
                  <div className="record-meta-texts">
                    <h3>Ph.D. in Mathematics</h3>
                    <div className="institution-label">MIT</div>
                    <p className="extra-details-timeline">Applied Mathematics • 2012</p>
                  </div>
                </div>
                <div className="record-action-triggers-group">
                  <button className="btn-trigger-action-edit"><i
                    className="fa-regular fa-pen-to-square"></i></button>
                  <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                    data-bs-target="#removeQualificationModal"><i
                      className="fa-solid fa-xmark"></i></button>
                </div>
              </div>

              <div className="record-entry-strip-node">
                <div className="record-content-flex-left">
                  <div className="record-avatar-blue-box"><i
                    className="fa-solid fa-graduation-cap"></i></div>
                  <div className="record-meta-texts">
                    <h3>M.S. in Computer Science</h3>
                    <div className="institution-label">Stanford University</div>
                    <p className="extra-details-timeline">Machine Learning • 2008</p>
                  </div>
                </div>
                <div className="record-action-triggers-group">
                  <button className="btn-trigger-action-edit"><i
                    className="fa-regular fa-pen-to-square"></i></button>
                  <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                    data-bs-target="#removeQualificationModal"><i
                      className="fa-solid fa-xmark"></i></button>
                </div>
              </div>

              <button className="btn-append-record-block" data-bs-toggle="modal"
                data-bs-target="#addQualificationModal">
                <i className="fa-solid fa-plus"></i> Add Qualification
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="professional-section-card">
              <div className="card-headline-title">
                <i className="fa-solid fa-award"></i> Certifications & Licenses
              </div>

              <div className="record-entry-strip-node flex-column align-items-stretch">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="record-content-flex-left align-items-start">
                    <div className="record-avatar-blue-box"><i
                      className="fa-solid fa-medal"></i></div>
                    <div className="record-meta-texts">
                      <h3>Certified Online Instructor</h3>
                      <div className="institution-label">Online Learning Consortium
                      </div>
                      <p className="extra-details-timeline">Credential ID:
                        OLC-2022-4567</p>
                    </div>
                  </div>
                  <div className="record-action-triggers-group">
                    <button className="btn-trigger-action-edit"><i
                      className="fa-regular fa-pen-to-square"></i></button>
                    <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                      data-bs-target="#removeCertificationModal"><i
                        className="fa-solid fa-xmark"></i></button>
                  </div>
                </div>
                <div className="cert-extended-meta-grid ps-5">
                  <div>Issued: 03-09-2018</div>
                  <div>Expires: 03-09-2026</div>
                </div>
              </div>

              <div className="record-entry-strip-node flex-column align-items-stretch">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="record-content-flex-left align-items-start">
                    <div className="record-avatar-blue-box"><i
                      className="fa-solid fa-medal"></i></div>
                    <div className="record-meta-texts">
                      <h3>Google Certified Educator Level 2</h3>
                      <div className="institution-label">Google</div>
                      <p className="extra-details-timeline">Credential ID:
                        GCE2-2021-12345</p>
                    </div>
                  </div>
                  <div className="record-action-triggers-group">
                    <button className="btn-trigger-action-edit"><i
                      className="fa-regular fa-pen-to-square"></i></button>
                    <button className="btn-trigger-action-delete" data-bs-toggle="modal"
                      data-bs-target="#removeCertificationModal"><i
                        className="fa-solid fa-xmark"></i></button>
                  </div>
                </div>
                <div className="cert-extended-meta-grid ps-5">
                  <div>Issued: 03-09-2018</div>
                  <div>Expires: 03-09-2026</div>
                </div>
              </div>

              <button className="btn-append-record-block" data-bs-toggle="modal"
                data-bs-target="#addCertificationModal">
                <i className="fa-solid fa-plus"></i> Add Certification
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <AddQualification />
    <RemoveCertificate />
    <AddCertificate />
    <RemoveQualification />

    </>

  )
}

export default ProfessionalTab