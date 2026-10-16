import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/global/useAuth";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginAsync, isLoggingIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Executes ONLY when our validations pass
  const onSubmit = async (data) => {
    try {
      const payload = {
        email: data.email.trim(),
        password: data.password.trim(),
        role: "user",
      };

      const res = await loginAsync(payload);
      const message = res?.message || "User logged in successfully.";
      toast.success(message);
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err?.message ||
        "Invalid email or password. Please try again.";
      toast.error(errorMessage);
    }
  };

  // Triggers client-side toast when fields fail our checks
  const onErrors = (validationErrors) => {
    if (validationErrors.email) {
      toast.error(validationErrors.email.message);
      return;
    }
    if (validationErrors.password) {
      toast.error(validationErrors.password.message);
      return;
    }
  };

  return (
    <div>
      <section className="login-page-section">
        <div className="login-page-wrapper">
          {/* Left Banner */}
          <div className="login-left-banner">
            <img
              className="login-left-banner-img"
              src="/images/user/login/login-left-img.svg"
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

          {/* Right Form Container */}
          <div className="login-right-content">
            <div className="login-form-container">
              <div className="login-header-logo">
                <img
                  src="/images/user/login/logo.svg"
                  alt="GrantLink NC Logo"
                />
              </div>

              <div className="login-form-card">
                <h3 className="login-form-title">Welcome Back</h3>
                <p className="login-form-subtitle">
                  Enter your email and password to access your account
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit, onErrors)}
                  noValidate
                  autoComplete="off"
                >
                  {/* Email Field */}
                  <div className="login-form-group">
                    <label className="login-input-label">Email</label>
                    <div className="login-input-field-wrapper">
                      <input
                        type="email"
                        disabled={isLoggingIn}
                        className={`login-input-control ${
                          errors.email ? "is-invalid border-danger" : ""
                        }`}
                        placeholder="Enter your email"
                        {...register("email", {
                          validate: {
                            required: (val) =>
                              (val && val.trim().length > 0) ||
                              "Email is empty",
                            validEmail: (val) =>
                              EMAIL_REGEX.test(val.trim()) ||
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

                  {/* Password Field */}
                  <div className="login-form-group">
                    <label className="login-input-label">Password</label>
                    <div className="login-input-field-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="superuser-password"
                        disabled={isLoggingIn}
                        className={`login-input-control ${
                          errors.password ? "is-invalid border-danger" : ""
                        }`}
                        placeholder="Enter your password"
                        {...register("password", {
                          validate: {
                            required: (val) =>
                              (val && val.trim().length > 0) ||
                              "Password is empty",
                            minLength: (val) =>
                              val.trim().length >= 6 ||
                              "Password must be at least 6 characters",
                          },
                        })}
                      />

                      <div
                        className="login-password-eye-icon"
                        id="password-toggle-btn"
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={{ cursor: "pointer", userSelect: "none" }}
                      >
                        <img
                          src={
                            showPassword
                              ? "/images/user/login/eye.svg"
                              : "/images/user/login/eye-close.svg"
                          }
                          alt={showPassword ? "Hide Password" : "Show Password"}
                          id="eye-icon-img"
                        />
                      </div>
                    </div>
                    {errors.password && (
                      <span className="text-danger small mt-1 d-block">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  {/* Forgot Password Link */}
                  <div className="login-options-row">
                    &nbsp;
                    <Link to="/forget-password" className="login-forgot-link">
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="login-submit-btn w-100 border-0 d-flex align-items-center justify-content-center gap-2"
                    disabled={isLoggingIn}
                    style={{ cursor: isLoggingIn ? "not-allowed" : "pointer" }}
                  >
                    {isLoggingIn ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span>Logging in...</span>
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>

                  <p className="text-center mt-2">
                    Don’t have an account?{" "}
                    <Link to="/sign-up" className="login-signup-link">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserLogin;

// import React from "react";
// import { Link } from "react-router-dom";

// const UserLogin = () => {
//   return (
//     <div>
//       <section className="login-page-section">
//         <div className="login-page-wrapper">
//           <div className="login-left-banner">
//             <img
//               className="login-left-banner-img"
//               src="/images/user/login/login-left-img.svg"
//               alt="Group Background Image"
//             />

//             <div className="login-left-banner-overlay">
//               <h1 className="login-overlay-title">
//                 Get
//                 <br />
//                 Everything
//                 <br />
//                 You Want
//               </h1>
//               <p className="login-overlay-desc">
//                 You can get everything you want if you work hard, trust the
//                 process, and stick to the plan.
//               </p>
//             </div>
//           </div>

//           <div className="login-right-content">
//             <div className="login-form-container">
//               <div className="login-header-logo">
//                 <img
//                   src="/images/user/login/logo.svg"
//                   alt="GrantLink NC Logo"
//                 />
//               </div>

//               <div className="login-form-card">
//                 <h3 className="login-form-title">Welcome Back</h3>
//                 <p className="login-form-subtitle">
//                   Enter your email and password to access your account
//                 </p>

//                 <form action="" method="POST">
//                   <div className="login-form-group">
//                     <label className="login-input-label">Email</label>
//                     <div className="login-input-field-wrapper">
//                       <input
//                         type="email"
//                         className="login-input-control"
//                         placeholder="Enter your email"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="login-form-group">
//                     <label className="login-input-label">Password</label>
//                     <div className="login-input-field-wrapper">
//                       <input
//                         type="password"
//                         id="superuser-password"
//                         className="login-input-control"
//                         placeholder="Enter your password"
//                         required
//                       />

//                       <div
//                         className="login-password-eye-icon"
//                         id="password-toggle-btn"
//                       >
//                         <img
//                           src="/images/user/login/eye-close.svg"
//                           alt="Show Password"
//                           id="eye-icon-img"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="login-options-row">
//                     {/* <!-- <label className="login-toggle-wrapper">
//                                     <input type="checkbox" className="login-toggle-input" name="remember_me">
//                                     <div className="login-toggle-slider"></div>
//                                     <span className="login-toggle-text">Remember me</span>
//                                 </label> --> */}
//                     &nbsp;
//                     <Link
//                       to="/student/forget-password"
//                       className="login-forgot-link"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>

//                   <Link
//                     to="/student/organization-login"
//                     className="login-submit-btn"
//                   >
//                     Login
//                   </Link>
//                   <p className="text-center mt-2">
//                     Don’t have an account?
//                     <Link to="/student/sign-up" className="login-signup-link">
//                       Sign Up
//                     </Link>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UserLogin;
