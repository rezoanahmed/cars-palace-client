import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const context = useContext(AuthContext);
    const {login, signInWithGoogle} = context;
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email, password)
        .then(userCredentils=>{
            console.log(userCredentils);
            if(userCredentils){
                Swal.fire("Welcome!", "Login Succeeded", 'success');
            }
        })
        .catch(error=>{
            console.log(error.code);
            if(error.code=="auth/invalid-login-credentials"){
                Swal.fire("Error!", "Email and Password Didn't Match", 'error')
            }
        })
    }

    return (
        <div className="p-4">
            <h1 className="text-center text-3xl">Login Now!</h1>
            <div className="flex justify-center">
                <form onSubmit={handleLogin} className="flex gap-2 flex-col justify-center mt-10">
                    <input name='email' type="text" placeholder="Enter Your Email" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input name='password' type="text" placeholder="Enter Your Password" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    <input type="submit" value="Login" className="bg-blue-600 text-white px-2 py-2 rounded-md" />
                    <button className="flex items-center justify-center gap-2 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 w-full"><FcGoogle className="text-xl"></FcGoogle>Sign In with Google</button>
                    <p>Don't Have Account Yet? <NavLink to='/register' className={`text-blue-600 font-medium`}>Register</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Login;