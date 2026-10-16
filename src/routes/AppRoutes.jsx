import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthSession } from "./ProtectedRoutes";

// Distinct Auth Screens
import StudentLogin from "../pages/auth/user/UserLogin";
import TeacherLogin from "../pages/auth/teacher/TeacherLogin";

// Student Public Auth Pages
import Register from "../pages/auth/user/Register";
import ForgotPassword from "../pages/auth/user/ForgotPassword";
import VerifyPasswordOtp from "../pages/auth/user/VerifyPasswordOtp";
import CreatePassword from "../pages/auth/user/CreatePassword";
import OrganizationLogin from "../pages/auth/user/OrganizationLogin";

// Role-based Sub-routers
import UserRoutes from "./UserRoutes";
import TeacherRoute from "./TeacherRoute";

/**
 * Public Route Guards to automatically redirect logged-in users away from login pages
 */
const PublicStudentLogin = () => {
  const reduxUserInfo = useSelector((state) => state.user?.userInfo);
  const { token, role } = getAuthSession(reduxUserInfo);

  if (token) {
    if (role === "teacher") return <Navigate to="/teacher/dashboard" replace />;
    return <Navigate to="/student/dashboard" replace />;
  }

  return <StudentLogin />;
};

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
      {/* 1. Default Landing: Redirect first-time visitors from '/' to '/student' */}
      <Route path="/" element={<Navigate to="/student" replace />} />
      <Route index element={<Navigate to="/student" replace />} />

      {/* 2. Distinct Student & Teacher Login Screens */}
      <Route path="/student" element={<PublicStudentLogin />} />
      <Route path="/teacher" element={<PublicTeacherLogin />} />

      {/* 3. Common Public Auth Routes */}
      <Route path="/sign-up" element={<Register />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyPasswordOtp />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/organization-login" element={<OrganizationLogin />} />

      {/* 4. Role-specific Sub-routers */}
      <Route path="/student/*" element={<UserRoutes />} />
      <Route path="/teacher/*" element={<TeacherRoute />} />

      {/* 5. Catch-all: Redirect unknown routes to '/student' */}
      <Route path="*" element={<Navigate to="/student" replace />} />
    </Routes>
  );
};

export default AppRoutes;



// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getAuthSession } from "./ProtectedRoutes";
 
// // Distinct Auth Screens
// import StudentLogin from "../pages/auth/user/UserLogin";
// import TeacherLogin from "../pages/auth/teacher/TeacherLogin";
 
// // Role-based Sub-routers
// import UserRoutes from "./UserRoutes";
// import TeacherRoute from "./TeacherRoute";
 
// const PublicStudentLogin = () => {
//   const reduxUserInfo = useSelector((state) => state.user?.userInfo);
//   const { token, role } = getAuthSession(reduxUserInfo);
 
//   if (token) {
//     if (role === "teacher") return <Navigate to="/teacher/dashboard" replace />;
//     return <Navigate to="/student/dashboard" replace />;
//   }
 
//   return <StudentLogin />;
// };
 
// const PublicTeacherLogin = () => {
//   const reduxUserInfo = useSelector((state) => state.user?.userInfo);
//   const { token, role } = getAuthSession(reduxUserInfo);
 
//   if (token) {
//     if (role === "user") return <Navigate to="/student/dashboard" replace />;
//     return <Navigate to="/teacher/dashboard" replace />;
//   }
 
//   return <TeacherLogin />;
// };
 
// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* 1. Default Landing: '/' directly redirects to '/student' */}
//       <Route path="/" element={<Navigate to="/student" replace />} />
//       <Route index element={<Navigate to="/student" replace />} />
 
//       {/* 2. Login Endpoints */}
//       <Route path="/student" element={<PublicStudentLogin />} />
//       <Route path="/teacher" element={<PublicTeacherLogin />} />
 
//       {/* 3. Sub-routers handle all auth & dashboard pages */}
//       <Route path="/student/*" element={<UserRoutes />} />
//       <Route path="/teacher/*" element={<TeacherRoute />} />
 
//       {/* 4. Catch-all for undefined routes */}
//       <Route path="*" element={<Navigate to="/student" replace />} />
//     </Routes>
//   );
// };
 
// export default AppRoutes;
