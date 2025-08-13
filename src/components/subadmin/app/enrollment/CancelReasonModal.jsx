import React from "react";
import { RxCross2 } from "react-icons/rx";

const CancelReasonModal = ({
  isOpen,
  handleClick,
  onClose,
  handleChange,
  cancelReasonDiscription,
  errorReasonDiscription,
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
          value={cancelReasonDiscription}
          onChange={handleChange}
          className={`bg-white w-full mt-7 rounded-[20px] h-[113px] px-4 py-4 border  ${
            errorReasonDiscription
              ? "border-red-500 ring-1 ring-red-500"
              : "focus:border-[#10C0B6] focus:ring-2 focus:ring-[#10C0B6]"
          }`}
        ></textarea>
        {errorReasonDiscription && (
          <p className="text-red-500 text-sm mt-1">{errorReasonDiscription}</p>
        )}
        <div className="flex flex-col justify-center items-center space-y-3 mt-10">
          <div className="text-[18px] font-[600] text-[#00000080]">Skip</div>
          <button
            onClick={handleClick}
            className="w-full bg-[#00AAAD] hover:bg-[#00908b] text-white text-[14px] font-[600] py-3 rounded-[12px] transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelReasonModal;
