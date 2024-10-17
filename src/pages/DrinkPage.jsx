import React from "react";
import { FaPlus } from "react-icons/fa6";
import DrinkVolume from "../components/drink_features/DrinkVolume";
import DrinkType from "../components/drink_features/DrinkType";

const DrinkPage = () => {
  return (
    <>
      <div className="font-poppins flex flex-col h-full w-[300px] h-[500px]">
        <h1 className="text-[#000000] font-bold text-lg justify-center text-center">
          Hydrate Daily!
        </h1>
        <h2 className="text-[#000000] text-sm text-left p-0 m-0">Today</h2>
        <div className="flex px-4 py-6 justify-center items-center">
          <div className="flex flex-1 flex-col gap-2 rounded-lg border border-transparent p-6 bg-[#EEF8FB]">
            <p className="text-[#000000] font-bold">0% Hydrated</p>
            <p className="text-[#ffffff] font-bold">0.0 of 2L</p>
          </div>
        </div>
        <DrinkType />
        <DrinkVolume />
        <div>
          <button
            className=" flex items-center justify-center w-12 h-12 bg-[#000000] rounded-full ml-2"
            onMouseDown={() => {
              if (navigator.vibrate) {
                navigator.vibrate(100);
              }
            }}
          >
            <FaPlus className="text-[#ffffff] text-lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default DrinkPage;
