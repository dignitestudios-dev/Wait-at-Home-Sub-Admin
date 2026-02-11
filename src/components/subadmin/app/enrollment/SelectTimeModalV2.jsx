import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoClose,
} from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const SelectTimeModalV2 = ({ isOpenSelectTime, onCloseSelectTime, onAddTimeSelectTime, timeLoading }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  if (!isOpenSelectTime) return null;

  const handleAddTime = () => {
    onAddTimeSelectTime({ hours, minutes });
  };

  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="bg-gradient-to-br from-[#A0E6E1] to-[#C3B4D3] w-[471px] rounded-2xl shadow-xl p-6 relative">
        {/* Close Button */}
        <div className="flex items-center justify-between mb-3 ">
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-800">
            Select How Much Time Needs to be Added
          </h2>
          {/* <div
            onClick={onCloseSelectTime}
            className=" border cursor-pointer rounded-[4px] "
          >
            <RxCross2 color="white" size={24} />
          </div> */}
        </div>

        <hr className="mb-6 border-gray-300" />

        {/* Time Selector */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {/* Hours */}
          <div className="flex border-2 rounded-[14.84px] bg-white h-[150px] w-[150px]  flex-col items-center">
            <button
              onClick={() => setHours((prev) => (prev < 23 ? prev + 1 : 0))}
              className="text-xl font-bold mb-2 text-gray-700"
            >
              <IoChevronUpOutline size={24} />
            </button>
            <div className="w-20 h-20 flex items-center justify-center  text-[78.45px] font-bold">
              {String(hours).padStart(2, "0")}
              <span className="text-sm ml-1 font-[400] mt-16">h</span>
            </div>
            <button
              onClick={() => setHours((prev) => (prev > 0 ? prev - 1 : 23))}
              className="text-xl mt-2 font-bold text-gray-700"
            >
              <IoChevronDownOutline size={24} />
            </button>
          </div>

          <span className="text-3xl font-bold text-gray-700">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center border-2 rounded-[14.84px] bg-white h-[150px] w-[150px]">
            <button
              onClick={() => setMinutes((prev) => (prev < 59 ? prev + 1 : 0))}
              className="text-xl mb-2 font-bold text-gray-700"
            >
              <IoChevronUpOutline size={24} />
            </button>
            <div className="w-20 h-20 flex items-center justify-center  text-[78.45px] font-bold">
              {String(minutes).padStart(2, "0")}
            </div>
            <span className="text-sm ml-20 -mt-3">min</span>
            <button
              onClick={() => setMinutes((prev) => (prev > 0 ? prev - 1 : 59))}
              className="text-xl font-bold text-gray-700"
            >
              <IoChevronDownOutline size={24} />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleAddTime}
          className="w-full bg-[#00AAAD]  text-white font-semibold py-3 rounded-full transition-all"
        >
          {timeLoading ? "Adding..." : "Add Time"}
        </button>
      </div>
    </div>
  );
};

export default SelectTimeModalV2;
