import { BiBookmark, BiShareAlt, BiStar } from "react-icons/bi";
import { BsEye, BsFillStarFill, BsViewList } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsDisplay = ({ news }) => {
    const { _id, author, image_url, details, title, total_view, rating } = news
    return (
        <div>
            <div className="flex justify-between items-center bg-[#F3F3F3] py-3 px-5">
                <div className="flex items-center gap-4">
                    <img alt="Tailwind CSS Navbar component" className="w-10 rounded-full" src={author.img} />

                    <div>
                        <h4 className="text-base font-semibold">{author.name}</h4>
                        <h4 className="text-sm text-[#706F6F]">{author.published_date}</h4>
                    </div>
                </div>
                <div className="flex text-2xl">
                    <BiShareAlt />
                    <BiBookmark />
                </div>
            </div>
            <h3 className="text-xl font-bold mt-4 mx-5">{title}</h3>
            <img src={image_url} alt="" className="w-full p-5" />
            <p className="text-base p-5">
                {
                    details.length > 300 ?
                        <>
                            {details.slice(0, 300)}<Link className="ml-4 font-bold text-blue-500" to={`/news/${_id}`}>...Read More</Link>
                        </>
                        : details
                }
            </p>

            <div className="flex justify-between items-center mx-5 pt-4 mb-8 border-t border-[#E7E7E7]">
                <div className="flex items-center gap-2">
                    <div className="text-[#ffbb00] flex items-center gap-2 text-lg">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                    <p className="">{rating.number}</p>
                </div>
                <div className="flex items-center gap-1">
                    <BsEye />
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDisplay;