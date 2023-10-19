import Branches from "../../pages/Branches/Branches";
import Brands from "../../pages/Brands/Brands";
import Customers from "../Customers/Customers";
import Hero from "../Hero/Hero";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
    return (
        <div className="space-y-10">
            <Hero></Hero>            
            <Brands></Brands>
            <Sponsors></Sponsors>
            <Customers></Customers>
            <Branches></Branches>
            {/* <Footer></Footer> */}
            
        </div>
    );
};

export default Home;