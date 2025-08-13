import React from "react";
import Pagination from "../../../global/Pagination";
import { users } from "../../../../static/Sidebar";

const EnrollmentTable = ({ handleViewCancel ,handleViewDetail}) => {
  return (
    <div className="mt-6">
      <div className="bg-[#FFFFFF80] rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-white text-[#5E5E5E] uppercase font-[700] text-[12px]">
            <tr>
              <th className="py-4 px-4">S.No</th>
              <th className="py-4 px-4">Name</th>
              <th className="py-4 px-4">Pet name</th>
              <th className="py-4 px-4">Issue summary</th>
              <th className="py-4 px-4">Enrollment time</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="border-b cursor-pointer">
                <td className="py-4 px-4">
                  {String(idx + 1).padStart(2, "0")}
                </td>
                <td className="py-4 px-4 text-[12px] font-[500] flex items-center gap-2">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-[32px] h-[32px] rounded-full"
                  />
                  {user.name}
                </td>
                <td className="py-4 px-4  text-[12px] font-[500]  ">
                  {user.email}
                </td>
                <td className="py-4 px-4  text-[12px] font-[500] ">
                  {user.summary}
                </td>
                <td className="py-4 px-4  text-[12px] font-[500] ">
                  {user.time}
                </td>
                <td className="py-4 px-4 text-[12px] font-[500]">
                  {user.status === "Cancelled" ? (
                    <button onClick={() => handleViewCancel(user)}>
                      {user.status}
                    </button>
                  ) : (
                    user.status
                  )}
                </td>

                <td className="py-4 px-4  text-[12px] font-[500] ">
                  <button
                    onClick={handleViewDetail}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 h-[28px] rounded-md text-[12px] font-[500]"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
  );
};

export default EnrollmentTable;
