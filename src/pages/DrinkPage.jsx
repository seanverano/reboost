import React from "react";
import DrinkVolume from "../components/drink_features/DrinkVolume";
import DrinkType from "../components/drink_features/DrinkType";

const DrinkPage = () => {
  return (
    <>
      <div className="font-manrope flex flex-col h-full w-[300px] h-[500px] bg-[#F8FBFB] rounded-lg">
        <h1 className="text-center font-bold text-lg">Stay Hydrated!</h1>
        <div className="flex flex-wrap gap-4 px-4 py-6">
          <div className="flex w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d0e0e6] p-6">
            <p className="text-[#0e171b] text-base font-medium leading-normal">
              Hydration Levels
            </p>
            <p className="text-[#0e171b] tracking-light text-[32px] font-bold leading-tight truncate">
              0%
            </p>
            <p className="text-[#4f8296] text-base font-normal leading-normal">
              Today
            </p>
            <div className="grid grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
              <div className="border-[#4f8296] bg-[#e8f0f3] border-t-2 w-full"></div>
              <p className="text-[#4f8296] text-[13px] font-bold leading-normal tracking-[0.015em]">
                0.0 of 2L
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-[lg] leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Your Drink, Your Choice
        </h1>
        <div className="flex flex-row">
          <div className="flex-[80%] gap-y-2 mb-4 flex flex-col text-center items-center justify-center">
            <DrinkType />
            <DrinkVolume />
          </div>
        </div>
        <div className="flex flex-row space-x-5 justify-center">
          <button className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#1CABE3] cursor-pointer transition-transform duration-200 active:translate-y-1">
            <p className="text-[#F9FBFA] text-xs font-bold leading-normal tracking-[0.015em]">
              Log Drink
            </p>
          </button>
          <button className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#000000] cursor-pointer transition-transform duration-200 active:translate-y-1">
            <p className="text-[#E7F0F2] text-xs font-bold leading-normal tracking-[0.015em]">
              Add Reminder
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DrinkPage;
