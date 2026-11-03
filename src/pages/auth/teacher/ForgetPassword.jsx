import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/global/useAuth";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgotPasswordAsync, isSendingForgotPasswordOtp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      role: "teacher",
    };

    try {
      if (forgotPasswordAsync) {
        const res = await forgotPasswordAsync(payload);
        toast.success(res?.message || "Verification code sent to your email!");

        // Response me se OTP extract karein (agar backend OTP return kar raha ho)
        const receivedOtp = res?.data?.otp || res?.otp || "";

        // Next screen ko email, role, aur otp bhejein
        navigate("/teacher/otp-verification", {
          state: {
            email: data.email,
            role: "teacher",
            otp: receivedOtp,
          },
        });
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to send verification code. Please try again."
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
                to="/teacher"
                className="login-back-arrow-btn"
                title="Back to Login"
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
              <h3 className="forgot-page-title">Forgot Password</h3>
              <p className="forgot-page-subtitle">Verify your email address</p>

              <form onSubmit={handleSubmit(onSubmit)}>
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

                <button
                  type="submit"
                  className="login-submit-btn"
                  disabled={isSendingForgotPasswordOtp}
                  style={{
                    cursor: isSendingForgotPasswordOtp
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  {isSendingForgotPasswordOtp ? "Sending Code..." : "Verify"}
                </button>

                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <Link to="/teacher" className="login-signup-link">
                    Log in
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

export default ForgetPassword;
