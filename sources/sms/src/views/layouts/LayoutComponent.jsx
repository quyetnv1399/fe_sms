import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const LayoutComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer, borderRadiusLG }} = theme.useToken();

    const items = [
        { path: "", label: "Dashboard", icon: <UserOutlined />, key: "1"},
        { path: "provider", label: "Provider", icon: <VideoCameraOutlined />, key: "2"},
        { path: "test", label: "Test", icon: <VideoCameraOutlined />, key: "3"},
    ]

    const handleNavigate = (e) => {
        let findItem = items.find(x => x.key === e.key);
        if(e){
            navigate(findItem.path);
        }
    }

    const getSelectedKey = () => {
        const menuItem = items.find(item => location.pathname.replace("/","") === item.path);
        return menuItem ? menuItem.key : '1'
    };

  return (
    <>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{height: "100vh"}}>
                <div className="demo-logo-vertical" 
                    style={{
                        fontSize: '16px',
                        width: "100%",
                        height: "64px",
                        backgroundColor: "#022240"
                    }}
                >
                    a
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[getSelectedKey()]} items={items} style={{ marginTop: 19 }} 
                    onClick={handleNavigate} 
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} >
                    <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                    >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </>
  )
}

export default LayoutComponent
