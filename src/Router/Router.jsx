import { createBrowserRouter } from "react-router-dom";
// import Catagory from "../Component/Catagory";
import DisplayByCatagory from "../Component/DisplayByCatagory";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Error from "../Error/Error";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";

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
                loader: ({ params }) => fetch(`http://localhost:5000/alldatas?catagory=${params.name}`),
                element: <DisplayByCatagory></DisplayByCatagory>
            },
            {
                path: 'add-product',
                element: <AddProduct></AddProduct>
            },
        ]
    }
])