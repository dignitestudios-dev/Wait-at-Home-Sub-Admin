import React from "react";
import { MdCheck } from "react-icons/md";

const ResponseBlock = ({ onViewResponse }) => {
  return (
    <div className="bg-[#00AAAD] border rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] p-4 shadow-sm">
      <div className="flex items-center gap-10 mb-2">
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center text-white">
            <MdCheck size={29} />
          </div>
          <span className="font-[600] text-[16px] text-white">
            Response Submitted
          </span>
        </div>
        <span
          onClick={onViewResponse}
          className="text-[#FFFFFF] cursor-pointer text-[14px] font-[500] underline"
        >
          View Response
        </span>
      </div>
    </div>
  );
};

export default ResponseBlock;
