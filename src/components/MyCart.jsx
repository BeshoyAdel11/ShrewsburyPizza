import Footer from "./Footer";
import Nav from "./Nav";
import pizaa from "/src/assets/images/myCart/Hawaiian  Pizza.png";
import { useState } from "react";

function MyCart() {
  const [openOptionId, setOpenOptionId] = useState(null);
  const [counts, setCounts] = useState({});

  const ShowOptionBtn = (id) => {
    setOpenOptionId(prev => prev === id ? null : id);
  };
  const handleIncrement = (id) => {
    setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };
  const handleDecrement = (id) => {
    setCounts(prev => ({ ...prev, [id]: prev[id] > 0 ? prev[id] - 1 : 0 }));
  };

  return (
    <>
      <Nav />
      <section className="py-[20px]">
        <div className="container">
          <div className="flex justify-center flex-col  w-full md:flex-row gap-[20px]">
            <div className="w-full flex flex-col gap-[20px]">
              <div className="hidden md:block">
                <div>
                  <h1 className="font-[500] text-[32px] leading-[48px]">
                    My cart
                  </h1>
                </div>
                <div className="hidden xl:grid grid-cols-2  w-full ">
                  <div>
                    <h2 className="font-[500] text-[24px] leading-[36px]">
                      Product
                    </h2>
                  </div>
                  <div>
                    <ul className="font-[500] text-[24px] leading-[36px] flex w-full  gap-[50px]  items-center">
                      <li>Quantity</li>
                      <li>Price</li>
                      <li>Total</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="hidden   md:flex flex-col gap-[20px] ">
                  <div className="w-full  h-[130px] flex items-end pl-[50px]">
                    <div className="w-full h-[102px] flex justify-end pl-[100px] pr-[10px]  border-solid border-[1px] relative  rounded-[24px] border-[#C1C1C1]    ">
                      <div className="w-[154px] h-[130px] top-[-1.5rem] left-[-50px] absolute z-10 flex ">
                        <img src={pizaa} className="w-full   h-full"></img>
                      </div>
                      <div className="  w-full grid grid-cols-1 xl:grid-cols-2 lg:flex justify-between items-center  ">
                        <div className="w-full">
                          <h2 className="font-[500] text-[20px] leading-[30px]">
                            Hawaiian  Pizza
                          </h2>
                        </div>
                        <div className="xl:w-fit w-full">
                          <ul className="flex w-full justify-between xl:justify-around xl:gap-[90px]   items-center">
                            <li className="  flex gap-[5px]">
                              <button onClick={()=> handleIncrement(1)} className="w-[30px] h-[30px]  ">
                                <i class="fa-solid fa-plus"></i>
                              </button>
                              <p className="w-[30px] bg-[#00833F] h-[30px] font-[500] text-[15px]  leading-[22.5px] text-white rounded-[50%] flex justify-center items-center">
                              {counts[1] || 0}
                              </p>
                              <button onClick={()=> handleDecrement(1)} className="w-[30px] h-[30px]  ">
                                <i class="fa-solid fa-minus"></i>
                              </button>
                            </li>

                            <li>
                              <p className="font-[500] text-[20px] leading-[30px]">
                                8$
                              </p>
                            </li>
                            <li className="w-[30px] font-[500] text-[20px] leading-[30px]">
                               {(counts[1] || 0) * 8 + "$" } 
                            </li>
                            <li>
                              <button onClick={() => ShowOptionBtn(1)}>
                                <i class="fa-solid fa-ellipsis"></i>
                              </button>

                              {openOptionId === 1 && (
                                <ul className="w-[190px]  shadow-[5px_5px_22px_#c1c1c1] bg-white rounded-[8px] h-[68px] p-[10px] flex flex-col gap-[5px]  absolute top-[66px] right-[30px]">
                                  <li className="flex items-center gap-[12px]">
                                    <i className="fa-regular fa-eye W-[18px] h-[18px]"></i>
                                    <h6 className="font-[500] text-[10px] leading-[20px]">
                                      View Pizza Details
                                    </h6>
                                  </li>
                                  <li>
                                    <div className="w-full h-[1px] bg-[#C1C1C1]"></div>
                                  </li>
                                  <li className="text-[#D71515] flex items-center gap-[12px]">
                                    <i className="fa-regular fa-trash-can w-[18px] h-[18px]"></i>
                                    <h6 className="font-[500] text-[10px] leading-[20px]">
                                      Delete
                                    </h6>
                                  </li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full  h-[130px] flex items-end pl-[50px]">
                    <div className="w-full h-[102px] flex justify-end pl-[100px] pr-[10px]  border-solid border-[1px] relative  rounded-[24px] border-[#C1C1C1]    ">
                      <div className="w-[154px] h-[130px] top-[-1.5rem] left-[-50px] absolute z-10 flex ">
                        <img src={pizaa} className="w-full   h-full"></img>
                      </div>
                      <div className="  w-full grid grid-cols-1 xl:grid-cols-2 lg:flex justify-between items-center  ">
                        <div className="w-full">
                          <h2 className="font-[500] text-[20px] leading-[30px]">
                            Hawaiian  Pizza
                          </h2>
                        </div>
                        <div className="xl:w-fit w-full">
                          <ul className="flex w-full justify-between xl:justify-around xl:gap-[90px]   items-center">
                            <li className="  flex gap-[5px]">
                              <button className="w-[30px] h-[30px]  ">
                                <i class="fa-solid fa-plus"></i>
                              </button>
                              <p className="w-[30px] bg-[#00833F] h-[30px] font-[500] text-[15px]  leading-[22.5px] text-white rounded-[50%] flex justify-center items-center">
                                0
                              </p>
                              <button className="w-[30px] h-[30px]  ">
                                <i class="fa-solid fa-minus"></i>
                              </button>
                            </li>

                            <li>
                              <p className="font-[500] text-[20px] leading-[30px]">
                                8$
                              </p>
                            </li>
                            <li className="font-[500] text-[20px] leading-[30px]">
                              <p>8$</p>
                            </li>
                            <li>
                              <button onClick={() => ShowOptionBtn(2)}>
                                <i class="fa-solid fa-ellipsis"></i>
                              </button>

                              {openOptionId === 2 && (
                                <ul className="w-[190px]  shadow-[5px_5px_22px_#c1c1c1] bg-white rounded-[8px] h-[68px] p-[10px] flex flex-col gap-[5px]  absolute top-[66px] right-[30px]">
                                  <li className="flex items-center gap-[12px]">
                                    <i className="fa-regular fa-eye W-[18px] h-[18px]"></i>
                                    <h6 className="font-[500] text-[10px] leading-[20px]">
                                      View Pizza Details
                                    </h6>
                                  </li>
                                  <li>
                                    <div className="w-full h-[1px] bg-[#C1C1C1]"></div>
                                  </li>
                                  <li className="text-[#D71515] flex items-center gap-[12px]">
                                    <i className="fa-regular fa-trash-can w-[18px] h-[18px]"></i>
                                    <h6 className="font-[500] text-[10px] leading-[20px]">
                                      Delete
                                    </h6>
                                  </li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-auto w-full  flex flex-col gap-[10px] md:hidden">
                  <div>
                    <h1 className="font-[500] text-[32px] text-left leading-[48px]">
                      My cart
                    </h1>
                  </div>

                  <div className="flex flex-col sm:flex-row  items-center  gap-[10px]">
                    <div className="w-[295px] max-w-full h-[331px] relative flex flex-col items-center">
                      <div className="w-[201px] h-[163px] absolute top-[20px]  z-10">
                        <img src={pizaa} className="object-contain"></img>
                      </div>
                      <div className="w-full h-[249px]  border-[1px] border-solid border-[#C1C1C1] rounded-[40px]  absolute top-[81px]">
                        <div className="absolute top-[97px]   px-[20px] w-full  flex justify-between items-center">
                          <div>
                            <h2 className="font-[600] text-[20px] leading-[30px]">
                              Hawaiian  Pizza
                            </h2>
                          </div>
                          <div>
                            <button onClick={() => ShowOptionBtn(3)}>
                              <i class="fa-solid fa-ellipsis"></i>
                            </button>
                            {openOptionId === 3 && (
                              <ul className="z-10 w-[190px] bg-white shadow-[5px_5px_22px_#c1c1c1] h-[68px] p-[10px] flex flex-col gap-[5px] absolute top-[27px] right-[20px]">
                                <li className="flex items-center gap-[12px]">
                                  <i className="fa-regular fa-eye W-[18px] h-[18px]"></i>
                                  <h6 className="font-[500] text-[10px] leading-[20px]">
                                    View Pizza Details
                                  </h6>
                                </li>
                                <li>
                                  <div className="w-full h-[1px] bg-[#C1C1C1]"></div>
                                </li>
                                <li className="text-[#D71515] flex items-center gap-[12px]">
                                  <i className="fa-regular fa-trash-can w-[18px] h-[18px]"></i>
                                  <h6 className="font-[500] text-[10px] leading-[20px]">
                                    Delete
                                  </h6>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>

                        <div className="absolute flex flex-col gap-[6px] top-[143px] px-[20px]   w-full  h-[95px]">
                          <div className="flex justify-between items-center">
                            <h3 className="font-[500] text-[18px] leading-[27px]">
                              Quantity
                            </h3>
                            <div className="flex gap-[5px]">
                              <button className="w-[20px] h-[20px]  ">
                                <i class="fa-solid fa-plus"></i>
                              </button>
                              <p className="w-[24px]  h-[24px] font-[500] text-[14px] bg-[#00833F]  leading-[21px] text-white rounded-[50%] flex justify-center items-center">
                                0
                              </p>
                              <button className="w-[20px] h-[20px]  ">
                                <i class="fa-solid fa-minus"></i>
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <h3 className="font-[500] text-[18px] leading-[27px]">
                              Price
                            </h3>
                            <p className="font-[400] text-[18px] leading-[27px]">
                              8$
                            </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <h3 className="font-[500] text-180px] leading-[27px]">
                              Total
                            </h3>
                            <p className="font-[400] text-[18px] leading-[27px]">
                              16$
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-[295px] max-w-full h-[331px] relative flex flex-col items-center">
                      <div className="w-[201px] h-[163px] absolute top-[20px]  z-10">
                        <img src={pizaa} className="object-contain"></img>
                      </div>
                      <div className="w-full h-[249px]  border-[1px] border-solid border-[#C1C1C1] rounded-[40px]  absolute top-[81px]">
                        <div className="absolute top-[97px]   px-[20px] w-full  flex justify-between items-center">
                          <div>
                            <h2 className="font-[600] text-[20px] leading-[30px]">
                              Hawaiian  Pizza
                            </h2>
                          </div>
                          <div>
                            <i class="fa-solid fa-ellipsis"></i>
                          </div>
                        </div>
                        <div className="absolute flex flex-col gap-[6px] top-[143px] px-[20px]   w-full  h-[95px]">
                          <div className="flex justify-between items-center">
                            <h3 className="font-[500] text-[18px] leading-[27px]">
                              Quantity
                            </h3>
                            <div className="flex gap-[5px]">
                              <button className="w-[20px] h-[20px]  ">
                                <i class="fa-solid fa-plus"></i>
                              </button>
                              <p className="w-[24px]  h-[24px] font-[500] text-[14px] bg-[#00833F]  leading-[21px] text-white rounded-[50%] flex justify-center items-center">
                                0
                              </p>
                              <button className="w-[20px] h-[20px]  ">
                                <i class="fa-solid fa-minus"></i>
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <h3 className="font-[500] text-[18px] leading-[27px]">
                              Price
                            </h3>
                            <p className="font-[400] text-[18px] leading-[27px]">
                              8$
                            </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <h3 className="font-[500] text-180px] leading-[27px]">
                              Total
                            </h3>
                            <p className="font-[400] text-[18px] leading-[27px]">
                              16$
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[393px] md:w-[295px] max-w-full flex flex-col gap-[5px] md:gap-[10px] h-[466px] sm:h-[587px] p-[20px] border-[1px] border-solid border-[#C1C1C1] rounded-[40px] ">
              <div>
                <h1 className="font-[600] text-[18px] leading-[27px] sm:font-[600] sm:text-[24px] sm:leading-[36px]">
                  Order Summery
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                  Subtotal
                </h2>
                <span className="font-[400] text-[15px] leading-[22.5px] sm:font-[500] sm:text-[20px] sm:leading-[30px] text-[#00833F]">
                  36$
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                  VAT
                </h2>
                <span className="font-[400] text-[15px] leading-[22.5px] sm:font-[500] sm:text-[20px] sm:leading-[30px] text-[#00833F]">
                  36$
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                  Delivery
                </h2>
                <span className="font-[400] text-[15px] leading-[22.5px] sm:font-[500] sm:text-[20px] sm:leading-[30px] text-[#00833F]">
                  36$
                </span>
              </div>
              <div className="w-full flex flex-col gap-[5px] ">
                <label className="font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                  Select Address
                </label>
                <div className="flex gap-[10px] items-center">
                  <input
                    type="text"
                    placeholder="Enter coupon code here"
                    className="w-[299px] h-[34px] pl-[10px] font-[400] text-[11px] leading-[16px] outline-none rounded-[8px_0px_0px_8px] border-solid border-[1px] border-[#C1C1C1]"
                  ></input>
                  <button className="w-[39px] h-[34px] font-[400] text-[11px] leading-[16px] text-[#FFFFFF] bg-[#00833F] rounded-[8px]">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[5px] ">
                <label className="font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                  Voucher Code
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter coupon code here"
                    className="w-[285px] h-[34px] pl-[10px] font-[400] text-[11px] leading-[16px] outline-none rounded-[8px_0px_0px_8px] border-solid border-[1px] border-[#C1C1C1]"
                  ></input>
                  <button className="w-[60px] h-[34px] font-[400] text-[11px] leading-[16px] text-[#FFFFFF] bg-[#00833F] rounded-[0px_8px_8px_0px]">
                    Apply
                  </button>
                </div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <label className="font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                  Payment Method
                </label>
                <select className="w-full h-[34px] pl-[10px]  font-[400] text-[11px] leading-[16px] text-[#C1C1C1] rounded-[8px] border-solid border-[1px] outline-none border-[#C1C1C1]">
                  <option>Cash</option>
                  <option>Visa</option>
                  <option>PayPal</option>
                </select>
              </div>
              <div className="w-full h-[1px] bg-[#C1C1C1]"></div>
              <div className="flex justify-between items-center">
                <h2 className="font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                  Total
                </h2>
                <span className="font-[400] text-[15px] leading-[22.5px] sm:font-[500] sm:text-[20px] sm:leading-[30px] text-[#00833F]">
                  36$
                </span>
              </div>
              <div>
                <button className="w-full h-[48px] font-[500] text-[16px] leading-[24px] sm:font-[500] sm:text-[20px] sm:leading-[30px] rounded-[8px] text-[#ffffff] bg-[#00833F] hover:bg-[#FFFFFF] transition-all duration-500  border-[1px] border-solid border-[#00833F] hover:text-[#00833F] ">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MyCart;
