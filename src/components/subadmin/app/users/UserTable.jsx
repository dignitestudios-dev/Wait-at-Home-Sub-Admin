import React from "react";
import SearchBar from "../../../global/SearchBar";
import Pagination from "../../../global/Pagination";
import { useNavigate } from "react-router";
import { UserTableSkeleton } from "../../../global/Skeleton";
import { phoneFormater } from "../../../../lib/helpers";

const UserTable = ({
  data,
  pagination,
  currentPage,
  setCurrentPage,
  loading,
  search,
  setSearch,
  handleCreateChat,
}) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[24px] font-[600] text-[#5E2E86]">Users</h1>
        <div className="w-[468px]">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>
      {loading ? (
        <UserTableSkeleton />
      ) : (
        <div className="bg-[#FFFFFF80] rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-white text-[#5E5E5E] uppercase font-[700] text-[12px]">
              <tr>
                <th className="py-4 px-4">S.No</th>
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Email</th>
                <th className="py-4 px-4">Contact No.</th>
                <th className="py-4 px-4">Pets Profile</th>
                <th className="py-4 px-4">Registration Date</th>
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
                    <td className="py-4 px-4">{idx + 1}</td>
                    <td className="py-4 px-4 text-[12px] font-[500] flex items-center gap-2">
                      {user?.profilePicture ? (
                        <img
                          src={user?.profilePicture}
                          className="w-[32px] h-[32px] rounded-full object-cover"
                          alt=""
                        />
                      ) : (
                        <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[12px] font-bold bg-[#10C0B6] text-white">
                          {user?.name?.substring(0, 2)?.toUpperCase()}
                        </div>
                      )}
                      {user?.name}
                    </td>
                    <td className="py-4 px-4 text-[12px] font-[500]">
                      {user.email}
                    </td>
                    <td className="py-4 px-4 text-[12px] font-[500]">
                      {user?.phone ? `+1 ${phoneFormater(user.phone)}` : "N/A"}
                    </td>
                    <td className="py-4 px-4 text-[12px] font-[500]">
                      {user.pets.length}
                    </td>
                    <td className="py-4 px-4 text-[12px] font-[500]">
                      {user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}
                    </td>
                    <td className="py-4 px-4 text-[12px] font-[500]">
                      <button
                        onClick={() =>
                          navigate(`/app/userdetails/${user?._id}`)
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

export default UserTable;
