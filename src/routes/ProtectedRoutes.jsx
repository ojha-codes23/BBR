import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { KEYS } from "../config/constant";

/**
 * Redux store ya Local/Session storage se auth session extract karta hai
 */
export const getAuthSession = (reduxUser) => {
  // 1. Check Redux state
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

const ProtectedRoutes = ({ allowedRoles = [], redirectPath }) => {
  const location = useLocation();
  const reduxUserInfo = useSelector((state) => state.user?.userInfo);
  const { token, role } = getAuthSession(reduxUserInfo);

  const defaultRedirect = allowedRoles.includes("teacher")
    ? "/teacher"
    : "/student";
  const targetRedirect = redirectPath || defaultRedirect;

  // 1. Agar logged in nahi hai -> Login page bhejo (with return state)
  if (!token) {
    return <Navigate to={targetRedirect} state={{ from: location }} replace />;
  }

  // 2. Logged in hai par role unauthorized hai -> User ko uske sahi dashboard bhejo
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    if (role === "teacher") {
      return <Navigate to="/teacher/dashboard" replace />;
    }
    if (role === "user") {
      return <Navigate to="/student/dashboard" replace />;
    }
    return <Navigate to="/student" replace />;
  }

  // 3. Authorized -> Nested routes render karo
  return <Outlet />;
};

export default ProtectedRoutes;
