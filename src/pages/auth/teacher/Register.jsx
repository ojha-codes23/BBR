import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/global/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const {
    getOrganizationListAsync,
    isLoadingOrganizations,
    isRegistering,
    registerAsync,
  } = useAuth();

  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      selectedOrgIds: [],
      selectedAccessCodes: [],
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    mode: "onTouched",
  });

  // Watch fields needed for UI rendering / checks
  const selectedOrgIds = watch("selectedOrgIds") || [];
  const selectedAccessCodes = watch("selectedAccessCodes") || [];
  const passwordVal = watch("password");

  // UI state for password toggling and dropdown
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [orgList, setOrgList] = useState([]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Fetch organizations
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await getOrganizationListAsync();
        if (response?.data && Array.isArray(response.data)) {
          setOrgList(response.data);
        } else if (Array.isArray(response)) {
          setOrgList(response);
        }
      } catch (error) {
        console.error("Failed to fetch organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  // Handle Multi-Select checkbox toggle for React Hook Form
  const handleOrgToggle = (org) => {
    const isAlreadySelected = selectedOrgIds.includes(org.id);

    let updatedIds = [];
    let updatedCodes = [];

    if (isAlreadySelected) {
      updatedIds = selectedOrgIds.filter((id) => id !== org.id);
      updatedCodes = selectedAccessCodes.filter((c) => c !== org.code);
    } else {
      updatedIds = [...selectedOrgIds, org.id];
      updatedCodes = [...selectedAccessCodes, org.code];
    }

    setValue("selectedOrgIds", updatedIds, { shouldValidate: true });
    setValue("selectedAccessCodes", updatedCodes, { shouldValidate: true });
    trigger("selectedOrgIds");
  };

  // Submit Handler
  const onSubmit = async (data) => {
    const registerData = {
      full_name: data.fullName,
      email: data.email,
      phone_no: data.phoneNumber,
      organization_id: data.selectedOrgIds,
      org_access_code: data.selectedAccessCodes,
      password: data.password,
      role: "teacher",
    };

    console.log("Registration Payload:", registerData);

    try {
      if (registerAsync) {
        const res = await registerAsync(registerData);
        toast.success(res?.message || "Registration successful!");

        const emailToSend =
          res?.data?.email || res?.email || registerData?.email;
        const roleToSend =
          res?.data?.role || res?.role || registerData?.role || "teacher";

        navigate("/teacher/otp-verification", {
          state: {
            email: emailToSend,
            role: roleToSend,
          },
        });
      }
    } catch (err) {
      console.error("Registration failed:", err);
      toast.error(
        err?.response?.data?.message || err?.message || "Registration failed"
      );
    }
  };

  return (
    <section className="login-page-section">
      <div className="login-page-wrapper">
        <div className="login-left-banner">
          <img
            className="login-left-banner-img"
            src="/images/teacher/login/login-left-img.svg"
            alt="Group Background"
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
                src="/images/teacher/login/logo.svg"
                alt="GrantLink NC Logo"
              />
            </div>

            <div className="login-form-card">
              <h3 className="login-form-title">Create Your Account</h3>
              <p className="login-form-subtitle">
                Enter your details to create your teacher account
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name */}
                <div className="login-form-group">
                  <label className="login-input-label">Full Name</label>
                  <div className="login-input-field-wrapper">
                    <input
                      type="text"
                      className="login-input-control"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                    />
                  </div>
                  {errors.fullName && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="login-form-group">
                  <label className="login-input-label">Email</label>
                  <div className="login-input-field-wrapper">
                    <input
                      type="email"
                      className="login-input-control"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="login-form-group">
                  <label className="login-input-label">Phone Number</label>
                  <div className="login-input-field-wrapper">
                    <input
                      type="tel"
                      className="login-input-control"
                      placeholder="Enter your 10-digit phone number"
                      inputMode="numeric"
                      maxLength={10}
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Phone number must be exactly 10 digits",
                        },
                        onChange: (e) => {
                          e.target.value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                        },
                      })}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>

                {/* Organization Selection Dropdown & Access Code Fields */}
                <div className="login-form-group-wrp">
                  {/* Hidden register for selectedOrgIds validation */}
                  <input
                    type="hidden"
                    {...register("selectedOrgIds", {
                      validate: (value) =>
                        (value && value.length > 0) ||
                        "Please select at least one organization",
                    })}
                  />

                  {/* Select Organization */}
                  <div
                    className="login-form-group"
                    style={{ position: "relative" }}
                    ref={dropdownRef}
                  >
                    <label className="login-input-label">
                      Select Organization(s)
                    </label>
                    <div
                      className="login-input-field-wrapper"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="text"
                        readOnly
                        className="login-input-control"
                        placeholder={
                          isLoadingOrganizations
                            ? "Loading organizations..."
                            : selectedOrgIds.length > 0
                            ? `${selectedOrgIds.length} organization(s) selected`
                            : "Select organizations"
                        }
                        value={
                          selectedOrgIds.length > 0
                            ? `${selectedOrgIds.length} selected`
                            : ""
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </div>

                    {isDropdownOpen && (
                      <div
                        className="login-org-dropdown-menu"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          zIndex: 10,
                          background: "#fff",
                          border: "1px solid #ddd",
                          borderRadius: "6px",
                          maxHeight: "180px",
                          overflowY: "auto",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          padding: "8px",
                        }}
                      >
                        {isLoadingOrganizations ? (
                          <div style={{ padding: "8px", fontSize: "13px" }}>
                            Loading...
                          </div>
                        ) : orgList.length === 0 ? (
                          <div style={{ padding: "8px", fontSize: "13px" }}>
                            No organizations found.
                          </div>
                        ) : (
                          orgList.map((org) => (
                            <label
                              key={org.id}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "6px 4px",
                                cursor: "pointer",
                                fontSize: "14px",
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={selectedOrgIds.includes(org.id)}
                                onChange={() => handleOrgToggle(org)}
                              />
                              <span>
                                {org.name} ({org.code})
                              </span>
                            </label>
                          ))
                        )}
                      </div>
                    )}
                    {errors.selectedOrgIds && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          display: "block",
                        }}
                      >
                        {errors.selectedOrgIds.message}
                      </span>
                    )}
                  </div>

                  {/* Organization Access Codes */}
                  <div className="login-form-group">
                    <label className="login-input-label">
                      Organization Access Code(s)
                    </label>
                    <div
                      className="login-input-field-wrapper"
                      style={{
                        minHeight: "44px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 8px",
                        background: "#f9f9f9",
                      }}
                    >
                      {selectedAccessCodes.length > 0 ? (
                        selectedAccessCodes.map((code, index) => (
                          <span
                            key={index}
                            style={{
                              background: "#e2e8f0",
                              color: "#334155",
                              padding: "2px 8px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              fontWeight: 500,
                            }}
                          >
                            {code}
                          </span>
                        ))
                      ) : (
                        <span style={{ color: "#aaa", fontSize: "13px" }}>
                          Auto-filled from selected org(s)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Create Password */}
                <div className="login-form-group">
                  <label className="login-input-label">Create Password</label>
                  <div className="login-input-field-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="login-input-control"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    <div
                      className="login-password-eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img
                        src={
                          showPassword
                            ? "/images/teacher/login/eye-open.svg"
                            : "/images/teacher/login/eye-close.svg"
                        }
                        alt="Toggle Password Visibility"
                      />
                    </div>
                  </div>
                  {errors.password && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="login-form-group">
                  <label className="login-input-label">Re-enter Password</label>
                  <div className="login-input-field-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="login-input-control"
                      placeholder="Re-enter Password"
                      {...register("confirmPassword", {
                        required: "Please re-enter your password",
                        validate: (value) =>
                          value === passwordVal || "Passwords do not match",
                      })}
                    />
                    <div
                      className="login-password-eye-icon"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      <img
                        src={
                          showConfirmPassword
                            ? "/images/teacher/login/eye-open.svg"
                            : "/images/teacher/login/eye-close.svg"
                        }
                        alt="Toggle Password Visibility"
                      />
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="login-options-row">
                  <label className="login-toggle-wrapper">
                    <input
                      type="checkbox"
                      className="login-toggle-input"
                      style={{ display: "block" }}
                      {...register("termsAccepted", {
                        required: "Please accept the Terms & Conditions",
                      })}
                    />
                    <span className="login-toggle-text">
                      I agree to the{" "}
                      <a href="#terms" target="_blank" rel="noreferrer">
                        Terms & Conditions
                      </a>
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.termsAccepted.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="login-submit-btn"
                  disabled={isRegistering}
                >
                  {isRegistering ? "Signing Up..." : "Sign Up"}
                </button>

                <br />
                <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/teacher" className="login-signup-link">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../../hooks/global/useAuth";
// import toast from "react-hot-toast";
// // Import your useAuth hook here

// const Register = () => {
//   const navigate = useNavigate();
//   const { listOfOrg, isLoadingList, getRegister, isRegisterLoading } =
//     useAuth();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [selectedOrgIds, setSelectedOrgIds] = useState([]);
//   const [selectedAccessCodes, setSelectedAccessCodes] = useState([]);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const [orgList, setOrgList] = useState([]);
//   //
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, []);

//   // Safe reference to organizations list
//   useEffect(() => {
//     const fetchOrganizations = async () => {
//       try {
//         const response = await listOfOrg();

//         // Handles both direct array responses or { data: [...] } responses
//         if (response?.data && Array.isArray(response.data)) {
//           setOrgList(response.data);
//         } else if (Array.isArray(response.data)) {
//           setOrgList(response.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch organizations:", error);
//       }
//     };

//     fetchOrganizations();
//   }, []);

//   const handleOrgToggle = (org) => {
//     const isAlreadySelected = selectedOrgIds.includes(org.id);

//     if (isAlreadySelected) {
//       setSelectedOrgIds(selectedOrgIds.filter((id) => id !== org.id));
//       setSelectedAccessCodes(selectedAccessCodes.filter((c) => c !== org.code));
//     } else {
//       setSelectedOrgIds([...selectedOrgIds, org.id]);
//       setSelectedAccessCodes([...selectedAccessCodes, org.code]);
//     }
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     if (phoneNumber.length !== 10) {
//       toast.error("Phone number must be exactly 10 digits.");
//       return;
//     }

//     if (selectedOrgIds.length === 0) {
//       toast.error("Please select at least one organization.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!!");
//       return;
//     }

//     if (!termsAccepted) {
//       toast.error("Please accept the Terms & Conditions.");
//       return;
//     }

//     const registerData = {
//       full_name: fullName,
//       email: email,
//       phone_no: phoneNumber,
//       organization_id: selectedOrgIds,
//       org_access_code: selectedAccessCodes,
//       password: password,
//       role: "teacher",
//     };

//     console.log("Registration Payload:", registerData);

//     try {
//       if (getRegister) {
//         const res = await getRegister(registerData);
//         toast.success(res.message);

//         const emailToSend =
//           res?.data?.email || res?.email || registerData?.email;
//         const roleToSend =
//           res?.data?.role || res?.role || registerData?.role || "teacher";
//         navigate("/teacher/otp-verification", {
//           state: {
//             email: emailToSend,
//             role: roleToSend,
//           },
//         });
//       }
//     } catch (err) {
//       console.error("Registration failed:", err);
//     }
//   };

//   return (
//     <section className="login-page-section">
//       <div className="login-page-wrapper">
//         <div className="login-left-banner">
//           <img
//             className="login-left-banner-img"
//             src="/images/teacher/login/login-left-img.svg"
//             alt="Group Background"
//           />
//           <div className="login-left-banner-overlay">
//             <h1 className="login-overlay-title">
//               Get
//               <br />
//               Everything
//               <br />
//               You Want
//             </h1>
//             <p className="login-overlay-desc">
//               You can get everything you want if you work hard, trust the
//               process, and stick to the plan.
//             </p>
//           </div>
//         </div>

//         <div className="login-right-content">
//           <div className="login-form-container">
//             <div className="login-header-logo">
//               <img
//                 src="/images/teacher/login/logo.svg"
//                 alt="GrantLink NC Logo"
//               />
//             </div>

//             <div className="login-form-card">
//               <h3 className="login-form-title">Create Your Account</h3>
//               <p className="login-form-subtitle">
//                 Enter your details to create your teacher account
//               </p>

//               <form onSubmit={handleSignUp}>
//                 {/* Full Name */}
//                 <div className="login-form-group">
//                   <label className="login-input-label">Full Name</label>
//                   <div className="login-input-field-wrapper">
//                     <input
//                       type="text"
//                       className="login-input-control"
//                       placeholder="Enter your full name"
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="login-form-group">
//                   <label className="login-input-label">Email</label>
//                   <div className="login-input-field-wrapper">
//                     <input
//                       type="email"
//                       className="login-input-control"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Phone Number */}
//                 <div className="login-form-group">
//                   <label className="login-input-label">Phone Number</label>
//                   <div className="login-input-field-wrapper">
//                     <input
//                       type="tel"
//                       className="login-input-control"
//                       placeholder="Enter your 10-digit phone number"
//                       value={phoneNumber}
//                       onChange={(e) =>
//                         setPhoneNumber(
//                           e.target.value.replace(/\D/g, "").slice(0, 10)
//                         )
//                       }
//                       inputMode="numeric"
//                       maxLength={10}
//                       pattern="[0-9]{10}"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Organization Selection Dropdown & Access Code Fields */}
//                 <div className="login-form-group-wrp">
//                   {/* Select Organization */}
//                   <div
//                     className="login-form-group"
//                     style={{ position: "relative" }}
//                     ref={dropdownRef}
//                   >
//                     <label className="login-input-label">
//                       Select Organization(s)
//                     </label>
//                     <div
//                       className="login-input-field-wrapper"
//                       onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <input
//                         type="text"
//                         readOnly
//                         className="login-input-control"
//                         placeholder={
//                           isLoadingList
//                             ? "Loading organizations..."
//                             : selectedOrgIds.length > 0
//                             ? `${selectedOrgIds.length} organization(s) selected`
//                             : "Select organizations"
//                         }
//                         value={
//                           selectedOrgIds.length > 0
//                             ? `${selectedOrgIds.length} selected`
//                             : ""
//                         }
//                         style={{ cursor: "pointer" }}
//                       />
//                     </div>

//                     {isDropdownOpen && (
//                       <div
//                         className="login-org-dropdown-menu"
//                         style={{
//                           position: "absolute",
//                           top: "100%",
//                           left: 0,
//                           right: 0,
//                           zIndex: 10,
//                           background: "#fff",
//                           border: "1px solid #ddd",
//                           borderRadius: "6px",
//                           maxHeight: "180px",
//                           overflowY: "auto",
//                           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                           padding: "8px",
//                         }}
//                       >
//                         {isLoadingList ? (
//                           <div style={{ padding: "8px", fontSize: "13px" }}>
//                             Loading...
//                           </div>
//                         ) : orgList.length === 0 ? (
//                           <div style={{ padding: "8px", fontSize: "13px" }}>
//                             No organizations found.
//                           </div>
//                         ) : (
//                           orgList.map((org) => (
//                             <label
//                               key={org.id}
//                               style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "8px",
//                                 padding: "6px 4px",
//                                 cursor: "pointer",
//                                 fontSize: "14px",
//                               }}
//                             >
//                               <input
//                                 type="checkbox"
//                                 checked={selectedOrgIds.includes(org.id)}
//                                 onChange={() => handleOrgToggle(org)}
//                               />
//                               <span>
//                                 {org.name} ({org.code})
//                               </span>
//                             </label>
//                           ))
//                         )}
//                       </div>
//                     )}
//                   </div>

//                   {/* Organization Access Codes */}
//                   <div className="login-form-group">
//                     <label className="login-input-label">
//                       Organization Access Code(s)
//                     </label>
//                     <div
//                       className="login-input-field-wrapper"
//                       style={{
//                         minHeight: "44px",
//                         display: "flex",
//                         flexWrap: "wrap",
//                         alignItems: "center",
//                         gap: "6px",
//                         padding: "4px 8px",
//                         background: "#f9f9f9",
//                       }}
//                     >
//                       {selectedAccessCodes.length > 0 ? (
//                         selectedAccessCodes.map((code, index) => (
//                           <span
//                             key={index}
//                             style={{
//                               background: "#e2e8f0",
//                               color: "#334155",
//                               padding: "2px 8px",
//                               borderRadius: "4px",
//                               fontSize: "12px",
//                               fontWeight: 500,
//                             }}
//                           >
//                             {code}
//                           </span>
//                         ))
//                       ) : (
//                         <span style={{ color: "#aaa", fontSize: "13px" }}>
//                           Auto-filled from selected org(s)
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Create Password */}
//                 <div className="login-form-group">
//                   <label className="login-input-label">Create Password</label>
//                   <div className="login-input-field-wrapper">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="login-input-control"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       className="login-password-eye-icon"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       <img
//                         src={
//                           showPassword
//                             ? "/images/teacher/login/eye-open.svg"
//                             : "/images/teacher/login/eye-close.svg"
//                         }
//                         alt="Toggle Password Visibility"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Confirm Password */}
//                 <div className="login-form-group">
//                   <label className="login-input-label">Re-enter Password</label>
//                   <div className="login-input-field-wrapper">
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       className="login-input-control"
//                       placeholder="Re-enter Password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       className="login-password-eye-icon"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                     >
//                       <img
//                         src={
//                           showConfirmPassword
//                             ? "/images/teacher/login/eye-open.svg"
//                             : "/images/teacher/login/eye-close.svg"
//                         }
//                         alt="Toggle Password Visibility"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="login-options-row">
//                   <label className="login-toggle-wrapper">
//                     <input
//                       type="checkbox"
//                       className="login-toggle-input"
//                       name="termsAccepted"
//                       checked={termsAccepted}
//                       onChange={(e) => setTermsAccepted(e.target.checked)}
//                       style={{ display: "block" }}
//                       required
//                     />
//                     <span className="login-toggle-text">
//                       I agree to the{" "}
//                       <a href="#terms" target="_blank" rel="noreferrer">
//                         Terms & Conditions
//                       </a>
//                     </span>
//                   </label>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="login-submit-btn"
//                   disabled={isRegisterLoading}
//                 >
//                   {isRegisterLoading ? "Signing Up..." : "Sign Up"}
//                 </button>

//                 <br />
//                 <p className="text-center">
//                   Already have an account?{" "}
//                   <Link to="/teacher" className="login-signup-link">
//                     Login
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;
