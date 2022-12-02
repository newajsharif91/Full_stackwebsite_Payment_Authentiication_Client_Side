import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../DashboardLayout/AdminSec/AllBuyers";
import AllSellers from "../DashboardLayout/AdminSec/AllSellers";
import ReportedItem from "../DashboardLayout/AdminSec/ReportedItem";
import MyOrders from "../DashboardLayout/BuyeSec/MyOrders";
import Dashboard from "../DashboardLayout/Dashboard";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Payment from "../DashboardLayout/Payments/Payment";
import AddProducts from "../DashboardLayout/SellerSec/AddProducts";
import MyProducts from "../DashboardLayout/SellerSec/MyProducts";
import NotFound from "../NotFound/NotFound";
import BikesCategory from "../Pages/Home/BikesCategory/BikesCategory";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Blog from "../Pages/Seared/Blog";
import DisplayError from "../Pages/Seared/DisplayError";
import Login from "../Pages/Seared/Login";
import Signup from "../Pages/Seared/Signup";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SellersRoutes from "./SellersRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/bikes/:category',
                element: <PrivateRoutes><BikesCategory></BikesCategory></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/bikes/${params.category}`)
            },
        ]
    },
    {
        path: '/dashboardLayout',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboardLayout',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboardLayout/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboardLayout/addProducts',
                element: <SellersRoutes><AddProducts></AddProducts></SellersRoutes>
            },
            {
                path: '/dashboardLayout/myproducts',
                element: <SellersRoutes><MyProducts></MyProducts></SellersRoutes>
            },
            {
                path: '/dashboardLayout/allSellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboardLayout/allBuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboardLayout/reportedItem',
                element: <AdminRoutes><ReportedItem></ReportedItem></AdminRoutes>
            },
            {
                path: '/dashboardLayout/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])