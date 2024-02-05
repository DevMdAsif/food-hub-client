import { Link } from "@mui/material";
import CartItem from "../../../../component/CartItem/CartItem";
import Banner from "../../../../component/banner/Banner";
import useFetchData from "../../../../hooks/FetchData/useFetchData";
import { IoIosArrowForward } from "react-icons/io";

function PopularMenu() {
  const { error, loading, data: foods } = useFetchData("/api/foods");
  const popularItem = foods.filter((food) => food.category === "Popular");

  return (
    <div className="h-full bg-[#020617] px-3 xl:px-20 py-10 xl:py-20">
      <Banner header="Check it out" title="Special Menu for you..." />

      <div className="space-y-10 lg:space-y-0 pt-10 md:mx-24 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-10">
        {popularItem.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="deshis">
          <button className="hover_effcet inline-flex underline decoration-dashed decoration-1 text-xl text-white ">
            View Menu
            <IoIosArrowForward className="mt-[6px]" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PopularMenu;
