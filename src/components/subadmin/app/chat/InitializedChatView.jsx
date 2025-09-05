import React from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import ResponseBlock from "./ResponseBlock";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { formatTime } from "../../../../lib/helpers";

const InitializedChatView = ({
  selectedChat,
  messages,
  userId,
  setViewResponseModal,
}) => {
  console.log(messages, "messages");
  return (
    <div>
      <div className="flex flex-col">
        {!selectedChat?.activeByAdmin && (
          <>
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
                {messages[0]?.content || "No message yet"}
                <div className="text-[10px] text-[#A4A4A4] absolute right-2 bottom-1">
                  {formatTime(selectedChat?.createdAt)}
                </div>
              </div>

              <div className="flex justify-end mb-3 pe-3">
                <div className="bg-[#00AAAD] text-white px-4 py-2 rounded-xl max-w-xs">
                  Hello! {selectedChat?.username}
                  <div className="text-[10px] text-white text-end">
                    {formatTime(selectedChat?.createdAt)}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pe-3">
                <ResponseBlock onViewResponse={setViewResponseModal} />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-center gap-2 mx-auto my-2 h-[40px] items-center w-[187px] px-4 py-2 bg-[#FFFFFF59] text-[#000000] font-[500] text-[14px] rounded-full">
        <LiaCheckDoubleSolid size={22} /> Chat Started
      </div>

      <MessageList messages={messages} userId={userId} />
    </div>
  );
};

export default InitializedChatView;
