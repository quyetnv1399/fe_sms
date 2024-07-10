import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const Context = () => {
  return (
    <Layout.Content className="p-4">
      <Outlet />
    </Layout.Content>
  );
};

export default Context;
