import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthSession } from "./ProtectedRoutes";

// Auth Login Screens
import StudentLogin from "../pages/auth/user/UserLogin";
import TeacherLogin from "../pages/auth/teacher/TeacherLogin";

// Role-based Sub-routers
import UserRoutes from "./UserRoutes";
import TeacherRoute from "./TeacherRoute";

// Student Public Route: Agar already logged-in hai toh login form skip karega
const PublicStudentLogin = () => {
  const reduxUserInfo = useSelector((state) => state.user?.userInfo);
  const { token, role } = getAuthSession(reduxUserInfo);

  if (token) {
    if (role === "teacher") return <Navigate to="/teacher/dashboard" replace />;
    return <Navigate to="/student/dashboard" replace />;
  }

  return <StudentLogin />;
};

// Teacher Public Route: Agar already logged-in hai toh login form skip karega
const PublicTeacherLogin = () => {
  const reduxUserInfo = useSelector((state) => state.user?.userInfo);
  const { token, role } = getAuthSession(reduxUserInfo);

  if (token) {
    if (role === "user") return <Navigate to="/student/dashboard" replace />;
    return <Navigate to="/teacher/dashboard" replace />;
  }

  return <TeacherLogin />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Default Landing: '/' directly redirects to '/student' */}
      <Route path="/" element={<Navigate to="/student" replace />} />

      {/* 2. Public Login Endpoints */}
      <Route path="/student" element={<PublicStudentLogin />} />
      <Route path="/teacher" element={<PublicTeacherLogin />} />

      {/* 3. Sub-routers handle all auth & dashboard pages */}
      <Route path="/student/*" element={<UserRoutes />} />
      <Route path="/teacher/*" element={<TeacherRoute />} />

      {/* 4. Catch-all for undefined routes */}
      <Route path="*" element={<Navigate to="/student" replace />} />
    </Routes>
  );
};

export default AppRoutes;
