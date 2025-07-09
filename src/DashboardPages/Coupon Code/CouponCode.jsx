import { FaBell, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import SortUp from "/src/assets/images/Dashboard-images/Sort Up.png";
import SortDown from "/src/assets/images/Dashboard-images/Sort Down .png";
import CheckMark from "/src/assets/images/Dashboard-images/Check Mark.png";
import Edit from "/src/assets/images/Dashboard-images/Edit.png";
import Unavailable from "/src/assets/images/Dashboard-images/Unavailable.png";
import Multiply from "/src/assets/images/Dashboard-images/Multiply.png";
import gift from "/src/assets/images/Dashboard-images/gift.png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CouponCodeForm from "./CouponCodeForm";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { PaginationItem } from "@mui/material";

function CouponCode() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [isAvailable, setisAvailable] = useState(false);

  const toggleAvailable = () => {
    setisAvailable(!isAvailable);
  };

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem("CouponCode");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  //console.log(products)
  /*
    function FilterCoupon(e){
    
      const statue = e.target.dataset.value
         
      products.map((el)=>{
        if( el.Status === statue){
          const filtered = JSON.parse(localStorage.getItem("CouponCode")).filter(
            (product) => product.Status === statue
          );
          setProducts(filtered);
        }else{
          setProducts([...JSON.parse(localStorage.getItem("CouponCode"))]);

        }
      })
      
   
    
    }
     */

  return (
    <>
      <section>
        <div className="w-full  h-[1024px]">
          <header className="flex custom-shadow justify-between mb-[40px]  items-center ml-[20px] h-[86px] bg-[#FFFFFF] px-[25px]  rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] ">
            <div className="flex items-centerrounded-lg p-2 h-[38px] w-[314px]">
              <Search className="mr-2 text-gray-400" />
              <TextField
                placeholder="Search Order..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
              />
            </div>

            <div className="">
              <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
                <FaBell className="text-gray-600" size={20} />
              </button>

              <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
                <FaUserCircle className="text-gray-600" size={24} />
              </button>
            </div>
          </header>

          <div className="flex items-center justify-between w-[calc(100%-32px)] mx-4  px-[30px]  mb-[40px] ">
            <div className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000] flex items-center gap-[10px]">
              <p>Dashboard </p>
              <i className="fa-solid fa-chevron-right text-[#666666A6]"></i>
              <p>Coupon Code</p>
            </div>
            <div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="flex items-center justify-center h-[56px] gap-2  w-[223px] bg-[#088D56B2] rounded-[20px] "
              >
                <i className="fa-solid fa-circle-plus   text-[#666666A6]"></i>
                <span className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#000000A6] ">
                  Add New Coupon
                </span>
              </button>
            </div>
          </div>

          <div className="w-full px-[10px] ">
            <div className="px-[40px] py-[20px] flex justify-between items-center">
              <h2 className="InterFont font-[400] text-[24px] leading-[25.05px] text-[#000000]">
                Coupon Code
              </h2>
              <p className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                Show All Items
              </p>
            </div>

            <div className="w-full flex flex-col justify-between  h-[734px] px-[20px] py-[30px] rounded-[25px] bg-[#B7E2D133]">
              <div className=" flex items-center justify-evenly">
                <div
                  onClick={toggleOptions}
                  className=" cursor-pointer relative w-[267px] p-[0px] h-[44px]   custom-shadow rounded-[20px] bg-[#B7E2D133]"
                >
                  <div className="px-[20px] flex items-center justify-between">
                    <span className=" InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                      Statue
                    </span>
                    <div className="flex flex-col ">
                      <button>
                        <img
                          className="w-[24px] h-[24px] object-contain"
                          src={SortUp}
                        ></img>
                      </button>
                      <button>
                        <img
                          className="w-[24px] h-[24px] object-contain"
                          src={SortDown}
                        ></img>
                      </button>
                    </div>
                  </div>

                  {isOptionsVisible && (
                    <ul className="absolute top-[40px] w-full bg-white border border-gray-300 rounded  z-10">
                      <li
                        data-value="Yes"
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={toggleOptions}
                      >
                        Active
                      </li>
                      <li
                        data-value="No"
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={toggleOptions}
                      >
                        inactivate
                      </li>
                    </ul>
                  )}
                </div>

                <div
                  onClick={toggleAvailable}
                  className="cursor-pointer relative w-[267px]  h-[44px]    custom-shadow rounded-[20px] bg-[#B7E2D133]"
                >
                  <div className="px-[20px] flex items-center justify-between">
                    <span className=" InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]">
                      Available
                    </span>
                    <div className="flex flex-col ">
                      <button>
                        <img
                          className="w-[24px] h-[24px] object-contain"
                          src={SortUp}
                        ></img>
                      </button>
                      <button>
                        <img
                          className="w-[24px] h-[24px] object-contain"
                          src={SortDown}
                        ></img>
                      </button>
                    </div>
                  </div>

                  {isAvailable && (
                    <ul className="absolute top-[40px] w-full bg-white border border-gray-300 rounded  z-10">
                      <li
                        data-value="Yes"
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={toggleAvailable}
                      >
                        Available
                      </li>
                      <li
                        data-value="No"
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={toggleAvailable}
                      >
                        Unavailable
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="w-full overflow-scroll h-[450px] flex flex-col gap-[40px]">
                <div className="w-full flex  items-center rounded-[20px] border-solid border-[1px] border-[#088D56] bg-[#ffffff] gap-[20px] h-[183px] p-[20px]">
                  <div className="flex-[0.4]  h-full flexjustify-center">
                    <img
                      className="w-full h-full object-contain"
                      src={gift}
                    ></img>
                  </div>

                  <div className="h-full flex   justify-between  gap-[20px] flex-1">
                    <div className=" flex flex-col  flex-shrink-0     gap-[20px] ">
                      <h2 className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56] ">
                        CUPON Code <span>Nuxxxx</span>
                      </h2>
                      <div className=" flex flex-col gap-[15px]">
                        <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex  gap-[10px] text-[#000000A6] ">
                          Created: <span>5 Jan 2025</span>
                        </p>
                        <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex gap-[10px] text-[#000000A6]">
                          Expiration: <span>25 Jan 2025</span>
                        </p>
                        <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex gap-[10px] text-[#000000A6]">
                          Discount:
                          <span className="text-[#088D56] font-[700] flex gap-[10px]">
                            50%
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className=" flex flex-col   justify-between items-center      ">
                      <div className="  gap-[20px] flex flex-wrap justify-center  ">
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                          <img src={CheckMark}></img>Active
                        </button>
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                          <img src={Unavailable}></img>inactivate
                        </button>
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                          <img src={Multiply}></img>Delete
                        </button>
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                          <img src={Edit}></img>Edit
                        </button>
                      </div>
                      <div className=" flex-1 text-center flex items-center InterFont font-[700] text-[20px] leading-[24.2px] text-[#088D56]  ">
                        Available
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex  items-center rounded-[20px] border-solid border-[1px] border-[#088D56] bg-[#ffffff] gap-[20px] h-[183px] p-[20px]">
                  <div className="flex-[0.4]  h-full flexjustify-center">
                    <img
                      className="w-full h-full object-contain"
                      src={gift}
                    ></img>
                  </div>

                  <div className="h-full flex   justify-between  gap-[20px] flex-1">
                    <div className=" flex flex-col  flex-shrink-0     gap-[20px] ">
                      <h2 className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56] ">
                        CUPON Code <span>Nuxxxx</span>
                      </h2>
                      <div className=" flex flex-col gap-[15px]">
                        <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex  gap-[10px] text-[#000000A6] ">
                          Created: <span>5 Jan 2025</span>
                        </p>
                        <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex gap-[10px] text-[#000000A6]">
                          Expiration: <span>25 Jan 2025</span>
                        </p>
                        <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex gap-[10px] text-[#000000A6]">
                          Discount:
                          <span className="text-[#088D56] font-[700] flex gap-[10px]">
                            50%
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className=" flex flex-col   justify-between items-center      ">
                      <div className="  gap-[20px] flex flex-wrap justify-center  ">
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                          <img src={CheckMark}></img>Active
                        </button>
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                          <img src={Unavailable}></img>inactivate
                        </button>
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                          <img src={Multiply}></img>Delete
                        </button>
                        <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                          <img src={Edit}></img>Edit
                        </button>
                      </div>
                      <div className=" flex-1 text-center flex items-center InterFont font-[700] text-[20px] leading-[24.2px] text-[#000000A6]  ">
                        Unavailable
                      </div>
                    </div>
                  </div>
                </div>

                {products.map((e, i) => (
                  <div
                    key={i}
                    className="w-full flex  items-center rounded-[20px] border-solid border-[1px] border-[#088D56] bg-[#ffffff] gap-[20px] h-[183px] p-[20px]"
                  >
                    <div className="flex-[0.4]  h-full flexjustify-center">
                      <img
                        className="w-full h-full object-contain"
                        src={e.image}
                      ></img>
                    </div>

                    <div className="h-full flex   justify-between  gap-[20px] flex-1">
                      <div className=" flex flex-col  flex-shrink-0     gap-[20px] ">
                        <h2 className="InterFont font-[400] text-[20px] leading-[24.2px] text-[#088D56] ">
                          CUPON Code <span>{e.Code}</span>
                        </h2>
                        <div className=" flex flex-col gap-[15px]">
                          <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex  gap-[10px] text-[#000000A6] ">
                            Created: <span>5 Jan 2025</span>
                          </p>
                          <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex gap-[10px] text-[#000000A6]">
                            Expiration: <span>25 Jan 2025</span>
                          </p>
                          <p className="InterFont font-[400] text-[16px] leading-[19.36px] flex gap-[10px] text-[#000000A6]">
                            Discount:
                            <span className="text-[#088D56] font-[700] flex gap-[10px]">
                              50%
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className=" flex flex-col   justify-between items-center      ">
                        <div className="  gap-[20px] flex flex-wrap justify-center  ">
                          <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6] ">
                            <img src={CheckMark}></img>Active
                          </button>
                          <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                            <img src={Unavailable}></img>inactivate
                          </button>
                          <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                            <img src={Multiply}></img>Delete
                          </button>
                          <button className="flex items-center gap-[5px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000A6]  ">
                            <img src={Edit}></img>Edit
                          </button>
                        </div>
                        <div className=" flex-1 text-center flex items-center InterFont font-[700] text-[20px] leading-[24.2px] text-[#088D56]  ">
                          Available
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Stack spacing={2}>
                  <Pagination
                    count={4}
                    color="success"
                    size="medium"
                    siblingCount={1}
                    boundaryCount={1}
                    showFirstButton
                    showLastButton
                    renderItem={(item) => (
                      <PaginationItem
                        {...item}
                        components={{
                          previous: () => <span>Previous</span>,
                          next: () => <span>Next</span>,
                        }}
                      />
                    )}
                  />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFormOpen && (
        <CouponCodeForm
          setIsFormOpen={setIsFormOpen}
          setProducts={setProducts}
          products={products}
        />
      )}
    </>
  );
}

export default CouponCode;
