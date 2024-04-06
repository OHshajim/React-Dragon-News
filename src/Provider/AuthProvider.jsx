import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState, } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'; // ES6
const GoogleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoad] = useState(true)

    // Sign Up
    const Signup = (email, password) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // log in
    const login = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const GoogleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    //Sign out 
    const LogOut = () => {
        setLoad(true)
        return signOut(auth);
    }

    useEffect(() => {
        const CurrentUser = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoad(false)
        })
        return () => CurrentUser()
    }, [])
    const authInfo = { user, Signup, login, LogOut, loading, setLoad ,GoogleLogin};
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