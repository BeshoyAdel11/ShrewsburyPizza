import pizaa from "/src/assets/images/menu-images/Hawaiian  Pizza.png";

function RecetOrdes() {
  return (
    <div className="w-[736px] max-w-full flex flex-col gap-[20px] p-[20px] border-[1px] border-solid border-[#C1C1C1] rounded-[8px] min-h-[586px]">
      <div>
        <h1 className="font-[500] text-[24px] leading-[36px]">Recent Orders</h1>
      </div>
      <div className="w-full h-[1px] "></div>
      <div className="flex flex-col gap-[10px]">
        <div className="max-w-full min-h-[139px] flex flex-col  lg:flex-row  justify-between  gap-[10px]  border-[1px] border-solid border-[#C1C1C1] rounded-[8px] p-[15px]">
          <div className="lg:w-[286px] w-full min-h-[107px] justify-between flex gap-[10px] sm:gap-[16px] items-center">
            <div className="w-[110px] max-w-full flex justify-center items-center h-[107px] bg-[#EFEFEF] rounded-[8px]">
              <img src={pizaa}></img>
            </div>
            <div className="w-[160px] max-w-full flex flex-col gap-[8px] minh-[107px]">
              <h2 className="font-[500] text-[18px] leading-[20px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                Cheese Pizza
              </h2>
              <p className="font-[500] text-[14px] leading-[20px] sm:font-[500] sm:text-[18px] sm:leading-[27px] text-[#93969E]">
                Order ID: 2345678
              </p>
              <p className="font-[500] text-[14px] leading-[20px] text-[#00833F]">
                Price: $12
              </p>
            </div>
          </div>
          <div className="flex lg:justify-end gap-[10px] sm:gap-[20px] max-w-full items-end justify-between">
            <button className="w-[141px] sm:w-[152px] font-[500] text-[16px] leading-[24px]   sm:text-[18px] sm:leading-[27px] max-w-full h-[47px] text-[#ffff] bg-[#00833F]  hover:bg-[#ffffff] transition-all duration-500 hover:text-[#00833F] border-[1px] border-solid border-[#00833F] rounded-[8px]">
              Order again
            </button>
            <button className="w-[113px] sm:w-[113px] max-w-full h-[47px] font-[500] text-[18px] leading-[27px] sm:text-[18px] sm:leading-[27px] border-[1px] border-solid border-[#A12626] rounded-[8px]  hover:bg-[#A12626] transition-all duration-500 hover:text-[#ffff] text-[#A12626]">
              Remove
            </button>
          </div>
        </div>

        <div className="max-w-full min-h-[139px] flex flex-col  lg:flex-row  justify-between  gap-[10px]  border-[1px] border-solid border-[#C1C1C1] rounded-[8px] p-[15px]">
          <div className="lg:w-[286px] w-full min-h-[107px] justify-between flex gap-[10px] sm:gap-[16px] items-center">
            <div className="w-[110px] max-w-full flex justify-center items-center h-[107px] bg-[#EFEFEF] rounded-[8px]">
              <img src={pizaa}></img>
            </div>
            <div className="w-[160px] max-w-full flex flex-col gap-[8px] minh-[107px]">
              <h2 className="font-[500] text-[18px] leading-[20px] sm:font-[500] sm:text-[20px] sm:leading-[30px]">
                Cheese Pizza
              </h2>
              <p className="font-[500] text-[14px] leading-[20px] sm:font-[500] sm:text-[18px] sm:leading-[27px] text-[#93969E]">
                Order ID: 2345678
              </p>
              <p className="font-[500] text-[14px] leading-[20px] text-[#00833F]">
                Price: $12
              </p>
            </div>
          </div>
          <div className="flex lg:justify-end gap-[10px] sm:gap-[20px] max-w-full items-end justify-between">
            <button className="w-[141px] sm:w-[152px] font-[500] text-[16px] leading-[24px]   sm:text-[18px] sm:leading-[27px] max-w-full h-[47px] text-[#ffff] bg-[#00833F]  hover:bg-[#ffffff] transition-all duration-500 hover:text-[#00833F] border-[1px] border-solid border-[#00833F] rounded-[8px]">
              Order again
            </button>
            <button className="w-[113px] sm:w-[113px] max-w-full h-[47px] font-[500] text-[18px] leading-[27px] sm:text-[18px] sm:leading-[27px] border-[1px] border-solid border-[#A12626] rounded-[8px]  hover:bg-[#A12626] transition-all duration-500 hover:text-[#ffff] text-[#A12626]">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecetOrdes;
