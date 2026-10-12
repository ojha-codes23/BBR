import {useState} from "react";
import { Outlet } from "react-router-dom";

import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";

const TeacherLayout = () => {
  const [isSidebarMini, setIsSidebarMini] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarMini((previous) => !previous);
  }
  return (
    <>

      <div className={`gl-dashboard-layout ${
        isSidebarMini ? "mini-sidebar" : ""
      }`} id="dashboardLayout">

        <TeacherSidebar />

        <div className="gl-main-content-wrapper">

          <TeacherHeader onSidebarToggle={handleSidebarToggle} />

          
          <Outlet />

        </div>

      </div>
    </>
  );
};

export default TeacherLayout;