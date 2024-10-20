import React from "react";
import { IoClose } from "react-icons/io5";

const CheckLogs = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center">
      <div className="bg-transparent rounded-lg p-2 w-[320px] relative">
        <button onClick={onClose} className="absolute right-11 top-5">
          <IoClose className="text-[#000000] hover:text-[#1CABE3] text-lg" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CheckLogs;
