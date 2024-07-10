import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Home/Home";
import Test from "../Test/Test";
import LayoutComponent from "../Layouts/LayoutComponent";

const rootRoutes = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "/", element: <Home /> },
      { path: "test", element: <Test /> },
    ],
  },
];

const router = createBrowserRouter(rootRoutes);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
