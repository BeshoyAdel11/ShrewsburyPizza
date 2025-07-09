import MenueData from "../MenueData.json";
import market from "/src/assets/images/menu-images/market.svg";
import pizaa from "/src/assets/images/menu-images/Hawaiian  Pizza.png";

function Wishlist() {
  return (
    <div className="w-[736px] max-w-full p-[20px] flex flex-col gap-[20px] min-h-[586px] border-[1px] border-solid border-[#C1C1C1] rounded-[8px]">
      <div>
        <h1 className="font-[500] text-[24px] leading-[36px]">Wishlist</h1>
      </div>
      <div className="w-full h-[1px] bg-[#C1C1C1]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[500px] justify-items-center gap-[20px] overflow-scroll">
        {MenueData.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col items-center w-[295px] relative max-w-full min-h-[457px]"
          >
            <div
              style={{ width: 200 }}
              className={`max-w-full min-h-[165px] element-center z-10   absolute top-[0px]`}
            >
              <img src={pizaa} className="object-contain w-full h-full "></img>
            </div>
            <div className=" absolute top-[57px] w-full rounded-[45px] border-[1px] border-[#C1C1C1] border-solid bg-[#ffffff] min-h-[399px]">
              <div className="absolute top-[116px] flex justify-between items-center w-full px-[20px]">
                <h4 className="font-[500] text-[20px] leading-[30px]  text-[#000000]">
                  {item.title}
                </h4>
                <div>
                  <select
                    defaultValue="M"
                    onChange={(e) => ChangeSize(e.target.value)}
                    className="w-[55px] h-[30px] rounded-[5px] text-[#000000] outline-none border-solid border-[1px] border-[#828282]"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
              </div>
              <div className=" absolute top-[167px] w-full  flex items-center justify-between px-[20px]">
                <div>
                  <ul className=" flex items-center justify-between w-[120px] max-w-full">
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#FBC305]"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-[#D9D9D9]"></i>
                    </li>
                  </ul>
                </div>
                <div className="text-[#000000]">
                  <i className={`fa-solid fa-heart text-[#00833F]`}></i>
                </div>
              </div>
              <div className="absolute  w-full top-[217px] text-center">
                <p className="font-[400]   text-[14px] leading-[21px] text-center text-[#7B4128]">
                  {item.paragraph}
                </p>
              </div>
              <div className="flex items-center w-full justify-between gap-[40px] px-[20px] absolute top-[339px]">
                <h4 className="font-[500] text-[24px] leading-[36px] text-[#00833F]">
                  {item.price}$
                </h4>
                <div className="w-[48px] h-[44px] element-center rounded-[8px] bg-[#00833F]">
                  <img src={market} className="w-[32px] h-[32px]"></img>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
