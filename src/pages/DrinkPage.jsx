import React from "react";
import { FaPlus } from "react-icons/fa6";
import DrinkVolume from "../components/drink_features/DrinkVolume";
import DrinkType from "../components/drink_features/DrinkType";

const DrinkPage = () => {
  return (
    <>
      <div className="font-manrope flex flex-col h-full w-[300px] h-[500px] bg-[#F8FBFB]">
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
        <h1 className="text-center font-bold text-[lg] mb-2 leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Your Drink, Your Choice
        </h1>
        <div className="flex flex-row">
          <div className="flex-[80%] gap-y-2 mx-3 flex flex-col text-center items-center justify-center">
            <DrinkType />
            <DrinkVolume />
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPage;
