import React from "react";
import { GrNotes } from "react-icons/gr";
import { BiBell } from "react-icons/bi";

const MenuPageButton = ({ goDrink, goWell }) => {
  return (
    <div className="flex flex-col justify-center gap-3 relative bg-gradient-to-r from-[#1CABE3] to-[#80D261]">
      <p className="text-center px-4 text-[#F8FBFB] text-sm font-normal leading-normal mb-2">
        Explore the app's two core features
      </p>
      <div className="border bg-[#F8FBFB] rounded-lg mx-5 py-5">
        <div className="text-sm font-bold text-center">
          <div className="flex flex-row items-center w-full mb-4">
            <div className="w-[25%] flex justify-center items-center">
              <div className="relative group">
                <div className="w-8 h-8 rounded-full bg-[#1CABE3] cursor-pointer flex items-center justify-center transform transition-all duration-300 group-hover:scale-150 group-hover:bg-transparent">
                  <GrNotes
                    onClick={goDrink}
                    className="text-white group-hover:text-[#1CABE3] transition-colors duration-300"
                    size={17}
                  />
                </div>
              </div>
            </div>
            <div className="w-[75%] flex flex-col text-sm font-bold text-center">
              <h2 className="text-base font-bold leading-normal tracking-[0.015em] text-[#1CABE3]">
                Hydration Tracker
              </h2>
              <p className="text-xs font-normal text-[#4f8296]">
                Track and log your water intake.
              </p>
            </div>
          </div>

          <div className="relative mx-8 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#4f8296] opacity-80"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1CABE3] to-[#80D261] opacity-50"></div>
            </div>
          </div>

          <div className="flex flex-row items-center w-full">
            <div className="w-[25%] flex justify-center items-center">
              <div className="relative group">
                <div className="cursor-pointer w-8 h-8 rounded-full bg-[#019963] flex items-center justify-center transform transition-all duration-300 group-hover:scale-150 group-hover:bg-transparent">
                  <BiBell
                    onClick={goWell}
                    className="text-white group-hover:text-[#019963] transition-colors duration-300"
                    size={20}
                  />
                </div>
              </div>
            </div>
            <div className="w-[75%] flex flex-col text-sm font-bold text-center">
              <h2 className="text-base font-bold leading-normal tracking-[0.015em] text-[#019963]">
                Wellness Reminder
              </h2>
              <p className="text-xs font-normal text-[#4f8296]">
                Get various break reminders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPageButton;
