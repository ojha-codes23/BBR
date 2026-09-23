import { Outlet } from "react-router-dom";

import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
import TeacherFooter from "./TeacherFooter";

const TeacherLayout = () => {
  return (
    <>
      <TeacherHeader />
      <TeacherSidebar />

      <main>
        <Outlet />
      </main>

      <TeacherFooter />
    </>
  );
};

export default TeacherLayout;