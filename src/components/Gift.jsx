import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Gift() {
  const [showTo, setShowTo] = useState(false);
  const [valueTo, setValueTo] = useState("");
  function handleChangeTo(e) {
    setValueTo(e.target.value);
    setShowTo(true);
    if (e.target.value == "") {
      setShowTo(false);
    }
  }

  const [ShowFrom, setShowFrom] = useState(false);
  const [valueFrom, setValueFrom] = useState("");
  function handleChangeFrom(e) {
    setValueFrom(e.target.value);
    setShowFrom(true);
    if (e.target.value == "") {
      setShowFrom(false);
    }
  }

  const [ShowMessage, setShowMessage] = useState(false);
  const [valueMessage, setValueMessage] = useState("");
  function handleChangeMessage(e) {
    setValueMessage(e.target.value);
    setShowMessage(true);
    if (e.target.value == "") {
      setShowMessage(false);
    }
  }

  const [ShowPrice, setShowPrice] = useState(false);
  const [valuePrice, setValuePrice] = useState("");
  function handleChangePrice(e) {
    setValuePrice(e.target.value);
    setShowPrice(true);
    if (e.target.value == "") {
      setShowPrice(false);
    }
  }
  return (
    <>
      <Nav />
      <section>
        <div className="container py-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2   max-w-full gap-[40px] md:gap-[40px]">
            <div className=" max-w-full order-2 sm:order-1 flex flex-col gap-[20px]">
              <div className="max-w-full hidden sm:block">
                <h1 className="font-[600] text-[24px] leading-[36px] lg:font-[600] lg:text-[48px] lg:leading-[72px] text-[#000000]">
                  Gift Card
                </h1>
              </div>
              <form className=" max-w-full flex-wrap flex flex-col gap-[10px]">
                <div className="grid grid-cols-1 sm:grid-cols-2  max-w-full pg-slate-500 gap-[10px]  ">
                  <div className="md:w-[308px] max-w-full flex flex-col gap-[10px]  ">
                    <label
                      for="username"
                      className="sm:text-[14px] font-[500] text-[20px] leading-[30px] g:font-[500] lg:text-[24px] lg:leading-[36px] w-full"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      onChange={handleChangeFrom}
                      placeholder="Your Name"
                      maxLength={6}
                      className="placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[24px] w-full h-[46px] rounded-[8px] pl-[20px] outline-none border-[1px] border-solid border-[#C1C1C1]"
                    ></input>
                  </div>

                  <div className="md:w-[308px] max-w-full flex flex-col gap-[10px] ">
                    <label
                      for="username"
                      className="sm:text-[14px] font-[500] text-[20px] leading-[30px] g:font-[500] lg:font-[500] lg:text-[24px] lg:leading-[36px] w-full"
                    >
                      To
                    </label>
                    <input
                      type="text"
                      onChange={handleChangeTo}
                      placeholder="Your Name"
                      maxLength={6}
                      className="placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[24px] w-full h-[46px] rounded-[8px] pl-[20px] outline-none border-[1px] border-solid border-[#C1C1C1]"
                    ></input>
                  </div>

                  <div className="md:w-[308px] max-w-full flex flex-col gap-[10px] ">
                    <label
                      for="username"
                      className="sm:text-[14px] font-[500] text-[20px] leading-[30px] lg:font-[500] lg:text-[24px] lg:leading-[36px] w-full"
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      onChange={handleChangePrice}
                      onInput={(e) =>
                        (e.target.value = e.target.value.slice(0, 2))
                      }
                      placeholder="10$"
                      className="placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[24px] w-full h-[46px] rounded-[8px] pl-[20px] outline-none border-[1px] border-solid border-[#C1C1C1]"
                    ></input>
                  </div>

                  <div className="md:w-[308px] max-w-full flex flex-col gap-[10px] ">
                    <label
                      for="username"
                      className="sm:text-[15px] font-[500] text-[20px] leading-[30px] lg:font-[500] lg:text-[24px] lg:leading-[36px] w-full"
                    >
                      Payment Method
                    </label>
                    <select className="text-[#B0B5C1] placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[24px] w-full h-[46px] rounded-[8px] pl-[20px] outline-none border-[1px] border-solid border-[#C1C1C1]">
                      <option>PayPal</option>
                      <option>Visa</option>
                      <option>Pay</option>
                    </select>
                  </div>
                </div>
                <div className="w-[632px] max-w-full flex flex-col gap-[10px] ">
                  <label
                    for="username"
                    className="sm:text-[14px] font-[500] text-[20px] leading-[30px]  lg:font-[500] lg:text-[24px] lg:leading-[36px] w-full"
                  >
                    Message <span>(Optional)</span>
                  </label>
                  <textarea
                    placeholder="65 Char Max"
                    onChange={handleChangeMessage}
                    maxLength={65}
                    className="placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[24px] w-full h-[90px] md:h-[167px] rounded-[8px] pl-[20px] outline-none border-[1px] border-solid border-[#C1C1C1]"
                  ></textarea>
                </div>
              </form>
              <button className=" bg-[#00833F] text-white border-solid border-[1px] border-[#00833F] hover:bg-[#FFFFFF] transition-all duration-500 rounded-[8px] hover:text-[#00833F] max-w-full h-[48px] sm:w-[308px] sm:h-[78px]">
                Order Now
              </button>
            </div>

            <div className="max-w-full   order-1 sm:order-2">
              <div className="mb-[20px] sm:hidden max-w-full">
                <h1 className="font-[600]  text-[24px] leading-[36px] lg:font-[600] lg:text-[48px] lg:leading-[72px] text-[#000000]">
                  Gift Card
                </h1>
              </div>
              <div className="flex gap-[10px]">
                <div className=" max-w-full   h-[413px] sm:h-[550px] w-full p-[20px] lg:h-[637px] border-dashed   border-[#F79E1B] border-[5px] ">
                  <div className=" max-w-full   h-[373px] sm:h-[500px] lg:h-[590px] flex flex-col items-center background-One justify-center rounded-[5px] bg-[#F3AD3D] hero">
                    <div className=" h-[300px]  flex flex-col  gap-[15px] w-full">
                      <h1 className=" font-[600] text-[20px] sm:text-[24px] leading-[36px]  lg:font-[400] Porter_font lg:text-[36px] text-center lg:leading-[54px] ">
                        Gift Card
                      </h1>
                      <div className="max-w-full flex flex-col gap-[20px]">
                        {showTo && (
                          <p className="font-[500] text-[17px] leading-[30px] lg:font-[400] lg:text-[24px]  Porter_font text-center lg:leading-[36px]">
                            To: <span>{valueTo}</span>
                          </p>
                        )}
                        {ShowFrom && (
                          <p className="font-[500] text-[17px] leading-[30px] lg:font-[400] lg:text-[20px]  Porter_font text-center lg:leading-[30px]">
                            From: <span>{valueFrom}</span>
                          </p>
                        )}
                        {ShowMessage && (
                          <div className=" font-[500] text-[17px] leading-[25px]  lg:font-[400]  lg:text-[24px] text-center lg:leading-[36px] overflow-hidden text-wrap h-[108px] w-full pl-[10px] lg:px-[20px]">
                            {valueMessage}
                          </div>
                        )}
                        {ShowPrice && (
                          <p className="font-[500] text-[17px] leading-[30px] lg:font-[400] lg:text-[24px]  Porter_font text-center lg:leading-[36px]">
                            <p>{valuePrice}$</p>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[30px] rounded-[5px] h-auto background-One bg-[#F3AD3D]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Gift;
