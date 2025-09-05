import React from "react";
import {
  AppoitmentIcon,
  ChatRequestIcon,
  UserIcon,
} from "../../../../../assets/export";

const StateCards = ({ data }) => {
  const cards = [
    {
      title: "Total Users",
      value: data?.totalUsers,
      img: UserIcon,
      color: "from-[#684D7B]/2 to-white/10",
    },
    {
      title: "Bookings",
      value: data?.totalAppointments,
      img: AppoitmentIcon,
      color: "from-white/10 to-white/10",
    },
    {
      title: "Chat Requests",
      value: 25,
      img: ChatRequestIcon,
      color: "from-white/10 to-white/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          className={`rounded-[24px] flex justify-between items-center p-6 bg-gradient-to-r ${card.color} shadow-md  min-h-[120px]`}
          key={index}
        >
          <div>
            <p className="text-[24px]  font-[600]  text-[#5E2E86]">
              {card.value}
            </p>
            <h3 className="text-[13px] font-[400] text-[#696969] ">
              {card.title}
            </h3>
          </div>
          <div>
            <img src={card?.img} className="w-[52px] h-[52px] " alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StateCards;
