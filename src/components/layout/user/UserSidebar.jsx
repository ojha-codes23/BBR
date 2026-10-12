import React from 'react'
import { NavLink } from 'react-router-dom';

const UserSidebar = () => {

   const SidebarItems = [
  {
    title: "Dashboard",
    icon: "/images/user/sidebar/1.svg",
    navigation: "/student/dashboard",
  },
  {
    title: "My Courses",
    icon: "/images/user/sidebar/2.svg",
    navigation: "/student/my-courses",
  },
  {
    title: "My Services",
    icon: "/images/user/sidebar/3.svg",
    navigation: "/student/my-service",
  },
  {
    title: "Events",
    icon: "/images/user/sidebar/4.svg",
    navigation: "/student/event",
  },
  {
    title: "Community",
    icon: "/images/user/sidebar/5.svg",
    navigation: "/student/community",
  },
  {
    title: "Resources",
    icon: "/images/user/sidebar/6.svg",
    navigation: "/student/resource",
  },
  {
    title: "Support & FAQs",
    icon: "/images/user/sidebar/7.svg",
    navigation: "/student/support-faqs",
  },
];
  return (
    <>
        <aside className="gl-sidebar">
          
            <div className="gl-brand-block">
              
                <img src="/images/user/logo.svg" alt="GrantLink NC" className="gl-logo-full"/>
             
                <img src="/images/user/coll-logo.svg" alt="GL" className="gl-logo-collapsed"/>
              
                <button type="button" className="gl-sidebar-toggle gl-sidebar-mobile sidebarToggleBtn">
                    <i className="fa-solid fa-xmark"></i>
                </button>
             
            </div>

          
            {/* <div className="gl-navigation-wrapper">
                <span className="gl-nav-section-title">Navigation</span>
                <ul className="gl-sidebar-menu">
                    <li className="gl-menu-item active">
                        <a href="dashboard.html" className="gl-menu-link">
                            <img src="/images/user/sidebar/1.svg" className="gl-menu-icon" alt=""/>
                            <span className="gl-menu-text">Dashboard</span>
                        </a>
                    </li>
                    <li className="gl-menu-item">
                        <a href="my-courses.html" className="gl-menu-link">
                            <img src="/images/user/sidebar/2.svg" className="gl-menu-icon" alt=""/>
                            <span className="gl-menu-text">My Courses</span>
                        </a>
                    </li>
                    <li className="gl-menu-item">
                        <a href="my-services.html" className="gl-menu-link">
                            <img src="/images/user/sidebar/3.svg" className="gl-menu-icon" alt=""/>
                            <span className="gl-menu-text">My Services</span>
                        </a>
                    </li>
                    <li className="gl-menu-item">
                        <a href="events.html" className="gl-menu-link">
                            <img src="/images/user/sidebar/4.svg" className="gl-menu-icon" alt=""/>
                            <span className="gl-menu-text">Events</span>
                        </a>
                    </li>
                    <li className="gl-menu-item">
                        <a href="community.html" className="gl-menu-link">
                            <img src="/images/user/sidebar/5.svg" className="gl-menu-icon" alt=""/>
                            <span className="gl-menu-text">Community</span>
                        </a>
                    </li>
                    <li className="gl-menu-item">
                        <a href="resources.html" className="gl-menu-link">
                            <img src="/images/user/sidebar/6.svg" className="gl-menu-icon" alt=""/>
                            <span className="gl-menu-text">Resources</span>
                        </a>
                    </li>
                    <li className="gl-menu-item">
                        <a href="support-faqs.html" className="gl-menu-link">
                            <img src="/images/user/sidebar/7.svg" className="gl-menu-icon" alt=""/>
                            <span className="gl-menu-text">Support & FAQs</span>
                        </a>
                    </li>

                </ul>
            </div> */}


            <div className="gl-navigation-wrapper">
                <span className="gl-nav-section-title">Navigation</span>

                <ul className="gl-sidebar-menu">
                    {SidebarItems.map((item) => (
                    <li key={item.navigation} className="gl-menu-item">
                        <NavLink
                        to={item.navigation}
                        className={({ isActive }) =>
                            `gl-menu-link ${isActive ? "active" : ""}`
                        }
                        >
                        <img
                            src={item.icon}
                            className="gl-menu-icon"
                            alt={item.title}
                        />

                        <span className="gl-menu-text">
                            {item.title}
                        </span>
                        </NavLink>
                    </li>
                    ))}
                </ul>
                </div>
            


        </aside>

    </>
  )
}

export default UserSidebar
