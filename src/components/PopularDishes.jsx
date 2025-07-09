import pizza from "/src/assets/images/dishes-Images/pizza-slice.svg";
import calzone from "/src/assets/images/dishes-Images/calzone.svg";
import chicken from "/src/assets/images/dishes-Images/chicken.svg";
import seafood from "/src/assets/images/dishes-Images/seafood.svg";
import soups from "/src/assets/images/dishes-Images/soups.svg";
import pasta from "/src/assets/images/dishes-Images/pasta.svg";
import slice from "/src/assets/images/dishes-Images/new-slice-pizza.png";
import heart from "/src/assets/images/dishes-Images/heart.svg";
import stars from "/src/assets/images/dishes-Images/stars.svg";
import market from "/src/assets/images/dishes-Images/market.svg";
import pepperoni from "/src/assets/images/dishes-Images/pepperoni-pizza.png";
import Hawaiian from "/src/assets/images/dishes-Images/Hawaiian  Pizza.png";
import { useState } from "react";

function PopularDishes() {
  // حذف FullWidth و SetFullWidth
  // إضافة state جديدة لحجم كل عنصر
  const [itemSizes, setItemSizes] = useState({});

  function ChangeSize(id, size) {
    const sizeMap = {
      S: 280,
      M: 290,
      L: 300,
    };
    setItemSizes((prev) => ({ ...prev, [id]: sizeMap[size] }));
  }

  const [content, setContent] = useState([
    {
      id: 1,
      title: "Cheese Pizza",
      image: "new-slice-pizza.png",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi egestas tempus. Senectus lacinia sed platea interdum pellentesque.",
      price: "9",
    },
    {
      id: 2,
      title: "pepperoni Pizza",
      image: "pepperoni-pizza.png",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi egestas tempus. Senectus lacinia sed platea interdum pellentesque.",
      price: "9",
    },
    {
      id: 3,
      title: "Hawaiian  Pizza",
      image: "Hawaiian  Pizza.png",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi egestas tempus. Senectus lacinia sed platea interdum pellentesque.",
      price: "9",
    },
  ]);
  return (
    <section className="bg-[#F4F1EA]">
      <div className="container py-[30px] text-white text-center">
        <h1 className="font-[700] text-[24px] pb-[30px] leading-[36px] md:font-[700] md:text-[48px] md:leading-[72px] max-w-full text-[#000000]">
          Popular Dishes
        </h1>
        <div className="">
          <ul className=" flex justify-center items-start text-[#000000] flex-wrap gap-[20px] md:flex-row md:gap-[30px]">
            <li className="flex p-[6px_20px_6px_20px] w-fit rounded-[8px] items-center max-w-full text-[#ffffff] bg-[#00833F] gap-[10px]">
              <img src={pizza} className="w-[20px] h-[20px]"></img>
              <h4>Pizza</h4>
            </li>
            <li className="flex items-center w-fit rounded-[8px]  p-[6px_20px_6px_20px] bg-[#FFFFFF] gap-[10px]">
              <img src={calzone} className="w-[20px] h-[20px]"></img>
              <h4>Calzone</h4>
            </li>
            <li className="flex items-center  w-fit rounded-[8px] p-[6px_20px_6px_20px] bg-[#FFFFFF] gap-[10px]">
              <img src={chicken} className="w-[20px] h-[20px]"></img>
              <h4>Chicken</h4>
            </li>
            <li className="flex items-center  w-fit rounded-[8px] p-[6px_20px_6px_20px] bg-[#FFFFFF] gap-[10px]">
              <img src={seafood} className="w-[20px] h-[20px]"></img>{" "}
              <h4>Seafood</h4>
            </li>
            <li className="flex items-center  w-fit rounded-[8px] p-[6px_20px_6px_20px] bg-[#FFFFFF] gap-[10px]">
              <img src={soups} className="w-[20px] h-[20px]"></img>{" "}
              <h4>Soups</h4>
            </li>
            <li className="flex items-center w-fit rounded-[8px]  p-[6px_20px_6px_20px] bg-[#FFFFFF] gap-[10px]">
              <img src={pasta} className="w-[20px] h-[20px]"></img>{" "}
              <h4>Pasta</h4>
            </li>
          </ul>
        </div>
        <div className="mt-[40px] flex justify-center items-start flex-wrap gap-[20px] md:flex-row md:gap-[46px]">
          {content.map((item) => (
            <div
              key={item.id}
              className=" w-[300.73px] relative max-w-full min-h-[566px]"
            >
              <div
                style={{ width: `${itemSizes[item.id] || 290}px` }}
                className="w-[300px] max-w-full min-h-[278px] element-center z-10   absolute top[21px]"
              >
                <img src={Hawaiian} className="object-contain "></img>
              </div>
              <div className=" absolute top-[167px] w-full rounded-[45px] border-[1px] border-[#C1C1C1] border-solid bg-[#ffffff] min-h-[399px]">
                <div className="absolute top-[116px] flex justify-between items-center w-full px-[20px]">
                  <h4 className="font-[500] text-[20px] leading-[30px]  text-[#000000]">
                    {item.title}
                  </h4>
                  <div>
                    <select
                      defaultValue={"M"}
                      onChange={(e) => ChangeSize(item.id, e.target.value)}
                      className="w-[55px] h-[30px] rounded-[5px] text-[#000000] outline-none border-solid border-[1px] border-[#828282]"
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>
                </div>
                <div className=" absolute top-[167px] w-full flex items-center justify-between px-[20px]">
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
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div className="absolute w-[240px] left-[27px] top-[217px] text-center">
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
        <button className="my-[20px] bg-[#00833F] text-white border-solid border-[1px] border-[#00833F] hover:bg-[#FFFFFF] transition-all duration-500 rounded-[8px] hover:text-[#00833F] lg:w-[206px] max-w-full w-[142px] min-h-[48px] lg:min-h-[70px]  sm:w-[166px] sm:min-h-[50px]">
          View All
        </button>
      </div>
    </section>
  );
}

export default PopularDishes;
