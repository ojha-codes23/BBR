import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

import TeacherLayout from "../components/layout/teacher/TeacherLayout";
import Dashboard from "../pages/teacher/Dashboard";
import Requests from "../pages/teacher/Requests";
import Notification from "../pages/teacher/Notification";
import MyProfile from "../pages/teacher/MyProfile";
import ActiveService from "../pages/teacher/ActiveService";
import SowContract from "../pages/teacher/SowContract";
import RequestDetail from "../pages/teacher/RequestDetail";
import UserProfile from "../pages/teacher/UserProfile";
import SowCallDiscussion from "../pages/teacher/SowCallDiscussion";
import SowCreateForm from "../pages/teacher/SowCreateForm";
import SowApproval from "../pages/teacher/SowApproval";
import CreateNewTemplate from "../pages/teacher/CreateNewTemplate";
import SowDrafts from "../pages/teacher/SowDrafts";
import SowSignature from "../pages/teacher/SowSignature";
import SowPayment from "../pages/teacher/SowPayment";
import ActiveServiceDetails from "../pages/teacher/ActiveServiceDetails";
import ReviewRatings from "../pages/teacher/ReviewRatings";
import HourDeliverables from "../pages/teacher/HourDeliverables";
import NotificationSettings from "../pages/teacher/NotificationSettings";
import Payments from "../pages/teacher/Payments";
import Calendar from "../pages/teacher/Calendar";
import HelpAndSupport from "../pages/teacher/HelpAndSupport";
import Events from "../pages/teacher/eventSession/Events";
import Sessions from "../pages/teacher/eventSession/Sessions";
import SessionDetail from "../pages/teacher/SessionDetail";
import EventDetail from "../pages/teacher/EventDetail";
import CourseManagement from "../pages/teacher/CourseManagement";
import CourseModules from "../pages/teacher/CourseModules";
import CourseModule2Publish from "../pages/teacher/CourseModule2Publish";
import Community from "../pages/teacher/Community";
import Register from "../pages/auth/teacher/Register";
import Organization from "../pages/auth/teacher/Organization";
import ForgetPassword from "../pages/auth/teacher/ForgetPassword";
import OtpVerification from "../pages/auth/teacher/OtpVerification";
import CreatePassword from "../pages/auth/teacher/CreatePassword";

const TeacherRoute = () => {
  return (
    <Routes>
      {/* Public Teacher Auth Routes */}
      <Route path="sign-up" element={<Register />} />
      <Route path="organization" element={<Organization />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="otp-verification" element={<OtpVerification />} />
      <Route path="create-password" element={<CreatePassword />} />

      {/* Protected Teacher Routes */}
      <Route
        element={
          <ProtectedRoutes allowedRoles={["teacher"]} redirectPath="/teacher" />
        }
      >
        <Route element={<TeacherLayout />}>
          {/* Default child hit hone par dashboard redirect */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="notification" element={<Notification />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="requests" element={<Requests />} />
          <Route path="request-details" element={<RequestDetail />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="active-services" element={<ActiveService />} />
          <Route path="sow-contract" element={<SowContract />} />
          <Route path="sow-call-discussion" element={<SowCallDiscussion />} />
          <Route path="sow-create-form" element={<SowCreateForm />} />
          <Route path="sow-approval" element={<SowApproval />} />
          <Route path="sow-signature" element={<SowSignature />} />
          <Route path="sow-payment" element={<SowPayment />} />
          <Route path="create-template" element={<CreateNewTemplate />} />
          <Route
            path="active-service-detail"
            element={<ActiveServiceDetails />}
          />
          <Route path="draft" element={<SowDrafts />} />
          <Route path="review-ratings" element={<ReviewRatings />} />
          <Route path="hours-deliverables" element={<HourDeliverables />} />
          <Route
            path="notification-settings"
            element={<NotificationSettings />}
          />
          <Route path="payments" element={<Payments />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="support" element={<HelpAndSupport />} />

          <Route path="events-sessions">
            <Route index element={<Navigate to="events" replace />} />
            <Route path="events" element={<Events />} />
            <Route path="sessions" element={<Sessions />} />
          </Route>

          <Route path="session-detail" element={<SessionDetail />} />
          <Route path="event-detail" element={<EventDetail />} />
          <Route path="course-management" element={<CourseManagement />} />
          <Route path="course-modules" element={<CourseModules />} />
          <Route
            path="course-modules-publish"
            element={<CourseModule2Publish />}
          />
          <Route path="community" element={<Community />} />

          {/* TeacherRoute ke andar undefined routes dashboard par fallback honge */}
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default TeacherRoute;
