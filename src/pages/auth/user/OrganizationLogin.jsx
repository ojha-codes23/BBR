// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import toast from "react-hot-toast";
// import useAuth from '../../../hooks/global/useAuth';
// import { Link } from 'react-router-dom'

// const OrganizationLogin = () => {

//   const navigate = useNavigate();

//   const [organizations, setOrganizations] = useState([]);
//   const [selectedOrganizationId, setSelectedOrganizationId] = useState("");

//   const {
//     getStudentSelectedOrganizationsAsync,
//     isLoadingStudentOrganizations,
//     mapStudentLoggedInOrganizationAsync,
//     isMappingStudentOrganization,
//   } = useAuth();

//   // 1. Fetch organizations when the screen opens
//   useEffect(() => {
//     const fetchOrganizations = async () => {
//       try {
//         const response =
//           await getStudentSelectedOrganizationsAsync({});

//         if (response?.success) {
//           const organizationList = response.data || [];

//           setOrganizations(organizationList);

//           // Select the first organization by default
//           if (organizationList.length > 0) {
//             setSelectedOrganizationId(
//               String(organizationList[0].id)
//             );
//           }
//         } else {
//           toast.error(
//             response?.message || "Unable to load organizations."
//           );
//         }
//       } catch (error) {
//         toast.error(
//           error?.response?.data?.message ||
//           error?.message ||
//           "Unable to load organizations."
//         );
//       }
//     };

//     fetchOrganizations();
//   }, [getStudentSelectedOrganizationsAsync]);

//   // 2. Submit selected organization
//   const handleProceed = async (e) => {
//     e.preventDefault();

//     if (!selectedOrganizationId) {
//       toast.error("Please select an organization.");
//       return;
//     }

//     const payload = new FormData();
//     payload.append("organization_id", selectedOrganizationId);

//     try {
//       const response =
//         await mapStudentLoggedInOrganizationAsync(payload);

//       if (response?.success) {
//         toast.success(
//           response.message || "Organization selected successfully."
//         );

//         navigate("/student/dashboard", { replace: true });
//       } else {
//         toast.error(
//           response?.message || "Unable to select organization."
//         );
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to select organization. Please try again."
//       );
//     }
//   };

//   return (
//     <>
//       <section className="login-page-section">
//         <div className="login-page-wrapper">

//           <div className="login-left-banner">
//             <img className="login-left-banner-img" src="/images/user/login/login-left-img.svg" alt="Group Background Image" />

//             <div className="login-left-banner-overlay">
//               <h1 className="login-overlay-title">Get<br />Everything<br />You Want</h1>
//               <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process, and stick to the plan.</p>
//             </div>
//           </div>

//           <div className="login-right-content">
//             <div className="login-form-container">

//               <div className="login-header-logo">
//                 <img src="/images/user/login/logo.svg" alt="GrantLink NC Logo" />
//               </div>

//               <div className="login-form-card">
//                 <h3 className="login-form-title">Organizations</h3>
//                 <p className="login-form-subtitle">Choose Your Organization to <br />
//                   access your account</p>

//                 <form onSubmit={handleProceed}>



//                   <div className="org-list-card">
//                     <div className="org-scroll-container">


//                       {isLoadingStudentOrganizations ? (
//                         <p>Loading organizations...</p>
//                       ) : organizations.length === 0 ? (
//                         <p>No organizations found.</p>
//                       ) : (
//                         organizations.map((organization) => (
//                           <label
//                             className="org-item-row"
//                             htmlFor={`org-${organization.id}`}
//                             key={organization.id}
//                           >
//                             <p className="org-name-text">
//                               {organization.name}
//                             </p>

//                             <input
//                               className="org-radio-input"
//                               type="radio"
//                               name="selected_org"
//                               id={`org-${organization.id}`}
//                               value={organization.id}
//                               checked={
//                                 selectedOrganizationId ===
//                                 String(organization.id)
//                               }
//                               onChange={() =>
//                                 setSelectedOrganizationId(
//                                   String(organization.id)
//                                 )
//                               }
//                             />
//                           </label>
//                         ))
//                       )}

//                       {/* <label className="org-item-row" for="org2">
//                         <p className="org-name-text">Wayne Community College</p>
//                         <input className="org-radio-input" type="radio" name="selected_org" id="org2" />
//                       </label>

                     
//                       <label className="org-item-row" for="org3">
//                         <p className="org-name-text">Tennessee College of Applied Technology</p>
//                         <input className="org-radio-input" type="radio" name="selected_org" id="org3" />
//                       </label>

                      
//                       <label className="org-item-row" for="org4">
//                         <p className="org-name-text">Universal Technical Institute</p>
//                         <input className="org-radio-input" type="radio" name="selected_org" id="org4" />
//                       </label>

                      
//                       <label className="org-item-row" for="org5">
//                         <p className="org-name-text">Gateway Community College</p>
//                         <input className="org-radio-input" type="radio" name="selected_org" id="org5" />
//                       </label> */}

