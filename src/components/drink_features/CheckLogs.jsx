import React from "react";
import { IoClose } from "react-icons/io5";

const CheckLogs = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-3xl w-[300px] max-h-[80vh] overflow-hidden">
        <button onClick={onClose} className="absolute right-9 top-9">
          <IoClose className="text-[#000000] hover:text-[#1CABE3] text-lg" />
        </button>
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default CheckLogs;
