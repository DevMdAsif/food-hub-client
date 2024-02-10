import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/login/Login";
import SingUp from "../pages/singUP/SingUp";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/Home/Home";
import Deshes from "../pages/Deshes/Deshes/Deshes";
import Menu from "../pages/Menu/menu/Menu";
import ContectUs from "../pages/contectUs/ContectUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/deshes",
        element: <Deshes />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contectus",
        element: <ContectUs />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
