import { useContext } from "react";
import { AuthContext } from "../context/FirebaseAuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-lg text-blue-600 text-6xl"></span>
        </div>;
    }
    if (user) {
        return children;
    }
    else {
        <Navigate to='/register'></Navigate>
    }
};

export default PrivateRoutes;