// import React, { useEffect } from 'react'

// const AddSubjectModal = ({ show, onClose }) => {

//     useEffect(() => {
//         if (show) {
//             document.body.classList.add('modal-open');
//         } else {
//             document.body.classList.remove('modal-open');
//         }
//         return () => {
//             document.body.classList.remove('modal-open');
//         };
//     }, [show]);

//     if (!show) {
//         return null;
//     }

//     return (
//         <>
//             {/* Backdrop */}
//             <div className="modal-backdrop fade show"></div>

//             <div className="modal fade show" id="addNewSubjectModal" tabindex="-1" aria-hidden="true" style={{ display: "block" }}>
//                 <div className="modal-dialog modal-dialog-centered mx-auto" style={{maxWidth: "680px"}}>
//                     <div className="modal-content popup-modal-container-canvas">

//                         {/* <!-- Out of Box Absolute Floating Close Button --> */}
//                         <button type="button" className="modal-external-floating-close" onClick={onClose}>
//                             <i className="fa-solid fa-xmark"></i>
//                         </button>

//                         {/* <!-- Header Block Area --> */}
//                         <div className="popup-header-row-flex">
//                             <div className="popup-avatar-icon-square">
//                                 <i className="fa-regular fa-file-lines"></i>
//                             </div>
//                             <h3 className="popup-header-title-text">Add New Subject</h3>
//                         </div>

//                         {/* <!-- Fields Inputs Configured Verbatim to add-new-subject-popup.png --> */}
//                         <form>
//                             <div className="mb-4">
//                                 <label className="preference-field-label">Subject Name</label>
//                                 <input type="text" className="custom-select-input-node" placeholder="e.g., Subject Name" />
//                             </div>

//                             <div className="mb-4">
//                                 <label className="preference-field-label">Level</label>
//                                 <div className="select-chevron-wrapper">
//                                     <select className="custom-select-input-node" style={{color: "#98A2B3"}}>
//                                         <option selected disabled>Select Level</option>
//                                         <option>Beginner</option>
//                                         <option>Intermediate</option>
//                                         <option>Advanced</option>
//                                     </select>
//                                     <i className="fa-solid fa-caret-down"></i>
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label className="preference-field-label">Year of Experience</label>
//                                 <div className="select-chevron-wrapper">
//                                     <select className="custom-select-input-node" style={{color: "#98A2B3"}}>
//                                         <option selected disabled>5</option>
//                                         <option>1</option>
//                                         <option>2</option>
//                                         <option>3</option>
//                                         <option>4</option>
//                                         <option>6+</option>
//                                     </select>
//                                     <i className="fa-solid fa-caret-down"></i>
//                                 </div>
//                             </div>

//                             {/* <!-- Footer Functional Anchors --> */}
//                             <div className="popup-footer-action-row">
//                                 <button type="button" className="btn-popup-anchor-cancel" onClick={onClose}>Cancel</button>
//                                 <button type="submit" className="btn-popup-submit-blue">Add Subject</button>
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default AddSubjectModal





import React from 'react'

const AddSubjectModal = () => {

    return (

        <div class="modal fade" id="addNewSubjectModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered mx-auto" style={{maxWidth: "680px"}}>
                <div class="modal-content popup-modal-container-canvas">

                    {/* <!-- Out of Box Absolute Floating Close Button --> */}
                    <button type="button" class="modal-external-floating-close" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                    {/* <!-- Header Block Area --> */}
                    <div className="popup-header-row-flex">
                        <div className="popup-avatar-icon-square">
                            <i className="fa-regular fa-file-lines"></i>
                        </div>
                        <h3 className="popup-header-title-text">Add New Subject</h3>
                    </div>

                    {/* <!-- Fields Inputs Configured Verbatim to add-new-subject-popup.png --> */}
                    <form>
                        <div className="mb-4">
                            <label className="preference-field-label">Subject Name</label>
                            <input type="text" className="custom-select-input-node" placeholder="e.g., Subject Name" />
                        </div>

                        <div className="mb-4">
                            <label className="preference-field-label">Level</label>
                            <div className="select-chevron-wrapper">
                                <select className="custom-select-input-node" style={{ color: "#98A2B3" }}>
                                    <option selected disabled>Select Level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="preference-field-label">Year of Experience</label>
                            <div className="select-chevron-wrapper">
                                <select className="custom-select-input-node" style={{ color: "#98A2B3" }}>
                                    <option selected disabled>5</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>6+</option>
                                </select>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        </div>

                        {/* <!-- Footer Functional Anchors --> */}
                        <div className="popup-footer-action-row">
                            <button type="button" class="btn-popup-anchor-cancel" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn-popup-submit-blue">Add Subject</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default AddSubjectModal











