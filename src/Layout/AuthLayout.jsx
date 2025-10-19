import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto py-5">
        <NavBar></NavBar>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
