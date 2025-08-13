import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import NoInternetModal from "../components/global/NoInternet";
import { NoInternetImage } from "../assets/export";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = () => {
  const [openNoInternet, setOpenNoInternet] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      setOpenNoInternet(true);
    }
  }, []);

  return (
    <div className="w-full bg-image p-4 h-screen flex">
      <div className=" h-full">
        <Sidebar />
      </div>

      <div className="flex-1   h-full flex flex-col">
        <div >
          <Navbar />
        </div>

        <img src={NoInternetImage} alt="" className="hidden" />

        <div className="flex-1 custom-scrollbar overflow-y-auto max-h-[100vh] p-4 ml-6">
          <NoInternetModal isOpen={openNoInternet} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
