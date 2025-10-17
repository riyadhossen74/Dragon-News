import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>
            }
        ]
        
    },
    {
        path:'/auth',
        element: <h1>auth</h1>
    },
    {
        path:'/news',
        element: <h1>news</h1>
    },
    {
        path:'/*',
        element: <h1>404 🤣</h1>
    },
])

export default router