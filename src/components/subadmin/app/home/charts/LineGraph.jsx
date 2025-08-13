import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
 
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
 
const LineGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Users',
        data: [90, 78, 85, 79, 88, 85],
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, '#684D7B40');
          gradient.addColorStop(1, '#684D7B10');
          return gradient;
        },
        borderColor: '#684D7B',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#684D7B',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2,
      },
      {
        label: 'Secondary',
        data: [72, 68, 80, 65, 75, 78],
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, '#10C0B640');
          gradient.addColorStop(1, '#10C0B610');
          return gradient;
        },
        borderColor: '#10C0B6',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#10C0B6',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2,
      }
    ],
  };
 
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#374151',
        bodyColor: '#374151',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          labelColor: function(context) {
            return {
              borderColor: context.dataset.borderColor,
              backgroundColor: context.dataset.borderColor,
            };
          },
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12,
            family: 'Inter, system-ui, sans-serif',
          },
          maxRotation: 0,
          padding: 10,
        },
      },
      y: {
        display: true,
        min: 54,
        max: 100,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 9,
          color: '#9CA3AF',
          font: {
            size: 12,
            family: 'Inter, system-ui, sans-serif',
          },
          padding: 15,
          callback: function(value) {
            return value.toString();
          },
        },
      },
    },
    elements: {
      line: {
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
      },
    },
  };
 
  return (
<div className="w-full  mt-3">
<div className="bg-[#e9f2f4] mt-3 backdrop-blur-[50px] p-5 h-[350px] relative w-full rounded-[16px]">
        {/* Header */}
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="text-gray-600 text-sm font-medium">Users</h2>
</div>
<div className="flex items-center text-sm text-gray-500">
<span>2024</span>
<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
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
 
 
 
 