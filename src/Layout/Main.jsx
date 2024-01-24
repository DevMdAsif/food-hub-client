import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/navbar";

function Main() {
  return (
    <div className="max-w-8xl">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Main;
