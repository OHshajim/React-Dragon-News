import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-3">
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
            <div className="p-3">
                <h3 className="text-xl font-semibold mb-3">Find Us On</h3>
                <div className="text-lg">
                    <a href="" className="flex items-center border-[#E7E7E7] border p-3 gap-2 rounded-t-lg"><FaFacebook />Facebook</a>
                    <a href="" className="flex items-center border-[#E7E7E7] border-x p-3 gap-2 "><FaTwitter />Twitter</a>
                    <a href="" className="flex items-center border-[#E7E7E7] border p-3 gap-2 rounded-b-lg"><FaInstagram />Instagram</a>
                </div>
            </div>
            <div>
            <h3 className="text-xl font-semibold mb-3">Q-Zone</h3>
            <div></div>
            </div>
        </div>
    );
};

export default RightSideNav;