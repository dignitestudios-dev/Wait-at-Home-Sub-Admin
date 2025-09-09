import React from "react";
import Pagination from "../../../global/Pagination";
import { UserTableSkeleton } from "../../../global/Skeleton";
import { formatStatus } from "../../../../lib/helpers";

const EnrollmentTable = ({
  handleViewCancel,
  handleViewDetail,
  data,
  setSelectedCancel,
  loading,
  setSelectedPet,
}) => {
  return (
    <div className="mt-6">
      {loading ? (
        <UserTableSkeleton />
      ) : (
        <div className="bg-[#FFFFFF80] rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-white text-[#5E5E5E] uppercase font-[700] text-[12px]">
              <tr>
                <th className="py-4 px-4">S.No</th>
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Pet name</th>
                <th className="py-4 px-4">Issue summary</th>
                <th className="py-4 px-4">people currently in the waiting list</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="py-10 text-center text-gray-500 font-medium"
                  >
                    No Data Found
                  </td>
                </tr>
              ) : (
                data?.All?.map((user, idx) => (
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
                      {user.petId.symptoms}
                    </td>

                    <td className="py-4 px-10  text-[12px] font-[500] ">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                        : "N/A"}
                    </td>
                   <td className="py-4 px-4 text-[12px] font-[500]">
  {user.AppointmentStatus === "cancelled" ? (
    <button
      className="capitalize"
      onClick={() => {
        setSelectedCancel(user.cancelReason);
        handleViewCancel(user);
      }}
    >
      {formatStatus(user.AppointmentStatus)}
    </button>
  ) : (
    formatStatus(user.AppointmentStatus)
  )}
</td>


                    <td className="py-4 px-4  text-[12px] font-[500] ">
                      <button
                        onClick={() => {
                          setSelectedPet(user.petId);
                          handleViewDetail(user);
                        }}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 h-[28px] rounded-md text-[12px] font-[500]"
                      >
                        View Details
                      </button>
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
