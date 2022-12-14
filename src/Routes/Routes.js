import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import UserLayout from "../Layouts/UserLayout";
import Blogs from "../Pages/Blogs/Blogs";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddBook from "../Pages/Dashboard/MyBooks/AddBook";
import MyBooks from "../Pages/Dashboard/MyBooks/MyBooks";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/MyOrders/Payment";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import Dashboard from "../Pages/Dashboard/Welcome/Dashboard";
import Books from "../Pages/Home/Books/Books";
import Report from "../Pages/Home/Books/Report";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import Login from "../Pages/User/Login/Login";
import SignUp from "../Pages/User/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Books></Books></PrivateRoute>
            },
            {
                path: '/categories/report/:id',
                element: <PrivateRoute><Report></Report></PrivateRoute>,
                loader: ({ params }) => fetch(`https://book-bazzar-server.vercel.app/books/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/report',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myorders/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({ params }) => fetch(`https://book-bazzar-server.vercel.app/orders/${params.id}`)
            },
            {
                path: '/dashboard/addbook',
                element: <SellerRoute><AddBook></AddBook></SellerRoute>
            },
            {
                path: '/dashboard/mybooks',
                element: <SellerRoute><MyBooks></MyBooks></SellerRoute>
            }
        ]
    },

    {
        path: '/',
        element: <UserLayout></UserLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },

    {
        path: '/*',
        element: <NotFound></NotFound>
    }
]);