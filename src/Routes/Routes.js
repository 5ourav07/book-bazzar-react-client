import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import UserLayout from "../Layouts/UserLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Books from "../Pages/Home/Books/Books";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/User/Login/Login";
import SignUp from "../Pages/User/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <Books></Books>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },

    {
        path: '/',
        element: <UserLayout></UserLayout>,
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