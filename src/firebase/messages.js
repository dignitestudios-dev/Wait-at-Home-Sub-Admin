import { onMessage } from "firebase/messaging";
import { db, messaging } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
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
    await updateDoc(chatRef, {
      chatStatus: "finished",
      finishedAt: new Date(), // optional
    });
    console.log("Chat marked as finished ✅");
  } catch (error) {
    console.error("Error finishing chat:", error);
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