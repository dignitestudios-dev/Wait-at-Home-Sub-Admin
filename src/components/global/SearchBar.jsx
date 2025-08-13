import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 bg-[#FFFFFF80] h-[48px] w-full  rounded-full border  focus:outline-none focus:ring-2 focus:ring-[#00AAAD]"
      />
      <FiSearch className="absolute left-3 top-4 text-gray-400 text-lg" />
    </div>
  );
};

export default SearchBar;
