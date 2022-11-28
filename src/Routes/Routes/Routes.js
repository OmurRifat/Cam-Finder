import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import LogIn from "../../Pages/Authentication/LogIn/LogIn";
import Register from "../../Pages/Authentication/Register/Register";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllUsers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllUsers/AllSeller";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <div>This will empty at first...</div>
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AllBuyers></AllBuyers>
            }
        ]
    }

])

export default router;