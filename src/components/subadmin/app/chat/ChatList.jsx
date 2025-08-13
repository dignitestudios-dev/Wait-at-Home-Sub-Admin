import React from "react";
import { chats } from "../../../../static/Sidebar";
import { UserPro } from "../../../../assets/export";

const ChatList = () => {
  return (
    <div className="custom-scrollbar overflow-y-auto max-h-[70vh] flex-1">
      {chats.map((chat, idx) => (
        <div
          key={idx}
          className={`flex items-center px-4 py-3 cursor-pointer border-b hover:bg-gray-100 ${
            chat.active ? "bg-[#FFFFFFBF]" : ""
          }`}
        >
          <img
            src={UserPro}
            alt={chat.name}
            className="w-[50px] h-[50px] rounded-full mr-3"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-[600] text-[14px] text-[#1B1B1B]">
                {chat.name}
              </h4>
              <span className="text-[12px] font-[400] text-[#1B1B1B]">
                {chat.time}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[12px] font-[400] text-[#1B1B1B]">
                {chat.message}
              </p>
              {chat.active && (
                <div className="bg-[#5E2E86] w-[18px] h-[18px] font-[500] rounded-full text-white text-[12px] flex items-center justify-center ml-2">
                  1
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
