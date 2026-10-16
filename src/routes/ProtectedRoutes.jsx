import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { KEYS } from "../config/constant";

/**
 * Extracts auth credentials from Redux store or Web Storage (Local / Session)
 */
export const getAuthSession = (reduxUser) => {
  // 1. Try Redux state first
  if (reduxUser?.access_token || reduxUser?.token) {
    return {
      token: reduxUser.access_token || reduxUser.token,
      role: reduxUser.user?.role || reduxUser.role,
    };
  }

  // 2. Fallback to localStorage or sessionStorage
  const storedData =
    localStorage.getItem(KEYS.USER_INFO) ||
    sessionStorage.getItem(KEYS.USER_INFO);

  if (storedData) {
    try {
      const parsed = JSON.parse(storedData);
      const authPayload = parsed?.data || parsed;

      return {
        token: authPayload?.access_token || authPayload?.token || null,
        role: authPayload?.user?.role || authPayload?.role || null,
      };
    } catch (err) {
      console.error("Failed to parse auth token from storage", err);
    }
  }

  return { token: null, role: null };
};

/**
 * Route Guard Component
 * @param {Array<string>} allowedRoles - e.g., ['user'] or ['teacher']
 * @param {string} redirectPath - Where to redirect if unauthenticated
 */
const ProtectedRoutes = ({ allowedRoles = [], redirectPath }) => {
  const location = useLocation();
  const reduxUserInfo = useSelector((state) => state.user?.userInfo);

  const { token, role } = getAuthSession(reduxUserInfo);

  const defaultRedirect = allowedRoles.includes("teacher") ? "/teacher" : "/student";
  const targetRedirect = redirectPath || defaultRedirect;

  // 1. Not logged in -> redirect to login with return path saved in location state
  if (!token) {
    return <Navigate to={targetRedirect} state={{ from: location }} replace />;
  }

  // 2. Logged in, but unauthorized for this specific role
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    if (role === "teacher") {
      return <Navigate to="/teacher/dashboard" replace />;
    }
    if (role === "user") {
      return <Navigate to="/student/dashboard" replace />;
    }
    return <Navigate to="/student" replace />;
  }

  // 3. Authorized -> render nested route tree
  return <Outlet />;
};

export default ProtectedRoutes;
