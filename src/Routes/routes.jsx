import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SinUp from "../pages/singUP/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <SinUp />,
      },
    ],
  },
]);

export default router;
