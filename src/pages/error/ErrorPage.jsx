import { Link } from "react-router-dom";
import errorImg from "../../assets/images/errorImg/404.svg";

function ErrorPage() {
  return (
    <div className="text-center h-screen pb-10">
      <div className="flex justify-center ">
        <img className="xl:w-1/4 md:w-1/3 w-1/2" src={errorImg} alt="" />
      </div>
      <h2 className="lg:text-6xl md:text-4xl text-3xl font-bold">
        Page Not Found
      </h2>
      <p className="text-[#5f5872] lg:mt-5 mt-2 md:text-xl ">
        Sorry, we could not find this page
      </p>
      <div className="mt-5 md:space-x-4 md:inline-flex inline-grid">
        {/* todo: error page to what page did he come from. */}

        <button className="errorPageBtn hover:bg-white px-10 hover:text-black text-white bg-[#f58220]">
          Go Back
        </button>
        <Link to="/">
          <button className="errorPageBtn mt-3 md:mt-0 px-6 hover:text-white hover:bg-[#f58220]">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
