import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
    const { Signup } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        Signup( email, password)
            .then(result => { console.log(result.user) })
            .catch(error => console.error(error))
    }
    return (
        <div className="max-w-[1700px] mx-auto ">
            <Navbar />
            <div className="flex items-center justify-center ">
                <div className=" ">
                    <h2 className="text-center text-4xl font-semibold my-10">Login your account</h2>

                    <form onSubmit={handleSignUp} className="flex flex-col mt-8 px-5 md:w-[500px] lg:w-[700px]">
                        <label className=" text-xl font-semibold ">Your Name</label>
                        <input type="text" name="name" placeholder="Enter your name" className="p-3 text-base mt-1 rounded-md" required />
                        <label className=" text-xl font-semibold mt-4">Photo URL</label>
                        <input type="text" name="photo" placeholder="Enter your Photo URL" className="p-3 text-base mt-1 rounded-md" />
                        <label className=" text-xl font-semibold mt-4">Email address</label>
                        <input type="email" name="email" placeholder="Enter your email" className="p-3 text-base mt-1 rounded-md" required />
                        <label className="text-xl font-semibold mt-4">Password</label>
                        <input type="password" name="password" placeholder="Enter your Password" className="p-3 text-base mt-1 rounded-md" required />
                        <div className="form-control mt-4">
                            <label className="cursor-pointer label justify-normal gap-2">
                                <input type="checkbox" className="checkbox checkbox-error" required />
                                <span className="label-text">Accept <a href="" className="font-bold">Term & Conditions</a></span>
                            </label>
                        </div>
                        <input type="submit" value="Login" className="btn w-full bg-[#1d1d1d] text-white rounded-md mt-8" />
                    </form>
                    <p className="text-center mt-6">Have an Account ? <Link to="/login" className="font-bold text-blue-500">Log in</Link></p>
                </div>
            </div>
        </div>);
};

export default SignUp;