import React from "react";
import { useNavigate } from "react-router";
import SearchBar from "../../../global/SearchBar";
import Pagination from "../../../global/Pagination";
import { FiPlus } from "react-icons/fi";

const users = new Array(12).fill(null).map((_, index) => ({
  id: index + 1,
  name: "Leon",
  email: "Leon66@hotmail.com",
  contact: "+11234567899",
  pets: "02",
  date: "03/15/2025",
  avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
}));

const SubAdminTable = ({ handleSubAdminAdd }) => {
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

      <div className="bg-[#FFFFFF80] rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-white text-[#5E5E5E] capitalize font-[700] text-[12px]">
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
                  {user.contact}
                </td>
                <td className="py-4 px-4  text-[12px] font-[500] ">
                  {user.pets}
                </td>
                <td className="py-4 px-4  text-[12px] font-[500] ">
                  {user.date}
                </td>
                <td className="py-4 px-4  text-[12px] font-[500] ">
                  <button
                    onClick={() => navigate(`/app/sub-admin-detail/${user.id}`)}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 h-[28px] rounded-md text-[12px] font-[500]"
                  >
                    View Profile
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

export default SubAdminTable;
