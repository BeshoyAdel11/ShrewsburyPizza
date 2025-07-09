import React, { useRef, useEffect, useState } from "react";

const PizzaBuilder = (props) => {
  const [toppings, setToppings] = useState([]);
  const [selectedTopping, setSelectedTopping] = useState(null);
  const [distributionModes, setDistributionModes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [visibleOptions, setVisibleOptions] = useState({});
  const canvasRef = useRef(null);

  const toppingImages = {
    Pepper: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Green-peppers-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Green-peppers-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Green-peppers-3.png",
    ],
    Olives: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Black-olives-1.png",
    ],
    Feta: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Feta-cheese-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Feta-cheese-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Feta-cheese-3.png",
    ],
    Spinach: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Spinach-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Spinach-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Spinach-3.png",
    ],
    Garlic: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Fresh-garlic-1.png",
    ],
    "Banana Pepper": [
      "https://www.shrewsburyhousepizza.com/img/toppings/Banana-peppers-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Banana-peppers-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Banana-peppers-3.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Banana-peppers-4.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Banana-peppers-5.png",
    ],
    Tomatoes: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Tomatoes-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Tomatoes-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Tomatoes-3.png",
    ],
    Hamburger: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Hamburger.png",
    ],
    pepperoni: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Pepperoni-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Pepperoni-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Pepperoni-3.png",
    ],
    Sausage: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Italian-sausage-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Italian-sausage-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Italian-sausage-3.png",
    ],
    Salami: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Salami-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Salami-.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Salami-3.png",
    ],
    Ham: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Ham-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Ham-1.png",
    ],
    mushrooms: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Green-peppers-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Green-peppers-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Green-peppers-3.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Green-peppers-3.png",
    ],
    Bacon: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Bacon-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Bacon-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Bacon-3.png",
    ],
    Meatball: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Meatballs-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Meatballs-2.png",
    ],
    Onion: ["https://www.shrewsburyhousepizza.com/img/toppings/Onions-1.png"],
    Anchovies: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Anchovies-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Anchovies-1.png",
    ],
    Shrimp: ["https://www.shrewsburyhousepizza.com/img/toppings/Shrimp.png"],
    "Grilled Chicken": [
      "https://www.shrewsburyhousepizza.com/img/toppings/Chicken-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Chicken-2.png",
    ],
    Steak: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Steak-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Steak-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Steak-3.png",
    ],
    Mushroom: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Mushrooms-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Mushrooms-2.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Mushrooms-3.png",
    ],
    Broccoli: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Broccoli-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Broccoli-2.png",
    ],
    Jalapeno: [
      "https://www.shrewsburyhousepizza.com/img/toppings/Jalapeno-peppers-1.png",
      "https://www.shrewsburyhousepizza.com/img/toppings/Jalapeno-peppers-2.png",
    ],
    Artichoke: [
      "https://www.shrewsburyhousepizza.com/img/toppings/artichoke.png",
    ],
    "Extra Cheese": [
      "https://www.shrewsburyhousepizza.com/img/toppings/Extra-cheese-1.png",
    ],
  };

  const toppingNames = Object.keys(toppingImages);

  const [directions, setDirections] = useState(
    toppingNames.reduce((acc, topping) => {
      acc[topping] = "both";
      return acc;
    }, {})
  );

  const pizzaRadius = 120;
  const toppingSize = 150;
  const minDistance = 25;

  const getNumPositions = (quantity) => {
    if (quantity === "light") return 40;
    if (quantity === "medium") return 50;
    if (quantity === "extra") return 60;
    return 0;
  };

  const generateRandomPositions = (numPositions, half) => {
    const positions = [];

    for (let i = 0; i < numPositions; i++) {
      let validPosition = null;
      let attempts = 0;

      while (!validPosition && attempts < 100) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * pizzaRadius;
        let x = 150 + radius * Math.cos(angle);
        let y = 157.5 + radius * Math.sin(angle);

        if (half === "left" && x > 150) continue;
        if (half === "right" && x < 150) continue;

        const isFarEnough = positions.every(
          (pos) => Math.hypot(pos.x - x, pos.y - y) >= minDistance
        );

        if (isFarEnough) {
          validPosition = { x, y };
        }

        attempts++;
      }

      if (validPosition) {
        positions.push(validPosition);
      }
    }

    return positions;
  };

  const applyTopping = (topping, quantity, mode) => {
    const numPositions = getNumPositions(quantity);
    let toppingPositions = [];

    if (mode === "both") {
      toppingPositions = generateRandomPositions(numPositions, "both");
    } else if (mode === "left") {
      toppingPositions = generateRandomPositions(numPositions, "left");
    } else if (mode === "right") {
      toppingPositions = generateRandomPositions(numPositions, "right");
    }

    return toppingPositions;
  };

  useEffect(() => {
    const drawCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      toppings.forEach((topping) => {
        topping.positions.forEach((position) => {
          const img = new Image();

          const randomImageIndex = Math.floor(
            Math.random() * toppingImages[topping.name].length
          );
          img.src = toppingImages[topping.name][randomImageIndex];

          img.onload = () => {
            ctx.drawImage(
              img,
              position.x - toppingSize / 2,
              position.y - toppingSize / 2,
              toppingSize,
              toppingSize
            );
          };
        });
      });
    };

    drawCanvas();
  }, [toppings]);

  const handleToppingClick = (topping) => {
    setSelectedTopping(topping);

    const existingTopping = toppings.find((t) => t.name === topping);

    if (existingTopping) {
      setToppings(toppings.filter((t) => t.name !== topping));
    } else {
      const quantity = quantities[topping] || "medium";
      const mode = distributionModes[topping] || "both";
      const toppingPositions = applyTopping(topping, quantity, mode);
      setToppings((prevToppings) => [
        ...prevToppings,
        { name: topping, positions: toppingPositions },
      ]);
    }
  };

  const handleQuantityChange = (topping, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [topping]: quantity,
    }));

    const mode = distributionModes[topping] || "both";
    const toppingPositions = applyTopping(topping, quantity, mode);
    setToppings((prevToppings) =>
      prevToppings.map((t) =>
        t.name === topping ? { ...t, positions: toppingPositions } : t
      )
    );
  };

  const handleDistributionChange = (topping, mode) => {
    setDistributionModes((prevModes) => ({
      ...prevModes,
      [topping]: mode,
    }));

    const quantity = quantities[topping] || "medium";
    const toppingPositions = applyTopping(topping, quantity, mode);
    setToppings((prevToppings) =>
      prevToppings.map((t) =>
        t.name === topping ? { ...t, positions: toppingPositions } : t
      )
    );
  };

  const toggleToppingOptions = (toppingId) => {
    setVisibleOptions((prev) => ({
      ...prev,
      [toppingId]: !prev[toppingId],
    }));
  };

  const handleDirectionChange = (topping) => (newDirection) => {
    setDirections((prev) => ({
      ...prev,
      [topping]: newDirection,
    }));
  };

  console.log(toppings);

  return (
    <section className='overflow-y-auto w-screen z-30 inset-0 fixed bg-[#7C7C7C7A] bg-opacity-90"'>
      <div className="container bg-[#FFFFFF] w-[1069px] max-w-full p-[20px] h-[1150px] md:h-[767px]">
        <div className="flex justify-end">
          <button onClick={() => props.ShowBuildPizza(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="flex  flex-col gap-[10px] sm:gap-[20px]">
          <div className="  flex  md:gap-[40px] xl:gap-[80px] gap-[4px] flex-col md:flex-row     justify-center   items-center">
            <div className=" w-full md:w-[380px] flex flex-col  justify-center items-center md:items-start gap-[10px] h-[500px] md:h-[589px]">
              <div className="w-[300px] max-w-full  ">
                <div
                  id="pizzaCanvas"
                  className="canvas-wrapper pizza background-Tow m-auto max-w-full  "
                  style={{ position: "relative", width: 300, height: 315 }}
                >
                  <canvas
                    ref={canvasRef}
                    width={300}
                    height={315}
                    id="mask_canvas"
                    style={{
                      display: "block",
                      position: "absolute",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div className="w-full">
                  <h1 className="font-[500] text-[24px] leading-[36px] md:font-[600] text-center md:text-start md:text-[40px] md:leading-[60px]">
                    Cheese Pizza
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="w-full">
                  <label className="font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                    Notes
                  </label>
                </div>
                <div>
                  <textarea
                    placeholder="How’d you like this order."
                    className="font-[400] text-[16px] leading-[24px] pl-[10px] max-w-full w-[281px] h-[91px] md:w-[380px] md:h-[171px] pt-[10px] outline-none rounded-[8px] border-solid border-[1px] border-[#C1C1C1]  "
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="md:w-[480px] w-full h-[469px] md:h-[589px] rounded-[8px] border-solid border-[1px] border-[#C1C1C1] flex flex-col gap-[8px] md:gap-[10px] px-[20px] py-[15px]">
              <div className="w-full flex flex-col gap-[10px]">
                <label className="font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Size
                </label>
                <select className="pt-[10px] pl-[20px] font-[400] text-[14px] leading-[21px] md:font-[400] md:text-[16px] md:leading-[24px] rounded-[8px] border-solid border-[1px] border-[#C1C1C1] outline-none">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>

              <div className="toppingItems flex flex-col gap-[8px] w-full">
                <div>
                  <label className=" font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                    Extra Toppings
                  </label>
                </div>
                <div className="rounded-[8px] border-solid border-[1px] border-[#C1C1C1]  p-[10px] w-full">
                  <div className="w-full h-[140px] md:h-[175px]  overflow-scroll  flex flex-col gap-[20px]">
                    {Object.keys(toppingImages).map((topping) => (
                      <div
                        key={topping}
                        className="flex justify-between items-center"
                      >
                        <div className="flex gap-[8px]">
                          <input
                            type="checkbox"
                            checked={!!visibleOptions[topping]}
                            onChange={() => {
                              handleToppingClick(topping);
                              toggleToppingOptions(topping);
                            }}
                            className="accent-[#00833F] w-[22px] h-[22px] "
                          />
                          <label className="font-[400] text-[16px] leading-[24px] sm:font-[400] sm:text-[16px] sm:leading-[24px]">
                            {topping}{" "}
                            <span className="font-[400] text-[12px] leading-[18px] md:font-[400] md:text-[12px] md:leading-[18px] text-[#00833F]">
                              (3 $)
                            </span>
                          </label>
                        </div>
                        {visibleOptions[topping] && (
                          <div className="flex justify-center items-center gap-[15px]">
                            <div className="flex justify-start items-center gap-[10px]">
                              <button
                                onClick={() => {
                                  handleDistributionChange(topping, "left");
                                  handleDirectionChange(topping)("left");
                                }}
                                className={` rounded-l-full w-[8px] h-[16px] lg:w-[11.5px] lg:h-[23px] ${
                                  directions[topping] == "left"
                                    ? "bg-[#00833F]"
                                    : "bg-[#D9D9D9]"
                                }`}
                              >
                                {" "}
                              </button>
                              <button
                                onClick={() => {
                                  handleDistributionChange(topping, "both");
                                  handleDirectionChange(topping)("both");
                                }}
                                className={`lg:w-[23px] lg:h-[23px] w-[16px] h-[16px] rounded-[100%] bg-[#0  ${
                                  directions[topping] == "both"
                                    ? "bg-[#00833F]"
                                    : "bg-[#D9D9D9]"
                                }`}
                              >
                                {" "}
                              </button>
                              <button
                                onClick={() => {
                                  handleDistributionChange(topping, "right");
                                  handleDirectionChange(topping)("right");
                                }}
                                className={`  rounded-r-full w-[8px] h-[16px] lg:w-[11.5px] lg:h-[23px] ${
                                  directions[topping] == "right"
                                    ? "bg-[#00833F]"
                                    : "bg-[#D9D9D9]"
                                }`}
                              >
                                {" "}
                              </button>
                            </div>
                            <div>
                              <select
                                value={quantities[topping] || "medium"}
                                onChange={(e) =>
                                  handleQuantityChange(topping, e.target.value)
                                }
                                className="font-[400] text-[12px] leading-[18px] md:font-[400] md:text-[16px] md:leading-[24px]"
                              >
                                <option value="light">L</option>
                                <option value="medium">M</option>
                                <option value="extra">E</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#C1C1C1]"></div>
              <div className="   max-w-full flex items-center justify-between">
                <h3 className="font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Quantity
                </h3>
                <div className="">
                  <div className=" flex gap-[5px] w-full">
                    <button className="w-[30px] h-[30px]">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <p className="w-[30px] bg-[#00833F] h-[30px] font-[500] text-[15px]  leading-[22.5px] text-white rounded-[50%] flex justify-center items-center">
                      0
                    </p>
                    <button className="w-[30px] h-[30px]">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" max-w-full flex items-center justify-between">
                <p className="font-[500] text-[18px] leading-[27px] md:font-[500] md:text-[24px] md:leading-[36px]">
                  Total
                </p>
                <p className="font-[500] text-[14px] leading-[21px] md:font-[500] md:text-[24px] md:leading-[36px] text-[#00833F]">
                  18$
                </p>
              </div>
              <div className="w-full">
                <button className="font-[500] text-[16px] leading-[24px] md:font-[500] md:text-[24px] md:leading-[36px] bg-[#00833F] text-white border-solid border-[1px] border-[#00833F] hover:bg-[#FFFFFF] transition-all duration-500 rounded-[8px] hover:text-[#00833F]  w-full h-[36px] md:h-[48px] ">
                  Check Out
                </button>
              </div>
              <div className="w-full">
                <button className="md:font-[500] md:text-[24px] md:leading-[36px] bg-[#FFFFFF] rounded-[8px] text-[#00833F]  border-solid border-[1px] border-[#00833F] hover:bg-[#00833F] transition-all duration-500 hover:text-[#FFFFFF] w-full h-[36px] md:h-[48px]  ">
                  <i className="fa-solid fa-store mr-[10px]"></i> Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center font-[400] text-[14px] leading-[21px] md:font-[400] md:text-[24px] md:leading-[36px] text-[#7B4128]">
              The Pizza Builder will always show a large pizza. If you choose a
              different size, the topping amounts will vary. The deliciousness,
              however, will not.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaBuilder;
