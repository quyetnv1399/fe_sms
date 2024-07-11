import "./App.css";
import { App } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProviderComponent from "./components/Providers/ProviderComponent";
import Home from "./views/Home/home";
import LayoutComponent from "./views/Layouts/LayoutComponent";

const rootRoutes = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "/", element: <Home /> },
      { path: "provider", element: <ProviderComponent />},
    ],
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
