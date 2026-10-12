// import React, { useEffect } from 'react'

// const AddQualification = ({ show, onClose }) => {

//       useEffect(() => {
//         if (show) {
//           document.body.classList.add('modal-open');
//         } else {
//           document.body.classList.remove('modal-open');
//         }
//         return () => {
//           document.body.classList.remove('modal-open');
//         };
//       }, [show]);

//     if (!show) {
//         return null;
//     }
//     return (
//         <>
//             {/* Backdrop */}
//             <div className="modal-backdrop fade show"></div>
//             <div className="modal fade show" style={{ display: "block" }}>
//                 <div className="modal-dialog modal-dialog-centered modal-lg">
//                     <div className="modal-content custom-popup-content">
//                         <button type="button" className="modal-external-close-btn" onClick={onClose}><i
//                             className="fa-solid fa-xmark"></i></button>

//                         <div className="popup-header-block">
//                             <div className="popup-icon-avatar-box"><i className="fa-solid fa-graduation-cap"></i></div>
//                             <div className="popup-header-texts">
//                                 <h4>Add Qualification</h4>
//                                 <p>Add your educational qualifications details here.</p>
//                             </div>
//                         </div>

//                         <form>
//                             <div className="row g-4 mb-4">
//                                 <div className="col-md-6">
//                                     <label className="form-label-header">Degree/Diploma</label>
//                                     <input type="text" className="form-control-custom-field" placeholder="e.g. Master of Science" />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label className="form-label-header">Field of Study</label>
//                                     <input type="text" className="form-control-custom-field" placeholder="e.g. Computer Science" />
//                                 </div>
//                             </div>
//                             <div className="row g-4 mb-4">
//                                 <div className="col-md-6">
//                                     <label className="form-label-header">Institution/University</label>
//                                     <input type="text" className="form-control-custom-field" placeholder="e.g. Stanford University" />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label className="form-label-header">Graduation Year</label>
//                                     <input type="text" className="form-control-custom-field" placeholder="e.g. 2020" />
//                                 </div>
//                             </div>
//                             <div className="popup-footer-actions">
//                                 <button type="button" className="btn-popup-secondary" onClick={onClose}>Cancel</button>
//                                 <button type="submit" className="btn-popup-primary">Add Qualification</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default AddQualification






import React from 'react'

const AddQualification = () => {
    return (
        <div className="modal fade" id="addQualificationModal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content custom-popup-content">
                    <button type="button" className="modal-external-close-btn" data-bs-dismiss="modal"><i
                        className="fa-solid fa-xmark"></i></button>

                    <div className="popup-header-block">
                        <div className="popup-icon-avatar-box"><i className="fa-solid fa-graduation-cap"></i></div>
                        <div className="popup-header-texts">
                            <h4>Add Qualification</h4>
                            <p>Add your educational qualifications details here.</p>
                        </div>
                    </div>

                    <form>
                        <div className="row g-4 mb-4">
                            <div className="col-md-6">
                                <label className="form-label-header">Degree/Diploma</label>
                                <input type="text" className="form-control-custom-field" placeholder="e.g. Master of Science" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label-header">Field of Study</label>
                                <input type="text" className="form-control-custom-field" placeholder="e.g. Computer Science" />
                            </div>
                        </div>
                        <div className="row g-4 mb-4">
                            <div className="col-md-6">
                                <label className="form-label-header">Institution/University</label>
                                <input type="text" className="form-control-custom-field" placeholder="e.g. Stanford University" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label-header">Graduation Year</label>
                                <input type="text" className="form-control-custom-field" placeholder="e.g. 2020" />
                            </div>
                        </div>
                        <div className="popup-footer-actions">
                            <button type="button" className="btn-popup-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn-popup-primary">Add Qualification</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddQualification