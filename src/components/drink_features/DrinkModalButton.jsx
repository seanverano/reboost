import React from "react";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const DrinkModalButton = ({ handleAdd, handleDelete }) => {
  return (
    <div className="flex flex-row space-x-3">
      <button
        onClick={handleAdd}
        className="text-base text-center bg-[#1CABE3] text-[#F8FBFB] px-4 py-2 rounded-lg hover:bg-[#4DA3B5]"
      >
        <FaPlus />
      </button>
      <button
        onClick={handleDelete}
        className="text-base text-center bg-[#1CABE3] text-[#F8FBFB] px-4 py-2 rounded-lg hover:bg-[#4DA3B5]"
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default DrinkModalButton;
