import { useNavigate } from "react-router";
import { AdminLogo, ChatIcon, NotiIcon } from "../../assets/export";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-6 mt-4 h-[104px] rounded-[32px] px-6 bg-[#edf5f6] flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src={AdminLogo}
          loading="lazy"
          alt="admin-logo"
          className="h-12 w-12 object-contain"
        />
        <h2 className="text-[18px] font-[500] text-black">Hi, Admin</h2>
      </div>

      <div className="flex items-center gap-3">
        <div
          onClick={() => navigate("/app/notification")}
          className="border cursor-pointer border-[#10C0B6]  rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#10C0B6]/10 transition"
        >
          <img src={NotiIcon} alt="notifications" className="w-5 h-5" />
        </div>
        <div onClick={() => navigate("/app/chat")} className="border cursor-pointer border-[#10C0B6]  rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#10C0B6]/10 transition">
          <img src={ChatIcon} alt="chat" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
