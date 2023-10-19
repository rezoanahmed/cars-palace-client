import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    // register user
    const register = async(email, password,name,photo) =>{
        setLoading(true);
        
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
          await logOut()
          return result;
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