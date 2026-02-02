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
      <div className="bg-white w-[500px] rounded-[32px] flex flex-col items-center p-6  justify-center">
        {/* Close Button */}
        <div className="w-full flex items-center justify-between mb-3 ">
          {/* Title */}
          {/* <h2 className="text-lg font-semibold text-[#5E2E86]">
            Add Time
          </h2> */}
          <div
            onClick={onClose}
            className="flex ms-auto border cursor-pointer rounded-[4px] "
          >
            <RxCross2 color="black" size={24} />
          </div>
        </div>

        <div className="flex justify-center">
          {selectedType === "All" ? (
            // Centered picture for "All"
            <div className="flex flex-col items-center">
              {/* <img
                src={"/logo.png"}
                className="w-[60px] h-[60px] object-contain"
                alt=""
              /> */}
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

        <h2 className="text-center  text-sm font-medium text-[#212121] mt-10 ">
          {selectedType === "All" ? (
            <>
              In the event that a specific patient or situation requires the waiting time to be extended, use this setting to add additional time to the entire waiting list.
              <br />
              For example, if an emergency situation arises that requires several doctors to focus on one patient, you can push back the current wait time by 30 minutes for all patients.
            </>
          ) : (
            "Are you sure you have completed the exam?"
          )}

        </h2>
        {/* <p className="text-center text-[#565656] text-[16px] mt-1">
          Please be aware that extending the session will affect the estimated
          wait times for all users currently in the queue.
        </p> */}

        <div className="flex justify-between mt-2 gap-4">
          {selectedType == "All" ? (
            <button
              onClick={onAddTime}
              className="px-4 py-2 bg-[#5E2E86] text-white rounded-lg hover:bg-[#4a236a]"
            >
              Add Time
            </button>
          ) : (
            <>
              <button
                onClick={onComplete}
                className="text-[14px] w-[204px] py-3 bg-white border border-gray-300 text-[#00AAAD] font-semibold rounded-[12px] shadow hover:bg-gray-100"
              >
                {loading ? "Yes..." : "Yes"}
              </button>
              <button
                onClick={onClose}
                className="text-[14px] w-[204px] py-3 bg-[#5E2E86] border border-gray-300 text-white font-semibold rounded-[12px] shadow"
              >
                No
              </button>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTimeModal;
