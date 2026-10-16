import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/global/useAuth";
import toast from "react-hot-toast";

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Route state se email aur role extract karein
  const { email = "", role = "teacher", otp } = location.state || {};

  // Auth Hook se verification aur resend methods
  const {
    verifyForgotPasswordOtpAsync,
    isVerifyingForgotPasswordOtp,
    forgotPasswordAsync,
    isSendingForgotPasswordOtp,
  } = useAuth();

  const inputRefs = useRef([]);

  // 1 Minute (60 seconds) timer state
  const [timer, setTimer] = useState(60);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: ["", "", "", "", ""],
    },
    mode: "onSubmit",
  });

  const otpValues = watch("otp") || ["", "", "", "", ""];

  // Screen par aate hi 1 min ka reverse timer chalana
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Seconds ko MM:SS format me dikhane ke liye helper
  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Resend Code par forgotPasswordAsync hit karne ka handler
  const handleResendCode = async () => {
    if (timer > 0 || isSendingForgotPasswordOtp) return;

    try {
      if (forgotPasswordAsync) {
        const res = await forgotPasswordAsync({ email, role });
        toast.success(res?.message || "Verification code resent successfully!");
        setTimer(60); // API success hone par timer wapas 1 min par reset hoga
      }
    } catch (err) {
      console.error("Resend OTP failed:", err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to resend verification code"
      );
    }
  };

  // Handle single digit change and auto-focus next
  const handleDigitChange = (index, val) => {
    const cleanDigit = val.replace(/[^0-9]/g, "").slice(-1);

    const updatedOtp = [...otpValues];
    updatedOtp[index] = cleanDigit;
    setValue("otp", updatedOtp);
    clearErrors("otp");

    // Auto-advance to next input
    if (cleanDigit && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace navigation
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle clipboard paste (e.g. "21862")
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 5);

    if (!pastedData) return;

    const newOtp = [...otpValues];
    pastedData.split("").forEach((char, idx) => {
      newOtp[idx] = char;
    });

    setValue("otp", newOtp);
    clearErrors("otp");

    const nextIndex = Math.min(pastedData.length, 4);
    inputRefs.current[nextIndex]?.focus();
  };

  // Submit Handler
  const onSubmit = async (data) => {
    const fullOtp = (data.otp || []).join("");

    if (fullOtp.length < 5) {
      setError("otp", {
        type: "manual",
        message: "Please enter complete 5-digit verification code",
      });
      return;
    }

    const payload = {
      email: email,
      role: role,
      otp: fullOtp,
    };

    try {
      const response = await verifyForgotPasswordOtpAsync(payload);

      if (
        response?.success ||
        response?.status === 200 ||
        response?.code === 200
      ) {
        toast.success(response?.message || "OTP verified successfully!");
        navigate("/teacher/create-password", {
          state: {
            email: email,
            role: role,
            reset_token: response?.data?.reset_token,
          },
        });
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to verify OTP"
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
                to="/teacher/sign-up"
                className="login-back-arrow-btn"
                title="Back"
              >
                <img src="/images/teacher/login/left-arrow.svg" alt="Back" />
              </Link>

              <div className="login-header-logo-container">
                <img
                  src="/images/teacher/login/logo.svg"
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
                Verify your email address: <strong>{email}</strong>
              </p>

              <form onSubmit={handleSubmit(onSubmit)} id="otp-form">
                <label className="login-input-label">
                  Enter Verification Code
                </label>

                {/* 5-digit inputs wrapper */}
                <div className="otp-inputs-row" onPaste={handlePaste}>
                  {[0, 1, 2, 3, 4].map((index) => {
                    const { ref, ...restRegister } = register(`otp.${index}`);
                    return (
                      <input
                        key={index}
                        {...restRegister}
                        ref={(el) => {
                          ref(el);
                          inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        className="otp-input-box"
                        maxLength={1}
                        placeholder="-"
                        value={otpValues[index] || ""}
                        onChange={(e) =>
                          handleDigitChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleKeyDown(index, e)}
                      />
                    );
                  })}
                </div>

                {errors.otp && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "6px",
                      display: "block",
                    }}
                  >
                    {errors.otp.message}
                  </span>
                )}

                <button
                  type="submit"
                  className="login-submit-btn"
                  disabled={isVerifyingForgotPasswordOtp}
                  style={{
                    cursor: isVerifyingForgotPasswordOtp
                      ? "not-allowed"
                      : "pointer",
                    marginTop: "16px",
                  }}
                >
                  {isVerifyingForgotPasswordOtp ? "Verifying..." : "Submit"}
                </button>

                {/* Resend & Timer Area */}
                <div
                  className="otp-resend-wrapper"
                  style={{ marginTop: "14px" }}
                >
                  Didn’t receive code?{" "}
                  {timer > 0 ? (
                    <span
                      style={{
                        color: "#64748b",
                        fontWeight: 500,
                        marginLeft: "4px",
                      }}
                    >
                      Resend code in {formatTimer(timer)}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendCode}
                      disabled={isSendingForgotPasswordOtp}
                      className="otp-resend-link"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        font: "inherit",
                        cursor: isSendingForgotPasswordOtp
                          ? "not-allowed"
                          : "pointer",
                        textDecoration: "underline",
                        color: "#2563eb",
                        marginLeft: "4px",
                      }}
                    >
                      {isSendingForgotPasswordOtp
                        ? "Sending..."
                        : "Resend Code"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpVerification;

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../../hooks/global/useAuth";

// const OtpVerification = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Location state se email extract karo
//   const { email = "", role = "teacher" } = location.state || {};
//   console.log(location.state, "LOCATIMDAJSDJ");

//   const { verifyOtpsignup, isVerifysingupLoading } = useAuth();

//   // 5-digit OTP ke liye state
//   const [otpValues, setOtpValues] = useState(["", "", "", "", ""]);
//   const inputRefs = useRef([]);

//   // Handle single digit input and auto-focus next
//   const handleInputChange = (index, value) => {
//     const cleanVal = value.replace(/[^0-9]/g, "").slice(-1); // Sirf 1 digit allow karein
//     const updatedOtp = [...otpValues];
//     updatedOtp[index] = cleanVal;
//     setOtpValues(updatedOtp);

//     // Agar digit enter ho gayi toh next box pe focus karein
//     if (cleanVal && index < 4) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   // Backspace dabane par pichle box pe focus shift ho
//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otpValues[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   // Paste support (agar user poora 5 digit code paste kare)
//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData
//       .getData("text")
//       .replace(/[^0-9]/g, "")
//       .slice(0, 5);
//     if (!pastedData) return;

//     const newOtp = [...otpValues];
//     pastedData.split("").forEach((char, idx) => {
//       newOtp[idx] = char;
//     });
//     setOtpValues(newOtp);

//     const nextIndex = Math.min(pastedData.length, 4);
//     inputRefs.current[nextIndex]?.focus();
//   };

//   // Form submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const otp = otpValues.join("");

//     if (otp.length < 5) {
//       alert("Please enter a valid 5-digit verification code.");
//       return;
//     }

//     // Postman ke according payload
//     const payload = {
//       email: email,
//       role: role,
//       otp: otp,
//     };

//     try {
//       const response = await verifyOtpsignup(payload);

//       // Agar response successful hai toh create password page par bhejein
//       if (
//         response?.success ||
//         response?.status === 200 ||
//         response?.code === 200
//       ) {
//         navigate("/teacher/create-password", {
//           state: {
//             email: email,
//             role: role,
//             reset_token: response?.data?.reset_token,
//           },
//         });
//       }
//     } catch (error) {
//       console.error("OTP verification error:", error);
//     }
//   };

//   return (
//     <section className="login-page-section">
//       <div className="login-page-wrapper">
//         <div className="login-left-banner">
//           <img
//             className="login-left-banner-img"
//             src="/images/teacher/login/login-left-img.svg"
//             alt="Group Background Image"
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
//             <div className="login-header-wrapper">
//               <Link
//                 to="/teacher/sign-up"
//                 className="login-back-arrow-btn"
//                 title="Back"
//               >
//                 <img src="/images/teacher/login/left-arrow.svg" alt="Back" />
//               </Link>

//               <div className="login-header-logo-container">
//                 <img
//                   src="/images/teacher/login/logo.svg"
//                   alt="GrantLink NC Logo"
//                   style={{
//                     maxWidth: "180px",
//                     height: "auto",
//                     display: "block",
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="login-form-card">
//               <h3 className="forgot-page-title">Verification Code</h3>
//               <p className="forgot-page-subtitle">
//                 Verify your email address: <strong>{email}</strong>
//               </p>

//               <form onSubmit={handleSubmit} id="otp-form">
//                 <label className="login-input-label">
//                   Enter Verification Code
//                 </label>

//                 <div className="otp-inputs-row" onPaste={handlePaste}>
//                   {otpValues.map((val, idx) => (
//                     <input
//                       key={idx}
//                       ref={(el) => (inputRefs.current[idx] = el)}
//                       type="text"
//                       inputMode="numeric"
//                       className="otp-input-box"
//                       maxLength={1}
//                       value={val}
//                       placeholder="-"
//                       onChange={(e) => handleInputChange(idx, e.target.value)}
//                       onKeyDown={(e) => handleKeyDown(idx, e)}
//                       required
//                     />
//                   ))}
//                 </div>

//                 <button
//                   type="submit"
//                   className="login-submit-btn"
//                   disabled={isVerifysingupLoading}
//                   style={{
//                     cursor: isVerifysingupLoading ? "not-allowed" : "pointer",
//                   }}
//                 >
//                   {isVerifysingupLoading ? "Verifying..." : "Submit"}
//                 </button>

//                 <div className="otp-resend-wrapper">
//                   Didn’t receive code?{" "}
//                   <a href="#" className="otp-resend-link">
//                     Resend Code
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OtpVerification;
