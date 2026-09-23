import { Routes, Route } from "react-router-dom";

import TeacherLayout from "../components/layout/teacher/TeacherLayout";

// import Dashboard from "../pages/teacher/Dashboard";
// import Profile from "../pages/teacher/Profile";
// import Courses from "../pages/teacher/Courses";
// import Students from "../pages/teacher/Students";

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route element={<TeacherLayout />}>
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="students" element={<Students />} /> */}
      </Route>
    </Routes>
  );
};

export default TeacherRoutes;