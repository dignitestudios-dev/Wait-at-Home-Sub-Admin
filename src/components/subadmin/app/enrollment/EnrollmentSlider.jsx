import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { UserPro } from "../../../../assets/export";

const users = [
  { id: 1, time: "20:59", status: "default", image: UserPro },
  { id: 2, time: "22:59", status: "default", image: UserPro },
  { id: 3, time: "15:25", status: "default", image: UserPro },
  { id: 4, time: "Cancelled", status: "default", image: UserPro },
  { id: 5, time: "25:30", status: "default", image: UserPro },
  {
    id: 6,
    time: "-15:59",
    status: "pending",
    image: UserPro,
  },
  {
    id: 7,
    time: "-5:00",
    status: "pending",
    image: UserPro,
  },
  {
    id: 8,
    time: "-2:45",
    status: "pending",
    image: UserPro,
  },
  { id: 9, time: "", status: "default", image: UserPro },
  { id: 10, time: "", status: "default", image: UserPro },
  { id: 11, time: "", status: "default", image: UserPro },
  { id: 12, time: "", status: "default", image: UserPro },
  { id: 13, time: "", status: "default", image: UserPro },
];

const EnrollmentSlider = ({ handleCancel }) => {
  return (
    <div className="bg-[#FFFFFF59] p-6 rounded-3xl shadow-md w-full overflow-hidden mt-4">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`flex flex-col h-[154px]  items-center justify-center text-center transition duration-300 ${
              user.status === "pending"
                ? "bg-[#FFFFFF59]  w-[104px] px-4 py-4 rounded-[12px] shadow-sm"
                : "opacity-40"
            }`}
          >
            <img
              src={user.image}
              className={`w-[55px] h-[55px] rounded-full border-2 ${
                user.status === "pending"
                  ? "border-[#5E2E86]"
                  : "border-transparent"
              }`}
              alt="user"
            />
            <p className="text-xs text-[#000000] font-[600] mt-1 text-[14.24px] ">
              {user.time}
            </p>
            {user.status === "pending" && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleCancel}
                  className="w-[32px] h-[32px] bg-[#EE3131] text-white rounded-[8px] flex items-center justify-center"
                >
                  <FaTimes size={20} />
                </button>
                <button className="w-[32px] h-[32px] bg-[#28A745] text-white rounded-[8px] flex items-center justify-center">
                  <FaCheck size={20} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-[16px] font-[600] text-right mt-3 text-[#000000]">
        Total: {users.length}
      </div>
    </div>
  );
};

export default EnrollmentSlider;
