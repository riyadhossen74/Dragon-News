import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import React, { use, useState } from "react";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navegate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (name.length < 4) {
      setNameError("name should be 4 character");
    } else {
      setNameError("");
    }
    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({displayName:name, photoURL: photo})
        .then(()=>{

          setUser({...user, displayName:name, photoURL: photo});
          navegate('/')
        })
        .catch((error) =>{
          console.log(error)
          setUser(user)
        })
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  py-5">
        <h2 className="font-bold text-2xl text-center pt-5">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              name="name"
              required
            />
            {nameError && <p className="text-red-600 text-xs">{nameError}</p>}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-center">
            Already Have A Account ?
            <Link className="text-blue-700" to="/auth/login">
              {" "}
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
