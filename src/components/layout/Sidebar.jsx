import { NavLink } from "react-router";
import { sidebarData } from "../../static/Sidebar";
import { LogoDashboard, Logout } from "../../assets/export";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Sidebar = () => {
  const { handleLogout } = useContext(AppContext);
  return (
    <div className="w-[282px] h-full rounded-[30px]  mt-3 bg-gradient-to-tl from-[#684D7B] to-[#10C0B6] overflow-y-auto px-4 py-6 flex flex-col gap-4 items-start">
      <div className="w-full flex justify-center mb-6">
        <img
          src={LogoDashboard}
          alt="logo"
          className="h-[57px] w-[200px] object-contain"
        />
      </div>

      {sidebarData?.map((sidebar) => (
        <NavLink
          key={sidebar?.link}
          to={sidebar?.link}
          className={({ isActive }) =>
            isActive
              ? "text-[16px]  w-full h-[46px] flex items-center justify-start pl-4 border bg-white text-[#5E2E86] rounded-[16px] font-[600] transition-all duration-150"
              : "text-[16px] w-full mt-2 flex items-center justify-start pl-4  text-white border-white rounded-[16px] font-[500]  transition-all duration-150"
          }
        >
          {sidebar?.title}
        </NavLink>
      ))}
      <button
        onClick={handleLogout}
        className="mt-auto flex justify-center items-center gap-3 text-[18px] w-full h-[46px] bg-[#FFFFFF]  text-[#EE3131] font-[500] rounded-[16px] transition-all duration-150"
      >
        <img src={Logout} className="w-[24px] h-[24px] " alt="" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
