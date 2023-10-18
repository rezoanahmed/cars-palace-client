import Brands from "../../pages/Brands/Brands";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div className="space-y-10">
            <Hero></Hero>            
            <Brands></Brands>
        </div>
    );
};

export default Home;