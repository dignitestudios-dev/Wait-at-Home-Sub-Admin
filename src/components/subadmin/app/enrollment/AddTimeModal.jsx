import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { AlertImg } from "../../../../assets/export";
import { RxCross2 } from "react-icons/rx";

const AddTimeModal = ({
  user,
  onClose,
  isOpen,
  onAddTime,
  onComplete,
  loading,
  selectedType,
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-gradient-to-br from-[#A0E6E1] to-[#C3B4D3] w-[471px] h-[340px] rounded-[32px] flex flex-col items-center p-6  justify-center">
        <div
          onClick={onClose}
          className="flex ms-auto border cursor-pointer rounded-[4px] "
        >
          <RxCross2 color="white" size={24} />
        </div>
        <div className="flex justify-center">
          {selectedType === "All" ? (
            // Centered picture for "All"
            <div className="flex flex-col items-center">
              <img
                src={AlertImg}
                className="w-[107px] h-[107px] object-contain"
                alt=""
              />
            </div>
          ) : (
            // Default overlay layout
            <div className="relative right-10">
              <div className="flex">
                <img
                  src={AlertImg}
                  className="w-[107px] h-[107px] object-contain"
                  alt=""
                />

                <div className="absolute left-20 w-full flex flex-col items-center">
                  {user?.profilePicture ? (
                    <img
                      src={user?.profilePicture}
                      alt={user?.name}
                      className="w-[107px] h-[107px] rounded-full border-2 border-[#5E2E86] shadow-md object-cover"
                    />
                  ) : (
                    <div className="w-[107px] h-[107px] rounded-full border-2 border-[#5E2E86] shadow-md bg-[#7ACCC8] flex items-center justify-center text-white text-4xl font-bold">
                      {user?.name?.substring(0, 2)?.toUpperCase() || "?"}
                    </div>
                  )}
                  <p className="text-center text-[12px] font-[500] text-[#2F2F2F] mt-2">
                    {user?.name || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <h2 className="text-center text-[24px] font-[600] text-[#212121] mt-10">
          Enrollments Completed?
        </h2>
        <p className="text-center text-[#565656] text-[16px] mt-1">
          Is user enrollments completed or still running?
        </p>

        <div className="flex justify-between mt-6 gap-4">
          {selectedType == "All" ? (
            <button
              onClick={onAddTime}
              className="text-[14px] w-[204px] py-3 bg-red-500 text-white font-semibold rounded-[12px] shadow hover:bg-red-600"
            >
              Add Time
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="text-[14px] w-[204px] py-3 bg-white border border-gray-300 text-[#00AAAD] font-semibold rounded-[12px] shadow hover:bg-gray-100"
            >
              {loading ? "Completing..." : "Completed"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTimeModal;
