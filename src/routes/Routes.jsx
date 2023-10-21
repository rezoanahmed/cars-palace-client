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
import BrandDetails from "../pages/Brands/BrandDetails";
import Car from "../components/Cars/Car";
import Update from "../pages/Update/Update";
import Customers from "../components/Customers/Customers";
import Sponsors from "../components/Sponsors/Sponsors";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage></Homepage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch("https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/brands"),
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
                element: <PrivateRoutes><Add></Add></PrivateRoutes>,
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
                element: <PrivateRoutes><Preorder></Preorder></PrivateRoutes>
            },
            {
                path: '/cart',
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: ()=>fetch("https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/cart"),
            },
            {
                path: '/brands',
                element: <Brands></Brands>,
                loader: ()=>fetch("https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/brands"),
            },
            {
                path: '/brand/:name',
                element: <BrandDetails></BrandDetails>,
                loader: ({params})=>fetch(`https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/cars/${params.name}`)
            },
            {
                path: '/car/:id',
                element: <PrivateRoutes><Car></Car></PrivateRoutes>,
                loader: ({params})=>fetch(`https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/car/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params})=>fetch(`https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/car/${params.id}`),
            },
            {
                path: '/customers',
                element: <Customers></Customers>,
                loader: ()=>fetch("https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/customers"),
            },
            {
                path: '/sponsors',
                element: <Sponsors></Sponsors>
            }
        ]
    }
])

