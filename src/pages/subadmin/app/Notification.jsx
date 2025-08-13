import React from "react";
import { RxClock } from "react-icons/rx";

const notifications = [
  {
    id: 1,
    title: "Title goes here",
    message:
      "Lorem ipsum dolor sit amet consectetur. Fringilla nibh etiam ultrices ut id mi eu tortor.. Potenti at molestie metus amet aliquet sapien non a.. Et natoque ultricies massa fringilla justo magnis.. Porta ut non ac sit ac quam pretium..",
    time: "Now",
  },
  {
    id: 2,
    title: "Title goes here",
    message:
      "Lorem ipsum dolor sit amet consectetur. Fringilla nibh etiam ultrices ut id mi eu tortor.. Potenti at molestie metus amet aliquet sapien non a.. Et natoque ultricies massa fringilla justo magnis.. Porta ut non ac sit ac quam pretium..",
    time: "2 mins ago",
  },
  {
    id: 3,
    title: "Title goes here",
    message:
      "Lorem ipsum dolor sit amet consectetur. Fringilla nibh etiam ultrices ut id mi eu tortor.. Potenti at molestie metus amet aliquet sapien non a.. Et natoque ultricies massa fringilla justo magnis.. Porta ut non ac sit ac quam pretium..",
    time: "10 mins ago",
  },
];

const Notification = () => {
  return (
    <div className=" h-screen">
      <h2 className="text-[24px]  font-[600]  text-[#5E2E86] mb-3 ">
        Notifications
      </h2>
      <div className="space-y-4">
        {notifications.map((item) => (
          <div key={item.id} className="bg-[#edf5f6] p-4 rounded-[24px]">
            <div className="flex gap-4 sm:gap-6 md:gap-10 items-start sm:items-center">
              <div>
                <h2 className="text-[17px]  font-[600] text-[#00AAAD] ">
                  {item.title}
                </h2>
                <p className="text-[14px] font-[400] text-[#6A6A6A] mt-1">
                  {item.message}
                </p>
              </div>
            </div>
            <p className="text-[11px] sm:text-[12px] font-medium text-end mt-2">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
