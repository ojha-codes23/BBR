import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import api, { guestApi } from "../../config/api";
import { KEYS } from "../../config/constant";
import { setAuth, logout as logoutAction } from "../../store/slices/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Shared session handling on login success
  const handleAuthSuccess = (data) => {
    const accessToken = data?.data?.access_token;
    const user = data?.data?.user;

    if (!accessToken) return;

    const sessionPayload = {
      access_token: accessToken,
      token: accessToken,
      user: user,
    };

    localStorage.setItem(KEYS.USER_INFO, JSON.stringify(sessionPayload));

    dispatch(
      setAuth({
        token: accessToken,
        user: user,
      })
    );

    if (user?.role === "teacher") {
      navigate("/teacher/dashboard", { replace: true });
    } else {
      navigate("/student/organization-login", { replace: true });
    }
  };

  // Student Login Mutation
  const {
    mutate: login,
    mutateAsync: loginAsync,
    isPending: isLoggingIn,
    error: loginError,
  } = useMutation({
    mutationFn: async (data) => {
      const response = await guestApi.post("/api/login", data);
      return response.data;
    },
    onSuccess: handleAuthSuccess,
  });

  //student Organization list
  const {
    mutate: getOrganizationList,
    mutateAsync: getOrganizationListAsync,
    isPending: isLoadingOrganizations,
    error: organizationError,
  } = useMutation({
    mutationFn: async (payload = {}) => {
      const response = await guestApi.post("/api/organization-list", payload);
      return response.data;
    },
  });

  // register student
  const {
    mutate: register,
    mutateAsync: registerAsync,
    isPending: isRegistering,
    error: registerError,
  } = useMutation({
    mutationFn: async (formData) => {
      const response = await guestApi.post("/api/register", formData);
      return response.data;
    },
  });

  // user email verification
  const {
    mutate: verifyUserEmail,
    mutateAsync: verifyUserEmailAsync,
    isPending: isVerifyingEmail,
    error: verifyEmailError,
  } = useMutation({
    mutationFn: async (formData) => {
      const response = await guestApi.post(
        "/api/user-email-verification",
        formData
      );

      return response.data;
    },
  });

  // resend otp
  const {
    mutate: resendOtp,
    mutateAsync: resendOtpAsync,
    isPending: isResendingOtp,
    error: resendOtpError,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await guestApi.post("/api/resend-otp", payload);
      return response.data;
    },
  });

  //forget password
  const {
    mutate: forgotPassword,
    mutateAsync: forgotPasswordAsync,
    isPending: isSendingForgotPasswordOtp,
    error: forgotPasswordError,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await guestApi.post("/api/forgot-password", payload);
      return response.data;
    },
  });

  // Forgot Password OTP Verification Mutation
  const {
    mutate: verifyForgotPasswordOtp,
    mutateAsync: verifyForgotPasswordOtpAsync,
    isPending: isVerifyingForgotPasswordOtp,
    error: forgotPasswordOtpError,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await guestApi.post(
        "/api/forgot-password-otp-verify",
        payload
      );

      return response.data;
    },
  });

  //reset password
  const {
    mutate: resetPassword,
    mutateAsync: resetPasswordAsync,
    isPending: isResettingPassword,
    error: resetPasswordError,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await guestApi.post("/api/reset-password", payload);
      return response.data;
    },
  });

  // Student panel: Get selected organizations
  const {
    mutate: getStudentSelectedOrganizations,
    mutateAsync: getStudentSelectedOrganizationsAsync,
    isPending: isLoadingStudentOrganizations,
    error: studentOrganizationsError,
  } = useMutation({
    mutationFn: async (payload = {}) => {
      const response = await api.post(
        "/api/student/user-selected-organization",
        payload
      );

      return response.data;
    },
  });

  // Student panel: Map logged-in student to an organization
  const {
    mutate: mapStudentLoggedInOrganization,
    mutateAsync: mapStudentLoggedInOrganizationAsync,
    isPending: isMappingStudentOrganization,
    error: mapStudentOrganizationError,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(
        "/api/student/user-logged-in-organization",
        payload
      );

      return response.data;
    },
  });

  // user's selected organizations (from registration)
  const {
    mutate: getUserSelectedOrganization,
    mutateAsync: getUserSelectedOrganizationAsync,
    isPending: isLoadingUserSelectedOrganizations,
    error: userSelectedOrganizationError,
  } = useMutation({
    mutationFn: async (payload = {}) => {
      const response = await api.post(
        "/api/teacher/teacher-selected-organization",
        payload
      );
      return response?.data;
    },
  });
  // map user to the organization for login data
  const {
    mutate: mapUserLoggedInOrganization,
    mutateAsync: mapUserLoggedInOrganizationAsync,
    isPending: isMappingOrganization,
    error: mapOrganizationError,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(
        "/api/teacher/teacher-logged-in-organization",
        payload
      );
      return response.data;
    },
  });

  //

  const { mutateAsync: teacherLogout, isPending: isTeacherLogout } =
    useMutation({
      mutationFn: async (payload) => {
        const response = await api.post("/api/teacher/teacher-logout", payload);
        return response.data;
      },
    });

  const { mutateAsync: studentLogout, isPending: isStudentLogout } =
    useMutation({
      mutationFn: async (payload) => {
        const response = await api.post("/api/student/student-logout", payload);
        return response.data;
      },
    });

  const logout = async (payload = {}) => {
    let currentRole = "user";
    try {
      const stored = localStorage.getItem(KEYS.USER_INFO);
      if (stored) {
        currentRole = JSON.parse(stored)?.user?.role || "user";
      }
    } catch {
      // fallback
    }

    try {
      if (currentRole === "teacher") {
        await teacherLogout(payload);
      } else {
        await studentLogout(payload);
      }
    } catch (error) {
      console.error("Logout API failed:", error);
    } finally {
      // Always clear storage and state even if the API throws an error
      localStorage.removeItem(KEYS.USER_INFO);
      sessionStorage.removeItem(KEYS.USER_INFO);

      dispatch(logoutAction());

      navigate(currentRole === "teacher" ? "/teacher" : "/student", {
        replace: true,
      });
    }
  };

  return {
    // Student Exports ========================
    login,
    loginAsync,
    isLoggingIn,
    loginError,

    //get org.
    getOrganizationList,
    getOrganizationListAsync,
    isLoadingOrganizations,
    organizationError,

    //register student
    register,
    registerAsync,
    isRegistering,
    registerError,

    //verify Email
    verifyUserEmail,
    verifyUserEmailAsync,
    isVerifyingEmail,
    verifyEmailError,

    //resend Otp
    resendOtp,
    resendOtpAsync,
    isResendingOtp,
    resendOtpError,

    //forgot password
    forgotPassword,
    forgotPasswordAsync,
    isSendingForgotPasswordOtp,
    forgotPasswordError,

    // Forgot Password OTP Verification
    verifyForgotPasswordOtp,
    verifyForgotPasswordOtpAsync,
    isVerifyingForgotPasswordOtp,
    forgotPasswordOtpError,

    //reset password
    resetPassword,
    resetPasswordAsync,
    isResettingPassword,
    resetPasswordError,

    // Student panel: Organization APIs
    getStudentSelectedOrganizations,
    getStudentSelectedOrganizationsAsync,
    isLoadingStudentOrganizations,
    studentOrganizationsError,
    // map user to the organization for login data
    mapStudentLoggedInOrganization,
    mapStudentLoggedInOrganizationAsync,
    isMappingStudentOrganization,
    mapStudentOrganizationError,

    // user selected organizations
    getUserSelectedOrganization,
    getUserSelectedOrganizationAsync,
    isLoadingUserSelectedOrganizations,
    userSelectedOrganizationError,

    // map user to the organization for login data
    mapUserLoggedInOrganization,
    mapUserLoggedInOrganizationAsync,
    isMappingOrganization,
    mapOrganizationError,

    // Common
    logout,
    teacherLogout,
    studentLogout,
    isTeacherLogout,
    isStudentLogout,
  };
};

export default useAuth;
