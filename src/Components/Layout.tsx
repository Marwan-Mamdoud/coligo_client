// src/components/Layout.tsx
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import LoadingOverlay from "./LoadingOverlay";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Side bar */}
      <Sidebar />
      {/* Main content */}
      <div className={`main_layout`}>
        <Navbar />
        <Outlet />
        <LoadingOverlay />
      </div>
    </div>
  );
}
