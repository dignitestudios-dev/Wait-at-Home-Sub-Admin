import React from "react";
import { UserPro } from "../../../../assets/export";
import { formatTime } from "../../../../lib/helpers";

const ChatList = ({ chats = [], setSelectedChat }) => {
  if (chats.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-500 text-sm">No active chats</p>
      </div>
    );
  }
  const sortedChats = [...chats].sort((a, b) => {
    const aTime = a?.last_msg?.createdAt?.seconds || a?.createdAt?.seconds || 0;
    const bTime = b?.last_msg?.createdAt?.seconds || b?.createdAt?.seconds || 0;

    return bTime - aTime;
  });

  return (
    <div className="custom-scrollbar overflow-y-auto max-h-[70vh] flex-1">
      {sortedChats?.map((chat) => (
        <div
          key={chat?.id}
          onClick={() => setSelectedChat(chat)}
          className="flex items-center px-4 py-3 cursor-pointer border-b hover:bg-gray-100"
        >
          {chat?.image_url ? (
            <img
              src={chat.image_url || UserPro}
              alt={chat.username}
              className="w-[50px] h-[50px] rounded-full mr-3 object-cover"
            />
          ) : (
            <span className="text-[16px] bg-[#00AAAD] rounded-full w-[50px]  mr-3  h-[50px] flex justify-center items-center text-white font-[600] ">
              {chat?.username?.charAt(0)}
            </span>
          )}

          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-[600] text-[14px] text-[#1B1B1B]">
                {chat.username || "Unknown"}
              </h4>
              <span className="text-[12px] font-[400] text-[#1B1B1B]">
                {chat?.startedAt?.seconds ? formatTime(chat.startedAt) : ""}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[12px] font-[400] text-[#1B1B1B] truncate max-w-[180px]">
                {chat?.last_msg?.content || "No messages yet"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
