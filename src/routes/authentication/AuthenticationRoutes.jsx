import ForgotPassword from "../../pages/authentication/ForgotPassword";
import Login from "../../pages/authentication/Login";
import ResetPassword from "../../pages/authentication/ResetPassword";
import VerifyOtp from "../../pages/authentication/VerifyOtp";

export const AuthenticationRoutes = [
  {
    url: "login",
    page: <Login />,
  },
  {
    url: "forgot-password",
    page: <ForgotPassword />,
  },
  {
    url: "otp-forgot",
    page: <VerifyOtp />,
  },
  {
    url: "reset-password",
    page: <ResetPassword />,
  },
];
