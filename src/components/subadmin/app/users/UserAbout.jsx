import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { data } from "react-router";
import { phoneFormater } from "../../../../lib/helpers";

const UserAbout = ({ data }) => {
  const aboutData = [
    {
      label: "Name",
      value: data?.name || "",
      icon: <CiUser size={20} color="white" />,
    },
    {
      label: "Email",
      value: data?.email || "",
      icon: <MdOutlineEmail size={20} color="white" />,
    },
    {
      label: "Phone",
      value: data?.phone ? `+1 ${phoneFormater(data?.phone)}` : "N/A",
      icon: <FiPhone size={20} color="white" />,
    },
  ];

  return (
    <div className="bg-[#FFFFFF59] w-[349px] h-[276px] rounded-[32px] p-4 space-y-4">
      <h2 className="text-[18px] font-[600]">About</h2>

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

export default UserAbout;
