import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <UserHeader />
      <UserSidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;