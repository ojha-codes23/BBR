import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/global/useAuth";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Register = () => {
  const navigate = useNavigate();

  const [organizations, setOrganizations] = useState([]);
  const [showOrganizations, setShowOrganizations] = useState(false);
  const [organizationSearch, setOrganizationSearch] = useState("");
  const [selectedOrganizations, setSelectedOrganizations] = useState([]);

  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const {
    getOrganizationListAsync,
    isLoadingOrganizations,
    registerAsync,
    isRegistering,
  } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      organizationName: "",
      organizationAccessCode: "",
      organizationIds: [],
      password: "",
      confirmPassword: "",
      remember_me: false,
    },
  });

  const passwordValue = watch("password");

  // Fetch organizations once
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await getOrganizationListAsync({});
        if (response?.success) {
          setOrganizations(response.data || []);
        } else {
          toast.error(response?.message || "Failed to load organizations.");
        }
      } catch (error) {
        toast.error(error?.message || "Failed to load organizations.");
      }
    };
    fetchOrganizations();
  }, [getOrganizationListAsync]);

  // Toggle one organization in the selected list
  const handleOrganizationSelect = (organization) => {
    setSelectedOrganizations((previous) => {
      const alreadySelected = previous.some(
        (item) => item.id === organization.id
      );

      const updated = alreadySelected
        ? previous.filter((item) => item.id !== organization.id)
        : [...previous, organization];

      // Sync computed fields into RHF
      setValue("organizationName", updated.map((o) => o.name).join(", "));
      setValue(
        "organizationAccessCode",
        updated
          .map((o) => o.code)
          .filter((code) => code != null && code !== "")
          .join(", ")
      );
      setValue(
        "organizationIds",
        updated.map((o) => o.id),
        { shouldValidate: true }
      );

      return updated;
    });
  };

  // Called only when RHF validation passes
  const onSubmit = async (data) => {
    const payload = new FormData();

    payload.append("full_name", data.fullName.trim());
    payload.append("email", data.email.trim());
    payload.append("phone_no", data.phoneNumber.trim());
    payload.append("organization_access_code", data.organizationAccessCode);

    data.organizationIds.forEach((id) => {
      payload.append("organization_id[]", String(id));
    });

    payload.append("password", data.password);
    payload.append("role", "user");

    try {
      const response = await registerAsync(payload);

      if (response?.success) {
        toast.success(response.message || "Registration successful.");

        const registeredEmail = data.email.trim();

        // Reset everything
        reset();
        setSelectedOrganizations([]);
        setOrganizationSearch("");
        setShowOrganizations(false);

        navigate("/student/verify-otp", {
          state: { email: registeredEmail },
        });
      } else {
        toast.error(response?.message || "Registration failed.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  // Called when RHF validation fails — surfaces a toast
  const onErrors = (validationErrors) => {
    const firstError = Object.values(validationErrors)[0];
    if (firstError?.message) {
      toast.error(firstError.message);
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
                <h3 className="login-form-title">Create Your Account</h3>
                <p className="login-form-subtitle">
                  Enter your email and password to access your account
                </p>

                <form
                  className="login-form"
                  onSubmit={handleSubmit(onSubmit, onErrors)}
                  noValidate
                  autoComplete="off"
                >
                  {/* Full Name */}
                  <div className="login-form-group">
                    <label className="login-input-label">Full Name</label>
                    <div className="login-input-field-wrapper">
                      <input
                        type="text"
                        disabled={isRegistering}
                        className={`login-input-control ${
                          errors.fullName ? "is-invalid border-danger" : ""
                        }`}
                        placeholder="Enter your full name"
                        {...register("fullName", {
                          validate: {
                            required: (v) =>
                              (v && v.trim().length > 0) ||
                              "Full name is required",
                            minLength: (v) =>
                              v.trim().length >= 3 ||
                              "Full name must be at least 3 characters",
                          },
                        })}
                      />
                    </div>
                    {errors.fullName && (
                      <span className="text-danger small mt-1 d-block">
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
                        disabled={isRegistering}
                        className={`login-input-control ${
                          errors.email ? "is-invalid border-danger" : ""
                        }`}
                        placeholder="Enter your email"
                        {...register("email", {
                          validate: {
                            required: (v) =>
                              (v && v.trim().length > 0) || "Email is required",
                            validEmail: (v) =>
                              EMAIL_REGEX.test(v.trim()) ||
                              "Email is not valid",
                          },
                        })}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-danger small mt-1 d-block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone + Org block */}
                  <div className="login-form-group-wrp">
                    <div className="login-form-group">
                      <label className="login-input-label">Phone Number</label>
                      <div className="login-input-field-wrapper">
                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          disabled={isRegistering}
                          className={`login-input-control ${
                            errors.phoneNumber ? "is-invalid border-danger" : ""
                          }`}
                          placeholder="Enter your phone number"
                          {...register("phoneNumber", {
                            setValueAs: (v) =>
                              String(v || "")
                                .replace(/\D/g, "")
                                .slice(0, 10),
                            validate: {
                              required: (v) =>
                                (v && v.length > 0) ||
                                "Phone number is required",
                              exact: (v) =>
                                v.length === 10 ||
                                "Phone number must be 10 digits",
                            },
                          })}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <span className="text-danger small mt-1 d-block">
                          {errors.phoneNumber.message}
                        </span>
                      )}
                    </div>

                    <div className="d-flex" style={{ gap: "10px" }}>
                      {/* Access Code — computed, read-only */}
                      <div className="login-form-group w-100">
                        <label className="login-input-label">
                          Organization Access Code
                        </label>
                        <div className="login-input-field-wrapper">
                          <input
                            type="text"
                            readOnly
                            className="login-input-control"
                            placeholder="Auto-filled on selection"
                            {...register("organizationAccessCode")}
                          />
                        </div>
                      </div>

                      {/* Organization multi-select */}
                      <div className="login-form-group w-100">
                        <label className="login-input-label">
                          Organization Name
                        </label>

                        <div className="login-input-field-wrapper organization-dropdown-wrapper">
                          <input
                            type="text"
                            value={organizationSearch}
                            onChange={(e) => {
                              setOrganizationSearch(e.target.value);
                              setShowOrganizations(true);
                            }}
                            onFocus={() => setShowOrganizations(true)}
                            onBlur={() =>
                              setTimeout(() => setShowOrganizations(false), 200)
                            }
                            className={`login-input-control ${
                              errors.organizationIds
                                ? "is-invalid border-danger"
                                : ""
                            }`}
                            placeholder={
                              isLoadingOrganizations
                                ? "Loading organizations..."
                                : selectedOrganizations.length > 0
                                ? `${selectedOrganizations.length} organization(s) selected`
                                : "Search organizations..."
                            }
                            autoComplete="off"
                            disabled={isRegistering}
                          />

                          {/* register the hidden field for validation */}
                          <input
                            type="hidden"
                            {...register("organizationIds", {
                              validate: (v) =>
                                (Array.isArray(v) && v.length > 0) ||
                                "Please select at least one organization",
                            })}
                          />

                          {showOrganizations && (
                            <div className="organization-dropdown">
                              {organizations
                                .filter((organization) =>
                                  organization.name
                                    .toLowerCase()
                                    .includes(organizationSearch.toLowerCase())
                                )
                                .map((organization) => (
                                  <label
                                    key={organization.id}
                                    className="organization-dropdown-item"
                                    onMouseDown={(e) => e.preventDefault()}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={selectedOrganizations.some(
                                        (item) => item.id === organization.id
                                      )}
                                      onChange={() =>
                                        handleOrganizationSelect(organization)
                                      }
                                    />
                                    <span>{organization.name}</span>
                                  </label>
                                ))}

                              {organizations.filter((organization) =>
                                organization.name
                                  .toLowerCase()
                                  .includes(organizationSearch.toLowerCase())
                              ).length === 0 && (
                                <div className="organization-no-results">
                                  No organizations found
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        {errors.organizationIds && (
                          <span className="text-danger small mt-1 d-block">
                            {errors.organizationIds.message}
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
                        type={togglePassword ? "text" : "password"}
                        disabled={isRegistering}
                        className={`login-input-control ${
                          errors.password ? "is-invalid border-danger" : ""
                        }`}
                        placeholder="Enter your password"
                        {...register("password", {
                          validate: {
                            required: (v) =>
                              (v && v.length > 0) || "Password is required",
                            minLength: (v) =>
                              v.length >= 6 ||
                              "Password must be at least 6 characters",
                          },
                        })}
                      />

                      <div
                        className="login-password-eye-icon"
                        onClick={() => setTogglePassword((s) => !s)}
                        style={{ cursor: "pointer", userSelect: "none" }}
                      >
                        <img
                          src={
                            togglePassword
                              ? "/images/user/login/eye-open.svg"
                              : "/images/user/login/eye-close.svg"
                          }
                          alt={
                            togglePassword ? "Hide Password" : "Show Password"
                          }
                        />
                      </div>
                    </div>
                    {errors.password && (
                      <span className="text-danger small mt-1 d-block">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="login-form-group">
                    <label className="login-input-label">
                      Re-enter Password
                    </label>
                    <div className="login-input-field-wrapper">
                      <input
                        type={toggleConfirmPassword ? "text" : "password"}
                        disabled={isRegistering}
                        className={`login-input-control ${
                          errors.confirmPassword
                            ? "is-invalid border-danger"
                            : ""
                        }`}
                        placeholder="Re-enter Password"
                        {...register("confirmPassword", {
                          validate: {
                            required: (v) =>
                              (v && v.length > 0) ||
                              "Please re-enter your password",
                            matches: (v) =>
                              v === passwordValue || "Passwords do not match",
                          },
                        })}
                      />

                      <div
                        className="login-password-eye-icon"
                        onClick={() => setToggleConfirmPassword((s) => !s)}
                        style={{ cursor: "pointer", userSelect: "none" }}
                      >
                        <img
                          src={
                            toggleConfirmPassword
                              ? "/images/user/login/eye-open.svg"
                              : "/images/user/login/eye-close.svg"
                          }
                          alt={
                            toggleConfirmPassword
                              ? "Hide Password"
                              : "Show Password"
                          }
                        />
                      </div>
                    </div>
                    {errors.confirmPassword && (
                      <span className="text-danger small mt-1 d-block">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>

                  {/* Terms */}
                  <div
                    className="login-options-row"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <label className="login-toggle-wrapper">
                      <input
                        type="checkbox"
                        className="login-toggle-input"
                        style={{ display: "block" }}
                        disabled={isRegistering}
                        {...register("remember_me", {
                          validate: (v) =>
                            v === true ||
                            "You must agree to the Terms & Conditions",
                        })}
                      />
                      <span className="login-toggle-text">
                        I agree to the{" "}
                        <a href="#" target="_blank" rel="noreferrer">
                          Terms & Conditions
                        </a>
                      </span>
                    </label>
                    {errors.remember_me && (
                      <span className="text-danger small d-block">
                        {errors.remember_me.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="login-submit-btn"
                    disabled={isRegistering}
                    style={{
                      opacity: isRegistering ? 0.7 : 1,
                      cursor: isRegistering ? "not-allowed" : "pointer",
                    }}
                  >
                    {isRegistering ? "Registering..." : "Sign Up"}
                  </button>

                  <br />
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/student/" className="login-signup-link">
                      Login
                    </Link>
                  </p>
                  <p className="text-center">
                    Having trouble finding your organization? <br />
                    <Link to="/student" className="login-signup-link">
                      Let us help you reconnect.
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import useAuth from "../../../hooks/global/useAuth";
// import { Link, useNavigate } from 'react-router-dom'

// const Register = () => {

//     const navigate = useNavigate();

//     const [organizations, setOrganizations] = useState([]);
//     const [showOrganizations, setShowOrganizations] = useState(false);

//     const [organizationSearch, setOrganizationSearch] = useState("");
//     const [selectedOrganizations, setSelectedOrganizations] = useState([]);

//     const {
//         getOrganizationListAsync,
//         isLoadingOrganizations,
//         registerAsync,
//         isRegistering,
//     } = useAuth();

//     useEffect(() => {
//         const fetchOrganizations = async () => {
//             try {
//                 const response = await getOrganizationListAsync({});

//                 if (response?.success) {
//                     setOrganizations(response.data || []);
//                 } else {
//                     toast.error(
//                         response?.message || "Failed to load organizations."
//                     );
//                 }
//             } catch (error) {
//                 toast.error(
//                     error?.message || "Failed to load organizations."
//                 );
//             }
//         };

//         fetchOrganizations();
//     }, [getOrganizationListAsync]);

//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         organizationAccessCode: '',
//         organizationName: '',
//         organizationIds: [],
//         password: '',
//         confirmPassword: '',
//         remember_me: false,
//     })
//     const [togglePassword, setTogglePassword] = useState(false)
//     const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false)

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         // Allow only digits in the phone number
//         if (name === "phoneNumber") {
//             const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

//             setFormData((prevData) => ({
//                 ...prevData,
//                 phoneNumber: digitsOnly,
//             }));

//             return;
//         }

//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };

//     const handleOrganizationSelect = (organization) => {
//         setSelectedOrganizations((previous) => {
//             const alreadySelected = previous.some(
//                 (item) => item.id === organization.id
//             );

//             const updatedOrganizations = alreadySelected
//                 ? previous.filter((item) => item.id !== organization.id)
//                 : [...previous, organization];

//             setFormData((prevData) => ({
//                 ...prevData,

//                 organizationName: updatedOrganizations
//                     .map((item) => item.name)
//                     .join(", "),

//                 organizationIds: updatedOrganizations.map(
//                     (item) => item.id
//                 ),

//                 organizationAccessCode: updatedOrganizations
//                     .map((item) => item.code)
//                     .filter((code) => code != null && code !== "")
//                     .join(", "),
//             }));

//             return updatedOrganizations;
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         // console.log(formData)

//         if (formData.organizationIds.length === 0) {
//             toast.error("Please select at least one organization.");
//             return;
//         }

//         if (formData.password !== formData.confirmPassword) {
//             toast.error("Passwords do not match.");
//             return;
//         }

//         const payload = new FormData();

//         payload.append("full_name", formData.fullName.trim());
//         payload.append("email", formData.email.trim());
//         payload.append("phone_no", formData.phoneNumber.trim());
//         payload.append(
//             "organization_access_code",
//             formData.organizationAccessCode
//         );
//         // payload.append("organization_id", formData.organizationId);
//         formData.organizationIds.forEach((id) => {
//             payload.append("organization_id[]", String(id));
//         });

//         payload.append("password", formData.password);
//         payload.append("role", "user");

//         try {
//             const response = await registerAsync(payload);

//             if (response?.success) {
//                 toast.success(response.message || "Registration successful.");
//                 // console.log("Register response:", response);

//                 navigate("/verify-otp", {
//                     state: { email: formData.email.trim() }
//                 })

//                 setSelectedOrganizations([]);
//                 setOrganizationSearch("");

//                 // Clear all form fields
//                 setFormData({
//                     fullName: "",
//                     email: "",
//                     phoneNumber: "",
//                     organizationAccessCode: "",
//                     organizationName: "",
//                     organizationIds: [],
//                     password: "",
//                     confirmPassword: "",
//                     remember_me: false,
//                 });

//                 // Close the organization dropdown
//                 setShowOrganizations(false);

//             } else {
//                 toast.error(response?.message || "Registration failed.");
//             }
//         } catch (error) {
//             toast.error(
//                 error?.message || "Registration failed. Please try again."
//             );
//         }

//     }

//     return (
//         <>
//             <section className="login-page-section">
//                 <div className="login-page-wrapper">

//                     <div className="login-left-banner">
//                         <img className="login-left-banner-img" src="/images/user/login/login-left-img.svg" alt="Group Background Image" />

//                         <div className="login-left-banner-overlay">
//                             <h1 className="login-overlay-title">Get<br />Everything<br />You Want</h1>
//                             <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process,
//                                 and stick to the plan.</p>
//                         </div>
//                     </div>

//                     <div className="login-right-content">
//                         <div className="login-form-container">

//                             <div className="login-header-logo">
//                                 <img src="/images/user/login/logo.svg" alt="GrantLink NC Logo" />
//                             </div>

//                             <div className="login-form-card">
//                                 <h3 className="login-form-title">Create Your Account</h3>
//                                 <p className="login-form-subtitle">Enter your email and password to access your account</p>

//                                 <form className="login-form" onSubmit={handleSubmit}>

//                                     <div className="login-form-group">
//                                         <label className="login-input-label">Full Name</label>
//                                         <div className="login-input-field-wrapper">
//                                             <input type="text" name='fullName' onChange={handleInputChange} className="login-input-control" placeholder="Enter your full name"
//                                                 required />
//                                         </div>
//                                     </div>
//                                     <div className="login-form-group">
//                                         <label className="login-input-label">Email</label>
//                                         <div className="login-input-field-wrapper">
//                                             <input type="email" name='email' className="login-input-control" onChange={handleInputChange} placeholder="Enter your email"
//                                                 required />
//                                         </div>
//                                     </div>

//                                     <div className="login-form-group-wrp">
//                                         <div className="login-form-group">
//                                             <label className="login-input-label">Phone Number</label>
//                                             <div className="login-input-field-wrapper">
//                                                 <input type="tel" name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} className="login-input-control"
//                                                     placeholder="Enter your phone number"
//                                                     inputMode="numeric"
//                                                     maxLength={10}
//                                                     pattern="[0-9]{10}"
//                                                     required />
//                                             </div>
//                                         </div>
//                                         <div className="d-flex" style={{ gap: "10px" }}>
//                                             <div className="login-form-group w-100">
//                                                 <label className="login-input-label">Organization Access Code</label>
//                                                 <div className="login-input-field-wrapper">
//                                                     <input type="text" name='organizationAccessCode'
//                                                         //  onChange={handleInputChange}
//                                                         value={formData.organizationAccessCode}
//                                                         className="login-input-control"
//                                                         placeholder="Enter Access Code" readOnly required />
//                                                 </div>
//                                             </div>

//                                             <div className="login-form-group w-100">
//                                                 <label className="login-input-label">
//                                                     Organization Name
//                                                 </label>

//                                                 <div className="login-input-field-wrapper organization-dropdown-wrapper">
//                                                     <input
//                                                         type="text"
//                                                         value={organizationSearch}
//                                                         onChange={(e) => {
//                                                             setOrganizationSearch(e.target.value);
//                                                             setShowOrganizations(true);
//                                                         }}
//                                                         onFocus={() => setShowOrganizations(true)}
//                                                         onBlur={() => {
//                                                             setTimeout(() => setShowOrganizations(false), 200);
//                                                         }}
//                                                         className="login-input-control"
//                                                         placeholder={
//                                                             isLoadingOrganizations
//                                                                 ? "Loading organizations..."
//                                                                 : selectedOrganizations.length > 0
//                                                                     ? `${selectedOrganizations.length} organization(s) selected`
//                                                                     : "Search organizations..."
//                                                         }
//                                                         autoComplete="off"
//                                                         required={selectedOrganizations.length === 0}
//                                                     />

//                                                     {showOrganizations && (
//                                                         <div className="organization-dropdown">
//                                                             {organizations
//                                                                 .filter((organization) =>
//                                                                     organization.name
//                                                                         .toLowerCase()
//                                                                         .includes(organizationSearch.toLowerCase())
//                                                                 )
//                                                                 .map((organization) => (
//                                                                     <label
//                                                                         key={organization.id}
//                                                                         className="organization-dropdown-item"
//                                                                         onMouseDown={(e) => e.preventDefault()}
//                                                                         style={{
//                                                                             display: "flex",
//                                                                             alignItems: "center",
//                                                                             gap: "10px",
//                                                                             cursor: "pointer",
//                                                                         }}
//                                                                     >
//                                                                         <input
//                                                                             type="checkbox"
//                                                                             checked={selectedOrganizations.some(
//                                                                                 (item) => item.id === organization.id
//                                                                             )}
//                                                                             onChange={() =>
//                                                                                 handleOrganizationSelect(organization)
//                                                                             }
//                                                                         />

//                                                                         <span>{organization.name}</span>
//                                                                     </label>
//                                                                 ))}

//                                                             {organizations.filter((organization) =>
//                                                                 organization.name
//                                                                     .toLowerCase()
//                                                                     .includes(organizationSearch.toLowerCase())
//                                                             ).length === 0 && (
//                                                                     <div className="organization-no-results">
//                                                                         No organizations found
//                                                                     </div>
//                                                                 )}
//                                                         </div>
//                                                     )}

//                                                     {/* {selectedOrganizations.length > 0 && (
//                                                         <div className="selected-organizations">
//                                                             <small>
//                                                                 Selected: {formData.organizationName}
//                                                             </small>
//                                                         </div>
//                                                     )} */}
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>

//                                     <div className="login-form-group">
//                                         <label className="login-input-label">Create Password</label>
//                                         <div className="login-input-field-wrapper">
//                                             <input type={togglePassword ? "text" : "password"} name='password' onChange={handleInputChange} id="District-password" className="login-input-control"
//                                                 placeholder="Enter your password" required />

//                                             <div onClick={() => setTogglePassword(!togglePassword)} className="login-password-eye-icon" id="password-toggle-btn">
//                                                 {togglePassword ? (
//                                                     <img src="/images/user/login/eye-open.svg" alt="Hide Password" id="eye-icon-img" />
//                                                 ) : (
//                                                     <img src="/images/user/login/eye-close.svg" alt="Show Password" id="eye-icon-img" />
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="login-form-group">
//                                         <label className="login-input-label">Re-enter Password</label>
//                                         <div className="login-input-field-wrapper">
//                                             <input type={toggleConfirmPassword ? "text" : "password"} name='confirmPassword' onChange={handleInputChange} id="District-password" className="login-input-control"
//                                                 placeholder="Re-enter Password" required />

//                                             <div onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)} className="login-password-eye-icon" id="password-toggle-btn">
//                                                 {toggleConfirmPassword ? (
//                                                     <img src="/images/user/login/eye-open.svg" alt="Hide Password" id="eye-icon-img" />
//                                                 ) : (
//                                                     <img src="/images/user/login/eye-close.svg" alt="Show Password" id="eye-icon-img" />
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="login-options-row">
//                                         <label className="login-toggle-wrapper">
//                                             <input type="checkbox" checked={formData.remember_me} onChange={handleInputChange} className="login-toggle-input" name="remember_me"
//                                                 style={{ display: "block" }} />
//                                             {/* <!-- <div className="login-toggle-slider"></div> --> */}
//                                             <span className="login-toggle-text">
//                                                 I agree to the <a href="" target="_blank">Terms & Conditions</a>
//                                             </span>
//                                         </label>
//                                         {/* <!-- <a href="forget-password.html" className="login-forgot-link">Forgot Password?</a> --> */}
//                                     </div>

//                                     {/* <Link  className="login-submit-btn" type="submit" disabled={!formData.remember_me}>
//                                 Sign Up
//                             </Link> */}

//                                     <button
//                                         type="submit"
//                                         className="login-submit-btn"
//                                         style={{
//                                             opacity: formData.remember_me ? 1 : 0.5,
//                                             cursor: formData.remember_me ? "pointer" : "not-allowed",
//                                         }}
//                                         disabled={!formData.remember_me}
//                                     >
//                                         {isRegistering ? "Registering..." : "Sign Up"}
//                                     </button>
//                                     <br />
//                                     <p className="text-center">Already have an account? <Link to="/student/"
//                                         className="login-signup-link">Login</Link>
//                                     </p>
//                                     <p className="text-center" >Having trouble finding your organization? <br />
//                                         <Link to="/student" className="login-signup-link">Let us help you reconnect.</Link>
//                                     </p>
//                                 </form>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </section>

//         </>
//     )
// }

// export default Register
