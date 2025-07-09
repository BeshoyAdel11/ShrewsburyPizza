import personeImage from "/src/assets/images/sidebar-Images/personeImage.png";
import home from "/src/assets/images/sidebar-Images/Home.svg";
import MyCart from "/src/assets/images/sidebar-Images/My Cart.svg";
import Menu from "/src/assets/images/sidebar-Images/Menu.svg";
import GiftCard from "/src/assets/images/sidebar-Images/Gift Card.svg";
import ContactUs from "/src/assets/images/sidebar-Images/Contact Us.svg";
import Logout from "/src/assets/images/sidebar-Images/Logout.svg";
import newPiza from "/src/assets/images/sidebar-Images/newPizaa.svg";
import calzone from "/src/assets/images/sidebar-Images/calzone.svg";
import other from "/src/assets/images/sidebar-Images/other.svg";
import back from "/src/assets/images/sidebar-Images/back.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideBar(props) {
  const [isOpen, setIsopen] = useState(false);
  const handleOpen = () => setIsopen(!isOpen);
  const isPhone = useMediaQuery("(max-width: 639px)");
  return (
    <>
      {isPhone && (
        <div className="w-[303px] h-screen z-20  flex flex-col gap-[15px] fixed top-[-1px] right-[0px] bg-[#FFFFFF]">
          {/*
<div className='login' onClick={props.handleOpen}>
  <img  src={personeImage}></img>
  <p>Andrew Raafat <br/> <span>andro@gmail.com</span> </p>
</div>
   */}

          <div className="w-[52px] h-[52px] pl-[20px] pt-[20px]">
            <img
              src={back}
              onClick={props.handleOpen}
              className="object-contain"
            ></img>
          </div>

          <div className="  ">
            <ul className="">
              <li className="pl-[20px] h-[72px] flex items-center border-b border-solid border-1px border-[#2F3137]">
                <Link to="/" className="flex items-center gap-[10px]">
                  <img src={home} className="w-[24px] h-[24px]"></img>
                  <h4 className="font-[500] text-[20px] leading-[30px]">
                    Home
                  </h4>
                </Link>
              </li>
              <li className="pl-[20px] h-[72px] flex items-center border-b border-solid border-1px border-[#2F3137]">
                <Link to="/myCart" className="flex items-center gap-[10px]">
                  <img src={MyCart} className="w-[24px] h-[24px]"></img>{" "}
                  <h4 className="font-[500] text-[20px] leading-[30px]">
                    My Cart
                  </h4>
                </Link>
              </li>
              <li className=" flex flex-col gap-[30px] justify-center  py-[20px] border-b border-solid border-1px border-[#2F3137]">
                <div className=" px-[20px] flex justify-between items-center">
                  <Link to="/menu" className="flex items-center gap-[10px]">
                    <img src={Menu} className="w-[24px] h-[24px]"></img>{" "}
                    <h4 className="font-[500] text-[20px] leading-[30px]">
                      Menu
                    </h4>
                  </Link>
                  <i class="fa-solid fa-chevron-down" onClick={handleOpen}></i>
                </div>

                {isOpen && (
                  <div className="w-[303px] h-[118px] ">
                    <ul className="flex flex-col gap-[20px]">
                      <li className="flex gap-[20px] pl-[40px]">
                        <div className="w-[24px] h-[24]">
                          <img src={newPiza}></img>{" "}
                        </div>{" "}
                        <a className="font-[500] text-[16px] leading-[24px]">
                          Pizza
                        </a>
                      </li>
                      <li className="flex gap-[20px] pl-[40px]">
                        <div className="w-[24px] h-[24]">
                          <img src={calzone}></img>{" "}
                        </div>{" "}
                        <a className="font-[500] text-[16px] leading-[24px]">
                          Calzone
                        </a>
                      </li>
                      <li className="flex gap-[20px] pl-[40px]">
                        <div className="w-[24px] h-[24]">
                          <img src={other}></img>{" "}
                        </div>{" "}
                        <a className="font-[500] text-[16px] leading-[24px]">
                          Other
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="pl-[20px] h-[72px] flex items-center border-b border-solid border-1px border-[#2F3137]">
                <Link to="/myProfile" className="flex gap-[10px] items-center">
                  <img src={newPiza} className="w-[24px] h-[24px]"></img>{" "}
                  <h4 className="font-[500] text-[20px] leading-[30px]">
                    My Profile
                  </h4>
                </Link>
              </li>
              <li className="pl-[20px] h-[72px] flex items-center border-b border-solid border-1px border-[#2F3137]">
                <Link to="/gift" className="flex gap-[10px] items-center">
                  <img src={GiftCard} className="w-[24px] h-[24px]"></img>{" "}
                  <h4 className="font-[500] text-[20px] leading-[30px]">
                    Gift Card
                  </h4>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-[20px] pl-[20px] ">
            <button className="bg-[#00833F] text-white border-solid border-[1px] border-[#00833F] hover:bg-[#FFFFFF] transition-all duration-500 rounded-[24px] hover:text-[#00833F] w-[119px]  min-h-[37px]">
              <Link to="/SignUp">Login</Link>
            </button>
            <button className="bg-[#FFFFFF] rounded-[24px] text-[#00833F]  border-solid border-[1px] border-[#00833F] hover:bg-[#00833F] transition-all duration-500 hover:text-[#FFFFFF] w-[119px] max-w-full min-h-[37px]">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
