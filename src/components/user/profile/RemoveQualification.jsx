// import React from "react";

// const RemoveQualification = () => {
//   return (
//     <>
//       <div
//         className="modal fade"
//         id="removeQualificationModal"
//         tabIndex={-1}
//         aria-hidden="true"
//       >
//         <div
//           className="modal-dialog modal-dialog-centered mx-auto"
//           style={{ maxWidth: "480px" }}
//         >
//           <div className="modal-content custom-popup-content">
//             <button
//               type="button"
//               className="modal-external-close-btn"
//               data-bs-dismiss="modal"
//             >
//               <i className="fa-solid fa-xmark"></i>
//             </button>

//             <div className="text-center">
//               <div className="popup-icon-warning-box mx-auto mb-3">
//                 <i className="fa-solid fa-xmark"></i>
//               </div>

//               <h4
//                 className="fw-bold mb-2 text-dark"
//                 style={{ fontSize: "18px" }}
//               >
//                 Remove Qualification
//               </h4>

//               <p
//                 className="text-muted mb-4"
//                 style={{
//                   fontSize: "14px",
//                   lineHeight: 1.5,
//                 }}
//               >
//                 Are you sure you want to remove this qualification? This
//                 action cannot be undone.
//               </p>
//             </div>

//             <div className="d-flex gap-3 justify-content-stretch">
//               <button
//                 type="button"
//                 className="btn-popup-secondary w-50"
//                 data-bs-dismiss="modal"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="button"
//                 className="btn-popup-danger w-50"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RemoveQualification;







import React from "react";
import toast from "react-hot-toast";
import useStudentProfile from "../../../hooks/user/useStudentProfile";

const RemoveQualification = ({ qualification }) => {
  const {
    deleteStudentQualificationAsync,
    isDeletingStudentQualification,
    refetchStudentProfile,
  } = useStudentProfile();

  const handleRemove = async () => {
    if (!qualification?.id) {
      toast.error("No qualification selected.");
      return;
    }

    const formData = new FormData();
    formData.append("qualification_id", qualification.id);

    try {
      const response = await deleteStudentQualificationAsync(formData);

      if (response?.success === false) {
        toast.error(response.message || "Unable to remove qualification.");
        return;
      }

      // Close the modal after successful deletion.

      // const modalElement = document.getElementById(
      //   "removeQualificationModal"
      // );

      // if (modalElement && window.bootstrap?.Modal) {
      //   const modalInstance =
      //     window.bootstrap.Modal.getInstance(modalElement);

      //   if (modalInstance) {
      //     modalInstance.hide();
      //   }
      // }


      const modalElement = document.getElementById(
        "removeQualificationModal"
      );
      
      if (modalElement && window.bootstrap?.Modal) {
        const modalInstance =
          window.bootstrap.Modal.getOrCreateInstance(modalElement);
      
        modalElement.addEventListener(
          "hidden.bs.modal",
          () => {
            document
              .querySelectorAll(".modal-backdrop")
              .forEach((backdrop) => backdrop.remove());
      
            document.body.classList.remove("modal-open");
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("padding-right");
          },
          { once: true }
        );
      
        modalInstance.hide();
      }

      // Refresh profile data
      await refetchStudentProfile();

      toast.success(
        response?.message || "Qualification removed successfully."
      );
      // Refresh the profile so the deleted qualification disappears.
      // await refetchStudentProfile();

      // toast.success(
      //   response?.message || "Qualification removed successfully."
      // );
    } catch (error) {
      console.error("Delete qualification error:", error);

      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Unable to remove qualification."
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="removeQualificationModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered mx-auto"
        style={{ maxWidth: "480px" }}
      >
        <div className="modal-content custom-popup-content">
          <button
            type="button"
            className="modal-external-close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
            disabled={isDeletingStudentQualification}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="text-center">
            <div className="popup-icon-warning-box mx-auto mb-3">
              <i className="fa-solid fa-xmark"></i>
            </div>

            <h4
              className="fw-bold mb-2 text-dark"
              style={{ fontSize: "18px" }}
            >
              Remove Qualification
            </h4>

            <p
              className="text-muted mb-4"
              style={{ fontSize: "14px", lineHeight: 1.5 }}
            >
              This qualification will be permanently removed from your profile.
            </p>
          </div>

          <div className="d-flex gap-3 justify-content-stretch">
            <button
              type="button"
              className="btn-popup-secondary w-50"
              data-bs-dismiss="modal"
              disabled={isDeletingStudentQualification}
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn-popup-danger w-50"
              onClick={handleRemove}
              disabled={isDeletingStudentQualification}
            >
              {isDeletingStudentQualification ? "Removing..." : "Remove"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveQualification;