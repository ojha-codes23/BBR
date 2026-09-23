import { Routes, Route } from "react-router-dom";

import UserLayout from "../components/layout/user/UserLayout";

// import Dashboard from "../pages/user/Dashboard";
// import Profile from "../pages/user/Profile";
// import Courses from "../pages/user/Courses";
// import Bookings from "../pages/user/Bookings";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="bookings" element={<Bookings />} /> */}
      </Route>
    </Routes>
  );
};

export default UserRoutes;