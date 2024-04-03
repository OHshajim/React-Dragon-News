import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="text-4xl font-Poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;