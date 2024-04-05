// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAlkP2S17je2XVDeVQegJGnoXSV67ok3o",
    authDomain: "react-dragon-news-f3d6a.firebaseapp.com",
    projectId: "react-dragon-news-f3d6a",
    storageBucket: "react-dragon-news-f3d6a.appspot.com",
    messagingSenderId: "416742805356",
    appId: "1:416742805356:web:e17c402948f73dbb4bed49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;