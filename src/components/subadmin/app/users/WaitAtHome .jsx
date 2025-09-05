import React from "react";
import { IconDog } from "../../../../assets/export";
import { CiClock2 } from "react-icons/ci";

const WaitAtHome = ({ handleViewInfo, data }) => {
  const appointment = data?.appointments?.[0];

  return (
    <div>
      {appointment ? (
        <div className="bg-[#FFFFFF66] p-5 rounded-[20px] w-full max-w-[700px]">
          <div className="flex justify-between  gap-4">
            <div className="flex flex-col gap-4 max-w-[400px]">
              <div>
                <h2 className="text-[20px] font-bold text-[#5E2E86]">
                  {appointment.appointmentNumber}
                </h2>
                <p className="text-[14px] text-[#565656]">Position in queue</p>
              </div>
              <div>
                <h2 className="text-[20px] font-bold text-[#5E2E86]">
                  {appointment.appointmentDuration}
                </h2>
                <p className="text-[14px] text-[#565656]">
                  Estimated wait time
                </p>
              </div>
              <div>
                <h2 className="text-[20px] font-bold text-[#5E2E86]">
                  Waiting...
                </h2>
                <p className="text-[14px] text-[#565656]">
                  {appointment.AppointmentStatus}
                </p>
              </div>

              <div className="flex gap-4 items-center mt-2">
                <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[#10C0B6] to-[#684D7B] flex items-center justify-center">
                  <img src={IconDog} alt="dog" className="w-[27px] h-[27px]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {appointment.petId?.petName}
                  </p>
                  <p className="text-[14px] text-[#565656] font-[500]">
                    {appointment.petId?.petType} · {appointment.petId?.petAge}{" "}
                    yrs
                  </p>
                </div>
              </div>

              <p className="text-[14px] font-[400] text-[#565656] leading-relaxed">
                {appointment.petId?.symptoms}
              </p>

              <p
                onClick={handleViewInfo}
                className="text-[#5E2E86] font-[600] border-b-2 border-[#5E2E86] w-fit cursor-pointer"
              >
                View more info
              </p>
            </div>

            <div className="flex gap-2 min-w-[200px]">
              <CiClock2 size={24} color="#5E2E86" />
              <p className="text-[14px] text-nowrap text-[#565656] font-[500]">
                Waiting List:
              </p>
              <span className="text-[#5E2E86] text-nowrap text-[14px] font-[600]">
                {appointment.updatedAt
                  ? new Date(appointment.updatedAt).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No bookings found.
        </div>
      )}
    </div>
  );
};

export default WaitAtHome;
