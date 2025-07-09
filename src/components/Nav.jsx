import logo1 from "/src/assets/images/nav-Images/logo1.svg";
import madi_cart from "/src/assets/images/nav-Images/mdi_cart.svg";
import group from "/src/assets/images/nav-Images/group.svg";
import SideBar from "./SideBar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsopen] = useState(false);
  const location = useLocation();
  const handleOpen = () => setIsopen(!isOpen);

  return (
    <>
      {isOpen && <SideBar handleOpen={handleOpen} />}

      <section className="bg-[#B7E2D133]  bg-opacity-50">
        <div className="container ">
          <div className="flex justify-between gap-[20px] items-center ">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: 150 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-[80px] h-[80px] ">
                <img src={logo1} className="object-contain"></img>
              </div>
            </motion.div>

            <div className="sm:flex justify-between hidden gap-[30px] items-center  w-full">
              <div>
                <ul className="nav-list flex  items-center sm:gap-[20px] md:gap-[30px]  max-w-full text-[#000000] font-[500] text-[14px] leading-[24px] lg::font-[500] lg:text-[24px] lg:leading-[36px]">
                  <li>
                    <Link to="/" className={`hover:text-[#00833F] ${location.pathname === "/" ? "text-[#00833F]" : "text-[#000000]"}`}>
                      Home
                    </Link>
                  </li>
                  <li className="group   transition-all duration-500">
                    <Link to="/menu" className={` hover:text-[#00833F] ${location.pathname.startsWith("/menu") ? "text-[#00833F]" : "text-[#000000]"}`}>
                      Menu
                    </Link>
                    <div className="group-hover:block hidden w-[136px] z-20 shadow-[0px_4px_4px_2px_#00000040] bg-white rounded-[5px] lg:h-[165px] h-[153px] p-[10px] absolute hover:text-black top-[52px] ">
                      <ul className="  flex flex-col gap-[10px] items-center ">
                        <li>
                          <a className="font-[500] leading-[20px] text-[19.4px] cursor-pointer">
                            Pizza
                          </a>
                        </li>
                        <li className="w-full h-[1px] bg-[#C1C1C1]"></li>
                        <li>
                          <a className="font-[500] leading-[20px] text-[19.4px] cursor-pointer ">
                            Calzone
                          </a>
                        </li>
                        <li className="w-full h-[1px] bg-[#C1C1C1]"></li>
                        <li>
                          <a className="font-[500] leading-[20px] text-[19.4px] cursor-pointer ">
                            Other
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/myCart" className={`hover:text-[#00833F] ${location.pathname.startsWith("/myCart") ? "text-[#00833F]" : "text-[#000000]"}`}>
                      MyCart
                    </Link>
                  </li>
                  <li>
                    <Link to="/gift" className={`hover:text-[#00833F] ${location.pathname.startsWith("/gift") ? "text-[#00833F]" : "text-[#000000]"}`}>
                      Gift Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/myProfile" className={`hover:text-[#00833F] ${location.pathname.startsWith("/myProfile") ? "text-[#00833F]" : "text-[#000000]"}`}>
                      MyProfile
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex gap-[20px] max-w-full items-center">
                  <li className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]">
                    <img src={madi_cart} className="w-full h-full"></img>
                  </li>
                  <li>
                    <button className="bg-[#FFFFFF] rounded-[8px] text-[#00833F] sm:font-[500] sm:text-[14px] sm:leading-[21px] border-solid border-[1px] border-[#00833F] hover:bg-[#00833F] transition-all duration-500 hover:text-[#FFFFFF]  w-[58px] h-[37px] lg:w-[94px] lg:h-[50px]">
                      <Link to="/SignUp">login</Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:hidden">
              <img src={group} onClick={handleOpen}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Nav;
