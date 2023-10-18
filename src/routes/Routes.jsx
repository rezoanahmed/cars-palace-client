import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Add from "../pages/Add/Add";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage></Homepage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add',
                element: <Add></Add>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

