import { Link } from "react-router-dom";
import userPhoto from "../../../assets/user.png"
const Navbar = () => {
    const Links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Career</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F]">
                            {Links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#706F6F] text-lg">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center  ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userPhoto}/>
                        </div>
                    </div>

                    <a className="btn bg-[#403F3F] px-10 text-white text-lg font-semibold">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;