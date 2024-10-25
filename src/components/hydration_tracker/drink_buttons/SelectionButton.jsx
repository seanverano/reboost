import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const SelectionButton = ({ openModal, title }) => {
  return (
    <div className="flex items-center gap-4 px-4 h-10 w-full">
      <div
        onClick={openModal}
        className="text-[#000000] text-sm flex items-center justify-center rounded-lg bg-[#e8f0f3] size-10 cursor-pointer transition-transform duration-200 active:scale-90"
      >
        <span className="transform rotate-0 transition-transform duration-200 text-lg">
          <IoIosArrowDown />
        </span>
      </div>
      <p className="text-[#000000] text-sm font-medium leading-normal">
        {title}
      </p>
    </div>
  );
};

export default SelectionButton;
