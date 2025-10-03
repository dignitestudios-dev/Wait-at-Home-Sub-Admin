import { onMessage } from "firebase/messaging";
import { db, messaging } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const createChatIfNotExists = async (chat) => {
  if (!chat?.chatRoomId) return;

  const chatRef = doc(db, "Chat", chat.chatRoomId);

  await setDoc(
    chatRef,
    {
      ...chat,
      chatStatus: chat?.chatStatus || "initialized",
      createdAt: chat?.createdAt || serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
};

export const getExistingChat = async (userId) => {
  const q = query(
    collection(db, "Chat"),
    where("members", "array-contains", userId) // tumhare backend me members array aa rahi hogi
  );

  const snapshot = await getDocs(q);

  let existingChat = null;
  snapshot.forEach((doc) => {
    existingChat = { id: doc.id, ...doc.data() };
  });

  return existingChat;
};
export const listenToMessages = (chatId, callback) => {
  if (!chatId) return () => {};
  const q = query(
    collection(db, "Chat", chatId, "messages"),
    orderBy("createdAt", "asc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(msgs);
  });

  return unsubscribe;
};

export const sendMessage = async (chatId, content, sender) => {
  if (!chatId || !content.trim()) return;

  const message = {
    content,
    sender,
    createdAt: serverTimestamp(),
  };

  await addDoc(collection(db, "Chat", chatId, "messages"), message);

  await updateDoc(doc(db, "Chat", chatId), {
    last_msg: message,
    updatedAt: serverTimestamp(),
  });
};
export const finishChat = async (chatId) => {
  try {
    const chatRef = doc(db, "Chat", chatId);
    await deleteDoc(chatRef);
    console.log("Chat deleted from Firestore ✅");
  } catch (error) {
    console.error("Error deleting chat:", error);
  }
};
export const restartChat = async (chatId) => {
  if (!chatId) return;

  try {
    await updateDoc(doc(db, "Chat", chatId), {
      chatStatus: "initialized",
      startedAt: serverTimestamp(),
    });
    console.log("Chat restarted successfully ✅");
  } catch (error) {
    console.error("Error restarting chat:", error);
  }
};
export const getChatCount = async () => {
  const snapshot = await getDocs(collection(db, "Chat"));
  return snapshot.size; 
};
