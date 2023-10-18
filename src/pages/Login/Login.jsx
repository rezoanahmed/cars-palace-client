import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="p-4">
            <h1 className="text-center text-3xl">Login Now!</h1>
            <div className="flex justify-center">
                <form className="flex gap-2 flex-col justify-center mt-10">
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input type="text" placeholder="Enter Your Password" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input type="submit" value="Login" className="bg-blue-600 text-white px-2 py-2 rounded-md" />
                    <p>Don't Have Account Yet? <NavLink to='/register' className={`text-blue-600 font-medium`}>Register</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Login;