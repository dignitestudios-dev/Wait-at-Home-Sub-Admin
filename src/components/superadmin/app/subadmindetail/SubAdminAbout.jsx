import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiEdit2Line } from "react-icons/ri";
import { EditIcon } from "../../../../assets/export";
import { phoneFormater } from "../../../../lib/helpers";

const SubAdminAbout = ({ handleInfoEdit, user }) => {
  const aboutData = [
    {
      label: "Name",
      value: user?.name || "N/A",
      icon: <CiUser size={20} color="white" />,
    },
    {
      label: "Email",
      value: user?.email || "N/A",
      icon: <MdOutlineEmail size={20} color="white" />,
    },
    {
      label: "Phone",
      value:user?.phone 
  ? `+1${phoneFormater(user.phone)}`
  : "N/A"
,
      icon: <FiPhone size={20} color="white" />,
    },
  ];

  return (
    <div className="bg-[#FFFFFF59] rounded-[32px] p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[18px] font-[600]">About</h2>
        <div onClick={handleInfoEdit} className="cursor-pointer">
          <img src={EditIcon} className="w-[24px] h-[24px] " alt="" />
        </div>
      </div>
      {aboutData.map((item, index) => (
        <div key={index} className="flex gap-3 items-center">
          <div className="bg-[#00AAAD] flex justify-center items-center rounded-[10px] h-[38px] w-[38px]">
            {item.icon}
          </div>
          <div>
            <h2 className="text-[12px] font-[400] text-[#636363]">
              {item.label}
            </h2>
            <p className="text-[16px] font-[500] text-[#636363]">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubAdminAbout;
