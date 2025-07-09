import { FaBell, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import Frenchfries from "/src/assets/images/Dashboard-images/French fries.png";
import chicken from "/src/assets/images/Dashboard-images/chicken.png";
import friedchicken from "/src/assets/images/Dashboard-images/fried-chicken .png";
import Nwefriedchicken from "/src/assets/images/Dashboard-images/fried-chicken 1.png";
import chickensticks from "/src/assets/images/Dashboard-images/chickensticks.png";
import potatochips from "/src/assets/images/Dashboard-images/potato-chips 1.png";

import CheckMark from "/src/assets/images/Dashboard-images/Check Mark.png";
import Edit from "/src/assets/images/Dashboard-images/Edit.png";
import Unavailable from "/src/assets/images/Dashboard-images/Unavailable.png";
import Multiply from "/src/assets/images/Dashboard-images/Multiply.png";
import Plus from "/src/assets/images/Dashboard-images/Plus.png";

import MenueForm from "./MenueForm";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

function Menu() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const [activeItem, setActiveItem] = useState("Appetizer");

  const DataMenue = [
    {
      id: 1,
      name: "Appetizer",
    },
    {
      id: 2,
      name: "Soups & Chowders",
    },
    {
      id: 3,
      name: "Hot Subs / Wraps",
    },
    {
      id: 4,
      name: "Cold Subs / Wraps",
    },
    {
      id: 5,
      name: "Pasta",
    },
    {
      id: 6,
      name: "Seafood Boxes (Friday Only)",
    },
  ];

  console.log(products);
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  /*
  function removeAll(i) {
    let products = JSON.parse(localStorage.getItem("products"));
   const NewProducts= products.filter(item => item === products[i])
    console.log("this is ths data", NewProducts)
    localStorage.removeItem(products[i]);
  }
*/

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

          <div className="flex items-center justify-between w-[calc(100%-32px)] mx-4  px-[30px]  mb-[40px] ">
            <div className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000] flex items-center gap-[10px]">
              <p>New Item </p>
              <i className="fa-solid fa-chevron-right text-[#666666A6]"></i>
              <p>
                New Item In <span>Appetizer</span>
              </p>
            </div>
            <div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="flex items-center justify-center h-[56px] gap-2  w-[177px] bg-[#088D56B2] rounded-[20px] "
              >
                <i className="fa-solid fa-circle-plus   text-[#666666A6]"></i>
                <span className="InterFont font-[400] text-[24px] leading-[29.05px] text-[#000000] ">
                  New Item
                </span>
              </button>
            </div>
          </div>

          <div>
            <div className="w-[calc(100%-32px)]  pl-[10px]  mx-4 bg-[#B7E2D133] rounded-[20px]">
              <ul className=" w-full  h-[85px] flex items-center gap-[10px]">
                {DataMenue.map((e) => (
                  <li>
                    <button
                      onClick={() => setActiveItem(e.name)}
                      className={`px-[20px] py-[10px]  rounded-[20px] InterFont font-[400] text-[16px] leading-[19.36px] ${
                        activeItem === e.name
                          ? " bg-[#B7E2D1] text-[#088D56]"
                          : ""
                      }`}
                    >
                      {e.name}
                    </button>
                  </li>
                ))}
                <li className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#666666A6]">
                  Seafood...
                </li>
              </ul>
            </div>

            <div className="w-[calc(100%-32px)] mx-4 py-[10px]     ">
              <h2 className="py-[20px] pl-[30px] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000]">
                Menu
              </h2>
              <div className="flex w-full h-[610px] py-[20px] rounded-[25px] bg-[#B7E2D133]">
                <div className="flex-[0.2]  px-[10px] ">
                  <div className=" pt-[60px]">
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="flex  w-full flex-col items-center justify-center  h-[100px]   bg-[#ffffff] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]"
                    >
                      <img className="object-contain" src={Plus}></img>
                      Add Item
                    </button>
                  </div>
                </div>

                <div className="flex-1 grid pr-[10px] overflow-scroll grid-cols-3 gap-[10px] ">
                  <div className="flex-1 flex flex-col  gap-[5px]  h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                    <div className="flex gap-[5px]  h-[148.62px]">
                      <div className="flex-1">
                        <img
                          className="object-contain h-full"
                          src={Frenchfries}
                        ></img>
                      </div>
                      <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                        <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                          {" "}
                          Fries
                        </h3>
                        <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                          This is a delightful combination of flavors and
                          textures that's perfect for snacking.
                        </p>
                      </div>
                    </div>

                    <div className="w-full  gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                        <img src={CheckMark}></img>Active
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Unavailable}></img>inactivate
                      </button>
                      <button
                        onClick={() => removeAll(i)}
                        className="flex justify-center items-center gap-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  "
                      >
                        <img src={Multiply}></img>Delete
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Edit}></img>Edit
                      </button>
                    </div>
                  </div>

                  {/******/}

                  <div className="flex-1 flex flex-col  gap-[5px]  h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                    <div className="flex gap-[5px]  h-[148.62px]">
                      <div className="flex-1">
                        <img
                          className="object-contain h-full"
                          src={chicken}
                        ></img>
                      </div>
                      <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                        <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                          {" "}
                          Mozzarella Sticks
                        </h3>
                        <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                          This is a delightful combination of flavors and
                          textures that's perfect for snacking.
                        </p>
                      </div>
                    </div>

                    <div className="w-full  gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                        <img src={CheckMark}></img>Active
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Unavailable}></img>inactivate
                      </button>
                      <button
                        onClick={() => removeAll(i)}
                        className="flex justify-center items-center gap-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  "
                      >
                        <img src={Multiply}></img>Delete
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Edit}></img>Edit
                      </button>
                    </div>
                  </div>

                  {/*** */}

                  <div className="flex-1 flex flex-col  gap-[5px]  h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                    <div className="flex gap-[5px]  h-[148.62px]">
                      <div className="flex-1">
                        <img
                          className="object-contain h-full"
                          src={potatochips}
                        ></img>
                      </div>
                      <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                        <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                          {" "}
                          Nacho Salsa Cheese
                        </h3>
                        <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                          This is a delightful combination of flavors and
                          textures that's perfect for snacking.
                        </p>
                      </div>
                    </div>

                    <div className="w-full  gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                        <img src={CheckMark}></img>Active
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Unavailable}></img>inactivate
                      </button>
                      <button
                        onClick={() => removeAll(i)}
                        className="flex justify-center items-center gap-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  "
                      >
                        <img src={Multiply}></img>Delete
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Edit}></img>Edit
                      </button>
                    </div>
                  </div>
                  {/*** ******/}
                  <div className="flex-1 flex flex-col  gap-[5px]  h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                    <div className="flex gap-[5px]  h-[148.62px]">
                      <div className="flex-1">
                        <img
                          className="object-contain h-full"
                          src={Nwefriedchicken}
                        ></img>
                      </div>
                      <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                        <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                          {" "}
                          Chili Cheese Nuggets
                        </h3>
                        <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                          This is a delightful combination of flavors and
                          textures that's perfect for snacking.
                        </p>
                      </div>
                    </div>

                    <div className="w-full  gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                        <img src={CheckMark}></img>Active
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Unavailable}></img>inactivate
                      </button>
                      <button
                        onClick={() => removeAll(i)}
                        className="flex justify-center items-center gap-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  "
                      >
                        <img src={Multiply}></img>Delete
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Edit}></img>Edit
                      </button>
                    </div>
                  </div>

                  {/****** */}

                  <div className="flex-1 flex flex-col  gap-[5px]  h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                    <div className="flex gap-[5px]  h-[148.62px]">
                      <div className="flex-1">
                        <img
                          className="object-contain h-full"
                          src={chickensticks}
                        ></img>
                      </div>
                      <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                        <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                          {" "}
                          Buffalo Chicken fingers
                        </h3>
                        <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                          This is a baked version of the popular spicy
                          appetizer. Use more or less cayenne to taste.
                        </p>
                      </div>
                    </div>

                    <div className="w-full   gap-y-[10px] min-h-[50px] grid grid-cols-2   items-center ">
                      <button className="flex justify-center  items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                        <img src={CheckMark}></img>Active
                      </button>
                      <button className="flex justify-center  items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Unavailable}></img>inactivate
                      </button>
                      <button
                        onClick={() => removeAll(i)}
                        className="flex justify-center  items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  "
                      >
                        <img src={Multiply}></img>Delete
                      </button>
                      <button className="flex justify-center  items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Edit}></img>Edit
                      </button>
                    </div>
                  </div>
                  {/********* */}
                  <div className="flex-1 flex flex-col  gap-[5px] h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                    <div className="flex gap-[5px]  h-[148.62px]">
                      <div className="flex-1">
                        <img
                          className="object-contain h-full"
                          src={friedchicken}
                        ></img>
                      </div>
                      <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                        <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                          {" "}
                          Chicken Wings
                        </h3>
                        <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                          French Fries are a universally adored side dish known
                          for their crispy exterior and tender, fluffy interior.
                        </p>
                      </div>
                    </div>

                    <div className="w-full   gap-y-[10px] min-h-[50px] grid grid-cols-2 justify-center items-center ">
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                        <img src={CheckMark}></img>Active
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Unavailable}></img>inactivate
                      </button>
                      <button
                        onClick={() => removeAll(i)}
                        className="flex justify-center items-center gap-[5px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  "
                      >
                        <img src={Multiply}></img>Delete
                      </button>
                      <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                        <img src={Edit}></img>Edit
                      </button>
                    </div>
                  </div>
                  {products.map((e, i) => (
                    <div
                      key={i}
                      className="flex-1 flex-col-[5px] h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]"
                    >
                      <div className="flex gap-[5px]  h-[148.62px]">
                        <div className="flex-1">
                          <img
                            className="object-contain h-full"
                            src={e.image}
                          ></img>
                        </div>
                        <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                          <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                            {e.name}
                          </h3>
                          <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                            {e.description}
                          </p>
                        </div>
                      </div>

                      <div className="w-full gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
                        <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6] ">
                          <img src={CheckMark}></img>Active
                        </button>
                        <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Unavailable}></img>inactivate
                        </button>
                        <button
                          onClick={() => removeAll(i)}
                          className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  "
                        >
                          <img src={Multiply}></img>Delete
                        </button>
                        <button className="flex justify-center items-center gap-[2px] InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]  ">
                          <img src={Edit}></img>Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFormOpen && (
        <MenueForm
          setIsFormOpen={setIsFormOpen}
          setProducts={setProducts}
          products={products}
        />
      )}{" "}
    </>
  );
}

export default Menu;
