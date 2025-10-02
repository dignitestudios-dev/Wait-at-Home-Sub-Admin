import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = ({ graphData, years, setYear, year }) => {
  const labels =
    graphData?.usersByMonth?.map((item) => item.month.slice(0, 3)) || [];
  const counts = graphData?.usersByMonth?.map((item) => item.count) || [];
  const data = {
    labels,
    datasets: [
      {
        label: "Users",
        data: counts,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#684D7B40");
          gradient.addColorStop(1, "#684D7B10");
          return gradient;
        },
        borderColor: "#684D7B",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#684D7B",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#374151",
        bodyColor: "#374151",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          labelColor: function (context) {
            return {
              borderColor: context.dataset.borderColor,
              backgroundColor: context.dataset.borderColor,
            };
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#9CA3AF",
          font: { size: 12, family: "Inter, system-ui, sans-serif" },
          maxRotation: 0,
          padding: 10,
        },
      },
      y: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#9CA3AF",
          font: { size: 12, family: "Inter, system-ui, sans-serif" },
          padding: 15,
          callback: function (value) {
            return value.toString();
          },
        },
      },
    },
  };

  return (
    <div className="w-full mt-3">
      <div className="bg-[#e9f2f4] mt-3 backdrop-blur-[50px] p-5 h-full relative w-full rounded-[16px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-[700] text-[15.16px] text-[#8A92A6]  ">
              Users
            </h3>
          </div>
          <div className="flex justify-between items-center mb-8">
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="px-3 py-2 border rounded-md text-sm bg-white shadow-sm"
            >
              {years?.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-64 w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
