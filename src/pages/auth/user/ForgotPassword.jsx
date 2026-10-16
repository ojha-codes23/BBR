// import React, {useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast';
// import useAuth from '../../../hooks/global/useAuth';


// const ForgotPassword = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');

//     const {
//         forgotPasswordAsync,
//         isSendingForgotPasswordOtp,
//     } = useAuth();

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         console.log("Email typed", email);

//         const trimmedEmail = email.trim();

//         if (!trimmedEmail) {
//             toast.error("Please enter your email.");
//             return;
//         }

//         const payload = new FormData();
//         payload.append("email", trimmedEmail);
//         payload.append("role", "user");

//         try {
//             const response = await forgotPasswordAsync(payload);

//             if (response?.success) {
//                 toast.success(
//                     response.message ||
//                     "OTP sent to your email."
//                 );

//                 // Send user to OTP page and tag the flow
//                 navigate("/student/verify-otp", {
//                     state: {
//                         email: trimmedEmail,
//                         flow: "forgot-password", // <-- important
//                     },
//                 });
//             } else {
//                 toast.error(
//                     response?.message || "Failed to send OTP."
//                 );
//             }
//         } catch (error) {
//             toast.error(
//                 error?.response?.data?.message ||
//                 error?.message ||
//                 "Something went wrong. Please try again."
//             );
//         }
//     }

//   return (
//    <>
//        <section className="login-page-section">
//         <div className="login-page-wrapper">

//             <div className="login-left-banner">
//                 <img className="login-left-banner-img" src="/images/user/login/login-left-img.svg" alt="Group Background Image"/>

//                 <div className="login-left-banner-overlay">
//                     <h1 className="login-overlay-title">Get<br/>Everything<br/>You Want</h1>
//                     <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process,
//                         and stick to the plan.</p>
//                 </div>
//             </div>

//             <div className="login-right-content">
//                 <div className="login-form-container">

//                     <div className="login-header-wrapper">
//                         <Link to="/student/"  className="login-back-arrow-btn" title="Back to Login">
//                             <img src="/images/user/login/left-arrow.svg" alt="Back"/>
//                         </Link>

//                         <div className="login-header-logo-container">
//                             <img src="/images/user/login/logo.svg" alt="GrantLink NC Logo"
//                                 style={{maxWidth: "180px", height: "auto", display: "block"}}/>
//                         </div>
//                     </div>

//                     <div className="login-form-card">
//                         <h3 className="forgot-page-title">Forgot Password</h3>
//                         <p className="forgot-page-subtitle">Verify your email address</p>

//                         <form onSubmit={handleSubmit}>

//                             <div className="login-form-group">
//                                 <label className="login-input-label">Email</label>
//                                 <div className="login-input-field-wrapper">
//                                     <input type="email" className="login-input-control" placeholder="Enter your email" 
//                                     value={email} 
//                                     onChange={(e) => setEmail(e.target.value)} 
//                                     disabled={isSendingForgotPasswordOtp}
//                                         required />
//                                 </div>
//                             </div>

//                             <button type='submit' className="login-submit-btn" disabled={isSendingForgotPasswordOtp}>{isSendingForgotPasswordOtp ? "Sending..." : "Verify"}</button>

//                             <p className="text-center mt-2">Already have an account? 
//                                                           <Link to="/student/" className="login-signup-link">Log in </Link>
//                             </p>

//                         </form>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     </section>
//    </>
//   )
// }

// export default ForgotPassword













import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/global/useAuth";

const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { forgotPasswordAsync, isSendingForgotPasswordOtp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  // Runs when the email passes validation
  const onSubmit = async (data) => {
    const trimmedEmail = data.email.trim();

    const payload = new FormData();
    payload.append("email", trimmedEmail);
    payload.append("role", "user");

    try {
      const response = await forgotPasswordAsync(payload);

      if (response?.success) {
        toast.success(response.message || "OTP sent to your email.");

        navigate("/student/verify-otp", {
          state: {
            email: trimmedEmail,
            flow: "forgot-password",
          },
        });
      } else {
        toast.error(response?.message || "Failed to send OTP.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  // Displays validation errors as toast messages
  const onErrors = (validationErrors) => {
    if (validationErrors.email) {
      toast.error(validationErrors.email.message);
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
              <div className="login-header-wrapper">
                <Link
                  to="/student/"
                  className="login-back-arrow-btn"
                  title="Back to Login"
                >
                  <img
                    src="/images/user/login/left-arrow.svg"
                    alt="Back"
                  />
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

              <div className="login-form-card">
                <h3 className="forgot-page-title">Forgot Password</h3>

                <p className="forgot-page-subtitle">
                  Verify your email address
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit, onErrors)}
                  noValidate
                  autoComplete="off"
                >
                  <div className="login-form-group">
                    <label className="login-input-label">Email</label>

                    <div className="login-input-field-wrapper">
                      <input
                        type="email"
                        className={`login-input-control ${
                          errors.email ? "is-invalid border-danger" : ""
                        }`}
                        placeholder="Enter your email"
                        disabled={isSendingForgotPasswordOtp}
                        {...register("email", {
                          validate: {
                            required: (value) =>
                              (value && value.trim().length > 0) ||
                              "Please enter your email.",

                            validEmail: (value) =>
                              EMAIL_REGEX.test(value.trim()) ||
                              "Please enter a valid email address.",
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

                  <button
                    type="submit"
                    className="login-submit-btn"
                    disabled={isSendingForgotPasswordOtp}
                  >
                    {isSendingForgotPasswordOtp ? "Sending..." : "Verify"}
                  </button>

                  <p className="text-center mt-2">
                    Already have an account?{" "}
                    <Link to="/student/" className="login-signup-link">
                      Log in
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

export default ForgotPassword;
