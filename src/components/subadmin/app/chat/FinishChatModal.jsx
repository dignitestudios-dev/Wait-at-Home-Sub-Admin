import React from "react";
import { Tick } from "../../../../assets/export";
import { GoAlert } from "react-icons/go";

const FinishChatModal = ({ isOpen, onClose, handleChatEnd }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-60">
      <div
        onClick={onClose}
        className="bg-gradient-to-br cursor-pointer flex flex-col justify-center items-center from-[#A0E6E1] to-[#C3B4D3] w-[471px]  p-8 rounded-3xl shadow-lg relative text-gray-800 "
      >
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="bg-[#00AAAD80] flex justify-center items-center w-[107px] h-[107px] rounded-full">
            <GoAlert size={55} color="white" />
          </div>
          <h2 className="text-[24px] font-[600]">Finish Chat?</h2>
          <p className="text-[16px] font-[400] text-[#565656] max-w-[350px]">
            Are you sure you want to end this Chat?
          </p>
        </div>
        <div className="flex gap-3 items-center mt-5">
          <button
            onClick={handleChatEnd}
            className="h-[48px] text-[#00AAAD] w-[203px]  bg-white rounded-[12px] "
          >
            End now
          </button>
          <button
            onClick={onClose}
            className="h-[48px] text-white w-[203px]  bg-[#00AAAD] rounded-[12px] "
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishChatModal;
