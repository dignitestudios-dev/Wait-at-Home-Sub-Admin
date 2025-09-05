import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { LuChevronRight } from "react-icons/lu";

const Pagination = ({ pagination, currentPage, setCurrentPage }) => {
  if (!pagination?.totalPages) return null;

  const { totalPages } = pagination;
  const maxVisible = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Start & End page calculation
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-end items-center p-4">
      <div className="flex items-center gap-2">
        {/* Prev Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-400 hover:text-gray-600 p-1 rounded disabled:opacity-50"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Page Numbers */}
        <div className="bg-white h-[40px] px-2 flex items-center justify-center rounded-full shadow-sm">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 text-[14px] h-[36px] font-semibold rounded-full transition-all duration-200 ${
                page === currentPage
                  ? "bg-[#7ACCC8] text-white"
                  : "text-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-400 hover:text-gray-600 p-1 rounded disabled:opacity-50"
        >
          <LuChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
