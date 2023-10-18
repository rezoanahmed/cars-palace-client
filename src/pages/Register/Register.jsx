import { NavLink } from "react-router-dom";

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
                    <p>Already Have Account? <NavLink to='/login' className={`text-blue-600 font-medium`}>Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;