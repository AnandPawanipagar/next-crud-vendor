import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;
const MyApp = ({ Component, pageProps }) => {
  let [ishovering, setIsHovering] = useState(false);

  return (
    <Layout
      style={{
        height: "150vh",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          onMouseOver={() => {
            setIsHovering(true);
          }}
          onMouseOut={() => {
            setIsHovering(false);
          }}
          className={ishovering ? "active logo" : "logo"}
        >
          <div className="company-name">
            <Link href="/"> COMPANY LOGO</Link>
          </div>
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item>
            <Link href="/createVendor">Create Vendor</Link>
          </Menu.Item>

          <Menu.Item>
            <Link href="/vendors">All Vendors List</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
};


export default MyApp;
