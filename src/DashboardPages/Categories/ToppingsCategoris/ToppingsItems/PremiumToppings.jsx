import { FaBell, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import shrimp from "/src/assets/images/Dashboard-images/shrimp.png";
import sardines from "/src/assets/images/Dashboard-images/sardines.png";
import crispychickenwings from "/src/assets/images/Dashboard-images/crispychickenwings.png";
import grillechicken from "/src/assets/images/Dashboard-images/grillechicken.png";
import beefsteak from "/src/assets/images/Dashboard-images/beefsteak.png";
import cheese from "/src/assets/images/Dashboard-images/cheese.png";

import CheckMark from "/src/assets/images/Dashboard-images/Check Mark.png";
import Edit from "/src/assets/images/Dashboard-images/Edit.png";
import Unavailable from "/src/assets/images/Dashboard-images/Unavailable.png";
import Multiply from "/src/assets/images/Dashboard-images/Multiply.png";
import Plus from "/src/assets/images/Dashboard-images/Plus.png";

import PremiumToppingsForm from "./PremiumToppingsForm";

function PremiumToppings() {
  const [isFormOpen, setIsFormOpen] = useState(false); // التحكم في فتح الفورم
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

  //console.log(products)
  useEffect(() => {
    const storedProducts = localStorage.removeItem("PremiumToppingsForm");
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
        <div>
          <div className="w-[calc(100%-32px)] mx-4 py-[10px]     ">
            <h2 className="py-[20px] pl-[30px] InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000]">
              Premium Toppings
            </h2>
            <div className="flex w-full h-[610px] py-[20px] rounded-[25px] bg-[#B7E2D133]">
              <div className="flex-[0.2] px-[10px] ">
                <div className="pt-[60px]">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="flex flex-col items-center justify-center h-[100px] w-full bg-[#ffffff] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]"
                  >
                    <img className="object-contain" src={Plus}></img>
                    Add Item
                  </button>
                </div>
              </div>

              <div className="flex-1 grid overflow-scroll  pr-[10px] grid-cols-3 gap-[10px] ">
                <div className="flex-1 flex flex-col gap-[5px] justify-between h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                  <div className="flex gap-[5px]   h-[148.62px]">
                    <div className="flex-1">
                      <img
                        className=" object-contain h-full"
                        src={sardines}
                      ></img>
                    </div>
                    <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                      <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                        Anchovies
                      </h3>
                      <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                        French Fries are a universally adored side dish known
                        for their crispy exterior and tender, fluffy interior.
                      </p>
                    </div>
                  </div>

                  <div className="w-full   gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
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
                {/**** */}
                <div className="flex-1 flex flex-col gap-[5px] justify-between h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                  <div className="flex gap-[5px]   h-[148.62px]">
                    <div className="flex-1">
                      <img
                        className=" object-contain h-full"
                        src={shrimp}
                      ></img>
                    </div>
                    <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                      <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                        Shrimp
                      </h3>
                      <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                        Sticks of mozzarella cheese are coated in seasoned
                        Italian breadcrumbs, then deep fried until golden brown
                        for this classic appetizer.
                      </p>
                    </div>
                  </div>

                  <div className="w-full   gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
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
                {/**** */}
                <div className="flex-1 flex flex-col gap-[5px] justify-between h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                  <div className="flex gap-[5px]   h-[148.62px]">
                    <div className="flex-1">
                      <img
                        className=" object-contain h-full"
                        src={grillechicken}
                      ></img>
                    </div>
                    <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                      <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                        Grilled Chicken
                      </h3>
                      <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                        This is a delightful combination of flavors and textures
                        that's perfect for snacking.
                      </p>
                    </div>
                  </div>

                  <div className="w-full   gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
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
                {/************** */}
                <div className="flex-1 flex flex-col gap-[5px] justify-between h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                  <div className="flex gap-[5px]   h-[148.62px]">
                    <div className="flex-1">
                      <img
                        className=" object-contain h-full"
                        src={beefsteak}
                      ></img>
                    </div>
                    <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                      <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                        Steak{" "}
                      </h3>
                      <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                        French Fries are a universally adored side dish known
                        for their crispy exterior and tender, fluffy interior.
                      </p>
                    </div>
                  </div>

                  <div className="w-full   gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
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
                {/******************** */}
                <div className="flex-1 flex flex-col gap-[5px] justify-between h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                  <div className="flex gap-[5px]   h-[148.62px]">
                    <div className="flex-1">
                      <img
                        className=" object-contain h-full"
                        src={crispychickenwings}
                      ></img>
                    </div>
                    <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                      <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                        {" "}
                        Crispy Chicken
                      </h3>
                      <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                        This is a baked version of the popular spicy appetizer.
                        Use more or less cayenne to taste.
                      </p>
                    </div>
                  </div>

                  <div className="w-full   gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
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
                {/********** */}
                <div className="flex-1 flex flex-col gap-[5px] justify-between h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]">
                  <div className="flex gap-[5px]   h-[148.62px]">
                    <div className="flex-1">
                      <img
                        className=" object-contain h-full"
                        src={cheese}
                      ></img>
                    </div>
                    <div className="flex-1 flex flex-col gap-[10px] justify-center  ">
                      <h3 className="text-center InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56]">
                        {" "}
                        Extra Cheese
                      </h3>
                      <p className="text-center InterFont font-[400] text-[10px] leading-[12.1px] text-[#000000A6]">
                        French Fries are a universally adored side dish known
                        for their crispy exterior and tender, fluffy interior.
                      </p>
                    </div>
                  </div>

                  <div className="w-full   gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
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
                {products.map((e, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col gap-[5px] justify-between h-[231px] p-[5px] custom-shadow bg-[#ffffff] rounded-[20px]"
                  >
                    <div className="flex gap-[5px]   h-[148.62px]">
                      <div className="flex-1">
                        <img
                          className=" object-contain h-full"
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

                    <div className="w-full   gap-y-[10px]  min-h-[50px] grid grid-cols-2 justify-center items-center ">
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
      </section>
      {isFormOpen && (
        <PremiumToppingsForm
          setIsFormOpen={setIsFormOpen}
          setProducts={setProducts}
          products={products}
        />
      )}{" "}
    </>
  );
}

export default PremiumToppings;
