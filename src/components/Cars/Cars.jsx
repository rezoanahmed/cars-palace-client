import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Cars = ({ cars }) => {
    const { _id, brand, model, year, type, price, rating, photo, details } = cars;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" className="h-[250px] w-full" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">{brand} {model} {year}</h2>
                    <div className="card-actions">
                        <div className="badge badge-outline">{type}</div>
                        <div className="badge badge-outline">Rating: {rating}⭐</div>
                    </div>
                    <p className="text-red-500 text-xl font-bold">${price}</p>
                    <div className="w-full">
                        <Link to={`/car/${_id}`}>
                            <button className="btn bg-blue-500 text-white hover:bg-blue-600 w-full">See Full Details</button>
                        </Link>
                        <Link to={`/update/${_id}`} className="btn bg-green-500 text-white hover:bg-green-600 w-full">Update Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cars.propTypes = {
    cars: PropTypes.object.isRequired,
}

export default Cars;