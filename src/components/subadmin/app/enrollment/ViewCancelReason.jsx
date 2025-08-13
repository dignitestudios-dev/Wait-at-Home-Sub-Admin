import React from "react";
import { RxCross2 } from "react-icons/rx";

const ViewCancelReason = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gradient-to-br from-[#A0E6E1] to-[#C3B4D3] w-[471px] p-8 rounded-3xl shadow-lg relative text-gray-800">
        <div className="flex justify-between border-b border-[#FFFFFF] pb-5">
          <h2 className="text-[18px] font-[600] text-[#212121] mb-2">
            Cancellation Reason
          </h2>
          <button
            onClick={onClose}
            className="h-[36px] w-[36px] bg-white flex justify-center items-center rounded-full right-4 text-xl font-bold text-gray-700 hover:text-black"
          >
            <RxCross2 />
          </button>
        </div>

        <textarea
          placeholder="Write here"
          disabled
          className={`bg-gray-100 cursor-not-allowed opacity-60 w-full mt-7 rounded-[20px] h-[113px] px-4 py-4 border `}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewCancelReason;
