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
  console.log(chats,"chats")
  const sortedChats = [...chats].sort((a, b) => {
  const getTime = (chat) => {
    // 1. last_msg ka time agar exist karta hai
    if (chat?.last_msg?.createdAt?.seconds) {
      return chat.last_msg.createdAt.seconds;
    }

    // 2. updated_at ek object hai (userId keys ke sath), usme se sabse bada seconds value lo
    if (chat?.updated_at) {
      const values = Object.values(chat.updated_at);
      if (values.length > 0) {
        return Math.max(...values.map((v) => v.seconds));
      }
    }

    // 3. created_at ka time
    if (chat?.created_at?.seconds) {
      return chat.created_at.seconds;
    }

    // 4. agar kuch bhi na mila
    return 0;
  };

  return getTime(b) - getTime(a);
});

const getChatTime = (chat) => {
  if (chat?.last_msg?.createdAt?.seconds) return chat.last_msg.createdAt;
  if (chat?.startedAt?.seconds) return chat.startedAt;
  
  if (chat?.updated_at) {
    const values = Object.values(chat.updated_at);
    if (values.length > 0) {
      const maxTime = values.reduce((max, v) => v.seconds > max.seconds ? v : max, values[0]);
      return maxTime;
    }
  }

  if (chat?.created_at?.seconds) return chat.created_at;

  return null;
};

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
               {getChatTime(chat) ? formatTime(getChatTime(chat)) : ""}
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
