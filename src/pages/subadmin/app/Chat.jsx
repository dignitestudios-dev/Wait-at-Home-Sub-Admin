// Chat.jsx
import React, { useEffect, useState } from "react";
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
import axios from "../../../axios";
import { ErrorToast } from "../../../components/global/Toaster";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { finishChat, restartChat } from "../../../firebase/messages";
import { useLocation } from "react-router";
const Chat = () => {
  const location = useLocation();
  const [chatSiderBarTab, setChatSideBarTab] = useState("Chat");
  const [startChatModal, setStartChatModal] = useState(false);
  const [viewResponseModal, setViewResponseModal] = useState(false);
  const [finishChatModal, setFinishChatModal] = useState(false);
  const [chatCompletedModal, setChatCompletedModal] = useState(false);
  const [isEndChat, setIsEndChat] = useState(false);
  const [pendingChats, setPendingChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [activeChats, setActiveChats] = useState([]);
  const [endNowLoader, setEndNowLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
  const fetchChat = async () => {
    if (location.state?.newChat?.chatRoomId) {
      try {
        const ref = doc(db, "Chat", location.state.newChat.chatRoomId);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setSelectedChat({ id: snap.id, ...snap.data() });
        }
      } catch (err) {
        console.error("Error fetching chat:", err);
      }
    }
  };

  fetchChat();
}, [location.state]);
  useEffect(() => {
    const q = query(
      collection(db, "Chat"),
      where("chatStatus", "==", "pending")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chats = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPendingChats(chats);

      if (chats.length > 0 && !selectedChat) {
        setSelectedChat(chats[0]);
      }
    });

    return () => unsubscribe();
  }, []);

  const startChat = async () => {
    if (!selectedChat?.id) return;

    try {
      await updateDoc(doc(db, "Chat", selectedChat.id), {
        chatStatus: "initialized",
        startedAt: new Date(),
      });
      setStartChatModal(false);
      setChatSideBarTab("Chat");
    } catch (error) {
      console.error("Error updating chat status:", error);
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "Chat"),
      where("chatStatus", "in", ["initialized", "finished"])
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActiveChats(chatsData);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (chatSiderBarTab === "Requests") {
      if (pendingChats.length > 0) {
        const sorted = [...pendingChats].sort(
          (a, b) => (b?.createdAt?.seconds || 0) - (a?.createdAt?.seconds || 0)
        );
        setSelectedChat(sorted[0]);
      } else {
        setSelectedChat(null);
      }
    }

    if (chatSiderBarTab === "Chat") {
      if (activeChats.length > 0) {
        const sortedChats = [...activeChats].sort((a, b) => {
          const aTime =
            a?.last_msg?.createdAt?.seconds || a?.createdAt?.seconds || 0;
          const bTime =
            b?.last_msg?.createdAt?.seconds || b?.createdAt?.seconds || 0;

          return bTime - aTime;
        });

        setSelectedChat(sortedChats[0]);
      } else {
        setSelectedChat(null);
      }
    }
  }, [chatSiderBarTab, pendingChats, activeChats]);

  useEffect(() => {
    if (selectedChat) {
      const updated = activeChats.find((c) => c.id === selectedChat.id);
      if (updated) {
        setSelectedChat(updated);
      }
    }
  }, [activeChats]);
  const filteredPendingChats = pendingChats.filter((chat) =>
    chat?.username?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredActiveChats = activeChats.filter((chat) =>
    chat?.username?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex gap-4">
      <div className="w-[374px]    bg-[#FFFFFF66] rounded-[30px] shadow-md flex flex-col">
        <div className="w-full p-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <ChatSidebarTabs
          filteredActiveChats={filteredActiveChats}
          filteredPendingChats={filteredPendingChats}
          chatSiderBarTab={chatSiderBarTab}
          setChatSideBarTab={setChatSideBarTab}
        />
        {chatSiderBarTab === "Chat" && (
          <ChatList
            chats={filteredActiveChats}
            setSelectedChat={setSelectedChat}
          />
        )}
        {chatSiderBarTab === "Requests" && (
          <RequestsList
            setSelectedChat={setSelectedChat}
            pendingChats={filteredPendingChats}
            loading={loading}
          />
        )}
      </div>

      <div className="hidden  md:flex flex-col rounded-[30px] flex-1 border">
        <ChatHeader
          selectedChat={selectedChat}
          handlefinished={() => setFinishChatModal(true)}
          chatSiderBarTab={chatSiderBarTab}
          isEndChat={isEndChat}
          handleStartChat={() => restartChat(selectedChat?.id)}
        />
        <ChatMessages
          selectedChat={selectedChat}
          pendingChats={pendingChats}
          setViewResponseModal={setViewResponseModal}
          handleStartChat={() => setStartChatModal(true)}
          chatSiderBarTab={chatSiderBarTab}
        />
      </div>
      <StartChatModal
        isOpen={startChatModal}
        onClose={() => setStartChatModal(false)}
        handleStartNow={startChat}
      />
      <ViewResponseModal
        selectedChat={selectedChat}
        isOpen={viewResponseModal}
        onClose={() => setViewResponseModal(false)}
      />
      <FinishChatModal
        endNowLoader={endNowLoader}
        onClose={() => setFinishChatModal(false)}
        isOpen={finishChatModal}
        handleChatEnd={async () => {
          if (selectedChat?.id) {
            setEndNowLoader(true);
            try {
              await finishChat(selectedChat.id);
              setChatCompletedModal(true);
              setFinishChatModal(false);
            } catch (err) {
              console.error("Error finishing chat:", err);
            } finally {
              setEndNowLoader(false);
            }
          }
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
