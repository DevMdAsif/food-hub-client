import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SinUp from "../pages/singUP/SingUp";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <SinUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
