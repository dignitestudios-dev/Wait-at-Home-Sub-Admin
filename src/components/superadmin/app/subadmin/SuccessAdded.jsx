import React from "react";
import { MdCheck } from "react-icons/md";

const SuccessAdded = ({ isOpen, onClose, text, para }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        onClick={onClose}
        className="bg-gradient-to-br cursor-pointer flex items-center justify-center     flex-col  from-[#A0E6E1] to-[#C3B4D3] w-[471px] h-[284px]  p-8 rounded-3xl shadow-lg relative text-gray-800 "
      >
        <div className="flex justify-center items-center">
          <div className="w-[90px] h-[90px] bg-[#00AAAD] rounded-full flex items-center justify-center mb-6">
            <MdCheck size={40} color="white" />
          </div>
        </div>
        <h2 className="text-[24px] font-[600] text-[#212121] text-center ">
          {text}
        </h2>
        <p className="text-[16px] text-nowrap font-[400] text-[#565656] text-center ">
          {para}
        </p>
      </div>
    </div>
  );
};

export default SuccessAdded;
