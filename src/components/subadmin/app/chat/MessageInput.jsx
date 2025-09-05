import React from "react";
import { IoSend } from "react-icons/io5";

const MessageInput = ({ newMessage, setNewMessage, handleSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // line break add na ho
      handleSend();
    }
  };
  return (
    <div className="p-4 bg-white   flex gap-4 items-center">
      <input
        type="text"
        placeholder="Type Message"
        value={newMessage}
        onKeyDown={handleKeyDown}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1 border border-[#00AAAD] rounded-[8px] px-4 py-2 focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="bg-[#00AAAD] text-white p-3 rounded-full"
      >
        <IoSend size={20} />
      </button>
    </div>
  );
};

export default MessageInput;
