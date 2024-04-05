import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import QZone1 from "../../../assets/qZone1.png"
import QZone2 from "../../../assets/qZone2.png"
import QZone3 from "../../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const RightSideNav = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="px-3">
            <div className={user && "hidden"}>
                <h3 className="text-xl font-semibold mb-3">Login With</h3>
                <button className="btn w-full btn-outline my-3">
                    <FaGoogle />
                    Login With Google
                </button> <br />
                <button className="btn w-full btn-outline">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div>
                <h3 className="text-xl font-semibold mt-5 mb-3">Find Us On</h3>
                <div className="text-lg">
                    <a href="" className="flex items-center border-[#E7E7E7] border p-3 gap-2 rounded-t-lg"><FaFacebook />Facebook</a>
                    <a href="" className="flex items-center border-[#E7E7E7] border-x p-3 gap-2 "><FaTwitter />Twitter</a>
                    <a href="" className="flex items-center border-[#E7E7E7] border p-3 gap-2 rounded-b-lg"><FaInstagram />Instagram</a>
                </div>
            </div>
            <div className="bg-[#F3F3F3] p-5 mt-5 ">
                <h3 className="text-xl font-semibold mb-3">Q-Zone</h3>
                <div className="">
                    <img src={QZone1} alt="" className="w-full p-4" />
                    <img src={QZone2} alt="" className="w-full p-4" />
                    <img src={QZone3} alt="" className="w-full p-4" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;