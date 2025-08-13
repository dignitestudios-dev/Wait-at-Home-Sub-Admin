import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { LuChevronRight } from "react-icons/lu";

const Pagination = () => {
  const currentPage = 1;

  return (
    <div className="flex justify-end items-center p-4">
      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded">
          <FiChevronLeft size={22} />
        </button>

        <div className="bg-white h-[40px] w-[270px] flex items-center justify-between  rounded-full shadow-sm">
          {[1, 2, 3, 4, 5].map((num, i) => (
            <button
              key={num}
              className={`px-6  text-[14px] h-[40px] font-semibold rounded-full transition-all duration-200 ${
                num === currentPage
                  ? "bg-[#7ACCC8] text-white rounded-tr-[20px] rounded-br-[20px]"
                  : "text-gray-600 "
              } "
              `}
            >
              {num}
            </button>
          ))}
        </div>

        <button className="text-gray-400 hover:text-gray-600 p-1 rounded">
          <LuChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
