import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // console.log("log");
    logOut()
      .then((result) => {
        alert("susses log Out");
      })
      .catch(error =>{
        // console.log(error)
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${user?user.photoURL : userIcon}`} alt="" />
        {user ? (
          <button className="btn btn-primary px-10 py-3" onClick={handleLogOut}>
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 py-3">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
