import { Link } from "react-router-dom";
import logo1 from "/src/assets/images/login-images/logo1.svg";
import slice from "/src/assets/images/navbar-Images/slice.png";
import { useRef } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";

function VerificationCode() {
  const isPhone = useMediaQuery("(max-width: 639px)");

  const inputsRef = useRef([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <>
      {isPhone && <Nav />}
      <section>
        <div className="container   sm:pr-[0px] sm:mr-[0px]">
          <div className="w-full  sm:grid grid-cols-2 gap-[25px] justify-between  items-center">
            <div className="flex flex-col justify-between sm:h-fit h-screen">
              <div className="flex max-w-full w-[480px] flex-col gap-[20px] py-[40px]">
                {!isPhone && (
                  <div>
                    <img
                      src={logo1}
                      className=" w-[80px] h-[80px] object-contain"
                    ></img>
                  </div>
                )}

                <div className="flex flex-col ">
                  <h1 className="Port_Lligat_Slab  font-[500] text-[24px] leading-[36px] md:font-[700] md:text-[32px] md:leading-[48px] ">
                    Enter verification code
                  </h1>
                  <p className="Port_Lligat_Slab  font-[500] text-[14px] leading-[21px]  md:text-[16px] md:leading-[24px] text-[#A5A5A5]">
                    We sent a code to <span>andrew@gmail.com</span>
                  </p>
                </div>

                <div className="flex gap-[32px] w-full  items-center">
                  {Array(4)
                    .fill("")
                    .map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="text-center w-full h-[66px] focus:outline-[#ADEBB3]  md:h-[94px] rounded-[8px] border-[#618673] border-[1px] border-[solid]  font-[Roboto] font-[500] text-[32px] leading-[37.5px] text-[#000000]"
                        ref={(el) => (inputsRef.current[index] = el)}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    ))}
                </div>

                <div>
                  <p className=" text-[14px] leading-[16.41px]  md:font-[Roboto] font-[400] md:text-[16px] md:leading-[18.75px] text-[#000000]">
                    Don't get a code ? <a className="text-[#00833F]">Resend</a>
                  </p>
                </div>

                <div className="flex items-center justify-between gap-[32px]">
                  <button className="w-[160px] h-[40px] md:w-[224px]  md:h-[50px] bg-[#ADEBB3] border-[1px] border-[#00833F] rounded-[8px] font-[Poppins] font-[500] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#00833F] hover:text-[#ADEBB3] hover:bg-[#00833F] transition-all duration-500 ">
                    <Link to="/SignUp">Back</Link>{" "}
                  </button>
                  <button className="w-[160px] h-[40px] md:w-[224px]  md:h-[50px] bg-[#00833F] border-[1px] border-[#00833F] rounded-[8px] font-[Poppins] font-[500] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#FFFFFF] hover:text-[#00833F] hover:bg-[#ADEBB3] transition-all duration-500 ">
                    <Link to="/">Confirm</Link>{" "}
                  </button>
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

export default VerificationCode;
