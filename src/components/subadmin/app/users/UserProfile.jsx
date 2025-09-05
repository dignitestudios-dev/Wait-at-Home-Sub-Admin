import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { UserPro } from "../../../../assets/export";
import { useNavigate } from "react-router";

const UserProfile = ({
  data,
  handleCreateChat,
  loading,
  handleRestrict,
  restrictLoader,
}) => {
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
            {data?.profilePicture ? (
              <img
                src={data?.profilePicture}
                className="w-[135px] h-[135px] rounded-full object-cover"
                alt="User Profile"
              />
            ) : (
              <div className="w-[135px] h-[135px] rounded-full flex items-center justify-center bg-[#10C0B6] text-white text-[36px] font-bold">
                {data?.name?.substring(0, 2)?.toUpperCase()}
              </div>
            )}
          </div>

          <div className="ml-[160px]">
            <h2 className="text-[20px] font-semibold text-[#333]">
              {data?.name}
            </h2>
            <p className="text-[14px] text-[#666]">{data?.email}</p>
          </div>
        </div>
        <div className="flex gap-3">
          {data?.isRestrictedByAdmin ? (
            <button
              onClick={() => handleRestrict(data?.signUpRecord)}
              className="h-[43px] w-[125px] bg-[#EE3131] rounded-[12px] text-[14px] font-[600] text-white "
            >
              {restrictLoader ? "UnRestricting..." : "UnRestrict"}
            </button>
          ) : (
            <button
              onClick={() => handleRestrict(data?.signUpRecord)}
              className="h-[43px] w-[125px] bg-[#EE3131] rounded-[12px] text-[14px] font-[600] text-white "
            >
              {restrictLoader ? "Restricting..." : "Restrict"}
            </button>
          )}
          <button
           onClick={() => handleCreateChat(data?.signUpRecord)}
            className="h-[43px] w-[125px] bg-gradient-to-tl from-[#684D7B] to-[#10C0B6] rounded-[12px] text-[14px] font-[600] text-white "
          >
            {loading ? "Chat started" : "Chat"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
