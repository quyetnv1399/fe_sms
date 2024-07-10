import { Button, Layout } from "antd";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import styled from "styled-components";

const Siderbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const router = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "Test",
      link: "/test",
      icon: <AiFillAppstore />,
    },
  ];

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="shadow-xl relative bg-[#4535C1]"
    >
      <div className="bg-white h-full relative">
        <div className={`text-center ${!collapsed ? "" : "hidden"} p-4`}>
          <h1 className="font-bold text-4xl ">Panel</h1>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {router.map((item) => {
              return (
                <li>
                  <Link
                    to={item.link}
                    className={`flex items-center ${
                      !collapsed ? "" : "justify-center"
                    }  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-lg`}
                  >
                    {item.icon}
                    <span className={`ms-3  ${!collapsed ? "" : "hidden"}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <CustomTriggerButton onClick={toggleSidebar}>
        {collapsed ? <LuArrowRightFromLine /> : <LuArrowLeftFromLine />}
      </CustomTriggerButton>
    </Layout.Sider>
  );
};

export default Siderbar;

const CustomTriggerButton = styled(Button)`
  position: absolute;
  bottom: 16px;
  right: 22px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001529;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;
