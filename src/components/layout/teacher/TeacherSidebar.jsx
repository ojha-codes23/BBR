// import React from "react";
// import { NavLink } from "react-router-dom";

// const TeacherSidebar = () => {
//   return (
//     <aside className="gl-sidebar">

//       {/* Logo Block */}
//       <div className="gl-brand-block">
//         <img
//           src="/images/teacher/logo.svg"
//           alt="GrantLink NC"
//           className="gl-logo-full"
//         />

//         <img
//           src="/images/teacher/coll-logo.svg"
//           alt="GL"
//           className="gl-logo-collapsed"
//         />
//       </div>

//       {/* Navigation Menu */}
//       <div className="gl-navigation-wrapper">
//         <span className="gl-nav-section-title">Navigation</span>

//         <ul className="gl-sidebar-menu">

//           {/* Dashboard */}
//           <NavLink
//             to="/teacher/dashboard"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/1.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">Dashboard</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* View Requests */}
//           <NavLink
//             to="/teacher/requests"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/7.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">View Requests</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* Active Services */}
//           <NavLink
//             to="/teacher/active-services"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/21.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">Active Services</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* SOW & Contract */}
//           <NavLink
//             to="/teacher/sow-contract"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/13.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">SOW & Contract</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* Hours & Deliverables */}
//           <NavLink
//             to="/teacher/hours-deliverables"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/12.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">
//                     Hours & Deliverables
//                   </span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* My Calendar */}
//           <NavLink
//             to="/teacher/calendar"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/22.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">My Calendar</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* Courses */}
//           <NavLink
//             to="/teacher/courses"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/6.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">Courses</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* Events & Sessions */}
//           <NavLink
//             to="/teacher/events-sessions"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/23.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">Events & Sessions</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* Community Space */}
//           <NavLink
//             to="/teacher/community"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/11.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">Community Space</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* Payments */}
//           <NavLink
//             to="/teacher/payments"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/24.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">Payments</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//           {/* Support & FAQs */}
//           <NavLink
//             to="/teacher/support"
//             className="gl-menu-item"
//           >
//             {({ isActive }) => (
//               <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
//                 <span className="gl-menu-link">
//                   <img
//                     src="/images/teacher/sidebar/20.svg"
//                     className="gl-menu-icon"
//                     alt=""
//                   />
//                   <span className="gl-menu-text">Support & FAQs</span>
//                 </span>
//               </li>
//             )}
//           </NavLink>

//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default TeacherSidebar;



import React from "react";
import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {
  const menuItems = [
    { to: "/teacher/dashboard", icon: "1.svg", label: "Dashboard" },
    { to: "/teacher/requests", icon: "7.svg", label: "View Requests" },
    { to: "/teacher/active-services", icon: "21.svg", label: "Active Services" },
    { to: "/teacher/sow-contract", icon: "13.svg", label: "SOW & Contract" },
    { to: "/teacher/hours-deliverables", icon: "12.svg", label: "Hours & Deliverables" },
    { to: "/teacher/calendar", icon: "22.svg", label: "My Calendar" },
    { to: "/teacher/course-management", icon: "6.svg", label: "Courses" },
    { to: "/teacher/events-sessions", icon: "23.svg", label: "Events & Sessions" },
    { to: "/teacher/community", icon: "11.svg", label: "Community Space" },
    { to: "/teacher/payments", icon: "24.svg", label: "Payments" },
    { to: "/teacher/support", icon: "20.svg", label: "Support & FAQs" },
  ];

  return (
    <aside className="gl-sidebar">
      {/* Logo Block */}
      <div className="gl-brand-block">
        <img
          src="/images/teacher/logo.svg"
          alt="GrantLink NC"
          className="gl-logo-full"
        />
        <img
          src="/images/teacher/coll-logo.svg"
          alt="GL"
          className="gl-logo-collapsed"
        />
      </div>

      {/* Navigation Menu */}
      <div className="gl-navigation-wrapper">
        <span className="gl-nav-section-title">Navigation</span>

        <ul className="gl-sidebar-menu">
          {menuItems.map((item) => (
            <NavLink key={item.to} to={item.to} style={{ textDecoration: 'none' }}>
              {({ isActive }) => (
                <li className={`gl-menu-item ${isActive ? "active" : ""}`}>
                  <span className="gl-menu-link">
                    <img
                      src={`/images/teacher/sidebar/${item.icon}`}
                      className="gl-menu-icon"
                      alt=""
                    />
                    <span className="gl-menu-text">{item.label}</span>
                  </span>
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TeacherSidebar;