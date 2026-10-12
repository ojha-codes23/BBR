import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";

const UserLayout = () => {
  return (
    <>
    <div className="gl-dashboard-layout" id="dashboardLayout">
    
      <UserSidebar/>

       <div className="gl-main-content-wrapper">
          <UserHeader />
          <main className="gl-content-body">

           <Outlet />
          </main>
       </div>
    
      </div>
    </>
  );
};

export default UserLayout;