//                     </div>
//                   </div>
//                   <button type='submit' className="login-submit-btn" 
//                   disabled={
//                     isLoadingStudentOrganizations ||
//                     isMappingStudentOrganization ||
//                     organizations.length === 0
//                   }>
//                     {isMappingStudentOrganization
//                     ? "Proceeding..."
//                     : "Proceed"}
//                     </button>
//                 </form>
//               </div>

//             </div>
//           </div>

//         </div>
//       </section>

//     </>
//   )
// }

// export default OrganizationLogin











import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/global/useAuth";

const OrganizationLogin = () => {
  const navigate = useNavigate();

  const [organizations, setOrganizations] = useState([]);

  const {
    getStudentSelectedOrganizationsAsync,
    isLoadingStudentOrganizations,
    mapStudentLoggedInOrganizationAsync,
    isMappingStudentOrganization,
  } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      organization_id: "",
    },
  });

  const selectedOrganizationId = watch("organization_id");

  // Fetch organizations when the screen opens
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await getStudentSelectedOrganizationsAsync({});

        if (response?.success) {
          const organizationList = response.data || [];

          setOrganizations(organizationList);

          // Select the first organization by default
          if (organizationList.length > 0) {
            setValue("organization_id", String(organizationList[0].id));
          }
        } else {
          toast.error(
            response?.message || "Unable to load organizations."
          );
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Unable to load organizations."
        );
      }
    };

    fetchOrganizations();
  }, [getStudentSelectedOrganizationsAsync, setValue]);

  // Submit selected organization
  const onSubmit = async (data) => {
    const payload = new FormData();
    payload.append("organization_id", data.organization_id);

    try {
      const response = await mapStudentLoggedInOrganizationAsync(payload);

      if (response?.success) {
        toast.success(
          response.message || "Organization selected successfully."
        );

        navigate("/student/dashboard", { replace: true });
      } else {
        toast.error(
          response?.message || "Unable to select organization."
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to select organization. Please try again."
      );
    }
  };

  // Display validation errors using toast
  const onErrors = (validationErrors) => {
    if (validationErrors.organization_id) {
      toast.error(validationErrors.organization_id.message);
    }
  };

  return (
    <>
      <section className="login-page-section">
        <div className="login-page-wrapper">
          <div className="login-left-banner">
            <img
              className="login-left-banner-img"
              src="/images/user/login/login-left-img.svg"
              alt="Group Background Image"
            />

            <div className="login-left-banner-overlay">
              <h1 className="login-overlay-title">
                Get
                <br />
                Everything
                <br />
                You Want
              </h1>

              <p className="login-overlay-desc">
                You can get everything you want if you work hard, trust the
                process, and stick to the plan.
              </p>
            </div>
          </div>

          <div className="login-right-content">
            <div className="login-form-container">
              <div className="login-header-logo">
                <img
                  src="/images/user/login/logo.svg"
                  alt="GrantLink NC Logo"
                />
              </div>

              <div className="login-form-card">
                <h3 className="login-form-title">Organizations</h3>

                <p className="login-form-subtitle">
                  Choose Your Organization to <br />
                  access your account
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit, onErrors)}
                  noValidate
                >
                  <div className="org-list-card">
                    <div className="org-scroll-container">
                      {isLoadingStudentOrganizations ? (
                        <p>Loading organizations...</p>
                      ) : organizations.length === 0 ? (
                        <p>No organizations found.</p>
                      ) : (
                        organizations.map((organization) => (
                          <label
                            className="org-item-row"
                            htmlFor={`org-${organization.id}`}
                            key={organization.id}
                          >
                            <p className="org-name-text">
                              {organization.name}
                            </p>

                            <input
                              className="org-radio-input"
                              type="radio"
                              id={`org-${organization.id}`}
                              value={String(organization.id)}
                              disabled={isMappingStudentOrganization}
                              {...register("organization_id", {
                                required: "Please select an organization.",
                              })}
                              checked={
                                selectedOrganizationId ===
                                String(organization.id)
                              }
                              onChange={() => {
                                setValue(
                                  "organization_id",
                                  String(organization.id),
                                  {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                  }
                                );
                              }}
                            />
                          </label>
                        ))
                      )}
                    </div>
                  </div>

                  {errors.organization_id && (
                    <span className="text-danger small mt-1 d-block">
                      {errors.organization_id.message}
                    </span>
                  )}

                  <button
                    type="submit"
                    className="login-submit-btn"
                    disabled={
                      isLoadingStudentOrganizations ||
                      isMappingStudentOrganization ||
                      organizations.length === 0
                    }
                  >
                    {isMappingStudentOrganization
                      ? "Proceeding..."
                      : "Proceed"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganizationLogin;