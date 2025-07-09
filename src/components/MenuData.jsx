import pizaa from "/src/assets/images/menu-images/Hawaiian  Pizza.png";
import { useState } from "react";
function MenuData(props) {
  const [num, setNum] = useState(0);

  const numPlus = () => {
    setNum(num + 1);
  };

  const numMinus = () => {
    setNum(num - 1);
    if (num === 0) {
    }
  };

  return (
    <section className="overflow-y-auto w-screen z-30 inset-0 fixed bg-[#7C7C7C7A] bg-opacity-90">
      <div className="container flex items-center justify-center ">
        <div className="p-[30px] w-[1069px] max-w-full min-h-[666px] bg-white ">
          <div className="flex justify-end">
            <button onClick={() => props.getData(false)}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="flex  md:gap-[80px] gap-[10px] flex-col md:flex-row items-center justify-center  ">
            <div className="  md:w-[338px] min-h-[363px] md:h-[589px] flex flex-col md:items-start items-center gap-[10px] w-full">
              <div className="md:w-[315px] md:h-[220px] w-[201px] h-[164.08px]">
                <img src={pizaa} className="w-full object-contain"></img>
              </div>
              <div className=" ">
                <h1 className=" font-[500] text-[24px]   leading-[36px] md:font-[600]   md:text-[40px] md:leading-[60px]  ">
                  {props.title}
                </h1>
              </div>
              <div className="flex  md:justify-between justify-center gap-[37px]  w-full px-[10px] items-center">
                <div className="">
                  <ul className="flex items-center justify-between w-[120px] max-w-full">
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#D9D9D9]"></i>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <p className="font-[500] text-[24px] leading-[36px] text-[#00833F]">
                    {props.price}$
                  </p>
                </div>
              </div>
              <div className="w-full h-auto ">
                <p className="font-[400] text-[14px] text-center leading-[21px] md:font-[400] overflow-hidden md:text-[24px] md:leading-[36px] text-[#7B4128]">
                  {props.dec}
                </p>
              </div>
            </div>

            <div className="  md:w-[480px] p-[20px] min-h-[363px] md:h-[589px] flex flex-col gap-[10px]  w-full border-[1px] border-solid border-[#C1C1C1] rounded-[8px] ">
              <div className="  max-w-full">
                <label className="block font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Size
                </label>
                <select className="w-full h-[39px] pl-[10px] font-[400] text-[16px] leading-[24px] border-[1px] border-solid border-[#C1C1C1] rounded-[8px] outline-none">
                  <option>small</option>
                  <option>large</option>
                  <option>medium</option>
                </select>
              </div>

              <div className="max-w-full">
                <label className="block font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Extra Toppings
                </label>
                <select className="w-full h-[39px] pl-[10px] font-[400] text-[16px] leading-[24px]  border-[1px] border-solid border-[#C1C1C1] rounded-[8px] outline-none">
                  <option>small</option>
                  <option>large</option>
                  <option>medium</option>
                </select>
              </div>

              <div className=" max-w-full">
                <label className="block  font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Notes
                </label>
                <textarea className="w-full h-[63px] md:h-[90px] border-[1px] border-solid border-[#C1C1C1] rounded-[8px] outline-none pl-[10px]"></textarea>
              </div>

              <div className="w-full h-[1px] bg-[#C1C1C1]"></div>

              <div className="   max-w-full flex items-center justify-between">
                <h3 className="font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Quantity
                </h3>
                <div className="">
                  <div className=" flex gap-[5px] w-full">
                    <button className="w-[30px] h-[30px" onClick={numPlus}>
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <p className="w-[30px] bg-[#00833F] h-[30px] font-[500] text-[15px]  leading-[22.5px] text-white rounded-[50%] flex justify-center items-center">
                      {num}
                    </p>
                    <button className="w-[30px] h-[30px]" onClick={numMinus}>
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className=" max-w-full flex items-center justify-between">
                <p className="font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Total
                </p>
                <p className="font-[500] text-[14px] leading-[21px] md:font-[500] md:text-[24px] md:leading-[36px] text-[#00833F]">
                  {props.price * num}$
                </p>
              </div>
              <div className="w-full">
                <button className="font-[500] text-[16px] leading-[24px] md:font-[500] md:text-[24px] md:leading-[36px] bg-[#00833F] text-white border-solid border-[1px] border-[#00833F] hover:bg-[#FFFFFF] transition-all duration-500 rounded-[8px] hover:text-[#00833F]  w-full h-[48px] ">
                  Order Now
                </button>
              </div>
              <div className="w-full">
                <button className="md:font-[500] md:text-[24px] md:leading-[36px] bg-[#FFFFFF] rounded-[8px] text-[#00833F]  border-solid border-[1px] border-[#00833F] hover:bg-[#00833F] transition-all duration-500 hover:text-[#FFFFFF] w-full h-[48px] ">
                  BooK A Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuData;
