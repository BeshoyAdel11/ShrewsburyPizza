function PersonalInfo() {
  return (
    <div className="w-[736px] max-w-full border-[1px] border-solid border-[#C1C1C1] rounded-[8px] min-h-[459px] flex flex-col gap-[20px] p-[20px] ">
      <div>
        <h1 className="font-[400] text-[24px] leading-[36px]">
          Personal Information
        </h1>
      </div>
      <div className="w-full h-[1px] bg-[#C1C1C1]"></div>

      <div classNam="w-full ">
        <form className="grid grid-cols-1   sm:grid-cols-2 w-full gap-[10px]">
          <div className=" flex flex-col gap-[5px] w-full h-[77px] ">
            <label for="name" className="font-[500] text-[16px] leading-[24px]">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="enter your name"
              className="w-full h-[320px] rounded-[5px] border-[1px] border-[#C1C1C1] border-solid outline-none pl-[10px] placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[21px]"
            ></input>
          </div>
          <div className="  flex flex-col gap-[5px] w-full h-[77px]  ">
            <label
              for="Birthday"
              className="font-[500] text-[16px] leading-[24px]"
            >
              Birthday
            </label>
            <input
              type="date"
              id="Birthday"
              className="w-full h-[320px] rounded-[5px] border-[1px] border-[#C1C1C1] border-solid outline-none pl-[10px] placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[21px]"
            ></input>
          </div>
          <div className="  flex flex-col gap-[5px] w-full h-[77px]  ">
            <label
              for="email"
              className="font-[500] text-[16px] leading-[24px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full h-[320px] rounded-[5px] border-[1px] border-[#C1C1C1] border-solid outline-none pl-[10px] placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[21px]"
            ></input>
          </div>
          <div className="  flex flex-col gap-[5px] w-full h-[77px]  ">
            <label
              for="Mobile Number"
              className="font-[500] text-[16px] leading-[24px]"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="Mobile Number"
              className="w-full h-[320px] rounded-[5px] border-[1px] border-[#C1C1C1] border-solid outline-none pl-[10px] placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[21px]"
            ></input>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="font-[500] text-[16px] leading-[24px]">Gender</label>
        <div className="flex gap-[15px]">
          <div className="flex gap-[10px]">
            <input type="radio" id="Male" name="Gender" value="Male"></input>
            <label for="Male" className="font-[500] text-[16px] leading-[24px]">
              Male
            </label>
          </div>
          <div className="flex gap-[10px]">
            <input
              type="radio"
              id="Female"
              name="Gender"
              value="Female"
            ></input>
            <label
              for="Female"
              className="font-[500] text-[16px] leading-[24px]"
            >
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="w-fit ml-auto">
        <button className="font-[500] rounded-[8px]  border-[1px] border-solid border-[#BDBDBD] hover:bg-[#FFFFFF] hover:text-[#BDBDBD] transition-all duration-500  text-[#ffff] text-[18px] leading-[27px] w-[164px] h-[47px] bg-[#BDBDBD]">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
