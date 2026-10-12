// import React, { useEffect } from 'react'
// import { BsDisplay } from 'react-icons/bs';

// const RemoveQualification = ({show, onClose}) => {

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
//      {/* Backdrop */}
//      <div className="modal-backdrop fade show"></div>

//     <div className="modal fade show" id="removeQualificationModal" tabindex="-1" aria-hidden="true" style={{display: "block"}}>
//     <div className="modal-dialog modal-dialog-centered mx-auto" style={{maxWidth: "480px"}}>
//         <div className="modal-content custom-popup-content">
//             <button type="button" className="modal-external-close-btn" onClick={onClose}><i
//                     className="fa-solid fa-xmark"></i></button>

//             <div className="text-center">
//                 <div className="popup-icon-warning-box mx-auto mb-3"><i className="fa-solid fa-triangle-exclamation"></i>
//                 </div>
//                 <h4 className="fw-bold mb-2 text-dark" style={{fontSize: "18px"}}>Remove Qualification</h4>
//                 <p className="text-muted mb-4" style={{fontSize: "14px", lineHeight: "1.5"}}>Are you sure you want to
//                     remove this qualification? This action cannot be undone.</p>
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

// export default RemoveQualification









import React from 'react'

const RemoveQualification = () => {
  return (
    <div className="modal fade" id="removeQualificationModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered mx-auto" style={{maxWidth: "480px"}}>
        <div className="modal-content custom-popup-content">
            <button type="button" className="modal-external-close-btn" data-bs-dismiss="modal"><i
                    className="fa-solid fa-xmark"></i></button>

            <div className="text-center">
                <div className="popup-icon-warning-box mx-auto mb-3"><i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <h4 className="fw-bold mb-2 text-dark" style={{fontSize: "18px"}}>Remove Qualification</h4>
                <p className="text-muted mb-4" style={{fontSize: '14px', lineHeight: "1.5"}}>Are you sure you want to
                    remove this qualification? This action cannot be undone.</p>
            </div>

            <div className="d-flex gap-3 justify-content-stretch">
                <button type="button" className="btn-popup-secondary w-50" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn-popup-danger w-50">Remove</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default RemoveQualification