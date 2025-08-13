import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className=" min-h-screen bg-image  flex justify-center items-center auth_bg p-3 md:py-8">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
