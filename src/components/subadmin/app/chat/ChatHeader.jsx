import React from "react";
import { UserPro } from "../../../../assets/export";

const ChatHeader = ({
  chatSiderBarTab,
  handlefinished,
  isEndChat,
  selectedChat,
  handleStartChat,
}) => {
  const isFinished = selectedChat?.chatStatus === "finished";
  const isInitialized = selectedChat?.chatStatus === "initialized";

  return (
    <div className="flex justify-between items-center p-4 border-b rounded-tl-[30px] rounded-tr-[30px] bg-[#FFFFFF80]">
      <div className="flex items-center">
        {selectedChat?.image_url ? (
          <img
            src={selectedChat?.image_url}
            alt=""
            className="w-[66.25px] border border-[#5E2E86] p-1 h-[65px] rounded-full"
          />
        ) : selectedChat?.username ? (
          <span className="text-[16px] border border-[#5E2E86] bg-[#00AAAD] rounded-full h-[40px] w-[40px] flex justify-center items-center text-white font-[600]">
            {selectedChat?.username.charAt(0)}
          </span>
        ) : null}

        <h2 className="font-[500] ml-3 text-[24px] text-[#000000]">
          {selectedChat?.username}
        </h2>
      </div>

      {chatSiderBarTab === "Chat" && (
        <div className="flex">
          <button
            onClick={isFinished ? handleStartChat : undefined}
            disabled={!isFinished}
            className={`px-4 py-2 font-[500] h-[47px] rounded-tl-[20px] rounded-bl-[20px] ${
              isFinished
                ? "bg-[#5E2E86] text-white cursor-pointer"
                : "bg-[#D5D5D5] text-[#707070] cursor-not-allowed"
            } text-[14px]`}
          >
            Start Chat
          </button>

          <button
            onClick={isInitialized ? handlefinished : undefined}
            disabled={!isInitialized}
            className={`px-4 py-2 font-[500] h-[47px] rounded-tr-[20px] rounded-br-[20px] ${
              isInitialized
                ? "bg-[#5E2E86] text-white cursor-pointer"
                : "bg-[#D5D5D5] text-[#707070] cursor-not-allowed"
            } text-[14px]`}
          >
            Finish Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
