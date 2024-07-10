import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LayoutComponent from "../Layout/layoutComponent";
import Home from "../Home/home";
import Test from "../Test/Test";

const rootRoutes = [
  { path: "/", element: <LayoutComponent />, children: [
    { path: "/", element: <Home /> },
    { path: "/test", element: <Test /> },
  ]},
];

const router = createBrowserRouter(rootRoutes);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
