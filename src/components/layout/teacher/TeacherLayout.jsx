import { Outlet } from "react-router-dom";

import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";

const TeacherLayout = () => {
  return (
    <>
      <TeacherHeader />
      <TeacherSidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default TeacherLayout;