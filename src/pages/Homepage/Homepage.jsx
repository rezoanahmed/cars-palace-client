import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Homepage = () => {
    return (
        <div className="w-[80%] mx-auto">
           <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default Homepage;