import "./App.css";
import { App } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProviderComponent from "./components/providers/ProviderComponent";
import LayoutComponent from "./views/Layouts/LayoutComponent";
import NotFound from "./components/not-found";

const rootRoutes = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "/", element: <>Dashboard</> },
      { path: "provider", element: <ProviderComponent /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(rootRoutes);

function AppComponent() {
  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
}

export default AppComponent;
