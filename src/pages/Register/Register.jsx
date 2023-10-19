import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const context = useContext(AuthContext);
    const { register, googleSignIn } = context;
    // console.log(test);

    const navigate = useNavigate();

    const handleResister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name, email, password, photo);
        register(email, password,name,photo)
            .then(userCredentials => {
                console.log(userCredentials.user.email);
                if (userCredentials.user.email) {
                    Swal.fire("Great!", "Successfully Registered To Cars Palace", "success");
                    form.reset();
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="p-4">
            <h1 className="text-center text-3xl">Register Today and Explore Our Exotic Cars!</h1>
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handleResister} className="flex gap-2 flex-col justify-center mt-10">
                    <input name='name' type="text" placeholder="Enter Your Full Name" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input name='email' type="text" placeholder="Enter Your Email" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input name='photo' type="text" placeholder="Enter Your Photo URL" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input type="submit" value="Register" className="bg-blue-600 text-white px-2 py-2 rounded-md" />
                </form>
                <button onClick={googleSignIn} className="flex items-center justify-center gap-2 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 mt-2"><FcGoogle className="text-xl"></FcGoogle>Continue with Google</button>
                <p className="mt-2">Already Have Account? <NavLink to='/login' className={`text-blue-600 font-medium`}>Login</NavLink></p>
            </div>
        </div>
    );
};

export default Register;