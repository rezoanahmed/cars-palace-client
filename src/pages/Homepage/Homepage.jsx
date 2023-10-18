import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
    return (
        <div className="w-[80%] mx-auto">
           <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
           
        </div>
    );
};

export default Homepage;