import { FaBell, FaUserCircle } from "react-icons/fa";
import man from "/src/assets/images/Dashboard-images/man .png";
import Payment from "/src/assets/images/Dashboard-images/Payment.png";
import PrintIcon from "@mui/icons-material/Print";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ClientDetails() {
  return (
    <section>
      <div className="w-full  h-[1024px]">
        <header className="flex custom-shadow justify-between mb-[20px]  items-center ml-[20px] h-[86px] bg-[#FFFFFF] px-[25px]  rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] ">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
              <i className="fa-solid fa-magnifying-glass text-[#666666A6]"></i>
            </span>
            <input
              type="search"
              className="w-[314px] outline-none h-[38px] pl-[10px] placeholder:pl-[30px] placeholder:InterFont placeholder:font-[400]  placeholder:text-[18px]  placeholder:leading-[21.78px]  placeholder:text-[#000000A6]  "
              placeholder="Search Order..."
            ></input>
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

        <div className="bg-[#B7E2D133] rounded-[25px] h-[870px] flex flex-col items-center py-10 px-10">
          {/* العنوان الرئيسي */}
          <div className="flex items-center w-full max-w-5xl justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={man}
                alt="User Avatar"
                className="w-[80px] h-[92px] rounded-full"
              />
              <h1 className="InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000A6]">
                Order Adam
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className=" InterFont font-[400] text-[18px] leading-[21.78px] text-[#088D56]">
                Delivery
              </span>
              <span className=" InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                Order created Oct 28, 2024
              </span>
              <span className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                6:56 PM
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="h-[276px] flex flex-col gap-[30px] bg-white rounded-[20px] shadow p-[30px]">
              <h2 className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                Customer Details
              </h2>

              <div className="flex items-center gap-[30px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                <span>Name</span>
                <p>Adam Samul</p>
              </div>

              <div className="flex items-center gap-[30px] InterFont font-[400] text-[16px] leading-[19.36px]   text-[#000000]">
                <span>Email</span>
                <p>fuzzypineappleheads@gmail.com</p>
              </div>

              <div className="flex items-center gap-[30px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                <span>Phone</span>
                <p>+1 (9500) 4467-2726</p>
              </div>
            </div>

            {/* عنوان التوصيل */}
            <div className="bg-white h-[276px] flex flex-col gap-[30px] rounded-[20px] shadow p-[30px]">
              <div className="flex justify-between items-center">
                <h2 className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                  Delivery Address
                </h2>
                <PrintIcon className="text-gray-400 w-[24px] h-[24px]" />
              </div>

              <div className="flex justify-between items-center">
                <span className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                  Address Line
                </span>
                <p className=" InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]">
                  50 Purinton St
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                  Flat / Building Name
                </span>
                <p className="InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]">
                  James
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                  Street Name
                </span>
                <p className="InterFont font-[400] text-[14px] leading-[16.94px] text-[#000000A6]">
                  Purinton St
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                  Current Location:
                </span>
                <LocationOnIcon className="text-[#088D56] w-[35px] h-[35px]" />
              </div>
            </div>

            <div className="bg-white  h-[276px] flex flex-col gap-[30px] rounded-[20px] shadow p-[30px] ">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                2 Items
              </h2>

              <div className="flex flex-col gap-[20px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                <span className="">Cheese Pizza :</span>
                <p className="flex justify-center">1x Extra Parmesan Cheese</p>
              </div>

              <div className="flex flex-col gap-[20px] InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                <span className="">Pepperoni Pizza :</span>
                <p className="flex justify-center ">1x Extra Cheese</p>
              </div>
            </div>

            <div className="bg-white  h-[276px] flex flex-col gap-[15px] rounded-[20px] shadow p-[30px]">
              <div className="flex justify-between items-center">
                <h2 className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                  Payment
                </h2>
                <img src={Payment} className="w-[45px] h-[29px]"></img>
              </div>

              <div>
                <p className="flex justify-between items-center">
                  <span className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                    Payment Method:
                  </span>
                  <span className="InterFont font-[400] text-[14px] leading-[16.94px] text-[#088D56]">
                    Credit Card
                  </span>
                </p>
              </div>

              <div>
                <p className="flex justify-between items-center">
                  <span className="InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                    State:
                  </span>
                  <span className="InterFont font-[400] text-[14px] leading-[16.94px] text-[#088D56]">
                    Completed
                  </span>
                </p>
              </div>

              <div className="flex justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                <span>Subtotal:</span>
                <p>$50.00</p>
              </div>

              <div className="flex justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                <span>Discount:</span>
                <p>$0.00</p>
              </div>

              <div className="flex justify-between items-center InterFont font-[400] text-[16px] leading-[19.36px] text-[#000000]">
                <span>Delivery Fee:</span>
                <p>$3.36</p>
              </div>

              <div className="flex justify-center items-center gap-[20px] InterFont font-[700] text-[18px] leading-[21.78px] text-[#000000]">
                <span>Total</span>
                <p>$53.36</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientDetails;
