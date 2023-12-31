import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const Brand = ({ brand }) => {
    const { name, photo } = brand;
    return (
        <div>
            {/* {name} */}
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    {/* <h2 className="text-center text-4xl font-medium">{name}</h2> */}
                    <div className="w-full">
                        <Link to={`/brand/${name}`}>
                            <button className="btn bg-blue-500 text-white hover:bg-blue-600 w-full">See Full Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Brand.propTypes = {
    brand: PropTypes.object.isRequired,
}
export default Brand;