import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div className="p-4">
            <h1 className="text-center text-3xl">Register Today and Explore Our Exotic Cars!</h1>
            <div className="flex justify-center">
                <form className="flex gap-2 flex-col justify-center mt-10">
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input type="text" placeholder="Enter Your Password" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input type="text" placeholder="Enter Your Photo URL" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input type="submit" value="Register" className="bg-blue-600 text-white px-2 py-2 rounded-md" />
                    <button className="flex items-center justify-center gap-2 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 w-full"><FcGoogle className="text-xl"></FcGoogle>Continue with Google</button>
                    <p>Already Have Account? <NavLink to='/login' className={`text-blue-600 font-medium`}>Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;