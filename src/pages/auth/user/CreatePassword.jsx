import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/global/useAuth";
import CongratulationsModal from "../../../components/user/CongratulationsModal";

const CreatePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";
  const resetToken = location.state?.reset_token || "";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const { resetPasswordAsync, isResettingPassword } = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Runs when password validations pass
  const onSubmit = async (data) => {
    if (!email || !resetToken) {
      toast.error("Reset session expired. Please verify your OTP again.");
      navigate("/user/forget-password", { replace: true });
      return;
    }

    const payload = new FormData();
    payload.append("email", email);
    payload.append("reset_token", resetToken);
    payload.append("new_password", data.password);
    payload.append("role", "user");

    try {
      const response = await resetPasswordAsync(payload);

      if (response?.success) {
        toast.success(response.message || "Password reset successfully.");

        reset({
          password: "",
          confirmPassword: "",
        });

        setShowCongratulations(true);
      } else {
        toast.error(response?.message || "Unable to reset password.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Password reset failed. Please try again."
      );
    }
  };

  // Display validation errors as toast messages
  const onErrors = (validationErrors) => {
    if (validationErrors.password) {
      toast.error(validationErrors.password.message);
      return;
    }

    if (validationErrors.confirmPassword) {
      toast.error(validationErrors.confirmPassword.message);
    }
  };

  return (
    <>
      <div>
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
                <div className="login-header-wrapper">
                  <Link
                    to="/student/verify-otp"
                    className="login-back-arrow-btn"
                    title="Back to Login"
                    state={{
                      email,
                      flow: "forgot-password",
                    }}
                  >
                    <img src="/images/user/login/left-arrow.svg" alt="Back" />
                  </Link>

                  <div className="login-header-logo-container">
                    <img
                      src="/images/user/login/logo.svg"
                      alt="GrantLink NC Logo"
                      style={{
                        maxWidth: "180px",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                </div>

                <div className="login-form-card gl-auth-mt-fix">
                  <h3 className="login-form-title">Create Password</h3>

                  <p className="login-form-subtitle">
                    Verify your email address
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit, onErrors)}
                    noValidate
                    autoComplete="off"
                  >
                    {/* Create Password */}
                    <div className="login-form-group">
                      <label className="login-input-label">
                        Create Password
                      </label>

                      <div className="login-input-field-wrapper">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="reg-password"
                          className={`login-input-control ${
                            errors.password ? "is-invalid border-danger" : ""
                          }`}
                          placeholder="Enter your password"
                          autoComplete="new-password"
                          disabled={isResettingPassword}
                          {...register("password", {
                            validate: {
                              required: (value) =>
                                (value && value.trim().length > 0) ||
                                "Please enter your password.",

                              minLength: (value) =>
                                value.length >= 6 ||
                                "Password must be at least 6 characters.",
                            },
                          })}
                        />

                        <div
                          className="login-password-eye-icon gl-eye-trigger"
                          onClick={() =>
                            setShowPassword((previous) => !previous)
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={
                              showPassword
                                ? "/images/user/login/eye-open.svg"
                                : "/images/user/login/eye-close.svg"
                            }
                            alt="Toggle Password visual state"
                            className="gl-eye-img-switch"
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
                          type={showConfirmPassword ? "text" : "password"}
                          id="reg-confirm-password"
                          className={`login-input-control ${
                            errors.confirmPassword
                              ? "is-invalid border-danger"
                              : ""
                          }`}
                          placeholder="Re-enter Password"
                          autoComplete="new-password"
                          disabled={isResettingPassword}
                          {...register("confirmPassword", {
                            validate: {
                              required: (value) =>
                                (value && value.trim().length > 0) ||
                                "Please confirm your password.",

                              matchPassword: (value) =>
                                value === getValues("password") ||
                                "Passwords do not match.",
                            },
                          })}
                        />

                        <div
                          className="login-password-eye-icon gl-eye-trigger"
                          onClick={() =>
                            setShowConfirmPassword((previous) => !previous)
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={
                              showConfirmPassword
                                ? "/images/user/login/eye-open.svg"
                                : "/images/user/login/eye-close.svg"
                            }
                            alt="Toggle Password visual state"
                            className="gl-eye-img-switch"
                          />
                        </div>
                      </div>

                      {errors.confirmPassword && (
                        <span className="text-danger small mt-1 d-block">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="login-submit-btn gl-auth-btn-blue-tone"
                      disabled={isResettingPassword}
                    >
                      {isResettingPassword
                        ? "Resetting Password..."
                        : "Create Password"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CongratulationsModal
        show={showCongratulations}
        onClose={() => setShowCongratulations(false)}
      />
    </>
  );
};

export default CreatePassword;

// import React, { useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import toast from "react-hot-toast"
// import useAuth from '../../../hooks/global/useAuth'
// import CongratulationsModal from '../../../components/user/CongratulationsModal'

// const CreatePassword = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     const email = location.state?.email || "";
//     const resetToken = location.state?.reset_token || "";

//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const [showCongratulations, setShowCongratulations] = useState(false);

//     const {
//         resetPasswordAsync,
//         isResettingPassword,
//     } = useAuth();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!email || !resetToken) {
//             toast.error("Reset session expired. Please verify your OTP again.");
//             navigate("/user/forget-password", { replace: true });
//             return;
//         }

//         if (!password.trim() || !confirmPassword.trim()) {
//             toast.error("Please enter and confirm your password.");
//             return;
//         }

//         if (password !== confirmPassword) {
//             toast.error("Passwords do not match.");
//             return;
//         }

//         const payload = new FormData();
//         payload.append("email", email);
//         payload.append("reset_token", resetToken);
//         payload.append("new_password", password);
//         payload.append("role", "user");

//         try {
//             const response = await resetPasswordAsync(payload);

//             if (response?.success) {
//                 toast.success(
//                     response.message || "Password reset successfully."
//                 );

//                 setPassword("");
//                 setConfirmPassword("");
//                 setShowCongratulations(true);

//                 // Show the existing Bootstrap congratulations modal.
//                 // const modalElement = document.getElementById(
//                 //     "congratulationsModal"
//                 // );

//                 // if (modalElement && window.bootstrap?.Modal) {
//                 //     window.bootstrap.Modal
//                 //         .getOrCreateInstance(modalElement)
//                 //         .show();
//                 // } else {

//                 //     navigate("/user/", { replace: true });
//                 // }
//             } else {
//                 toast.error(
//                     response?.message || "Unable to reset password."
//                 );
//             }
//         } catch (error) {
//             toast.error(
//                 error?.response?.data?.message ||
//                 error?.message ||
//                 "Password reset failed. Please try again."
//             );
//         }
//     };

//     return (

//         <>
//             <div>
//                 <section className="login-page-section">
//                     <div className="login-page-wrapper">

//                         <div className="login-left-banner">
//                             <img className="login-left-banner-img" src="/images/user/login/login-left-img.svg" alt="Group Background Image" />

//                             <div className="login-left-banner-overlay">
//                                 <h1 className="login-overlay-title">Get<br />Everything<br />You Want</h1>
//                                 <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process,
//                                     and stick to the plan.</p>
//                             </div>
//                         </div>

//                         <div className="login-right-content">
//                             <div className="login-form-container">

//                                 <div className="login-header-wrapper">
//                                     <Link to="/student/verify-otp" className="login-back-arrow-btn" title="Back to Login">
//                                         <img src="/images/user/login/left-arrow.svg" alt="Back" />
//                                     </Link>

//                                     <div className="login-header-logo-container">
//                                         <img src="/images/user/login/logo.svg" alt="GrantLink NC Logo"
//                                             style={{ maxWidth: " 180px", height: "auto", display: "block" }} />
//                                     </div>
//                                 </div>

//                                 <div className="login-form-card gl-auth-mt-fix">
//                                     <h3 className="login-form-title">Create Password</h3>
//                                     <p className="login-form-subtitle">Verify your email address</p>

//                                     <form onSubmit={handleSubmit}>

//                                         <div className="login-form-group">
//                                             <label className="login-input-label">Create Password</label>
//                                             <div className="login-input-field-wrapper">
//                                                 <input type={showPassword ? "text" : "password"} id="reg-password" className="login-input-control"
//                                                     placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='new-passw' required disabled={isResettingPassword} />
//                                                 <div className="login-password-eye-icon gl-eye-trigger" onClick={() => setShowPassword((previous) => !previous)}>
//                                                     <img src={showPassword ? "/images/user/login/eye-open.svg" : "/images/user/login/eye-close.svg"} alt="Toggle Password visual state"
//                                                         className="gl-eye-img-switch" />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="login-form-group">
//                                             <label className="login-input-label">Re-enter Password</label>
//                                             <div className="login-input-field-wrapper">
//                                                 <input type={showConfirmPassword ? "text" : "password"} id="reg-confirm-password" className="login-input-control"
//                                                     placeholder="Re-enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" required disabled={isResettingPassword} />
//                                                 <div className="login-password-eye-icon gl-eye-trigger"
//                                                     onClick={() => setShowConfirmPassword((previous) =>!previous)}>
//                                                     <img src={showConfirmPassword ? "/images/user/login/eye-open.svg" : "/images/user/login/eye-close.svg"} alt="Toggle Password visual state"
//                                                         className="gl-eye-img-switch" />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* <button type="button" className="login-submit-btn gl-auth-btn-blue-tone" data-bs-toggle="modal"
//                                             data-bs-target="#congratulationsModal">
//                                             Create Password
//                                         </button> */}

//                                         <button
//                                             type="submit"
//                                             className="login-submit-btn gl-auth-btn-blue-tone"
//                                             disabled={isResettingPassword}
//                                         >
//                                             {isResettingPassword
//                                                 ? "Resetting Password..."
//                                                 : "Create Password"}
//                                         </button>

//                                     </form>

//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                 </section>
//             </div>

//             <CongratulationsModal show={showCongratulations} onClose={() => setShowCongratulations(false)} />

//         </>

//     )
// }

// export default CreatePassword
