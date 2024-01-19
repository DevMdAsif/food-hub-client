import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../conf/configuration";
import { createContext } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({ children }) {
  const singUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const Provider = {
    singUp,
  };

  return (
    <div>
      <AuthContext.Provider value={Provider}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
