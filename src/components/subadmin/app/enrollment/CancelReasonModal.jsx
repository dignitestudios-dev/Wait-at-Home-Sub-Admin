import React from "react";
import { RxCross2 } from "react-icons/rx";
import GlobalButton from "../../../global/GlobalButton";

const CancelReasonModal = ({
  isOpen,
  handleClick,
  onClose,
  handleChange,
  cancelReasonDiscription,
  errorReasonDiscription,
  cancelloading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white w-[471px] p-8 rounded-3xl shadow-lg relative text-gray-800">
        <div className="flex justify-between border-b border-[#FFFFFF] pb-5">
          <h2 className="text-[18px] font-[600] text-[#212121] mb-2">
            Cancellation Reason
          </h2>
          <button
            onClick={onClose}
            disabled={cancelloading}
            className={`h-[36px] w-[36px] bg-white flex justify-center items-center rounded-full right-4 text-xl font-bold text-gray-700 hover:text-black ${cancelloading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <RxCross2 />
          </button>
        </div>

        <textarea
          placeholder="Write here"
          value={cancelReasonDiscription}
          onChange={handleChange}
          disabled={cancelloading}
          className={`bg-white w-full mt-7 rounded-[20px] h-[113px] px-4 py-4  border-2 border-black disabled:cursor-not-allowed disabled:bg-gray-100 ${errorReasonDiscription
            ? "border-red-500 ring-1 ring-red-500"
            : "focus:border-[#10C0B6] focus:ring-2 focus:ring-[#10C0B6]"
            }`}
        ></textarea>
        {errorReasonDiscription && (
          <p className="text-red-500 text-sm mt-1">{errorReasonDiscription}</p>
        )}
        <div className="flex flex-col justify-center items-center space-y-3 mt-10">
          <button
            type="button"
            onClick={() => handleClick(true)}
            disabled={cancelloading}
            className={`text-[18px] font-[600] ${cancelloading ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer text-[#00000080]'}`}
          >
            Skip
          </button>
          <GlobalButton
            type="submit"
            children={"Submit"}
            loading={cancelloading}
            disabled={cancelloading}
            onClick={() => handleClick(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CancelReasonModal;
