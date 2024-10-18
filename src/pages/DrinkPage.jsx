import React from "react";
import { FaPlus } from "react-icons/fa6";
import DrinkVolume from "../components/drink_features/DrinkVolume";
import DrinkType from "../components/drink_features/DrinkType";

const DrinkPage = () => {
  return (
    <>
      <div className="font-manrope flex flex-col h-full w-[300px] h-[500px]">
        <h1 className="text-center font-bold text-lg">Stay Hydrated!</h1>
        <div className="flex px-4 py-6 justify-center items-center">
          <div className="flex flex-1 flex-col gap-2 rounded-full border border-transparent p-6 bg-[#EEF8FB]">
            <p className="text-[#000000] font-bold">0% Hydrated</p>
            <p className="text-[#ffffff] font-bold">0.0 of 2L</p>
          </div>
        </div>
        <h1 className="text-center font-bold text-lg mb-2">
          Your Drink, Your Choice
        </h1>
        <div className="flex flex-row">
          <div className="flex-[80%] gap-y-2 mx-3 flex flex-col text-center items-center justify-center">
            <DrinkType />
            <DrinkVolume />
          </div>
          <div className="flex-[20%] mr-2 px-1">
            <button
              className="m-0 flex items-center justify-center bg-[#55BCD8] rounded-lg py-14 w-full"
              onMouseDown={() => {
                if (navigator.vibrate) {
                  navigator.vibrate(100);
                }
              }}
            >
              <FaPlus className="text-[#ffffff] text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPage;
