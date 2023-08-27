import React from "react";
import HeaderRouter from "../components/HeaderRouter/HeaderRouter";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <HeaderRouter />
      <Outlet />
    </div>
  );
}
