import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-base-200 text-base-content flex flex-col items-center text-center">
                <nav className="flex">
                    <NavLink to='/'>
                        <a className="link link-hover">Home</a>
                    </NavLink>
                    <NavLink to='/preorder'>
                        <a className="link link-hover">Pre-Order</a>
                    </NavLink>
                    <NavLink to='brands'>
                        <a className="link link-hover">Brands</a>
                    </NavLink>
                    <NavLink to='gallery'>
                        <a className="link link-hover">Gallery</a>
                    </NavLink>
                    <NavLink to='about'>
                        <a className="link link-hover">About Us</a>
                    </NavLink>
                    <NavLink to='contact'>
                        <a className="link link-hover">Contact</a>
                    </NavLink>
                </nav>
                <aside>
                    <Logo></Logo>
                    <p>Cars Palace Ltd.<br />Providing reliable service since 1998</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;