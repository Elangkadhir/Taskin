import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from "./AppRoutes";
import Dashboard from '../Components/Dashboard/index';
import Projects from "../Components/Projects";
import Activities from "../Components/Activities";
import Attendance from "../Components/Attendance";
import Settings from "../Components/Settings";
import Reports from "../Components/Reports";
import Login from "../Components/Authentication";


function PageRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={APP_ROUTES.PROJECTS} element={<Projects />} />
        <Route path={APP_ROUTES.ACTIVITIES} element={<Activities />} />
        <Route path={APP_ROUTES.ATTENDANCE} element={<Attendance />} />
        <Route path={APP_ROUTES.REPORTS} element={<Reports />} />
        <Route path={APP_ROUTES.SETTINGS} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouting;
