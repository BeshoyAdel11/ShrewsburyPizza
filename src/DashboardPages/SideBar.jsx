import logo1 from "/src/assets/images/nav-Images/logo1.svg";
import Home from "/src/assets/images/Dashboard-images/Home (1).svg";
import Purchase from "/src/assets/images/Dashboard-images/Purchase Order.svg";
import Decrease from "/src/assets/images/Dashboard-images/Decrease.svg";
import TopMenu from "/src/assets/images/Dashboard-images/Top Menu.svg";
import Categorize from "/src/assets/images/Dashboard-images/Categorize.svg";
import Letter from "/src/assets/images/Dashboard-images/Letter.svg";
import Settings from "/src/assets/images/Dashboard-images/Settings.svg";
import Coupon from "/src/assets/images/Dashboard-images/Coupon.svg";
import GiftCard from "/src/assets/images/Dashboard-images/Gift Card (1).svg";
import OliveOil from "/src/assets/images/Dashboard-images/Olive Oil.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  //console.log(location.pathname)

  return (
    <section>
      <div className="w-[330px] bg-[#ffffff] flex flex-col items-center gap-[25px]  h-[1024px] rounded-tl-[71px] rounded-bl-[71px] ">
        <div className=" w-full flex flex-col gap-[10px]  justify-end  items-center h-[230px]">
          <div>
            <img className="w-[80px] h-[80px] object-contain" src={logo1}></img>
          </div>
          <h1 className="text-center text-[#000000A6] InterFont font-[400] text-[24px] leading-[29.05px]">
            Shrewsbury <br /> House of Pizza
          </h1>
        </div>

        <div className=" w-[254px] h-[800px] ">
          <ul className="flex  flex-col  gap-[20px]">
            <li
              className={`w-full h-[66px] rounded-[10px] transition-all duration-500 flex items-center  ${
                location.pathname === "/"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              } `}
            >
              <Link
                to="/"
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px]  ${
                  location.pathname === "/"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={Home} className="w-[30px] h-[30px]"></img> Dashboard
              </Link>
            </li>
            <li
              className={`w-full h-[66px] flex gap-[40px] transition-all duration-500 rounded-[10px] items-center  ${
                location.pathname === "/Orders"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              }`}
            >
              <Link
                to="Orders"
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/Orders"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={Purchase} className="w-[30px] h-[30px]"></img> Orders
              </Link>
              <i className="text-[#666666] fa-solid fa-chevron-down"></i>
            </li>
            <li
              className={`w-full h-[66px] flex items-center transition-all duration-500 rounded-[10px] ${
                location.pathname === "/Anlysis"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              } `}
            >
              <Link
                to="Anlysis"
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/Anlysis"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={Decrease} className="w-[30px] h-[30px]"></img> Anlysis
              </Link>
            </li>
            <li
              className={`w-full h-[66px]  flex items-center  transition-all duration-500 rounded-[10px] ${
                location.pathname === "/Menu"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              }`}
            >
              <Link
                to="Menu"
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/Menu"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={TopMenu} className="w-[30px] h-[30px]"></img> Menu
              </Link>
            </li>
            <li
              className={`w-full   h-[66px] group  transition-all duration-500 flex items-center rounded-[10px] ${
                location.pathname === "/FoodCategories"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              } `}
            >
              <Link
                to="FoodCategories"
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/FoodCategories"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={Categorize} className="w-[30px] h-[30px]"></img>{" "}
                Categorize
              </Link>
              <div className="relative">
                <ul className="absolute z-10 hidden group-hover:flex top-[0px] left-[0px] w-[151px] h-[122px] py-[20px] px-[7px]  flex-col items-center  gap-[20px] bg-[#ffffff] custom-shadow rounded-tl-[5px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px]">
                  <li>
                    {" "}
                    <Link className="InterFont font-[400] flex items-center gap-2 text-[16px] leading-[19.36px] text-[#000000A6]">
                      <i className="fa-solid fa-circle-plus text-[#000000A6]"></i>
                      Add Items
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="ToppingsCategories"
                      className={`InterFont font-[400] text-[16px] leading-[19.36px] ${
                        location.pathname == "/ToppingsCategories"
                          ? "text-[#088D56]"
                          : "text-[#000000A6]"
                      }   flex items-center gap-2 `}
                    >
                      {" "}
                      <img src={OliveOil} className="object-contain"></img>Add
                      Toppings
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`w-full h-[66px] flex gap-[30px] rounded-[10px] items-center  ${
                location.pathname === "/Message"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              }`}
            >
              <a
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/Message"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={Letter} className="w-[30px] h-[30px]"></img> Message
              </a>
              <span className="w-[30px] h-[30px] bg-[#E35353BD] flex justify-center items-center rounded-[50%] InterFont font-[400] text-[20px] leading-[24.2px] text-[#FFFFFF]">
                5
              </span>
            </li>
            <li
              className={`w-full h-[66px] flex items-center rounded-[10px] ${
                location.pathname === "/GiftCard"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              }`}
            >
              <Link
                to="GiftCard"
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/GiftCard"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={GiftCard} className="w-[30px] h-[30px]"></img> Gift
                Card
              </Link>
            </li>
            <li
              className={`w-full h-[66px] flex items-center rounded-[10px] ${
                location.pathname === "/CouponCode"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              }`}
            >
              <Link
                to="CouponCode"
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/CouponCode"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={Coupon} className="w-[30px] h-[30px]"></img> Coupon
                Code
              </Link>
            </li>
            <li
              className={`w-full h-[66px] flex items-center rounded-[10px] ${
                location.pathname === "/Settings"
                  ? "bg-[#B7E2D133] custom-before custom-shadow"
                  : "bg-[#FFFFFF]"
              }`}
            >
              <a
                className={`cursor-pointer flex items-center pl-[30px] gap-[15px] ${
                  location.pathname === "/Settings"
                    ? "text-[#088D56]"
                    : "text-[#000000A6]"
                } InterFont font-[400] text-[24px] leading-[29.05px] `}
              >
                {" "}
                <img src={Settings} className="w-[30px] h-[30px]"></img>{" "}
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
