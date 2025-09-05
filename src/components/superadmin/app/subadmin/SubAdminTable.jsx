import React from "react";
import { useNavigate } from "react-router";

import Pagination from "../../../global/Pagination";
import { FiPlus } from "react-icons/fi";
import { UserTableSkeleton } from "../../../global/Skeleton";
import { phoneFormater } from "../../../../lib/helpers";

const SubAdminTable = ({
  handleSubAdminAdd,
  data,
  pagination,
  currentPage,
  setCurrentPage,
  loading,
}) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[24px] font-[600] text-[#5E2E86]">Sub Admins</h1>
        <div>
          <button
            className="flex justify-center items-center gap-2 border border-[#10C0B6] text-[#5E2E86] px-4 py-2 h-[48px] w-[212px]  rounded-[30px] text-[14px] font-[600]"
            onClick={handleSubAdminAdd}
          >
            <FiPlus />
            Add Admin Profile
          </button>
        </div>
      </div>
      {loading ? (
        <UserTableSkeleton />
      ) : (
        <div className="bg-[#FFFFFF80] rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-white text-[#5E5E5E] capitalize font-[700] text-[12px]">
              <tr>
                <th className="py-4 px-4">S.No</th>
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Email</th>
                <th className="py-4 px-4">Contact No.</th>
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
                data?.map((user, idx) => (
                  <tr key={user.id} className="border-b cursor-pointer">
                    <td className="py-4 px-4">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="py-4 px-4 text-[12px] font-[500] flex items-center gap-2">
                      <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[12px] font-bold bg-[#10C0B6] text-white">
                        {user.name?.substring(0, 2)?.toUpperCase()}
                      </div>
                      {user.name || "N/A"}
                    </td>
                    <td className="py-4 px-4  text-[12px] font-[500]  ">
                      {user.email || "N/A"}
                    </td>
                    <td className="py-4 px-4  text-[12px] font-[500] ">
                      {user?.phone ? `+1 ${phoneFormater(user.phone)}` : "N/A"}
                    </td>

                    <td className="py-4 px-4  text-[12px] font-[500] ">
                      <button
                        onClick={() =>
                          navigate(`/app/sub-admin-detail/${user._id}`)
                        }
                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 h-[28px] rounded-md text-[12px] font-[500]"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <Pagination
            pagination={pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default SubAdminTable;
