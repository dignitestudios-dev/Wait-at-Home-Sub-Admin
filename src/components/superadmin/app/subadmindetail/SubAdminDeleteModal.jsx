import React from "react";
import { GoAlert } from "react-icons/go";

const SubAdminDeleteModal = ({
  isOpen,
  onClose,
  handleDelete,
  deleteLoading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-gradient-to-br from-[#A0E6E1] to-[#C3B4D3] rounded-2xl w-[471px] max-w-xl p-6 shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-[#EE3131] flex justify-center items-center h-[107px] w-[107px] rounded-full ">
            <GoAlert size={41} color="white" />
          </div>
          <div className=" text-center">
            <h2 className="text-[24px] font-[600] text-[#212121] ">
              Delete Account?
            </h2>
            <p className="text-[16px] font-[400] text-[#565656] ">
              Are you sure you want to delete this admin account?
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDelete}
              className="h-[43px] w-[204px] bg-[#EE3131] rounded-[12px] text-[14px] font-[600] text-white "
            >
             {deleteLoading ? "Deleting..." : "Delete"}
            </button>
            <button
              onClick={onClose}
              className="h-[43px] w-[204px] flex justify-center items-center bg-[#FFFFFF]  rounded-[12px] text-[14px] font-[600] text-[#00AAAD] "
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminDeleteModal;
