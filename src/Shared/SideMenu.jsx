import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();

  const isMenuItemActive = (path) => {
    return location.pathname === path;
  };

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bglg h-full rounded-md p-6 flex flex-col font-bold gap-6 text-white">
      <div
        onClick={handleClick("/dashboard")}
        className={
          isMenuItemActive("/dashboard")
            ? `p-2 bdr bg-white text-black text-center`
            : "p-2 bdr  text-center"
        }
      >
        Dashboard
      </div>
      <div
        onClick={handleClick("/projects")}
        className={
          isMenuItemActive("/projects")
            ? `p-2 bdr bg-white text-black text-center`
            : "p-2 bdr  text-center"
        }
      >
        Projects
      </div>
      <div
        className={
          isMenuItemActive("/activities")
            ? `p-2 bdr bg-white text-black text-center`
            : "p-2 bdr  text-center"
        }
      >
        Activities
      </div>
      <div
        className={
          isMenuItemActive("/attendance")
            ? `p-2 bdr bg-white text-black text-center`
            : "p-2 bdr  text-center"
        }
      >
        Attendance
      </div>
      <div
        className={
          isMenuItemActive("/reports")
            ? `p-2 bdr bg-white text-black text-center`
            : "p-2 bdr  text-center"
        }
      >
        Reports
      </div>
      <div
        className={
          isMenuItemActive("/settings")
            ? `p-2 bdr bg-white text-black text-center`
            : "p-2 bdr  text-center"
        }
      >
        Settings
      </div>

      <div
        className={
          isMenuItemActive("/")
            ? `p-2 bdr bg-white text-black text-center`
            : "p-2 bdr  text-center"
        }
      >
        Logout
      </div>
    </div>
  );
}

export default SideMenu;
