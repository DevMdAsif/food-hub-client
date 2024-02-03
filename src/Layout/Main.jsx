import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/navbar";
import Footer from "../pages/shared/footer/Footer";

function Main() {
  return (
    <div className="max-w-8xl">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
