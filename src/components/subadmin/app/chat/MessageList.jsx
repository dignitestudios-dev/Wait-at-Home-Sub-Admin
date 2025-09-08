import React, { useEffect, useRef } from "react";
import { formatTime } from "../../../../lib/helpers";

const MessageList = ({ messages, userId }) => {
  const bottomRef = useRef(null);

  // Jab bhi messages update ho, neeche scroll kar do
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex-1 p-6  space-y-4 custom-scrollbar">
      {messages?.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.sender === userId ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`px-4 py-2 break-words rounded-xl max-w-xs ${
              msg.sender === userId
                ? "bg-[#00AAAD] text-white"
                : "bg-[#FFFFFF80] text-black"
            }`}
          >
            {msg.content}{" "}
            <span
              className={`block text-[10px] mt-1 text-right ${
                msg.sender === userId ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {formatTime(msg?.createdAt)}
            </span>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
