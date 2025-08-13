import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const aboutData = [
  {
    label: "Name",
    value: "Leo Denzin",
    icon: <CiUser size={20} color="white" />,
  },
  {
    label: "Email",
    value: "leodenzin@gmail.com",
    icon: <MdOutlineEmail size={20} color="white" />,
  },
  {
    label: "Phone",
    value: "+1 123 456 7899",
    icon: <FiPhone size={20} color="white" />,
  },
];

const UserAbout = () => {
  return (
    <div className="bg-[#FFFFFF59] w-[349px] h-[276px] rounded-[32px] p-4 space-y-4">
      <h2 className="text-[18px] font-[600]">About</h2>

      {aboutData.map((item, index) => (
        <div key={index} className="flex gap-3 items-center">
          <div className="bg-[#00AAAD] flex justify-center items-center rounded-[10px] h-[38px] w-[38px]">
            {item.icon}
          </div>
          <div>
            <h2 className="text-[12px] font-[400] text-[#636363]">{item.label}</h2>
            <p className="text-[16px] font-[500] text-[#636363]">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserAbout;
