import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { IoIosArrowDown } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

// Gradient for Appointments
const createBarGradient = (ctx, area) => {
  const gradient = ctx.createLinearGradient(area.left, 0, area.right, 0);
  gradient.addColorStop(0, "#684D7B");
  gradient.addColorStop(1, "#10C0B6");
  return gradient;
};

const BarGrap = () => {
  const data = {
    labels: ["Appointments", "Cancellation"], // Each label maps to one dataset
    datasets: [
      {
        label: "Appointments",
        data: [120, 0], // Appointments value on first bar
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return null;
          return createBarGradient(ctx, chartArea);
        },
        barThickness: 40,
        borderRadius: {
          topRight: 20,
          bottomRight: 20,
        },
        borderSkipped: "left",
      },
      {
        label: "Cancellation",
        data: [0, 80],
        backgroundColor: "#EE3131",
        barThickness: 40,
        borderRadius: {
          topRight: 20,
          bottomRight: 20,
        },
        borderSkipped: "left",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="bg-[#e9f2f4] mt-3 backdrop-blur-[50px] p-5 h-[350px] relative w-full rounded-[16px] ">
      <div className="flex justify-between absolute top-3 right-0 left-0 p-4">
        <h3 className="font-[700] text-[15.16px] text-[#8A92A6]  ">Bookings</h3>
        <div className="flex gap-2 cursor-pointer  items-center bg-transparent text-[#8A92A6] outline-none text-[12.77px] font-[400]">
          This Week
          <IoIosArrowDown size={18} color="black" />
        </div>
      </div>
      <Bar
        data={data}
        options={options}
        className="!w-full"
        plugins={[
          {
            id: "increase-legend-spacing",
            beforeInit(chart) {
              const originalFit = chart.legend.fit;
              chart.legend.fit = function () {
                originalFit.bind(chart.legend)();
                this.height += 40;
              };
            },
          },
        ]}
      />
    </div>
  );
};

export default BarGrap;
