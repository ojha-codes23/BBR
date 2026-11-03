import React, { useState } from "react";
import toast from "react-hot-toast";
import useStudentProfile from "../../../hooks/user/useStudentProfile";
import DeactivateAccount from "../../../components/user/profile/DeactivateAccount";

const SecurityTab = ({isEditing = false}) => {
  const {
    changeStudentPasswordAsync,
    isChangingStudentPassword,
  } = useStudentProfile();

  const [passwords, setPasswords] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    old_password: false,
    new_password: false,
    confirm_password: false,
  });

  // Handle password input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setPasswords((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Show or hide individual password fields
  const togglePasswordVisibility = (field) => {
    setShowPasswords((previous) => ({
      ...previous,
      [field]: !previous[field],
    }));
  };

  // Validate fields and call the API
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !passwords.old_password.trim() ||
      !passwords.new_password.trim() ||
      !passwords.confirm_password.trim()
    ) {
      toast.error("Please fill in all password fields.");
      return;
    }

    if (passwords.new_password !== passwords.confirm_password) {
      toast.error("New password and confirmation do not match.");
      return;
    }

    if (passwords.old_password === passwords.new_password) {
      toast.error("New password must be different from the old password.");
      return;
    }

    // Create FormData here, not inside the API hook
    const formData = new FormData();
    formData.append("old_password", passwords.old_password);
    formData.append("new_password", passwords.new_password);

    try {
      const response = await changeStudentPasswordAsync(formData);

      if (response?.success === false) {
        toast.error(response.message || "Unable to change password.");
        return;
      }

      toast.success(
        response?.message || "Password changed successfully."
      );

      // Clear the fields after successful password change
      setPasswords({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });

      setShowPasswords({
        old_password: false,
        new_password: false,
        confirm_password: false,
      });
    } catch (error) {
      toast.error(
        error?.message ||
        error?.data?.message ||
        "Unable to change password. Please try again."
      );
    }
  };

  // Reusable password field with the same eye icons as UserLogin
  const renderPasswordField = (name, label, placeholder, autoComplete) => (
    <div className="gl-security-input-field-block" key={name}>
      <label className="gl-native-field-label" htmlFor={name}>
        {label}
      </label>

      <div className="gl-input-with-icon-left-wrapper gl-security-password-wrapper">
        <span className="gl-field-leading-icon" aria-hidden="true">
          🔒
        </span>

        <input
          id={name}
          name={name}
          type={showPasswords[name] ? "text" : "password"}
          className="gl-security-native-input"
          placeholder={placeholder}
          value={passwords[name]}
          onChange={handleChange}
          autoComplete={autoComplete}
          disabled={!isEditing || isChangingStudentPassword}
          required
        />

        <button
          type="button"
          className="gl-security-password-eye"
          onClick={() => togglePasswordVisibility(name)}
          disabled={!isEditing || isChangingStudentPassword}
          aria-label={showPasswords[name] ? "Hide password" : "Show password"}
          aria-pressed={showPasswords[name]}
        >
          <img
            src={
              showPasswords[name]
                ? "/images/user/login/eye-open.svg"
                : "/images/user/login/eye-close.svg"
            }
            alt=""
          />
        </button>
      </div>
    </div>
  );

  return (

    <>

      <div className="tab-pane fade show active">
        <div className="gl-security-settings-master-container">
          {/* ================= SECURITY SETTINGS HEADER ================= */}
          <div className="gl-security-dashboard-header">
            <span className="gl-security-lock-vector">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#006699"
                strokeWidth="2.5"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>

            <h2 className="gl-main-section-heading">Security Settings</h2>
          </div>

          {/* ================= CHANGE PASSWORD CARD ================= */}
          <div className="gl-security-subcard-wrapper">
            <div className="gl-accordion-header-trigger-row">
              <div className="gl-text-content-stack">
                <h3 className="gl-subcard-bold-title">Change Password</h3>

                <p className="gl-subcard-description-text">
                  Update your password to keep your account secure.
                </p>
              </div>

              <span className="gl-accordion-caret-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#006699"
                  strokeWidth="3"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>

            <form
              className="gl-password-change-native-form"
              onSubmit={handleSubmit}
            >
              {renderPasswordField(
                "old_password",
                "Current Password",
                "Enter current password",
                "current-password"
              )}

              {renderPasswordField(
                "new_password",
                "New Password",
                "Enter new password",
                "new-password"
              )}

              {renderPasswordField(
                "confirm_password",
                "Confirm New Password",
                "Confirm new password",
                "new-password"
              )}

{isEditing && (
              <div className="gl-form-action-btn-row">
                <button
                  type="submit"
                  className="gl-btn-security-primary-action"
                  disabled={isChangingStudentPassword}
                  style={{
                    cursor: isChangingStudentPassword ? "not-allowed" : "pointer",
                  }}
                >
                  {isChangingStudentPassword
                    ? "Updating Password..."
                    : "Update Password"}
                </button>
              </div>
)}
            </form>
          </div>

          {/* ================= DEACTIVATE ACCOUNT CARD ================= */}
          <div className="gl-security-subcard-wrapper is-danger-zone-layout">
            <div className="gl-text-content-stack">
              <h3 className="gl-subcard-bold-title">Deactivate Account</h3>

              <p className="gl-subcard-description-text">
                Deactivating your account will permanently remove your data.
                You'll need to sign up again if you want to return.
              </p>
            </div>

            <div className="gl-danger-action-button-wrapper">
              {/* <a
                href="#deactivateAccountModal"
                className="gl-btn-security-danger-action"
              >
                Deactivate Account
              </a> */}

              <button
                type="button"
                className="gl-btn-security-danger-action"
                data-bs-toggle="modal"
                data-bs-target="#deactivateAccountModal"
              >
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </div>

      <DeactivateAccount />

    </>
  );
};

export default SecurityTab;