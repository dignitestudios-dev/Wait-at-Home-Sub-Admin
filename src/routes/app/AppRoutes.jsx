import UserDetails from "../../pages/subadmin/app/UserDetails";
import Home from "../../pages/subadmin/app/Home";
import Notification from "../../pages/subadmin/app/Notification";
import PushNotification from "../../pages/subadmin/app/PushNotification";
import Users from "../../pages/subadmin/app/Users";
import Enrollment from "../../pages/subadmin/app/Enrollment";
import Chat from "../../pages/subadmin/app/Chat";
import SubAdmin from "../../pages/superadmin/SubAdmin";
import SubAdminDetail from "../../pages/superadmin/SubAdminDetail";

export const AppRoutes = [
  {
    url: "dashboard",
    page: <Home />,
  },
  {
    url: "push-notification",
    page: <PushNotification />,
  },
  {
    url: "notification",
    page: <Notification />,
  },
  {
    url: "users",
    page: <Users />,
  },
  {
    url: "userdetails/:id",
    page: <UserDetails />,
  },
  {
    url: "enrollment",
    page: <Enrollment />,
  },
  {
    url: "sub-admin",
    page: <SubAdmin />,
  },
  {
    url: "sub-admin-detail/:id",
    page: <SubAdminDetail />,
  },
  {
    url: "chat",
    page: <Chat />,
  },
];
