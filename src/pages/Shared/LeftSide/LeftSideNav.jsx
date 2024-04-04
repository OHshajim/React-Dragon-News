import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div >
            <h3 className="text-xl font-semibold">All Caterogy</h3>
            <div className=" text-xl font-medium text-[#9F9F9F] mt-5">
                {
                    category.map(category=><Link to={`/category/${category.name}`} className="block px-14 py-3" key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;