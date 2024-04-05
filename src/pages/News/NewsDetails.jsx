import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSide/RightSideNav";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NewsDetails = () => {
    const { loading } = useContext(AuthContext)
    const Id = useParams()
    const News = useLoaderData()
    // console.log(Id._id, News);
    const CurrentNews = News.filter(news => news._id === Id._id)
    console.log(CurrentNews[0]);
    const { details, title, image_url } = CurrentNews[0]
    return (
        <div className="max-w-[1700px] mx-auto ">
            {
                loading && <div className="flex justify-center items-center my-20"><span className="w-20 loading loading-spinner text-error"></span></div>

            }
            <Header />
            <div className="grid md:grid-cols-4 gap-5">
                <div className="col-span-3">
                    <h3 className="text-xl font-semibold mb-6">Dragon News Home</h3>
                    <div className="p-8 border border-[#e7e7e77d] rounded-lg">
                        <img src={image_url} alt="" className="w-full " />
                        <h3 className="text-2xl font-bold mt-5 mb-2">{title}</h3>
                        <p className="text-[#706F6F]">{details}</p>

                        <Link to="/">
                            <button
                                className="btn bg-[#D72050] rounded-none text-white border-none text-lg font-medium px-6 mt-8"
                            ><AiOutlineArrowLeft /> All news in this category</button>
                        </Link>

                    </div>

                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;