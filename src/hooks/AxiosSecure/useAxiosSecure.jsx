import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "../usecontext/useAuthContext";
import { useNavigate } from "react-router-dom";

function useAxiosSecure() {
  const { LogOut } = useAuthContext();
  const navigate = useNavigate();

  const instance = axios.create();

  useEffect(() => {
    const interceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          await LogOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup function to remove the interceptor when component unmounts
    return () => {
      instance.interceptors.response.eject(interceptor);
    };
  }, [instance, LogOut, navigate]);

  return instance;
}

export default useAxiosSecure;
