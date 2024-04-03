import Highlights from "../HighLites/Highlights";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="max-w-[1800px] mx-auto">
            <Header />
            <Highlights/>
            <Navbar />
        </div>
    );
};

export default Home;