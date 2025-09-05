import React from "react";

export const UserTableSkeleton = ({ rows = 10 }) => {
  return (
    <div className="bg-[#FFFFFF80] rounded-xl shadow-md overflow-hidden">
      <table className="w-full text-left text-sm text-gray-700">
        <thead className="bg-white text-[#5E5E5E] uppercase font-[700] text-[12px]">
          <tr>
            <th className="py-4 px-4">S.No</th>
            <th className="py-4 px-4">Name</th>
            <th className="py-4 px-4">Email</th>
            <th className="py-4 px-4">Contact No.</th>
            <th className="py-4 px-4">Pets Profile</th>
            <th className="py-4 px-4">Registration Date</th>
            <th className="py-4 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="border-b animate-pulse">
              <td className="py-4 px-4">
                <div className="h-4 w-6 bg-gray-200 rounded"></div>
              </td>
              <td className="py-4 px-4 flex items-center gap-2">
                <div className="w-[32px] h-[32px] bg-gray-200 rounded-full"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-4 w-36 bg-gray-200 rounded"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-4 w-10 bg-gray-200 rounded"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-[28px] w-20 bg-gray-200 rounded-md"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const UserDetailsSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* User Profile Skeleton */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-[135px] h-[135px] rounded-full bg-gray-300"></div>
        <div>
          <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-60 bg-gray-300 rounded"></div>
        </div>
      </div>

      <div className="flex mt-5 gap-10">
        {/* About Card Skeleton */}
        <div className="bg-[#FFFFFF59] w-[349px] h-[276px] rounded-[32px] p-4 space-y-4">
          <div className="h-5 w-24 bg-gray-300 rounded mb-4"></div>
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <div className="bg-gray-300 rounded-[10px] h-[38px] w-[38px]"></div>
              <div>
                <div className="h-3 w-16 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Tabs + Content */}
        <div className="flex-1">
          <div className="flex items-center gap-8 border-b border-[#E0E0E0] pb-2 mb-4">
            <div className="h-5 w-28 bg-gray-300 rounded"></div>
            <div className="h-5 w-40 bg-gray-300 rounded"></div>
          </div>

          <div className="bg-gradient-to-tl from-[#684D7B]/20 to-[#10C0B6]/20 rounded-[20px] p-3 space-y-3">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="h-16 w-full bg-gray-300 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const GraphSkeleton = () => {
  return (
    <div className="w-full mt-3">
      <div className="bg-[#e9f2f4] mt-3 backdrop-blur-[50px] p-5 h-[350px] relative w-full rounded-[16px]">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center mb-8 animate-pulse">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-10 bg-gray-300 rounded"></div>
        </div>

        {/* Graph Area */}
        <div className="relative h-64 w-full">
          {/* Horizontal grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-full border-t border-gray-200"></div>
            ))}
          </div>

          {/* Fake Line Path (SVG) */}
          <svg
            viewBox="0 0 400 200"
            className="absolute inset-0 w-full h-full animate-pulse"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 150 
                 C 50 120, 100 180, 150 100 
                 S 250 120, 300 80 
                 S 350 140, 400 100"
              stroke="#d1d5db"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Points (circles for data dots) */}
          <svg
            viewBox="0 0 400 200"
            className="absolute inset-0 w-full h-full animate-pulse"
            preserveAspectRatio="none"
          >
            {[50, 150, 250, 350].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={i % 2 === 0 ? 120 : 90}
                r="5"
                fill="#d1d5db"
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export const EnrollmentSliderSkeleton = () => {
  return (
    <div className="bg-[#FFFFFF59] p-6 rounded-3xl shadow-md w-full overflow-hidden mt-4 animate-pulse">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        {/* Left side (cancelled/completed faded users) */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center opacity-40">
            <div className="w-[55px] h-[55px] rounded-full bg-gray-300"></div>
            <div className="h-3 w-12 bg-gray-200 mt-1 rounded"></div>
          </div>
        ))}

        {/* Center (3 pending with actions) */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col h-[154px] items-center justify-center text-center bg-[#FFFFFF59] w-[104px] px-4 py-4 rounded-[12px] shadow-sm"
          >
            <div className="w-[55px] h-[55px] rounded-full border-2 border-[#5E2E86] bg-gray-300"></div>
            <div className="h-3 w-14 bg-gray-200 mt-2 rounded"></div>
            <div className="flex gap-2 mt-3">
              <div className="w-[32px] h-[32px] bg-gray-300 rounded-[8px]"></div>
              <div className="w-[32px] h-[32px] bg-gray-300 rounded-[8px]"></div>
            </div>
          </div>
        ))}

        {/* Right side (remaining pending faded users) */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-center opacity-40"
          >
            <div className="w-[55px] h-[55px] rounded-full bg-gray-300"></div>
            <div className="h-3 w-10 bg-gray-200 mt-1 rounded"></div>
          </div>
        ))}
      </div>

      {/* Total Count Placeholder */}
      <div className="text-[16px] font-[600] text-right mt-3 text-[#000000]">
        <div className="h-4 w-20 bg-gray-300 rounded ml-auto"></div>
      </div>
    </div>
  );
};
export const NotificationSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-[#edf5f6] p-4 rounded-[24px] space-y-2"
        >
          <div className="flex gap-4 sm:gap-6 md:gap-10 items-start sm:items-center">
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
          <div className="h-3 bg-gray-200 rounded w-16 ml-auto"></div>
        </div>
      ))}
    </div>
  );
};
