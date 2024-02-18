import { useContext } from "react";
import { AuthContext } from "../../firebase/provider/AuthProvider";

function useAuthContext() {
  const auth = useContext(AuthContext);

  return auth;
}

export default useAuthContext;
