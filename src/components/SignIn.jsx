import React from "react";
import logo1 from "/src/assets/images/login-images/logo1.svg";
import google from "/src/assets/images/login-images/google-logo 1.svg";
import apple from "/src/assets/images/login-images/apple-logo 1.svg";
import slice from "/src/assets/images/navbar-Images/slice.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useMediaQuery } from "@uidotdev/usehooks";

function SignIn() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const isPhone = useMediaQuery("(max-width: 639px)");

  return (
    <>
      {isPhone && <Nav />}
      <section>
        <div className="container w-full  sm:pr-[0px] sm:mr-[0px]">
          <div className="w-full sm:grid grid-cols-2 gap-[25px] justify-between items-center ">
            <div className="flex flex-col sm:h-fit  h-screen justify-between">
              <div className="flex flex-col gap-[20px] md:w-[448px] max-w-full pt-[20px]   h-fit ">
                {!isPhone && (
                  <div className="">
                    <img
                      src={logo1}
                      className=" w-[80px] h-[80px] object-contain"
                    ></img>
                  </div>
                )}
                <div>
                  <h1 className="Port_Lligat_Slab font-[500] text-[24px] leading-[36px] md:font-[700] md:text-[40px] md:leading-[60px]">
                    Welcome Back
                  </h1>
                  <p className="Port_Lligat_Slab  font-[500] text-[14px] leading-[21px] md:font-[500] md:text-[16px] md:leading-[24px]  text-[#828282]">
                    Enter your personal information to Sign in
                  </p>
                </div>
                <div>
                  <form className="flex flex-col gap-[16px] md:gap-[20px]">
                    <div className="flex flex-col gap-[8px]">
                      <label
                        for="email"
                        className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2F3137] "
                      >
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        placeholder="Write your email"
                        id="email"
                        required
                        className="w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
                      ></input>
                    </div>

                    <div className="flex relative flex-col gap-[8px]">
                      <label
                        for="password"
                        className=" font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2F3137]"
                      >
                        Password
                      </label>
                      <span
                        onClick={() => setPasswordVisible(!isPasswordVisible)}
                        class=" absolute cursor-pointer top-[40px] pr-[10px] right-0 "
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
                        className="pr-[35px] focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
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

                    <div>
                      <Link
                        to="/NewPassword"
                        className="font-[Roboto] font-[400] text-[14px] leading-[21px] md:font-[400] md:text-[16px] md:leading-[18.75px] text-[#5D626D]"
                      >
                        Forget Password ?
                      </Link>
                    </div>

                    <div className="flex items-center justify-center gap-[23px]">
                      <div className="w-full h-[1px] bg-[#E2E6E9]"></div>
                      <span className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#93969E]">
                        or
                      </span>
                      <div className="w-full h-[1px] bg-[#E2E6E9]"></div>
                    </div>

                    <div className="flex justify-center items-center gap-[10px] md:gap-[24px]">
                      <div className="w-[211px] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[10px] flex justify-center items-center">
                        <button className="flex justify-center items-center gap-[10px] font-[Poppins] font-[500] text-[10px] leading-[15px] md:text-[12px] md:leading-[18px] text-[#000000] ">
                          <img
                            src={google}
                            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                          ></img>{" "}
                          Sign up with Google
                        </button>
                      </div>
                      <div className="w-[211px] h-[40px] border-solid border-[1px] border-[#D9D9D9] rounded-[10px] flex justify-center items-center">
                        <button className="flex justify-center items-center gap-[10px] font-[Poppins]  font-[500] text-[10px] leading-[15px] md:text-[12px] md:leading-[18px] text-[#000000]">
                          <img src={apple} className="w-[20px] h-[20px]"></img>{" "}
                          Sign up with Apple
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
                        Do you have an account ?{" "}
                        <Link to="/SignUp" className="text-[#00833F]">
                          Login Up
                        </Link>
                      </p>
                    </div>
                  </form>
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

            <div className="hidden sm:flex justify-center items-center overflow-hidden max-w-full w-[704px] h-[794px]">
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

export default SignIn;
