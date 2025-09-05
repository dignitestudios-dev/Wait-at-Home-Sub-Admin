import React from "react";
import { UserPro } from "../../../../assets/export";

const RequestsList = ({ pendingChats, loading, setSelectedChat }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-500 text-sm">Loading requests...</p>
      </div>
    );
  }

  if (!pendingChats || pendingChats.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-500 text-sm">No pending requests found.</p>
      </div>
    );
  }
 
  return (
    <div className="custom-scrollbar overflow-y-auto max-h-[70vh] flex-1">
      {pendingChats?.map((chat, idx) => (
        <div
          key={chat?.id || idx}
          onClick={() => setSelectedChat(chat)}
          className="flex items-center px-4 py-3 cursor-pointer border-b hover:bg-gray-100"
        >
          {chat?.image_url ? (
            <img
              src={chat?.image_url}
              alt=""
              className="w-[50px] h-[50px] rounded-full mr-3 object-cover"
            />
          ) : (
            <span className="text-[16px] bg-[#00AAAD] mr-3 rounded-full h-[40px] w-[40px] flex justify-center items-center text-white font-[600] ">
              {chat?.username.charAt(0)}
            </span>
          )}

          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-[600] text-[14px] text-[#1B1B1B]">
                {chat.username || "Chat Request"}
              </h4>
              <span className="text-[12px] font-[400] text-[#1B1B1B]">
                {chat?.createdAt?._seconds
                  ? new Date(
                      chat?.createdAt?._seconds * 1000
                    ).toLocaleDateString()
                  : ""}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[12px] font-[400] text-[#1B1B1B] truncate max-w-[180px]">
                {chat?.last_msg?.content || "No Msg"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestsList;
