import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();

  const isMenuItemActive = (path) => {
    return location.pathname === path;
  };

  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log("path", path);
    navigate(path);
  };

  return (
    <div className="bglg h-full rounded-md p-6 flex flex-col font-bold gap-6 text-white">
      <div
        className={
          isMenuItemActive("/dashboard")
            ? `p-2 bdr bg-white cursor-pointer text-black text-center`
            : "p-2 bdr cursor-pointer hover:text-black hover:bg-white text-center"
        }
        onClick={() => handleClick("/dashboard")}
      >
        Dashboard
      </div>
      <div
        className={
          isMenuItemActive("/projects")
            ? `p-2 bdr cursor-pointer bg-white text-black text-center`
            : "p-2 bdr cursor-pointer hover:text-black hover:bg-white text-center"
        }
        onClick={() => handleClick("/projects")}
      >
        Projects
      </div>
      <div
        className={
          isMenuItemActive("/activities")
            ? `p-2 bdr cursor-pointer bg-white text-black text-center`
            : "p-2 bdr cursor-pointer hover:text-black hover:bg-white text-center"
        }
        onClick={() => handleClick("/activities")}
      >
        Activities
      </div>
      <div
        onClick={() => handleClick("/attendance")}
        className={
          isMenuItemActive("/attendance")
            ? `p-2 bdr cursor-pointer bg-white text-black text-center`
            : "p-2 bdr cursor-pointer hover:text-black hover:bg-white text-center"
        }
      >
        Attendance
      </div>
      <div
        onClick={() => handleClick("/reports")}
        className={
          isMenuItemActive("/reports")
            ? `p-2 bdr cursor-pointer bg-white text-black text-center`
            : "p-2 bdr cursor-pointer hover:text-black hover:bg-white text-center"
        }
      >
        Reports
      </div>
      <div
        onClick={() => handleClick("/settings")}
        className={
          isMenuItemActive("/settings")
            ? `p-2 bdr cursor-pointer bg-white text-black text-center`
            : "p-2 bdr cursor-pointer hover:text-black hover:bg-white text-center"
        }
      >
        Settings
      </div>

      <div
        onClick={() => handleClick("/")}
        className={
          isMenuItemActive("/")
            ? `p-2 bdr cursor-pointer bg-white text-black text-center`
            : "p-2 bdr cursor-pointer hover:text-black hover:bg-white text-center"
        }
      >
        Logout
      </div>
    </div>
  );
}

export default SideMenu;
