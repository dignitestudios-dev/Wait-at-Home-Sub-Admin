import React from "react";
import { formatTime } from "../../../../lib/helpers";
import ResponseBlock from "./ResponseBlock";

const PendingChatView = ({ selectedChat, onStartChat, onViewResponse }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-4">
      <div className="flex flex-col">
        <div className="flex items-center mb-1">
          {selectedChat?.image_url ? (
            <img
              src={selectedChat?.image_url}
              alt=""
              className="w-8 h-8 rounded-full "
            />
          ) : (
            <span className="text-[16px] bg-[#00AAAD] rounded-full h-[40px] w-[40px] flex justify-center items-center text-white font-[600] ">
              {selectedChat?.username?.charAt(0)}
            </span>
          )}
          <span className="text-[14px] text-[#000000] font-[600] mb-2 mx-2 ">
            {selectedChat?.username}
          </span>
        </div>
      <div className="w-full">
  <div className="bg-[#FFFFFF80] whitespace-normal break-words mx-8 px-4 py-2 text-[#000000] rounded-xl text-[14px] font-[400] shadow-sm max-w-xs relative">
    {selectedChat?.last_msg?.content || "No message yet"}
    <div className="text-[10px] text-[#A4A4A4] absolute right-2 bottom-1">
      {formatTime(selectedChat?.createdAt)}
    </div>
  </div>
</div>

      </div>

      <div className="flex justify-end">
        <div className="bg-[#00AAAD] text-white px-4 py-2 rounded-xl max-w-xs">
          Hello! John Doe
        </div>
      </div>

      <div className="flex justify-end">
        <ResponseBlock onViewResponse={onViewResponse} />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={onStartChat}
          className="px-4 flex items-center gap-2 py-2 font-[500] h-[47px]  rounded-[20px] bg-[#5E2E86] text-white text-[14px]"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default PendingChatView;
