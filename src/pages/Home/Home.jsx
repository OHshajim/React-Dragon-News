import { useLoaderData } from "react-router-dom";
import Highlights from "../HighLites/Highlights";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSide/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBottom from "../Shared/RightSide/RightSideBottom";
import RightSideNav from "../Shared/RightSide/RightSideNav";
import NewsDisplay from "../News/NewsDisplay";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const News = useLoaderData()
    // console.log(News); 
    const { loading } = useContext(AuthContext)
    return (
        <div className="max-w-[1700px] mx-auto ">
            {
                loading && <div className="flex justify-center items-center my-20"><span className="w-20 loading loading-spinner text-error"></span></div>

            }
            <Header />
            <Highlights />
            <Navbar />
            <div className="grid md:grid-cols-4 gap-6">
                <div><LeftSideNav /></div>
                <div className="col-span-2">
                    <h3 className="text-xl font-semibold mb-6">Dragon News Home</h3>
                    <div>
                        {
                            News.map(news => <NewsDisplay key={news._id} news={news}></NewsDisplay>)
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav />
                    <RightSideBottom />
                </div>
            </div>
        </div>
    );
};

export default Home;