import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({children}) => {

    // register user
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login 
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const googleSignIn = () =>{
        // console.log("hitted");
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // const test = 5;
    const provided = {
        // test,
        register,
        login,
        googleSignIn,


    }
    return (
        <AuthContext.Provider value={provided}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;