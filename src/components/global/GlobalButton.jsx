import React from "react";

const GlobalButton = ({ onClick, children, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full bg-[#00AAAD] hover:bg-[#00908b] text-white text-[14px] font-[600] py-3 rounded-full transition duration-200 `}
    >
      {children}
    </button>
  );
};

export default GlobalButton;
