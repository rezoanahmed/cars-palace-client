import Brands from "../../pages/Brands/Brands";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div className="space-y-10">
            <Hero></Hero>            
            <Brands></Brands>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;