import { useLoaderData } from "react-router-dom";
import Highlights from "../HighLites/Highlights";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSide/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBottom from "../Shared/RightSide/RightSideBottom";
import RightSideNav from "../Shared/RightSide/RightSideNav";
import NewsDisplay from "../News/NewsDisplay";

const Home = () => {
    const News = useLoaderData()
    console.log(News);
    return (
        <div className="max-w-[1700px] mx-auto ">
            <Header />
            <Highlights />
            <Navbar />
            <div className="grid grid-cols-4 gap-6">
                <div><LeftSideNav /></div>
                <div className="border col-span-2">
                    <h3 className="text-xl font-semibold mb-6">Dragon News Home</h3>
                    <div>
                        {
                            News.map(news =><NewsDisplay key={news._id} news={news}></NewsDisplay>)
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