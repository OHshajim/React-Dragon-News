import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCalendar4 } from "react-icons/bs";
import NewsPng1 from '../../../assets/1.png'
import NewsPng2 from '../../../assets/2.png'
import NewsPng3 from '../../../assets/3.png'
const LeftSideNav = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div >
            <h3 className="text-xl font-semibold">All Caterogy</h3>
            <div className=" text-xl font-medium text-[#9F9F9F] mt-3">
                {
                    category.map(category => <Link to={`/category/${category.name}`} className="block px-14 py-3" key={category.id}>{category.name}</Link>)
                }
            </div>
            <div className="mt-8 space-y-5">
                <div>
                    <img src={NewsPng1} alt="NewsPng1" className="w-full" />
                    <h3 className="text-xl font-semibold my-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex text-base items-center justify-between font-medium">
                        <h4>Sports</h4>
                        <h4 className="text-[#9F9F9F] flex items-center gap-3"><BsCalendar4 /> Jan 4, 2022</h4>
                    </div>
                </div>
                <div>
                    <img src={NewsPng2} alt="NewsPng2" className="w-full" />
                    <h3 className="text-xl font-semibold my-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex text-base items-center justify-between font-medium">
                        <h4>Sports</h4>
                        <h4 className="text-[#9F9F9F] flex items-center gap-3"><BsCalendar4 /> Jan 4, 2022</h4>
                    </div>
                </div>
                <div>
                    <img src={NewsPng3} alt="NewsPng3" className="w-full" />
                    <h3 className="text-xl font-semibold my-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex text-base items-center justify-between font-medium">
                        <h4>Sports</h4>
                        <h4 className="text-[#9F9F9F] flex items-center gap-3"><BsCalendar4 /> Jan 4, 2022</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;