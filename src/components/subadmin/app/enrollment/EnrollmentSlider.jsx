import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { PiClockUserDuotone } from "react-icons/pi";

const EnrollmentSlider = ({
  handleCancel,
  data,
  setSelectedId,
  handleComplete,
  completeLoading,
  selectedId,
  setSelectedComplete,
  setSelectedType,
}) => {
  // Group users
  const cancelledOrCompleted = data?.All?.filter(
    (u) =>
      u.AppointmentStatus === "cancelled" || u.AppointmentStatus === "completed"
  );
  // Get today's date (yyyy-mm-dd format)
  const today = new Date().toISOString().split("T")[0];

  // Currently serving filter (only today)
  const currentlyServing = data?.All?.filter(
    (u) =>
      u.currentlyServing === true && u.AppointmentDate?.split("T")[0] === today
  );

  const pendingUsers = data?.All?.filter(
    (u) =>
      u.AppointmentStatus === "pending" &&
      new Date(u.AppointmentDate).toISOString().split("T")[0] === today
  );

  return (
    <div className="bg-[#FFFFFF59] p-6 rounded-3xl shadow-md w-full overflow-hidden mt-4">
      <div className="flex justify-between items-center ">
        <div></div>
        {pendingUsers?.length > 0 && (
          <button
            onClick={() => {
              setSelectedId(pendingUsers?.[0]?._id);
              handleComplete(pendingUsers);
              setSelectedType("All");
            }}
            className="bg-[#5E2E86] flex gap-3 items-center hover:bg-[#4a236a] text-white px-4 py-2 h-[42px] rounded-lg text-sm font-semibold"
          >
            Add Time <PiClockUserDuotone size={18} />
          </button>
        )}
      </div>
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        {/* LEFT: cancelled / completed */}
        {cancelledOrCompleted?.slice(0, 4).map((user, index) => (
          <div key={index} className="flex flex-col items-center opacity-40">
            {user.signUpRecord?.profilePicture ? (
              <img
                src={user.signUpRecord.profilePicture}
                className="w-[55px] h-[55px] rounded-full"
                alt={user.signUpRecord?.name}
              />
            ) : (
              <div className="w-[55px] h-[55px] rounded-full bg-[#00AAAD] flex items-center justify-center text-white font-bold text-lg">
                {user.signUpRecord?.name?.substring(0, 2).toUpperCase()}
              </div>
            )}
            <p className="text-xs font-[600] mt-1">{user.AppointmentStatus}</p>
          </div>
        ))}

        {/* CENTER: currently serving */}
        {data?.CurrentlyServing?.map((user, index) => (
          <div
            key={index}
            className="flex flex-col h-[154px] items-center justify-center text-center bg-[#FFFFFF59] w-[104px] px-4 py-4 rounded-[12px] shadow-sm"
          >
            {user?.signUpRecord?.profilePicture ? (
              <img
                src={user.signUpRecord.profilePicture}
                className="w-[55px] h-[55px] rounded-full"
                alt={user.signUpRecord?.name}
              />
            ) : (
              <div className="w-[55px] h-[55px] rounded-full bg-[#00AAAD] flex items-center justify-center text-white font-bold text-lg">
                {user?.signUpRecord?.name?.substring(0, 2).toUpperCase()}
              </div>
            )}
            <p className="text-xs text-[#000000] font-[600] mt-1">
              -{user?.appointmentDuration} min
            </p>

            {/* Buttons */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  setSelectedId(user?._id);

                  handleCancel(user?._id);
                }}
                className="w-[32px] h-[32px] bg-[#EE3131] text-white rounded-[8px] flex items-center justify-center"
              >
                <FaTimes size={20} />
              </button>
              <button
                onClick={() => {
                  setSelectedId(user._id);
                  setSelectedComplete(user);
                  setSelectedType("Completed");
                  handleComplete(user);
                }}
                className="w-[32px] h-[32px] bg-[#28A745] text-white rounded-[8px] flex items-center justify-center"
              >
                {completeLoading && selectedId === user._id ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                ) : (
                  <FaCheck size={20} />
                )}
              </button>
            </div>
          </div>
        ))}

        {/* RIGHT: pending */}
        {pendingUsers?.slice(0, 4).map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center opacity-40"
          >
            {user?.signUpRecord?.profilePicture ? (
              <img
                src={user.signUpRecord?.profilePicture}
                className="w-[55px] h-[55px] rounded-full"
                alt={user.signUpRecord?.name}
              />
            ) : (
              <div className="w-[55px] h-[55px] rounded-full bg-[#00AAAD] flex items-center justify-center text-white font-bold text-lg">
                {user?.signUpRecord?.name?.substring(0, 2).toUpperCase()}
              </div>
            )}
            <p className="text-xs text-[#5E2E86] font-[600] mt-1">
              {user?.appointmentDuration} min
            </p>
          </div>
        ))}
      </div>

      <div className="text-[16px] font-[600] text-right mt-3 text-[#000000]">
        Total: {data?.Total}
      </div>
    </div>
  );
};

export default EnrollmentSlider;
