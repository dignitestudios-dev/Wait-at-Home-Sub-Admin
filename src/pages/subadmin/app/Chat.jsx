// Chat.jsx
import React, { useState } from "react";
import ChatList from "../../../components/subadmin/app/chat/ChatList";
import SearchBar from "../../../components/global/SearchBar";
import ChatMessages from "../../../components/subadmin/app/chat/ChatMessages";
import ChatHeader from "../../../components/subadmin/app/chat/ChatHeader";
import ChatSidebarTabs from "../../../components/subadmin/app/chat/ChatSidebarTabs";
import RequestsList from "../../../components/subadmin/app/chat/RequestsList";
import StartChatModal from "../../../components/subadmin/app/chat/StartChatModal";
import ViewResponseModal from "../../../components/subadmin/app/chat/ViewResponseModal";
import FinishChatModal from "../../../components/subadmin/app/chat/FinishChatModal";
import ChatCompletedModal from "../../../components/subadmin/app/chat/ChatCompletedModal";

const Chat = () => {
  const [chatSiderBarTab, setChatSideBarTab] = useState("Chat");
  const [startChatModal, setStartChatModal] = useState(false);
  const [viewResponseModal, setViewResponseModal] = useState(false);
  const [finishChatModal, setFinishChatModal] = useState(false);
  const [chatCompletedModal, setChatCompletedModal] = useState(false);
  const [isEndChat, setIsEndChat] = useState(false);
  return (
    <div className="flex gap-4">
      <div className="w-[374px]    bg-[#FFFFFF66] rounded-[30px] shadow-md flex flex-col">
        <div className="w-full p-4">
          <SearchBar />
        </div>

        <ChatSidebarTabs
          chatSiderBarTab={chatSiderBarTab}
          setChatSideBarTab={setChatSideBarTab}
        />
        {chatSiderBarTab === "Chat" && <ChatList />}
        {chatSiderBarTab === "Requests" && <RequestsList />}
      </div>

      <div className="hidden  md:flex flex-col rounded-[30px] flex-1 border">
        <ChatHeader
          setFinishChatModal={setFinishChatModal}
          chatSiderBarTab={chatSiderBarTab}
          isEndChat={isEndChat}
        />
        <ChatMessages
          setViewResponseModal={setViewResponseModal}
          handleStartChat={() => setStartChatModal(true)}
          chatSiderBarTab={chatSiderBarTab}
        />
      </div>
      <StartChatModal
        isOpen={startChatModal}
        onClose={() => setStartChatModal(false)}
        handleStartNow={() => {
          setStartChatModal(false);
          setChatSideBarTab("Chat");
        }}
      />
      <ViewResponseModal
        isOpen={viewResponseModal}
        onClose={() => setViewResponseModal(false)}
      />
      <FinishChatModal
        onClose={()=>setFinishChatModal(false)}
        isOpen={finishChatModal}
        handleChatEnd={() => {
          setFinishChatModal(false);
          setChatCompletedModal(true);
        }}
      />
      <ChatCompletedModal
        isOpen={chatCompletedModal}
        onClose={() => {
          setChatCompletedModal(false);
          setIsEndChat(true);
        }}
      />
    </div>
  );
};

export default Chat;
