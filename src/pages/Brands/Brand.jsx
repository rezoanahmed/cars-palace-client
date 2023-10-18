import { Link } from "react-router-dom";


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
                            <button className="btn bg-blue-500 text-white hover:bg-blue-600 w-full">See Cars</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;