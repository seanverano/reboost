import React, { useState } from "react";
import { GoGear } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import DrinkVolume from "../components/drink_features/DrinkVolume";
import DrinkType from "../components/drink_features/DrinkType";

const DrinkPage = () => {
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [totalVolume, setTotalVolume] = useState(0);
  const dailyGoal = 2000; // 2L in ml

  const handleLogDrink = () => {
    if (selectedVolume) {
      const newTotal = totalVolume + parseInt(selectedVolume.name);
      setTotalVolume(newTotal);
    }
  };

  const calculateProgress = () => {
    return ((totalVolume / dailyGoal) * 100).toFixed(1);
  };

  return (
    <>
      <div className="font-manrope flex flex-col h-full w-[300px] h-[500px] bg-[#F8FBFB] rounded-lg">
        <div className="flex items-center bg-[#f8fbfb] mt-3 p-1 pb-2 justify-between">
          <button className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0">
            <div className="flex items-center gap-2 text-[#000000] ml-3 hover:text-[#1CABE3] text-lg">
              <AiOutlineHome />
            </div>
          </button>
          <div className="flex w-14 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0">
              <div className="text-[#000000] mr-3 hover:text-[#1CABE3] text-lg">
                <GoGear />
              </div>
            </button>
          </div>
        </div>
        <h1 className="mt-2 text-center text-[#000000] font-bold text-[lg] leading-tight tracking-[-0.015em]">
          Progress Today
        </h1>
        <div className="flex flex-wrap gap-4 px-4 py-6">
          <div className="flex flex-1 flex-col gap-2 rounded-xl border border-[#d0e0e6] bg-[#F8FBFB] bg-opacity-20 backdrop-blur-lg shadow-lg p-6">
            <p className="text-[#000000] tracking-light text-4xl font-black leading-tight truncate">
              {calculateProgress()}%
            </p>
            <p className="text-[#4f8296] text-sm font-normal leading-normal">
              {totalVolume >= dailyGoal ? "Goal Reached!" : "Drink Up!"}
            </p>
            <div className="grid grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
              <div className="border-[#4f8296] bg-[#e8f0f3] border-t-2 w-full"></div>
              <p className="text-[#4f8296] text-[13px] font-bold leading-normal tracking-[0.015em]">
                {(totalVolume / 1000).toFixed(1)} of 2L
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-[lg] leading-tight tracking-[-0.015em] px-4 mb-5">
          Your Drink, Your Choice
        </h1>
        <div className="flex flex-row">
          <div className="flex-[80%] gap-y-2 mb-4 flex flex-col text-center items-center justify-center">
            <DrinkType />
            <DrinkVolume
              selectedVolume={selectedVolume}
              setSelectedVolume={setSelectedVolume}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-5 justify-center">
          <button
            onClick={handleLogDrink}
            className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#1CABE3] cursor-pointer transition-transform duration-200 active:translate-y-1"
          >
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
