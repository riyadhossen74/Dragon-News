import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Spinar from "../Spinar/Spinar";

const PrivetRout = ({ children }) => {
  const { loading, user } = use(AuthContext);
  const location = useLocation();
  // console.log(location)
  if (loading) {
    return <Spinar></Spinar>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivetRout;
