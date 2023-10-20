import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-6xl font-bold font-serif text-blue-900 ">404 Error!</h1>
            <p className="text-blue-700">Your Requested Page Has Not Been Found</p>
            <Link to={`/`} className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2 text-white font-semibold rounded-lg">Go Back To Homepage</Link>
            
        </div>
    );
};

export default Error;