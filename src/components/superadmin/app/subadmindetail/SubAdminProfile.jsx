import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import { UserPro } from "../../../../assets/export";
import { FaTrash } from "react-icons/fa";

const SubAdminProfile = ({ deleteModal, user }) => {
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
        <h2 className="text-[#5E2E86] text-[24px] font-[600]">
          Sub Admin Profile
        </h2>
      </div>

      <div className="bg-[#FFFFFF59] rounded-[32px] h-[104px] w-full mt-20 px-10 py-4 flex items-center justify-between relative">
        <div>
          <div className="absolute -top-[55px] left-10">
            <div className="w-[135px] h-[135px]  rounded-full flex items-center justify-center text-[34px] font-bold bg-[#10C0B6] text-white">
              {user.name?.substring(0, 2)?.toUpperCase() || "N/A"}
            </div>
          </div>

          <div className="ml-[160px]">
            <h2 className="text-[20px] font-semibold text-[#333]">
              {user?.name || "N/A"}
            </h2>
            <p className="text-[14px] text-[#666]">{user?.email}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="h-[43px] w-[125px] bg-[#EE3131] rounded-[12px] text-[14px] font-[600] text-white ">
            Restrict
          </button>
          <button
            onClick={() => deleteModal()}
            className="h-[44px] w-[44px] flex justify-center items-center  border border-[#EE3131] rounded-full text-[14px] font-[600] text-white "
          >
            <FaTrash color="#EE3131" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubAdminProfile;
