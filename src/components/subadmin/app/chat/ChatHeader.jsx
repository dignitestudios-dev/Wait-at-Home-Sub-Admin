import React from "react";
import { UserPro } from "../../../../assets/export";

const ChatHeader = ({ chatSiderBarTab, setFinishChatModal, isEndChat }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b rounded-tl-[30px] rounded-tr-[30px] bg-[#FFFFFF80]">
      <div className="flex items-center">
        <img
          src={UserPro}
          alt="John Doe"
          className="w-[66.25px] border border-[#5E2E86] p-1 h-[65px] rounded-full mr-3"
        />
        <h2 className="font-[500] text-[24px] text-[#000000]">John Doe</h2>
      </div>
      {chatSiderBarTab === "Chat" && (
        <div className="flex  ">
          <button
            className={`px-4 py-2 font-[500]  h-[47px]  rounded-tl-[20px] rounded-bl-[20px] ${
              isEndChat
                ? "bg-[#5E2E86] text-white"
                : "bg-[#D5D5D5] text-[#707070]"
            }   text-[14px]`}
          >
            Start Chat
          </button>
          <button
            onClick={() => setFinishChatModal(true)}
            className={`px-4 py-2 font-[500] h-[47px]  rounded-tr-[20px] rounded-br-[20px] ${
              isEndChat
                ? " bg-[#D5D5D5] text-[#707070]"
                : "bg-[#5E2E86] text-white"
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
