import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Test from "../Test/Test";
import LayoutComponent from "../Layouts/LayoutComponent";
import Home from "../Home/Home";

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
