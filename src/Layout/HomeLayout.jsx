import React from "react";
import { Outlet } from "react-router";

import LatesNews from "../Components/LatesNews";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";

const HomeLayout = () => {
  return <div>
    <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-5">
          <LatesNews></LatesNews>
        </section>
        <section className="w-11/12 mx-auto my-5">
          <NavBar></NavBar>
        </section>
    </header>
   <main className="w-11/12 mx-auto  grid grid-cols-12">
    <aside className="col-span-3">
    <LeftAside></LeftAside>
   </aside>
    <section className="main col-span-6">
       
        <Outlet></Outlet>
    </section>
   <aside className="col-span-3">
    <RightAside></RightAside>
   </aside>
   </main>
  </div>;
};

export default HomeLayout;
