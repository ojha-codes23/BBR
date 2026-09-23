import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

import UserRoutes from "./UserRoutes";
import TeacherRoute from "./TeacherRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* User Routes */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* Teacher Routes */}
        <Route path="/teacher/*" element={<TeacherRoute />} />

        {/* Default */}
        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;