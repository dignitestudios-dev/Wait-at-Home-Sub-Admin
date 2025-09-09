import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import { listenToMessages, sendMessage } from "../../../../firebase/messages";
import PendingChatView from "./PendingChatView";
import InitializedChatView from "./InitializedChatView";
import MessageInput from "./MessageInput";
import { LiaCheckDoubleSolid } from "react-icons/lia";

const ChatMessages = ({
  chatSiderBarTab,
  handleStartChat,
  setViewResponseModal,
  selectedChat,
}) => {
  const { userId } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (!selectedChat?.id) return;
    const unsubscribe = listenToMessages(selectedChat.id, setMessages);
    return () => unsubscribe();
  }, [selectedChat?.id]);

  const handleSend = async () => {
    await sendMessage(selectedChat?.id, newMessage, userId);
    setNewMessage("");
  };

  if (!selectedChat) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500 text-sm">
        {chatSiderBarTab === "Requests"
          ? "No pending requests found."
          : "No active chat selected."}
      </div>
    );
  }

  if (selectedChat?.chatStatus === "pending") {
    return (
      <PendingChatView
        selectedChat={selectedChat}
        onStartChat={handleStartChat}
        onViewResponse={setViewResponseModal}
      />
    );
  }

  if (
    selectedChat?.chatStatus === "initialized" ||
    selectedChat?.chatStatus === "finished"
  ) {
    return (
      <div className="relative">
        <div className="bg-[#FFFFFF66] rounded-bl-[16px] rounded-br-[16px] flex flex-col h-screen custom-scrollbar overflow-y-auto max-h-[80vh] pb-[60px]">
          <div className="p-2">
            <InitializedChatView
              selectedChat={selectedChat}
              messages={messages}
              userId={userId}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              handleSend={handleSend}
              setViewResponseModal={setViewResponseModal}
            />
          </div>
        </div>

        {selectedChat?.chatStatus === "finished" ? (
          <div className="flex justify-center relative bottom-20 right-0 left-0 gap-2 mx-auto my-2 h-[40px] items-center w-[187px] px-4 py-2 bg-[#FFFFFF59] text-[#000000] font-[500] text-[14px] rounded-full">
            <LiaCheckDoubleSolid size={22} /> Chat Finished
          </div>
        ) : (
          <div className="absolute left-0 right-0 bottom-0">
            <MessageInput
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              handleSend={handleSend}
            />
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ChatMessages;
