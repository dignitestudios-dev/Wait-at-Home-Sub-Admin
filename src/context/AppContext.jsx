import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { getFCMToken } from "../firebase/getFcmToken";
import { ErrorToast } from "../components/global/Toaster";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [fcmToken, setFcmToken] = useState("");
  const [userId, setUserId] = useState(() => {
    return Cookies.get("userId") || null;
  });
  const [token, setToken] = useState(() => {
    return Cookies.get("token") || null;
  });
  const [role, setRole] = useState(() => {
    return Cookies.get("role") || null;
  });
  const Auth = (data) => {
    if (!data?.data) return;

    if (data?.data?.token) {
      Cookies.set("token", data?.data?.token, { expires: 7 });
      setToken(data?.data?.token);
    }
    if (data?.data?._id) {
      Cookies.set("userId", data?.data?._id, { expires: 7 });
      setUserId(data?.data?._id);
    }
    if (data?.data?.role) {
      Cookies.set("role", data?.data?.role, { expires: 7 });
      setRole(data?.data?.role);
    }
  };
  const getFcm = async () => {
    try {
      const fcmTokenResponse = await getFCMToken();
      setFcmToken(fcmTokenResponse);
    } catch (err) {
      console.log("🚀 ~ getFcm ~ err:", err);
      ErrorToast(err);
    }
  };
  useEffect(() => {
    getFcm();
  }, []);
  // Send fcm to backend:
  // const fetchToken = async () => {
  //   const token = await getFCMToken();
  //   const authToken = Cookies.get("token");
  //   if (!authToken) {
  //     ErrorToast("Un authorized | Please relogin.");
  //     navigate("/login");
  //   } else if (authToken && token) {
  //     const response = await axios.post(`/auth/updateFCM`, {
  //       fcmToken: token,
  //     });
  //   }

  // You can send this token to your server or use it as needed

  // onMessageListener()
  //   .then((payload) => {
  //     const data = JSON.parse(payload?.data?.data);
  //     let route = null;
  //     if (data?.type == "booking") {
  //       route = `/rental-tracking/${data?.booking?._id}`;
  //     } else if (data?.type == "product") {
  //       route = `/products/${data?.product?._id}`;
  //     } else if (data?.type == "chat") {
  //       route = `/messages/${data?.chatUser?.chatId}`;
  //     } else {
  //       // WarningToast("Can't route. Something went wrong.");
  //       return;
  //     }
  //     NotificationToast({
  //       title: payload.notification.title,
  //       message: payload.notification.body,
  //       route: route,
  //     });
  //   })
  //   .catch((err) => console.log("failed: ", err));

  const handleLogout = () => {
    navigate("/auth/login");
    Cookies.remove("token");
    Cookies.remove("role");
    setToken(null);
    setRole(null);
  };
  return (
    <AppContext.Provider
      value={{
        token,
        Auth,
        handleLogout,
        fcmToken,
        role,
        userId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
