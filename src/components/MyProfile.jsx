import userImage from "/src/assets/images/myProfile-Images/userImage.svg";
import imageUpdate from "/src/assets/images/myProfile-Images/imageUpdate.svg";
import { useState } from "react";

import PersonalInfo from "../ProfilePages/PersonalInfo";
import Wishlist from "../ProfilePages/Wishlist";
import RecetOrdes from "../ProfilePages/RecetOrdes";
import Address from "../ProfilePages/Address";
import Footer from "./Footer";
import Nav from "./Nav";

function MyProfile() {
  const [activeSection, setActiveSection] = useState("profile");

  const ShowMyProfile = () => setActiveSection("profile");
  const ShowWishlist = () => setActiveSection("wishlist");
  const ShowRecentOrders = () => setActiveSection("orders");
  const ShowAddress = () => setActiveSection("address");

  return (
    <>
      <Nav />
      <section>
        <div className="container py-[20px]">
          <div className="xl:px-[80px] h-fit flex flex-col gap-[30px]">
            <div>
              <h1 className=" font-[500] text-[32px] leading-[48px] ">
                My Profile
              </h1>
            </div>

            <div className="w-full flex mx-auto  flex-col md:flex-row gap-[20px]">
              <div className="sm:w-[351px] w-full border-[1px] border-solid border-[#C1C1C1] rounded-[8px]  h-[459px]">
                <div className="w-full px-[10px]   flex flex-col justify-center gap-[10px] items-center   h-[200px]">
                  <div className="w-[107px] bg-[#D9D9D9]  relative h-[107px] flex justify-center items-center rounded-[50%] ">
                    <div className="w-[42px] h-[48px]">
                      <img src={userImage}></img>
                    </div>
                    <div className="absolute top-[75px]  right-0">
                      <img src={imageUpdate}></img>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-[500] text-[18px] leading-[27px]">
                      Andrew Raafat
                    </h2>
                  </div>
                  <div>
                    <p className="font-[400] text-[14px] leading-[21px]">
                      androraafat@gmail.com
                    </p>
                  </div>
                  <div className="w-[319px] max-w-full h-[1px] bg-[#C1C1C1]"></div>
                </div>

                <div>
                  <ul className="flex flex-col gap-[10px]">
                    <li
                      className={` mr-[15px] h-[40px]   flex items-center rounded-[0px_8px_8px_0px] ${
                        activeSection === "profile" ? "active" : ""
                      }`}
                      onClick={ShowMyProfile}
                    >
                      <button className="flex items-center pl-[20px] gap-[10px]">
                        <i className="fa-regular fa-user w-[16px] h-[18px]"></i>
                        <h3 className="font-[500] text-[16px] leading-[24px]">
                          Personal Information
                        </h3>
                      </button>
                    </li>
                    <li
                      className={`  mr-[15px] h-[40px]  flex items-center rounded-[0px_8px_8px_0px] ${
                        activeSection === "wishlist" ? "active" : ""
                      }`}
                      onClick={ShowWishlist}
                    >
                      <button className="flex items-center pl-[20px] gap-[10px]">
                        <i class="fa-regular fa-heart"></i>
                        <h3 className="font-[500] text-[16px] leading-[24px]">
                          Wishlist
                        </h3>
                      </button>
                    </li>
                    <li
                      className={`  mr-[15px] h-[40px]   flex items-center rounded-[0px_8px_8px_0px] ${
                        activeSection === "orders" ? "active" : ""
                      } `}
                      onClick={ShowRecentOrders}
                    >
                      <button className="flex items-center pl-[20px] gap-[10px]">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <h3 className="font-[500] text-[16px] leading-[24px]">
                          Recent Orders
                        </h3>
                      </button>
                    </li>
                    <li
                      className={`  mr-[15px] h-[40px]   flex items-center rounded-[0px_8px_8px_0px] ${
                        activeSection === "address" ? "active" : ""
                      }`}
                      onClick={ShowAddress}
                    >
                      {" "}
                      <button className="flex  pl-[20px] items-center gap-[10px]">
                        <i class="fa-solid fa-location-dot"></i>
                        <h3 className="font-[500] text-[16px] leading-[24px]">
                          Address
                        </h3>
                      </button>
                    </li>
                    <li className="mr-[15px] h-[40px]   flex items-center rounded-[0px_8px_8px_0px]">
                      <button className="flex pl-[20px] items-center gap-[10px]">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <h3 className="font-[500] text-[16px] leading-[24px]">
                          Cart
                        </h3>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {activeSection === "profile" && <PersonalInfo />}

              {activeSection === "wishlist" && <Wishlist />}

              {activeSection === "orders" && <RecetOrdes />}

              {activeSection === "address" && <Address />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MyProfile;
