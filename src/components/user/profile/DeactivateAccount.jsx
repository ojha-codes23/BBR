// import React from 'react'

// const DeactivateAccount = () => {
//     return (
//         <>
//             <div className="modal fade custom-target-modal" id="deactivateAccountModal" tabindex="-1" role="dialog" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered" role="document" style={{
//                     maxWidth: "620px",
//                 }}>
//                     <div className="modal-content" style={{ borderRadius: "24px", padding: "36px 40px", border: "none", position: "relative", }}>

//                         <a href="#" className="close gl-modal-dismiss-anchor" aria-label="Close">
//                             <span aria-hidden="true">
//                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2.5">
//                                     <line x1="18" y1="6" x2="6" y2="18"></line>
//                                     <line x1="6" y1="6" x2="18" y2="18"></line>
//                                 </svg>
//                             </span>
//                         </a>

//                         <div className="modal-body p-0 text-center">

//                             <div className="gl-alert-icon-avatar-badge mb-3">
//                                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                                     <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
//                                     <line x1="12" y1="9" x2="12" y2="13"></line>
//                                     <line x1="12" y1="17" x2="12.01" y2="17"></line>
//                                 </svg>
//                             </div>

//                             <h2 className="gl-modal-title-bold mb-2">Deactivate Account</h2>
//                             <p className="gl-modal-description-lead mb-4">
//                                 You’re about to permanently deactivate your account.<br />All your data, requests, and history will be deleted.
//                             </p>

//                             <div className="gl-critical-warning-banner mb-4 text-left">
//                                 <p className="gl-warning-banner-text">
//                                     ⚠️ This action is permanent and cannot be undone. To use this platform again, you will need to sign up as a new user.
//                                 </p>
//                             </div>

//                             <div className="gl-reasons-form-matrix text-left mb-4">
//                                 <h3 className="gl-checklist-group-title mb-3">Select reason(s) <span className="text-danger">*</span></h3>

//                                 <div className="gl-checkbox-list-stack">
//                                     <label className="gl-custom-checkbox-row">
//                                         <input type="checkbox" className="gl-native-checkbox" />
//                                         <span className="gl-checkbox-facade"></span>
//                                         <span className="gl-checkbox-label-text">Unclear scope or objectives</span>
//                                     </label>
//                                     <label className="gl-custom-checkbox-row">
//                                         <input type="checkbox" className="gl-native-checkbox" />
//                                         <span className="gl-checkbox-facade"></span>
//                                         <span className="gl-checkbox-label-text">Hours requested seem incorrect</span>
//                                     </label>
//                                     <label className="gl-custom-checkbox-row">
//                                         <input type="checkbox" className="gl-native-checkbox" />
//                                         <span className="gl-checkbox-facade"></span>
//                                         <span className="gl-checkbox-label-text">Policy or compliance concern</span>
//                                     </label>
//                                     <label className="gl-custom-checkbox-row">
//                                         <input type="checkbox" className="gl-native-checkbox" />
//                                         <span className="gl-checkbox-facade"></span>
//                                         <span className="gl-checkbox-label-text">Missing documentation</span>
//                                     </label>
//                                     <label className="gl-custom-checkbox-row">
//                                         <input type="checkbox" className="gl-native-checkbox" />
//                                         <span className="gl-checkbox-facade"></span>
//                                         <span className="gl-checkbox-label-text">Others</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className="form-group mb-4 text-left">
//                                 <textarea className="form-control gl-feedback-textarea-field" rows="4" placeholder="Additional feedback (optional)"></textarea>
//                             </div>

//                             <div className="gl-acknowledgement-row-wrapper mb-4 text-left">
//                                 <label className="gl-custom-checkbox-row">
//                                     <input type="checkbox" className="gl-native-checkbox" required />
//                                     <span className="gl-checkbox-facade"></span>
//                                     <span className="gl-checkbox-label-text user-select-none font-weight-medium text-dark-slate">
//                                         I understand that my account and data will be permanently removed.
//                                     </span>
//                                 </label>
//                             </div>

//                             <div className="gl-modal-action-footer d-flex align-items-center justify-content-end mt-4">
//                                 <a href="#" className="btn gl-form-cancel-link-btn mr-3">Cancel</a>
//                                 <button
//                                     type="submit"
//                                     className="gl-destructive-action-pill-btn"
//                                 >
//                                     <svg
//                                         width="16"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="2.5"
//                                     >
//                                         <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
//                                     </svg>

//                                     Deactivate Account
//                                 </button>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default DeactivateAccount









import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { KEYS } from "../../../config/constant";
import { logout as logoutAction } from "../../../store/slices/userSlice";
import useStudentProfile from "../../../hooks/user/useStudentProfile";

