import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../context/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire("Great!!!", "You've Successfully Logged Out", 'success')
            })
            .catch(() => {
                Swal.fire("OOOPPS!!!", "Something Went Wrong!", "error")
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/brands'>Our Brands</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink className={user ? "" : "hidden"} to='/preorder'>Pre-Order</NavLink></li>
        <li><NavLink to='/add'>Add Cars</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink className={user ? "" : "hidden"} to='/cart'>My Cart</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/'><Logo></Logo></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border-[3px] border-blue-500">
                                    <li>
                                        <a className="justify-between font-bold">
                                            {user.displayName}
                                        </a>
                                    </li>
                                    <li><a className="text-gray-400 text-xs">{user.email}</a></li>
                                    <li><button onClick={()=>handleLogOut()} className="text-red-600 hover:bg-red-500 hover:text-white">Logout</button></li>
                                </ul>
                            </div>
                            :

                            <NavLink to='/login' className="p-2 rounded-md ease-linear duration-300 text-blue-600 hover:text-white hover:bg-blue-600">Login</NavLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;