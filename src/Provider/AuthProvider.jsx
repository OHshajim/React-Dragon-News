import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState, } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    // Sign Up
    const Signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // log in
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const authInfo = { user, Signup ,login};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;