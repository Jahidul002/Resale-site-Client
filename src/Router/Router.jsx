import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Error from "../Error/Error";
import Home from "../Pages/Home";
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
            }
        ]
    }
])