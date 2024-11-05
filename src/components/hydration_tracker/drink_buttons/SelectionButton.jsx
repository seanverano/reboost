import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const SelectionButton = ({ openModal, title }) => {
  return (
    <div className="flex items-center gap-4 px-6 h-10 w-full">
      <div
        onClick={openModal}
        className="text-[#000000] text-sm flex items-center justify-center rounded-lg bg-[#CFECF4] size-10 cursor-pointer transition-transform duration-200 active:scale-90"
      >
        <span className="transform rotate-0 transition-transform duration-200 text-lg">
          <IoIosArrowDown />
        </span>
      </div>
      <div className="text-[#000000] text-sm font-medium leading-normal">
        {title}
      </div>
    </div>
  );
};

export default SelectionButton;
