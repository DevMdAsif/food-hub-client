import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../conf/configuration";
import { createContext } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

function AuthProvider({ children }) {
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

  const Provider = {
    singUp,
    login,
    googleSingin,
    facebookSingin,
  };

  return (
    <div>
      <AuthContext.Provider value={Provider}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
