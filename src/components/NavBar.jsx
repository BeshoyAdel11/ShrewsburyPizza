import slice from "/src/assets/images/navbar-Images/slice.png";
function NavBar() {
  return (
    <section className="">
      <div className="container p-[0px] mr-[0px]  ">
        <div className="flex gap-[20px] sm:gap-[30px] items-center justify-around w-full">
          <div className="pl-[16px] flex gap-[30px] sm:gap-[40px] w-full sm:items-center   flex-col">
            <div className="  max-w-full min-h[111px] lg:w-[736px] sm:w-[448px] sm:min-h-[188px] lg:min-h[240px]  ">
              <h1 className="font-[900] h-auto  max-w-full text-[25px] leading-[30px] sm:text-center sm:font-[900] sm:text-[60px] sm:leading-[58.2px]   lg:font-[900] lg:text-[80px] lg:leading-[77.6px] text-[#675757]">
                Shrewsbury <br /> House of <br />{" "}
                <span className="text-[#00833F]">PIZZA</span>
              </h1>
            </div>
            <div className="max-w-[full]  sm:w-[413px] sm:min-h-[123px] lg:w-[572px] lg:min-h-[92px] ">
              <p className="font-[400] max-w-full sm:text-center leading-[27px] text-[18px] md:font-[400] md:text-[20.47px] font-[Exo 2] md:leading-[30.7px] text-[#7B4128] ">
                Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi
                egestas tempus. Senectus lacinia sed platea interdum
                pellentesque. Et a mauris interdum.
              </p>
            </div>
            <div className="  flex justify-between lg:w-[430px] lg:min-h[70px] max-w-full min-h-[120px] gap-[15px] sm:w-[368px] sm:min-h[50px] items-start flex-wrap">
              <button className=" bg-[#00833F] text-white border-solid border-[1px] border-[#00833F] hover:bg-[#FFFFFF] transition-all duration-500 rounded-[8px] hover:text-[#00833F] lg:w-[206px] max-w-full w-[142px] min-h-[48px] lg:min-h-[70px]  sm:w-[166px] sm:min-h-[50px]">
                Order Now
              </button>
              <button className="bg-[#FFFFFF] rounded-[8px] text-[#00833F]  border-solid border-[1px] border-[#00833F] hover:bg-[#00833F] transition-all duration-500 hover:text-[#FFFFFF] w-[142px]  min-h-[48px]  lg:max-w-full lg:min-h-[70px]  sm:w-[166px] sm:min-h-[50px]">
                Book A Table
              </button>
            </div>
          </div>
          <div className=" justify-center items-center overflow-hidden  max-w-full w-[704px] h-[686px]">
            <img
              src={slice}
              className="w-full h-full object-cover object-left"
              alt="Slice image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
/*
"w-[195px] md:w-[561px] md:h-[686px] h-[712px] ms:w-[350px] ms:h-[668px] 
*/
