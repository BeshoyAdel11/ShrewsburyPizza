import { FaBell, FaUserCircle } from "react-icons/fa";
import orders from "/src/assets/images/Dashboard-images/orders.png";
import TotalDispatch from "/src/assets/images/Dashboard-images/TotalDispatch.png";
import TotalPending from "/src/assets/images/Dashboard-images/TotalPending.png";
import AnalysisSales from "./AnalysisSales";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

function Anlysis() {
  return (
    <section>
      <div className="className='w-full  h-[1024px]">
        <header className="flex custom-shadow justify-between mb-[20px]  items-center ml-[20px] h-[86px] bg-[#FFFFFF] px-[25px]  rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] ">
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

        <div className="w-full h-[870px] bg-[#B7E2D133] rounded-[25px]">
          <div className="py-10 px-10 rounded-[20px] flex flex-col gap-[20px]">
            <h2 className="InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000A6]">
              Live Orders
            </h2>

            <div className="flex rounded-[20px] gap-[40px] w-[calc(100%-32px)] mx-4 bg-[#ffffff]">
              <div className="  border-solid border-[#0000001A] border-[1px] rounded-[20px] justify-center flex-1 h-[117px] flex gap-[20px] items-center">
                <div>
                  <img src={orders}></img>
                </div>
                <div className="flex flex-col gap-[10px] justify-center items-center">
                  <span className="InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000]">
                    25
                  </span>
                  <p className="InterFont font-[400] text-[24px] leading-[29.5px] text-[#000000A6]">
                    Orders
                  </p>
                </div>
              </div>

              <div className="  border-solid border-[#0000001A] border-[1px] rounded-[20px] justify-center flex-1 h-[117px] flex gap-[20px] items-center">
                <div>
                  <img src={TotalPending}></img>
                </div>
                <div className="flex flex-col gap-[10px] justify-center items-center">
                  <span className="InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000]">
                    25
                  </span>
                  <p className="InterFont font-[400] text-[24px] leading-[29.5px] text-[#000000A6]">
                    Orders
                  </p>
                </div>
              </div>

              <div className="  border-solid border-[#0000001A] border-[1px] rounded-[20px] justify-center flex-1 h-[117px] flex gap-[20px] items-center">
                <div>
                  <img src={TotalDispatch}></img>
                </div>
                <div className="flex flex-col gap-[10px] justify-center items-center">
                  <span className="InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000]">
                    25
                  </span>
                  <p className="InterFont font-[400] text-[24px] leading-[29.5px] text-[#000000A6]">
                    Orders
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <AnalysisSales />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Anlysis;
