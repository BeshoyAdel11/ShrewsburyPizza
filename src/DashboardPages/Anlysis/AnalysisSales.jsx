import React from "react";
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

function AnalysisSales() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "Sales Growth",
        data: [0, 250, 500, 750, 750, 750, 800, 850, 900, 950, 1000],
        borderColor: "rgba(16, 185, 129, 0.8)",
        backgroundColor: "rgba(16, 185, 129, 0.5)",
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointStyle: "circle",
        clip: false,
        tension: 0.4,
        showLine: true,
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
        border: {
          color: "#000000A6",
          width: 3,
        },
      },
      y: {
        grid: {
          color: "#E0E0E0",
          drawOnChartArea: false,
          drawTicks: true,
        },
        border: {
          color: "#000000A6",
          width: 3,
        },
        beginAtZero: true,
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 250,
          callback: (value) => `$ ${value}`,
        },
      },
    },
  };

  return (
    <section>
      <div className="mb-[20px]">
        <h2 className="pl-10 InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000A6]">
          Analysis Sales
        </h2>
      </div>

      <div className="   px-[10px] ">
        <div className="bg-[#ffffff] py-[10px] px-[10px] rounded-[20px] h-[530px]">
          <div className="justify-end flex items-center pr-[10px]">
            <select className="border border-gray-300 text-sm rounded-md p-2 shadow-md focus:ring-blue-500 focus:border-blue-500">
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="flex rounded-[20px]     ">
            <div className="flex flex-col justify-evenly  flex-[0.2] ">
              <div className="bg-[#9AD1F2] flex flex-col gap-[10px] text-center p-3 rounded-[20px] InterFont font-[400] text-[18px] leading-[21.78px] text-[#000000] shadow-md">
                <p>
                  Total <br /> Revenue
                </p>
                <p>5,900</p>
              </div>
              <div className="bg-[#FF8F80] flex flex-col gap-[10px] text-center p-3 rounded-[20px] InterFont font-[400] text-[18px] leading-[21.78px] text-[#000000] shadow-md">
                <p>
                  Total <br /> Clients
                </p>
                <p>2,566</p>
              </div>
              <div className="bg-[#FEDF71] flex flex-col gap-[10px] text-center p-3 rounded-[20px] InterFont font-[400] text-[18px] leading-[21.78px] text-[#000000] shadow-md">
                <p>
                  Total <br /> Returns
                </p>
                <p>150</p>
              </div>
            </div>

            <div className="flex-1 h-[420px] w-full mt-10">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalysisSales;
