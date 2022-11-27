import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import LogIn from "../../Pages/Authentication/LogIn/LogIn";
import Register from "../../Pages/Authentication/Register/Register";
import Categories from "../../Pages/Home/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ])
    }

])

export default router;