import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    // register user
    const register = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login 
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const googleSignIn = () =>{
        setLoading(true);
        // console.log("hitted");
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // const test = 5;
    
    // logout
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    
    // autStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("User is in auth state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
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
        loading,
        



    }

    return (
        <AuthContext.Provider value={provided}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;