import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext();
const Authprovider = ({children}) => {
    const [isLoading, setloading]  = useState(true);
    const [user, setuser] = useState();
    const axiosPublic = useAxiosPublic();

//providers
const google = new GoogleAuthProvider();

//create user with email and pass
const createUser = (email, password) => { 
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
 }

 //sign in with popup
 const socialLogin = () => { 
    setloading(true);
   return signInWithPopup(auth,google);
  }

//Login with email and password 
const login = (email,password) => { 
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
 }

 //signOut 
 const logOut = () => { 
    setloading(true);
     signOut(auth)
     successToast("Log Out Successfully!")
  }

 //set user observer

 useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setloading(true);
        setuser(currentUser)
        setloading(false)
        const email = currentUser?.email;
        // console.log(res.user.email)
        axiosPublic.post('/jwt',{email})
        .then()
        .catch(err => console.log(err))
    })
    return () => { 
        unsubscribe();
     }
  },[])

  //toasts

  const successToast = (message) => { 
    toast.success(`${message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        });
   }
  const errorToast = (message) => { 
    toast.error(`${message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        });
   }
   //update user's Name 
   const updateUserName = (name) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
      })
    }
    const authInfo = {
        user,
        createUser,
        login,
        socialLogin,
        logOut,
        successToast,
        errorToast,
        updateUserName,
        isLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;