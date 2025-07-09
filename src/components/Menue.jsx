import MenueData from "../MenueData.json";
import market from "/src/assets/images/menu-images/market.svg";
import { useState } from "react";
import MenuData from "./MenuData";
import Nav from "./Nav";
import pizaa from "/src/assets/images/menu-images/Hawaiian  Pizza.png";
import PizzaBuilder from "./BuildPizza";

function Menue() {
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const [showBuildPizza, setShowBuildPizza] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [LikedItems, setLikedItems] = useState({});
  const [ratings, setRatings] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const ChangeColor = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [fullWidth, setFullWidth] = useState({});

  function changeSize(id, size) {
    const sizeMap = {
      S: 280,
      M: 290,
      L: 300,
    };

    const fullSize = sizeMap[size];

    setFullWidth((prev) => ({ ...prev, [id]: fullSize }));
  }

  const getData = (id, imge, paragraph, price, title) => {
    let tempData = [imge, paragraph, price, title];
    setTempdata([id, ...tempData]);
    setSelectedId(id);
    setModel(true);
  };

  const handleRatingClick = (id, starNumber) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: starNumber,
    }));
  };

  return (
    <>
      <Nav />
      <section>
        <div className="container flex flex-col gap-[20px] py-[20px]">
          <div className="flex items-center gap-[10px] md:gap-[30px]">
            <div className="lg:w-fit w-full">
              <h1 className="font-[700] text-[18px] leading-[27px] sm:font-[600] max-w-full sm:text-[48px] sm:leading-[72px] text-[#000000]">
                Pizza <span className="text-[#00833F]">Menu</span>
              </h1>
            </div>
            <div className="max-w-full lg:w-[635px] w-full">
              <input
                type="search"
                placeholder=" Search for pizza you want"
                className="w-full h-[29px] sm:h-[50px] font-[400] text-[10px] leading-[15px] sm:font-[400] sm:text-[16px] sm:leading-[24px] rounded-[8px] border-[1px] pl-[20px] outline-none border-solid border-[#C1C1C1] max-w-full"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 place-items-center justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
             <div
              className="w-[300.73px] flex flex-col items-center justify-center relative max-w-full min-h-[400px] bg-gradient-to-br from-[#00833F] to-[#B7E2D1] shadow-lg rounded-[45px] border-4 border-dashed border-[#00833F] transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer group"
              onClick={() => setShowBuildPizza(true)}
            >
              <div className="flex flex-col items-center justify-center h-full w-full min-h-[400px]">
                <div className="bg-white rounded-full w-[100px] h-[100px] flex items-center justify-center mb-4 border-4 border-[#00833F] group-hover:rotate-12 transition-transform relative">
                  <img src={pizaa} alt="Build Pizza" className="w-[70px] h-[70px] object-contain" />
                  <span className="absolute text-[36px] text-[#00833F] font-bold left-[70%] top-[30%] group-hover:scale-125 transition-transform">+</span>
                </div>
                <h3 className="text-white text-[20px] font-bold mb-1 drop-shadow-lg">Build Your Pizza</h3>
                <p className="text-[#F4F1EA] text-[14px] mb-2 text-center">Customize your pizza and choose all your favorite ingredients!</p>
                <button className="bg-white text-[#00833F] font-bold rounded-[8px] px-4 py-1 mt-1 shadow hover:bg-[#00833F] hover:text-white transition-all text-[16px]">Start Now</button>
              </div>
            </div>
             {MenueData.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <div
                key={item.id}
                className="flex justify-center w-[300.73px] relative max-w-full min-h-[566px]"
              >
                <div
                  style={{ width: `${fullWidth[item.id] || 290}px` }} // نحصل على الحجم للعنصر المحدد فقط
                  className="flex items-center w-[300px] max-w-full min-h-[278px] element-center z-10 absolute top[21px]"
                >
                  <button
                    onClick={() =>
                      getData(
                        item.id,
                        item.image,
                        item.paragraph,
                        item.price,
                        item.title
                      )
                    }
                  >
                    <img src={pizaa} className="object-contain " />
                  </button>
                </div>
                <div className="absolute top-[167px] w-full rounded-[45px] border-[1px] border-[#C1C1C1] border-solid bg-[#ffffff] min-h-[399px]">
                  <div className="absolute top-[116px] flex justify-between items-center w-full px-[20px]">
                    <h4 className="font-[500] text-[20px] leading-[30px] text-[#000000]">
                      {item.title}
                    </h4>
                    <div>
                      <select
                        defaultValue={"M"}
                        onChange={(e) => changeSize(item.id, e.target.value)}  
                        className="w-[55px] h-[30px] rounded-[5px] text-[#000000] outline-none border-solid border-[1px] border-[#828282]"
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                      </select>
                    </div>
                  </div>
                  <div className="absolute top-[167px] w-full flex items-center justify-between px-[20px]">
                    <div>
                      <ul className="flex items-center justify-between w-[120px] max-w-full">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <li
                            key={star}
                            onClick={() => handleRatingClick(item.id, star)}
                          >
                            <i
                              className={`fa-solid fa-star ${
                                ratings[item.id] >= star
                                  ? "text-[#FBC305]"  
                                  : "text-[#D9D9D9]"  
                              }`}
                            ></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="text-[#000000]"
                      onClickCapture={() => ChangeColor(item.id)}
                    >
                      <i
                        className={`fa-solid fa-heart ${
                          LikedItems[item.id]
                            ? "text-[#00833F]"
                            : "text-[#d9d9d9ea]"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div className="absolute w-[240px] left-[27px] top-[217px] text-center">
                    <p className="font-[400] text-[14px] leading-[21px] text-center text-[#7B4128]">
                      {item.paragraph}
                    </p>
                  </div>
                  <div className="flex items-center w-full justify-between gap-[40px] px-[20px] absolute top-[339px]">
                    <h4 className="font-[500] text-[24px] leading-[36px] text-[#00833F]">
                      {item.price}$
                    </h4>
                    <div className="w-[48px] h-[44px] element-center rounded-[8px] bg-[#00833F]">
                      <img src={market} className="w-[32px] h-[32px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {model && (
        <MenuData
          getData={setModel}
          image={tempdata[1]}
          dec={tempdata[2]}
          price={tempdata[3]}
          title={tempdata[4]}
        />
      )}

      {showBuildPizza && <PizzaBuilder ShowBuildPizza={setShowBuildPizza} />}
    </>
  );
}

export default Menue;
