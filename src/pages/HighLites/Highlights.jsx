import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Highlights = () => {
    return (
        <div className="flex p-4 bg-[#706f6f] my-8">
            <button className="btn bg-[#D72050] rounded-none text-white border-none text-lg font-medium px-6" >Latest</button>
            <Marquee className="text-lg font-semibold " pauseOnClick={true} speed={200}>
                <Link to='/' className="mr-8">Discover enchanting landscapes that seem straight out of a fairy tale, from lush to rugged mountain peaks.</Link>
                <Link to='/' className="mr-8">"Brazil's Legacy of Dominance: Celebrating Five Glorious World Cup Wins"</Link>
                <Link to='/' className="mr-8">Indulge in pampering and relaxation at world-class resorts and spas nestled amidst stunning natural landscapes .</Link>
                <Link to='/' className="mr-8">Step back in time and unravel the mysteries of ancient civilizations through awe-inspiring ruins, majestic castles, and timeless monuments.</Link>
            </Marquee>

        </div>
    );
};

export default Highlights;