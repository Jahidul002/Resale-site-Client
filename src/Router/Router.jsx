import { createBrowserRouter } from "react-router-dom";
import BookModal from "../Component/BookModal";
// import Catagory from "../Component/Catagory";
import DisplayByCatagory from "../Component/DisplayByCatagory";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Error from "../Error/Error";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllProduct from "../Pages/Dashboard/AllProduct";
import Alluser from "../Pages/Dashboard/Alluser";
import DashHome from "../Pages/Dashboard/DashHome";
import MyProduct from "../Pages/Dashboard/MyProduct";
import ReportedProduct from "../Pages/Dashboard/ReportedProduct";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../Route/PrivateRoute";
import Root from "../Root/Root";
import SellerRoute from "../Route/SellerRoute";
import Blog from '../Component/Blog'
import AdminRoute from "../Route/AdminRoute";

export const PowerHouse = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'displaybyCata/:name',
                loader: ({ params }) => fetch(`https://assignment-12-server-theta-orcin.vercel.app/alldatas?catagory=${params.name}`),
                element: <DisplayByCatagory></DisplayByCatagory>
            },
            {
                path: 'add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'modal/:id',
                loader: ({ params }) => fetch(`https://assignment-12-server-theta-orcin.vercel.app/alldata/${params.id}`),
                element: <BookModal></BookModal>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashHome></DashHome></PrivateRoute>,
        children: [
            {
                path: '/dashboard/all-user',
                loader: () => fetch('https://assignment-12-server-theta-orcin.vercel.app/user'),
                element: <AdminRoute><Alluser></Alluser></AdminRoute>
            },
            {
                path: '/dashboard/all-product',
                loader: () => fetch('https://assignment-12-server-theta-orcin.vercel.app/alldata'),
                element: <AdminRoute><AllProduct></AllProduct></AdminRoute>
            },
            {
                path: '/dashboard/reported-product',
                loader: () => fetch('https://assignment-12-server-theta-orcin.vercel.app/report'),
                element: <AdminRoute><ReportedProduct></ReportedProduct></AdminRoute>
            },
            {
                path: '/dashboard/my-product',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            }
        ]
    }
])