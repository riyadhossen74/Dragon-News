import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRout from "../Provider/PrivetRout";
import Spinar from "../Spinar/Spinar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:<Spinar></Spinar>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivetRout>
        <NewsDetails></NewsDetails>npm run{" "}
      </PrivetRout>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement:<Spinar></Spinar>
  },
  {
    path: "/*",
    element: <h1>404 🤣</h1>,
  },
]);

export default router;
