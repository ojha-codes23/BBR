import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/global/useAuth";
import toast from "react-hot-toast";

const CreatePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Location state se email aur otp receive karein
  const {
    email = "",
    otp = "",
    reset_token = "",
    role = "",
  } = location.state || {};

  console.log(email, otp, reset_token, role, "REsponse of the data");

  const { resetPasswordAsync, isResettingPassword } = useAuth();

  // State for show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Safety check: Agar email ya OTP missing ho toh back redirect karein
  //   useEffect(() => {
  //     if (!email) {
  //       navigate("/teacher/forget-password", { replace: true });
  //     }
  //   }, [email, navigate]);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
    mode: "onTouched",
  });

  const passwordVal = watch("new_password");

  // Form submit handler
  const onSubmit = async (data) => {
    // Postman payload structure: email, otp, new_password
    const payload = {
      email: email,
      new_password: data.new_password,
      role: role,
      reset_token: reset_token,
    };

    try {
      if (resetPasswordAsync) {
        const res = await resetPasswordAsync(payload);
        toast.success(res?.message || "Password changed successfully!");
        setShowSuccessModal(true);
      }
    } catch (err) {
      console.error("Password reset failed:", err);
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to reset password. Please try again."
      );
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigate("/teacher", { replace: true });
  };

  return (
    <>
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
                  to="/teacher/otp-verification"
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

              <div className="login-form-card gl-auth-mt-fix">
                <h3 className="login-form-title">Create Password</h3>
                <p className="login-form-subtitle">
                  Create a new password for <strong>{email}</strong>
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* New Password */}
                  <div className="login-form-group">
                    <label className="login-input-label">Create Password</label>
                    <div className="login-input-field-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="login-input-control"
                        placeholder="Enter your password"
                        {...register("new_password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                      <div
                        className="login-password-eye-icon gl-eye-trigger"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={
                            showPassword
                              ? "/images/teacher/login/eye-open.svg"
                              : "/images/teacher/login/eye-close.svg"
                          }
                          alt="Toggle Password visibility"
                          className="gl-eye-img-switch"
                        />
                      </div>
                    </div>
                    {errors.new_password && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          display: "block",
                        }}
                      >
                        {errors.new_password.message}
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
                        className="login-input-control"
                        placeholder="Re-enter Password"
                        {...register("confirm_password", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === passwordVal || "Passwords do not match",
                        })}
                      />
                      <div
                        className="login-password-eye-icon gl-eye-trigger"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={
                            showConfirmPassword
                              ? "/images/teacher/login/eye-open.svg"
                              : "/images/teacher/login/eye-close.svg"
                          }
                          alt="Toggle Password visibility"
                          className="gl-eye-img-switch"
                        />
                      </div>
                    </div>
                    {errors.confirm_password && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          display: "block",
                        }}
                      >
                        {errors.confirm_password.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="login-submit-btn gl-auth-btn-blue-tone"
                    disabled={isResettingPassword}
                    style={{
                      cursor: isResettingPassword ? "not-allowed" : "pointer",
                      marginTop: "16px",
                    }}
                  >
                    {isResettingPassword ? "Updating..." : "Create Password"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Congratulations Modal */}
      {showSuccessModal && (
        <div
          className="modal fade show gl-custom-modal-wrapper"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content gl-modal-main-box">
              <div className="gl-modal-header-action">
                <button
                  type="button"
                  className="gl-modal-close-trigger"
                  onClick={handleModalClose}
                  aria-label="Close"
                >
                  <img
                    src="/images/teacher/login/cross-icon-modal.svg"
                    alt="Close"
                  />
                </button>
              </div>

              <div className="modal-body gl-modal-core-body">
                <div className="gl-modal-success-badge">
                  <img
                    src="/images/teacher/login/modal-head-check-icon.svg"
                    alt="Success"
                  />
                </div>

                <h2 className="gl-modal-feedback-title">Congratulations</h2>

                <p className="gl-modal-feedback-subtitle">
                  Your password has been changed successfully
                </p>

                <button
                  type="button"
                  className="gl-modal-confirm-action-btn"
                  onClick={handleModalClose}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePassword;
