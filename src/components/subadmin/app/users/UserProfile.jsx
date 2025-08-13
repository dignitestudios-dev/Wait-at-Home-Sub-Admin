import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { UserPro } from "../../../../assets/export";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-3 items-center">
        <div
          onClick={() => navigate(-1)}
          className="bg-white h-[48px] w-[48px] flex justify-center items-center rounded-[14px] cursor-pointer shadow"
        >
          <GoArrowLeft size={20} />
        </div>
        <h2 className="text-[#5E2E86] text-[24px] font-[600]">User Profile</h2>
      </div>

      <div className="bg-[#FFFFFF59] rounded-[32px] h-[104px] w-full mt-20 px-10 py-4 flex items-center justify-between relative">
        <div>
          <div className="absolute -top-[55px] left-10">
            <img
              src={UserPro}
              className="w-[135px] h-[135px] rounded-full object-cover "
              alt="User Profile"
            />
          </div>

          <div className="ml-[160px]">
            <h2 className="text-[20px] font-semibold text-[#333]">
              Leo Denzin
            </h2>
            <p className="text-[14px] text-[#666]">leodenzin@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="h-[43px] w-[125px] bg-[#EE3131] rounded-[12px] text-[14px] font-[600] text-white ">
            Restrict
          </button>
          <button
            onClick={() => navigate("/app/chat")}
            className="h-[43px] w-[125px] bg-gradient-to-tl from-[#684D7B] to-[#10C0B6] rounded-[12px] text-[14px] font-[600] text-white "
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
