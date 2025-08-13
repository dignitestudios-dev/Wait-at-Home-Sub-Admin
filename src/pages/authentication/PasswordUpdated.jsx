import React from "react";
import { Tick } from "../../assets/export";

const PasswordUpdated = () => {
  return (
    <div>
      <div className="rounded-[30px] h-[872px] relative flex justify-center py-4 items-center flex-col bg-[#FFFFFF66]/30 w-[599px]">
        <div className="flex justify-center items-center">
          <div className="w-[90px] h-[90px] bg-[#00AAAD] rounded-full flex items-center justify-center mb-6">
            <img src={Tick} alt="tick" className="w-[56.5px] h-[56.5px]" />
          </div>
        </div>

        <div className="text-center mb-6 mt-5">
          <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] font-[600] text-[#1F1F1F]">
            Password Updated!
          </h2>
          <p className="text-[#565656] text-[13px] font-[400] mt-1">
            Your password has been reset successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdated;
