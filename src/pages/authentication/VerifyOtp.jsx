import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import GlobalButton from "../../components/global/GlobalButton";
import { Tick } from "../../assets/export";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import { AppContext } from "../../context/AppContext";
import CountDown from "../../components/global/CountDown";
import axios from "../../axios";
const VerifyOtp = () => {
  const navigate = useNavigate();
  const { Auth } = useContext(AppContext);
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const email = sessionStorage.getItem("email");
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };
  const getOtpValue = () => {
    return parseInt(otp.join(""), 10);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isOtpFilled = otp.every((digit) => digit !== "");

    if (!isOtpFilled) {
      ErrorToast("Please enter all OTP digits");
      return;
    }

    setLoading(true);
    try {
      let obj = {
        email: email,
        otp: getOtpValue(),
      };

      const response = await axios.post("/auth/verify-reset-otp", obj);

      if (response.status === 200) {
        SuccessToast(response?.data?.message);
        Auth(response?.data);
        navigate("/auth/reset-password");
      }
    } catch (error) {
      setOtp(Array(4).fill(""));
      ErrorToast(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleRestart = () => {
    setSeconds(30);
    setIsActive(true);
  };
  const handleResendOtp = async () => {
    try {
      setResendLoading(true);
      let obj = { email: email };

      const response = await axios.post("/auth/request-email-otp", obj);

      if (response.status === 200) {
        SuccessToast(response?.data?.message);
        setResendLoading(false);
        setOtp(Array(4).fill(""));
        handleRestart();
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="rounded-[30px] h-[872px] relative flex justify-center py-4 items-center flex-col bg-[#FFFFFF66]/30 w-[599px]">
      <div
        onClick={() => navigate(-1)}
        className="bg-[#00AAAD] rounded-[14px] cursor-pointer h-[48px] w-[48px] flex items-center justify-center p-2 absolute top-10 left-6 "
      >
        <IoIosArrowRoundBack color="white" size={50} />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[90px] h-[90px] bg-[#00AAAD] rounded-full flex items-center justify-center mb-6">
          <img src={Tick} alt="tick" className="w-[56.5px] h-[56.5px]" />
        </div>
      </div>

      <div className="text-center mb-6 mt-5">
        <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] font-[600] text-[#1F1F1F]">
          Verify OTP!
        </h2>
        <p className="text-[#565656] text-[14px] font-[400] mt-1">
          Please OTP code sent to your {email}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3 justify-center mt-2">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[idx] = el)}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-[52px] h-[52px] text-center rounded-xl border border-[#DADADA] text-[20px] font-semibold bg-white outline-none"
            />
          ))}
        </div>
        <p className="text-sm flex justify-center gap-3 text-center text-[#565656]">
          Didn’t receive code?{" "}
          {isActive ? (
            <CountDown
              isActive={isActive}
              setIsActive={setIsActive}
              seconds={seconds}
              setSeconds={setSeconds}
            />
          ) : (
            <span
              type="button"
              disabled={resendLoading}
              onClick={handleResendOtp}
              className="font-[400] text-[#00AAAD] cursor-pointer underline"
            >
              {resendLoading ? "Resending..." : "Resend"}
            </span>
          )}
        </p>

        <GlobalButton loading={loading} children={"Verify"} type="submit" />
      </form>
    </div>
  );
};

export default VerifyOtp;
