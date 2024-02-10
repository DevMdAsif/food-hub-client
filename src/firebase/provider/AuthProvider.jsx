import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../conf/configuration";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // social sinin

  const googleSingin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const facebookSingin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // get user

  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      return () => {
        return unSubscrive;
      };
    });

    return () => {
      unSubscrive;
    };
  }, []);

  const LogOut = () => {
    return signOut(auth);
  };

  const Provider = {
    user,
    loading,
    singUp,
    login,
    googleSingin,
    facebookSingin,
    LogOut,
  };

  return (
    <div>
      <AuthContext.Provider value={Provider}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
