import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/login/Login";
import SingUp from "../pages/singUP/SingUp";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/Home/Home";
import Deshes from "../pages/Deshes/Deshes/Deshes";
import Menu from "../pages/Menu/menu/Menu";
import ContectUs from "../pages/contectUs/ContectUs";
import CartItems from "../pages/CartItems/CartItems";
import Deshbord from "../Layout/Deshbord";
import MyAccount from "../Deshbord/MyAccount/MyAccount";
import MyOrders from "../Deshbord/MyOrders/MyOrders";

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
        path: "/carts",
        element: <CartItems />,
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
  {
    path: "/deshbord",
    element: <Deshbord />,
    children: [
      {
        path: "/deshbord/myAccount",
        element: <MyAccount />,
      },
      {
        path: "/deshbord/myOrders",
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;
