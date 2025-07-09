import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import Food from "/src/assets/images/Dashboard-images/Food.png";
import pizza from "/src/assets/images/Dashboard-images/pizza.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function DashboardOverview() {
  const data = {
    labels: ["Sun", "Mon", "Tue"],
    datasets: [
      {
        label: "Sales",
        data: [500, 100, 300],
        backgroundColor: "rgba(183, 226, 209, 1)",
        pointBorderWidth: 7,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        min: 0,
        max: 600,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  const menuItems = [
    {
      name: "Hawaiian Pizza",
      image: Food,
      rating: 4.6,
      sold: 27.89,
    },
    {
      name: "Pepperoni Pizza",
      image: pizza,
      rating: 4.5,
      sold: 27.01,
    },
  ];

  return (
    <section className="w-full h-[1024px]">
      <header className="flex custom-shadow justify-between mb-[20px]  items-center ml-[20px] h-[86px]  px-[25px]  rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]   bg-[#FFFFFF]">
        <div>
          <h1 className=" InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000] ">
            Dashboard Overview
          </h1>
        </div>

        <div className="">
          <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
            <FaSearch className="text-gray-600" size={20} />
          </button>

          <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
            <FaBell className="text-gray-600" size={20} />
          </button>

          <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
            <FaUserCircle className="text-gray-600" size={24} />
          </button>
        </div>
      </header>

      <div className="flex flex-col ml-[20px]   gap-[20px]">
        <div className="  flex flex-col gap-[20px] rounded-[58px]   py-[30px] pl-[25px] h-[621px] bg-[#ffffff]">
          <h2 className=" InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000]  ">
            Popular Menu{" "}
          </h2>

          <div className="flex gap-[20px]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex-1  flex flex-col  gap-[20px] items-center h-[440px]"
              >
                <img
                  src={item.image}
                  className="w-[280px] h-[290px] object-contain"
                ></img>
                <h3 className="font-[Poppins] font-[500] text-[22px] leading-[33px] text-[#000000] ">
                  {item.name}
                </h3>

                <div className="font-[Poppins] font-[500] text-[20px] leading-[30px] text-[#000000] flex items-center gap-[10px]">
                  <span className="flex gap-[7px] items-center">
                    <i class="fa-regular fa-star"></i>
                    {item.rating} ratings
                  </span>
                  <span>•</span>
                  <span>{item.sold} Sold</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[274.33px] flex flex-col gap-[10px] py-[30px] px-[25px] rounded-[58px] bg-[#ffffff]">
          <div className="flex justify-between items-center">
            <h2 className=" InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000]  ">
              Sales Analytics
            </h2>

            <div className="text-gray-500 flex gap-[5px] items-center">
              <i class="fa-regular fa-calendar"></i>
              <span className="InterFont font-[400] text-[20px] leading-[24.2px]">
                Weekly
              </span>
            </div>
          </div>

          <div className="h-[175px] w-full ">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardOverview;
