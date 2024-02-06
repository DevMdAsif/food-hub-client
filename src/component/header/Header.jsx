import { Link, useLocation } from "react-router-dom";

function Header({ title }) {
  const location = useLocation();
  return (
    <div className="text-center lg:flex lg:justify-between">
      <h3 className="text-white text-3xl font-bold">{title}</h3>
      <p className="bg-[#f58220] w-36 mx-auto lg:mx-0 text-black py-3 mt-7 lg:mt-0">
        <Link to="/">Home</Link>
        <span className="text-white"> {location.pathname}</span>
      </p>
    </div>
  );
}

export default Header;
