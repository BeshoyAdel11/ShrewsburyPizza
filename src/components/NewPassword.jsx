import React, { useState } from "react";
import slice from "/src/assets/images/navbar-Images/slice.png";
import logo1 from "/src/assets/images/login-images/logo1.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import Nav from "./Nav";

function NewPassword() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const isPhone = useMediaQuery("(max-width: 639px)");

  return (
    <>
      {isPhone && <Nav />}
      <section>
        <div className="container w-full sm:pr-[0px] sm:mr-[0px]  ">
          <div className=" sm:grid grid-cols-2  gap-[25px] justify-between  items-center">
            <div className="flex flex-col justify-between sm:h-fit h-screen">
              <div className=" md:w-[448px]   py-[20px] max-w-full flex flex-col gap-[32px]">
                {!isPhone && (
                  <div className="">
                    <img
                      src={logo1}
                      className=" w-[80px] h-[80px] object-contain"
                    ></img>
                  </div>
                )}
                <div className="flex flex-col">
                  <h1 className="Port_Lligat_Slab font-[500] text-[24px] leading-[36px] md:font-[700] md:text-[40px] md:leading-[60px]">
                    New Password
                  </h1>
                  <p className="Port_Lligat_Slab  font-[500] text-[14px] leading-[21px] md:font-[500] md:text-[16px] md:leading-[24px]  text-[#828282]">
                    Enter your new password to Sign in
                  </p>
                </div>

                <div className="flex flex-col gap-[24px]">
                  <div className="flex relative flex-col gap-[8px]">
                    <label
                      for="password"
                      className=" font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2F3137]"
                    >
                      Password
                    </label>
                    <span
                      onClick={() => setPasswordVisible(!isPasswordVisible)}
                      class=" absolute  cursor-pointer top-[40px] pr-[10px] right-0 "
                    >
                      {isPasswordVisible ? (
                        <i class="fa-regular fa-eye-slash text-[#5D626D]"></i>
                      ) : (
                        <i class="fa-regular fa-eye text-[#5D626D]"></i>
                      )}
                    </span>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="XXXXXXXXXXXXXXXX"
                      id="password"
                      required
                      className="pr-[35px]   w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
                    ></input>
                  </div>

                  <div className="flex relative flex-col gap-[8px]">
                    <label
                      for="Confirm Password"
                      className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2F3137]"
                    >
                      Confirm Password
                    </label>

                    <span
                      onClick={() => setConfirmVisible(!isConfirmVisible)}
                      class="absolute cursor-pointer top-[40px] pr-[10px] right-0 "
                    >
                      {isConfirmVisible ? (
                        <i class="fa-regular fa-eye-slash text-[#5D626D]"></i>
                      ) : (
                        <i class="fa-regular fa-eye text-[#5D626D]"></i>
                      )}
                    </span>

                    <input
                      type={isConfirmVisible ? "text" : "password"}
                      placeholder="XXXXXXXXXXXXXXXX"
                      id="Confirm Password"
                      required
                      className="pr-[35px] w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
                    ></input>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full h-[40px] md:h-[52px] font-[Poppins] font-[500] text-[16px] leading-[24px] md:font-[500] md:text-[20px] md:leading-[30px] text-[#FFFFFF] bg-[#00833F] rounded-[8px] border-[1px] border-[#00833F] border-solid hover:bg-[#ADEBB3] hover:text-[#00833F] transition-all duration-500"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>

              <div className="sm:hidden ">
                <p className="text-center font-[Poppins] font-[500] text-[10px] leading-[15px] text-[#828282]">
                  ©2024{" "}
                  <span className="font-[700]">
                    {" "}
                    Shrewsbury House of Pizza{" "}
                  </span>{" "}
                  All rights reserved
                </p>
              </div>
            </div>

            <div className="hidden sm:flex justify-center items-center overflow-hidden max-w-full w-[704px] h-screen">
              <img
                src={slice}
                className="w-full h-full object-cover object-left"
                alt="Slice image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewPassword;
