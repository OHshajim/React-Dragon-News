/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
    }
    return (
        <div className="max-w-[1700px] mx-auto ">
            <Navbar />
            <div className="flex items-center justify-center ">
                <div className=" ">
                    <h2 className="text-center text-4xl font-semibold my-10">Login your account</h2> 
                    
                    <form onSubmit={handleLogin} className="flex flex-col mt-8 w-[700px]">
                        <label  className=" text-xl font-semibold ">Email address</label>
                        <input type="email" name="email" placeholder="Enter your email" className="p-3 text-base mt-1 rounded-md" />
                        <label  className="text-xl font-semibold mt-4">Password</label>
                        <input type="password" name="password" placeholder="Enter your Password" className="p-3 text-base mt-1 rounded-md"/>
                        <input type="submit" value="Login" className="btn w-full bg-[#1d1d1d] text-white rounded-md mt-8" />
                    </form>
                    <p className="text-center mt-6">Don't have an Account ? <Link to="/register" className="font-bold text-blue-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;