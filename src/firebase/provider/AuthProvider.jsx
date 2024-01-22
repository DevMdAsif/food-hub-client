import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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

  const singUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // social sinin

  const googleSingin = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  const facebookSingin = async () => {
    return await signInWithPopup(auth, facebookProvider);
  };

  // get user

  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unSubscrive;
    };
  }, []);

  const currentUser = auth.currentUser;

  const LogOut = () => {
    return deleteUser(currentUser);
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
