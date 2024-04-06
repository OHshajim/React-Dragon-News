import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center my-20"><span className="w-20 loading loading-spinner text-error"></span></div>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;