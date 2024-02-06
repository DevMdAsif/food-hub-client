import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import coffeeImg from "../../../assets/images/HomeImg/cup-ewWWMIpt.svg";
import burgerImg from "../../../assets/images/HomeImg/burger-1-eM0xP7uX.svg";
import noodlesImg from "../../../assets/images/HomeImg/noodles-txyC1pya.svg";
import pizzaImg from "../../../assets/images/HomeImg/pizza-hNVlZ_YH.svg";
import dessertImg from "../../../assets/images/HomeImg/dessert-SlVVk-5x.svg";

import MenuItems from "../menuCategory/MenuItems";
import { useState } from "react";
import useFetchData from "../../../hooks/FetchData/useFetchData";
import Loading from "../../../component/Loading/Loading";
import Header from "../../../component/header/Header";

function Menu() {
  const [buttonActive, setButtonActive] = useState(1);

  const { error, loading, data: foods } = useFetchData("api/foods");

  const coffee = foods.filter((food) => food.category === "Coffee");
  const burger = foods.filter((food) => food.category === "Burger");
  const noodles = foods.filter((food) => food.category === "Noodles");
  const pizza = foods.filter((food) => food.category === "Pizza");
  const dessert = foods.filter((food) => food.category === "Dessert");

  return (
    <div className="h-full pt-10 bg-[#020617] ">
      <div className="py-24 lg:mx-10 mx-4">
        <Header title="YUM MENU" />
      </div>
      <Tabs>
        <div className="lg:flex lg:justify-center">
          <TabList className="scrollbar flex scroll-smooth pb-2 space-x-5 text-white mt-10 overflow-x-auto ">
            <Tab
              onClick={() => setButtonActive(1)}
              className={`tab_container ml-5 ${
                buttonActive === 1 ? "bg-[#f58220]" : ""
              }`}
            >
              <div
                className={`tab_image ${buttonActive === 1 ? "bg-white" : ""}`}
              >
                <img src={coffeeImg} alt="" />
              </div>
              <button className="">Coffee</button>
            </Tab>
            <Tab
              onClick={() => setButtonActive(2)}
              className={`tab_container ${
                buttonActive === 2 ? "bg-[#f58220]" : ""
              }`}
            >
              <div
                className={`tab_image ${buttonActive === 2 ? "bg-white" : ""}`}
              >
                <img src={burgerImg} alt="" />
              </div>
              <button className="">Burger</button>
            </Tab>
            <Tab
              onClick={() => setButtonActive(3)}
              className={`tab_container  ${
                buttonActive === 3 ? "bg-[#f58220]" : ""
              }`}
            >
              <div
                className={`tab_image ${buttonActive === 3 ? "bg-white" : ""}`}
              >
                <img src={noodlesImg} alt="" />
              </div>
              <button className="">Noodles</button>
            </Tab>
            <Tab
              onClick={() => setButtonActive(4)}
              className={`tab_container  ${
                buttonActive === 4 ? "bg-[#f58220]" : ""
              }`}
            >
              <div
                className={`tab_image w-14 ${
                  buttonActive === 4 ? "bg-white" : ""
                }`}
              >
                <img src={pizzaImg} alt="" />
              </div>
              <button className="">Pizza</button>
            </Tab>
            <Tab
              onClick={() => setButtonActive(5)}
              className={`tab_container  ${
                buttonActive === 5 ? "bg-[#f58220]" : ""
              }`}
            >
              <div
                className={`tab_image ${buttonActive === 5 ? "bg-white" : ""}`}
              >
                <img src={dessertImg} alt="" />
              </div>
              <button className="">Dessert</button>
            </Tab>
          </TabList>
        </div>

        {loading && <Loading />}
        {error && <p>{error.message}</p>}
        <TabPanel>
          <MenuItems items={coffee} />
        </TabPanel>
        <TabPanel>
          <MenuItems items={burger} />
        </TabPanel>
        <TabPanel>
          <MenuItems items={noodles} />
        </TabPanel>
        <TabPanel>
          <MenuItems items={pizza} />
        </TabPanel>
        <TabPanel>
          <MenuItems items={dessert} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Menu;
