import React from "react";
import { Outlet, useNavigation } from "react-router";

import LatesNews from "../Components/LatesNews";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";
import Spinar from "../Spinar/Spinar";

const HomeLayout = () => {
  const {state} = useNavigation()
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
    <aside className="col-span-3 sticky top-0 h-fit">
    <LeftAside></LeftAside>
   </aside>
    <section className="main col-span-6">
       
       {state == 'loading'?<Spinar></Spinar>: <Outlet></Outlet>}
    </section>
   <aside className="col-span-3 sticky top-0 h-fit">
    <RightAside></RightAside>
   </aside>
   </main>
  </div>;
};

export default HomeLayout;