const DeactivateAccount = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        getDeactivateReasonsAsync,
        isLoadingDeactivateReasons,
        deactivateStudentAccountAsync,
        isDeactivatingStudentAccount,
    } = useStudentProfile();

    const [reasons, setReasons] = useState([]);
    const [selectedReasonIds, setSelectedReasonIds] = useState([]);
    const [additionalReason, setAdditionalReason] = useState("");
    const [acknowledged, setAcknowledged] = useState(false);

    // Fetch reasons whenever the modal opens.
    useEffect(() => {
        const modalElement = document.getElementById(
            "deactivateAccountModal"
        );

        if (!modalElement) return;

        const handleModalOpen = async () => {
            try {
                const response = await getDeactivateReasonsAsync();

                if (response?.success) {
                    setReasons(response.data || []);
                } else {
                    toast.error(
                        response?.message || "Unable to fetch reasons."
                    );
                }
            } catch (error) {
                console.error("Fetch deactivation reasons error:", error);

                toast.error(
                    error?.response?.data?.message ||
                    error?.message ||
                    "Unable to load deactivation reasons."
                );
            }
        };

        modalElement.addEventListener("show.bs.modal", handleModalOpen);

        return () => {
            modalElement.removeEventListener(
                "show.bs.modal",
                handleModalOpen
            );
        };
    }, [getDeactivateReasonsAsync]);

    useEffect(() => {
        const modalElement = document.getElementById(
            "deactivateAccountModal"
        );

        if (!modalElement) return;

        const handleModalHidden = () => {
            // Remove leftover modal backdrop, if any.
            document
                .querySelectorAll(".modal-backdrop")
                .forEach((backdrop) => backdrop.remove());

            // Restore scrolling if Bootstrap left it disabled.
            document.body.classList.remove("modal-open");
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("padding-right");
        };

        modalElement.addEventListener(
            "hidden.bs.modal",
            handleModalHidden
        );

        return () => {
            modalElement.removeEventListener(
                "hidden.bs.modal",
                handleModalHidden
            );
        };
    }, []);

    // Select or deselect a deactivation reason.
    const handleReasonChange = (reasonId) => {
        setSelectedReasonIds((previous) =>
            previous.includes(reasonId)
                ? previous.filter((id) => id !== reasonId)
                : [...previous, reasonId]
        );
    };

    // Submit account deactivation request.
    const handleDeactivate = async (event) => {
        event.preventDefault();

        if (selectedReasonIds.length === 0) {
            toast.error("Please select at least one reason.");
            return;
        }

        if (!acknowledged) {
            toast.error(
                "Please acknowledge that your account will be removed."
            );
            return;
        }

        const payload = new FormData();

        payload.append(
            "deactive_reasons_id",
            selectedReasonIds.join(",")
        );

        payload.append(
            "deactive_reason",
            additionalReason.trim()
        );

        // try {
        //     const response = await deactivateStudentAccountAsync(payload);

        //     if (response?.success === false) {
        //         toast.error(
        //             response.message || "Unable to deactivate account."
        //         );
        //         return;
        //     }

        //     toast.success(
        //         response?.message || "Account deactivated successfully."
        //     );

        //     // Close the modal after successful deactivation.
        //     const modalElement = document.getElementById(
        //         "deactivateAccountModal"
        //     );

        //     if (modalElement && window.bootstrap?.Modal) {
        //         const modalInstance =
        //             window.bootstrap.Modal.getInstance(modalElement);

        //         modalInstance?.hide();
        //     }

        //     // Reset the form.
        //     setSelectedReasonIds([]);
        //     setAdditionalReason("");
        //     setAcknowledged(false);

        //     // If your API deactivates the current session, handle logout
        //     // using your existing authentication flow.
        // } catch (error) {
        //     console.error("Deactivate account error:", error);

        //     toast.error(
        //         error?.response?.data?.message ||
        //         error?.message ||
        //         "Unable to deactivate account. Please try again."
        //     );
        // }
        try {
            const response = await deactivateStudentAccountAsync(payload);

            if (response?.success === false) {
                toast.error(
                    response.message || "Unable to deactivate account."
                );
                return;
            }

            toast.success(
                response?.message || "Account deactivated successfully."
            );

            // Reset the form
            setSelectedReasonIds([]);
            setAdditionalReason("");
            setAcknowledged(false);

            // Close the modal and remove its backdrop
            const modalElement = document.getElementById(
                "deactivateAccountModal"
            );

            if (modalElement && window.bootstrap?.Modal) {
                const modalInstance =
                    window.bootstrap.Modal.getInstance(modalElement);

                if (modalInstance) {
                    modalInstance.hide();
                }
            }

            // 3. Clear Authentication Data instantly
            localStorage.removeItem(KEYS.USER_INFO);
            sessionStorage.removeItem(KEYS.USER_INFO);
            localStorage.setItem("USER_TYPE", "user"); // Reset role

            // 4. Clear Redux State
            dispatch(logoutAction());

            // 5. Redirect to login page after 5 mili seconds (so they see the toast)
            setTimeout(() => {
                navigate("/student", { replace: true });
            }, 500);

        } catch (error) {
            console.error("Deactivate account error:", error);

            toast.error(
                error?.response?.data?.message ||
                error?.message ||
                "Unable to deactivate account. Please try again."
            );
        }
    };

    // The button is enabled only after a reason is selected
    // and the acknowledgement checkbox is checked.
    const isDeactivateDisabled =
        isDeactivatingStudentAccount ||
        isLoadingDeactivateReasons ||
        reasons.length === 0 ||
        selectedReasonIds.length === 0 ||
        !acknowledged;

    return (
        <div
            className="modal fade"
            id="deactivateAccountModal"
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered deactivate-modal-dialog">
                <div className="modal-content deactivate-modal-content">

                    {/* Close button */}
                    <button
                        type="button"
                        className="deactivate-modal-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        disabled={isDeactivatingStudentAccount}
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <form onSubmit={handleDeactivate}>
                        <div className="modal-body deactivate-modal-body">

                            {/* Centered header */}
                            <div className="deactivate-modal-header">
                                <div className="deactivate-warning-icon">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ff4545"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                </div>

                                <h2 className="gl-modal-title-bold">
                                    Deactivate Account
                                </h2>

                                <p className="gl-modal-description-lead">
                                    You’re about to permanently deactivate your account.
                                    <br />
                                    All your data, requests, and history will be deleted.
                                </p>
                            </div>


                            {/* Warning appears only after selecting a reason */}
                            {selectedReasonIds.length > 0 && (
                                <div className="gl-critical-warning-banner mb-4 text-left">
                                    <p className="gl-warning-banner-text">
                                        ⚠️ This action is permanent and cannot be undone.
                                        To use this platform again, you will need to sign
                                        up as a new user.
                                    </p>
                                </div>
                            )}

                            {/* Deactivation reasons */}
                            <div className="gl-reasons-form-matrix text-left mb-4">
                                <h3 className="gl-checklist-group-title mb-3">
                                    Select reason(s){" "}
                                    <span className="text-danger">*</span>
                                </h3>

                                <div className="gl-checkbox-list-stack">
                                    {isLoadingDeactivateReasons ? (
                                        <p>Loading reasons...</p>
                                    ) : reasons.length > 0 ? (
                                        reasons.map((reason) => (
                                            <label
                                                className="gl-custom-checkbox-row"
                                                key={reason.id}
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="gl-native-checkbox"
                                                    checked={selectedReasonIds.includes(
                                                        reason.id
                                                    )}
                                                    onChange={() =>
                                                        handleReasonChange(reason.id)
                                                    }
                                                    disabled={isDeactivatingStudentAccount}
                                                />

                                                <span className="gl-checkbox-facade" />

                                                <span className="gl-checkbox-label-text">
                                                    {reason.name}
                                                </span>
                                            </label>
                                        ))
                                    ) : (
                                        <p>No deactivation reasons available.</p>
                                    )}
                                </div>
                            </div>

                            {/* Optional additional feedback */}
                            <div className="form-group mb-4 text-left">
                                <textarea
                                    className="form-control gl-feedback-textarea-field"
                                    rows={4}
                                    placeholder="Additional feedback (optional)"
                                    value={additionalReason}
                                    onChange={(event) =>
                                        setAdditionalReason(event.target.value)
                                    }
                                    disabled={isDeactivatingStudentAccount}
                                />
                            </div>

                            {/* Mandatory acknowledgement */}
                            <div className="gl-acknowledgement-row-wrapper mb-4 text-left">
                                <label className="gl-custom-checkbox-row">
                                    <input
                                        type="checkbox"
                                        className="gl-native-checkbox"
                                        checked={acknowledged}
                                        onChange={(event) =>
                                            setAcknowledged(event.target.checked)
                                        }
                                        disabled={isDeactivatingStudentAccount}
                                    />

                                    <span className="gl-checkbox-facade" />

                                    <span className="gl-checkbox-label-text user-select-none font-weight-medium text-dark-slate">
                                        I understand that my account and data will be
                                        permanently removed.
                                    </span>
                                </label>
                            </div>

                            {/* Action buttons */}
                            <div className="gl-modal-action-footer d-flex align-items-center justify-content-end mt-4">
                                <button
                                    type="button"
                                    className="btn gl-form-cancel-link-btn mr-3"
                                    data-bs-dismiss="modal"
                                    disabled={isDeactivatingStudentAccount}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="gl-destructive-action-pill-btn"
                                    disabled={isDeactivateDisabled}
                                >
                                    {isDeactivatingStudentAccount
                                        ? "Deactivating..."
                                        : "Deactivate Account"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeactivateAccount;
