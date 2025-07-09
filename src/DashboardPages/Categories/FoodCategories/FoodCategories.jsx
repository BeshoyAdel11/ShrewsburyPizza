import { FaBell, FaUserCircle } from "react-icons/fa";
import CheckMark from "/src/assets/images/Dashboard-images/Check Mark.png";
import Edit from "/src/assets/images/Dashboard-images/Edit.png";
import Unavailable from "/src/assets/images/Dashboard-images/Unavailable.png";
import Multiply from "/src/assets/images/Dashboard-images/Multiply.png";
import Plus from "/src/assets/images/Dashboard-images/Plus.png";
import chiken from "/src/assets/images/Dashboard-images/chiken.png";
import salad from "/src/assets/images/Dashboard-images/salad.png";
import chikensauce from "/src/assets/images/Dashboard-images/chiken sauce.png";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import FoodCategoriesForm from "./FoodCategoriesForm";
function FoodCategories() {
  const [activeItem, setActiveItem] = useState("Catering Salads");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("Categories");
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
              <p>New Item </p>
              <i className="fa-solid fa-chevron-right text-[#666666A6]"></i>
              <p>Catering Salads</p>
            </div>
          </div>

          <div>
            <div className="flex items-center w-[calc(100%-120px)] h-[88px] mx-[60px] rounded-[20px] bg-[#B7E2D133]">
              <ul className="w-full h-full flex items-center justify-evenly">
                <li>
                  <button
                    onClick={() => setActiveItem("Catering Salads")}
                    className={` px-[20px] py-[10px] rounded-[20px] nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] ${
                      activeItem === "Catering Salads" ? " bg-[#B7E2D1]" : ""
                    }`}
                  >
                    Catering Salads
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveItem("Catering Platters")}
                    className={` px-[20px] py-[10px] rounded-[20px] nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] ${
                      activeItem === "Catering Platters" ? " bg-[#B7E2D1]" : ""
                    }`}
                  >
                    Catering Platters
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveItem("Catering Chicken")}
                    className={` px-[20px] py-[10px] rounded-[20px] nterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] ${
                      activeItem === "Catering Chicken" ? " bg-[#B7E2D1]" : ""
                    }`}
                  >
                    Catering Chicken
                  </button>
                </li>
              </ul>
            </div>

            <div className="w-full px-[10px] ">
              <div className="px-[40px] py-[20px] flex justify-between items-center">
                <h2 className="InterFont font-[400] text-[24px] leading-[25.05px] text-[#000000]">
                  Categories
                </h2>
                <p className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                  Show All Items
                </p>
              </div>

              <div className="w-full gap-[20px]  grid grid-cols-2 overflow-scroll h-[610px] pl-[50px] pr-[20px] py-[20px] rounded-[25px] bg-[#B7E2D133]">
                <div className="flex    h-[267px] items-center justify-center ">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="flex flex-col custom-shadow items-center justify-center  h-[140px]  w-[218px] bg-[#ffffff] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]"
                  >
                    <img src={Plus}></img>
                    Add Item
                  </button>
                </div>

                {/************/}
                <div className=" flex items-center  custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]">
                  <div className="flex-[0.7] flex justify-center ">
                    <img className="object-contain " src={chiken}></img>
                  </div>

                  <div className="flex-1 flex flex-col gap-[20px] ">
                    <div className="flex flex-col gap-[20px] justify-between items-center">
                      <h3 className="InterFont text-center font-[400] text-[24px] leading-[29.05px] text-[#088D56]">
                        Catering Chicken
                      </h3>
                      <div className=" w-full flex flex-wrap justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                        <p>
                          Items: <span>6</span>{" "}
                        </p>
                        <p>
                          Dressing: <span>12</span>{" "}
                        </p>
                      </div>
                      <p className=" InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                        Serves 10 People (Full Tray)
                      </p>
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
                {/********* */}
                <div className=" flex items-center  custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]">
                  <div className="flex-[0.7] flex justify-center ">
                    <img className="object-contain " src={salad}></img>
                  </div>

                  <div className="flex-1 flex flex-col gap-[20px] ">
                    <div className="flex flex-col gap-[20px] justify-between items-center">
                      <h3 className="InterFont text-center font-[400] text-[24px] leading-[29.05px] text-[#088D56]">
                        Catering Salads{" "}
                      </h3>
                      <div className=" w-full flex flex-wrap justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                        <p>
                          Items: <span>6</span>{" "}
                        </p>
                        <p>
                          Dressing: <span>12</span>{" "}
                        </p>
                      </div>
                      <p className=" InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                        Serves 10 People (Full Tray)
                      </p>
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
                {/******************** */}
                <div className=" flex items-center  custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]">
                  <div className="flex-[0.7] flex justify-center ">
                    <img className="object-contain " src={chikensauce}></img>
                  </div>

                  <div className="flex-1 flex flex-col gap-[20px] ">
                    <div className="flex flex-col gap-[20px] justify-between items-center">
                      <h3 className="InterFont text-center font-[400] text-[24px] leading-[29.05px] text-[#088D56]">
                        Catering Platters
                      </h3>
                      <div className=" w-full flex flex-wrap justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                        <p>
                          Items: <span>6</span>{" "}
                        </p>
                        <p>
                          Dressing: <span>12</span>{" "}
                        </p>
                      </div>
                      <p className=" InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                        Serves 6-8 people
                      </p>
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

                {products.map((e, i) => (
                  <div
                    key={i}
                    className=" flex items-center gap-[5px] custom-shadow rounded-[20px] h-[267px] p-[10px] bg-[#ffffff]"
                  >
                    <div className="flex-[0.7] flex justify-center ">
                      <img className="object-contain " src={e.image}></img>
                    </div>

                    <div className="flex-1 flex flex-col gap-[20px] ">
                      <div className="flex flex-col gap-[20px] justify-between items-center">
                        <h3 className="InterFont text-center font-[400] text-[24px] leading-[29.05px] text-[#088D56]">
                          {e.name}
                        </h3>
                        <div className=" w-full flex flex-wrap justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                          <p>
                            Items: <span>{e.Ordering}</span>{" "}
                          </p>
                          <p>
                            Dressing: <span>12</span>{" "}
                          </p>
                        </div>
                        <p className=" InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                          {e.description}
                        </p>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFormOpen && (
        <FoodCategoriesForm
          setIsFormOpen={setIsFormOpen}
          setProducts={setProducts}
          products={products}
        />
      )}
    </>
  );
}

export default FoodCategories;
