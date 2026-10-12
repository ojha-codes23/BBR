// import React, { useEffect } from 'react'

// const RemoveCertificate = ({show, onClose}) => {

//     useEffect(() => {
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

//   return (
//   <>

//   <div className="modal-backdrop fade show"></div>
  
//     <div className="modal fade show" id="removeCertificationModal" tabindex="-1" aria-hidden="true" style={{display: "block"}} >
//     <div className="modal-dialog modal-dialog-centered mx-auto" style={{maxWidth: "480px"}}>
//         <div className="modal-content custom-popup-content">
//             <button type="button" className="modal-external-close-btn" onClick={onClose}><i
//                     className="fa-solid fa-xmark"></i></button>

//             <div className="text-center">
//                 <div className="popup-icon-warning-box mx-auto mb-3"><i className="fa-solid fa-triangle-exclamation"></i>
//                 </div>
//                 <h4 className="fw-bold mb-2 text-dark" style={{fontSize: "18px"}}>Remove Certification</h4>
//                 <p className="text-muted mb-4" style={{fontSize: "14px", lineHeight: "1.5"}}>Are you sure you want to
//                     remove this certification? This action cannot be undone.</p>
//             </div>

//             <div className="d-flex gap-3 justify-content-stretch">
//                 <button type="button" className="btn-popup-secondary w-50" onClick={onClose}>Cancel</button>
//                 <button type="button" className="btn-popup-danger w-50">Remove</button>
//             </div>
//         </div>
//     </div>
// </div>

// </>
//   )
// }

// export default RemoveCertificate








import React from 'react'

const RemoveCertificate = () => {
  return (
    <div class="modal fade" id="removeCertificationModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mx-auto" style={{maxWidth: "480px"}}>
            <div class="modal-content custom-popup-content">
                <button type="button" class="modal-external-close-btn" data-bs-dismiss="modal"><i
                        class="fa-solid fa-xmark"></i></button>

                <div class="text-center">
                    <div class="popup-icon-warning-box mx-auto mb-3"><i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h4 class="fw-bold mb-2 text-dark" style={{fontSize: "18px"}}>Remove Certification</h4>
                    <p class="text-muted mb-4" style={{fontSize: "14px", lineHeight: "1.5"}}>Are you sure you want to
                        remove this certification? This action cannot be undone.</p>
                </div>

                <div class="d-flex gap-3 justify-content-stretch">
                    <button type="button" class="btn-popup-secondary w-50" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn-popup-danger w-50">Remove</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RemoveCertificate