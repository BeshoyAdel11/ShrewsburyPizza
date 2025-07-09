import logo1 from "/src/assets/images/login-images/logo1.svg";
import google from "/src/assets/images/login-images/google-logo 1.svg";
import apple from "/src/assets/images/login-images/apple-logo 1.svg";
import slice from "/src/assets/images/navbar-Images/slice.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useMediaQuery } from "@uidotdev/usehooks";
import Footer from "./Footer";

function SignUp() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const isPhone = useMediaQuery("(max-width: 639px)");

  return (
    <>
      {isPhone && <Nav />}
      <section>
        <div className="container w-full  sm:pr-[0px] sm:mr-[0px] ">
          <div className="w-full sm:grid grid-cols-2 gap-[25px] justify-between  ">
            <div className="flex flex-col gap-[15px] md:w-[448px] py-[20px]  max-w-full ">
              {!isPhone && (
                <div className="w-full ">
                  <img
                    src={logo1}
                    className="w-[80px] h-[80px] object-contain"
                  ></img>
                </div>
              )}

              <div className="">
                <h1 className="Port_Lligat_Slab font-[500] text-[24px] leading-[36px] md:font-[700] md:text-[40px] md:leading-[60px] ">
                  Get Started
                </h1>
                <p className="Port_Lligat_Slab font_Lobster font-[500] text-[14px] leading-[21px] md:font-[500] md:text-[16px] md:leading-[24px]  text-[#828282]">
                  Enter your personal information to create new account
                </p>
              </div>
              <div className="w-full   flex flex-col ">
                <form className="flex flex-col gap-[16px] md:gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label
                      for="name"
                      className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2F3137]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Write your full name"
                      id="name"
                      required
                      className="  w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
                    ></input>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label
                      for="email"
                      className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2F3137]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Write your email"
                      id="email"
                      required
                      className="  w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
                    ></input>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label
                      for="phone"
                      className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2F3137]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="XXXXXXXXXXXXXXXX"
                      id="phone"
                      required
                      className=" w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
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
                      className="pr-[35px] w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
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
                      className=" pr-[35px] w-full h-[35px] pl-[10px] placeholder:font-[Roboto] placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[14.06px] outline-none rounded-[4px] border-[1px] border-[solid] border-[#E2E6E9]"
                    ></input>
                  </div>

                  <div>
                    <p className="font-[Poppins] font-[400] md:text-[16px] md:leading-[24px] text-[14px] leading-[21px] text-[#2C143D]">
                      By registering, you agree to the{" "}
                      <a className="text-[#00833F]">
                        terms and Conditions and Privacy Policy.
                      </a>
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full h-[40px] md:h-[52px] font-[Poppins] font-[500] text-[16px] leading-[24px] md:font-[500] md:text-[20px] md:leading-[30px] text-[#FFFFFF] bg-[#00833F] rounded-[8px] border-[1px] border-[#00833F] border-solid hover:bg-[#ADEBB3] hover:text-[#00833F] transition-all duration-500"
                    >
                      <Link to="/VerificationCode">Sign Up</Link>
                    </button>
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
                      <Link to="/SignIn" className="text-[#00833F]">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden  sm:flex justify-center items-center overflow-hidden max-w-full w-[704px] min-h-[900px]">
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

export default SignUp;
