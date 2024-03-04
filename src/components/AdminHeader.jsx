import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const AdminHeader = () => {
  const location = useLocation();

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/admin">
          <Link to="/admin">Home</Link>
        </Menu.Item>
        <Menu.Item key="/">
          <Link to="/">Catalogue</Link>
        </Menu.Item>
        <Menu.Item key="/addProduct">
          <Link to="/addProduct">Add Product</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AdminHeader;
