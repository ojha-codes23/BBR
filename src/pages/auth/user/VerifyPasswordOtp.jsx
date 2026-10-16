import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/global/useAuth";

const VerifyPasswordOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";
  const flow = location.state?.flow || "register";

  const [otp, setOtp] = useState("");

  const {
    verifyUserEmailAsync,
    isVerifyingEmail,
    verifyForgotPasswordOtpAsync,
    isVerifyingForgotPasswordOtp,
    resendOtpAsync,
    isResendingOtp,
  } = useAuth();

  const isVerifying =
    flow === "forgot-password"
      ? isVerifyingForgotPasswordOtp
      : isVerifyingEmail;

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      otp: "",
    },
  });

  // Verify OTP after validation passes
  const onSubmit = async (data) => {
    if (!email) {
      toast.error("Email not found. Please register again.");
      navigate("/sign-up", { replace: true });
      return;
    }

    const payload = new FormData();
    payload.append("email", email);
    payload.append("otp", data.otp);
    payload.append("role", "user");

    try {
      const response =
        flow === "forgot-password"
          ? await verifyForgotPasswordOtpAsync(payload)
          : await verifyUserEmailAsync(payload);

      if (!response?.success) {
        toast.error(response?.message || "OTP verification failed.");
        return;
      }

      toast.success(response.message || "OTP verified successfully.");

      if (flow === "forgot-password") {
        const resetToken = response?.data?.reset_token;

        if (!resetToken) {
          toast.error("Reset token was not received. Please try again.");
          return;
        }

        navigate("/student/create-password", {
          replace: true,
          state: {
            email,
            reset_token: resetToken,
          },
        });
      } else {
        navigate("/student/", { replace: true });
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "OTP verification failed. Please try again."
      );
    }
  };

  // Show validation errors using toast, like the login component
  const onErrors = (validationErrors) => {
    if (validationErrors.otp) {
      toast.error(validationErrors.otp.message);
    }
  };

  // Resend OTP functionality remains unchanged
  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Email not found. Please register again.");
      navigate("/sign-up", { replace: true });
      return;
    }

    const payload = new FormData();
    payload.append("email", email);
    payload.append("role", "user");

    try {
      const response = await resendOtpAsync(payload);

      if (response?.success) {
        toast.success(
          response.message || "A new OTP has been sent to your email."
        );

        setOtp("");
        setValue("otp", "");
      } else {
        toast.error(response?.message || "Failed to resend OTP.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to resend OTP. Please try again."
      );
    }
  };

  // Update the individual OTP boxes and React Hook Form's OTP value
  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    setOtp((previousOtp) => {
      const otpArray = previousOtp.split("");
      otpArray[index] = digit;

      const updatedOtp = otpArray.join("").slice(0, 5);

      setValue("otp", updatedOtp, {
        shouldValidate: true,
        shouldDirty: true,
      });

      return updatedOtp;
    });

    return digit;
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
                  to={
                    flow === "forgot-password"
                      ? "/student/forget-password"
                      : "/sign-up"
                  }
                  className="login-back-arrow-btn"
                  title="Back"
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

              <div className="login-form-card">
                <h3 className="forgot-page-title">Verification Code</h3>
                <p className="forgot-page-subtitle">
                  Verify your email address
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit, onErrors)}
                  id="otp-form"
                  noValidate
                >
                  <label className="login-input-label">
                    Enter Verification Code
                  </label>

                  <div className="otp-inputs-row">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <input
                        key={index}
                        type="text"
                        inputMode="numeric"
                        className={`otp-input-box ${
                          errors.otp ? "is-invalid border-danger" : ""
                        }`}
                        maxLength={1}
                        value={otp[index] || ""}
                        disabled={isVerifying}
                        onChange={(e) => {
                          const digit = handleOtpChange(index, e.target.value);

                          if (digit) {
                            e.target.nextElementSibling?.focus();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (
                            e.key === "Backspace" &&
                            !otp[index] &&
                            e.target.previousElementSibling
                          ) {
                            e.target.previousElementSibling.focus();
                          }
                        }}
                        autoComplete={index === 0 ? "one-time-code" : "off"}
                        placeholder="-"
                      />
                    ))}
                  </div>

                  {/* React Hook Form validation */}
                  <input
                    type="hidden"
                    {...register("otp", {
                      validate: {
                        required: (value) =>
                          (value && value.length > 0) ||
                          "Please enter the verification code.",
                        validLength: (value) =>
                          value.length === 5 ||
                          "Please enter the 5-digit verification code.",
                      },
                    })}
                  />

                  <button
                    type="submit"
                    className="login-submit-btn"
                    disabled={isVerifying}
                  >
                    {isVerifying ? "Verifying..." : "Verify Email"}
                  </button>

                  <div className="otp-resend-wrapper">
                    Didn’t receive code?{" "}
                    <button
                      type="button"
                      className="otp-resend-link"
                      onClick={handleResendOtp}
                      disabled={isResendingOtp || isVerifying}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor:
                          isResendingOtp || isVerifying
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      {isResendingOtp ? "Sending..." : "Resend Code"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyPasswordOtp;

// import React, { useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import toast from "react-hot-toast";
// import useAuth from '../../../hooks/global/useAuth';

// const VerifyPasswordOtp = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     const email = location.state?.email || "";
//     const flow = location.state?.flow || "register";

//     const [otp, setOtp] = useState("");

//     const {
//         verifyUserEmailAsync,
//         isVerifyingEmail,
//         verifyForgotPasswordOtpAsync,
//         isVerifyingForgotPasswordOtp,
//         resendOtpAsync,
//         isResendingOtp,
//     } = useAuth();

//     const isVerifying = flow === "forgot-password"
//         ? isVerifyingForgotPasswordOtp
//         : isVerifyingEmail;

//     const handleOtpChange = (e) => {
//         const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 5);
//         setOtp(digitsOnly);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!email) {
//             toast.error("Email not found. Please register again.");
//             navigate("/sign-up", { replace: true });
//             return;
//         }

//         if (otp.length !== 5) {
//             toast.error("Please enter the 5-digit verification code.");
//             return;
//         }

//         const payload = new FormData();
//         payload.append("email", email);
//         payload.append("otp", otp);
//         payload.append("role", "user");

//         try {
//             const response =
//                 flow === "forgot-password"
//                     ? await verifyForgotPasswordOtpAsync(payload)
//                     : await verifyUserEmailAsync(payload);

//             if (!response?.success) {
//                 toast.error(
//                     response?.message || "OTP verification failed."
//                 );
//                 return;
//             }

//             toast.success(
//                 response.message || "OTP verified successfully."
//             );

//             if (flow === "forgot-password") {
//                 const resetToken = response?.data?.reset_token;

//                 console.log("resetToken122", resetToken)

//                 if (!resetToken) {
//                     toast.error("Reset token was not received. Please try again.");
//                     return;
//                 }

//                 navigate("/student/create-password", {
//                     replace: true,
//                     state: {
//                         email,
//                         reset_token: resetToken,
//                     },
//                 });
//             } else {
//                 navigate("/student/", { replace: true });
//             }
//         } catch (error) {
//             toast.error(
//                 error?.response?.data?.message ||
//                 error?.message ||
//                 "OTP verification failed. Please try again."
//             );
//         }
//     };

//     const handleResendOtp = async (e) => {
//         e.preventDefault();

//         if (!email) {
//             toast.error("Email not found. Please register again.");
//             navigate("/sign-up", { replace: true });
//             return;
//         }

//         const payload = new FormData();
//         payload.append("email", email);
//         payload.append("role", "user");

//         try {
//             const response = await resendOtpAsync(payload);

//             if (response?.success) {
//                 toast.success(
//                     response.message || "A new OTP has been sent to your email."
//                 );

//                 setOtp("");
//             } else {
//                 toast.error(
//                     response?.message || "Failed to resend OTP."
//                 );
//             }
//         } catch (error) {
//             toast.error(
//                 error?.response?.data?.message ||
//                 error?.message ||
//                 "Failed to resend OTP. Please try again."
//             );
//         }
//     };

//     return (
//         <>
//             <section className="login-page-section">
//                 <div className="login-page-wrapper">

//                     <div className="login-left-banner">
//                         <img className="login-left-banner-img" src="/images/user/login/login-left-img.svg" alt="Group Background Image" />

//                         <div className="login-left-banner-overlay">
//                             <h1 className="login-overlay-title">Get<br />Everything<br />You Want</h1>
//                             <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process, and stick to the plan.</p>
//                         </div>
//                     </div>

//                     <div className="login-right-content">
//                         <div className="login-form-container">

//                             <div className="login-header-wrapper">
//                                 <Link href="/student/forget-password" className="login-back-arrow-btn" title="Back">
//                                     <img src="/images/user/login/left-arrow.svg" alt="Back" />
//                                 </Link>

//                                 <div className="login-header-logo-container">
//                                     <img src="/images/user/login/logo.svg" alt="GrantLink NC Logo" style={{ maxWidth: "180px", height: "auto", display: "block" }} />
//                                 </div>
//                             </div>

//                             <div className="login-form-card">
//                                 <h3 className="forgot-page-title">Verification Code</h3>
//                                 <p className="forgot-page-subtitle">Verify your email address</p>

//                                 <form onSubmit={handleSubmit} id="otp-form">

//                                     <label className="login-input-label">Enter Verification Code</label>

//                                     <div className="otp-inputs-row">
//                                         {[0, 1, 2, 3, 4].map((index) => (
//                                             <input
//                                                 key={index}
//                                                 type="text"
//                                                 inputMode="numeric"
//                                                 className="otp-input-box"
//                                                 maxLength={1}
//                                                 value={otp[index] || ""}
//                                                 onChange={(e) => {
//                                                     const digit = e.target.value.replace(/\D/g, "").slice(-1);

//                                                     setOtp((prevOtp) => {
//                                                         const otpArray = prevOtp.split("");
//                                                         otpArray[index] = digit;
//                                                         return otpArray.join("").slice(0, 5);
//                                                     });

//                                                     if (digit) {
//                                                         e.target.nextElementSibling?.focus();
//                                                     }
//                                                 }}
//                                                 onKeyDown={(e) => {
//                                                     if (
//                                                         e.key === "Backspace" &&
//                                                         !otp[index] &&
//                                                         e.target.previousElementSibling
//                                                     ) {
//                                                         e.target.previousElementSibling.focus();
//                                                     }
//                                                 }}
//                                                 autoComplete={index === 0 ? "one-time-code" : "off"}
//                                                 placeholder="-"
//                                                 required
//                                                 disabled={isVerifyingEmail}
//                                             />
//                                         ))}
//                                     </div>

//                                     {/* <Link to="/user/create-password" className="login-submit-btn">Submit</Link> */}
//                                     <button
//                                         type="submit"
//                                         className="login-submit-btn"
//                                         disabled={isVerifying}
//                                     >
//                                         {isVerifying ? "Verifying..." : "Verify Email"}
//                                     </button>

//                                     <div className="otp-resend-wrapper">
//                                         Didn’t receive code?{" "}
//                                         {/* <a href="#" className="otp-resend-link">Resend Code</a> */}
//                                         <button
//                                             type="button"
//                                             className="otp-resend-link"
//                                             onClick={handleResendOtp}
//                                             disabled={isResendingOtp || isVerifyingEmail}
//                                             style={{
//                                                 background: "none",
//                                                 border: "none",
//                                                 padding: 0,
//                                                 cursor:
//                                                     isResendingOtp || isVerifyingEmail
//                                                         ? "not-allowed"
//                                                         : "pointer",
//                                             }}
//                                         >
//                                             {isResendingOtp ? "Sending..." : "Resend Code"}
//                                         </button>
//                                     </div>

//                                 </form>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </section>

//         </>
//     )
// }

// export default VerifyPasswordOtp
