import React from "react";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const DrinkAddRemoveButton = ({ handleAdd, handleDelete }) => {
  return (
    <div className="flex flex-row space-x-3 justify-center">
      <button
        onClick={handleAdd}
        className="text-lg font-bold bg-[#1CABE3] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[transparent] hover:text-[#1CABE3]"
      >
        <FaPlus />
      </button>
      <button
        onClick={handleDelete}
        className="text-lg font-bold bg-[#1CABE3] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[transparent] hover:text-[#1CABE3]"
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default DrinkAddRemoveButton;
