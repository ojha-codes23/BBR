import React from "react";
import { NavLink } from "react-router-dom";

const EventSessionTabs = () => {
  return (
    <div className="glnc-tab-pill-box">

      <NavLink
        to="/teacher/events-sessions/events"
        className={({ isActive }) =>
          `glnc-tab-pill ${isActive ? "active" : ""}`
        }
      >
        Events
      </NavLink>

      <NavLink
        to="/teacher/events-sessions/sessions"
        className={({ isActive }) =>
          `glnc-tab-pill ${isActive ? "active" : ""}`
        }
      >
        Sessions
      </NavLink>

    </div>
  );
};

export default EventSessionTabs;