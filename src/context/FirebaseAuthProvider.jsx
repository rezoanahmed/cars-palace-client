import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

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
    
    // logout
    const logOut = () =>{
        return signOut(auth);
    }

    
    // autStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("User is in auth state changed", currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    
    const provided = {
        // test,
        user,
        register,
        login,
        googleSignIn,
        logOut,



    }

    return (
        <AuthContext.Provider value={provided}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;