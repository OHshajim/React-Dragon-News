import Highlights from "../HighLites/Highlights";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSide/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSide/RightSideNav";

const Home = () => {
    return (
        <div className="max-w-[1700px] mx-auto ">
            <Header />
            <Highlights />
            <Navbar />
            <div className="grid grid-cols-4 gap-6">
                <div className="border"><LeftSideNav /></div>
                <div className="border col-span-2">
                    <h3 className="text-xl font-semibold">Dragon News Home</h3>
                </div>
                <div className="border"><RightSideNav /></div>
            </div>
        </div>
    );
};

export default Home;