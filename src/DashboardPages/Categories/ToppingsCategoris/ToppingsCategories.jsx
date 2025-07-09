import { FaBell, FaUserCircle } from "react-icons/fa";
import CheckMark from "/src/assets/images/Dashboard-images/Check Mark.png";
import Edit from "/src/assets/images/Dashboard-images/Edit.png";
import Unavailable from "/src/assets/images/Dashboard-images/Unavailable.png";
import Multiply from "/src/assets/images/Dashboard-images/Multiply.png";
import Plus from "/src/assets/images/Dashboard-images/Plus.png";
import deliciousfood from "/src/assets/images/Dashboard-images/deliciousfood.png";
import shrimp from "/src/assets/images/Dashboard-images/shrimp.png";
import sauces from "/src/assets/images/Dashboard-images/sauces.png";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ToppingsCategoriesFoorm from "./ToppingsCategoriesFoorm";
import PremiumToppings from "./ToppingsItems/PremiumToppings";
function ToppingsCategories() {
  const [activeItem, setActiveItem] = useState("ToppingsCategories");
  const [currentpPage, setcurrentpPage] = useState("ToppingsCategories");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("ToppingsCategories");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <>
      <section>
        <div className="w-full  h-[1024px]">
          <header className="flex custom-shadow justify-between mb-[40px]  items-center ml-[20px] h-[86px] bg-[#FFFFFF] px-[25px]  rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] ">
            <div className="flex items-centerrounded-lg p-2 h-[38px] w-[314px]">
              <Search className="mr-2 text-gray-400" />
              <TextField
                placeholder="Search Order..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
              />
            </div>
            <div className="">
              <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
                <FaBell className="text-gray-600" size={20} />
              </button>

              <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
                <FaUserCircle className="text-gray-600" size={24} />
              </button>
            </div>
          </header>

          <div className="w-[calc(100%-32px)] mx-4  px-[30px]  mb-[40px] ">
            <div className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000] flex items-center gap-[10px]">
              <button onClick={() => setActiveItem("ToppingsCategories")}>
                Categories{" "}
              </button>
              <i className="fa-solid fa-chevron-right text-[#666666A6]"></i>
              <button>Add Toppings </button>
              <i
                className={`${
                  activeItem == "ToppingsCategories" ? "hidden" : "block"
                } fa-solid fa-chevron-right text-[#666666A6]`}
              ></i>
              <button className="text-[#000000A6]">
                {activeItem == "ToppingsCategories" ? "" : activeItem}
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center w-[calc(100%-120px)] h-[88px] mx-[60px] rounded-[20px] bg-[#B7E2D133]">
              <ul className="w-full h-full flex items-center justify-evenly">
                <li>
                  <button
                    onClick={() => setActiveItem("Popular Toppings")}
                    className={` px-[20px] py-[10px] rounded-[20px] nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] ${
                      activeItem === "Popular Toppings" ? " bg-[#B7E2D1]" : ""
                    }`}
                  >
                    Popular Toppings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveItem("Special Toppings")}
                    className={` px-[20px] py-[10px] rounded-[20px] nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] ${
                      activeItem === "Special Toppings" ? " bg-[#B7E2D1]" : ""
                    }`}
                  >
                    Special Toppings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveItem("Premium Toppings")}
                    className={` px-[20px] py-[10px] rounded-[20px] nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] ${
                      activeItem === "Premium Toppings" ? " bg-[#B7E2D1]" : ""
                    }`}
                  >
                    Premium Toppings
                  </button>
                </li>
              </ul>
            </div>

            {activeItem === "ToppingsCategories" && (
              <div className="w-full px-[10px] ">
                <div className="px-[40px] py-[20px] flex justify-between items-center">
                  <h2 className="InterFont font-[400] text-[24px] leading-[25.05px] text-[#000000]">
                    Categories
                  </h2>
                  <p className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                    Show All Items
                  </p>
                </div>

                <div className="w-full gap-[20px]   grid grid-cols-2 overflow-scroll h-[610px] pl-[50px] px-[20px] py-[20px] rounded-[25px] bg-[#B7E2D133]">
                  <div className="flex    h-[267px] items-center justify-center ">
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="flex flex-col custom-shadow items-center justify-center  h-[140px]  w-[218px] bg-[#ffffff] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]"
                    >
                      <img src={Plus}></img>
                      Add Item
                    </button>
                  </div>

                  <div className="gap-[5px] flex items-center custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]">
                    <div className="flex-[0.7]  flex justify-center ">
                      <img className="object-contain " src={sauces}></img>
                    </div>

                    <div className=" flex-1 flex flex-col  gap-[10px]">
                      <div className="flex flex-col gap-[10px] justify-between items-center">
                        <h3 className="InterFont font-[400] text-[24px] text-center leading-[29.05px] text-[#088D56]">
                          Popular Toppings
                        </h3>
                        <div className=" w-full flex flex-col gap-[10px] justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                          <p onClick={() => activeItem("Popular Toppings")}>
                            Items: <span>12</span>{" "}
                          </p>
                          <div className="w-full">
                            <ul className="w-full flex items-center flex-wrap  gap-x-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]">
                              <li>Anchovies</li>
                              <li>Shrimp</li>
                              <li>Grilled</li>
                              <li>Chicken</li>
                              <li>Extra Cheese</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w-full gap-y-[10px]  min-h-[50px]  grid grid-cols-2 justify-between items-center ">
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                          <img src={CheckMark}></img>Active
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Unavailable}></img>inactivate
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Multiply}></img>Delete
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Edit}></img>Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  {/******** */}
                  <div className="gap-[5px] flex items-center custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]">
                    <div className="flex-[0.7]  flex justify-center ">
                      <img className="object-contain " src={shrimp}></img>
                    </div>

                    <div className=" flex-1 flex flex-col gap-[10px] ">
                      <div className="flex flex-col gap-[10px] justify-between items-center">
                        <h3 className="InterFont font-[400] text-[24px] text-center leading-[29.05px] text-[#088D56]">
                          Premium Toppings
                        </h3>
                        <div className=" w-full flex flex-col gap-[10px] justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                          <p onClick={() => activeItem("Premium Toppings")}>
                            Items: <span>12</span>{" "}
                          </p>
                          <div className="w-full">
                            <ul className="w-full flex flex-wrap  gap-x-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]">
                              <li>Anchovies</li>
                              <li>Shrimp</li>
                              <li>Grilled</li>
                              <li>Chicken</li>
                              <li>Extra Cheese</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w-full  gap-y-[10px] min-h-[50px]  grid grid-cols-2 justify-between items-center ">
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                          <img src={CheckMark}></img>Active
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Unavailable}></img>inactivate
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Multiply}></img>Delete
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Edit}></img>Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  {/******** */}
                  <div className="gap-[5px] flex items-center custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]">
                    <div className="flex-[0.7]  flex justify-center ">
                      <img
                        className="object-contain "
                        src={deliciousfood}
                      ></img>
                    </div>

                    <div className=" flex-1 flex flex-col gap-[20px] ">
                      <div className="flex flex-col gap-[10px] justify-between items-center">
                        <h3 className="InterFont font-[400] text-[24px] text-center leading-[29.05px] text-[#088D56]">
                          Special Toppings
                        </h3>
                        <div className=" w-full flex flex-col gap-[10px] justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                          <p onClick={() => activeItem("Special Toppings")}>
                            Items: <span>12</span>{" "}
                          </p>
                          <div className="w-full">
                            <ul className="w-full flex flex-wrap  gap-x-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]">
                              <li>Anchovies</li>
                              <li>Shrimp</li>
                              <li>Grilled</li>
                              <li>Chicken</li>
                              <li>Extra Cheese</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w-full gap-y-[10px]  min-h-[50px]  grid grid-cols-2 justify-between items-center ">
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                          <img src={CheckMark}></img>Active
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Unavailable}></img>inactivate
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Multiply}></img>Delete
                        </button>
                        <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Edit}></img>Edit
                        </button>
                      </div>
                    </div>
                  </div>

                  {products.map((e, i) => (
                    <div
                      key={i}
                      className="gap-[5px] flex items-center custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]"
                    >
                      <div className="flex-[0.7]  flex justify-center ">
                        <img className="object-contain " src={e.image}></img>
                      </div>

                      <div className=" flex-1 flex flex-col gap-[20px] ">
                        <div className="flex flex-col gap-[10px] justify-between items-center">
                          <h3 className="InterFont font-[400] text-[24px] text-center leading-[29.05px] text-[#088D56]">
                            {e.name}
                          </h3>
                          <div className=" w-full flex flex-col gap-[10px] justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                            <p
                              onClick={() => setcurrentpPage("PremiumToppings")}
                            >
                              Items: <span>{e.Ordering}</span>{" "}
                            </p>
                            <div className="w-full">
                              <ul className="w-full flex flex-wrap  gap-x-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]">
                                <li>Anchovies</li>
                                <li>Shrimp</li>
                                <li>Grilled</li>
                                <li>Chicken</li>
                                <li>Extra Cheese</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="w-full  gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-between items-center ">
                          <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                            <img src={CheckMark}></img>Active
                          </button>
                          <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                            <img src={Unavailable}></img>inactivate
                          </button>
                          <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                            <img src={Multiply}></img>Delete
                          </button>
                          <button className="flex items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                            <img src={Edit}></img>Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeItem === "Premium Toppings" && <PremiumToppings />}
          </div>
        </div>
      </section>

      {isFormOpen && (
        <ToppingsCategoriesFoorm
          setIsFormOpen={setIsFormOpen}
          setProducts={setProducts}
          products={products}
        />
      )}
    </>
  );
}

export default ToppingsCategories;
