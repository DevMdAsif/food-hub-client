import Loading from "../../../component/Loading/Loading";
import useFetchData from "../../../hooks/FetchData/useFetchData";
import { Helmet } from "react-helmet-async";

import Header from "../../../component/header/Header";
import DeshesCategory from "../DeshesCategory/DeshesCategory";

function Deshes() {
  const { error, loading, data: foods } = useFetchData("api/foods");

  const coffee = foods.filter((food) => food.category === "Coffee");
  const burger = foods.filter((food) => food.category === "Burger");
  const noodles = foods.filter((food) => food.category === "Noodles");
  const pizza = foods.filter((food) => food.category === "Pizza");
  const dessert = foods.filter((food) => food.category === "Dessert");

  return (
    <>
      <Helmet>
        <title>Yum - Menu</title>
      </Helmet>
      <div className="h-full bg-[#020617] pb-10 px-2 md:px-10 xl:px-20 ">
        <div className="py-36">
          <Header title="YUM MENU" />
        </div>

        {/* loading and error handleing */}
        {loading && <Loading />}
        {error && <p className="text-white">{error}</p>}
        {/* coffee items  */}
        <DeshesCategory item={coffee} title="coffee" />
        {/* burger items */}
        <div className="mt-20">
          <DeshesCategory item={burger} title="burger" />
        </div>
        {/* noodles items */}
        <div className="mt-20">
          <DeshesCategory item={noodles} title="noodles" />
        </div>
        {/* pizza items */}
        <div className="mt-20">
          <DeshesCategory item={pizza} title="pizza" />
        </div>
        {/* dessert items */}
        <div className="mt-20">
          <DeshesCategory item={dessert} title="dessert" />
        </div>
      </div>
    </>
  );
}

export default Deshes;
