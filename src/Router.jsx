import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetail from "./pages/MovieDetail";
import PageNotFound from "./pages/PageNotFound";
import HomeLayout from "./layouts/HomeLayout";
import AdminLayout from "./layouts/AdminLayout";
import BaiTapQuanLyNguoidung from "./components/BaiTapQLNguoiDung/BaiTapQLNguoiDung";
import BaiTapDT from "./components/BaiTapDT/BaiTapDT";
import Hooks from "./pages/Hooks";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/movie-detail/:movieId",
          element: <MovieDetail />,
        },

        {
          path: "/hooks",
          element: <Hooks />,
        },
      ],
    },

    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Navigate to="/admin/user-management" />,
        },

        {
          path: "/admin/user-management",
          element: <BaiTapQuanLyNguoidung />,
        },

        {
          path: "/admin/phone-management",
          element: <BaiTapDT />,
        },
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routing;
}
