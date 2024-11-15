import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config/firebase";
// import { app } from "../firebase.config/firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const goggleProvider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    return signOut(auth);
  };

  const GoggleLogin = () => {
    return signInWithPopup(auth, goggleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      

      if (currentUser) {
        axios
          .post(`http://localhost:4001/authentication`, {
            email: currentUser.email,
          })
          .then((data) => {
            if (data.data) {
              localStorage.setItem("access-token", data?.data?.token);
              setLoading(false);
            }
          });
      }else{
        localStorage.removeItem("access-token")
        setLoading(false)
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    CreateUser,
    Login,
    LogOut,
    GoggleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
