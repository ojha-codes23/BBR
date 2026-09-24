import { Routes, Route } from "react-router-dom";

import UserLayout from "../components/layout/user/UserLayout";
import UserLogin from "../pages/auth/user/UserLogin";
import Register from "../pages/auth/user/Register";
import ForgotPassword from "../pages/auth/user/ForgotPassword";
import VerifyPasswordOtp from "../pages/auth/user/VerifyPasswordOtp";
import CreatePassword from "../pages/auth/user/CreatePassword";


const UserRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<UserLogin />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="forget-password" element={<ForgotPassword />} /> 
        <Route path="verify-otp" element={<VerifyPasswordOtp />} /> 
        <Route path="create-password" element={<CreatePassword/>} /> 


      <Route element={<UserLayout />}>
        {/* <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="bookings" element={<Bookings />} /> */}
      </Route>
    </Routes>
  );
};

export default UserRoutes;