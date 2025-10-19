import React, { use, useState } from "react";
import { Link, Links, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const { singIn } = use(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  // console.log(location);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({ email, password });
    singIn(email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        // console.log("Logged in user:", user);
        Navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  py-5">
        <h2 className="font-bold text-2xl text-center pt-5">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center">
            Dont’t Have An Account ?
            <Link className="text-blue-700" to="/auth/register">
              {" "}
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
