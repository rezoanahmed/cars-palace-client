import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({children}) => {

    // register user
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const test = 5;
    const provided = {
        test,
        register,

    }
    return (
        <AuthContext.Provider value={provided}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;