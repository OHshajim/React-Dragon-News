import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSide/RightSideNav";

const NewsDetails = () => {
    return (
        <div className="max-w-[1700px] mx-auto ">
            <Header />
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h3 className="text-xl font-semibold mb-6">Dragon News Home</h3>

                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;