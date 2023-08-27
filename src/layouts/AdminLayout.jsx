import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="d-flex">
      <ul className="bg-dark w-25 vh-100">
        <li>
          <NavLink className="text-white" to="/admin/user-management">
            USER MANAGEMENT
          </NavLink>
        </li>
        <li>
          <NavLink className="text-white" to="/admin/phone-management">
            PHONE MANAGEMENT
          </NavLink>
        </li>
      </ul>
      <div className="w-75">
        <Outlet />
      </div>
    </div>
  );
}
