import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useGetAuth from "../../../hooks/global/useGetAuth";
import useAuth from "../../../hooks/global/useAuth";

const Organization = () => {
  const navigate = useNavigate();

  // Mutation and query hooks
  // const { setOrgData, isSubmittingOrg } = useAuth();
  // const { getOrgList, isPendingOrg } = useGetAuth();
  const {
    mapUserLoggedInOrganizationAsync, //submit
    isMappingOrganization,
    getUserSelectedOrganizationAsync, //get
    isLoadingUserSelectedOrganizations,
  } = useAuth();

  const [selectedOrgId, setSelectedOrgId] = useState(null);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const res = await getUserSelectedOrganizationAsync();
        setOrganizations(res?.data || []);
      } catch (error) {
        console.error("Failed to fetch organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  const handleProceed = async (e) => {
    e.preventDefault();

    if (!selectedOrgId) {
      toast.error("Please select an organization to proceed");
      return;
    }

    try {
      // Hitting the API with payload: { organization_id: "selected_org_id" }
      const res = await mapUserLoggedInOrganizationAsync({
        organization_id: selectedOrgId,
      });

      const message = res?.message || "Organization selected successfully.";
      toast.success(message);

      navigate("/teacher/dashboard");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to set organization. Please try again.";
      toast.error(errorMessage);
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
                title="Back"
                onClick={() => {
                  localStorage.clear();
                  sessionStorage.clear();
                }}
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
              <h3 className="login-form-title">Organizations</h3>
              <p className="login-form-subtitle">
                Choose Your Organization to <br />
                access your account
              </p>

              <form onSubmit={handleProceed}>
                <div className="org-list-card">
                  <div className="org-scroll-container">
                    {isLoadingUserSelectedOrganizations ? (
                      <div className="text-center py-4">
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span>Loading organizations...</span>
                      </div>
                    ) : organizations.length > 0 ? (
                      organizations.map((org) => (
                        <label
                          key={org.id}
                          className="org-item-row"
                          htmlFor={`org-${org.id}`}
                          style={{ cursor: "pointer" }}
                        >
                          <p className="org-name-text mb-0">{org.name}</p>
                          <input
                            className="org-radio-input"
                            type="radio"
                            name="selected_org"
                            id={`org-${org.id}`}
                            value={org.id}
                            checked={selectedOrgId === org.id}
                            disabled={isMappingOrganization}
                            onChange={() => setSelectedOrgId(org.id)}
                          />
                        </label>
                      ))
                    ) : (
                      <p className="text-muted text-center py-3 mb-0">
                        No organizations found.
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-submit-btn w-100 border-0 d-flex align-items-center justify-content-center gap-2"
                  disabled={
                    isLoadingUserSelectedOrganizations ||
                    isMappingOrganization ||
                    organizations.length === 0
                  }
                  style={{
                    cursor:
                      isLoadingUserSelectedOrganizations ||
                      isMappingOrganization ||
                      organizations.length === 0
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {isMappingOrganization ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span>Proceeding...</span>
                    </>
                  ) : (
                    "Proceed"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
