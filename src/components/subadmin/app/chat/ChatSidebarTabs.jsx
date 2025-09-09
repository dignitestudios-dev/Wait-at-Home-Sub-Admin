import React from "react";

const ChatSidebarTabs = ({
  setChatSideBarTab,
  chatSiderBarTab,
  filteredPendingChats,
}) => {
  return (
    <div className="flex justify-around border-b">
      <button
        onClick={() => setChatSideBarTab("Chat")}
        className={`w-1/2 py-3 text-[16px] font-[600] text-white h-[55px] 
          ${chatSiderBarTab === "Chat" ? "bg-[#00AAAD]" : "bg-[#7ACCC8]"} 
          rounded-tl-[15px]`}
      >
        Chat
      </button>

      <button
        onClick={() => setChatSideBarTab("Requests")}
        className={`w-1/2 py-3 text-[16px] font-[600] text-white h-[55px] 
          ${chatSiderBarTab === "Requests" ? "bg-[#00AAAD]" : "bg-[#7ACCC8]"} 
          rounded-tr-[15px]`}
      >
        Requests
        {filteredPendingChats?.length > 0 && (
          <span className="ml-2 px-2 py-0.5 bg-white text-[#00AAAD] rounded-full text-xs font-bold">
            {filteredPendingChats.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatSidebarTabs;
