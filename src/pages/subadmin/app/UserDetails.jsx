import React, { useState } from "react";
import UserProfile from "../../../components/subadmin/app/users/UserProfile";
import UserAbout from "../../../components/subadmin/app/users/UserAbout";
import PetProfile from "../../../components/subadmin/app/users/PetProfile";
import WaitAtHome from "../../../components/subadmin/app/users/WaitAtHome ";
import PetDetailModal from "../../../components/subadmin/app/users/PetDetailModal";

const UserDetails = () => {
  const [active, setActive] = useState("PetProfile");
  const [petDetailModal, setPetDetailModal] = useState(false);
  return (
    <div>
      <UserProfile />
      <div className="flex mt-5 gap-10">
        <UserAbout />
        <div className="flex-1">
          <div className="flex items-center gap-8 border-b border-[#E0E0E0] pb-2 mb-4">
            <p
              onClick={() => setActive("PetProfile")}
              className={`text-[16px] cursor-pointer font-[600] ${
                active === "PetProfile"
                  ? "text-[#5E2E86] border-b-2 border-[#00AAAD] pb-1"
                  : "text-[#787878] font-[500]"
              }`}
            >
              Pet Profiles
            </p>
            <p
              onClick={() => setActive("WaitQueue")}
              className={`text-[16px] cursor-pointer font-[600] ${
                active === "WaitQueue"
                  ? "text-[#5E2E86] border-b-2 border-[#00AAAD] pb-1"
                  : "text-[#787878] font-[500]"
              }`}
            >
              Wait at home Queue
            </p>
          </div>
          <div className="bg-gradient-to-tl from-[#684D7B]/20 to-[#10C0B6]/20 rounded-[20px]  p-3 ">
            {active === "PetProfile" && <PetProfile />}
            {active === "WaitQueue" && (
              <WaitAtHome handleViewInfo={() => setPetDetailModal(true)} />
            )}
          </div>
        </div>
      </div>
      <PetDetailModal isOpen={petDetailModal} onClose={()=>setPetDetailModal(false)} />
    </div>
  );
};

export default UserDetails;
