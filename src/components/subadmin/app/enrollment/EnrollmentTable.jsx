import React from "react";
import { UserTableSkeleton } from "../../../global/Skeleton";
import { formatStatus } from "../../../../lib/helpers";
import { FaCheck, FaTimes } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

const EnrollmentTable = ({
  handleViewCancel,
  handleViewDetail,
  data,
  setSelectedCancel,
  loading,
  setSelectedPet,
  setSelectedId,
  handleCancel,
  handleComplete,
  setSelectedComplete,
  setSelectedType
}) => {
  const getStatusLabel = (status) => {
    if (status === "currently_serving") return "In Exam";
    if (status === "pending") return "Waiting";
    return status;
  };

  return (
    <div className="mt-6">
      {loading ? (
        <UserTableSkeleton />
      ) : (
        <div className="bg-[#FFFFFF80] rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-white text-[#5E5E5E] uppercase font-[700] text-[12px]">
              <tr>
                <th className="py-4 px-4">#</th>
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Pet name</th>
                <th className="py-4 px-4">Issue summary</th>
                <th className="py-4 px-4">sign up time</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Action By</th>
                <th className="py-4 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.All?.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="py-10 text-center text-gray-500 font-medium"
                  >
                    No enrollments available.
                  </td>
                </tr>
              ) : (
                [...(data?.All || [])]
                  .sort((a, b) => {
                    if (
                      a.AppointmentStatus === "currently_serving" &&
                      b.AppointmentStatus !== "currently_serving"
                    ) {
                      return -1; // a pehle
                    }
                    if (
                      a.AppointmentStatus !== "currently_serving" &&
                      b.AppointmentStatus === "currently_serving"
                    ) {
                      return 1; // b pehle
                    }
                    return 0; // order same rahe
                  })
                  .map((user, idx) => (
                    <tr key={user.id} className="border-b cursor-pointer">
                      <td className="py-4 px-4">
                        {String(idx + 1).padStart(2, "0")}
                      </td>
                      <td className="py-4 px-4 text-[12px] font-[500] flex items-center gap-2">
                        {user?.profilePicture ? (
                          <img
                            src={user?.profilePicture}
                            className="w-[32px] h-[32px] rounded-full object-cover"
                            alt=""
                          />
                        ) : (
                          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[12px] font-bold bg-[#10C0B6] text-white">
                            {user?.signUpRecord?.name
                              ?.substring(0, 2)
                              ?.toUpperCase()}
                          </div>
                        )}
                        {user?.signUpRecord?.name}
                      </td>
                      <td className="py-4 px-4  text-[12px] font-[500]  ">
                        {user.petId?.petName}
                      </td>
                      <td className="py-4 px-4 text-[12px] font-[500] max-w-[150px] overflow-hidden whitespace-nowrap truncate">
                        {user?.petId?.symptoms}
                      </td>

                      <td className="py-4 px-10  text-[12px] font-[500] ">
                        {user?.createdAt
                          ? new Date(user?.createdAt).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )
                          : "N/A"}
                      </td>
                      <td className="py-4 px-4 text-[12px] font-[500]">
                        {user?.AppointmentStatus === "cancelled" ? (
                          <button
                            className="capitalize"
                            onClick={() => {
                              setSelectedCancel(user.cancelReason);
                              handleViewCancel(user);
                            }}
                          >
                            {formatStatus(getStatusLabel(user.AppointmentStatus))}
                          </button>
                        ) : (
                          formatStatus(getStatusLabel(user.AppointmentStatus))
                        )}
                      </td>

                      <td className="py-4 px-4 text-[12px] font-[500] max-w-[150px] overflow-hidden whitespace-nowrap truncate">
                        {user?.actionBy || "N/A"}
                      </td>


                      <td className="py-4 px-4  text-[12px] font-[500]  flex  items-center gap-2">

                        <button
                          onClick={() => {
                            setSelectedPet(user.petId);
                            handleViewDetail(user);
                          }}
                          className="bg-teal-500 text-nowrap hover:bg-teal-600 text-white px-4 py-1 h-[28px] rounded-md text-[12px] font-[500]"
                        >
                          <BsEye size={20} />
                        </button>
                        {(
                          user?.AppointmentStatus === "currently_serving"
                        ) && (
                            <>

                              <button
                                onClick={() => {
                                  setSelectedId(user._id);
                                  setSelectedComplete(user);
                                  setSelectedType("Completed");
                                  handleComplete(user);
                                }}
                                className="bg-[#28A745] text-nowrap text-white px-2 py-1 h-[28px] rounded-md"
                              >
                                <FaCheck size={20} />
                              </button>

                              <button
                                onClick={() => {
                                  setSelectedId(user?._id);
                                  handleCancel(user?._id);
                                }}
                                className="bg-[#EE3131] text-nowrap text-white px-2 py-1 h-[28px] rounded-md"
                              >
                                <FaTimes size={20} />
                              </button>

                            </>
                          )}

                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrollmentTable;
