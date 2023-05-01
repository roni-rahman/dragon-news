import React from "react";
import Header from "../pages/Shared/Header/Header";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
