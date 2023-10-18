import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Add from "../pages/Add/Add";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Preorder from "../pages/Preorder/Preorder";
import Cart from "../pages/Cart/Cart";
import Brands from "../pages/Brands/Brands";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage></Homepage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch("http://localhost:5000/brands"),
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
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/preorder',
                element: <Preorder></Preorder>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/brands',
                element: <Brands></Brands>,
                loader: ()=>fetch("http://localhost:5000/brands"),
            }
        ]
    }
])

