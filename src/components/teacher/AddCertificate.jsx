// import React, { useEffect } from 'react'

// const AddCertificate = ({show, onClose}) => {

//           useEffect(() => {
//             if (show) {
//               document.body.classList.add('modal-open');
//             } else {
//               document.body.classList.remove('modal-open');
//             }
//             return () => {
//               document.body.classList.remove('modal-open');
//             };
//           }, [show]);
    
//         if (!show) {
//             return null;
//         }

//   return (
//     <>
//     <div className="modal-backdrop fade show"></div>
    
//     <div className="modal fade show" id="addCertificationModal" tabindex="-1" aria-hidden="true" style={{display: "block"}}>
//     <div className="modal-dialog modal-dialog-centered modal-lg">
//         <div className="modal-content custom-popup-content">
//             <button type="button" className="modal-external-close-btn" onClick={onClose}><i
//                     className="fa-solid fa-xmark"></i></button>

//             <div className="popup-header-block">
//                 <div className="popup-icon-avatar-box"><i className="fa-solid fa-award"></i></div>
//                 <div className="popup-header-texts">
//                     <h4>Add Certification or License</h4>
//                     <p>Add your dynamic professional certifications details here.</p>
//                 </div>
//             </div>

//             <form>
//                 <div className="row g-4 mb-4">
//                     <div className="col-md-6">
//                         <label className="form-label-header">Certification Name</label>
//                         <input type="text" className="form-control-custom-field"
//                             placeholder="e.g. Google Certified Educator" />
//                     </div>
//                     <div className="col-md-6">
//                         <label className="form-label-header">Issuing Organization</label>
//                         <input type="text" className="form-control-custom-field" placeholder="e.g. Google" />
//                     </div>
//                 </div>
//                 <div className="row g-4 mb-4">
//                     <div className="col-md-6">
//                         <label className="form-label-header">Credential ID</label>
//                         <input type="text" className="form-control-custom-field" placeholder="e.g. GCE-12345" />
//                     </div>
//                     <div className="col-md-6">
//                         <label className="form-label-header">Issue Date</label>
//                         <input type="text" className="form-control-custom-field" placeholder="DD-MM-YYYY" />
//                     </div>
//                 </div>
//                 <div className="row mb-4">
//                     <div className="col-md-6">
//                         <label className="form-label-header">Expiration Date</label>
//                         <input type="text" className="form-control-custom-field" placeholder="DD-MM-YYYY" />
//                     </div>
//                 </div>
//                 <div className="popup-footer-actions">
//                     <button type="button" className="btn-popup-secondary" onClick={onClose}>Cancel</button>
//                     <button type="submit" className="btn-popup-primary">Add Certification</button>
//                 </div>
//             </form>
//         </div>
//     </div>
// </div>

// </>
//   )
// }

// export default AddCertificate









import React from 'react'

const AddCertificate = () => {
  return (
    <div className="modal fade" id="addCertificationModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content custom-popup-content">
            <button type="button" className="modal-external-close-btn" data-bs-dismiss="modal"><i
                    className="fa-solid fa-xmark"></i></button>

            <div className="popup-header-block">
                <div className="popup-icon-avatar-box"><i className="fa-solid fa-award"></i></div>
                <div className="popup-header-texts">
                    <h4>Add Certification or License</h4>
                    <p>Add your dynamic professional certifications details here.</p>
                </div>
            </div>

            <form>
                <div className="row g-4 mb-4">
                    <div className="col-md-6">
                        <label className="form-label-header">Certification Name</label>
                        <input type="text" className="form-control-custom-field"
                            placeholder="e.g. Google Certified Educator" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label-header">Issuing Organization</label>
                        <input type="text" className="form-control-custom-field" placeholder="e.g. Google" />
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-md-6">
                        <label className="form-label-header">Credential ID</label>
                        <input type="text" className="form-control-custom-field" placeholder="e.g. GCE-12345" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label-header">Issue Date</label>
                        <input type="text" className="form-control-custom-field" placeholder="DD-MM-YYYY" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label-header">Expiration Date</label>
                        <input type="text" className="form-control-custom-field" placeholder="DD-MM-YYYY" />
                    </div>
                </div>
                <div className="popup-footer-actions">
                    <button type="button" className="btn-popup-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn-popup-primary">Add Certification</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddCertificate