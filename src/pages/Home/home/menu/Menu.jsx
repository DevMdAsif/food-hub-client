import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import coffeeImg from "../../../../assets/images/HomeImg/cup-ewWWMIpt.svg";
import burgerImg from "../../../../assets/images/HomeImg/burger-1-eM0xP7uX.svg";
import noodlesImg from "../../../../assets/images/HomeImg/noodles-txyC1pya.svg";
import pizzaImg from "../../../../assets/images/HomeImg/pizza-hNVlZ_YH.svg";
import dessertImg from "../../../../assets/images/HomeImg/dessert-SlVVk-5x.svg";

import MenuItems from "./MenuItems";
import useFetchData from "../../../../hooks/FetchData/useFetchData";
import Banner from "../../../../component/banner/Banner";
import Loading from "../../../../component/Loading/Loading";
import { useState } from "react";

function Menu() {
  const [buttonActive, setButtonActive] = useState(1);

  const { error, loading, data: foods } = useFetchData("api/foods");

  const coffee = foods.filter((food) => food.category === "Coffee");
  const burger = foods.filter((food) => food.category === "Burger");
  const noodles = foods.filter((food) => food.category === "Noodles");
  const pizza = foods.filter((food) => food.category === "Pizza");
  const dessert = foods.filter((food) => food.category === "Dessert");

  return (
    <div className="h-full py-20 bg-[#020617] ">
      <Tabs>
        <div className="">
          <div className="lg:flex lg:justify-center">
            <div>
              <div className="mx-5">
                <Banner header="Menu" title="Special Menu for you..." />
              </div>
              <TabList className="scrollbar flex scroll-smooth pb-2 space-x-5 text-white mt-10 overflow-x-auto ">
                <Tab>
                  <div
                    onClick={() => setButtonActive(1)}
                    className={`tab_container ml-5 ${
                      buttonActive === 1 ? "bg-[#f58220]" : ""
                    }`}
                  >
                    <div
                      className={`tab_image ${
                        buttonActive === 1 ? "bg-white" : ""
                      }`}
                    >
                      <img src={coffeeImg} alt="" />
                    </div>
                    <button className="">Coffee</button>
                  </div>
                </Tab>
                <Tab>
                  <div
                    onClick={() => setButtonActive(2)}
                    className={`tab_container ${
                      buttonActive === 2 ? "bg-[#f58220]" : ""
                    }`}
                  >
                    <div
                      className={`tab_image ${
                        buttonActive === 2 ? "bg-white" : ""
                      }`}
                    >
                      <img src={burgerImg} alt="" />
                    </div>
                    <button className="">Burger</button>
                  </div>
                </Tab>
                <Tab>
                  <div
                    onClick={() => setButtonActive(3)}
                    className={`tab_container  ${
                      buttonActive === 3 ? "bg-[#f58220]" : ""
                    }`}
                  >
                    <div
                      className={`tab_image ${
                        buttonActive === 3 ? "bg-white" : ""
                      }`}
                    >
                      <img src={noodlesImg} alt="" />
                    </div>
                    <button className="">Noodles</button>
                  </div>
                </Tab>
                <Tab>
                  <div
                    onClick={() => setButtonActive(4)}
                    className={`tab_container  ${
                      buttonActive === 4 ? "bg-[#f58220]" : ""
                    }`}
                  >
                    <div
                      className={`tab_image ${
                        buttonActive === 4 ? "bg-white" : ""
                      }`}
                    >
                      <img src={pizzaImg} alt="" />
                    </div>
                    <button className="">Pizza</button>
                  </div>
                </Tab>
                <Tab>
                  <div
                    onClick={() => setButtonActive(5)}
                    className={`tab_container  ${
                      buttonActive === 5 ? "bg-[#f58220]" : ""
                    }`}
                  >
                    <div
                      className={`tab_image ${
                        buttonActive === 5 ? "bg-white" : ""
                      }`}
                    >
                      <img src={dessertImg} alt="" />
                    </div>
                    <button className="">Dessert</button>
                  </div>
                </Tab>
              </TabList>
            </div>
          </div>

          <div className="">
            {loading && <Loading />}
            {error && <p>{error.message}</p>}
            <TabPanel>
              <MenuItems food={coffee} />
            </TabPanel>
            <TabPanel>
              <MenuItems food={burger} />
            </TabPanel>
            <TabPanel>
              <MenuItems food={noodles} />
            </TabPanel>
            <TabPanel>
              <MenuItems food={pizza} />
            </TabPanel>
            <TabPanel>
              <MenuItems food={dessert} />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default Menu;
